---
title: Celery & Redis
aliases:
  - celery-redis
description: 파이썬 비동기 작업 큐 프레임워크 Celery
draft: false
tags:
  - backend/infrastructure
permalink: /celery-redis
created: 2025-03-22T15:16
updated: 2025-06-04T15:27
socialImage: https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXptNGU5aWxqZDJsOGVnbDFudzh6ZWEzZzFsZ2pvN2ZreW51bHphdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ilDH0xU9gripqSl0XL/giphy.gif
---
<p align="center">
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXptNGU5aWxqZDJsOGVnbDFudzh6ZWEzZzFsZ2pvN2ZreW51bHphdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ilDH0xU9gripqSl0XL/giphy.gif" alt="note title" width="300">
</p>

# Celery의 Broker, Redis

[[backend/infrastructure/celery|Celery]]는 [[backend/infrastructure/celery#^6a9fc4|Broker]] 없이 실행되지 않는다.  
Celery는 작업을 바로 실행하지 않고 큐에 넣어두는 구조를 보이기 때문이다.  

> 따라서 반드시 **이 작업을 임시로 저장해줄 중간 큐**, **브로커**가 필요하다.

## 왜 Redis

Celery에서 Redis를 사용하는 이유가 무엇일까? 그 이유는, Redis가 빠르고 가벼우며 공식적으로 지원하는게 가장 큰 특징으로 볼 수 있을 것이다.

1.  빠르고 가볍다
	- Redis의 특징으로 인메모리 기반, 싱글 스레드 처리, 설정이 쉽다
	- 개발/테스트 환경에서 사용하기 가장 쉽다

2. Celery가 공식적으로 Redis를 지원한다.
	- Celery는 Redis를 브로커 뿐 아니라 [[backend/infrastructure/celery#^b36b4b|result backend, 결과 저장소]]로 사용이 가능하다

```python
CELERY_BROKER_URL = "redis://~"
CELERY_RESULT_BACKEND = "redis://~"
```

3. 실무에서도 많이 사용한다
	- 개발용
	- 소규모 서비스
	- 실시간 처리

##  코드 예제

`Celery`를 Broker `Redis`를 사용한다면 다음과 같다.

```python
from celery import Celery

app = Celery(
	"task",
	broker="redis://~",
	backend="redis://~",
)
@app.task
def add(x,y):
	return x+y
```

- 작업 실행

```python
add.delay(3, 5) #작업 요청
```

- 워커 실행

```python
celery -A tasks worker --loglevel=info
```

-  결과 확인

```python
result  = add.delay(4, 6)
result.ready() # 작업 완료 여부 (T/F)
result.get() # 결과
```

</br></br></br>
# 참고자료
