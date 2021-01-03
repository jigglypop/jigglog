---
path: "/[2020] 네트워크 관리사 2급 실기 요점 정리 - 윈도우 서버/"
category: "자격증"
tags: ["네트워크 관리사 2급", "자격증", "소프트웨어"]
title: "[2020] 네트워크 관리사 2급 실기 요점 정리 - 윈도우 서버"
date: "2021-01-01T12:21:00.000Z"
summary: "[2020] 네트워크 관리사 2급 실기 요점 정리 - 윈도우 서버입니다."
images: ["images/1.jpg"]
---



# 네트워크 관리사 2급 실기



| 라우터 | 케이블 제작 | Windows 2008 Server R2 | Linux | TCP/IP 네트워크 장비 | 신경향 및 보안 | 합계 |
| ------ | ----------- | ---------------------- | ----- | -------------------- | -------------- | ---- |
| 3      | 1           | 8                      | 2     | 3                    | 1              | 18   |
| 5.5    | 6.5         | 5.5                    | 5.5   | 5.5                  | 5.5            | 100  |



# 1. 라우터 (확인/변경)

---



* 확인
  * 인터페이스 정보를 확인하라

  ```bash
  enable
  show interface
  copy r s
  ```

  * 접속한 사용자를 확인하라

  ```bash
  enable
  show user(s)
  copy r s
  ```

  * 라우팅 테이블을 확인하라

  ```bash
  enable
  show ip route
  copy r s
  ```

  * 플래쉬를 확인하라

  ```bash
  enable
  show flash
  copy r s
  ```

  

* _변경_
  * 호스트 네임을 변경하라

  ```bash
  enable
  config terminal
  hostname ICQA
  exit
  copy r s
  ```

  * Ethenet 0 인터페이스를 설정하고, NVRAN에 저장하시오

  http://blog.naver.com/limits2018/220429068419

  ```bash
  enable
  config terminal
  interface Ethernet 0
  ip address 192.168.200.2 255.255.255.252
  ip directed-broadcast
  exit
  exit
  copy r s
  ```

  * Serial 0의 대역폭을 2048k로 설정하고, NVRAM에 저장하시오

  http://blog.naver.com/limits2018/220429100392

  ```bash
  en
  conf t
  interface serial 0
  bandwidth 2048
  exit
  exit
  copy r s
  ```

  * Serial 0의 clock rate을 72k로 설정하고, NVRAM에 저장하시오

  http://blog.naver.com/limits2018/220429100392

  ```bash
  en
  conf t
  int s0 - clock rate 72000
  exit
  exit
  copy r s
  ```

  * Ethernet 0의 description을 설정하고 NVRAM에 저장하시오(Description : ICQA)

  http://blog.naver.com/limits2018/220429147376

  ```bash
  en
  conf t
  int e0 - description ICQA
  exit 
  exit 
  copy r s
  ```

  * Secondary 설정

  http://blog.naver.com/limits2018/220429165281

  Ethernet 0의 IP Address를 192.168.2.1/30과 192.168.3.1/30 Secondary로 설정하고 저장하시오

  ```bash
  en
  conf t
  interface ethernet 0 
  ip address 192.168.2.1 255.255.255.252 
  ip address 192.168.3.1 255.255.255.252 secondary
  exit 
  exit 
  copy r s
  ```

  * Default-Gateway를 설정하고 저장하시오

  http://blog.naver.com/limits2018/220429181934

  IP : 192.168.0.10

  ```bash
  en 
  conf t
  ip default-gateway 192.168.0.10
  exit
  copy r s
  ```

  * 텔넷 패스워드 설정

  http://blog.naver.com/limits2018/220429482496

  Router1 Telnet에 접근하는 Password를 "TELPass"로 설정하고, 상태를 저장하시오

  ```bash
  en  
  conf t
  line vty 0 4
  password TELPass
  login
  exit
  exit
  copy r s
  ```

  * 텔넷(콘솔) 자동종료 설정

  http://blog.naver.com/limits2018/220429502079

  telnet에 5분 50초 동안 신호가 없을 시 해당 세션을 자동으로 종료하도록 라우터를 설정하시오

  ```bash
  en
  conf t
  line vty 0 4
  exec-timeout 05 50
  login
  exit
  exit
  copy r s
  ```

  * 콘솔 패스위드 설정

  http://blog.naver.com/limits2018/220429515003

  Router1 console의 패드워드를 ICQACon으로 설정하고 저장하시오

  ```bash
  en
  conf t
  line console 0
  login
  password ICQACon
  exit
  exit
  copy r s
  ```

  * 활성화 설정

  http://blog.naver.com/limits2018/220429521802

  Router2의 Interface Serial 0을 활성화시키고 저장하시오

  ```bash
  en
  conf t
  interface serial 0
  no shutdown
  exit
  exit
  copy r s
  ```

  * 호스트(도메인)네임, 패스워드 설정

  http://blog.naver.com/limits2018/220429534052

  Hostname을 network2로 변경하고, console 0의 Password를 route5로 변경하고 login하라

  ```bash
  en
  conf t
  hostname network2
  line console 0
  password route5
  login
  exit
  exit
  copy r s
  ```

  * 도메인 네임 설정

  ```bash
  en
  conf t
  ip domain
  name AAA
  exit
  copy r s
  ```

  





