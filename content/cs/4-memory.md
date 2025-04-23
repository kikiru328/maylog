---
title: 메모리와 캐시메모리
aliases:
  - memory-cache-memory
description: 저장을 위한 기억 장치
draft: true
tags:
  - CS/computer
permalink: /memory
created: 2025-04-22T00:07
updated: 2025-04-22T16:18
---
<p align="center">
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanNrbGRjZm91OHdzeG0xbnEzcmFxaTYzaXAyZzR1N3IweHNyb3RxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BkfAhfmX0Ppn2/giphy.gif" alt="memory" width="300">
</p>

##  메모리와 캐시 메모리

핵심 부품 중 주 기억 장치는 **메모리**라고 통칭한다. 메인 메모리에는 RAM과 ROM으로 구성되어 있지만, 일반적으로 메모리는 RAM을 지칭한다. 모든 명령어를 처리하기 위해서는 CPU가 읽고, 해석하고, 실행하는 것 들은 어디에 저장이 되어 있어야 만 한다. 즉, **실행 중인 프로그램을 구성하는 데이터와 명령어를 저장**하는 곳이 바로 **메모리**다.

다만, 메모리의 경우 **주소**의 위치에 **휘발성**이 강하게 저장하는 특징을 보인다. 저장된 내용은 각각의 **주소**를 가지고 있어, CPU는 해당 주소를 통해 명령어와 데이터를 찾아낸다. 컴퓨터는 수 많은 데이터와 명령어를 활용하여 프로그램을 실행하는데, 이를 RAM에다가 계속해서 저장할 수는 없다. 따라서 전원이 공급되고 있지 않을 때는 삭제하는 **휘발성**의 특징을 지닌다. 컴퓨터가 느려지면 재부팅 하는 것이 이 RAM을 초기화 한다고 보면 된다.

CPU와 메모리 사이에는 **캐시 메모리**가 있다. 캐시 메모리는 CPU가 조금 더 빨리 메모리에 접근 할 수 있도록 하는 저장장치다. CPU 안에 있기도 하고 여러 방향으로 존재한다.



# 참고자료

※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 기반으로, 다양한 자료를 참고해 작성했습니다.