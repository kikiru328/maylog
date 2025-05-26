---
title: CPU & IO Bound
aliases:
  - cpu-io-bound
description: CPU Bound, I/O Bound가 무엇인지, 어떻게 해결할 수 있을지
draft: false
tags:
  - backend/performance
permalink: /cpu-io-bound
created: 2025-03-22T15:16
updated: 2025-06-04T16:42
socialImage: https://media1.tenor.com/m/dKbYD1XbhNQAAAAd/that%27s-the-bottleneck-wes-hall.gif
---
<p align="center">
  <img src="https://media1.tenor.com/m/dKbYD1XbhNQAAAAd/that%27s-the-bottleneck-wes-hall.gif" alt="note title" width="300">
</p>


# Bound

[[cs/architecture/cpu|CPU]], [[cs/architecture/io-devices|I/O]] Bound 에 대해서 알기 전에 `Bound`가 무엇일까?   

**Bound**는 "제한, 얽매이다" 라는 뜻이다. 즉 이를 보면  

- **CPU Bound**
	- 프로그램 수행 속도가 CPU의 연산 능력에 의해 제한되는 상황
- **I/O Bound**
	- 프로그램 수행 속도가 입출력 작업 때문에 느려지는 상황

어떤 자원이 속도를 결정 짓는 **병목, BottleNeck**이 되는 지를 설명하는 것이다. 어떤 자원이 "발목을 잡는가"가 바로 핵심이다.

따라서 CPU Bound, I/O Bound는 성능 분석, [[backend/performance/sync-async|비동기]] 프로그래밍, 멀티 스레딩 등을 설계할 때 중요한 개념으로 자리 잡는다.

# CPU Bound

> CPU가 너무 바빠서 일이 느린 상황

## 특징

- CPU가 계속 연산을 수행하므로 다른 작업을 기다릴 수 없음
- [[cs/architecture/cpu-upgrade#^84156b|멀티코어]] CPU라도 코드가 병렬화되어 있지 않으면 CPU 사용률이 한 코어에 몰림
- 시스템 모니터로 보면 CPU 사용률 100%
- I/O 사용률은 낮다 (빠르게 끝남)

## 원인

- 복잡한 수학/과학 계산
- CPU 중심의 작업
- 비효율적인 알고리즘 활용

### 예시

- 1억 개의 숫자 소수 판별
- 머신러닝 모델 학습 및 추론
- 복잡한 수학 시뮬레이션
- 해시 연산, 암호화/복호화

```python
def is_prime(n):
	for i in range(2, int(n**0.5) + 1):
		if n % i == 0:
			return False
	return True

primes = [x for x in range(100_000) if is_prime(x)]
```

## 해결 방안

| 전략               | 설명                                          |
| ---------------- | ------------------------------------------- |
| Multi Processing | 병렬 연산으로 CPU 활용을 극대화                         |
| GPU              | 병렬 연산에 강한 GPU로 오프로드                         |
| 알고리즘 개선          | 연산량을 줄이는 알고리즘으로 변경 $O(n^2)$ -> $O(n log n)$ |
| Cython, Numpy    | 연산에 최적화된 라이브러리 사용                           |


# I/O Bound

> CPU는 한가한데 데이터를 못 받아서 일을 하지 못함

## 특징

- CPU는 일이 바쁜데 I/O(입출력) 때문에 기다리게 됨.
- 시스템 모니터를 보면 CPU 사용률은 낮음
- 디스크/네트워크 대기가 많음

## 원인

- 느린 디스크 접근 (HDD, 대용량 파일 처리)
- 느린 네트워크 (API, 웹 크롤링)
- 외부 시스템 호출 지연
- 사용자 입력 대기

### 예시

- 웹 서버에서 클라이언트 요청을 받고 DB에 조회 후 응답
- 대용량 CSV 파일 로드하여 처리
- API를 호출하고 응답을 기다리는 작업
- 사용자의 키 입력을 기다리는 GUI 앱

```python
import requests

urls = ["https://example.com" for _ in range(100)]

for url in urls:
    response = requests.get(url)  # 네트워크 응답을 기다리는 중
    print(response.status_code)
```
## 해결 방안

| 전략        | 수행                                                                       |
| --------- | ------------------------------------------------------------------------ |
| 비동기 프로그래밍 | `async/await`, `aiohttp`, `asyncio`등으로 기다리는 동안 다른 작업 수행                  |
| 멀티스레딩     | 한 스레드가 대기 중일 때 다른 스레드가 일함                                                |
| 캐싱        | 자주 쓰는 데이터를 메모리에 저장, I/O 요청 줄이기                                           |
| 빠른 장비 도입  | [[cs/architecture/secondary-storage#^bcc087\|SSD]], 고속 네트워크, 고성능 하드웨어 개선 |


# 결론

CPU Bound와 I/O Bound는 개념적으로 병목의 **종류**를 설명하는 용어다. 하지만 실제 시스템에서는 상호작용하며 교차하고, 병목 원인이 바뀔 수 있는 유기적인 관계를 가진다.




</br></br></br>
# 참고자료
