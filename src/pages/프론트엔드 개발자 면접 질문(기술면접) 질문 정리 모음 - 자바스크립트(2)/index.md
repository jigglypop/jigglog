---
path: "/프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 자바스크립트(1)/"
category: "기술 면접"
tags: ["프론트엔드", "개발자", "면접", "기술면접", "자바스크립트"]
title: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 자바스크립트(1)"
date: "2021-04-07T01:00:00.000Z"
summary: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 자바스크립트(1) 파트"
images: ["images/2.jpg"]
---

> 프론트 엔드 면접 질문용 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요





## 1) this

* 함수 내에서 함수 호출 컨텍스트(맥락)을 의미

* 자바스크립트 런타임 시에 바인딩이 이루어지는 실행 컨텍스트 중 하나 

* 해당 함수가 실행되는 동안에 사용할 수 있으며 함수 호출 부분에서 this가 가리키는 것이 무엇인지를 확인 가능

  

#### (1) 일반함수의 this와 화살표 함수의 this

* 내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든지 this는 전역객체를 가르킴
* 일반함수의 this는 window(전역) 을 가르키며,
* 화살표 함수의 this는 언제나 상위스코프의 this를 가르킴

#### (2) Call, Apply, Bind

* 암시적 바인딩에 의해 혼란스러운 문제를 해결하기 위해서 call이나 apply 같은 내장 유틸리티를 사용하여 명시적으로 바인딩

- this를 바인딩하기 위한 방법

  - Call : this를 바인딩하면서 함수를 호출하는 것, 두번째 인자를 하나씩 넘기는 것

  - Apply : this를 바인딩하면서 함수를 호출하는 것, 두번째 인자가 배열

  - Bind : 함수를 호출하는 것이 아닌 this가 바인딩 된 새로운 함수를 리턴



```javascript
// call
const obj1 = { name: "Call" };
const say1 = function (city) {
  console.log(Hello, my name is ${this.name}, I live in ${city});
};
say1.call(obj1, "callcity");

// apply
const obj2 = { name: "Apply" };
const say2 = function (city) {
  console.log(Hello, my name is ${this.name}, I live in ${city});
};
say2.apply(obj2, ["applycity"]);

// bind
const obj3 = { name: "Bind" };
const say3 = function (city) {
  console.log(Hello, my name is ${this.name}, I live in ${city});
};
const boundSay = say3.bind(obj3);
boundSay("bindcity");
```



#### (3) this의 상황별 용법

##### (1) 단독으로 쓴 this

* global object를 가리킴

* 브라우저에서 호출하는 경우 [object Window]

*  strict mode(엄격 모드)에서도 동일

```javascript
'use strict';
var x = this;
console.log(x); //Window
```

##### (2) 함수 안에서 쓴 this

* 함수 안에서 this는 함수의 주인에게 바인딩 

```javascript
function myFunction() {
  return this;
}
console.log(myFunction()); //Window
var num = 0;
function addNum() {
  this.num = 100;
  num++;
  
  console.log(num); // 101
  console.log(window.num); // 101
  console.log(num === window.num); // true
}
 
addNum();

//위 코드에서 this.num의 this는 window 객체를 가리킵니다.
//따라서 num은 전역 변수를 가리키게 됩니다.
```

* strict mode(엄격 모드)에서는 함수 내의 this에 디폴트 바인딩이 없기 때문에 undefined

```javascript
"use strict";
 
function myFunction() {
  return this;
}
console.log(myFunction()); //undefined
"use strict";
 
var num = 0;
function addNum() {
  this.num = 100; //ERROR! Cannot set property 'num' of undefined
  num++;
}
 
addNum();

// 따라서 this.num을 호출하면 undefined.num을 호출하는 것과 마찬가지기 때문에 에러가 납니다.
```

##### (3) 메서드 안에서 쓴 this

* 메서드 호출 시 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩

```javascript
var person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
person.fullName(); //"John Doe"

var num = 0;
function showNum() {
  console.log(this.num);
}
showNum(); //0
 
var obj = {
  num: 200,
  func: showNum,
};
obj.func(); //200
```

