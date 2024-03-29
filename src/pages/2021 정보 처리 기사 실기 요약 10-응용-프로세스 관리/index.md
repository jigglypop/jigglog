---
path: "/2021 정보 처리 기사 실기 요약 10-응용-프로세스 관리/"
category: "정보처리기사 실기 요약"
tags: ["정보처리기사 실기 요약", "정보처리기사", "정처기"]
title: "2021 정보 처리 기사 실기 요약 10-응용-프로세스 관리"
date: "2021-05-02T21:01:00.000Z"
summary: "2021 정보 처리 기사 실기 요약 10-응용-프로세스 관리 활용 입니다. 정처기 공부를 할 때 활용하세요."
images: ["images/1.jpg"]
---

> 정보처리기사 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 책을 참고해서 공부하세요

> 2021 정보 처리 기사 실기 요약 10-응용-프로세스 관리 활용 요약 입니다. 정처기 공부를 할 때 활용하세요.





# 1. 프로세스

---



### 1) 프로세스

- _프로세서에 의해 처리되는 사용자 프로그램이나 시스템 프로그램_

- 실행 중인 프로그램을 의미하며 작업 혹은 태스크라고도 함

* `프로세스` : 컴퓨터에서 실행중인 프로그램
* `프로세서` : CPU와 같은 처리기를 의미

### 2) 프로세스 제어 블록 PCB(Process Control Block)

#### (1) 정의

- _운영체제가 프로세스에 대한 중요한 정보를 저장해 놓은 곳_
- 프로세스가 생성될 때마다 고유의 PCB를 생성하고 프로세스 완료 시 제거됨

#### (2) 프로세스 제어 블록의 정보

- 프로세스의 이름, 우선순위, 현재 상태

- 주기억 장치의 주소, 프로그램 카운터, 레지스터 영역

- 할당된 자원에 대한 정보, 계정 정보

  

### 3) 프로세스 상태 전이

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

- `Dispatch` : 준비 상태에 대기하고 있는 프로세스 중 하나가 프로세스를 할당받아 실행 상태로 전이되는 과정
- `Wake up` : 입출력 작업이 완료되어 프로세스가 대기 상태에서 준비 상태로 전이되는 과정



# 2. 스레드

---

### 1) 스레드의 구성 및 특징

* 프로세스의 구성 : 제어 흐름 부분(실행 부분)과 실행 환경 부분
* 스레드는 프로세스의 구성에서 실행 부분만 분리한 것으로 실행의 기본 단위, 프로세스 내에서 실행되는 흐름의 단위를 의미
* 프로세스를 사용하는 기본 단위이며, 명령어를 독립적으로 실행할 수 있는 하나의 제어 흐름
* 프로세스와 마찬가지로 스레드들도 CPU를 공유하며, 한순간에 오직 하나의 스레드만을 수행
* 프로세스 스케줄링에 따른 프로세스 문맥 교환의 부담을 줄여서 성능을 향상하기 위한 프로세스의 다른 표현 방식



### 2) 단일 스레드와 다중 스레드 모델

* 단일 스레드 프로세스 모델 : 하나의 프로세스가 하나의 스레드로 구성
* 다중 스레드 프로세스 모델 : 하나의 프로세스를 여라 스레드로 구성
* 프로세스를 각각의 스페드와 고유의 레지스터, 스택으로 표현, 프로세스 주소 영역을 모든 스레드가 공유
* 장점: 응답성, 자원 공유, 경제성, 다중 처리 구조



### 3) 병행 프로세스

#### (1) 병행 프로세스

* 프로세스 여러 개가 수행 상태에 있는 것


#### (2) 임계 구역

* 다중 프로그래밍 운영체제에서 여러 개의 프로세스가 공유하는 데이터 및 자원에 대하여 어느 한 시점에서는 하나의 프로세스만 자원 또는 데이터를 사용하도록 지정된 공유 자원(영역)

