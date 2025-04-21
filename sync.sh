#!/bin/bash

# G드라이브 → E드라이브 단방향 동기화
rsync -av --delete /mnt/g/MyDrive/Obsidian/Maylog/content/ /mnt/e/3_Resources/maylog/content/

