---
path: "/2021 정보 처리 기사 실기 요약 7-애플리케이션 테스트 관리/"
category: "정보처리기사 실기 요약"
tags: ["정보처리기사 실기 요약", "정보처리기사", "정처기"]
title: "2021 정보 처리 기사 실기 요약 7-애플리케이션 테스트 관리"
date: "2021-05-14T17:00:00.000Z"
summary: "2021 정보 처리 기사 애플리케이션 테스트 관리 요약 입니다. 정처기 공부를 할 때 활용하세요."
images: ["images/1.jpg"]
---

> 정보처리기사 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 책을 참고해서 공부하세요

> 2021 정보 처리 기사 애플리케이션 테스트 관리 입니다. 정처기 공부를 할 때 활용하세요.

# 1. 애플리케이션 테스트

---

- _애플리케이션에 잠재되어 있는 결함을 찾아내는 일련의 행위 또는 절차_
- 개발된 소프트웨어가 고객의 요구사항을 만족시키는지 확인하고 소프트웨어가 기능을 정확히 수행하는지 검증
- _애플리케이션 테스트의 기본 원리_
- `완벽한 테스트 불가능` : 애플리케이션 테스트는 소프트웨어의 잠재적인 결함을 줄일 수 있지만 소프트웨어에 결함이 없다고 증명할 수는 없음
- `결함 집중` : 애플리케이션의 결함은 대부분 개발자의 특성이나 애플리케이션의 기능적 특징 때문에 특정 모듈에 집중되어 있음
- `살충제 패러독스` : 애플리케이션 테스트에서는 동일한 테스트 케이스로 동일한 테스트를 반복하면 더 이상 결함이 발견되지 않는 현상
- `테스팅은 정황 의존` : 애플리케이션 테스트는 소프트웨어 특징, 테스트 환경, 테스터 역량 등 정황에 따라 테스트 결과가 달라질 수 있으므로, 정황에 따라 테스트를 다르게 수행해야 함
- `오류-부재의 궤변` : 소프트웨어의 결함을 모두 제거해도 사용자의 요구사항을 만족시키지 못하면 해당 소프트웨어는 품질이 높다고 말할 수 없음

* `파레토 법칙`  : 애플리케이션의 20%에 해당하는 코드에서 전체 결함의 80% 가 발견

# 2. 애플리케이션 테스트의 분류

---

- `프로그램 실행 여부`

  - _정적 테스트_ : 프로그램을 실행하지 않고 명세서나 소스 코드를 대상으로 분석
  - _동적 테스트_ : 프로그램을 실행하여 오류를 찾는 테스트로, 소프트웨어 개발의 모든 단계에서 테스트

- `테스트 기반`

  - _명세 기반 테스트_ : 사용자의 요구사항에 대한 명세를 빠짐없이 테스트 케이스로 만들어 구현하고 있는지 확인하는 테스트
  - _구조 기반 테스트_ : 소프트웨어 내부의 논리 흐름에 따라 테스트 케이스를 작성하고 확인하는 테스트
  - _경험 기반 테스트_ : 유사 소프트웨어나 기술 등에 대한 테스터의 경험을 기반으로 수행하는 테스트

- `시각`

  - _검증 테스트_ : 개발자의 시각에서 제품의 생산 과정을 테스트, 제품이 명세서대로 완성됐는지를 테스트
  - _확인 테스트_ : 사용자의 시각에서 생산된 제품의 결과를 테스트, 사용자가 요구한대로 제품이 완성됐는지, 제품이 정상적으로 동작하는지

- `목적`
  - _회복 테스트_ : 시스템에 여러 가지 결함을 주어 실패하도록 한 후 올바르게 복구되는지를 확인
  - _안전 테스트_ : 시스템에 설치된 시스템 보호 도구가 불법적인 침입으로부터 시스템을 보호할 수 있는지를 확인
  - _강도 테스트_ : 시스템에 과도한 정보량이나 빈도 등을 부과하여 과부하 시에도 소프트웨어가 정상적으로 실행되는지를 확인
  - _성능 테스트_ : 소프트웨어의 실시간 성능이나 전체적인 효율성을 진단하는 테스트로, 소프트웨어의 응답 시간, 처리량
  - _구조 테스트_ : 소프트웨어 내부의 논리적인 경로, 소스 코드의 복잡도 등을 평가
  - _회귀 테스트_ : 소프트웨어의 변경 또는 수정된 코드에 새로운 결함이 없음을 확인
  - _병행 테스트_ : 변경된 소프트웨어와 기존 소프트웨어에 동일한 데이터를 입력하여 결과를 비교

