---
title: CS는 왜 배울까
aliases:
  - learn-cs
description: CS를 배우는 이유에 대해서 반성과 고찰
draft: false
tags: 
permalink: /learn-cs
created: 2025-04-21T14:22
updated: 2025-05-09T15:43
socialImage: https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczN4bzk0Yjkwejl0MGViNGRtbTkzeTFtc3k5MGN6ZnIwbXpzeHFncSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IPbS5R4fSUl5S/giphy.gif
---
<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczN4bzk0Yjkwejl0MGViNGRtbTkzeTFtc3k5MGN6ZnIwbXpzeHFncSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IPbS5R4fSUl5S/giphy.gif" alt="why_cs" width="300">
</p>

# 코드는 작동했지만, 나는 불안했다

개발자로 일하며 가장 자주 했던 말은 "일단 돌아가긴 해요"였다. 기능이 작동하면 성공이라고 생각했고, 사용자 요구사항을 맞추는 것이 전부라 믿었다. 하지만 시간이 지나면서 기능은 돌아가는데 불안함이 남았다. 코드의 흐름을 설명할 수 없었고, 문제가 발생했을 때 어디서부터 접근해야 할지 몰랐다. 무언가를 ‘이해’하고 짠 게 아니라, '구현'하고 끝낸 느낌이었다. 결국 내가 만든 코드임에도, 내가 가장 믿지 못하는 사람이 나 자신이었다.


# 내가 직면한 진짜 문제

불안의 근원은 단순했다. **코드가 어떤 원리로 작동하는지 모른다는 것**. 당장의 기능은 만들 수 있어도, 그 기능이 어떻게 시스템 속에서 작동하는지, 어떤 제약과 흐름을 거쳐 실행되는지에 대한 인식이 부족했다. 운영체제가 프로세스를 어떻게 관리하는지, 함수 호출이 메모리에서 어떤 식으로 처리되는지, 데이터는 어떻게 저장되고 전송되는지. 이런 기초적인 질문에 답하지 못한 채, 나는 매일 코드를 짜고 있었다. 그제야 깨달았다. 개발자란 코드를 만드는 사람이 아니라, **시스템의 동작을 이해하고 설계하는 사람**이어야 한다는 것.


# 그래서 학습한다.

컴퓨터 과학은 특정 기술을 배우는 게 아니다. 문제를 이해하고, 추상화하며, 예측 가능한 방식으로 해결하는 사고 체계다. 내가 배우고 있는 컴퓨터 과학의 구성은 이렇다

1. [[cs/architecture/index|컴퓨터 구조]]: 기계가 데이터를 어떻게 인식하고 계산하는지 
2. [[cs/os/index|운영체제]]: 프로그램이 실행되는 실제 무대 위 구조 
3. 자료구조와 알고리즘: 정보의 표현과 효율적인 처리 방식 
4. 네트워크: 연결과 전송의 기본 원리 
5. 데이터베이스: 영속성과 일관성을 위한 구조 
6. 언어: 코드가 기계로 해석되기까지의 과정 
7. 개발 도구와 프레임워크: 추상화를 도와주는 레이어 
8. 직무 전문성: 역할에 따라 필요한 구체적 기술 

이 중에서도 나는 **‘공통 기초 체력’** 이라 부를 수 있는 컴퓨터 구조, 운영체제, 자료구조, 네트워크, 데이터베이스부터 다시 학습해야 된다고 생각했다. 이해 없이 구현했던 시절은 늘 불안했다. 지금은 그 불안을 줄이기 위해, 다시 기초로 돌아가고 있다.

기능을 만드는 데만 몰두했던 나에게 컴퓨터 과학은 ‘왜 이 코드가 작동하는가’를 묻고, 답하게 만드는 도구다. 문제를 정확히 이해하고, 스스로의 판단으로 구조를 설계하며, 예측 가능한 방식으로 개선해나가는 일. 그것이 내가 지향하는 개발자의 모습이고, 그 시작점이 바로 컴퓨터 과학이었다.
</br></br></br>
# 참고자료

※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 참고해 작성했습니다.