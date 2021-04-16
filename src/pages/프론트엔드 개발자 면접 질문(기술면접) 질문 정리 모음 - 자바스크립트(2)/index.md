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





## 2) this

* this는 자바스크립트 런타임 시에 바인딩이 이루어지는 실행 컨텍스트 중 하나로, 해당 함수가 실행되는 동안에 사용할 수 있으며 함수 호출 부분에서 this가 가리키는 것이 무엇인지를 확인할 수 있다. 
* 때로는 복잡한 코드에서 암시적 바인딩에 의해 혼란스러운 경우가 많은데, 이런 문제를 해결하기 위해서 call이나 apply 같은 내장 유틸리티를 사용하여 명시적으로 바인딩을 해 준다.

#### (1) 일반함수의 this와 화살표 함수의 this

* 내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든지 this는 전역객체를 가르킴
* 일반함수의 this는 window(전역) 을 가르키며,
* 화살표 함수의 this는 언제나 상위스코프의 this를 가르킴

use strict모드에서의 this:

일반함수에서의 this는 undefined가 바인딩 됨.

## Babel

- 트랜스파일러
- `컴파일` : 한 언어로 작성된 소스 코드를 다른 언어로 바꾸는것 (C-> 어셈블리어) 
- `트랜스파일러` : 한언어로 작성된 소스코드를 비슷한 수준의 추상화를 가진 다른 언어로 변환(C++>C, ES6->ES5)

ES6 크롬 정도의 브라우저를 제외하곤 ES6 스펙에 대한 지원이 완벽하지 않은데 해결방법:

- Babel을 사용한다. ES6이상의 문법의 코드들을 브라우저가 이해할 수 있게끔 ES5이하의 문법으로 변환



## Call, Apply, Bind

- this를 바인딩하기 위한 방법

- Call : this를 바인딩하면서 함수를 호출하는 것, 두번째 인자를 하나씩 넘기는 것

- Apply : this를 바인딩하면서 함수를 호출하는 것, 두번째 인자가 배열

- Bind : 함수를 호출하는 것이 아닌 this가 바인딩 된 새로운 함수를 리턴

  

- 

  


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



## 3) prototype 

* 자바스크립트 객체에는 Prototype이라는 내부 프로퍼티가 있고, 이는 다른 객체를 참조할 때 사용
* 자바스크립트에서 상속을 진행할 때는 프로토타입끼리 연결을 하는데  부모 프로토타입을 create()나 setPropertyOf() 메서드를 사용하여 자식 프로토타입과 연결

#### 1) 프로토타입

- 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거

- 즉, 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메소드를 프로토타입에 미리 구현해 놓음으로써 또 구현하는것이 아니라 상위(부모) 객체인 프로토타입의 자산을 공유하여 사용할 수 있다.

- \_\_proto\_\_접근자 프로퍼티로 자신의 프로토타입, 즉 Prototype 내부슬롯에 접근 할 수 있음.

  

#### 2) 프로토타입 체인

- 객체의 프로퍼티에 접근하려고 할때 객체에 접근하려는 프로퍼티가 없으면  \_\_proto\_\_접근자 프로퍼티가 가리키는 링크를 따라 자신의 부모역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색
- 프로로타입 체인의 최상위 객체는 Object.prototype이다. 이 객체의 프로퍼티와 메소드는 모든 객체에게 상속
- prototype 프로퍼티 는 생성자함수가 생성할 인스턴스의 프로토타입을 가리킴



## 4) null과 undefined

* 두 타입 모두 값이 없음을 의미한다. 

* 둘 다 데이터 타입이자 그 변수의 값이다. 

* 자바스크립트에서 변수를 선언하면 초기값으로 undefined를 할당하게 됨

* 반면 null은 값이 비어있음을 나타내며 값이 없다는 값이 등록되어 있는 것

  

## 5) 익명 함수

* 즉시 실행이 필요한 상황에서 사용

#### (1) 함수 선언

* 함수 바디가 호이스트

```javascript
foo() // 'FOOOOO'
function foo() {
  console.log('FOOOOO')
}
```

#### (2) 함수 표현식

* 함수 바디는 호이스트되지 않음

```js
foo() // Uncaught TypeError: foo는 함수가 아닙니다
var foo = function() {
  console.log('FOOOOO')
}
```



## 6) AJAX