# 3. 화이트박스 테스트

---

- `화이트박스 테스트` : _모듈의 원시 코드를 오픈시킨 상태에서 원시 코드의 논리적인 모든 경로를 테스트, 원시 코드의 모든 문장을 한 번 이상 실행, 모듈 안의 작동을 직접 관찰_

- `기초 경로 검사` : 테스트 케이스 설계자가 절차적 설계의 논리적 복잡성을 측정할 수 있게 해주는 테스트 기법, 테스트 측정 결과는 실행 경로의 기초를 정의하는데 지침으로 사용

- `제어 구조 검사`

  - _조건 검사_ : 프로그램 모듈 내 에 있는 논리적 조건을 테스트하는 테스트 케이스 설계 기법
  - _루프 검사_ : 프로그램의 반복 구조에 초점을 맞춰 실시하는 테스트 케이스 설계 기법
  - _데이터 흐름 검사_ : 프로그램 에서 변수의 정의와 변수 사용의 위치에 초점을 맞춰 실시하는 테스트 케이스 설계 기법

  - _화이트박스 테스트 검증 기준_ : 테스트 케이스들이 적정한지를 판단하는 기준( 문장 검증 기준, 분기 검증 기준, 조건 검증 기준, 분기/조건 기준)

# 4. 블랙박스 테스트

---

- `블랙박스 테스트`: _소프트웨어가 수행할 특정 기능을 알기 위해서 각 기능이 완전히 작동되는 것을 입증하는 테스트(=기능 테스트)_
- 사용자의 요구사항 명세를 보면서 테스트하는 것으로, 주로 구현된 기능을 테스트. 소프트웨어 인터페이스에서 실시
- _블랙박스 테스트의 종류_
- `동치 분할 검사` : 입력 자료에 초점을 맞춰 테스트 케이스를 만들고 검사
- `경계값 분석` : 입력 자료에만 치중한 동치 분할 기법을 보완하기 위한 기법으로, 입력 조건의 경계값을 테스트 케이스로 선정하여 검사
- `원인 효과 그래프 검사` : 입력 데이터 간의 관계와 출력에 영향을 미치는 상황을 체계적으로 분석한 다음 효용성이 높은 테스트 케이스를 선정하여 검사
- `오류 예측 검사` : 과거의 경험이나 확인자의 감각으로 테스트
- `비교 검사` : 여러 버전의 프로그램에 동일한 테스트 자료를 제공하여 동일한 결과가 출력되는지 테스트

# 5. 개발 단계에 따른 애플리케이션 테스트

---

- `단위 테스트` : 코딩 직후 소프트웨어 설계의 최소 단위인 모듈이나 컴포넌트에 초점을 맞춰 테스트
  - _구조 기반 테스트_ : 프로그램 내부 구조 및 복잡도를 검증하는 화이트박스 테스트 시행
  - _명세 기반 테스트_ : 목적 및 실행 코드 기반의 블랙박스 테스트 시행
- `통합 테스트` : 단위 테스트가 완료된 모듈들을 결합하여 하나의 시스템으로 완성시키는 과정에서의 테스트
- `시스템 테스트` : 개발된 소프트웨어가 해당 컴퓨터 시스템에서 완벽하게 수행되는가를 점검하는 테스트
- `인수 테스트` : 개발한 소프트웨어가 사용자의 요구사항을 충족하는지에 중점을 두고 테스트하는 것
  - _알파 테스트_ : 개발자의 장소에서 사용자가 개발자앞에서 행하는 테스트 기법, 테스트는 통제된 환경에서 행해지며, 오류와 사용상의 문제점을 사용자와 개발자가 함께 확인하면서 기록
  - _베타 테스트_ : 선정된 최종 사용자가 여러 명의 사용자 앞에서 행하는 테스트 기법, 개발자에 의해 제어되지 않은 상태에서 테스트가 행해지며, 발견된 오류와 사용상의 문제점을 기록하고 개발자에게 주기적으로 보고

# 6. 통합 테스트

---

- _단위 테스트가 끝난 모듈을 통합하는 과정에서 발생하는 오류 및 결함을 찾는 테스트 기법_
- `비점진적 통합 방식` : 단계적으로 통합하는 절차 없이 모든 모듈이 미리 결합되어 있는 프로그램 전체를 테스트하는 방법, 규모가 작은 소프트웨어에 유리하며 단시간 내에 테스트가 가능, 오류 발견 및 장애 위치 파악 및 수정이 어려움
  - _빅뱅 통합 테스트_ : 모듈 간의 상호 인터페이스를 고려 하지 않고 단위 테스트가 끝난 모듈을 한꺼번에 결합시켜 테스트