##### (4) 이벤트 핸들러 안에서 쓴 this

* 이벤트를 받는 HTML 요소를 가리킴

```javascript
var btn = document.querySelector('#btn')
btn.addEventListener('click', function () {
  console.log(this); //#btn
});
```

##### (5) new 생성자 안에서 쓴 this

* 생성자 함수가 생성하는 객체로 this가 바인딩

```javascript
function Person(name) {
  this.name = name;
}
 
var kim = new Person('kim');
var lee = new Person('lee');
 
console.log(kim.name); //kim
console.log(lee.name); //lee
```

*  new로 바인딩이 되지 않았을 때

```javascript
var name = 'window';
function Person(name) {
  this.name = name;
}
 
var kim = Person('kim');
 
console.log(window.name); //kim
```

##### (6) 명시적 바인딩을 한 this

* apply() 와 call() 메서드는 Function Object에 기본적으로 정의된 메서드. 인자를 this로 만들어주는 기능

```javascript
function whoisThis() {
  console.log(this);
}
whoisThis(); //window
var obj = {
  x: 123,
};
whoisThis.call(obj); //{x:123}
```

* apply()에서 매개변수로 받은 첫 번째 값은 함수 내부에서 사용되는 this에 바인딩, 두 번째 값인 배열은 자신을 호출한 함수의 인자로 사용

```javascript
function Character(name, level) {
  this.name = name;
  this.level = level;
}
 
function Player(name, level, job) {
  this.name = name;
  this.level = level;
  this.job = job;
}
```

```javascript
function Character(name, level) {
  this.name = name;
  this.level = level;
}
 
function Player(name, level, job) {
  Character.apply(this, [name, level]);
  this.job = job;
}
 
var me = new Player('Nana', 10, 'Magician');
```

* call() :  인수 목록을 받음
* apply() : 인수 배열을 받음

```javascript
function Character(name, level) {
  this.name = name;
  this.level = level;
}
 
function Player(name, level, job) {
  Character.call(this, name, level);
  this.job = job;
}
 
var me = {};
Player.call(me, 'nana', 10, 'Magician');
```

* apply()나 call()은 보통 유사배열 객체에게 배열 메서드를 쓰고자 할 때 사용

*  ex) arguments 객체는 함수에 전달된 인수를 Array 형태로 보여주지만 배열 메서드를 쓸 수가 없어서 사용

```javascript
function func(a, b, c) {
  console.log(arguments);
  arguments.push('hi!'); //ERROR! (arguments.push is not a function);
}

function func(a, b, c) {
  var args = Array.prototype.slice.apply(arguments);
  args.push('hi!');
  console.dir(args);
}
 
func(1, 2, 3); // [ 1, 2, 3, 'hi!' ]
var list = {
  0: 'Kim',
  1: 'Lee',
  2: 'Park',
  length: 3,
};
 
Array.prototype.push.call(list, 'Choi');
console.log(list);
```

* Array.from : Array인자를 얕게 복사해 새로운 배열 생성

```javascript
var children = document.body.children; // HTMLCollection
 
children.forEach(function (el) {
  el.classList.add('on'); //ERROR! (children.forEach is not a function)
});
var children = document.body.children; // HTMLCollection
 
Array.from(children).forEach(function (el) {
  el.classList.add('on'); 
});
```

##### (6) 화살표 함수로 쓴 this

* 화살표 함수는 전역 컨텍스트에서 실행되더라도 this를 새로 정의하지 않고 바로 바깥 함수나 클래스의 this를 사용

```javascript
var Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this); // Person {name: "Nana", age: 28}
 
    setTimeout(function () {
      console.log(this); // Window
      console.log(this.name + ' is ' + this.age + ' years old');
    }, 100);
  };
};
var me = new Person('Nana', 28);
 
me.say(); //global is undefined years old

// --------------------------------------------------------------------
// --------------------------------------------------------------------


var Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this); // Person {name: "Nana", age: 28}
 
    setTimeout(() => {
      console.log(this); // Person {name: "Nana", age: 28}
      console.log(this.name + ' is ' + this.age + ' years old'); 
    }, 100);
  };
};
var me = new Person('Nana', 28); //Nana is 28 years old
```

 

