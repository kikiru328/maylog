---
title: 스택
aliases:
  - stack
description: 정말 많이 들어본 스택
draft: false
tags:
  - cs/structure
permalink: /stack
created: 2025-03-22T15:16
updated: 2025-05-28T21:21
socialImage: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDNkMnhvdXhsd2VvMnVpZGV6MnN1aHltMG9qNmw2OTNvMmdudnk3ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtCHRSPCuqS8E/giphy.gif
---
<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDNkMnhvdXhsd2VvMnVpZGV6MnN1aHltMG9qNmw2OTNvMmdudnk3ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtCHRSPCuqS8E/giphy.gif" alt="note title" width="300">
</p>

# 스택

**스택**. 정말 많이 들어본 단어다. 스택은 말 그대로 **쌓는다**의 의미를 가지고 있다. 한 쪽 방향에서 무언가가 들어오고 또 그 쪽 방향에서만 나가는 것을 의미한다.

한쪽에만 구멍이 있기 때문에 먼저 들어온 것은 계속해서 기다릴 수 밖에 없는 구조이고, 제일 늦게 들어온 것은 제일 먼저 나갈 수 있다. 즉, **LIFO, Last In First Out** 구조가 된다.

따라서 스택은 **한 방향에서만 데이터의 삽입 및 삭제가 가능한 자료구조**를 의미하는 것이다.

스택에 들어올 때는 먼저 들어온 것들을 `누르고` 들어오기 때문에 **Push**  
스택에서 나갈 때는 가장 바깥에 있는 것들을 `빼`버려야 하기 때문에 **Pop**이라고 한다.  

![](https://csnote.net/assets/img/ds/stack.png)

스택은 언제 사용할까? 스택의 특성에 따르면 가장 최근 것들을 먼저 활용하는데에 있어서 유리하다. 즉, 최근의 임시 저장된 데이터를 사용하거나 우리가 자주 쓰는 `뒤로가기` 기능이 Stack을 활용한다.

## 기전

stack은 그렇다면 어떻게 사용될까? 코드로 알아보자

```python
def bar(y):
	return y + 2

def foo(x):
	return x + 1

foo(1)
```

이러한 코드가 있다고 가정해보자. 함수를 풀어 쓰면 다음과 같을 것이다.

```python

# foo(1)
x = 1 # 매개변수 초기화
y = 2 # (bar(2)), 매개변수 초기화
bar(2) # 2 + 2 반환 , y 변수 삭제
foo(1) # 1 + 1 반환, x 변수 삭제
```

위 함수 호출 과정을 보면, 최근에 호출된 함수의 매개변수가 가장 먼저 활용되고 가장 먼저 메모리에서 삭제된다. (여기서는 $y$)


</br></br></br>
# 참고자료
※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 기반으로, 다양한 자료를 참고해 작성했습니다.