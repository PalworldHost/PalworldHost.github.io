---
title: 幻兽帕鲁游戏配置详解
author: Pals
pubDatetime: 2024-01-26T11:05:51Z
modDatetime: 2024-01-26T11:12:47.400Z
slug: palworld-server-config
featured: true
draft: false
tags:
  - 教程
  - 配置
description: "本文旨在帮助大家了解幻兽帕鲁游戏配置的详细解释及部分推荐配置。"
---

幻兽帕鲁部署完成之后，如果您想要按照自己的喜好来对游戏世界进行DIY，打造个性化的私服，那么就需要通过手动配置游戏参数来完成。

由于直接编辑配置文件的成本较高，且可能会因为换行、未区分中英文逗号等问题导致配置不成功，本文推荐

**复制幻兽帕鲁默认的配置文件，并在此基础上仅对参数值作修改。**

## Windows 操作系统

建议您通过[幻兽帕鲁服务器部署保姆级教程](/posts/deploy-palworld-server-in-3-minutes/)的 Windows 服务器一键部署幻兽帕鲁。其他部署方式可能在配置文件的路径上会有不同。

Windows 操作系统的默认配置文件存放在以下目录中：

```shell
C:\Program Files\PalServer\steam\steamapps\common\PalServer\DefaultPalWorldSettings.ini
```

> 如您的幻兽帕鲁部署路径不为 `C:\Program Files\PalServer`，推荐您直接使用文件名 `DefaultPalWorldSettings.ini`，在 Windows 的文件夹内进行搜索。


2、选中该文件，并将文件复制到 WindowsServer 文件夹中，路径如下：

```shell
C:\Program Files\PalServer\steam\steamapps\common\PalServer\Pal\Saved\Config\WindowsServer
```

> 如果您无法在上述路径下找到 WindowsServer 文件夹，那么依然推荐您进行搜索。


复制完成之后，删除原有的 `PalWorldSettings.ini` 文件，并将刚刚复制的文件名修改为 `PalWorldSettings.ini`。

## Linux 操作系统

建议您通过幻兽帕鲁服务器部署保姆级教程的 Linux 服务器一键部署幻兽帕鲁。其他部署方式可能在配置文件的路径上会有不同。

1、使用如下命令，为配置文件增加权限，避免后续步骤中由于权限问题导致无法编辑。

```shell
sudo chmod 775 /home/steam/Steam/steamapps/common/PalServer/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

2、使用如下命令，将默认配置文件复制到幻兽帕鲁下的 LinuxServer 目录中：

```shell
sudo cp /home/steam/Steam/steamapps/common/PalServer/DefaultPalWorldSettings.ini /home/steam/Steam/steamapps/common/PalServer/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

3、使用如下命令打开游戏参数的配置文件：`PalWorldSettings.ini`。

```shell
sudo vim /home/steam/Steam/steamapps/common/PalServer/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

按下 `i` 进入编辑模式，将光标移动到文件的末尾，即可开始写入配置。进入编辑模式的效果如下图所示：


4、编辑完成后，按下 `Esc` 键退出编辑模式，并输入 `:wq` 并按下回车键保存文件并退出 `vim`，效果如图所示。


## Docker 环境

1、运行以下命令，停止当前正在运行的游戏服务。

```shell
sudo docker stop $(sudo docker ps -a -q --filter ancestor=pasharp/pal_server --format="{{.ID}}")
```

2、运行以下命令，创建新的配置文件，首次配置之后，您也可以重新使用该命令直接进行编辑：

```shell
sudo vim /etc/PalWorldSettings.ini
```

首次创建的 `PalWorldSettings.ini` 文件为空，您可以首先将以下内容粘贴至文件中再根据游戏配置参数进行配置。

```
; This configuration file is a sample of the default server settings.
; Changes to this file will NOT be reflected on the server.
; To change the server settings, modify Pal/Saved/Config/LinuxServer/PalWorldSettings.ini.
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="Default Palworld Server",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

编辑完成后，按下 `Esc` 键退出编辑模式，并输入 `:wq` 并按下回车键保存文件并退出 `vim`，效果如图所示。


## 幻兽帕鲁游戏配置参数说明及中英文对照

我们也将官方文档中的配置参数说明做了中文注解，大家在配置的过程中可以参考中文说明，Enjoy～