## 2) 스코프

* 정의 : _식별자가 유효한 범위_
* 모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위를 결정

```javascript
var x = "global";
function foo() {
  var x = "local";
  console.log(x);
  // "local"
}
foo();
console.log(x);
// "global"
```

#### (1) 스코프의 종류

| 구분 | 설명                  | 스코프      | 변수      |
| ---- | --------------------- | ----------- | --------- |
| 전역 | 코드의 가장 바깥 영역 | 전역 스코프 | 전역 변수 |
| 지역 | 함수 몸체 내부        | 지역 스코프 | 지역 변수 |

#### (2) 스코프 체인

* 정의 : _스코프가 계층적으로 연결된 것_
* 스코프는 하나의 계층적 구조로 연결되며, 모든 지역 스코프의 최상위 스코프는 전역 스코프
* 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색

#### (3) 블록 / 함수 레벨 스코프

* 블록 레벨 스코프 : 함수 몸체 뿐만 아니라 모든 코드 블록(if, for, while 등) 이 지역 스코프를 만듦
* 함수 레벨 스코프 : var로 선언된 변수는 오로지 함수의 코드 블록(함수 몸체) 만을 지역 스코프로 인정



## 2) 실행 컨텍스트(Execution Context) 

- 자바스크립트의 코드가 실행되기 위해 정보들을 담고 있는 곳(변수 객체, 스코프 체인, this 정보)
- 자바스크립트의 코드들이 실행되기 위한 환경(전역 컨텍스트 ,함수 컨텍스트)  
- 전역 컨텍스트 하나 생성 후에 함수 호출할 때마다 함수 컨텍스트가 생성. 
- 컨텍스트를 생성시에 변수객체, 스코프 체인, this가 생성. 컨텍스트 생성 후 함수가 실행되는데 사용되는 변수들은 변수 객체 안에서 값을 찾고 없다면 스코프 체인을 따라 올라가며 찾음
- 함수 실행이 마무리되면 해당 컨텍스트는 사라짐
- 페이지가 종료되면 전역 컨텍스트가 사라짐



#### 1) 전역 scope를 사용했을 때 장단점

- 변수와 함수 이름의 충돌을 방지하기 위해

- 모든 스크립트는 전역 스쿠프에 접근 가능

- 만약 모든 사람이 변수 선언에 전역 네임스페이스를 사용한다면 충돌이 매우 많이 발생할 것

- 모듈 패턴(IIFE 등)으로 직접 선언한 변수는 로컬 네임스페이스에 포함되도록 해야 함



## 프로퍼티

* 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의
* 프로퍼티의 값(value), 값의 갱신 여부(writeable), 열거 가능 여부(enumerable), 재정의 가능 여부(configurable)

```javascript
const person = {
  name: "Lee",
};
console.log(Object.getOwnPropertyDescriptor(person, "name"));

// { value: 'Lee', writable: true, enumerable: true, configurable: true }
```



#### (1) 프로퍼티

* 데이터 프로퍼티 : 키와 값으로 구성된 일반적인 프로퍼티
* 접근자 프로퍼티 : 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티



## 3) prototype 

* 자바스크립트 객체에는 Prototype이라는 내부 프로퍼티가 있고, 이는 다른 객체를 참조할 때 사용
* 자바스크립트에서 상속을 진행할 때는 프로토타입끼리 연결을 하는데  부모 프로토타입을 create()나 setPropertyOf() 메서드를 사용하여 자식 프로토타입과 연결

  

#### 1) 프로토타입

- 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거

- 즉, 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메소드를 프로토타입에 미리 구현해 놓음으로써 또 구현하는것이 아니라 상위(부모) 객체인 프로토타입의 자산을 공유하여 사용할 수 있음

- \_\_proto\_\_접근자 프로퍼티로 자신의 프로토타입, 즉 [[Prototype]] 내부슬롯에 접근 할 수 있음.

  

