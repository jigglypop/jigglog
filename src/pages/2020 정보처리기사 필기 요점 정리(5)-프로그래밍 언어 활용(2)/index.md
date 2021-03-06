---
path: "/2020 정보처리기사 필기 요점 정리(5)-프로그래밍 언어 활용(2)/"
category: "정보처리기사 필기"
tags: ["정보처리기사 필기", "정보처리기사"]
title: "2020 정보처리기사 필기 요점 정리(5)-프로그래밍 언어 활용(2)"
date: "2020-05-02T01:00:00.000Z"
summary: "응용 SW 기초 기술 활용"
images: ["images/2.jpg"]
---

> 정보처리기사 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 책을 참고해서 공부하세요





# 2 .응용 SW 기초 기술 활용



## 1) 운영체제의 개념

---

#### 1) 개념

* 컴퓨터 시스템의 자원들을 효율적으로 관리하며, 사용자가 컴퓨터를 편리하고 효과적으로 사용할 수 있도록 환경을 제공하는 여러 프로그램의 모임

#### 2) 운영체제의 목적(처리 능력, 반환 시간, 사용 가능도, 신뢰도)

* 운영체제의 성능을 평가하는 기준

- `처리능력` : 일정 시간 내에 시스템이 처리하는 일의 양
- `반환 시간(=응답 시간)` : 시스템에 작업을 의뢰한 시간부터 처리가 완료될 때까지 걸리는 시간
- `사용 가능도` : 시스템을 사용할 필요가 있을 때 즉시 사용 가능한 정도
- `신뢰도` : 주어진 문제를 정확하게 해결하는 정도

#### 3) 운영체제의 기능

- 프로세서(처리기 / Processor / CPU), 기억장치(주기억, 보조기억), 입 출력 장치, 파일 및 정보 등의 자원 관리
- 자원을 효율적으로 관리하기 위해 스케쥴링 기능 제공
- 사용자와 시스템 간 편리한 인터페이스 제공
- 각종 하드웨어와 네트워크를 관리 제어
- 데이터 관리, 데이터 및 자원의 공유 기능 제공
- 시스템의 오류 검사 및 복구
- 자원 보호 기능 제공
- 입출력에 대한 보조 기능 제공
- 가상 계산기 기능 제공

#### 4) 운영체제의 주요 자원 관리(프로세스 관리, 기억장치 관리, 주변장치 관리, 파일 관리)

- 프로세스 관리 : 프로세스 스케쥴링 및 동기화 관리

- 기억장치 관리 : 프로세스에게 메모리 할당 및 회수 관리

- 주변장치 관리 : 입출력장치 스케쥴링 및 전반적인 관리

- 파일 관리 : 파일의 생성과 삭제, 변경, 유지 등의 관리

#### 5) 운영체제의 종류

- Windows, UNIX, LINUX, MacOS, MS-DOS 등

  

## 2) Windows

---

#### 1) windows

* 마이크로소프트에서 개발한 운영체제

#### 2) Windows 시스템의 특징

- 그래픽 사용자 인터페이스(GUI, Graphci User Interface) : 키보드로 명령어를 수행하지 않고 마우스로 아이콘이나 메뉴를 선택하여 모든 작업을 수행

- 선점형 멀티태스킹 : 동시에 여러 개의 프로그램을 실행하는 멀티태스킹을 하면서 운영체제가 각 작업의 CPU 이용 시간을 제어하여 응용 프로그램 실행 중 문제가 발생하면 해당 프로그램을 강제 종료시키고 모든 시스템 자원을 반환

- Pnp(Plug and Play) : 하드웨어를 설치할 때 해당 하드웨어를 사용하는데 필요한 시스템 환경을 운영체제가 자동으로 구성해주는 기능

- OLE(Object Linking and Embedding) : 다른 응용 프로그램에서 작성된 문자나 그림 등의 개체 현재 작성 중인 문서에 자유롭게 연결하거나 삽입하여 편집할 수 있는 기능

- Single User 시스템 : 컴퓨터 한대를 한 사람이 독점 사용

  

## 3) UNIX / LINUX / MacOS

---



#### 1) UNIX의 개요 및 특징