* 임계 구역에는 하나의 프로세스만 접근할 수 있으며, 해당 프로세스가 자원을 반납한 후에만 다른 프로세스가 자원이나 데이터를 사용할 수 있음



#### (3) 상호 배제(Mutual Exclusion)

* 특정 프로세스가 공유 자원을 사용하고 있을 경우 다른 프로세스가 해당 공유 자원을 사용하지 못하게 제어하는 기법

* 여러 프로세스가 동시에 공유 자원을 사용하려 할 때 각 프로세스가 번갈아 가며 공유 자원을 사용하도록 하는 것으로 임계 구역을 유지하는 기법

#### (4) 세마포어

* 각 프로세스에 제어 신호를 전달하여 순서대로 작업을 수행하도록 하는 기법

* 다익스트라가 제안하였으며, P와 V라는 2개의 연산에 의해서 동기화를 유지시키고, 상호 배제의 원리를 보장함

* S는 P와 V 연산으로만 접근 가능한 세마포어 변수로, 공유 자원의 개수를 나타내며 0과 1 혹은 0과 양의 값을 가질 수 있음

* `P 연산` : 자원을 사용하려는 프로세스들의 진입 여부를 자원의 개수(S)를 통해 결정하는 것으로, wait 동작이라 함

* `V 연산`: 대기 중인 프로세스를 깨우는 신호(Wake Up)로서, signal 동작이라 함

#### (5) 모니터 

* 동기화를 구현하기 위한 특수 프로그램 기법으로 특정 공유 자원을 프로세스에게 할당하는데 필요한 데이터와 이 데이터를 처리하는 프로시저로 구성됨
* 자료 추상화와 정보 은폐 개념을 기초로 하며 공유 자원을 할당하기 위한 병행성 구조로 이루어져 있음
* 모니터 내의 공유 자원을 사용하려면 프로세스는 반드시 모니터의 진입부를 호출해야 함
* 외부의 프로시저는 직접 액세스할 수 없으며, 모니터의 경계에서 상호 배제가 시행됨
* 한순간에 하나의 프로세스만 진입하여 자원을 사용할 수 있음



# 3. 프로세스 스케줄링

---



## 1) 비선점(Non-preemptive) 스케줄링

* _이미 할당된 CPU를 다른 프로세스가 강제로 빼앗아 사용할 수 없는 스케줄링 기법_



### 1) FIFO(First In First Out, 선입 선출) = FCFS(First Come First Service)

* _대기 리스트에 먼저 도착한 프로세스 순서대로 CPU를 할당_
* 장점 : 알고리즘이 간단하고 구현하기 쉬움
* 단점 : 먼저 도착한 것이 먼저 처리되어 공평성은 유지되지만 짧은 작업이 긴 작업을, 중요한 작업이 중요하지 않은 작업을 기다림   

| 프로세스 | 도착시간 | 실행시간 | 우선순위 | 시작시간 | 대기시간(시작-도착) | 종료시간 | 반환시간(종료-도착) |
| -------- | -------- | -------- | -------- | -------- | ------------------- | -------- | ------------------- |
| A        | 0        | 5        | 1        | 0        | 0                   | 5        | 5                   |
| B        | 1        | 2        | 2        | 5        | 4                   | 7        | 6                   |
| C        | 2        | 8        | 3        | 7        | 5                   | 15       | 13                  |
| D        | 3        | 4        | 4        | 15       | 12                  | 19       | 16                  |

| 시간 | 0-1   | 1-2   | 2-3   | 3-4  | 4-5  | 5-6  | 6-7  | 7-8  | 8-9  | 9-10 | 10-11 | 11-12 | 12-13 | 13-14 | 14-15 | 15-16 | 16-17 | 17-18 | 18-19 |
| ---- | ----- | ----- | ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| A    | `a=s` | ` `  | ` ` | ` ` | ` ` |      |       |       |       |       |       |       |       |       |       |||||
| B    |       | ~~a~~ | ~~~~  | ~~~~ | ~~~~ | ` ` | ` ` |      |       |       |       |       |       |       |       |       |       |||
| C    |       |       | ~~a~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ` ` | ` ` | ` ` | ` ` |` `|` `|` `|` `|` `||||
| D    |       |       |       | ~~a~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~  | ~~~~  | ~~~~  | ~~~~  | ~~~~  | `s` | ` ` | ` ` |` `|