- `점진적 통합 방식` : 모듈 단위로 단계적으로 통합하면서 테스트하는 방법, 오류 수정이 용이하고 인터페이스와 연관된 오류를 완전히 테스트할 가능성이 높음
  - _하향식 통합 테스트_ : 상위 모듈에서 하위 모듈 방향으로 통합하면서 테스트
  - _상향식 통합 테스트_ : 하위 모듈에서 상위 모듈 방향으로 통합하면서 테스트
  - _혼합식 통합 테스트(=샌드위치식 통합 테스트)_ : 하위 수준에서는 상향식 통합, 상위 수준에서는 하향식 통합을 사용하여 최적의 테스트를 지원하는 방식
- `회귀 테스트` : 이미 테스트된 프로그램의 테스팅을 반복하는 것으로, 통합 테스트로 인해 변경된 모듈이나 컴포넌트에 새로운 오류가 있는지 확인하는 테스트

# 7. 애플리케이션 테스트 프로세스

---

- _개발된 소프트웨어가 사용자의 요구대로 만들어졌는지, 결함은 없는지등을 테스트하는 절차_
- `테스트 계획` : 프로젝트 계획서, 요구 명세서 등을 기반으로 테스트 목표를 정의하고 테스트 대상 및 범위를 결정
- `테스트 분석 및 디자인` : 테스트의 목적과 원칙을 검토하고 사용자의 요구 사항을 분석
- `테스트 케이스 및 시나리오 작성` : 테스트 케이스의 설계 기법에 따라 테스트 케이스를 작성하고 검토 및 확인한 후 테스트 시나리오를 작성
- `테스트 수행` : 테스트 환경을 구축한 후 수행
- `테스트 결과 평가 및 리포팅` : 테스트 결과를 비교 분석하여 테스트 결과서를 작성
- `결함 추적 및 관리` : 테스트를 수행한 후 결함이 어디에서 발생 했는지, 어떤 종류의 결함인지 등 결함을 추적하고 관리

# 8. 테스트 케이스

---

- _구현된 소프트웨어가 사용자의 요구사항을 정확하게 준수했는지를 확인하기 위해 설계된 입력값, 실행 조건, 기대 결과 등으로 구성된 테스트 항목에 대한 명세서, 명세 기반 테스트의 설계 산출물에 해당_
- _테스트 케이스 작성 순서_
- `테스트 계획 검토 및 자료 확보`
- `위험 평가 및 우선순위 결정`
- `테스트 요구사항 정의`
- `테스트 구조 설계 및 테스트 방법 결정`
- `테스트 케이스 정의`

# 9. 테스트 시나리오

---

- _테스트 케이스를 적용하는 순서에 따라 여러 개의 테스트 케이스들을 묶은 집합으로, 테스트 케이스들을 적용하는 구체적인 절차를 명세한 문서_
- 테스트 순서에 대한 절차, 사전 조건, 입력 데이터 등이 설정
- 시스템별, 모듈별, 항목별 등과 같이 여러 개의 시나리오로 분리하여 작성
- 각각의 테스트 항목은 식별자 번호, 순서 번호, 테스트 데이터, 테스트 케이스, 예상 결과, 확인 등을 포함해서 작성
- 유스케이스간 업무 흐름이 정상적인지를 테스트할 수 있도록 작성
- 테스트 케이스 타당성 확인 및 유지 보수

# 10. 테스트 오라클

---

- _테스트 결과가 올바른지 판단하기 위해 사전에 정의된 참값을 대입하여 비교하는 기법 및 활동_
- `참 오라클` : 모든 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하는 오라클로, 발생된 모든 오류를 검출할 수 있음
- `샘플링 오라클` : 특정한 몇몇 테스트 케이스의 입력 값들에 대해서만 기대하는 결과를 제공하는 오라클
- `추정 오라클` : 샘플링 오라클을 개선한 오라클로, 특정 테스트 케이스의 입력값에 대해 기대하는 결과를 제공하고, 나머지 값들에 대해서는 추정으로 처리
- `일관성 검사 오라클` : 애플리케이션의 변경이 있을 때, 테스트 케이스의 수행 전과 후의 결과값이 동일한지를 확인하는 오라클

# 11. 테스트 자동화 도구 유형

---

