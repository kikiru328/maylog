---
title: 
aliases: 
description: Description of the page used for link previews.
draft: true
tags: 
permalink: 
created: 2025-03-22T15:16
updated: 2025-06-21T09:52
socialImage: 
---
```
<p align="center">
  <img src="undefined" alt="note title" width="300">
</p>
```

# Title

```python
for x in range(5):
    if x == 3:
        print("찾음!", x)
        break
else:
    print("못 찾음")

```


list -> print(\*list) --> 공백으로 나눈 문자열 출력

부분집합
```python
arr = [3,6,7,1,5,4]
n = len(arr)

for i in range(1<<n): # 부분집합의 개수
	for j in range(n): # 원소의 수 만큼 비교
		if i&(1<<j): # i의 j번째 비트가 1이면 j번째 원소 출력
			print(arr[j], end=",")
	print()
```





</br></br></br>
# 참고자료
