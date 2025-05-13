---
title: github 페이지에 필요한 SSG
aliases:
  - differ-ssg
description: 블로그를 만들기 위해선 SSG가 필요한데 그게 뭘까
draft: false
tags:
  - obsidian/publish
permalink: /differ-ssg
created: 2025-03-22T15:16
updated: 2025-05-13T17:57
socialImage: https://media1.tenor.com/m/77CBlK2TW_8AAAAC/i-need-that-shit-need-that-thing.gif
---
<p align="center">
  <img src="https://media1.tenor.com/m/77CBlK2TW_8AAAAC/i-need-that-shit-need-that-thing.gif" alt="note title" width="300">
</p>

# SSG?

SSG는 **Static Site Generator**로, 정적 사이트 생성기를 의미한다. 즉, Markdown이나 Text, data 파일 등을 `html`로 변환해서 정적 웹사이트를 만드는 도구라고 생각하면 된다.

HTML로 미리 생성되기 때문에, 로딩 속도가 우수하다는 장점과 서버가 따로 존재하지 않기에 해킹 위험이 낮다. 하지만 실시간 데이터 처리가 어렵고, 콘텐츠가 자주 바뀌는 경우 **귀찮다.**

Obsidian 페이지를 배포하기 위해서는 SSG가 꼭 필요하다. SSG에서는 `Jekyll`, `Quartz`, `Astro`, `Eleventy`, `Hugo`가 있다.

## Jekyll

- Ruby 기반으로 설계된 블로그 중심의 SSG로, Markdown과 Liquid 템플릿을 사용하여 콘텐츠 작성
-  [[1_TurningPoint|GitHub Pages]]와의 쉬운 통합이 장점이며, 넷틀리파이(Netlify)와 같은 배포 플랫폼에서도 잘 작동

## **[Quartz](https://quartz.jzhao.xyz/)**

- Obsidian과의 높은 호환성을 제공하며, Node.js를 기반으로 작동.
- Github Page나 Cloudflare Pages 같은 무료 호스팅 옵션을 활용 가능
## Astro

- JavaScript 프레임워크를 지원하며, `부분 하이드레이션` 방식으로 JavaScript를 최소화해 빠른 로드 속도를 제공
- 동적 및 정적 콘텐츠를 혼합하여 사용할 수 있으나, 블로그 관련 기능은 기본적으로 포함되어 있지 않아 추가 설정이 필요
## Eleventy

- 간단하고 유연한 설정을 가진 JavaScript 기반 SSG로, 다양한 템플릿 언어를 지원
- JavaScript 없이도 빠른 빌드 속도를 제공하며, 커스터마이징이 용이하지만 추가적인 기능 구현 시 작업량 증가
## Hugo

- Go 언어로 작성되어 가장 빠른 빌드 속도를 자랑하며 대규모 프로젝트에 적합
- 유연한 템플릿 시스템과 다양한 테마를 제공하지만 설정이 다소 복잡할 수 있어 어려움 존재

|    SSG     | 주요특징                                             | 장점                                                            | 단점                                 |
| :--------: | ------------------------------------------------ | ------------------------------------------------------------- | ---------------------------------- |
|   Jekyll   | 1. Ruby 기반<br>2. 블로그 중심 플랫폼                      | 1. Markdown 지원<br>2. Github Page와 쉽게 통합<br>3. 커뮤니티와 플러그인 풍부   | 1. Ruby 설치<br>2. 느린 빌드 속도          |
| **Quartz** | 1. Obsidian Publish 대안으로 설계<br>2. Node.js 기반 플랫폼 | 1. Obsidian과 높은 호환성<br>2. 무료 호스팅 옵션                           | 1. Node.js 설치<br>2. 적은 커뮤니티        |
|   Astro    | 1. JavaScript 기반<br>2. 하이브리드 정적 및 동적 컨텐츠         | 1. 빠른 로드 시간<br>2. React, Vue등 다양한 프레임워크                       | 1. 블로그 기능 기본 제공되지 않음<br>2. 설정이 어려움 |
|  Eleventy  | 1. JavaScript 기반<br>2. 다중 템플릿 언어 지원              | 1. 간단하고 유연함<br>2. 빠른 빌드 속도<br>3. 다양한 템플릿 언어 지원                | 1. 커스텀 기능 구현시 추가 작업 필요             |
|    Hugo    | 1. Go 기반<br>2. 빠른 빌드 속도                          | 1. 대규모 Markdown 콘텐츠 처리 적합<br>2. 유연한 템플릿 시스템<br>3. 다양한 유/무료 테마 | 1. Go 언어 학습<br>2. 설정이 다소 복잡함       |

# 결론

나는 [Quartz](https://quartz.jzhao.xyz/)를 선택했다. Obsidian의 매력을 그대로 보여주면서 설치 방법들이 명확하게 제시되어 있기 때문이다. 현재 이 블로그도 Quartz를 이용해서 사용하고 있다.
