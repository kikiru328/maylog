---
title: IT 5분 잡학사전
aliases:
  - it-5min
description: IT 5분 잡학사전을 읽고
draft: false
tags:
  - literatures/thoughts
permalink: /it-5min
created: 2025-03-22T15:16
updated: 2025-06-04T08:42
socialImage: https://media.tenor.com/Qg1iDHP_xWQAAAAi/simple-grady-smith.gif
---
<p align="center">
  <img src="https://media.tenor.com/Qg1iDHP_xWQAAAAi/simple-grady-smith.gif" alt="note title" width="300">
</p>

# 독후감
##### 책표지
<p align="center">
  <img src="https://books.google.co.kr/books/publisher/content?id=JxaMEAAAQBAJ&hl=ko&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U2r7rfCK7pGWZNorKk-Sq4lwS8jKA&w=1280" alt="note title" width="200">
</p>

`IT 5분 잡학 사전`을 읽으면서 가장 인상 깊었던 점은, 개발자를 '논리적 사고를 통해 끈기 있게 문제를 해결하는 직업'이라고 정의한 부분입니다. 단순히 코드를 작성하는 기술자가 아닌 `문제 해결자`로서의 개발자 본질이 중요하다는 것입니다.  

오류 해결법에서 `컴퓨터는 잘못이 없다`라는 구절은 제게 큰 깨달음을 주었습니다. 개발을 하면서 자주 마주치는 오류들을 컴퓨터나 시스템 탓으로 돌리기보다, 내 코드를 더 깊이 들여다보아야 한다는 점을 상기시켜 주었습니다.

라이브러리와 프레임워크의 차이를 설명하는 부분도 흥미로웠습니다. 특히 '제어를 당하는 입장'이라는 표현이 프레임워크의 특성을 정확하게 집어낸 것 같아 공감했습니다. 실제로 Django나 Spring을 사용하면서 이런 느낌을 많이 받았기 때문입니다.

Legacy Code 부분을 읽으면서는 깊은 생각에 잠겼습니다. 과거의 코드를 단순히 '낡은 것'으로 치부하지 않고, 버전 관리를 통해 의미를 보존한다는 관점이 인상적이었습니다. 이는 기술의 발전이 단순한 진보가 아닌, 축적의 과정임을 보여주는 것 같았습니다

각 개념의 본질적인 의미와 중요성을 놓치지 않았다는 점이 인상적이었습니다. 앞으로도 이 책에서 배운 내용들을 실제 개발 현장에서 적용하며, 더 나은 개발자로 성장하고 싶습니다.

---

# Content
## Episode 1 - 5
### 개발자란?
> **개발자란**, `논리적 사고`를 통해 끈기 있게 문제를 해결하는 직업이다.

### 언어
> 프로그램의 목적에 따라 언어가 다르다.  
> Embdding, System, AllRound, Web 등 여러 목적이 있고, 그에 맞는 언어가 존재한다.
### 언어를 배우는 방법
> 1. 공식 문서를 살핀다
> 2. 문법을 확인한다
> 3. 다른 언어와 비슷한 특징을 집중적으로 본다
> 4. 새 언어로 코딩을 시도한다
> 5. 튜토리얼을 따라서 카피 코딩을 한다
> 6. 나만의 프로젝트를 만든다

### 언어의 종류
> JAVA, Kotlin, JavaScript, C, Ruby, Python, Go, Rust ...  

## Episode 6 - 10
### 오류 해결 법
> 개발 중 생성되는 오류는 불가피하며, 해결할 수 없다. 아니 에러가 훨씬 낫다.  
> 1. 에러는 내가 잘못해서 생긴 것이다. (컴퓨터는 잘못이 없다.)  
> 2. 오류부터 고치려고 하지 말고, 뭐가 잘 못 됐는지 확인부터 하자.  
> 3. 오류 메세지를 읽자.

### Compile vs Interpreter
> 컴파일은 통 번역을 의미한다. 다 읽고 오류가 난 부분을 알려준다. 그러니까 빠르다.  
> 인터프리터는 동시 번역가다. 한 줄 한 줄 읽고 알려주기 때문에 느리다.

## Episode 11 - 15
### Library Vs FrameWork
> Library는 내가 제어하는 기능 중 하나 다. eg, Pandas. 정해진 포맷이 없으며 단순한 기능들을 활용해서 사용할 수 있다.  
> 반면 FrameWork는 포맷이 정해져 있어, 정해진 포맷 이외 사용이 어렵다. eg. PyTorch. 즉, 내가 제어를 `당하는`입장이다.