* 평균 대기 시간 = 각 프로세스의 대기 시간 합 / 프로세스 수 = (0 + 4 + 5 + 12) / 4 = 5.25
* 평균 반환 시간 = 각 프로세스의 반환 시간 합 / 프로세스 수 = (5 + 6 + 13 + 16) / 4 = 10



### 2) SJF(Shortest Job First, 단기 작업 우선)

* _대기 리스트의 프로세스들 중 작업 시간이 가장 짧은 프로세스에 CPU를 할당_

* FIFO보다 평균 대기 시간이 짧지만 실행 시간이 긴 작업의 경우 FIFO보다 대기 시간이 길어짐
* 가장 짧은 평균 대기 시간 제공

| 프로세스 | 도착시간 | 실행시간 | 우선순위 | 시작시간 | 대기시간(시작-도착) | 종료시간 | 반환시간(종료-도착) |
| -------- | -------- | -------- | -------- | -------- | ------------------- | -------- | ------------------- |
| A        | 0        | 5        | 1        | 0        | 0                   | 5        | 5                   |
| B        | 1        | 2        | 2        | 5        | 4                   | 7        | 6                   |
| C        | 2        | 8        | 4        | 11       | 9                   | 19       | 17                  |
| D        | 3        | 4        | 3        | 7        | 4                   | 11       | 8                   |

| 시간 | 0-1   | 1-2   | 2-3   | 3-4   | 4-5  | 5-6  | 6-7  | 7-8  | 8-9  | 9-10 | 10-11 | 11-12 | 12-13 | 13-14 | 14-15 | 15-16 | 16-17 | 17-18 | 18-19 |
| ---- | ----- | ----- | ----- | ----- | ---- | ---- | ---- | ---- | ---- | ---- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| A    | `a=s` | ` `   | ` `   | ` `   | ` `  |      |      |      |      |      |       |       |       |       |       |       |       |       |       |
| B    |       | ~~a~~ | ~~~~  | ~~~~  | ~~~~ | ` `  | ` `  |      |      |      |       |       |       |       |       |       |       |       |       |
| C    |       |       | ~~a~~ | ~~~~  | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~  | `s`   | ` `   | ` `   | ` `   | ` `   | ` `   | ` `   | ` `   |
| D    |       |       |       | ~~a~~ | ~~~~ | ~~~~ | ~~~~ | `s`  | ` `  | ` `  | ` `   |       |       |       |       |       |       |       |       |

* 평균 대기 시간 = 각 프로세스의 대기 시간 합 / 프로세스 수 = (0 + 4 + 5 + 12) / 4 = 5.25
* 평균 반환 시간 = 각 프로세스의 반환 시간 합 / 프로세스 수 = (5 + 6 + 13 + 16) / 4 = 10

### 3) HRN(Hightest Response Next)

* _실행 시간이 긴 프로세스에 불리한 SJF 기법을 보완 하기 위한 것으로, 대기 시간과 서비스(실행) 시간을 이용하는 기법_

- _우선순위 계산식 : (대기 시간 + 서비스 시간) / 서비스 시간_

### 4) 기한부(Deadline)

* _프로세스에게 일정한 시간을 주어 그 시간 안에 프로세스를 완료하도록 하는 기법_
* 시스템은 프로세스에 할당한 정확한 시간을 추정해야 하며 이를 위해 사용자는 시스템이 요구한 프로세스에 대한 정확한 정보 제공
* 실시간 운영체제에서 사용하며 정해진 시간 내에 결과가 나와야 하는 중요한 시스템에서 사용



