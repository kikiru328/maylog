---
title: Operating System
aliases:
  - operating-system-contents
description: Operating System Contents
draft: false
tags:
  - CS/computer
permalink: /operating-system-contents
created: 2025-03-22T15:16
updated: 2025-05-08T17:36
socialImage: https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmpqaTI3ZXo5aGZheW5zNXV4aTV1dGsxb2U1NXIxN3dteWhmMHRtZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WsJzXF8M8tl6w/giphy.gif
---
<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmpqaTI3ZXo5aGZheW5zNXV4aTV1dGsxb2U1NXIxN3dteWhmMHRtZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WsJzXF8M8tl6w/giphy.gif" alt="OS" width="300">
</p>

# 운영체제

운영체제(OS)는 **하드웨어와 소프트웨어를 중재하는 핵심 시스템**으로, 사용자가 컴퓨터를 효율적이고 안정적으로 사용할 수 있도록 돕는다.  
운영체제의 핵심 기능은 크게 **두 가지**로 요약된다:

- **자원의 효율적 관리 및 할당**
    
- **프로세스 및 스레드 제어를 통한 실행 환경 제공**
    

운영체제는 단순히 컴퓨터를 '켜고 끄는' 역할이 아닌, 복잡한 자원 조율과 실행 제어를 통해 **전체 시스템의 중심축**으로 작동한다.  
운영체제의 구성과 기능은 다음과 같이 정리할 수 있다.

---

## 1. 운영체제의 구조

운영체제의 기반이 되는 구조와, 사용자와 커널 사이의 소통 방식에 대한 이해는 모든 OS 학습의 출발점이다.

- [[08.1-kernel|커널: 운영체제의 엔진]]  
    : 하드웨어 제어, 메모리 관리, 시스템 호출 처리 등을 담당하는 OS의 핵심 구성 요소이다.
    
- [[08.2-system-call|시스템 콜]]  
    : 사용자 프로그램이 커널 기능을 사용할 수 있도록 하는 인터페이스. 응용 프로그램과 운영체제를 연결하는 '문' 역할을 한다.
    

---

## 2. 프로세스 및 스레드 관리

현대의 운영체제는 다수의 프로그램을 동시에 실행하는 **멀티태스킹 환경**을 지원하며, 이를 위해 프로세스와 스레드를 세밀하게 제어한다.

- [[09-process-n-thread|프로세스와 스레드]]  
    : 실행 단위(프로세스)와 경량 실행 단위(스레드)의 차이 및 구조 이해
    
- [[10-sync-deadlock|동기화와 교착상태]]  
    : 여러 프로세스 간 자원 충돌을 막기 위한 동기화 기법, 그리고 자원 경합에 의해 시스템이 멈추는 교착 상태(Deadlock)에 대한 대응 전략
    

---

## 3. 자원 할당 및 관리

운영체제의 또 다른 핵심 기능은 한정된 시스템 자원(CPU, 메모리, 저장장치 등)을 **공정하고 효율적으로 분배**하는 것이다.

- [[11-cpu-scheduling|CPU 자원관리, CPU 스케줄링]]  
    : 여러 프로세스가 CPU를 사용하는 순서를 결정하는 알고리즘. 선점/비선점 방식, 다양한 우선순위 기반 스케줄링
    
- **메모리 관리: 가상 메모리**  
    : 실제 메모리보다 큰 공간을 사용할 수 있게 해주는 기법. 페이징, 스와핑 등의 개념 포함
    
- **파일/디렉터리 관리: 파일 시스템**  
    : 데이터를 저장하고 접근하는 기본 단위로, 트리 구조와 권한 관리 등 OS 설계의 필수 요소
    

---

※ 각 항목에 대한 구체적인 설명과 예시는 **링크된 노트**에서 확인할 수 있습니다.