---
title: Redis의 삭제 정책
aliases:
  - redis-eviction-policy
description: Redis 내 데이터를 삭제하기에 필요한 정책, eviction
draft: false
tags:
  - backend/infrastructure
permalink: /redis-eviction
created: 2025-03-22T15:16
updated: 2025-06-04T14:52
socialImage: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXE3dnJqbHV2OW92djFsY2I5aWE5amNldWJ3YzR5MWhnNmVyc3Z6dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XGNafjOYE7g88/giphy.gif
---
<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXE3dnJqbHV2OW92djFsY2I5aWE5amNldWJ3YzR5MWhnNmVyc3Z6dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XGNafjOYE7g88/giphy.gif" alt="note title" width="300">
</p>

# Redis Eviction Policy

[[backend/infrastructure/redis|Redis]]는 [[cs/architecture/memory#^fc21bd|RAM]]을 사용하는 인메모리 기반 저장소다. 따라서 저장소의 용량이 초과된다면 Redis를 사용할 수 없다. 따라서 RAM이 가득 찼을 때, Redis는 기존에 저장된 데이터 중 **일부**를 삭제해서 공간을 확보해야 한다.

## Eviction Policy 종류

Redis는 삭제를 요청에 맞게 진행하게 된다. Redis의 Eviction Policy는 이 요청들을 의미한다.

| Policy            | 제거 대상       | 설명                                                              |
| ----------------- | ----------- | --------------------------------------------------------------- |
| `noevictgion`     | X           | 메모리 초과 시 오류 반환 (Default)                                        |
| `allkeys-lru`     | All Keys    | 가장 적게 사용된 키 삭제 (LRU; Least Recently Used)                       |
| `volatile-lru`    | TTL 있는 Keys | [[backend/infrastructure/redis#^19c8f5\|TTL]] 설정된 키 중 LRU 기준 삭제 |
| `allkeys-random`  | All Keys    | 모든 키 중 랜덤하게 삭제                                                  |
| `volatile-random` | TTL 설정 Keys | TTL  키 중 랜덤하게 삭제                                                |
| `volatile-ttl`    | TTL 설정 Keys | 가장 빨리 만료될 키                                                     |

- **allkeys-lru**
	- 캐시에 모든 데이터를 저장하다가 공간 부족시
	- 가장 덜 사용된 키부터 삭제
	- 가장 많이 사용되는 정책이다
- **Volatile-lru**
	- TTL이 설정된 키들만 대상으로
	- 가장 덜 사용된 키부터 삭제
	- 캐시 전용 Redis로 쓰는 경우에 적합
- **noeviction**
	- 아무 키도 삭제되지 않는다.
	- 메모리 초과 시 새 데이터를 사용할 수 없다.
- **allkeys-random, volatile-random**
	- 사용량과 상관없이 무작위 삭제
	- 예측 불가로 실전에서 사용이 어려움
- **volatile-ttl**
	- TTL 설정된 키 중, 만료까지 가장 적은 키부터 삭제
	- TTL 기반 서비스에 한해 예측 가능성 확보로 사용한다.

## 확인 방법

1. 현재 eviction 정책 확인 

```bash
CONFIG GET maxmeory-policy
```

2. 제거된 키 확인

```bash
INFO stats
# evicted_keys:12345
```

## TTL 만료 처리 방식

Redis에는 TTL을 설정해서 일정 시간이 지나면 해당 키를 삭제해야 한다. 하지만 이 만료 처리를 어떻게 하냐에 따라 성능과 효율성이 다르다.

1. Lazy Expiration 
	- 해당 키에 실제로 접근 시, 만료되었는지 확인하고 삭제
	- 장점
		- CPU 낭비가 없음. (요청시 접근)
	- 단점
		- 만료된 키가 메모리에 존재할 수 있음
		- 메모리 비효율 발생 가능
2. Eager Expriation
	- Redis 내부적으로 주기적 샘플링을 해 TTL이 만료된 키를 삭제
	- Redis 이벤트 루프 내 일정 간격으로 자동 수행
	- 장점
		- 오래된 데이터를 자동으로 정리
		- 메모리 누수 위험 삭제
	- 단점
		- 모든 키를 검사하지 않음. (랜덤 샘플링)
		- 순간 부하 가능성

실제로는 두 방식이 병행하면서 사용되어 성능과 메모리 효율을 동시에 챙긴다. 키에 접근하게 되면 lazy Expiration 여부를 확인하고, 백그라운드에서 Eager Expiration을 수행한다.

## 데이터 영속화 방식

Redis는 인메모리 방식이므로, 모든 데이터는 전원이 꺼지면 사라지는 **휘발성 메모리**에 저장된다. 그렇기 때문에 서버가 끊기거나 전원 장애, 재시작시 데이터가 유지되지 않는다.

이러한 문제를 해결하기 위해 디스크에 저장해서 다시 켰을 때 복구할 수 있게 하는 방법이 바로 **영속화(Persistence)** 라고 한다.

Redis가 데이터를 유지하기 위해서는 크게 2가지 방식으로 저장할 수 있다.

### RDB

RDB, Redis Database SnapShot 이라고 한다. 쉽게 설명하자면 주기적으로 Redis에 저장된 데이터를 디스크에 저장하는 것이다. 사진의 스냅샷을 찍듯 `.rdb`파일로 남겨 저장한다.
- 장점
	- 복구가 빠르다
	- 파일 크기가 작다
	- 백업에 용이
- 단점
	- 마지막 저장 이후 변경된 데이터 복구 X
	- 저장 순간에만 기록되기 때문에 데이터 손실 가능성 존재

### AOF

AOF, Append Only File. Redis에 들어오는 모든 쓰기 명령어를 파일에 모두 기록한다. 재시작시 이 로그들을 순차적으로 재실행해서 복구 한다.
- 장점
	- RDB보다 안전하다. (최근 변경 보존)
	- 고빈도 쓰기에 적합하다.
- 단점
	- 파일이 커질 경우 압축이 필요하다
	- 복구 시간이 길어질 가능성이 높다.

**Redis**는 RDB, AOF 방식을 모두 수행한다. AOF 파일이 있다면 AOF 를 사용해 복구하지만 없다면 저장된 `.rdb`파일을 사용하여 복구하기 때문에 영속성이 유지될 수 있다.
</br></br></br>
# 참고자료
