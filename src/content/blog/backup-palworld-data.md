---
title: 幻兽帕鲁服务器数据备份
author: Pals
pubDatetime: 2024-01-26T04:05:51Z
modDatetime: 2024-01-26T10:12:47.400Z
slug: backup-palworld-data
featured: true
draft: false
tags:
  - 教程
  - 服务器
description: "幻兽帕鲁游戏可能遇到坏档之类的问题，所以做好定时备份，快速恢复游戏进度就显得非常重要了。"
---

幻兽帕鲁游戏可能遇到坏档之类的问题，所以做好定时备份，快速恢复游戏进度就显得非常重要了。本文为你带来创建定时对幻兽帕鲁数据备份的功能。

## 找到幻兽帕鲁数据存储目录

登录服务器，找到幻兽帕鲁的数据存储目录 `/Pal/Saved/SaveGames/0`。找不到的话，可以执行下面的命令进行搜索。

```shell
sudo find / -name Pal
```

例如，我的存储目录在 `/home/ubuntu/Steam/steamapps/common/PalServer/Pal/Saved/SaveGames/0`，记住这个目录。

## 创建幻兽帕鲁数据备份脚本

创建一个备份脚本 `palbackup.sh`，内容如下。其中 `SOURCE_DIR` 变量填写上一步幻兽帕鲁的存储目录，`BACKUP_DIR` 变量填写第一部分挂载存储桶中的服务器挂载目录（palbackup）。

```bash
#!/bin/bash

# 下面两行需要自行根据实际情况修改
SOURCE_DIR="/home/ubuntu/Steam/steamapps/common/PalServer/Pal/Saved/SaveGames/0"
BACKUP_DIR="/palbackup"

DATE=$(date +%Y%m%d_%H%M%S)

# 对备份数据进行压缩打包
tar -cvf "${BACKUP_DIR}/backup_${DATE}.tar" "${SOURCE_DIR}"

echo "Backuppalbackup.sh of ${SOURCE_DIR} completed at ${BACKUP_DIR}/backup_${DATE}.tar.gz"
```

## 执行幻兽帕鲁数据备份脚本

```shell
sudo bash palbackup.sh
```

如果得到如下的运行结果，那么幻兽帕鲁的数据已经备份好了。


## 定时备份幻兽帕鲁的数据

通过 `crontab`，可以完成定时备份。在终端输入下面的输入命令

```shell
crontab -e
```

输入下面一行代码，保存即可。下面这行代码的意思是每隔半个小时执行一次备份脚本，备份的日志存储在 ~/palbackup.log。

```shell
0,30 * * * * bash ~/palbackup.sh >> ~/palbackup.log
```

## 幻兽帕鲁恢复备份数据

1.  操作之前，先暂停幻兽帕鲁服务。
2.  将备份的 `/Pal/Saved/SaveGames/0` 文件夹解压后整个复制过去，替换掉原有的文件。PS：复制之前可以先把旧的文件备份下。
3.  文件夹 0 下面有一个随机序列号的文件夹，代表的是自建幻兽帕鲁服务器的序列号。
4.  找到配置文件 `/Pal/Saved/Config/LinuxServer/GameUserSettings.ini`，将其中的 `DedicatedServerName` 替换为上面的序列号。
5.  重新启动幻兽帕鲁服务