# 2. Window 2008 Server R2

---



유형 9가지 중 8 문제 출제

1. TCP / IP Setting
2. DNS Setting
3. DHCP Setting
4. IIS FTPServer Setting
5. IIS WebServer Setting
6. 계정추가
7. SMTP Setting
8. 로컬보안정책 Setting
9. Service Setting

 

*  1 ) TCP/IP Setting(네트워크 속성)

http://blog.naver.com/limits2018/220429907842

```bash
네트워크 환경을 아래와 같이 설정하시오
IP Address : 10101100.00010000.10010110.01110011
Subnet Mask : 22 bit
Default Gateway : 192.168.100.254
DNS Server : 200.100.100.200

추가 Gateway : 192.168.100.253
보조 DNS Servers : 201.100.100.201
```



* 10101100.00010000.10010110.01110011
  * 10101100.00010000.10010110.01110011 
  * (128+32+8+4) .   (16)    . (128+16+4+2) . (64+32+16+2+1)
  * 172.16.150.115

* SubnetMask  22bit -> 11111111.11111111.11111100.00000000 (255.255.252.0)
  * A 클래스 기본값 (255.0.0.0)
  * B 클래스 기본값 (255.255.0.0)
  * C 클래스 기본값 (255.255.255.0)

* Internet Protocol Version 4 (TCP/IP v4) 를 선택하고 속성 선택

