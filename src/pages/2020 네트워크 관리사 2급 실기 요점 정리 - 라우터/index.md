---
path: "/2020 네트워크 관리사 2급 실기 요점 정리 - 라우터/"
category: "네트워크 관리사 2급"
tags: ["네트워크 관리사 2급", "자격증", "소프트웨어"]
title: "2020 네트워크 관리사 2급 실기 요점 정리 - 라우터"
date: "2021-01-01T12:23:00.000Z"
summary: "2020 네트워크 관리사 2급 실기 요점 정리 - 라우터입니다."
images: ["images/1.jpg"]
---



# 네트워크 관리사 2급 실기



| 라우터 | 케이블 제작 | Windows 2008 Server R2 | Linux | TCP/IP 네트워크 장비 | 신경향 및 보안 | 합계 |
| ------ | ----------- | ---------------------- | ----- | -------------------- | -------------- | ---- |
| 3      | 1           | 8                      | 2     | 3                    | 1              | 18   |
| 5.5    | 6.5         | 5.5                    | 5.5   | 5.5                  | 5.5            | 100  |



# 1. 라우터 명령어

---



* 설정 명령어

| 명령어                      | 내용                                                       |
| --------------------------- | ---------------------------------------------------------- |
| `enable/en`                 | _관리자 모드로 -> Router#_                                 |
| `configure terminal/conf t` | _관리자 모드에서 설정모드로 -> Router(config)#_            |
| `hostname 이름`             | _호스트 이름 명명_                                         |
| `login`                     | _로그인 명령_                                              |
| `exit`                      | _이전모드로 돌아감_                                        |
| `end`                       | _무조건 관리자 모드로 돌아감_                              |
| `line console 0`            | _콘솔라인 모드 전환 명령_                                  |
| `line vty`                  | _텔넷 등 가상 터미널 전환 명령_                            |
| `enable password 암호명`    | _관리자모드로 엑세스할 때 암호 설정(암호화되지 않고 저장)_ |
| `enable secret 암호명`      | _관리자모드로 엑세스할 때 암호 설정(암호화되어 저장)_      |
| `erase startup-config`      | _라우터 설정 명령을 지우고 초기화_                         |
| `clock set 시간`            | _장비의 시간을 설정할 때 사용_                             |
| `exec-timeout 시간`         | _콘솔 종료대기 시간변경(exec-timeout 0 0: 종료시간 없음)_  |
| `copy r s`                  | _라우터 셋팅 내용을 NVRAM에 저장_                          |

 

* 확인 명령어

| 명령어                    | 내용                                         |
| ------------------------- | -------------------------------------------- |
| `show clock`              | _라우터에 설정된 시간을 확인_                |
| `show version`            | _IOS의 버전정보 확인과 S/W, H/W정보 확인_    |
| `show startup-config`     | _NVRAM 정보 확인_                            |
| `show config`             | _라우터 장비설정의 저장내용을 확인하는 명령_ |
| `show run`                | _설정된 인터페이스 확인_                     |
| `show ip interface brief` | _인터페이스 정보 확인_                       |
| `show history`            | _사용했던 전체 명령어 확인_                  |
| `show ip route`           | _라우팅 테이블 확인_                         |
| `show flash`              | _플래쉬 확인_                                |
| `show process`            | _프로세스 정보확인_                          |



# 2. 예제

---



* 호스트 이름을 'ICQA'로 설정하시오.

```bash
Router>en
Router#conf t

Router(config)#hostname ICQA

ICQA(config)#exit
ICQA#copy r s
```



* 인터페이스 정보를 확인하고 저장하시오.

```bash
Router>en
Router#show interface
Router#copy r s
```



* 접속한 사용자를 확인하고 저장하시오.

```bash
Router>en
Router#show user
Router#copy r s
```



* 라우팅 테이블을 확인하고 저장하시오.

