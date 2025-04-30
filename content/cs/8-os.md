---
title: 운영체제
aliases:
  - os
description: OS, 운영체제란 무엇인가
draft: false
tags:
  - CS/computer
permalink: /os
created: 2025-03-22T15:16
updated: 2025-04-29T15:24
socialImage: https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmpqaTI3ZXo5aGZheW5zNXV4aTV1dGsxb2U1NXIxN3dteWhmMHRtZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WsJzXF8M8tl6w/giphy.gif
---
<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmpqaTI3ZXo5aGZheW5zNXV4aTV1dGsxb2U1NXIxN3dteWhmMHRtZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WsJzXF8M8tl6w/giphy.gif" alt="OS" width="300">
</p>

# 운영체제란

운영체제는 프로그램 간의 실행을 돕고, 다양한 하드웨어 자원들을 프로그램에 배분하는 **프로그램**이라고 보면 된다. 대표적으로 윈도우, 맥OS, 리눅스는 데스크탑 운영체제이고, 안드로이드와 iOS는 스마트폰 운영체제로 사용되고 있다. 데스크탑과 스마트폰의 운영체제는 약간의 다른 기능을 보이지만, 핵심 서비스는 동일하다. 즉, 하드웨어를 운용할 수 있게 하는 프로그램이라는 정의이다.

## 운영체제의 기능

운영체제에는 2가지의 핵심 기능이 있다. "자원 할당 및 관리" 그리고 "프로세스 및 스레드 관리" 이다. 운영체제의 기능을 보면 다음과 같다.  

1. 운영체제
	1. 운영체제 구조
		1. [[8.1-kernel|커널: 운영체제의 엔진]]
		2. [[8.2-system-call|시스템 콜]]
		   </br></br>
	2. 프로세스 및 스레드 관리
		1. [[9-process-n-thread|프로세스와 스레드]]
		2. [[10-sync-deadlock|동기화 와 교착상태]]
		   </br></br>
	3. **자원 할당 및 관리**
		1. [[11-cpu-scheduling|CPU 자원관리, CPU 스케줄링]]
		2. 메모리 관리: 가상 메모리
		3. 파일/디렉터리 관리: 파일 시스템

※ 각 구성 요소에 대한 자세한 설명은 링크된 노트에서 확인할 수 있다.
## 운영체제의 역할

운영체제의 핵심 기능 중 하나는 **자원 할당 및 관리**이다. 그렇다면 운영체제가 다루는 "자원"은 무엇인지 우선하여 이해해야 한다. 운영체제는 프로그램이니 여기서 나오는 자원은 "**시스템 자원**"을 의미한다.  

시스템 자원이란 프로그램 실행에 마땅히 필요한 요소를 의미한다. 실행에 필요한 **데이터**를 자원, 소프트웨어 라고도 하고, 실행에 필요한 **부품**, 하드웨어 또한 자원이 될 수 있다. 

운영체제는 사용자가 실행하는 응용 프로그램을 대신하여 [[3-cpu|CPU]], [[4-memory|메모리]], [[5-secondary-storage|보조 기억 장치]] 등의 컴퓨터 부품에 접근하고, 각각의 부품들이 효율적으로 사용되게 한다. 또한 응용 프로그램이 컴퓨터 부품들을 효율적으로 할당 받아 문제 없이 실행될 수 있도록 자원을 할당한다.
</br></br></br>
# 참고자료
※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 기반으로, 다양한 자료를 참고해 작성했습니다.