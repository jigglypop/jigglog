---
path: '/벡엔드 개발자 면접 질문 - cs/'
category: '기술 면접'
tags: ['벡엔드', '개발자', '면접', '기술면접', 'CS']
title: '벡엔드 개발자 면접 질문 - cs'
date: '2021-11-22T04:00:00.000Z'
summary: '벡엔드 개발자 면접 질문 - cs'
images: ['images/2.jpg']
---

> 백엔드 면접 질문용 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요





### 1) 절차 지향과 객체 지향

---

#### (1) 절차 지향 프로그래밍 (Procedural Programming)

- 물이 위에서 아래로 흐르는 것처럼 순차적인 처리가 중요시되는 프로그래밍 기법
- C가 대표적인 절차 지향 프로그래밍 언어
- 컴퓨터의 처리구조와 유사해 실행속도가 빠르지만 디버깅이 어려움

#### (2) 객체 지향 프로그래밍 (Object Oriented Programming)

- 실제 세계를 표방하여 데이터와 절차를 하나의 덩어리로 처리하는 프로그래밍 기법
- Java, Python, C++이 대표적인 객체 지향 프로그래밍 언어
- 객체 지향 프로그래밍은 기존에 짜여진 코드를 재사용하기 용이하며 디버깅이 쉬움
- 단, 처리 속도가 느리며 설계에 많은 노하우와 시간이 필요

#### (3) 객체 지향 프로그래밍 특징

- 추상화: 객체가 가진 공통의 속성이나 기능을 묶어 명시적인 이름을 부여하는 것

- 캡슐화: 관련된 데이터와 코드를 하나로 묶은 것으로 데이터를 감추고 외부와의 상호작용은 메소드를 통하는 방법

- 상속: 이미 작성된 클래스를 이어 받아서 새로운 클래스를 생성하는 것으로, 기존 코드를 재활용하는 것

- 다형성 (Polymorphism): 같은 코드로 다른 행위를 하는 것(Overriding과 Overloading)

### 2) 오버로딩과 오버라이딩

---

- 객체 지향 프로그래밍의 다형성을 지원하는 방법

#### (1) 오버라이딩 (Overriding)

- 부모 클래스가 가지고 있는 메소드를 자식 클래스가 재정의해서 사용
- 메소드의 이름/매개변수/반환형이 같은 상속 받은 메소드를 덮어쓰는 것
- 부모 클래스의 메소드는 무시하고 자식 클래스가 필요로하는 메소드를 추가하여 사용하는 것

#### (2) 오버로딩 (Overloading)

- 같은 이름의 메소드 (함수)를 여러개 정의하되, 매개 변수의 유형과 개수를 달리하여 다양한 유형의 호출에 응답하는 것



### 3) 점진적 향상법 / 우아한 성능저하법

---

#### (1) 점진적 향상법 (Progressive enhancement)

- 많은 테스트를 통해 말그대로 기능을 점진적으로 향상시키는 것

* 기초부터 차곡차곡 쌓아서 발전해 나가는 방법. 노력과 시간이 필요
* ex ) 웹 페이지를 구성할 때 HTML로 마크업을 구성 / CSS로 스타일을 입힘 / JS로 사용자 경험을 향상

#### (5) 우아한 성능 저하법 (graceful degradation)

- 최신 기술을 기반 또는 최신 기기에서 동작하는 기능을 만들고 나서, 오래된 기술 또는 오래된 기기에서 동작하게 하기 위해 유사한 기능을 만들어 동작하게 하는 것
- 사용자들의 기기를 위해 별도의 버전을 만들어 놓는 것.
- ex) 사용자의 브라우저가 javascript를 지원하지 않을 때 js를 지원하지 않는 기기를 위해 <noscript> 태그를 사용하여 사용자에게 "javascript가 지원되는 브라우저를 사용해 주세요!" 와 같은 알람을 띄워주는 것



### 4) 디자인 패턴

---

#### (1) 싱글톤 (Signleton)

- 코드 내 어디서든, 오직 하나의 인스턴스만 사용할 수 있도록 객체를 생성하는 방법
- 객체는 여러 번 생성되지 않고 최초 하나의(Single) 인스턴스만 생성하고 이후에는 이 인스턴스를 참조
- 전역적으로 하나의 인스턴스만 사용, 참조해야하는 경우에 사용

```java
# 보통, 싱글톤 객체의 .get_instance() 로 인스턴스를 받아온다.
singleton_1 = Singleton.get_instance()
singleton_2 = Singleton.get_instance()

# 이렇게 받아온 두 인스턴스는 동일한 인스턴스다.
singleton_1 == singleton_2  # True
```

- 활용 예시 : DB 커넥션과 Pool 을 담당하는 인스턴스, 시스템 전역의 로깅을 담당하는 로거

#### (2) 프로토타입 (Prototype)

- 기존의 인스턴스를 그대로 복제(clone) 하여 새로운 객체를 생성하는 방법
- 하나의 인스턴스를 사용하는 싱글톤과는 반대되는 개념

```java
# 보통, 프로토타입 객체의 .clone() 으로 인스턴스를 복사한다.
original = Prototype()
prototype = original.clone()

# 이렇게 받아온 두 인스턴스는 동일한 객체는 아니지만, 내부 데이터는 같다.
original == prototype  # False
original.data == prototype.data  # True
```