#### 2) 프로토타입 체인

- 객체의 프로퍼티에 접근하려고 할때 객체에 접근하려는 프로퍼티가 없으면  \_\_proto\_\_접근자 프로퍼티가 가리키는 링크를 따라 자신의 부모역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색
- 프로로타입 체인의 최상위 객체는 Object.prototype
- 이 객체의 프로퍼티와 메소드는 모든 객체에게 상속
- prototype 프로퍼티 는 생성자함수가 생성할 인스턴스의 프로토타입을 가리킴







## 6) AJAX

* 자바스크립트를 이용해 비동기적으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식
* AJAX는 비동기 자바스크립트 xml의 약자
* 클라이언트와 서버가 xml 데이터를 주고 받는 기술
* 기존에는 클라이언트에서 서버로 요청을 보내고 응답을 받으면 다시 화면을 갱신해야 했고 이 과정에서 많은 리소스가 낭비
* 이 문제를 해결하기 위해 ajax는 페이지에서 필요한 일부만 갱신할 수 있도록 XMLHttpRequest 객체를 서버에 요청
* 보통은 서버로부터 웹페이지가 반환되면 전체를 갱신해야하는데 / AJAX를 사용하면, 페이지 일부만을 갱신하고도 동일한 효과를 볼 수 있음
* 갱신이 필요한 부분만 로드하여 갱신하면 되므로 빠르고, 부드러운 화면효과를 기대할 수 있음



## 7) 호이스팅(Hoisting)

* 함수 내에서 아래쪽에 존재하는 내용 중 필요한 값들을 끌어올리는 것
* 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효 범위의 최상단에 선언
* 자바스크립트 Parser가 함수 실행 전 해당 함수를 한 번 훑음
* 함수 안에 존재하는 변수/함수선언에 대한 정보를 기억하고 있다가 실행시
* 실제로 코드가 끌어올려지는 건 아니며, 자바스크립트 Parser 내부적으로 끌어올려서 처리하는 것
* 실제 메모리에서는 변화가 없음

#### (1) 호이스팅의 대상

* var 변수 선언과 함수선언문에서만 호이스팅이 일어남
* var 변수/함수의 선언만 위로 끌어 올려지며, 할당은 끌어 올려지지 않음
* let/const 변수 선언과 함수표현식에서는 호이스팅이 발생하지 않음

#### (2) 변수 생성 과정

* 1) 변수 선언

* 2) 변수 초기화

* 3) 변수에 지정한 값 할당(변수에 사용자가 지정한 값으로 초기화)
* 여기서 변수에 지정한 값 할당은 해당 실행 컨텍스트의 변수 객체 생성이 완료된 뒤에 실행
* 변수의 선언 + 초기화 와 사용자가 지정한 값 초기화가 발생되는 환경이 나뉘어 발생

#### (3) 함수의 호이스팅

##### (1) 함수 선언문

* 변수 객체가 만들어지는 과정에서 함수 선언, 초기화, 사용자 지정 값으로 초기화 3단계가 모두 발생

* 실행 단계에서 함수 선언문보다 함수 호출이 먼저 발생해도 에러가 나지 않고 정상적으로 실행

* 함수 바디가 호이스트

```javascript
foo() // 'FOOOOO'
function foo() {
  console.log('FOOOOO')
}
```

##### (2) 함수 표현식

* 익명함수를 생성하여 변수에 할당하는 방식(변수 호이스팅 적용)

* 실행 단계에서 함수 표현식보다 함수 호출이 먼저 발생하게 된다면 TypeError 가 발생

* 함수 바디는 호이스트되지 않음

```js
foo() // Uncaught TypeError: foo는 함수가 아닙니다
var foo = function() {
  console.log('FOOOOO')
}
```



## let, var, const

* let, const 중복이나 호이스팅을 선언하지 않음

* 블록 단위의 변수타입