![img](http://postfiles15.naver.net/20150724_206/limits2018_1437706278969Cs1zv_PNG/%C4%B8%C3%B3.PNG?type=w1) 



*  IP주소와 서브넷마스크, 기본 게이트웨이 기본 설정 DNS서버와 보조 DNS서버를 작성

  ![img](http://postfiles16.naver.net/20150724_31/limits2018_143770644702890L0o_PNG/IP%B9%AE%C1%A6.PNG?type=w1) 



* 고급 TCP/IP 설정 

* 추가 탭

  * TCP/IP 게이트웨이 주소 -> 기본 게이트웨이 주소를 설정해주고 추가

  ![img](http://postfiles4.naver.net/20150724_99/limits2018_1437706589844cAyMk_PNG/IP%B9%AE%C1%A6_2.PNG?type=w1) 



 

*  2) DNS Setting

http://blog.naver.com/limits2018/220430006406

```bash
아래의 설정값을 참고하여 DNS서버를 설정하시오
@ IN SOA ns.icqa.or.kr admin.icqa.or.kr (
10 ; Serial
15분 ; Refresh
10분 ; Retry
1일 ; Expire
1시간 ); Minimum
www IN A 192.168.100.20
ftp IN CNAME www
```

*  정방향 조회 영역 :  오른쪽 클릭

* 새 영역 : 새 영역 마법사 -> 다음 계속

![img](http://postfiles10.naver.net/20150724_41/limits2018_1437710583598ilVN8_PNG/2.png?type=w1)*



* 새 영역 : icqa.or.kr 
* 다음 계속 -> 마침

![img](http://postfiles2.naver.net/20150724_65/limits2018_1437710583087vTGX5_PNG/1.PNG?type=w1)*



* icqa.or.kr 폴더 오른쪽 클릭 -> 속성
* SOA(권한 시작) 탭
* 다음 설정
  * 주 서버 : ns.icqa.or.kr
  * 책임자 : admin.icqa.or.kr 
  * 일련번호 : 10 
  * 새로 고침 간격 : 15분
  * 다시 시도 간격 : 10분 
  * 다음 날짜 이후에 만료 : 1일 
  * 최소 TTL : 1시간



 ![img](http://postfiles10.naver.net/20150724_89/limits2018_1437710959349F9Fbz_PNG/3.png?type=w1)*



* 새 호스트
* icqa.or.kr 오른쪽 클릭 -> 새 호스트
  * 이름 : www
  * IP주소 : 192.168.100.20 
  * 호스트 추가



 ![img](http://postfiles8.naver.net/20150724_183/limits2018_1437711722730D44MA_PNG/4.png?type=w1)*



* 새 별칭
* icqa.or.kr을 오른쪽 클릭 -> 새 별칭
  * 별칭 이름 : ftp
  * 대상 호스트의 FQDN :  www
  * 확인



  ![img](http://postfiles9.naver.net/20150724_72/limits2018_1437711723155pxYVI_PNG/5.png?type=w1) 





 

* 3) DHCP Setting

```bash
아래와 같이 ip를 할당할 수 있는 DHCP를 설정하시오

범위이름 : 네트워크관리사
설명 : 한국정보통신자격협회 (미기출 문제)
분배할 주소 범위 : 192.168.106.1 ~ 254
제외할 주소 범위 : 192.168.106.2~25
임대 기간 : 8일
서브넷 마스크 : 255.255.255.0(24bit)
게이트웨이 설정 : 192.168.106.1 (미기출 문제)

예약설정 (미기출 문제)
IP : 192.168.106.200
예약이름 : Example
MAC 주소 : ff-ff-ff-ff-ff-ff
설명 : 예약
모두 설정한 뒤 활성화하시오
```

* IPv4를 오른쪽클릭 한 뒤 새범위를 누릅니다. 창이 나오면 다음을 눌러준 뒤, 범위 이름과 설명을 적는 창이 나오는데 작성하고 다음

![img](http://postfiles5.naver.net/20150724_148/limits2018_1437715458018Bt3i0_PNG/1.png?type=w1) 



* 분배할 IP의 범위와 서브넷마스크, 그리고 제외할 IP의 범위를 적어준 뒤 임대기간을 설정하고 다음

![img](http://postfiles3.naver.net/20150724_130/limits2018_1437715544967ot2t4_PNG/2.png?type=w1)

 

 

* 나중에 구성하겠습니다를 선택하고 다음 - 마침

![img](http://postfiles1.naver.net/20150724_16/limits2018_1437715786840gd1CK_PNG/3.png?type=w1)





![img](http://postfiles7.naver.net/20150724_214/limits2018_1437715956044fLL9t_PNG/4.png?type=w1) 





* 게이트웨이 설정 방법

* IPv4의 +탭을 누르면 범위가 나오는데, 범위의 +탭를 누르면 다음과 같게 .이 중 범위옵션을 오른쪽 클릭 - 옵션 구성을 클릭하면 오른쪽과 같은 창이 나오는데여기서 003 라우터를 클릭하시고 아래 IP주소에 게이트웨이로 설정할 IP를 삽입하신 뒤 추가

   ![img](http://postfiles9.naver.net/20150724_88/limits2018_1437716449450O1tAT_PNG/5.png?type=w1) 

* 범위+ 탭을 누른 후 예약 오른쪽클릭 - 새 예약을 누른 뒤 나오는 창에 작성을 한 후 추가![img](http://postfiles16.naver.net/20150724_175/limits2018_1437716734815X3dU7_PNG/17.PNG?type=w1) 





 

* 4) IIS FTPServer Setting - ftp

```bash
<아래>와 같이 FTP사이트를 추가 설정하시오

FTP사이트 이름 : ICQA
실제 경로: C:\inetpub\ftproot
IP주소 : 192.168.100.10, 포트 : 2121
엑세스 허용 : 익명 사용자(읽기 권한만)
엑세스 거부 IP주소 : 200.115.100.0/24
최대 연결수 메시지 : 최대 접속 인원수를 초과하였습니다.
```



* 사이트 오른쪽 클릭 -> FTP사이트 추가
  * 사이트 이름 : ICQA 
  * 실제경로 : C:\inetpub\ftproot
  * IP주소 : 192.168.100.10
  * 포트 : 2121
* 다음



![img](http://postfiles11.naver.net/20150724_282/limits2018_1437718810259kgqsT_PNG/111.png?type=w1)*

* 엑세스 허용 : 익명 사용자

* 사용 권한 : 읽기 체크

* 마침

  

 ![img](http://postfiles9.naver.net/20150724_152/limits2018_1437718943499yrwx9_PNG/4.PNG?type=w1)  



* ICQA ->FTP IPv4주소 및 도메인 제한

* 거부항목추가

  *  IP주소범위 : 200.115.100.0
  * 마스크 : 255.255.255.0(24bit는 11111111.11111111.11111111.00000000)

  

![img](http://postfiles2.naver.net/20150724_97/limits2018_1437719154224mnpF1_PNG/5.PNG?type=w1) 

![img](http://postfiles2.naver.net/20150724_289/limits2018_14377194410968WTo8_PNG/8.PNG?type=w1)*



 

* 5) IIS FTPServer Setting - web

```bash
<아래>와 같이 Web사이트를 추가 설정하시오
웹사이트 이름 : ICQA
실제 경로 : C:\inetpub\webroot
웹사이트 IP주소 : 192.168.100.10
포트 : 80
호스트 이름 : [http://www.icqa.or.kr](http://www.icqa.or.kr/)
엑세스 허용 IP주소 : 192.168.100.0/24
```

* 사이트 오른쪽 클릭 -> 웹사이트 추가 클릭 -> 입력

![img](http://postfiles7.naver.net/20150724_246/limits2018_1437739399645DeeL1_PNG/1.PNG?type=w1)

* P주소 및 도메인 제한 -> 오른쪽 클릭 후 허용 항목 추가 -> IP범위와 서브넷마스크를 작성하고 확인
* 24비트 : 11111111.11111111.11111111.00000000 = 255.255.255.0

![img](http://postfiles6.naver.net/20150724_133/limits2018_1437739494159j9Win_PNG/3.PNG?type=w1) 



 

* 6) 계정 추가하기(로컬 사용자 및 그룹 설정)

```bash
<아래>와 같이 계정을 추가 설정하시오
ID : ICQA
Password : ICQAPass
전체 이름 : 전체관리자
설명 : 한국정보통신자격협회
암호 변경할 수 없음
소속그룹 : Administrators
```



* 사용자 폴더를 오른쪽클릭 후 새사용자:
  * 사용자 이름 :ICQA
  * 전체이름 : 전체관리자
  * 설명 : 한국정보통신자격협회
  * 새 암호, 암호 확인 : ICQAPass
  * '다음 로그온 시 사용자가 반드시 암호를 변경해야 합니다' 버튼 풀기
  * '사용자가 암호를 변경할 수 없음' , '암호 사용 기간 제한 없음' 체크

![img](http://postfiles10.naver.net/20150725_169/limits2018_1437813625305b0qEy_PNG/1-1.PNG?type=w1)

* 소속그룹을 설정 : 
  *  ICQA 계정을 오른쪽 클릭
  * 속성을 누른 뒤뜨는 창에서 위 탭의 소속 그룹 지금찾기
  *  Administrators를 클릭한 후 확인

![img](http://postfiles6.naver.net/20150725_165/limits2018_1437813681005RsSYG_PNG/1-3.PNG?type=w1) 

* 로컬경로를 설정 : 
  * ICQA 오른쪽클릭 
  * 속성 후 위의 탭에서 프로필을 눌러준 뒤, 작성하고 확인

![img](http://postfiles13.naver.net/20150725_252/limits2018_14378137647749HGUC_PNG/1-5.PNG?type=w1)*



 

* 7) 로컬보안정책 Setting

 ```bash
<아래>와 같이 로컬보안정책을 설정하십시오. 
1. 패스워드는 최소 10일에서 최대 20일 사용(암호 복잡성 만족 사용 설정)
2. 패스워드는 3번 로그인 실패 시 60분간 계정잠금

 ```

*  최대암호사용기간은 20일, 최소암호사용기간은 10일로 설정, 암호 복잡성 만족 사용 설정

![img](http://postfiles10.naver.net/20150725_169/limits2018_1437827758083d3uFd_PNG/1.PNG?type=w1) 



* 계정잠금정책
  * 계정잠금임계값 에 3을 입력,확인을 누르면 저 창이 뜨는데 그냥 확인을 눌러주고 빠져나옴
  * 계정 잠금 기간을 설정 30분에서 60분으로 변경

![img](http://postfiles2.naver.net/20150725_289/limits2018_1437827797668VVr9m_PNG/2.PNG?type=w1)





* 8) Service Setting

http://blog.naver.com/limits2018/220431349076

```bash
2015.03.15 64회차
<아래>와 같이 서비스를 설정하십시오
SMTP 서비스를 사용하지 않음
서버를 재시작해도 네트워크를 통해서 전자메일을 전송하지 않음

2014.12.14 63회차
<아래>와 같이 서비스를 설정하십시오
원격 사용자가 Telnet을 이용하여 파일을 삭제하여 왔으나 
정책이 변경되어 원격사용자가 더 이상 로그온 할 필요가 없어졌다. 
해당 기능을 중지시키고, 다시 시작할 수 없게 설정하시오
```



* Telnet 더블클릭

![img](http://postfiles7.naver.net/20150725_70/limits2018_1437828692923BCAuB_PNG/1.PNG?type=w1)*



* 서비스 상태 :  중지
* 시작유형 : 사용 안 함



![img](http://postfiles3.naver.net/20150725_146/limits2018_1437828693350rzIHl_PNG/2.PNG?type=w1)*









 

 

