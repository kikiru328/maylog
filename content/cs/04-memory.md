---
title: 메모리
aliases:
  - memory-cache-memory
description: 저장을 위한 기억 장치
draft: false
tags:
  - CS/computer
permalink: /memory
created: 2025-04-22T00:07
updated: 2025-05-07T18:06
socialImage: https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanNrbGRjZm91OHdzeG0xbnEzcmFxaTYzaXAyZzR1N3IweHNyb3RxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BkfAhfmX0Ppn2/giphy.gif
---
<p align="center">
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanNrbGRjZm91OHdzeG0xbnEzcmFxaTYzaXAyZzR1N3IweHNyb3RxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BkfAhfmX0Ppn2/giphy.gif" alt="memory" width="300">
</p>

#  메모리

메모리는 말 그대로 "기억"이다. 즉 컴퓨터가 기억할 수 있는 장치를 우리는 "메모리"라고 칭한다. 기억을 할 수 있게 하는 주 장치, 즉, 메인 메모리에서는 **RAM**과 **ROM**으로 구성되어 있지만, 대부분 RAM을 지칭한다. 우리는 오늘 할 일이나 행동, 기억, 습관 등등은 모두 뇌의 기억하는 공간에 저장하고 끄집어 낸다. [[03-cpu|CPU]]도 마찬가지다. CPU가 읽고, 해석하고, 실행하는 모든 것들을 **메모리**에 저장한다. 즉, 실행중인 프로그램을 구성하는 데이터와 명령어를 저장하는 곳이 바로 **메모리**다.