- var 와 let, const의 차이점 (function scope와 block scope의 개념에서) : 
- var은 함수 레벨 스코프 
- let , const는 블록 레벨 스코프를 지원
- 다음과 같이 블록레벨에 foo를 456으로 재선언하는 경우 foo를 456으로 인식. 하지만 let이나 const는 블록 안에 있는것을 읽지 않고 전역 변수를 읽음

```javascript
var foo = 123; // 전역 변수
console.log(foo); // 123
{
  var foo = 456; // 전역 변수
}
console.log(foo); // 456
```



## use strict 

* 엄격 모드. 전체 스크립트 또는 부분 함수에 적용이 가능
* 기존에 무시되던 에러들이 throw 되며 JS 엔진 최적화 작업을 어렵게 만드는 실수들을 바로 잡고ECMAScript의 차기 버전에서 정의될 문법들을 금지하는 특성을 가지고 있음
* 전체 코드나 함수에 strict mode를 적용하기 위해 사용. strict 모드의 선언은 자바스크립트 변형의 제한에 동의한다는 것
* 서로 다른 strict mode로 작성된 코드를 연결했을 때 오류가 발생할 수 있음

#### (1) 금지 사항

* 전역 변수 생성
* NaN에 할당하는 것
* 삭제할 수 없는 프로퍼티를 삭제하려고 할 때

- 함수의 파라미터 이름 중복
- this 는 전역 컨텍스트에서 undefined
- function.caller 그리고 function.arguments 에 접근할 수 없음

  

## Call by value & call by ref

#### 1) call by value 

* 인자로 값이 넘어올때 복사된 값이 넘어오기 떄문에 중간에 어떤 연산을 해도 변하지 않음

* 자바스크립트는 기본적으로 원시값을 넘겨주면 call by value 로 작동

* q함수 내에서 값을 변경하면 함수에 전달된 데이터만 변경될 뿐 함수 전달된 원본 복사본에는 아무런 영향을 미치지 않음

  ```javascript
  let a = 1;
  let fun = funcion(b) {
  	b=b+1;
  }
  fun(a)
  console.log(a) // 1
  ```

  

#### 2) call by reference 

* 인자로 레퍼런스가 넘어올때 가리키는 값을 복사하는 것이 아니라 참조 값을 넘기는 것

* 참조형 데이터는 그 값의 주소를 말 그대로 참조 할 값의 복사본이나 값 자체가 할당되지 않음

* 참조에 의해 할당된 새 변수는 원본 변수가 가르키는 값과 동일한 값을 가리킴

* 원본 변수와 할당된 변수는 모두 동등하며, 값을 조작하는데 사용될 수 있음. 

* 그래서 할당된 변수(참조)가 변경되면 원본 변수에서도 동일하게 변경

  ```javascript
  let a = {};
  let fun = funcion(b) {
  	b.a=1;
  }
  fun(a)
  console.log(a.a) // 1
  ```

  



## 반응형 프로그래밍 

* 데이터 스트림이라는 하나의 일관된 형식으로 만들고, 이 데이터 스트림을 구독하여 데이터 스트림의 상태 변화에 반응하는 방식으로 동작하는 애플리케이션을 만드는 것

- Tv와 Tv방송국이 있다고 가정했을때, Tv방송국이 일정한 시간 단위로 영상에 대한 프레임을 계속해서 방출(emit)하고 TV는 방송국을 관찰하고 있다가 새로운 영상을 방출하면 이를 획득하는 방식
- 여기서 방송국의 역할이 옵저버블, Tv가 옵저버, 영상프레임이 Notification







## typeof, instanceof 

* typeof 는 변수의 유형(type)을 반환
* instanceof 는 비교연산자로 prototype 객체를 비교

```javascript
const str = 'zzz'; 
console.log(typeof 2); // 'number' 
console.log(typeof str); // 'string' 
const obj = {}; 
console.log(obj instanceof Object); // true 
console.log(str instanceof String); // false str 는 원시타입 문자열이기 때문
```





## 객체 순회 

객체 안의 속성과 배열의 아이템을 순회할 때 사용하는 문법:

- Object: for in hasOwnProperty, Object.keys().forEach, for of
- Array: for, Array.forEach, for of