## 2) 선점(Preemptive) 스케줄링

* 하나의 프로세스가 CPU를 할당받아 실행하고 있을 때 우선순위가 높은 다른 프로세스가 CPU를 강제로 빼앗아 사용할 수 있는 스케줄링 기법

- 선점 우선순위 : 준비상태 큐의 프로세스들 중에서 우선 순위가 가장 높은 프로세스에게 먼저 CPU를 할당하는 기법

### (1) RR(Round Robin 라운드 로빈) 

* FIFO를 선점형 스케줄링으로 변형한 기법
* FIFO형태로 대기 큐를 사용하지만 각 프로세스에게 시간 조각 할당
* 할당된 시간 초과 시 대기 큐의 끝으로 이동하여 번갈아 가면서 실행

| 프로세스 | 도착시간 | 실행시간 | 대기시간(시작-도착) | 종료시간 | 반환시간(종료-도착) |
| -------- | -------- | -------- | ------------------- | -------- | ------------------- |
| A        | 0        | 5        | 8                   | 13       | 13                  |
| B        | 1        | 2        | 2                   | 5        | 4                   |
| C        | 2        | 8        | 9                   | 19       | 17                  |
| D        | 3        | 4        | 10                  | 17       | 14                  |

| 시간 | 0-1   | 1-2   | 2-3   | 3-4   | 4-5  | 5-6  | 6-7  | 7-8  | 8-9  | 9-10 | 10-11 | 11-12 | 12-13 | 13-14 | 14-15 | 15-16 | 16-17 | 17-18 | 18-19 |
| ---- | ----- | ----- | ----- | ----- | ---- | ---- | ---- | ---- | ---- | ---- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| A    | `a=s` | ` `   | ` `   | ~~~~  | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~  | `s`   | ` `   |       |       |       |       |       |       |
| B    |       | ~~a~~ | ~~~~  | `s`   | ` `  |      |      |      |      |      |       |       |       |       |       |       |       |       |       |
| C    |       |       | ~~a~~ | ~~~~  | ~~~~ | `s`  | ` `  | ` `  | ~~~~ | ~~~~ | ~~~~  | ~~~~  | ~~~~  | `s`   | ` `   | ` `   | ~~~~  | `s`   | ` `   |
| D    |       |       |       | ~~a~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | `s`  | ` `  | ` `   | ~~~~  | ~~~~  | ~~~~  | ~~~~  | ~~~~  | `s`   |       |       |

* 평균 대기 시간 = 각 프로세스의 대기 시간 합 / 프로세스 수 = (0 + 4 + 5 + 12) / 4 = 5.25
* 평균 반환 시간 = 각 프로세스의 반환 시간 합 / 프로세스 수 = (5 + 6 + 13 + 16) / 4 = 10

### 

### (2) SRT(Shortest Remaining Time) 

* 비선점 스케줄링인 SJF 기법을 선점 형태로 변경한 기법
* 선점형이므로 프로세스 실행 중 수행 시간이 더 작은 프로세스가 들어오면 CPU를 선점 당함
* 다음 프로세스는 잔여 수행 시간이 가장 짧은 것을 선택
* 우선순위 결정에 잔여 실행 시간을 실시간으로 계산하는 추가 시간이 필요
* 오버헤드(추가 시간)가 많이 발생하면 SJF가 더 나은 경우도 있음

| 프로세스 | 도착시간 | 실행시간 | 대기시간(시작-도착) | 종료시간 | 반환시간(종료-도착) |
| -------- | -------- | -------- | ------------------- | -------- | ------------------- |
| A        | 0        | 5        | 2                   | 7        | 7                   |
| B        | 1        | 2        | 0                   | 3        | 2                   |
| C        | 2        | 8        | 9                   | 19       | 17                  |
| D        | 3        | 4        | 4                   | 11       | 8                   |

