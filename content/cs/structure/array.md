---
title: 배열
aliases:
  - array
description: 가장 기본적인 자료구조, 배열
draft: false
tags:
  - cs/structure
permalink: /array
created: 2025-03-22T15:16
updated: 2025-05-28T21:23
socialImage: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemJwczQ4ZTV3NzNrbGVreXVjZGtzdzRoN3JoNXgxNTQ1YzlkZmNyaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2QEkuf4oMtqSuKR2/giphy.gif
---
<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemJwczQ4ZTV3NzNrbGVreXVjZGtzdzRoN3JoNXgxNTQ1YzlkZmNyaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2QEkuf4oMtqSuKR2/giphy.gif" alt="note title" width="300">
</p>

# 배열

**배열**이란 무엇일까? 배열은 다른 말로 "나열"과 같다. [[memory|메모리]] 공간을 차지하는 여러 요소들을 순차적으로 나열된 자료구조를 말한다. ^68ebcd

배열의 특징 중 하나는, 시작은 무조건 $0$ 부터 시작한다는 점이다. 이를 **인덱스 (Index)** 라고 한다. 인덱스 덕분에 배열의 요소를 식별할 수 있다.

## 요소 접근 및 수정

배열의 인덱스를 통해 요소에 접근하는 [[time-space-complexity#^13c6e6|시간 복잡도]]는 어떻게 될까? 이미 나열된 배열의 각각의 요소는 인덱스 덕분에 각각을 식별할 수 있기 때문에 $O(1)$ 의 시간 복잡도로 일정하다. 마찬가지로 요소를 수정할 때도 $O(1)$ 이다.

- 배열 내 요소에 접근: $O(1)$
- 배열 내 요소를 수정: $O(1)$

그렇다면 배열에서 "앞부터 순서대로 특정 요소가 있는지" 찾는 연산의 시간 복잡도는 어떻게 될까? 배열의 맨 앞 인덱스부터 차례대로 `접근`할 것이다. 즉, $O(1)$ 이 여러 번 반복될 것이다. 그렇기 때문에 배열의 개수 만큼 속도가 진행될 것이다.

## 요소 추가 및 제거

마찬가지로 배열 내에 요소를 추가하거나 삭제하는 것도 마찬가지다. 인덱스는 `식별자` 이면서 `순서`를 가지고 있기 때문에 배열 내 요소를 추가한다면 해당 요소를 추가한다. 삭제도 마찬가지다. 이 때 추가 및 삭제 후에는 배열의 인덱스를 재 부여하기 위해 `정렬`을 하기 때문에 $n$번의 반복이 필요하다. 따라서 $O(n)$이 된다.

- 배열 내 요소를 순차로 접근: $O(n)$
- 배열 내 요소를 추가: $O(n)$
- 배열 내 요소를 삭제: $O(n)$

## 배열의 차원

배열은 기본적으로 한 쪽 방향으로 요소가 나열되는 일차원적인 구조를 띄지만 차원수로 배치하여 다차원 구조를 띄기도 한다. 

## 정적 배열 동적 배열

배열은 크게 두 가지로 분류가 가능하다. 정적 배열과 동적 배열. 프로그래밍에서의 `정적`은 `고정`과 같고, `동적`은 `유연`과 같은 말이다.

따라 쉽게 말하면 **정적 배열**은 **고정된 배열**이고 **동적 배열**은 **유연한 배열**이다. 

- 정적 배열
	- 고정된 배열
	- 프로그램을 실행하기 전 크기가 고정
	- 그 이상의 요소를 할당할 수 없음
- 동적 배열
	- 유연한 배열
	- 프로그램을 실행하기 전 배열의 크기를 어려운 경우
	- **벡터 (Vector)** 라는 이름으로 구현한 언어도 있음

</br></br></br>
# 참고자료
※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 기반으로, 다양한 자료를 참고해 작성했습니다.