- for-in 루프
  - for (var property in obj) { console.log(property); }
  - 하지만 상속받은 속성도 포함한다. 그래서 obj.hasOwnproperty(property) 를 사용해서 검사해야 한다.
- Object.keys(obj).forEach(property ⇒ { ... })
  
  - Object.keys 는 static 메서드이며 객체가 가진 열거 가능한(enumerable) 모든 속성을 배열로 만들어서 리턴한다.
- Object.getOwnPropertyNames()
  - Object.getOwnPropertyNames(obj).forEach(property => { ... })
  
  - getOwnPropertyNames는 객체가 가진 모든 열거 가능한, 열거 불가능한(non-enumerable) 값을 배열에 담아 리턴한다.
  
    

## 브라우저의 렌더링 과정

---



#### 1) 브라우저의 렌더링 과정

* 브라우저는 HTML, CSS, 자바스크립트, 이미지, 폰트 파일 등 렌더링에 필요한 리소스를 요청, 서버 응답
* 브라우저의 렌더링 엔진은 서버로부터 응답된 HTML과 CSS를 파싱하여 DOM과 CSSOM을 생성하고 이를 결합하여 렌더 트리를 생성
* 브라우저의 자바스크립트 엔진은 서버로부터 응답된 자바스크립트를 파싱하여 AST를 생성하고 바이트코드를 변환하여 실행. 이때 자바스크립트는 DOM API를 통해 DOM이나 CSSOM을 변경할 수 있음. 변경된 DOM과 CSSOM은 렌더 트리로 결합
* 렌더 트리를 기반으로 HTML 요소의 레이아웃(위치와 크기)를 계산하고 브라우저 화면에 HTML 요소를 페인팅

#### 2) 요청과 응답

* 브라우저 주소창에 URL을 입력하면 호스트 이름이 DNS를 통해 IP로 변환되고 요청 전송
* HTTP : 웹에서 브라우저와 서버가 통신하기 위한 프로토콜
* HTTP/1.1 : 커넥션 당 하나의 요청과 응답
* HTTP/2 : 여러 리소스 동시에 전송 가능. 50% 정도 빠름

#### 3) HTML 파싱과 DOM 생성

* HTML 문서를 바이트 형태로 응답받음
* meta 태그의 charset 어트리뷰트에 의해 지정된 인코딩 방식을 기준으로 문자열 변환
* 응답 헤더를 통해 응답
* 문자열로 변환된 HTML 문서를 읽어 token들로 분해
* 토큰을 객체로 변환하여 node 들을 생성

#### 4) 웹 통신

##### (1) 브라우저 주소창에 주소 검색 이후의 렌더링 과정

* DNS 서버가 연결해줄 곳을 찾음   
* http / https 여부 판단
* index.html 클라이언트로 보내고 브라우저가 index.html 파싱
* DOM트리를 읽음:
  - css : link태그를 만나 css요청이 발생하면, 요청과 응답과정을 거치고 css를 파싱, 이후 중단된 html을 다시읽고 DOM트리를 완성
  - js : HTML파서는 Script태그를 만나게 되면 javascript 코드를 실행하기 위해 파싱을 중단. 제어권한을 자바스크립트 엔진에게 넘기고, 자바스크립트 코드 또는 파일을 로드해서 파싱하고 실행
* DOM트리 + CSSOM트리= Render Tree를 만들고 그림





<img src="https://t1.daumcdn.net/cfile/tistory/2210F643570307E233" alt="img" style="zoom:50%;" />



* DOM tree : 태그라고 불리는 HTML 문서의 구성 요소와 각 구성 요소간의 관계를 트리 구조로 나타낸 자료구조
* Styles struct : 브라우저에 기본으로 설정된 스타일이나 스타일시트에 정의된 코드를 바탕으로 스타일 구조체를 형성한 것
* 브라우저 엔진 : DOM tree와 styles struct를 결합하여 HTML 문서를 구성하는 요소간의 관계와 각각의 요소가 갖는 스타일에 대한 정보를 구성하고 이 정보에 동적으로 실행되는 script code를 결합하여 render tree 생성
* 브라우저 엔진은 render tree가 생성되면 랜더링을 수행하여 브라우저에 HTML 문서를 출력