| 시간 | 0-1   | 1-2   | 2-3   | 3-4   | 4-5  | 5-6  | 6-7  | 7-8  | 8-9  | 9-10 | 10-11 | 11-12 | 12-13 | 13-14 | 14-15 | 15-16 | 16-17 | 17-18 | 18-19 |
| ---- | ----- | ----- | ----- | ----- | ---- | ---- | ---- | ---- | ---- | ---- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| A    | `a=s` | ~~~~  | ~~~~  | `a`   | ` `  | ` `  | ` `  |      |      |      |       |       |       |       |       |       |       |       |       |
| B    |       | `a=s` | ` `   |       |      |      |      |      |      |      |       |       |       |       |       |       |       |       |       |
| C    |       |       | ~~a~~ | ~~~~  | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~ | ~~~~  | `a`   | ` `   | ` `   | ` `   | ` `   | ` `   | ` `   | ` `   |
| D    |       |       |       | ~~a~~ | ~~~~ | ~~~~ | ~~~~ | `a`  | ` `  | ` `  | ` `   |       |       |       |       |       |       |       |       |

* 평균 대기 시간 = 각 프로세스의 대기 시간 합 / 프로세스 수 = (0 + 4 + 5 + 12) / 4 = 5.25
* 평균 반환 시간 = 각 프로세스의 반환 시간 합 / 프로세스 수 = (5 + 6 + 13 + 16) / 4 = 10

### (3) MQ(Multi-level Queue, 다단계 큐) 

- _여러 종류의 큐를 준비한 후 작업 유형별로 프로세스를 분류하고 큐를 이용하여 RR하는 방식으로 운영_
- 우선순위에 따라 시스템, 대화형, 대화형 편집, 일괄 처리, 사용자 프로세스로 구분하여 상위, 중위, 하위 단계로 큐를 배치
- 프로세스의 큐(대기 리스트) 간 이동 불가

### (4) MFQ(Multi-level Feedback Queue, 다단계 피드백 큐) 

- _우선순위를 갖는 여러 큐를 준비하고, 수행 시간이 긴 프로세스일수록 낮은 우선순위를 갖도록 조정하여 낮은 우선순위 큐로 이동시키는 기법_
- 유사점 :
  - MQ와 MFQ는 여러 대기 리스트 사용
- 차이점 :
  - MQ는 특정 그룹의 큐에 들어간 프로세스가 다른 준비 상태의 큐로 이동 불가
  - MFQ는 큐 사이를 이동 가능



## 3) 교착상태(Dead Lock)

### (1) 교착 상태

* _상호 배제에 의해 나타나는 문제점으로, 둘 이상의 프로세스들이 자원을 점유한 상태에서 서로 다른 프로세스가 점유하고 있는 자원을 요구하며 무한정 기다리는 현상_

### (2) 교착상태 발생의 필요 충분 조건~~(상점비환)~~

- `상호 배제` : 한번에 한 개의 프로세스만이 공유 자원을 사용할 수 있어야 함
- `점유와 대기` : 최소한 하나의 자원을 점유하고 있으면서 다른 프로세스에 할당되어 사용되고 있는 자원을 추가로 점유하기 위해 대기하는 프로세스가 있어야 함
- `비선점` : 다른 프로세스에 할당된 자원은 사용이 끝날 때까지 강제로 빼앗을 수 없어야 함
- `환형 대기` : 공유 자원과 공유 자원을 사용하기 위해 대기하는 프로세스들이 원형으로 구성되어있어 자신에게 할당된 자원을 점유하면서 앞이나 뒤에있는 프로세스의 자원을 요구해야 함

### (3) 교착 상태 해결 방법