```
Difficulty=None (难度)

DayTimeSpeedRate=1.000000 (日间速度倍率)

NightTimeSpeedRate=1.000000 (夜间速度倍率)

ExpRate=1.000000 (经验倍率)

PalCaptureRate=1.000000 (伙伴捕获倍率)

PalSpawnNumRate=1.000000 (伙伴生成数量倍率)

PalDamageRateAttack=1.000000 (伙伴攻击伤害倍率)

PalDamageRateDefense=1.000000 (伙伴防御伤害倍率)

PlayerDamageRateAttack=1.000000 (玩家攻击伤害倍率)

PlayerDamageRateDefense=1.000000 (玩家防御伤害倍率)

PlayerStomachDecreaceRate=1.000000 (玩家饥饿减少速率)

PlayerStaminaDecreaceRate=1.000000 (玩家体力减少速率)

PlayerAutoHPRegeneRate=1.000000 (玩家自动血量恢复倍率)

PlayerAutoHpRegeneRateInSleep=1.000000 (睡眠中玩家自动血量恢复倍率)

PalStomachDecreaceRate=1.000000 (伙伴饥饿减少速率)

PalStaminaDecreaceRate=1.000000 (伙伴体力减少速率)

PalAutoHPRegeneRate=1.000000 (伙伴自动血量恢复倍率)

PalAutoHpRegeneRateInSleep=1.000000 (睡眠中伙伴自动血量恢复倍率)

BuildObjectDamageRate=1.000000 (建筑物受损倍率)

BuildObjectDeteriorationDamageRate=1.000000 (建筑物劣化受损倍率)

CollectionDropRate=1.000000 (收集物掉落倍率)

CollectionObjectHpRate=1.000000 (收集物体生命值倍率)

CollectionObjectRespawnSpeedRate=1.000000 (收集物体重生速度倍率)

EnemyDropItemRate=1.000000 (敌人掉落物品倍率)

DeathPenalty=All (死亡惩罚)

bEnablePlayerToPlayerDamage=False (允许玩家对玩家造成伤害)

bEnableFriendlyFire=False (允许友军伤害)

bEnableInvaderEnemy=True (允许入侵敌人)

bActiveUNKO=False (未知)

bEnableAimAssistPad=True (启用手柄瞄准辅助)

bEnableAimAssistKeyboard=False (启用键盘瞄准辅助)

DropItemMaxNum=3000 (掉落物品最大数量)

DropItemMaxNum_UNKO=100 (掉落物品最大数量_UNKO)

BaseCampMaxNum=128 (基地最大数量)

BaseCampWorkerMaxNum=15 (基地工人最大数量)

DropItemAliveMaxHours=1.000000 (掉落物品存活最长时间（小时）

bAutoResetGuildNoOnlinePlayers=False (自动重置公会无在线玩家)

AutoResetGuildTimeNoOnlinePlayers=72.000000 (无在线玩家时自动重置公会时间（小时）

GuildPlayerMaxNum=20 (公会最大玩家数量)

PalEggDefaultHatchingTime=72.000000 (伙伴蛋默认孵化时间（小时）

WorkSpeedRate=1.000000 (工作速度倍率)

bIsMultiplay=False (多人游戏)

bIsPvP=False (PvP模式)

bCanPickupOtherGuildDeathPenaltyDrop=False (可以拾取其他公会死亡惩罚掉落)

bEnableNonLoginPenalty=True (启用非登录惩罚)

bEnableFastTravel=True (启用快速旅行)

bIsStartLocationSelectByMap=True (根据地图选择起始位置)

bExistPlayerAfterLogout=False (登出后玩家仍存在)

bEnableDefenseOtherGuildPlayer=False (启用防御其他公会玩家)

CoopPlayerMaxNum=4 (合作玩家最大数量)

ServerPlayerMaxNum=32 (服务器玩家最大数量)

ServerName="" (服务器名字)

ServerDescription="" (服务器描述)

AdminPassword="" (管理员密码)

ServerPassword="" (服务器密码)

PublicPort=8211 (公共端口号)

PublicIP="" (公共IP地址)

RCONEnabled=False (启用RCON)

RCONPort=25575 (RCON端口号)

Region="" (区域)

bUseAuth=True (使用身份验证)

BanListURL="https://api.palworldgame.com/api/banlist.txt" (封禁名单URL)
```

## 重启游戏进程

配置文件修改并保存完成后，您还需要重新启动游戏进程或服务，以使得配置生效。

### Windows 服务器

1、重启服务器后即可生效（实例重启后，您部署的幻兽帕鲁将会随之自启动）。


### Linux 服务器

1、使用如下命令重启服务，重启完成后即可生效。

```shell
sudo systemctl restart pal-server
```

2、使用如下命令检查服务是否正常启动，如出现图示的效果，则证明启动成功。

```shell
sudo systemctl status pal-server
```

### Docker 环境

运行如下脚本，重新启动容器内幻兽帕鲁的服务，并应用前文创建的配置文件。

```shell
sudo docker run -d --restart=always  -u game  -v /data:/opt/palworld/Pal/Saved  -v /etc/PalWorldSettings.ini:/home/game/Steam/steamapps/common/PalServer/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini -p 8211:8211/udp  pasharp/pal_server  /home/game/Steam/steamapps/common/PalServer/PalServer.sh
```
