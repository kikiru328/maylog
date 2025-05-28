---
title: Mount Google Drive
aliases:
  - google-drive-mount
description: Description of the page used for link previews.
draft: false
tags:
  - environment/mount
permalink: /google-drive-mount
created: 2025-03-22T15:16
updated: 2025-05-28T09:53
socialImage: https://media1.tenor.com/m/yxQWy45nEgMAAAAC/storage-full-gdrive.gif
---
<p align="center">
  <img src="https://media1.tenor.com/m/yxQWy45nEgMAAAAC/storage-full-gdrive.gif" alt="gdm" width="300">
</p>


# WSL Google Drive?

나는 Windows에서 **C** 드라이브와 **D**드라이브, **E**드라이브를 사용하고 있다.  
거기다 `Mac`과의 원활한 이동과 `Cloud Archive`로서 <font color="#d99694">**Google Drive**</font>를 사용하고 있다.  

Windows 운영체제를 사용하고 있음에도, Python 환경 설치의 복잡성을 피하고자 `WSL - Ubuntu 22.04`를 사용하고 있는 중이다. 하지만 WSL은 자동으로 Google Drive를 마운트 하지 않아서 그 방법과 이유를 설명하려고 한다.

# 방법

Google Drive를 WSL에 mount 하는 방법은 크게 두가지가 있는 것으로 보인다.  
1. Windows Network Drive Mount
2. Cloud Mount : Rclone

**Windows network Drive Mount**는 Windows에서 Google Drive를 네트워크 드라이브로 연결 한 후, WSL2에서 마운트하는 방식이다. **Cloud Mount: Rclone** 방식은 Cloud를 직접 마운트하는 방식이다.  

이 두가지 방식은 각각의 장단점이 있다.

## Windows Network Drive Mount
### 장점

1. 설정이 간단하다.
   - Windows에서 Google Drive를 설치하고, 네트워크 드라이브로 설정 한 후 `/etc/fstab`에 추가하면 바로 사용이 가능하다.
   - 별도의 추가 소프트웨어를 다운 받지 않는다. (Google Drive Desktop 제외)
2. Windows와 WSL2간의 파일 공유가 쉽다.
   - WSL2 에서 Google Drive 경로 (`/mnt/g`)를 사용할 수 있기에 파일 공유가 쉽다
3. GUI 기반 동기화가 가능하다.
   - Google Drive Desktop 앱에서 변경하면 자동으로 동기화가 된다.

### 단점

1. 파일 시스템 제한
   - Google Drive는 네트워크 드라이브로 연결되므로, Linux [[file-system#^e77b05|심볼릭 링크]], (symlink), 권한 설정 (chmod), 실행 파일 실행 등이 정상적으로 동작하지 않을 수 있다.
   - 이러한 이유로, venv 가상환경 설정이 불가능 하다.
2. 속도가 느릴 수 있다.
   - 네트워크 드라이브 방식으로 파일 I/O 성능이 떨어진다.
   - 대량의 작은 파일을 다루기에는 불편하다.
3. 오프라인 사용이 불가능하다.
   - 네트워크 드라이브라 어쩔 수 없다.

## Cloud mount : Rclone
### 장점

1. WSL2 에서 네이티브 파일 시스템 처럼 사용 가능
   - 실행 파일 실행,  심볼릭 링크, 권한 변경 등이 정상적으로 동작
   - 이러한 이유로 가상환경 생성이 가능하다.
2. 빠른 속도
   - `Rclone`은 `API`를 사용하기에 네트워크 드라이브 보다는 빠르다
   - 대량의 작은 파일을 다루기에 쉽다
3. 오프라인 캐싱 가능
   - `--vfs-cache-mode full`옵션시 Google Drive파일을 로컬 캐싱하여 오프라인에서도 작업이 가능하다
4. 자동 동기화 및 백업이 가능하다
   - `rclone sync`, `rclone mount`등의 기능으로 원하는 파일만 선택적 동기화가 가능하다

### 단점

1. 설정이 복잡하다.
   - `rclone config`를 통해 Google Drive API와 인증 과정이 필요
   - WSL2 시작 시 자동 마운트 하려면 `crontab`설정을 추가해야 한다.
2. GUI 기반 자동 동기화 지원이 부족하다.
   - Google Drive Desktop 앱을 사용할 때 처럼 실시간 자동 동기화가 되지 않는다.
   - 직접 `rclone sync` 명령 실행 필요
3. Google Drive API 호출 제한
   - 일일 요청 수 제한으로 파일을 무제한 다루기 어렵다

## 정리
| 방식                              | 호환성 | 속도   | 난이도   | 실행 파일 | 오프라인 |
| ------------------------------- | --- | ---- | ----- | ----- | ---- |
| **Windows Network Drive Mount** | ❌   | 🚀   | 간단    | ❌     | ❌    |
| Cloud mount : Rclone            | ✅   | 🚀🚀 | 설정 필요 | ✅     | ✅    |

# 따라서 나의 선택

나는 **Google Drive**를 **Archive**로 사용하고 있었기에 가상환경을 만들거나 그럴 이유는 없었다. (Git을 사용하거나 **icloud**로 작업을 진행)  
따라서 나는 `Windows Network Drive Mount` 를 사용하였다.

# Windows Network Drive Mount 방법

방법은 매우 쉽다.

1. 우선  [Google Drive Desktop](https://support.google.com/a/users/answer/13022292?hl=ko) 을 다운로드 받고 설치한다.
2. PC에서 Google Drive 폴더를 확인한다.
   
> [!question] Google Drive 폴더가 없으면 
> Google Drive 앱 설정에서 **드라이브 스트리밍 위치**를 설정해준다.
> 

3. WSL2 실행 (Ubuntu 실행)
4. 자동 마운트 설정 (`/etc/fstab 편집`)
	1. **WSL2 혹은 Ubuntu** terminal 실행
	2. `/etc/fstab` 파일 편집
	   > `sudo nano /etc/fstab`  
	   > `G: /mnt/g drvfs defaults 0 0` 입력  
        
	3. `ctrl+S` > `ctrl+X` 로 저장
	4. WSL 재시작
	   > `wsl --shutdown` # powershell에서

5. 다시 wsl (ubuntu) 접속 후 `ls /mnt/g` 를 실행 시 파일 확인 가능

# 결론

이로서 WSL Ubuntu 내에 Google Drive Mount를 할 수 있게 되었다.  
GUI를 사용해도 크게 어렵지는 않지만, 간혹 파일들을 바로 옮기고 싶을 때 Terminal을 사용하는 것이 제일 편리하다.  

icloud도 이와 같은 방식으로 진행 할 수 있을지는 모르겠지만,  
**windows 에서 icloud 작업 환경으로 사용하는 것은 정말 비 추천 한다.  (정말 느리다**)  
</br></br></br>
# 참고자료
