---
title: CPU
aliases:
  - cpu
description: 컴퓨터의 뇌, CPU
draft: false
tags:
  - cs/computer
permalink: /cpu
created: 2025-04-21T23:59
updated: 2025-05-13T17:39
socialImage: https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW5ueTljc2tkM2ZmaTE3aXMzdnU0YmZnOWZidm5jandvNjUxMTl5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n6szplK2CnuJW/giphy.gif
---
<p align="center">
  <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW5ueTljc2tkM2ZmaTE3aXMzdnU0YmZnOWZidm5jandvNjUxMTl5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n6szplK2CnuJW/giphy.gif" alt="cpu" width="300">
</p>

# CPU 구성요소

컴퓨터는 명령어를 토대로 모든 동작을 수행한다. 즉, 명령어의 구성인 **수행할 동작**과 **대상**을 명시해야 동작할 수 있다는 것이다. 이전에 [[02-readable-data|컴퓨터가 이해할 수 있는 정보]]에서 언급한 것과 같이, 명령어 또한 0과 1로 구성해야 한다는 것이다. 그렇다면 이해할 수 있는 0과 1로 구성된 명령어는 컴퓨터의 어느 부분에서 관리를 할까? 

컴퓨터는 **수행할 동작과 그 대상 데이터**를 담은 명령어로 동작한다. 정적인 정보인 **데이터**를 동적 정보인 **명령어**와 함께 전달한다. 두 정보는 0과 1로 이루어져 있으며, 이는 **CPU**가 주체가 되어 실행한다. 즉, CPU의 종류에 따라 실행 가능한 세부적인 명령어의 종류가 다르며 처리의 양상이 달라진다.

**CPU**(Central Processing Unit)는 중앙 처리 부품을 의미한다. 쉽게 말해 컴퓨터의 "뇌"와 같다. 각종 명령어를 처리할 수 있는 기술이 중점적으로 포함한 하드웨어 부품이다. 명령어는 CPU에서 처리를 한다. 물론 CPU도 하드웨어인 만큼, 종류에 따라 실행 가능한 명령어의 종류가 다르고 처리의 형태가 당연히 다르다.

| CPU 구성 요소                         |                               |     |
| --------------------------------- | ----------------------------- | --- |
| [[03.1-ALU\|산술논리연산장치(ALU)]]       | 실질적으로 연산을 수행                  |     |
| [[03.2-CU\|제어장치(CU)]]             | 명령어를 해석, 제어 신호를 통해 부품을 작동.    |     |
| [[03.3-register\|레지스터(Register)]] | 작은 임시 저장장치, 처리하는 과정의 중간 값 저장. |     |


</br></br></br>
# 참고자료

※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 기반으로, 다양한 자료를 참고해 작성했습니다.