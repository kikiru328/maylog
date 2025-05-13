---
title: 컴퓨터 구조
aliases:
  - computer-architecture
description: 컴퓨터 과학은 컴퓨터를 아는 것 부터.
draft: true
tags:
  - cs/computer
permalink: /computer-architecture
created: 2025-04-21T17:59
updated: 2025-05-13T17:39
socialImage: https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN29haW93dmxyaTU5MTQwNzdzdmhnYnI4Nmg0a2d5Mmd6ZmtpcXRuOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CTX0ivSQbI78A/giphy.gif
---
<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN29haW93dmxyaTU5MTQwNzdzdmhnYnI4Nmg0a2d5Mmd6ZmtpcXRuOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CTX0ivSQbI78A/giphy.gif" alt="computer structure" width="300">
</p>

# 컴퓨터 구조

CS는 말 그대로 "Computer Science", 즉 **컴퓨터에 관한 과학적 지식**을 다룬다.  
컴퓨터를 제대로 이해하려면 단순한 프로그래밍 언어의 문법이나 도구 사용법에 그치지 않고, **컴퓨터가 어떻게 구성되어 있고, 어떤 원리로 동작하는지**에 대한 구조적 이해가 필요하다.

컴퓨터는 생물학적 유기체처럼 다양한 부품들이 유기적으로 연결되어 동작한다.  
이러한 컴퓨터의 구조는 다음 두 가지 큰 축으로 나눌 수 있다:

---

## 1. 컴퓨터가 이해하는 정보

컴퓨터는 우리가 작성한 코드를 직접 이해하지 못한다.  
그 대신 **0과 1**, 즉 **이진수(Binary)**로 변환된 데이터를 해석하여 동작한다. 이 과정에는 숫자, 문자, 명령어 등의 다양한 정보 표현 방식이 포함된다.

- [[02-readable-data|컴퓨터가 이해하는 정보]]
    
    - [[02-readable-data#^4ee50a|데이터]]
        
        - [[02-readable-data#^765d0b|0과 1로 숫자 표현하기]]
            
            - [[02-readable-data#^8ae234|정수]]
                
            - [[02-readable-data#소수 부동 소수점|실수]]
                
        - [[02-readable-data#문자는 어떤 방식으로 인식될까|0과 1로 문자 표현하기]]
            
    - [[02-readable-data#^714810|명령어]]
        
        - [[02-readable-data#연산코드 종류|명령어의 종류]]
            
        - [[02-readable-data#^4ae8c0|명령어 사이클]]
            

---

## 2. 컴퓨터의 핵심 부품

컴퓨터는 단일한 장치가 아니라, **기능별로 나뉜 다양한 하드웨어 요소들로 구성**되어 있다.  
이러한 부품들이 어떻게 동작하고 서로 어떤 방식으로 협력하는지 이해하는 것은 시스템을 효율적으로 다루는 데 핵심이 된다.

- [[03-cpu|CPU]] (중앙처리장치): 연산과 제어의 중심으로, 컴퓨터의 '두뇌'에 해당한다.
    
    - [[03-cpu#CPU 구성요소|주요 구성 요소]]
        
    - 빠른 명령어 처리를 위한 기술 (파이프라이닝, 분기 예측 등)
        
- [[04-memory|메모리]]와 [[04.1-cache-memory|캐시 메모리]]: 데이터를 임시 저장하고 접근 속도를 결정짓는 핵심 요소들.
    
    - [[04-memory#우리가 자주 쓰는 RAM|RAM]]
        
    - [[04-memory#메모리에 데이터 저장 방법|엔디안]]
        
    - [[04.1-cache-memory|캐시메모리]] (계층별 구조와 캐시 히트율 등)
        
- [[05-secondary-storage|보조기억장치]]: 데이터를 장기적으로 저장하는 장치.
    
    - [[05-secondary-storage#RAID의 방식으로 보다 안전하게|RAID]]를 통한 안정성과 성능 향상 기법
        
- [[06-io-devices|입출력장치]]: 외부 세계와 컴퓨터를 연결하는 인터페이스.
    
    - [[06-io-devices#장치 컨트롤러와 장치 드라이버|입출력 기법]] (인터럽트, DMA, 폴링 등)
        

---

이처럼 컴퓨터 구조는 **정보 표현 방식과 물리적인 하드웨어 구성**이 서로 유기적으로 작용하며 이루어진다.  
각 구성 요소에 대한 세부 내용은 링크된 문서를 통해 더 자세히 확인할 수 있다.

# 참고자료

※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 기반으로, 다양한 자료를 참고해 작성했습니다.