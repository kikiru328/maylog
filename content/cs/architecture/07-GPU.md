---
title: GPU
aliases:
  - gpu
description: 그래픽 처리 장치, GPU에 대해서
draft: false
tags:
  - CS/computer
permalink: /gpu
created: 2025-03-22T15:16
updated: 2025-05-08T16:54
socialImage: https://media.giphy.com/media/vfIzAJfET0agoqEjFd/giphy.gif?cid=ecf05e472vkj3vt69rh1t0nk03i98hqef8gf1h5xekxbwt98&ep=v1_gifs_search&rid=giphy.gif&ct=g
---
<p align="center">
  <img src="https://media.giphy.com/media/vfIzAJfET0agoqEjFd/giphy.gif?cid=ecf05e472vkj3vt69rh1t0nk03i98hqef8gf1h5xekxbwt98&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="GPU" width="300">
</p>

# GPU

GPU, 그래픽 카드. 게임을 좋아하거나 디자인, 심지어 인공지능에 관련한 업무를 하시는 분들에게는 [[04-memory|RAM]] 다음으로 중요한 핵심 부품이라고 생각한다. **GPU, Graphic Processing Unit**는 그래픽 처리 장치로, 대량의 그래픽 연산을 위해 탄생한 장치라고 볼 수 있다.

## GPU는 그래픽만 연산하는가

대규모 그래픽 연산을 처리하기 위한 장치로, 복잡한 화면이나 3D 랜더링 등을 위해 처리하는 것을 기본으로 한다. 하지만 그것 뿐 아니다. 최근 GPU의 경우 [[03-cpu|CPU]]의 연산 범위까지 확장되어 있다. 인공지능에서 사용되는 딥러닝 연산, 가상화폐 책굴 등 다양한 분야에서 연산이 가능해졌다. 그래서 이제는 그냥 단순히 **GPU**가 아닌 **GPGPU, General Purpose computing on GPU**라고 한다.

## 멀티-멀티코어, GPU

GPU의 가장 큰 특징이라고 한다면, GPGPU라는 네이밍 처럼 코어의 개수가 수백 ~ 수천 개로 이루어져 있다는 것이다. 즉, [[03.5-cpu-upgrade#^244b85|코어의 개수가 많아지면 병렬 처리가 가능]]하다고 언급했던 CPU 처럼 GPU 또한 병렬 처리에 용이하다는 장점이라는 것이다. 또한 GPU는 자체적으로 [[04.1-cache-memory|캐시 메모리]]까지 갖추고 있고 독자적인 [[04-memory|메모리]], VRAM을 가지고 있다.

## GPU, 차세대 CPU?

GPU는 CPU의 연산의 범위까지 현재 처리가 가능하고, 코어도 월등히 높아 CPU를 대체하면 컴퓨터의 성능이 월등히 높아질 것으로 예상된다. 하지만 실상은 그렇지 않다. 

GPU는 코어를 수백 - 수천 개로 이루어져 있지만, 개발 코어는 CPU 코어에 비해 성능이 좋지 못하다. GPU의 개별 코어는 크기도 작고 CPU처럼 복잡한 기능도 처리를 못한다. 즉, CPU 코어는 **품질, quality**에 초점을 맞춘 반면, GPU 코어는 **양, quantity**에 초점을 맞춘 것으로 이해할 수 있다. 따라서 GPU 코어는 CPU 코어와는 다르게 단독으로 [[08-os|운영체제]]를 실행할 수도, 코어 내에서 복잡한 명령어를 병렬 처리를 수행할 수 없다. 또한 CPU는 최대한 메모리에 접근을 최소화 하려고 하는데에 반해 GPU는 메모리의 [[04-memory#^lane|대역폭]]을 넓혀 최대한 많은 코어가 작업을 병행할 수 있게 한다.

이러한 특징으로 인해 GPU는 주로 산술 연산과 같은 단순한 연산을 더욱 빠르게, 병렬적으로 처리하기 위한 장치이고, CPU는 범용적인 연산을 수행하기 위한 장치로 서로 용도가 다르다고 볼 수 있다. 그래서 GPU는 **보조 프로세서**일 뿐이다.

### CUDA, GPU 연산 처리 방식

GPU가 처리하는 방식을 보면, 입출력 장치와는 다르게 직접 소스 코드를 구현해 수행할 작업을 지정하는 경우가 많다. 이때 사용 되는 것이 Nvidia에서 개발한 CUDA이다.

 CUDA는 크게 CPU가 실행할 코드인 **호스트 코드**와 GPU가 실행할 코드인 **디바이스 코드**로 구성되어 있다. 아래 예제를 보면 쉽게 알 수 있다

```c showLineNumbers{number} {4-6, 9-13}
#include <stdio.h>

#이 부분에서 GPU가 실행할 코드를 명시 (디바이스코드)
__global__ void cuda_hello(){
	printf("Hello World from GPU!\n");     
} 

# GPU로 하여금 디바이스 코드를 실행하도록 하는 코드
int main() {
	cuda_hello<<<1,1>>>();
	cudaDeviceSynchronize(); 
	return 0;	
}
```
</br></br></br>
# 참고자료

※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 기반으로, 다양한 자료를 참고해 작성했습니다.