## 리페인트와 리플로우

---



- 수정된 렌더 트리를 리렌더링 하는 과정에서 발생
- 웹 애플리케이션의 성능을 저하시키는 주된 원인

#### 1) Reflow

- 리플로우(크기나 위치) : HTML 문서를 구성하는 요소의 크기나 위치가 변경되었을 때 각각의 요소를 재배치하는 작업

- 모든 엘리먼트의 위치와 길이 등을 다시 계산하는 과정에서 발생
- dom 일부 혹은 전체 렌더링시에 발생

#### 2) Repaint

- 리페인트(스타일) : HTML 문서의 전체 또는 일부 영역의 스타일이 변경되었을 때 브라우저가 변경된 스타일을 다시 적용하는 작업
- 가시성에 영향을 주는 엘리먼트가 변경되면 발생 (background, display)
- 무조건은 아니지만, Reflow가 발생하면 Repaint는 같이 발생
- 브라우저가 DOM트리에 있는 다른 노드의 가시성을 모두 확인해야 하므로 리페인트는 비용이 비쌈

#### 3) Reflow 가 발생 되는 경우

- DOM el 추가, 제거 또는 변경
- CSS 스타일 추가, 제거 또는 변경
  - inline-style, class 변경이 일어남으로써 레이아웃이 변경 될 수 있음
  - DOM el 길이를 변경하면 DOM트리에 있는 다른 노드에 영향을 줄 수 있음
- CSS 애니메이션, 트렌지션
  - 애니메이션의 모든 프레임에서 리플로우 발생
- offsetWidth와 offsetHeight의 사용
  - 해당 속성을 사용하면, 초기 reflow가 트리거되어 수치가 계산
  - offset, computed, bounding 같은 속성 및 메소드들은 이미 렌더링 된 DOM기준으로 CSS속성을 `계산만`해서 내려주기 때문에 reflow + repaint가 아닌 순수 reflow만 발생
- 기타
  - hover, 텍스트 입력, 창 크기 조절, 글꼴 크기 변경 등등
  - 활성화 되면 리플로우를 트리거 할 수 있음

#### 4) 성능 저하 최소화

##### (1) 클래스 변경을 통해 스타일을 변경할 경우, 최대한 말단의 노드의 클래스를 변경

- 돔 구조에서 최 하단 노드의 클래스를 변경
- 중간에 있는 class를 바꾸게 된다면) 위 아래 노드들에게 영향을 미치게 되고, 그 과정에서 리플로우 리페인트가 발생 할 수 있기 때문

##### (2) 인라인 스타일 자제

- 인라인 스타일을 사용하면 HTML이 다운로드 될 때, 레이아웃에 영향을 미치면서 추가 리플로우를 발생

##### (3) 애니메이션이 들어간 엘리먼트는 `position: fixed` 혹은 `position: absolute`로 지정

- `absolute` 또는 `fixed` 위치인 엘리먼트는 다른 엘리먼트 레이아웃에 영향을 미치지 않음
- 리플로우가 아닌 리페인트 발생, 리페인트가 훨씬 적은 비용이 듦(리플로우 + 리페인트 < 리페인트)

##### (4) 레이아웃을 위한 `<table>` 자제

- 점진적으로 렌더링이 되지 않고, 모두 불려지고 계산된 다음에서야 렌더링이 됨, 작은 변경만으로 테이블의 다른 모든 노드에 대한 `리플로우`가 발생



## webpack과 Babel

#### 1) Webpack

* 의존 관계에 있는 자바스크립트, css, 이미지 등의 리소스를 하나의 파일로 번들링하는 모듈 번들러

* 모듈 번들러 : 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구

#### 2) Webpack 기본 세팅