- 1960년대 AT&T 벨(Bell) 연구소, MIT, General Electric이 공동 개발한 운영체제

- 시분할 시스템을 위해 설계된 대화식 운영체제

- 소스코드가 개방형 시스템로 구성되어 있음

- 대부분 C언어로 작성되어 이식성이 높으며 장치, 프로세스 간 호환성이 높음

- 다중 사용자(Multi-User) 및 다중 작업(Multi-Tasking)을 지원

- 트리 구조의 파일 시스템을 가짐

#### 2) UNIX 시스템의 구성

- 커널(Kernel)

  - 컴퓨터가 부팅될 때 주기억장치에 적재된 후 상주하면서 실행됨

  - 하드웨어를 보호하고 프로그램과 하드웨어 간의 인터페이스 역할을 담당

  - 프로세스 관리, 기억장치 관리, 파일 관리, 입출력 관리, 프로세스 간 통신, 데이터 전송 및 변환 등 여러 가지 기능 수행

* 쉘(Shell)

  - 명령어를 인식하여 수행하는 명령어 해석기
  - 시스템과 사용자 간의 인터페이스 담당
  - DOS의 COMMAND.COM과 같은 기능 수행
  - 주기억장치에 상주하지 않고 명령어가 포함된 파일 형태로 존재
  - 보조기억장치에서 교체 처리 가능
  - 파이프라인 기능(둘 이상의 명령을 함께 묶어 처리한 결과를 다른 명령의 입력으로 전환하는 기능) 지원
  - 입출력 재지정을 통해 입력과 출력의 방향을 변경할 수 있음
  - 공용 Shell이나 사용자가 만들 Shell을 사용할 수 있음

- 유틸리티(Utility Program)

  - 사용자가 작성한 외부 프로그램을 처리

- DOS에서의 외부 명령어에 해당

  - 에디터, 컴파일러, 인터프리터, 디버거 등

#### 3) LINUX의 개요 및 특징

- 1991년 리누스 토발즈가 UNIX를 기반으로 개발한 운영체제
- 프로그램 소스 코드가 무료로 공개되어 있어 사용자가 원하는 기능을 추할 수 있고 다양한 플랫폼에 설치하여 사용이 가능하여 재배포가 가능
- UNIX와 완벽하게 호환
- 대부분의 특징이 UNIX와 동일

#### 4) MacOS의 개요 및 특징

- 1980년대 애플사가 UNIX를 기반으로 개발한 운영체제

- 애플사에서 생산하는 제품에서만 사용 가능

- 드라이버 설치 및 install / uninstall 과정이 단순

  

## 3) 저장장치 관리의 개요

---



#### 1 ) 저장장치 계층 구조의 특징

- 주기억장치는 각기 자신의 주소를 가지는 워드 또는 바이트들로 구성되어 주소를 이용하여 접근
- 보조기억장치에 있는 프로그램이나 데이터는 CPU가 직접 액세스 할 수 없음
- 보조기억장치에 있는 데이터는 주기억장치에 적재된 후 CPU에 의해 액세스

#### 2) 기억장치의 관리 전략의 개요

- `반입(Fetch)`, `배치(Placement)`, `재배치(Replacement)` 전략

##### (1) 반입(Fetch) 전략

- 보조기억장치에 보관중인 데이터를 언제 주기억장치에 적재할 것인지를 결정하는 전략
- 요구 반입 : 실행중인 프로그램이 특정 프로그램이나 데이터 등의 참조를 요구할 때 적재
- 예상 반입 : 실행중인 프로그램에 의해 참조될 프로그램이나 데이터를 미리 예상하여 적재

##### (2) 배치(Placement) 전략

- 새로 반입되는 데이터를 주기억장치의 어디에 위치시킬 것인지를 결정하는 전략

- `최초 적합(First Fit)` : 배치가 가능한 크기의 빈 영역 중에서 첫 번째 분할 영역에 배치

- `최적 적합(Best Fit)` : 배치가 가능한 크기의 빈 영역 중에서 단편화를 가장 적게 남기는 분할 영역에 배치

- `최악 적합(Worst Fit)` : 배치가 가능한 크기의 빈 영역중에서 단편화를 가장 많이 남기는 분할 영역에 배치