다만, 인간하고는 조금 다르게, **메모리**의 경우 **휘발성**이 강하다. CPU는 수 많은 데이터와 명령어를 [[02-readable-data#^address-def|주소]]에 저장하는데 그 위치를 전원이 공급되고 있지 않을 때는 삭제할 수 있다. 휘발성이 강할 수 밖에 없는 이유는 CPU가 연산작업을 진행하고, 응용프로그램이 작동해야 하며, 인터럽트도 계속 발생하다 보면 메모리는 과부화가 오고 컴퓨터가 느려지기 때문이다.

그렇다면 CPU는 항상 메모리에서 데이터의 주소에 접근할 때, 항상 메모리에 접근해야 하는가? 아니다. CPU와 메모리 사이에는 [[04.1-cache-memory|캐시 메모리]]라는 것이 있다. CPU가 메모리에 조금 더 빠르게 접근할 수 있도록 하는 저장 장치라고 보면 된다.

## 우리가 자주 쓰는 RAM

CPU는 프로그램 전체를 CPU 레지스터에 저장할 수가 없다. 물론 메모리에도 저장할 수가 없다. 단순한 이유다. 프로그램의 용량이 위 두 개 보다 크기 때문이다. 그래서 CPU는 [[05-secondary-storage|보조기억장치]]에 저장을 하고, 메모리에 복사 후 사용하게 된다. 이렇기 때문에 RAM의 용량이 크면, 복사하는 양도 높고 빠르기 때문에 컴퓨터 성능이 향상될 수 있다. 이토록 중요한 RAM은 왜 RAM이라 불리는 걸까

RAM은 Random Access Memory, [[04.3-memory-access|임의 접근]] 메모리의 약자이다. **임의 접근**은 순차적으로 접근하지 않고 임의의 위치에 곧장 접근하는 방식을 의미한다. 우리가 맛집을 찾아갈 때 처럼, 주변의 식당을 하나 씩 들리는 것이 아니라 바로 그 집으로 간다. 마찬가지로 그래서 **직접 접근**이라고 불리기도 한다. 주소가 있다면 바로 접근할 수 있기 때문에 어떤 주소에 접근하든 데이터에 접근하는 시간이 동일하다는 특징을 갖는다.

> [!info] 순차접근?
> 데이터에 접근하기 위해선 순차적으로 접근한다는 것인데, 데이터의 주소에 따라 접근하는 시간이 달라질 수 있다. 우리가 지하철을 타는 것과 비슷하다. 2호선을 타고 사당에서 잠실로 갈때, 각 정류장을 들리면서 가는 것과 비슷하다. 컴퓨터로 보면, Array 자료구조와 마찬가지로 각 순차적으로 접근하는 것이 이와 동일한 예제이다.

### RAM 종류

그러니까 RAM은 임의 접근을 RAM을 구매할 때 보면 RAM도 여러 종류가 많다는 것을 알 수 있다. DRAM, SRAM, SDRAM, DDR SDRAM 등이 있다. RAM이 컴퓨터 성능에 도움을 준다면, 종류와 역할에 맞게 해야 한다.

1. **DRAM**  
DRAM은 Dynamic RAM으로서 동적인 특징을 갖는 RAM이다. 즉, 시간이 지나면 저장된 데이터가 점점 사라진다는 것이다. 이를 위해서 일정 주기로 데이터를 재 활성화(재 저장)해야 한다. DRAM은 소비 전력도 낮고, 저렴하며, 집적도가 높아 메모리를 대용량으로 설계할 때 많이 사용하기 때문에 일반적으로 제일 많이 사용한다.
</br></br>
2. **SRAM**  
DRAM이 나왔으니 SRAM, Static RAM으로서 정적인 특징을 갖는 RAM이다. 즉, 시간이 지나도 저장된 데이터가 사라지지 않는다. 일반적으로 SRAM은 DRAM보다 속도는 빠르고 소비 전력도 많이 잡아먹는다. 즉, 비싸고 집적도도 낮다. 그렇기에 대용량으로 설계하지 않지만 빠른 속도가 필요한 저장장치, [[04.1-cache-memory|캐시 메모리]]에 사용하는 것이 일반적이다.
</br></br> ^416fdb
3. **SDRAM**  
*(DRAM+SRAM이 아니고)* Synchronous Dynamic RAM, [[03.5-cpu-upgrade#^5a4d3e|클럭]] 신호와 동기화 된, 보다 발전된 DRAM을 의미한다. 클럭 신호와 동기화 되었기 때문에 클럭 타이밍과 맞춰 CPU와 정보 전달을 하는 특징을 갖는다.
</br></br>
4. **DDR SDRAM**  
DDR SDRAM, Double Data Rate SDRAM. 대역폭을 넓혀 속도를 빠르게 만든 SDRAM이다. 여기서 말하는 **대역폭**이란, 데이터를 주고 받을 길의 너비를 의미한다.  SDRAM이 클럭 한 번 당 한 번 씩 CPU와 통신한다면, DDR SRAM은 두 번씩 CPU와 통신한다는 것을 의미한다. 즉, SDRAM보다 **전송 속도가 두 배 가량 빠르다.**
^lane

이것보다 조금 더 향상된 것이, DDR2 SDRAM이다. **DDR2 SDRAM**은 DDR SDRAM보다 4배 빠르고 ($2^2$배), DDR3 SDRAM은 ($2^3$배), DDR4 SDRAM은 ($2^4$배)이다. DDR4 SDRAM은 [지금 우리 컴퓨터에 꽂혀있는 RAM](https://www.google.com/search?q=ddr4&sourceid=chrome&ie=UTF-8)이다.

### 메모리에 데이터 저장 방법

그렇다면 메모리는 데이터를 어떻게 저장할까? [[02-readable-data|CPU는 0과 1, bit로 저장하고 관리한다고 했다.]] 반면 메모리는 대부분 `Byte`단위로 저장하고 관리하는 형식이기에 CPU로 부터 4byte ($2^5$bit) 혹은 8byte($2^6$bit)인 [[02-readable-data#^word-def|워드]] 단위로 받아 들인다. 그다음 받아드린 데이터는 여러 주소에 걸쳐 저장하게 된다. 쉽게, A 메모리가 한 주소에 1Byte를 저장한다면, 4Byte 데이터를 4개의 주소에 저장하는 것이다.

메모리에 데이터를 저장하는 방식은 두 가지 방식으로 나뉜다. 바로 **빅 엔디안**과 **리틀 엔디안**이다.

1. **빅 엔디안**    
    - **낮은 번지의 주소에 상위 바이트부터 저장하는 방식**을 의미한다.  
    - MSB가 있는 바이트, 가장 큰 수를 가장 낮은 번지에 저장하고 순차적으로 높은 번지에 저장하는 방식
    - MSB를 중요하다고 판단하여 낮은 메모리 주소에 저장한다. 
    - 숫자 체계와 동일하기 때문에 메모리 값을 직접 읽거나 디버깅에 유리
    </br></br>
2. **리틀 엔디안**  
   - **낮은 번지의 주소에 하위 바이트부터 저장**하는 방식이다.   
   - LSB로 덜 중요한 바이트, 작은 것 부터 저장해 나가는 방식이다.
   - 직접 읽고 쓰는 것에는 비효율적
   - 수를 계산하는 것에 유리함.

*빅 엔디안과 리틀 엔디안 중 하나를 선택하는 것: **바이 엔디안** 이라고 한다.*

> [!note] **MSB** & **LSB**
> MSB: Most Significant Bit, 숫자의 크기에 가장 큰 영향을 미치는 유효 숫자.   
> LSB: Least Significant Bit, 숫자의 크기에 가장 적은 영향을 미치는 숫자. 
> 
> 예로 들면, 100000 이면 MSB: 1, LSB: 0.
> ^MSB-LSB

</br></br></br>
# 참고자료

※ 이 글은 [『이것이 컴퓨터 과학이다』](https://product.kyobobook.co.kr/detail/S000214014967) 책을 기반으로, 다양한 자료를 참고해 작성했습니다.