* AJAX는 비동기 자바스크립트 xml의 약자

* 쉽게 말하면 클라이언트와 서버가 xml 데이터를 주고 받는 기술이다. 
* 기존에는 클라이언트에서 서버로 요청을 보내고 응답을 받으면 다시 화면을 갱신해야 했고 이 과정에서 많은 리소스가 낭비되었다. 
* 이 문제를 해결하기 위해 ajax는 페이지에서 필요한 일부만 갱신할 수 있도록 XMLHttpRequest 객체를 서버에 요청한다. 
* 이로 인해 자원과 시간을 많이 아낄 수 있다.
* AJAX : 자바스크립트를 이용해 비동기적으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식
* 보통은 서버로부터 웹페이지가 반환되면 전체를 갱신해야하는데 / AJAX를 사용하면, 페이지 일부만을 갱신하고도 동일한 효과를 볼 수 있다. 
* 즉, 갱신이 필요한 부분만 로드하여 갱신하면 되므로 빠르고, 부드러운 화면효과를 기대할 수 있음



## 7) 호이스팅(Hoisting)

* 인터프리터가 자바스크립트 코드를 해석함에 있어서, Global 영역 또는 함수 영역 안에 대해서 주어진 선언들을 모두 끌어올려서 해당 유효 범위 최상단에 선언하는 것

* 변수를 선언하고 초기화 했을때 선언부분이 최상단으로 끌어올려지는 현상

* 코드 상단에서 console.log(a)를 찍고 하단에서 var a=1; 이라고 하였을때 a는 undefined라고 나오는 현상

  

## 8) Callback, Promise, async/await

* Callback은 비동기 처리를 구현하기 위해 만들어 졌다. 이 함수는 다른 함수에게 인자로 전달되어 어느 시점에 실행될 수 있도록 던져주는 함수이다. 하지만 콜백 지옥이라 불리는 중첩문이 발생하면서 에러처리 한계가 생기기 시작했고 이를 해결하기 위해 Promise가 나타났다.

* Promise는 어떤 값이 생성 되었을 때 그 값을 대신하는 대리자이다. 비동기 연산이 종료된 이후에 그 결과 값이나 에러를 처리할 수 있도록 처리기를 연결하는 역할을 하는 객체이다. Promise 객체를 통해 성공, 실패, 오류에 따른 후속처리가 바로 가능해서 가독성도 좋고, 비동기 에러를 처리하기도 수월하다.

* Async/await은 비동기 코드를 동기식으로 표현하는 더 나은 방법으로 ES2017에 등장하였다. Async와 await는 항상 같이 붙어 있어야 한다. await 모드는 Promise 객체를 받아 처리하고, 만약 비동기 함수가 아닌 동기적 함수라면 리턴 값을 그대로 받는다. Async 함수는 Promise 객체를 통해 비동기적으로 처리된 내용을 동기적인 코드 진행 순서로 보여주는 역할을 한다.

- Promise와 Callback의 차이점 / Promise란 무엇이며 코드가 어떻게 구성되어있는가 : 

  - 바스크립트에서 비동기처리를 위해서 사용되는 패턴
  - Callback 같은 경우 함수의 처리 순서를 보장하기 위해서 함수를 중첩하게 사용되는 경우가 발생해 콜백헬이 발생하는 단점과 에러처리가 힘들다라는 단점 존재

  ```javascript
  	// Promise 객체의 생성
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 수행한다.
    if (/* 비동기 작업 수행 성공 */) {
      resolve('result');
    }
    else { /* 비동기 작업 수행 실패 */
      reject('failure reason');
    }
  });
  ```

  * 비동기 처리에 성공 : resolve 메소드를 호출해서 비동기 처리 결과를 후속처리 메소드로 전달
  * 비동기 처리에 실패 : reject 메소드를 호출해서 에러메시지를 후속처리 메소드로 전달
  * 후속처리 메소드(then과 catch) :  Promise를 반환.
  * then 을 가지고 메소드 체이닝을 통하여서 콜백 헬 문제를 해결

- Async, Await가 무엇이며, 사용해본 경험 / Async, Await와 Promise의 차이 : 

  - Promise를 더욱 쉽게 사용할 수 있도록 ES2017(ES8) 문법. 
  - 함수의 앞부분에 async 키워드를 추가하고, 함수 내부에서 Promise의 앞부분에 await 키워드를 사용. 
  - async, await를 사용할 경우 코드가 간결해지지만
  - 에러처리를 잡기 위해 try catch를 사용해야 함
  - 동기적인 코드흐름으로 개발이 가능

  