- 단편화

  - 내부 단편화 : 배치 후 남은 공간

  - 외부 단편화 : 배치를 못해 빈 공간으로 남아있는 공간

##### (3) 재배치(Replacement) 전략

- 주기억장치의 모든 영역이 이미 사용중인사용 중인 상태에서 새로운 프로그램이나 데이터가 배치하려고 할 때, 이미 사용 중인 영역에서 어느 영역을 교체할 것인지를 결정하는 전략
- FIFO, OPT, LRU, LFU, NUR, SCR 등



## 4) 주기억장치 할당 기법

---



#### 1) 주기억장치 할당의 개념

- 프로그램이나 데이터를 실행시키기 위해 주기억장치에 어떻게 할당할 것인지에 대한 내용

- 연속 할당 기법

  - 프로그램을 주 기억장치에 연속으로 할당하는 기법

- 단일 분할 할당 기법 : 오버레이, 스와핑

  - 다중 분할 기법 : 고정 분할 할당 기법, 동적 분할 할당 기법

* 분산 할당 기법

  - 프로그램을 특정 단위의 조각으로 나누어 주기억장치 내에 분산하여 할당하는 기법

  * 페이징 기법, 세그먼테이션 기법

#### 2) 단일 분할 할당 기법

- 주기억장치를 운영체제 영역과 사용자 영역으로 나누어 한순간에는 오직 한 명의 사용자만이 주기억장치의 사용자 영역을 사용하는 기법

* 오버레이 기법 : 주기억장치보다 큰 사용자 프로그램을 실행하기 위한 기법

  - 보조기억장치에 저장된 하나의 프로그램을 여러개의 조각으로 분할한 후 필요한 조각을 차례로 주기억장치에 적재하여 프로그램을 실행

- 스와핑 기법 : 하나의 프로그램 전체를 주기억장치에 할당하여 사용하다 필요에 따라 다른 프로그램과 교체하는 기법

#### 3) 다중 분할 할당 기법

- 고정 분할 할당 기법 : 프로그램에 할당하기 전에 운영체제가 주기억장치의 사용자 영역을 여러 개의 고정된 크기로 분할하고 준비상태 큐에서 준비 중인 프로그램을 각 영역에서 할당하여 수행하는 기법

- 가변 분할 할당 기법 : 미리 주기억장치에 분할해 놓는 것이 아닌 프로그램을 주기억장치에 적재하면서 필요한 만큼의 크기로 영역을 분할

  

## 5) 가상 기억장치 구현 기법 

---



#### 1) 가상 기억장치의 개요

- 보조기억장치의 일부를 주기억장치처럼 사용하는 것
- 용량이 작은 주기억장치를 마치 큰 용량을 가진 것처럼 사용할 수 있음
- 프로그램을 여러 작은 블록 단위로 나누어서 가상 기억장치에 보관해 놓고, 프로그램 실행 시 요구되는 블록만 주기억장치에 불연속적으로 할당하여 처리
- 주기억장치의 이용률과 다중 프로그래밍의 효율 상승
- 가상기억장치에 저장된 프로그램을 실행하려면 가상 기억장치의 주소를 주기억장치의 주소로 바꾸는 주소 변환(Mapping) 작업이 필요
- 연속 할당 방식에서 발생할 수 있는 단편화를 해결할 수 있음

#### 2) 페이징 기법

- 가상기억장치의 보관되어 있는 프로그램과 주기억장치의 영역을 동일한 크기로 나눈 후 나눠진 프로그램을 동일하게 나눠진 주기억장치의 영역에 적재시켜 실행하는 기법
- 프로그램을 일정한 크기로 나눈 크기를 페이지라 하고 페이지 크기로 일정하게 나누어진 주기억장치의 단위를 페이지 프레임이라고 함
- 외부 단편화는 발생하지 않으나 `내부 단편화`는 발생할 수 있음
- Mapping 작업을 위해서 페이지 맵 테이블이 필요함

#### 3) 세그먼트 기법