- `예방 기법` : 교착상태가 발생하지 않도록 사전에 시스템을 제어하는 방법으로, 교착상태 발생의 네가지 조건 중에서 어느 하나를 제거함으로써 수행
  - _상호 배제 부정_ : 한 번에 여러 개의 프로세스가 공유 자원을 사용할 수 있도록 함
  - _점유 및 대기 부정_ : 프로세스가 실행되기 전 필요한 모든 자원을 할당하여 프로세스 대기를 없애거나 자원이 점유되지 않은 상태에서만 자원을 요구하도록 함
  - _비선점 부정_ : 자원을 점유하고 있는 프로세스가 다른 자원을 요구할 때 점유하고 있는 자원을 반납하고, 요구한 자원을 사용하기 위해 기다리게 함
  - _환형 대기 부정_ : 자원을 선형 순서로 분류하여 고유 번호를 할당하고, 각 프로세스는 현재 점유한 자원의 고유 번호보다 앞이나 뒤 어느 한쪽 방향으로만 자원을 요구하도록 하는 것
- `회피 기법` : 교착상태가 발생할 가능성을 배제하지 않고 교착상태가 발생하면 적절히 피해나가는 방법으로, 주로 은행원 알고리즘이 사용
- `발견 기법` : 시스템에 교착 상태가 발생했는지 점검하여 교착 상태에 있는 프로세스와 자원을 발견하는 것으로, 자원 할당 그래프 등을 사용
- `회복 기법` : 교착 상태를 일으킨 프로세스를 종료하거나 교착 상태의 프로세스에 할당된 자원을 선점하여 프로세스나 자원을 회복하는 것



# 4. 기억 장치 관리

---

## 1) 기억 장치 관리 전략의 개요

### (1) 저장장치 계층 구조의 특징

- 주기억장치는 각기 자신의 주소를 가지는 워드 또는 바이트들로 구성되어 주소를 이용하여 접근
- 보조기억장치에 있는 프로그램이나 데이터는 CPU가 직접 액세스 할 수 없음
- 보조기억장치에 있는 데이터는 주기억장치에 적재된 후 CPU에 의해 액세스

### (2) 기억장치의 관리 전략의 개요

#### (1) 반입(Fetch) 전략

- 보조기억장치에 보관중인 데이터를 언제 주기억장치에 적재할 것인지를 결정하는 전략
- 요구 반입 : 실행중인 프로그램이 특정 프로그램이나 데이터 등의 참조를 요구할 때 적재
- 예상 반입 : 실행중인 프로그램에 의해 참조될 프로그램이나 데이터를 미리 예상하여 적재

#### (2) 배치(Placement) 전략

- 새로 반입되는 데이터를 주기억장치의 어디에 위치시킬 것인지를 결정하는 전략

- `최초 적합(First Fit)` : 배치가 가능한 크기의 빈 영역 중에서 첫 번째 분할 영역에 배치

- `최적 적합(Best Fit)` : 배치가 가능한 크기의 빈 영역 중에서 단편화를 가장 적게 남기는 분할 영역에 배치

- `최악 적합(Worst Fit)` : 배치가 가능한 크기의 빈 영역중에서 단편화를 가장 많이 남기는 분할 영역에 배치

- 내부 단편화 : 배치 후 남은 공간

- 외부 단편화 : 배치를 못해 빈 공간으로 남아있는 공간

| 영역번호 | 영역크기 | 상태   |
| -------- | -------- | ------ |
| 1        | 5K       | 공백   |
| 2        | 14K      | 공백   |
| 3        | 10K      | 사용중 |
| 4        | 12K      | 공백   |
| 5        | 16K      | 공백   |

* 먼저 10K 가 적재될 수 있는지 각 영역의 크기 확인
* First Fit : 빈 영역 중에서 10K의 프로그램이 들어갈 수 있는 첫번째 영역은 2번째
* Best Fit : 빈 영역 중에서 10K 프로그램이 들어가고 단편화를 가장 작게 넘기는 영역은 4번
* Worst Fit : 빈 영역 중에서 10K 프로그램이 들어가고 단편화를 가장 많이 남기는 영역은 5번

### (3) 교체(Replacement) 전략

