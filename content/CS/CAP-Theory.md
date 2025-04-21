---
title: CAP 이론
aliases:
  - cs/cap
description: CAP
draft: true
tags:
  - cs/backend
permalink: cs/cap
---
# CAP Theory
## 분산시스템이란

^5d7ea6

>  분산 시스템은 여러 User와 Server, Database가 있는 환경에서 원활하게 작동될 수 있도록 시스템을 구성하는 것. 특히 `Scale`이 중요하다. User가 많아졌을 때, 이를 어떻게 해결할 것 인가.
>  그렇기 때문에, User가 많은 Scale이 있을 때, Application을 만들 때 중요한 요소라는 것이다.

---
## So, Why CAP?
CAP 이론은 3가지의 특징을 갖고 있다. 하지만 우리가 무언가의 Application을 개발할 때, 이 3가지 중 2가지를 정해야 한다. 왜냐하면 빠르면서도 정확한 Application은 존재하지 않기 때문이다.(속도와 정확도는 `tradeoff` 관계라고 볼 수 있다).  

CAP 이론을 선택할 때는 3가지 중 2가지를 골라야 하지만, 그 중 하나는 [[#^a14d2c|분산]] 특징이 기본으로 선택이 되어야 한다. 앞서 언급한 [[#^5d7ea6|분산 시스템]]과 같이, `대규모 Scale`에 있어서 User가 Application을 이용할 때 Server와 Database의 과부하를 줄여 불편함을 줄일 수 있기 때문이다.

따라서 Application 목표에 맞게 남은 2가지, [[#^db094f|일관성]]과 [[#^e150b7|가용성]] 중 하나를 선택해야 한다. 

---
## **C (Constistency, 일관성)**
^db094f

일관성이란, "서버와 클라이언트와의 데이터 일관성" 이라고 볼 수 있다. 0.1초 차이에도 절대 다르면 안되는 금융 서비스 들이 일관성이 중요한 앱(App)이라고 보면 된다. 

## A (Availability, 가용성)
^e150b7

가용성은 데이터의 업로드 시점이 조금 늦어도 되지만 속도나 끊김이 없어야 하는 앱의 특징을 의미한다. 가령 인스타그램이 1시간 동안 작동되지 않는다면 가용성에 대해서 실패한 앱이라고 볼 수 있다.

## P (Partition Tolerance, 분산)
^a14d2c