- 가상기억장치에 보관되어 있는 프로그램을 다양한 크기의 논리적인 단위로 나눈 후 주기억장치에 적재시켜 실행시키는 방법
- 프로그램을 논리적인 크기로 나눈 단위를 세그먼트라고 함
- 내부 단편화는 발생하지 않으나 `외부 단편화`는 발생할 수 있음
- Mapping 작업을 위해서 세그먼트 맵 테이블이 필요함
- 세그먼트가 주기억장치에 적재될 때 다른 세그먼트에게 할당된 영역을 침범할 수 없으며 이를 위해 기억장치 보호키가 필요



## 6) 페이지 교체 알고리즘

---



#### 1) 페이지 교체 알고리즘

- 페이지 부재가 발생했을 때 가상 기억장치의 필요한 페이지를 주기억장치에 적재해야 하는데 이럴 경우 주기억장치의 모든 페이지 프레임이 사용 중이면 어떤 페이지 프레임을 선택하여 교체할 것인지 결정하는 기법

##### (1) OPT(OPTimal replacement, 최적 교체)

- _앞으로 가장 오랫동안 사용하지 않을 페이지를 교체(예상)_

##### (2) FIFO(First In First Out)

- _페이지가 주기억장치에 적재될 때마다 시간을 기억시켜 가장 먼저 들어와서 오래 있었던 페이지를 교체_
- 먼저 들어온 것이 먼저 나감

| 순서 | 1    | 2    | 3    | 4    | 5    | 6    | 7        | 8    | 9        |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | -------- |
| 요구 | 1    | 2    | 3    | 2    | 1    | 2    | 4        | 2    | 5        |
|      | 1    | 1    | 1    | 1    | 1    | 1    | _1 -> 4_ | 4    | 4        |
|      |      | 2    | 2    | 2    | 2    | 2    | 2        | 2    | _2 -> 5_ |
|      |      |      | 3    | 3    | 3    | 3    | 3        | 3    | 3        |
| 부재 | O    | O    | O    |      |      |      | O        |      | O        |

##### (3) LRU(Least Recently Used)

- _최근에 가장 오랫동안 사용하지 않은 페이지를 교체_
- 페이지마다 Counter나 Stack을 두어 현시점에서 가장 오래전에 사용된 페이지 교체

| 순서 | 1    | 2    | 3    | 4    | 5    | 6    | 7           | 8    | 9           |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----------- | ---- | ----------- |
| 요구 | 1    | 2    | 3    | 2    | 1    | 2    | 4           | 2    | 5           |
|      | 1(1) | 1(1) | 1(1) | 1(1) | 1(5) | 1(5) | 1(5)        | 1(5) | _1 -> 5_(9) |
|      |      | 2(2) | 2(2) | 2(4) | 2(4) | 2(6) | 2(6)        | 2(8) | 2(8)        |
|      |      |      | 3(3) | 3(3) | 3(3) | 3(3) | _3 -> 4_(7) | 4(7) | 4(7)        |
| 부재 | O    | O    | O    |      |      |      | O           |      | O           |

##### (4) LFU(Least Frequently Used)

- _사용 빈도가 가장 적은 페이지를 교체_

| 순서 | 1      | 2      | 3      | 4      | 5      | 6      | 7              | 8      | 9             |
| ---- | ------ | ------ | ------ | ------ | ------ | ------ | -------------- | ------ | ------------- |
| 요구 | 1      | 2      | 3      | 2      | 1      | 2      | 4              | 2      | 5             |
|      | 1 (+1) | 1 (+1) | 1 (+1) | 1 (+1) | 1 (+2) | 1 (+2) | 1 (+2)         | 1 (+2) | 1 (+2)        |
|      |        | 2 (+1) | 2 (+1) | 2 (+2) | 2 (+2) | 2 (+3) | 2 (+3)         | 2 (+4) | 2 (+4)        |
|      |        |        | 3 (+1) | 3 (+1) | 3 (+1) | 3 (+1) | _3 -> 4 _ (+1) | 4 (+1) | _4 -> 5_ (+1) |
| 부재 | O      | O      | O      |        |        |        | O              |        | O             |

##### (5) NUR(Not Used Frequency)

- _최근에 사용하지 않은 페이지를 교체_

- 최근 사용 여부를 확인하기 위해 페이지마다 참조 비트와 변형 비트를 사용





## 7) 가상 기억장치 기타 관리 사항

---



