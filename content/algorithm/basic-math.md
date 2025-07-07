---
title: 알고리즘의 기본 연산
aliases:
  - basic-math
description: 알고리즘 문제를 풀기 위해 기본 연산을 알아보자.
draft: false
tags:
  - algorithm/basic
permalink: /basic-math
created: 2025-03-22T15:16
updated: 2025-06-16T07:13
socialImage: https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTVjbHU0NjUxbDkydTUxbXpxeXZvc2M5NDIwdjUxMHR6bXh3dWFmYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gEvab1ilmJjA82FaSV/giphy.gif
---
<p align="center">
  <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTVjbHU0NjUxbDkydTUxbXpxeXZvc2M5NDIwdjUxMHR6bXh3dWFmYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gEvab1ilmJjA82FaSV/giphy.gif" alt="note title" width="300">
</p>

# 기본 연산

알고리즘 문제를 풀다 보면 수학에 관련한 문제들이 꽤나 많이 등장한다. 중, 고등학교 때 수학 공부를 놓지 않은 분들이라면 편하게 접근이 가능할 것으로 보이지만 나는 그렇지 않았다. 반성하는 입장에서 이 글을 정리하게 되었다.

알고리즘 내 기본 연산들은 [[time-space-complexity|시간 복잡도]]에서 유리한 면모가 존재한다. 반복문을 최소화로 사용하고 최대한 $O(n)$, $O(1)$ 로 사용할 수 있게 하기 때문이다.

# 나머지, 배수, 약수

우리는 중학교 혹은 초등학교 때 **나머지, 배수, 약수**에 관해서 배운다. 수에 대한 규칙을 보여주는 것이기에 알고리즘의 기초에 포함된다.

> [!note] $N$ & $i$
> $N$ : 고정 된 수
> $i$ : 하나씩 돌면서 검사할 수

| 개념            | 설명                                   | 공식           |
| ------------- | ------------------------------------ | ------------ |
| 나머지 (remain)  | 두 수를 나눴을 때 나머지 값                     |              |
| 배수 (multiple) | 어떤 수로 나누었을 때 나머지가 0                  | `i % N == 0` |
| 약수 (divisor)  | 어떤 수 N의 약수는 `N % i == 0`을 만족하는 수 `i` | `N % i == 0` |

- **배수**
	- `i % N == 0` 
	- 더 큰 수 ($i$) 가 $N$의 배수 인가?
	- [배수 예제](https://github.com/kikiru328/Algorithm/blob/main/Basic_Formula/multiple.py)
- **약수** ^ffaf8e
	- `N % i == 0`
	- 고정된 큰 수 ($N$)를 작은 수 ($i$)로 나눠서 확인한다.
	- [약수 예제](https://github.com/kikiru328/Algorithm/blob/main/Basic_Formula/divisor.py)


# 소수

^0eec13

소수란, $1$ 보다는 크고, 1과 자기 자신 만을 [[#^ffaf8e|약수]]로 가지는 수를 의미한다.

- **소수 판별 로직**
	- 입력 $N$ 이 $1$ 보다 큰지
	- $2$ 부터 $\text{N}-1$ 까지 수 중에서 $N$ 을 나누어 떨어지게 하는 수가 없다 == **소수**
- **방법**
	- $2$ 부터 $\sqrt{N} + 1$ 까지만 roop를 해도 무관하다.

- 기본
```python
N = int(input())
if N == 1:
    print("not prime")
else:
	for i  in range(2, N):
		if N % i == 0:
			print("not prime")
			break
	else:
		print("prime")
```
- **루트 방법**
```python
import math

N = int(input())
if N == 1:
	print("not prime")
else:
	for i in range(2, int(math.sqrt(N)) + 1):
		if N % i == 0:
			print("not prime")
			break
	else:
		print("prime")
```

## 에라토스테네스의 체

^a5e8f5

소수를 효율적으로 여러 개를 한 번에 구하는 방법이다. 아까의 방법은 모든 순을 순회하게 되는데, $100000000000000$을 순회한다면 분명히 시간 복잡도 면에서 문제가 생길 것이다.

- **흐름**
	- $2$ 부터 $N$ 까지 전부 소수라고 가정
	- $2$ 는 소수니까 $2$ 의 배수를 삭제
	- $3$ 은 소수니까 $3$ 의 배수를 삭제
	- $4$ 는 $2$ 의 배수로 삭제 되어 있음
	- ...
	- 위를 $\sqrt{N}$ 까지 반복하면, 소수만 남는다.

``` python
import math

N = int(input())
prime = [True] * (N+1)
prime[0] = prime[1] = False

for i in range(2, int(math.sqrt(N)) + 1):
	if prime[i]:
		for j in range(i * i, N + 1, i): # i 의 배수
			prime[j] = False # 삭제
result = [str(i) for i in range(2, N + 1) if prime[i]]
print(" ".join(result))
```


</br></br></br>
# 참고자료
- ChatGPT