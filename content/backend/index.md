---
title: Backend
aliases:
  - backend-contents
description: 백엔드 관련 내용을 다룹니다.
draft: false
tags: 
permalink: /backend-contents
created: 2025-03-22T15:16
updated: 2025-05-09T14:58
socialImage: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTQwdmgyaHU0ZzV3YXZnczF2c3Z4dDB2NmFmYmxyN3JsZmk5bjM4cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gWoTJPQ0JEv6Z9EJ0z/giphy.gif
---
<p align="center">
  <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2Z3Y3kza2pmZTJzb2lldTh2azQzcGR5aTFmNGY1c3B4eHAzcXZvbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qn74oPyaKYBpVWdA7t/giphy.gif" alt="note title" width="300">
</p>

# Backend

이 섹션은 **백엔드 개발자로서 필요한 실무 역량**을 중심으로 구성된 문서 모음입니다.  
FastAPI, Kafka, Docker, CI/CD 등 실제 업무에서 활용되는 기술들을 아키텍처 관점과 인프라 관점에서 정리합니다.

## 분류 안내

| 분류                                                   | 설명                                                    |
| ---------------------------------------------------- | ----------------------------------------------------- |
| [[content/backend/architecture/index\|Architecture]] | [[MSA\|마이크로서비스 설계]], 수평 확장 전략 등 시스템 구조 전반             |
| **performance**                                      | CPU Bound, I/O Bound 작업 처리 전략 등 성능 최적화                |
| [[content/backend/messaging/index\|messaging]]       | [[kafka\|Kafka]], Redis Pub/Sub 등 서비스 간 통신 및 이벤트 처리   |
| **testing**                                          | Pytest 기반 단위 테스트, Locust를 활용한 부하 테스트                  |
| **monitoring**                                       | Prometheus, Grafana를 활용한 시스템 모니터링 및 로그 분석             |
| **deployment**                                       | Docker, Kubernetes, GitHub Actions를 통한 배포 자동화 및 운영 전략 |