#### 1) 페이지 크기에 따른 특징

- 페이지 크기가 작을 경우

  - 단편화와 주기억장치로 이동하는 시간 감소
  - 불필요한 내용이 적재될 확률이 낮아 워킹 셋이 효율적으로 유지
  - Locality에 더욱 일치하여 기억장치에 효율 상승
  - 페이지 맵 테이블 크기가 커지므로 매핑 속도가 늦어짐
  - 디스크 접근 횟수가 많아져 전체적인 입출력 시간이 늘어남

* 페이지 크기가 클 경우

  - 단편화와 주기억장치로 이동하는 시간이 증가
  - 프로세스 수행에 불필요한 내용까지 적재될 수 있음
  - 페이지 맵 테이블 크기가 작아지므로 매핑 속도가 빨라짐
  - 디스크 접근 횟수가 줄어들어 전체적인 입출력 시간이 줄어듦

#### 2) 구역성(Locality)

- 프로세스가 실행되는 동안 주기억장치를 참조할 때 일부 페이지만 집중적으로 참조하는 성질이 있다는 이론
- 스래싱을 방지하기 위한 워킹 셋 이론의 기반, 프로세스가 집중적으로 사용하는 페이지를 알아내는 방법
- `시간 구역성` : 프로세스가 실행되면서 하나의 페이지를 일정 시간 동안 집중적으로 액세스 하는 현상

  (순환, 서브 루틴, 스택, 집계에 사용되는 변수)

- `공간 구역성` : 프로세스 실행 시 일정 위치의 페이지를 집중적으로 액세스하는 현상

  (배열 순회, 순차 코드, 변수의 선언 부분)

#### 3) 워킹 셋

- _자주 참조하는 페이지들의 집합_
- 자주 참조되는 워킹 셋을 주기억장치에 상주시켜 페이지 부재 및 페이지 교체 현상이 줄어들어 프로세스의 기억장치 사용이 안정됨
- 워킹 셋은 시간에 따라 변화

#### 4) 페이지 부재 빈도 방식

- _페이지 부재 빈도는 페이지 부재가 일어나는 횟수_
- 페이지 부재율에 따라 주기억장치에 있는 페이지 프레임 수를 조정하여 적정 수준으로 유지하는 방식
- 운영체제는 프로세스 실행 초기에 임의의 페이지 프레임 할당 후 페이지 부재율에 따라 프레임을 할당하거나 회수

#### 5) 프리 페이징

- _처음의 과도한 페이지 부재를 방지하기 위해 필요할 것 같은 모든 페이지를 한꺼번에 페이지 프레임에 적재하는 기법_

#### 6) 스래싱

- _프로세스의 처리 시간보다 페이지 교체에 소요되는 시간이 더 많아지는 현상_
- 전체 프로세스 성능이 저하됨

  

## 8) 프로세스의 개요

---



#### 1) 프로세스의 정의

- 프로세서에 의해 처리되는 사용자 프로그램이나 시스템 프로그램을 의미

- 실행 중인 프로그램을 의미하며 작업 혹은 태스크라고도 함

* 프로세스의 또 다른 형태

  - PCB를 가진 프로그램
  - 실기억 장치에 저장된 프로그램
  - 디스패치가 가능한 단위
  - 프로시저(부 프로그램)가 활동 중인 것
  - 비동기적 행위(다수의 프로세스가 서로 독립적으로 실행)를 일으키는 주체
  - 지정된 결과를 얻기 위한 일련의 계통적 동작
  - 목적 또는 결과에 따라 발생되는 사건들의 과정
  - 운영체제가 관리하는 실행 단위

#### 2) PCB(Process Control Block)

- 운영체제가 프로세스에 대한 중요한 정보를 저장해 놓은 곳

- 프로세스가 생성될 때마다 고유의 PCB를 생성하고 프로세스 완료 시 제거됨

- PCB에 저장되는 정보 : 프로세스 현재 상태

- 포인터 : 프로세스 고유 식별자

- 스케줄링 및 프로세스의 우선순위 : CPU 레지스터 정보

- 주기억장치 관리 정보 : 입출력 상태 정보

- 계정 정보

  

#### 3) 프로세스 상태 전이

