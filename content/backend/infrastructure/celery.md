---
title: Celery
aliases:
  - celery
description: 파이썬 비동기 작업 큐 프레임워크 Celery
draft: false
tags:
  - backend/infrastructure
permalink: /celery
created: 2025-03-22T15:16
updated: 2025-06-04T15:39
socialImage: https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWNlc3FuZnZwajF6Zm81N3ZoOXB6eGI5Y3AweTI0Y2g3dG51a3g3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oWXYimsCBxvB6/giphy.gif
---
<p align="center">
  <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWNlc3FuZnZwajF6Zm81N3ZoOXB6eGI5Y3AweTI0Y2g3dG51a3g3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oWXYimsCBxvB6/giphy.gif" alt="note title" width="300">
</p>

# Celery 란

Celery는 파이썬에서 가장 많이 쓰이는 [[backend/performance/sync-async#^af7513|비동기]] 작업 큐 프레임워크이다. 시간이 오래 걸리는 작업을 백그라운드에서 따로 처리를 해주는 시스템이기에 python backend에서 자주 사용되는 프레임워크다.

## 특징

1. **비동기 작업 처리**
	- 웹 요청과 분리해서 처리
	- 사용자는 빠르게 응답을 받고, 작업은 백그라운드에서 수행

2. **분산 시스템 구조**
	- 여러개의 Worker를 띄워 **병렬 처리**
	- 여러 서버에 나눠서 실행할 수 있어 확장성이 뛰어남

3. **다양한 브로커 지원**
	- 작업을 임시 저장하는 메시지 브로커로 여러 시스템 사용
		- [[backend/infrastructure/redis|redis]]
		- RabbitMQ
		- Amazon SQS
		- [[backend/messaging/kafka|Kafka]]

4. **다양한 Result  Backend 지원**
	- 작업 완료 여부를 확인 가능.
	- 결과 저장이 필요할 때 백엔드 저장소 설정이 가능하다.

5. **우수한 설정 유연성**
	- 재시도, 우선순위, 타임아웃, 예약 실행 등 다양한 제어가 가능

6. **주기적 작업 스케줄링**
	- 정해진 시간이나 주기에 따라 작업 자동 실행 가능
	- `cron`, `interval`, `solar`등 다양한 시간 표현 방식 지원

7. **웹 프레임워크와 쉬운 통합**
	- `Django`, `Flask`, `FastAPI`등 대부분의 웹 프레임워크와 연동 가능

8. **모니터링 도구 지원**
	- 작업 실행 상태, 실패, 지연 시간 등을 시각적으로 확인이 가능하다.

## 구성

| 구성요소                 | 역할                        |
| -------------------- | ------------------------- |
| Web Server           | 사용자 요청을 받고 작업을 Celery에 전달 |
| Celery               | 작업을 정의, 브로커에 전달           |
| Broker               | 작업 큐를 저장하는 중간 매개체         |
| Worker               | 작업을 백그라운드에서 처리하는 실행 엔진    |
| Result Backend       | 작업 결과를 저장하는 선택적 구성 요소     |
| (Optional) Scheduler | 주기적인 작업 등록                |

## 동작 구조

```mermaid
graph LR
	A["Celery에 작업 요청"]
	B["작업 큐(Redis 등)에 저장"]
	C["워커(Worker)가<br/>백그라운드에서 실행"]
	사용자 --> 웹서버 --> A --> B --> C
```

1. 사용자가 **Producer (웹서버)** 에 요청
2. **Producer**는 **Celery**에 작업을 요청
3. **Broker (큐)** 는 Redis, RabbitMQ 등 요청된 작업을 임시 저장한다. ^6a9fc4
4. **Worker** 는 대기 중 작업을 백그라운드에서 실행한다
5. **Result Backend (선택)** 작업 결과 저장 (Redis, DB 등) ^b36b4b

## Celery 사용 예제

- 이메일 전송
- 이미지/영상 처리
- 주기적 작업 스케쥴링 (`celery beat`)
- 대용량 크롤링/데이터 분석

### 사용 예시

```python
# Celery 설정

from celery import Celery

app = Celery("task", broker="redis://~")

@app.task
def send_email(to):
	print(f"sending email to {to}")
```

```python
send_email.delay("user@example.com")
#비동기 실행
```

</br></br></br>
# 참고자료