### API
>API는 **Application Programming Interface**. 즉, 기능이 작동되게 끔 하는 연결 통로.  

### Domain
> URL 도메인을 의미한다. 원래는 숫자인데 문자열로 바꾼 것. 너무 많은 Domain은 중복의 위험이 있고 보안의 위험을 최소화하기 위해 유로로 진행되고 있다.

### Flash
> **RIP**

## Episode 16 - 21
### Internet Explorer
> **RIP 22**  
> 업데이트 안 하다가 골로 간 케이스.

### Cookie
> 헨젤과 그레텔 마냥 쿠키 가루다. 유저가 웹에 방문을 했다면, 서버는 유저와 유저의 행동을 기억한다.  

### Front Vs Back end
> 사람과 가까운 기능 개발이 Front-end  
> 사람이 보이지 않는 기능 개발이 Back-end

### Server
> 24시간 작동하는 무형의 컴퓨터.  

### Full Stack
> Front와 Backend를 둘 다 할 수 있는 멋진 사람.
> DevOps, Data, DB 등 모두 할 줄 안다.  

### Serverless
> Server는 사실 유형의 서버 타워가 있다. 하지만 이제는 Cloud Service를 사용하여 Server를 운영한다. eg, AWS

## Episode 22 - 25
### 자료구조와 알고리즘
> [[content/cs/structure/index|자료구조]]와 알고리즘은 [[content/cs/index|cs]] 의 기초 덕목이다.  
> 얼마나 코드를 효율적으로 작성을 하는 지에 대한 내용을 기반하며,  
> 코딩테스트를 활용하여 효과적으로 검증한다.  

### [[time-space-complexity|시간 복잡도]]
> 쉽게 얘기하면 `얼마나 복잡하게 코드가 돌아 가느냐`를 의미한다.   
> 코드를 잘못 설계하면, 제곱 수로 연산 횟수가 늘어나기 때문에, 자료구조, 알고리즘 등등을 활용하여 시간 복잡도를 최소화 해야 한다.  

## Episode 26 - 29
### 정렬 알고리즘
> 버블 정렬, 선택 정렬, 삽입 정렬 로 나눠져 있다. 실제 데이터에 따라 맞는 정렬 알고리즘을 활용해야 한다.  

### Queue & Stack
> Queue는 줄을 세운다. 먼저 들어간 것이 먼저 나온다. (FIFO)  
> Stack은 층을 쌓는다. 즉, 먼저 들어간 것이 나중에 나온다. (FILO)

### Hash Table
> 찾기 어려운 것을 찾기 쉽게 하는 알고리즘.  해시 테이블 내 key가 중복 시 충돌이 일어나고, 해당 인덱스를 [[array#^68ebcd|배열]]로 넣는다.  

### [[clean-code|Clean Code]]
> 깨끗한 코드를 의미한다. 공유의 목적이 크다.
> Python은 PEP 8 처럼 규칙이 있기도 하다.  

## Episode 30 - 34
### Legacy Code
> 예전, 과거에 작성해둔 코드다.  
> 당시 기술에는 최신의 기술이지만, 지속적인 refactoring을 통해 최신으로 업데이트를 요한다.  
> 하지만 지우지 않고 버전 관리를 통해 의미를 퇴색시키지 않는다.  

### SQL
> Structured Query Language. 구조화된 질문 언어.  
> 데이터베이스에서 `어떤 구조를 통해 질문을 했을 때, 원하는 데이터를 얻을 수 있는 지`에 대해 사용하는 언어이다.

### No SQL
> SQL의 정반대. 구조화되지 않는 데이터베이스를 의미한다.  Dictionary 형태를 대부분 띄고, Node 형태도 있다.

### Git & Github
> Git은 개발 행동을 관리하는 프로그램. Github는 그걸 모아두는 플랫폼  

### Version
> 버전 관리는 `SemVer`방식을 사용한다.   
> 첫째 자리는 큰 버전, 중간은 마이너 한 업데이트, 마지막은 사소한 패치 및 버그 해결  

## Episode 35 - 38
### Password
> 비밀번호를 저장 시, Hash 함수를 활용해 무작위 성을 기입한다.  
> 하지만 요즘은 SALT (무작위 텍스트)를 활용해 비밀번호를 저장한다.  

### OOP
> Object Oriented Programming. 객체 지향 프로그래밍이다.  Python, JAVA 등이 여기에 포함한다.  클래스와 메서드를 통해 코드를 정리하는 방식이다.   


</br></br></br>
# 참고자료