- 사람이 수행하던 테스트를 테스트 자동화 도구를 사용함으로써 휴먼 에러를 줄이고 테스트의 정확성, 품질 향상
- `정적 분석 도구` : 프로그램을 실행하지 않고 분석하는 도구로, 소스 코드에 대한 코딩 표준, 코딩 스타일, 코드 복잡도 및 남은 결함 등을 발견하기 위해 사용
- `테스트 실행 도구` : 스크립트 언어를 사용하여 테스트를 실행하는 방법으로, 테스트 데이터와 테스트 수행 방법 등이 포함된 스크립트를 작성한 후 실행
- `성능 테스트 도구` : 애플리케이션의 처리량, 응답 시간, 경과 시간, 자원 사용률 등을 인위적으로 적용한 가상의 사용자를 만들어 테스트를 수행
- `테스트 통제 도구` : 테스트 계획 및 관리, 테스트 수행, 결함 관리 등을 수행하는 도구(형상 관리 도구, 결함 추적/관리 도구 등)
- `테스트 하네스 도구` : 테스트가 실행될 환경을 시뮬레이션하여 컴포넌트 및 모듈이 정상적으로 테스트 되도록 하는 도구
- _휴먼 에러_ : 사람의 판단 실수나 조작 실수 등으로 인해 발생하는 에러

# 12. 결함 관리

---

- _결함_ : 오류 발생, 작동 실패 등과 같이 소프트웨어가 개발자가 설계한 것과 다르게 동작하거나 다른 결과가 발생되는 것
- 결함 관리 계획 , 결함 기록, 결함 검토, 결함 수정 , 결함 재확인 , 결함 상태 추적 및 모니터링 활동 , 최종 결함 분석 및 보고서 작성
- `결함 관리 측정 지표`
  - _결함 분포_ : 모듈 또는 컴포넌트의 특정 속성에 해당하는 결함 수 측정
  - _결함 추세_ : 테스트 진행 시간에 따른 결함 수의 추이 분석
  - _결함 에이징_ : 특정 결함 상태로 지속되는 시간 측정
- `결함 추적 순서`

  - _결함 등록, 결함 검토, 결함 할당, 결함 수정, 결함 종료 ,결함 해제_
  - _Fixed(고정)_ : 개발자가 필요한 변경 작업을 수행하여 결함 수정 작업을 완료한 상태

- `결함 분류`
  - _시스템 결함_ : 애플리케이션 환경이나 데이터베이스 처리에서 발생된 결함
  - _기능 결함_ : 애플리케이션의 기획, 설계, 업무 시나리오 등의 단계에서 유입된 결함
  - _GUI 결함_ : 사용자 화면 설계에서 발생된 결함
  - _문서 결함_ : 기획자, 사용자, 개발자 간의 의사소통 및 기록이 원활하지 않아 발생된 결함

* `결함 심각도`
  - High : 더 이상 프로세스를 진행할 수 없도록 만드는 결함
  - Medium : 시스템 흐름에 영향을 미치는 결함
  - Low : 시스템 흐름에는 영향을 미치지 않는 결함

- `결함 우선순위` :
  - 결정적, 높음, 보통, 낮음 또는 즉시 해결, 주의 요망, 대기, 개선 권고 등

# 13. 애플리케이션 성능

---

- _사용자가 요구한 기능을 최소한의 자원을 사용하여 최대한 많은 기능을 신속하게 처리하는 정도_
- _애플리케이션 성능 측정 지표_
- `처리량` : 일정 시간 내에 애플리케이션이 처리하는 일의 양
- `응답 시간` : 애플리케이션에 요청을 전달한 시간부터 응답이 도착할 때까지 걸린 시간
- `경과 시간` : 애플리케이션에 작업을 의뢰한 시간부터 처리가 완료될 때까지 걸린 시간
- `자원 사용률` : 애플리케이션이 의뢰한 작업을 처리하는 동안의 CPU 사용량, 메모리 사용량, 네트워크 사용량 등 자원 사용률

# 14. 소스 코드 최적화

---

- `클린 코드` : 누구나 쉽게 이해하고 수정 및 추가할 수 있는 단순 명료한 코드
- `나쁜 코드` : 코드의 로직이 서로 얽혀 있는 스파게티 코드 등 프로그램의 로직이 복잡하고 이해하기 어려운 코드
- `클린 코드 작성 원칙` : 가독성, 단순성, 의존성 배제, 중복성 최소화, 추상화
- _소스 코드 최적화 유형_
- 클래스 분할 배치 : 하나의 클래스는 하나의 역할만 수행하도록 응집도를 높이고, 크기를 작게 작성
- 느슨한 결합 : 인터페이스 클래스를 이용하여 추상화된 자료 구조와 메소드를 구현함으로써 클래스 간의 의존성을 최소화
