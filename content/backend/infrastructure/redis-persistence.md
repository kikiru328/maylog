---
title: Redis 영속화
aliases:
  - redis-persistence
description: 인메모리 Redis 데이터를 디스크에 저장하는 방식
draft: false
tags:
  - backend/infrastructure
permalink: /redis-persistence
created: 2025-03-22T15:16
updated: 2025-06-04T14:53
socialImage: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeng0aHp5Z3ZyejU5NjVlbWRuYzE2cmxlMzYwc21lZmF1YmVicTJncyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/i1Z4CeER9kmtqnppWE/giphy.gif
---
<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeng0aHp5Z3ZyejU5NjVlbWRuYzE2cmxlMzYwc21lZmF1YmVicTJncyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/i1Z4CeER9kmtqnppWE/giphy.gif" alt="note title" width="300">
</p>

# Redis 데이터 영속화 방식

[[backend/infrastructure/redis|Redis]]는 인메모리 방식이므로, 모든 데이터는 전원이 꺼지면 사라지는 **휘발성 메모리**에 저장된다. 그렇기 때문에 서버가 끊기거나 전원 장애, 재시작시 데이터가 유지되지 않는다.

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
	- 고 빈도 쓰기에 적합하다.
- 단점
	- 파일이 커질 경우 압축이 필요하다
	- 복구 시간이 길어질 가능성이 높다.

**Redis**는 RDB, AOF 방식을 모두 수행한다.  
AOF 파일이 있다면 AOF 를 사용해 복구하지만 없다면 저장된 `.rdb`파일을 사용하여 복구하기 때문에 영속성이 유지될 수 있다.
</br></br></br>
# 참고자료
