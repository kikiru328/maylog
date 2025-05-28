---
title: 큐
aliases:
  - queue
description: 스택 만큼 많이 들어본, 큐
draft: false
tags:
  - cs/structure
permalink: /queue
created: 2025-03-22T15:16
updated: 2025-05-28T21:35
socialImage: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmVqZzB4c256YXV0Y3pkNjdnaGY2Mzd3dG05ajFxaW1rNmZpNnR4YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT5LMuVtaVYI03uXsc/giphy.gif
---
<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmVqZzB4c256YXV0Y3pkNjdnaGY2Mzd3dG05ajFxaW1rNmZpNnR4YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT5LMuVtaVYI03uXsc/giphy.gif" alt="note title" width="300">
</p>

# 큐

**큐 (Queue)**. 단어 뜻 대로 **대기 줄**을 의미한다. 대기 줄은 들어오는 방향이 있고 나가는 방향이 있다. 즉, 먼저 온 사람이 먼저 처리되고 나중에 온 사람이 나중에 처리된다. 우리는 이 것들을 정말 많이 들어봤는데
**FIFO (First In First Out), 선입선출** 을 의미한다. 

편의점에 아르바이트를 한다고 생각해보자. 맥주를 채울 때 가장 오랫동안 보관된 것 부터 판매할 수 있게 제일 앞에 둔다. 그리고 고객은 그 맥주부터 구매하게 된다.

우리가 맥주를 채우는 것은 줄 에다가 넣는 것과 같다. 이를 **인큐 (Enqueue)** 라고 하고, 맥주를 구매, 빼내는 작업은 **디큐 (Dequeue)**라고 한다.

큐는 어디서 사용될까? 임시 저장된 데이터를 **순차적으로** 내보내거나, 꺼내는 **버퍼**로도 활용이 된다.

## 원형 큐

줄을 세우는데, 원형으로 세운다고 보면 된다. 계속 돌고 도는 그런 자료구조다.

![](https://i.imgur.com/FmVcnb5.png)


</br></br></br>
# 참고자료
※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 기반으로, 다양한 자료를 참고해 작성했습니다. 