```bash
Router>en
Router#show ip route
Router#copy r s
```



* 플래쉬를 확인하고 저장하시오.

```bash
Router>en
Router#show flash
Router#copy r s
```



* 아래와 같이 Router 1의 FastEthernet 0 인터페이스를 설정하고, NVRAN에 저장하시오.


```bash
Router>en
Router#conf t

Router(config)#int fa0/0
Router(config-if)#ip add 192.168.200.2 255.255.255.252
Router(config-if)#ip directed-broadcast

Router(config-if)#exit
Router(config)#exit
Router#copy r s 
```



* Serial 0의 대역폭을 2048k로 설정하고, NVRAM에 저장하시오.

```bash
Router>en
Router#conf t

Router(config)#int s2/0
Router(config-if)#ban 2048

Router(config-if)#exit
Router(config)#exit
Router#copy r s
```



* Serial 0의 clock rate을 72k로 설정하고, NVRAM에 저장하시오.

```bash
Router>en
Router#conf t

Router(config)#int s2/0
Router(config-if)#clock rate 72000

Router(config-if)#exit
Router(config)#exit
Router#copy r s
```



* FastEthernet 0의 description을 설정하고 NVRAM에 저장하시오.
* Description : ICQA

```bash
Router>en
Router#conf t

Router(config)#int fa0/0
Router(config-if)#des ICQA

Router(config-if)#exit
Router(config)#exit
Router#copy r s
```




* FastEthernet 0의 IP Address를 192.168.2.1/30과 192.168.3.1/30 Secondary로 설정하고 저장하시오.

```bash
Router>en
Router#conf t

Router(config)#int fa0/0
Router(config-if)#ip add 192.168.2.1 255.255.255.252
Router(config-if)#ip add 192.168.3.1 255.255.255.252 secondary

Router(config-if)#exit
Router(config(#exit
Router#copy r s
```



* Default-Gateway를 설정하고, 저장하시오.
* IP : 192.168.0.10

```bash
Router>en
Router#conf t

Router(config)#ip default-gateway 192.168.0.10

Router(config)#exit
Router#copy r s
```



* Router1 Telnet에 접근하는 Password를 "TELPass"로 설정하고, 상태를 저장하시오.

```bash
Router>en
Router#conf t

Router(config)#li v 0 4
Router(config-line)#password TELPass
Router(config-line)#login

Router(config-line)#exit
Router(config)#exit
Router#copy r s
```



* Telnet에 5분 50초 동안 신호가 없을 시 해당 세션을 자동으로 종료하도록 라우터를 설정하시오.

```bash
Router>en
Router#conf t

Router(config)#li v 0 4
Router(config-line)#exec-t 05 50
Router(config-line)#login

Router(config-line)#exit
Router(config)#exit
Router#copy r s
```



* Router1 console의 패스워드를 ICQACon으로 설정하고, 저장하시오 (대소문자는 구분한다.)

```bash
Router>en
Router#conf t

Router(config)#li c 0
Router(config-line)#password ICQACon
Router(config-line)#login

Router(config-line)#exit
Router(config)#exit
Router#copy r s
```



* Router2의 Interface Serial 0을 활성화 시키고 저장하시오.

```bash
Router>en
Router#conf t

Router(config)#int s2/0
Router(config-if)#no sh

Router(config-if)#exit
Router(config)#exit
Router#copy r s
```



* Hostname을 network2로 변경하고, Console 0의 Password를 route5로 변경하고 login하라.

```bash
Router>en
Router#conf t

Router(config)#host network2
network2(config)#li c 0
network2(config-line)#password route5
network2(config-line)#login

network2(config-line)#exit
network2(config)#exit
network2#copy r s
```



* domain-name을 'DOMAIN'으로 설정하고 저장하시오.

```bash
Router>en
Router#conf t

Router(config)#ip domain-name DOMAIN

Router(config)#exit
Router#copy r s
```