<img src="https://k.kakaocdn.net/dn/bEmmSV/btqCVC3gEVO/M12KKkK6iwuE0ZHTAxPnz0/img.png" alt="img" style="zoom: 25%;" />\*

- `제출` : 작업을 처리하기 위해 사용자가 작업을 시스템에 제출한 상태

- `접수` : 제출된 작업이 스풀 공간인 디스크의 할당 위치에 저장한 상태

- `준비`

  - 프로세스가 프로세서를 할당받기 위해 기다리고 있는 상태
  - 프로세스는 준비상태 큐에서 실행 준비
  - Job 스케줄러에 의해 수행

- `실행`

  - 준비상태 큐에 있는 프로세스가 프로세서를 할당받아 실행되는 상태
  - 프로세스 수행이 완료되기 전에 프로세스에게 주어진 할당 시간이 종료되면 프로세스는 준비 상태로 전이
  - 실행 중인 프로세스에 입출력 처리가 필요하면 실행중인 프로세스는 대기상태로 전이
  - CPU 프로세스에 의해 수행

- `대기` : 프로세스에 입출력 처리가 필요하면 현재 실행중인 프로세스가 중단되고, 입출력 처리가 완료될 때까지 대기하고 있는 상태

- `종료` : 프로세스의 실행이 끝나고 프로세스 할당이 해제된 상태

  

#### 4) 프로세스 상태 전이 관련 용어

- Dispatch : 준비 상태에 대기하고 있는 프로세스 중 하나가 프로세스를 할당받아 실행 상태로 전이되는 과정
- Wake up : 입출력 작업이 완료되어 프로세스가 대기 상태에서 준비 상태로 전이되는 과정





## 9) 병행 프로세스

---



#### 1) 병행 프로세스

* 프로세스 여러 개가 수행 상태에 있는 것



#### 2) 임계 구역

* 다중 프로그래밍 운영체제에서 여러 개의 프로세스가 공유하는 데이터 및 자원에 대하여 어느 한 시점에서는 하나의 프로세스만 자원 또는 데이터를 사용하도록 지정된 공유 자원(영역)

* 임계 구역에는 하나의 프로세스만 접근할 수 있으며, 해당 프로세스가 자원을 반납한 후에만 다른 프로세스가 자원이나 데이터를 사용할 수 있음

 

#### 3) 상호 배제(Mutual Exclusion)

* 특정 프로세스가 공유 자원을 사용하고 있을 경우 다른 프로세스가 해당 공유 자원을 사용하지 못하게 제어하는 기법

* 여러 프로세스가 동시에 공유 자원을 사용하려 할 때 각 프로세스가 번갈아 가며 공유 자원을 사용하도록 하는 것으로 임계 구역을 유지하는 기법

 

#### 4) 세마포어

* 각 프로세스에 제어 신호를 전달하여 순서대로 작업을 수행하도록 하는 기법

* 다익스트라가 제안하였으며, P와 V라는 2개의 연산에 의해서 동기화를 유지시키고, 상호 배제의 원리를 보장함

* S는 P와 V 연산으로만 접근 가능한 세마포어 변수로, 공유 자원의 개수를 나타내며 0과 1 혹은 0과 양의 값을 가질 수 있음

* `P 연산` : 자원을 사용하려는 프로세스들의 진입 여부를 자원의 개수(S)를 통해 결정하는 것으로, wait 동작이라 함

* `V 연산`: 대기 중인 프로세스를 깨우는 신호(Wake Up)로서, signal 동작이라 함



#### 5) 모니터 

* 동기화를 구현하기 위한 특수 프로그램 기법으로 특정 공유 자원을 프로세스에게 할당하는데 필요한 데이터와 이 데이터를 처리하는 프로시저로 구성됨

* 자료 추상화와 정보 은폐 개념을 기초로 하며 공유 자원을 할당하기 위한 병행성 구조로 이루어져 있음

* 모니터 내의 공유 자원을 사용하려면 프로세스는 반드시 모니터의 진입부를 호출해야 함

* 외부의 프로시저는 직접 액세스할 수 없으며, 모니터의 경계에서 상호 배제가 시행됨

* 한순간에 하나의 프로세스만 진입하여 자원을 사용할 수 있음