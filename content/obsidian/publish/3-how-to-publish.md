---
title: 옵시디언 블로그 배포하기
aliases:
  - how-to-publish-obsidian
description: 옵시디언을 블로그 백엔드로서 사용해보자
draft: false
tags:
  - obsidian/publish
permalink: /how-to-publish-obsidian
created: 2025-03-22T15:16
updated: 2025-05-13T18:20
socialImage: https://media1.tenor.com/m/dDm5Xm0P_JYAAAAC/superstore-amy-sosa.gif
---
<p align="center">
  <img src="https://media1.tenor.com/m/dDm5Xm0P_JYAAAAC/superstore-amy-sosa.gif" alt="note title" width="300">
</p>

# 준비하기

옵시디언을 배포하기 위해서는 준비할 내용이 몇 가지가 있다.

1. [Obsidian 설치 및 Valut 설정](https://brunch.co.kr/@sparta/65)
2. [git](https://git-scm.com/) 설치
3. [`node Js`](https://nodejs.org/) 설치
   
> [!tldr] Node JS?
> `Node.js`없이 사용은 가능하지만, 지속되는 문서 변경에 있어 확인하기 위해서는 `local`내 작업하는 것이 유리하고 편하다. 

# 설치 동영상

영어로만 되어 있지만, 이 분이 정말 차근차근 잘 설명해주시니 무한한 감사를 드리며 진행하도록 하자.

[설치 가이드](https://www.youtube.com/watch?v=6s6DT1yN4dw&t=227s)

# 템플릿

위 준비 사항이 다 되었다고 가정하자. 모든 방법은 [여기](https://quartz.jzhao.xyz/setting-up-your-GitHub-repository)에서 확인할 수 있으니, 자세한 내용은 여기서 확인해보자.

 1.  **[Quartz Repository](https://github.com/jackyzha0/quartz)** 접속
 2. `repository` `clone`하기
	 - `git clone https://github.com/jackyzha0/quartz.git`

> [!hint] Use this templates?
> `Use this templates`를 활용해도 괜찮지만, 지속적으로 update되는 quartz의 특성 상 `clone`하고 `upstream`을 통해 update를 하는 것을 추천한다.

3. clone 된 해당 `local dir`에 접속
4. 아래 코드 작성
   ```bash
   # list tracked repositories
   git remote -v
   
   # origin이 다를 경우 setting
   git remote set-url origin {REMOTE_URL} # remote_url: clone한 dir
   
   # upstream remote
   git remote add upstream https://github.com/jackyzha0/quartz.git
   ```

5. 완료가 된 이후에는 `npx quartz build --serve` 를 통해 작업을 진행하면 된다.

# Hosting

Hosting은 여러 방법이 있는데, 가장 쉬운 방법으로는 github page를 등록하면 편하다.

1. `quartz/.github/workflows/deploy.yml` 에 아래의 코드를 붙여 넣고, 저장한다 (github action)

```yml
name: Deploy Quartz site to GitHub Pages
 
on:
  push:
    branches:
      - v4
 
permissions:
  contents: read
  pages: write
  id-token: write
 
concurrency:
  group: "pages"
  cancel-in-progress: false
 
jobs:
  build:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Fetch all history for git info
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install Dependencies
        run: npm ci
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public
 
  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

1. clone한 repository 접속
2. 좌측 `setting` -> `pages` -> `source` -> `github action` 선택
3. `local` terminal에서 `npx quartz sync` 작성 후 실행
4. `https://{username}.github.io` 혹은 `https://{username}.github.io/{repository name}` 으로 접속

> [!check] repository
> 만약 repository 이름을 `username.github.io` 로 했을 경우 `https://{username}.github.io` 으로 접속  
> 다른 이름을 지정했을 경우 `https://{username}.github.io/{repository name}` 로 접속

# 404

1. content는 항상 index.md가 필요
2. index.md는 처음 보이는 페이지를 의미한다.
3. index.md를 작성해서 content내에 추가하면 자동으로 빌드된다.

# 설정

1. 홈페이지 설정은 Repository 내 `quartz.config.ts` 파일에서 변경이 가능하다
2. pageTitle은 페이지 좌측 상단 홈페이지 이름을 바꾼다
3. locale은 언어! `ko-KR` 로 바꾸면 된다.