- 활용 예시 : DB 로부터 얻어온 데이터 인스턴스를 동일하게 하나 더 만들어야 하는 경우

#### (3) 팩토리 (Factory)

- 인스턴스를 만들어내는 공장(Factory) 를 통해 객체를 생성하는 방법
- 인스턴스를 직접 생성해내지 않고, 공장에서 제공하는 메소드를 통해 생성
- 사용자는 객체를 생성하고 싶을 때, 공장에서 제공하는 메소드만 알고 있으면 되고, 구체적으로 인스턴스가 어떻게 생성되는지 신경 쓰지 않음
- 한 집합 내에 있는 클래스들의 생성을 한 곳에서 처리하고 싶을 때

```java
# 보통, Factory 객체의 `get` 메쏘드의 파라미터로 생성할 객체의 타입을 넘겨준다.
samsung_keyboard = KeyboardFactory.get_keyboard("samsung")
lg_keyboard = KeyboardFactory.get_keyboard("lg")

# 생성된 객체는 다음과 같이 구체적인 클래스 인스턴스다.
samsung_keyboard  # SamsungKeyboard
lg_keyboard  # LgKeyboard
```

- 활용 예시 : 삼성, LG 키보드를 만드는 키보드 팩토리

#### (4) 추상 팩토리 (Abstract Factory)

- 공장을 만들어내는 상위 공장을 먼저 정의하고 여기서 구체적인 공장을 만든 후, 이 공장에서 객체를 생성하는 방법
- 팩토리의 위에 이 팩토리를 만드는 팩토리가 있음

```
# 키보드 팩토리의 팩토리(추상 팩토리)를 통해 키보드 팩토리를 얻는다.
CommonKeyboardFactory = AbstarctKeyboardFactory.get_keyboard_factory("common")

# 이후는 팩토리 패턴과 동일하다.
samsung_common_keyboard = CommonKeyboardFactory.get_keyboard("samsung")
lg_common_keyboard = CommonKeyboardFactory.get_keyboard("lg")

samsung_keyboard  # SamsungCommonKeyboard
lg_keyboard  # LgCommonKeyboard
```

- 활용 예시 : 기계식 키보드 공장와 일반 키보드공장을 만드는 키보드 추상 팩토리

#### (5) 빌더 (Builder)

- 객체를 생성할 때 필요한 파라미터가 많은 경우, 각 파라미터가 무엇을 의미하는지 알기 힘들 수 있음
- 빌더라는 형태를 통해 파라미터 의미를 명확히 하여 생성할 수 있음

```java
# 빌더 패턴 사용 전 (경우 1)
WebBrowser browser = WebBrowser(True, FlashPlugin(), True, 10);

# 사용 후
WebBrowser browser = BrowserBuilder().
    with_ssl(True).
    with_flash_plugin().
    with_cookie_support().
    set_timeout(10).
    build()
```

- 활용 예시 : 파라미터가 너무 많아서 의미를 파악하기 힘들 때

# 5. 보안

---

### 1) 로컬 스토리지, 세션 스토리지, 쿠키

---

#### (1) 로컬 스토리지(LocalStorage)

- 유통 기한 없이 저장할 수 있는 데이터 공간
- 자바스크립트 또는 브라우저 캐시 삭제 등을 통해서만 데이터 삭제 가능
- SessionStorage 와 Cookie 에 비해 저장 공간이 큼.
- 클라이언트 사이드에서만 저장 가능함

#### (2) 세션 스토리지(SessionStorage)

- 한 세션에만 저장되는 데이터로 브라우저/탭/앱을 껐을 때 데이터가 사라짐
- 서버로 데이터 이전은 불가능
- 쿠키보다 최소 5MB 더 큰 저장 공간 확보 가능
- 클라이언트 사이드에서만 저장 가능

#### (3) 쿠키(Cookie)

- 다음에 이어지는 요청과 함께 서버로 보내지는 데이터를 저장
- 보통 서버에서 데이터 유통기한을 세팅하고 관리
- 쿠키는 4KB 이하의 아주 작은 데이터를 보관
- 쿠키는 클라이언트에서도 읽을 수 있지만, 보통 서버 사이드에서 읽는 데이터
- 보안을 위해 httpOnly 플래그를 true 로 설정하여 클라이언트에서 쿠키 접근을 방지

#### (4) 사용 예시

- 로컬 스토리지 : 자동 로그인
- 세션 스토리지 : 입력 폼 정보, 비로그인 장바구니
- 쿠키 : 다시 보지 않음 팝업 창

#### (5) 가져오기

- 로컬 스토리지(sessionStorage)

  - localStorage.A (Key == A)
  - localStorage.getItem("A")

- 세션 스토리지(sessionStorage)

  - sessionStorage.A (Key == A)
  - sessionStorage.getItem("A")

- 쿠키(cookies)
  - getCookie("A") (Key == A)

#### (6) 세팅하기

- 로컬 스토리지

  - localStorage.A = 1 (Key == A, Value = 1)
  - localStorage.setItem("A", 1)

- 세션 스토리지

  - sessionStorage.A = 1 (Key == A, Value = 1)
  - sessionStorage.setItem("A", 1)

- 쿠키
  - setCookie("A", 1, 7) (Key == A, Value == 1, 유효기간 == 7초)