```javascript
const path = require('path);

module.exports = {
    // 모듈 네임
    name: 'word-relay-setting',
    // 웹팩 실행 모드: development, production, none
    mode: 'development',
    devtool: 'eval',
    resolve: {
        // webpack에서 모듈을 읽어올 때 파일 확장자 체크
        extensions: ['.js', '.jsx']
    }

    // 입력
    entry: {
        app: ['./client', 'WordRelay'],
    },

    module: {
        rules: [{
            test:/\.jsx?/, // 적용할 파일 체크
            loader: 'babel-loader',
            options: {
                presets: [
                    ['babel/preset-env',{
                        targets: {
                            browsers: ['last 2 chrome versions']
                        }
                    }
                ], '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
                // class형 컴포넌트에서 state = {} 문법을 사용할 때 필요
            }
        }]
    }, // 입력받은 모듈에 모듈을 적용
    plugins: [],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    } // 출력
}
```

#### 3) webpack기능

##### (1) mode

* mode의 설정값에 따라 웹팩이 다르게 실행

- `none`: 모드 설정 없음
- `development`: 개발에 좀 더 편하게 웹팩 로그나 결과물이 보임
- `production`: 성능 최적화 작업(파일 압축, 빌드)

##### (2) entry

* 웹 애플리케이션이 실행될 수 있게 빌드를 하기 위해 모든 소스의 경로가 담겨져 있어야 할 영역

##### (3) output

- 웹팩이 entry 속성을 참고하여 빌드를 한 후 결과물이 저장되는 경로
- filename과 path 속성을 추가해주어야 함

##### (4) Loader

- 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트가 아닌 소스(html, css, sass, images, babel 등)들을 변환할 수 있게 도와주는 속성
- webpack.config.js 내에선 `module` 속성으로 표현

```javascript
module: {
  rules: [
    {
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader'],
    },
  ]
}

module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: { modules: true },
        },
        { loader: 'sass-loader' },
      ],
    },
  ]
}
```

##### (5) Plugin

- 웹팩의 기본 기능에 추가적인 기능을 추가하는 속성

* Plugin과 Loader의 차이점
  * 로더는 파일을 해석하고 변환하는 과정에 관여한다면 플러그인은 결과물의 형태를 바꿈
  * 플러그인 속성은 배열의 성격을 띄고 있고 그 안엔 생성자 함수로 생성된 객체 인스턴스만 추가할 수 있음

```javascript
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
}
```





## Babel

---

* 트랜스파일러

- ES6이상의 문법의 코드들을 브라우저가 이해할 수 있게끔 ES5이하의 문법으로 변환

#### 1) 컴파일과 트랜스파일

##### (1) 컴파일

- 한 언어로 작성된 소스 코드를 다른 언어로 바꾸는것 
- ex) C-> 어셈블리어

##### (2) 트랜스파일

- 한언어로 작성된 소스코드를 비슷한 수준의 추상화를 가진 다른 언어로 변환
- ex) ES6->ES5

#### 3) babel 적용 방법

- @babel/core: 바벨의 가장 핵심적인 내용이 담긴 모듈
- @babel/preset-env: 사용자의 브라우저에 맞게 최신 문법을 예전 문법으로 바꿔줌
- @babel/preset-react: 바벨을 리액트에서 사용할 수 있게해주는 모듈(jsx 지원)
- babel-loader: 바벨과 웹팩을 연결해줌



## AMD와 CommonJS

- 모든 모듈의 로딩이 완료된 후에 실행/ 로딩 완료 이전에 실행(동기 vs 비동기)

  

#### 1) Common.js 

- 모든 모듈이 로컬에 다운로드가 된 이후에 실행하는 방식. 
- node.js에서 사용하는 방식으로 server 환경에서 외부 모듈을 가져올 때 유리

```javascript
var lib = require("package/lib");
function foo() {
	lib.log("hello world!");
}

exports.foobar = foo;
```

#### 2) AMD

* 비동기적으로 필요한 파일을 다운로드하는 방식
* client단(브라우저 환경)에서 외부 모듈을 가져올 때 유리한 방식 

```javascript
 define(["package/lib"], function (lib) {
     function foo() {
     	lib.log("hello world!");
     }
     return {
      foobar : foo
     }
}
```