- Promise가 콜백 대비 장/단점:

  - 가독성 떨어지는 콜백 지옥에서의 탈출
  - .then()을 사용해서 순차적인 비동기 작업을 가독성 있게 작성할 수 있다
  - Promise.all()을 사용해서 병렬로 실행되는 비동기 작업을 쉽게 작성할 수 있다
  - 프로미스가 있으면 콜백만 사용하는 코딩에서 발생하는 콜백을 너무 빨리/늦게/많이/적게 실행, 필요한 환경변수/파라미터의 전달 실패, 확인해야 하는 에러, 예외가 숨어버리는 등이 발생하지 않는다
  - 조금 더 복잡한 코드
  - ES2015를 지원하지 않는 구형 브라우저에서는 사용할 수 없으며 폴리필이나 Babel을 통한 컴파일이 필요하다.



## let, var, const

let, const 중복이나 호이스팅을 선언하지 않는다. 블록 단위의 변수타입이다.

- 
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

* 엄격 모드로 전체 스크립트 또는 부분 함수에 적용이 가능
* 기존에 무시되던 에러들이 throw 되며 
* JS 엔진 최적화 작업을 어렵게 만드는 실수들을 바로 잡고
* ECMAScript의 차기 버전에서 정의될 문법들을 금지하는 특성을 가지고 있다.

* 특히 엄격 모드에서는 이전에 허용되던 실수를 오류로 바꾸어 놓는다. 
* 예를 들어 전역 변수 생성을 불가능하게 만든다든지, 
* 아니면 NaN에 할당하는 것과 같은 일들을 엄격 모드에서는 그냥 넘어가지 않는다. 
* 또한 삭제할 수 없는 프로퍼티를 삭제하려고 하면 예외를 발생시킨다.
* 전체 코드나 함수에 strict mode를 적용하기 위해 사용. strict 모드의 선언은 자바스크립트 변형의 제한에 동의한다는 것



- 의도하지 않은 전역 변수가 선언되지 못하도록 한다
- 삭제할 수 없는 속성(property)를 삭제하려고 시도하면 오류를 발생시킨다
- 함수의 파라미터 이름은 서로 달라야 한다
- this 는 전역 컨텍스트에서 undefined다
- 몇몇 일반적인 코딩 실수를 잡아서 예외 처리(throw exception)시킨다 (예를 들어 전역 객체에 접근하려고 하는 것)
- 자바스크립트에서 개발자에게 혼란을 주거나, 잘못 만든 것으로 보이는 여러 기능의 사용을 금지한다

- 못쓰게 되는 많은 기능들이 어떤 개발자에게는 필요한 기능일 수 있다
- function.caller 그리고 function.arguments 에 접근할 수 없다
- 서로 다른 strict mode로 작성된 코드를 연결했을 때 오류가 발생할 수 있다.



## Call by value & call by ref

* call by value : 인자로 값이 넘어올때 복사된 값이 넘어오기 떄문에 중간에 어떤 연산을 해도 변하지 않음

* 자바스크립트는 기본적으로 원시값을 넘겨주면 call by value 로 작동

* 함수 내에서 값을 변경하면 함수에 전달된 데이터만 변경될 뿐 함수 전달된 원본 복사본에는 아무런 영향을 미치지 않는다.

  ```javascript
  let a = 1;
  let fun = funcion(b) {
  	b=b+1;
  }
  fun(a)
  console.log(a) // 1
  ```

  

* call by reference : 인자로 레퍼런스가 넘어올때 가리키는 값을 복사하는 것이 아니라 참조 값을 넘기는 것

* 참조형 데이터는 그 값의 주소를 말 그대로 참조 할 값의 복사본이나 값 자체가 할당되지 않는다. 

* 참조에 의해 할당된 새 변수는 원본 변수가 가르키는 값과 동일한 값을 가르킨다. 

* 원본 변수와 할당된 변수는 모두 동등하며, 값을 조작하는데 사용될 수 있다. 그래서 할당된 변수(참조)가 변경되면 원본 변수에서도 동일하게 변경된다.

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