- 주기억장치의 모든 영역이 이미 사용 중인 상태에서 새로운 프로그램이나 데이터가 배치하려고 할 때, 이미 사용 중인 영역에서 어느 영역을 교체할 것인지를 결정하는 전략
- 페이지 교체 알고리즘 사용
- FIFO, OPT, LRU, LFU, NUR, SCR 등



## 2) 주기억장치 할당 기법

#### (1) 주기억장치 할당의 개념

- 프로그램이나 데이터를 실행시키기 위해 주기억장치에 어떻게 할당할 것인지에 대한 내용

- 연속 할당 기법

  - 프로그램을 주 기억장치에 연속으로 할당하는 기법

- 단일 분할 할당 기법 : 오버레이, 스와핑

  - 다중 분할 기법 : 고정 분할 할당 기법, 동적 분할 할당 기법

* 분산 할당 기법

  - 프로그램을 특정 단위의 조각으로 나누어 주기억장치 내에 분산하여 할당하는 기법

  * 페이징 기법, 세그먼테이션 기법

#### (2) 단일 분할 할당 기법

- 주기억장치를 운영체제 영역과 사용자 영역으로 나누어 한순간에는 오직 한 명의 사용자만이 주기억장치의 사용자 영역을 사용하는 기법

* 오버레이 기법 : 주기억장치보다 큰 사용자 프로그램을 실행하기 위한 기법

  - 보조기억장치에 저장된 하나의 프로그램을 여러개의 조각으로 분할한 후 필요한 조각을 차례로 주기억장치에 적재하여 프로그램을 실행

- 스와핑 기법 : 하나의 프로그램 전체를 주기억장치에 할당하여 사용하다 필요에 따라 다른 프로그램과 교체하는 기법

#### (3) 다중 분할 할당 기법

- 고정 분할 할당 기법 : 프로그램에 할당하기 전에 운영체제가 주기억장치의 사용자 영역을 여러 개의 고정된 크기로 분할하고 준비상태 큐에서 준비 중인 프로그램을 각 영역에서 할당하여 수행하는 기법

- 가변 분할 할당 기법 : 미리 주기억장치에 분할해 놓는 것이 아닌 프로그램을 주기억장치에 적재하면서 필요한 만큼의 크기로 영역을 분할

  210409



## 2) 가상 기억 장치의 배경 이론

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

  

## 4) 가상 기억 장치의 관리 전략

### (1) 페이징 기법

- 가상기억장치의 보관되어 있는 프로그램과 주기억장치의 영역을 동일한 크기로 나눈 후 나눠진 프로그램을 동일하게 나눠진 주기억장치의 영역에 적재시켜 실행하는 기법
- 프로그램을 일정한 크기로 나눈 크기를 페이지라 하고 페이지 크기로 일정하게 나누어진 주기억장치의 단위를 페이지 프레임이라고 함
- 외부 단편화는 발생하지 않으나 `내부 단편화`는 발생할 수 있음
- Mapping 작업을 위해서 페이지 맵 테이블이 필요함

### (2) 세그먼트 기법

- 가상기억장치에 보관되어 있는 프로그램을 다양한 크기의 논리적인 단위로 나눈 후 주기억장치에 적재시켜 실행시키는 방법
- 프로그램을 논리적인 크기로 나눈 단위를 세그먼트라고 함
- 내부 단편화는 발생하지 않으나 `외부 단편화`는 발생할 수 있음
- Mapping 작업을 위해서 세그먼트 맵 테이블이 필요함
- 세그먼트가 주기억장치에 적재될 때 다른 세그먼트에게 할당된 영역을 침범할 수 없으며 이를 위해 기억장치 보호키가 필요



## 4) 페이지 교체 알고리즘

* 페이지 부재가 발생했을 때 가상 기억장치의 필요한 페이지를 주기억장치에 적재해야 하는데 이럴 경우 주기억장치의 모든 페이지 프레임이 사용 중이면 어떤 페이지 프레임을 선택하여 교체할 것인지 결정하는 기법

### (1) OPT(OPTimal replacement, 최적 교체)

