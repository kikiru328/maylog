---
title: 신경망, 무엇인가
aliases:
  - what-is-neural-network
description: 신경망은 무엇일까.
draft: false
tags:
  - deeplearning/network
permalink: /what-is-neural-network
created: 2025-03-22T15:16
updated: 2025-05-28T17:28
socialImage: https://media.tenor.com/IUpxGMRqL_8AAAAM/ifbz-neuron-activation.gif
---
<p align="center">
  <img src="https://media.tenor.com/IUpxGMRqL_8AAAAM/ifbz-neuron-activation.gif" alt="note title" width="300">
</p>

# 신경망이란

Deep learning이라는 단어는 `신경망 트레이닝`을 일컫는 말이다.  
집값 예측을 예시로 들면 다음과 같다.

![](https://user-images.githubusercontent.com/60537388/210482955-1f4bcefb-1847-492c-a010-99cb3173a858.png)
![](https://user-images.githubusercontent.com/60537388/210483046-5cfb8c86-72ca-4757-a221-754f300d04ce.png)
집 크기와 집값의 관계에서 파란색 선형함수는 우측의 node가 구현하게 된다. 이 것이 가장 기초적인 신경망의 단계이다. 이 처럼 단순한 신경망의 단계가 여러 변수와 함께 적용이 되면 다음과 같다.  

![](https://user-images.githubusercontent.com/60537388/210484141-416e5075-d0dc-4906-ab70-23e206459e63.png)
좌측 총 4개의 변수가 숨겨진 노드(은닉층)에 특성을 부여하고, 특성에 맞는 마지막 노드(출력층)에서 결과를 예측할 수 있다. 모든 노드에 특성이 연결되어 있어 `신경망`이라고 불린다.

## **Supervised Learning with Neural Network**

지도 학습에서는 일부 입력값 x와 출력값 y에 대한 함수 매핑을 의미한다.  
따라서 무엇이 X, Y 가 되는지 면밀히 살펴보고 정해야 한다.

- 지도학습 딥러닝은 다음과 같다

|     Input(x)      |       Output(y)       |    Application     |      Type       |
| :---------------: | :-------------------: | :----------------: | :-------------: |
|   Home Features   |         Price         |    Real Estate     |  Standard N.N   |
|   Ad, user info   |   Click on ad (0/1)   | Online Advertising |  Standard N.N   |
|       Image       |    Object(1,,1000)    |   Photo tagging    |       CNN       |
|       Audio       |    Text transcript    | Speech recognition |       RNN       |
|      English      |        Chinese        |  Machine Learning  |       RNN       |
| Image, Radar info | Postion of other cars | Autonomous driving | Cusuomal Hybrid |

</br></br></br>
# 참고자료
- [Google Coursera - DeepLearning](https://www.coursera.org/specializations/deep-learning)