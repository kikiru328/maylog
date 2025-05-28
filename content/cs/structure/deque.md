---
title: 덱
aliases:
  - queue
description: 스택 만큼 많이 들어본, 큐
draft: false
tags:
  - cs/structure
permalink: /queue
created: 2025-03-22T15:16
updated: 2025-05-28T21:43
socialImage: https://media1.tenor.com/m/oiHwlpCubwEAAAAC/%EB%8F%99%EC%9E%91%EA%B7%B8%EB%A7%8C-%EB%B0%91%EC%9E%A5%EB%B9%BC%EA%B8%B0%EB%83%90.gif
---
<p align="center">
  <img src="https://media1.tenor.com/m/oiHwlpCubwEAAAAC/%EB%8F%99%EC%9E%91%EA%B7%B8%EB%A7%8C-%EB%B0%91%EC%9E%A5%EB%B9%BC%EA%B8%B0%EB%83%90.giff" alt="note title" width="300">
</p>

# 덱

사실 **덱 (deque)** 는 카드 deck과는 다르지만, 이론은 비슷하다.  
카드게임을 할때는 기본적으로 [[stack|스택]]을 기반으로 사용한다. 맨 위에 있는 카드를 뽑아서 나눠주고 그걸로 게임을 진행한다.  

하지만 영화 [타짜](https://www.google.com/search?sca_esv=9bb6a8d79ae60b0c&sxsrf=AE3TifP8aKMMZyb7Tw4GPuEil9vDDFELyQ:1748435795926&q=%ED%83%80%EC%A7%9C&si=AMgyJEtrjsKMDz8f4W2slMXfl3NzC2iA9P_q1F76_o9rgz5jNSBMJkwKzqk0GW4sdVlJWG4eW-Qc4eOjmoG3D2sSXk-zPKmNHgJ0X8IM1nct_5ZVtvM7GFvCaHdA07Yso0G8sY5CEu3y&sa=X&ved=2ahUKEwjpop30lsaNAxVgj68BHRP-LPEQ_coHegQIBRAB&ictx=0&biw=917&bih=1832&dpr=1) 를 보면, **밑장 빼기**라는 손기술을 사용한다. 기본적으로 스택으로 카드를 뽑는 것이 아닌, [[queue|큐]]로 뽑는 것이다. 카드를 섞을 때 가장 원하는 카드를 맨 밑에 둔다면 스택으로 나누어 줄 때 제외할 수 있기 때문이다.

그래서 여기서 말하는 덱, Deque는 스택과 큐를 포함된 것으로 보면 쉽다. **FIFO**도 아니고 **LIFO**도 아닌 **양 끝**에서 넣고 빼는 것이 가능하다는 것이다. 쉽게 밑장 넣기도 가능하다는 것.


![](https://i.imgur.com/cIIAN2s.png)


</br></br></br>
# 참고자료
※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 기반으로, 다양한 자료를 참고해 작성했습니다. 