- _앞으로 가장 오랫동안 사용하지 않을 페이지를 교체(예상)_

### (2) FIFO(First In First Out)

- _페이지가 주기억장치에 적재될 때마다 시간을 기억시켜 가장 먼저 들어와서 오래 있었던 페이지를 교체_
- 먼저 들어온 것이 먼저 나감

| 순서 | 1    | 2    | 3    | 4    | 5    | 6    | 7        | 8    | 9        |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | -------- |
| 요구 | 1    | 2    | 3    | 2    | 1    | 2    | 4        | 2    | 5        |
|      | 1    | 1    | 1    | 1    | 1    | 1    | `1 -> 4` | 4    | 4        |
|      |      | 2    | 2    | 2    | 2    | 2    | 2        | 2    | `2 -> 5` |
|      |      |      | 3    | 3    | 3    | 3    | 3        | 3    | 3        |
| 부재 | O    | O    | O    |      |      |      | O        |      | O        |

### (3) LRU(Least Recently Used)

- _최근에 가장 오랫동안 사용하지 않은 페이지를 교체_
- 페이지마다 Counter나 Stack을 두어 현시점에서 가장 오래전에 사용된 페이지 교체

| 순서 | 1    | 2    | 3    | 4    | 5    | 6    | 7            | 8    | 9            |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------------ | ---- | ------------ |
| 요구 | 1    | 2    | 3    | 2    | 1    | 2    | 4            | 2    | 5            |
|      | 1(1) | 1(1) | 1(1) | 1(1) | 1(5) | 1(5) | 1(5)         | 1(5) | `1 -> 5_(9)` |
|      |      | 2(2) | 2(2) | 2(4) | 2(4) | 2(6) | 2(6)         | 2(8) | 2(8)         |
|      |      |      | 3(3) | 3(3) | 3(3) | 3(3) | `3 -> 4_(7)` | 4(7) | 4(7)         |
| 부재 | O    | O    | O    |      |      |      | O            |      | O            |

### (4) LFU(Least Frequently Used)

- _사용 빈도가 가장 적은 페이지를 교체_

| 순서 | 1      | 2      | 3      | 4      | 5      | 6      | 7              | 8      | 9            |
| ---- | ------ | ------ | ------ | ------ | ------ | ------ | -------------- | ------ | ------------ |
| 요구 | 1      | 2      | 3      | 2      | 1      | 2      | 4              | 2      | 5            |
|      | 1 (+1) | 1 (+1) | 1 (+1) | 1 (+1) | 1 (+2) | 1 (+2) | 1 (+2)         | 1 (+2) | 1 (+2)       |
|      |        | 2 (+1) | 2 (+1) | 2 (+2) | 2 (+2) | 2 (+3) | 2 (+3)         | 2 (+4) | 2 (+4)       |
|      |        |        | 3 (+1) | 3 (+1) | 3 (+1) | 3 (+1) | `3 -> 4  (+1)` | 4 (+1) | `4 -> 5(+1)` |
| 부재 | O      | O      | O      |        |        |        | O              |        | O            |

### (5) NUR(Not Used Frequency)

- _최근에 사용하지 않은 페이지를 교체_

- 최근 사용 여부를 확인하기 위해 페이지마다 참조 비트와 변형 비트를 사용

### (6) SCR(Second Change Replacement)

* _이전에 참조된 페이지가 다시 한번 참조된 경우 이후 교체될 순서에 다시 한번 기회를 주는 기법_
* FIFO 알고리즘의 단점 보완
* 2차 기회 교체 알고리즘

### (7) 무작위 페이지 교체(Random Page Replacement)

* _임의의 페이지를 선택하여 교체_

### (8) MFU(Most Frequently Used)

* _주기억 장치에서 참조 횟수가 가장 많은 페이지를 교체_
* 가장 작은 계수를 가진 페이지는 방금 입력된 페이지이며 앞으로 사용될 확률이 크다는 것을 전제