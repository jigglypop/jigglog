---
path: "/프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 자바스크립트/"
category: "기술 면접"
tags: ["프론트엔드", "개발자", "면접", "기술면접", "자바스크립트"]
title: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 자바스크립트"
date: "2021-04-07T01:00:00.000Z"
summary: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 자바스크립트 파트"
images: ["images/2.jpg"]
---

> 프론트 엔드 면접 질문용 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요

# Java Script

---



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

- 자바스크립트의 타입 

  - 자바스크립트의 Number Type의 다른 언어들과 차이점 :  다른언어에는 int double 등 숫자타입의 다양함이 있지만, number는 하나. 정수만을 위한 타입이 없고, 모든 수를 실수를 처리
  - 자바스크립트의 원시 타입 종류 : string,  boolean, number,  undefined , null , symbol
  - undefined :  선언만 되어있고 값은 없는 상태 
  - null : 자료형이 객체이며 빈값을 의미

- 실행 컨텍스트(Execution Context) :  자바스크립트의 코드가 실행되기 위해 변수객체, 스코프 체인, this 정보들을 담고 있는 곳

  - 자바스크립트의 코드들이 실행되기 위한 환경(전역 컨텍스트 ,함수 컨텍스트)  
  - 전역 컨텍스트 하나 생성 후에 함수 호출할 때마다 함수 컨텍스트가 생성. 
  - 컨텍스트를 생성시에 변수객체, 스코프 체인, this가 생성. 컨텍스트 생성 후 함수가 실행되는데 사용되는 변수들은 변수 객체 안에서 값을 찾고 없다면 스코프 체인을 따라 올라가며 찾음. 
  - 함수 실행이 마무리되면 해당 컨텍스트는 사라짐. 
  - 페이지가 종료되면 전역 컨텍스트가 사라짐. 

- 호이스팅(Hoisting): 

  - 변수를 선언하고 초기화 했을때 선언부분이 최상단으로 끌어올려지는 현상
  - 코드 상단에서 console.log(a)를 찍고 하단에서 var a=1; 이라고 하였을때 a는 undefined라고 나오는 현상

- 클로저(Closure) : 자신이 생성될때의 환경을 기억하는 함수 

  - 반환된 내부함수가 자신이 선언됬을때의 환경인 스코프를 기억하여 자신이 선언되었을때의 환경 밖에서 호출되어도 그 환경에 접근할 수 있는 함수

- 클로저의 사용 이유:

  - 현재 상태를 기억하고 변경된 최신 상태를 유지하기 위해
  - 전역 변수의 사용을 억제
  - 정보를 은닉하기 위해 

- 가비지컬렉터의 역할과 동작원리? : 

  - 메모리 할당을 추적하고 할당된 메모리 영역이 필요하지 않은 영역일 경우를 판단해서 회수하는 것. 
  - 자바스크립트에서 변수는 직접적으로 참조 값(문자열, 객체, 배열 등)을 담고 있지 않고, 해당 값을 메모리 상에 저장. 따라서 참조 값을 생성하고나서 더이상 참조할 것이 없거나 비어졌을 때 가비지 컬렉터가 동작해서 메모리가 반환(메모리를 다시 재사용할 수 있는 상태가 된다)

- 자바스크립트의 순환참조, 해결방법: 서로 순환되어서 참조되어져서 가비지컬렉터가 작동하지 않고 메모리 누수가 발생된다. null을 할당해서 연결을 끊는 방법을 사용한다.

  - 대부분의 브라우저에서는 Mark and sweep알고리즘을 사용. 그래서 가비지컬렉터가 참조되지 않는 객체가 있을 때 동작하는 것이 아니라 접근 할 수 없는(닿을 수 없는) 객체 일 때 동작한다.

  ```javascript
  function f(){
    var o = {};
    var o2 = {};
    o.a = o2; // o는 o2를 참조한다.
    o2.a = o; // o2는 o를 참조한다.
  
    return "azerty";
  }
  
  f();
  ```

  

- 자바스크립트의 배열이 실제 자료구조 배열이 아닌데 그 이유는?

  - 자바스크립트의 배열은 실제 자료구조의 배열과 다르게 HashMap으로 구현. 
  - HashMap을 구현하기 위해서는 연결리스트로 구현하게 되는데 연결리스트에서 값을 찾기 위해서는 탐색해나가면서 값을 찾는 불상사가 발생
  - 이를 해결하기 위해서 타이핑된배열(Int8Array, Float32Array 등) 이 추가되고 있다.

- 이벤트 루프에 대해서 설명, 동시성 모델에 대해서 설명

  - 자바스크립트는 싱글 스레드 기반 언어이다. 
  - 함수를 실행하면 함수 호출이 스택에 순차적으로 쌓이고 스택의 맨위에서부터 아래로 한번에 하나의 함수만 처리 할 수 있다. 
  - 하지만, 자바스크립트에는 이벤트 루프라는것을 통해 동시성을 지원한다. (동시에 일어나는 것이 아니라 동시에 일어나는 것처럼 보이게 하는것이다!) 
  - 이벤트 루프는 콜 스택에서 실행 중인 게 있는지 확인하고, Event queue에 작업이 있는지 확인해서 콜스택이 비어있다면 이벤트큐 내의 작업이 콜스택으로 이동되어서 실행된다. 

- 프로토타입:

  - 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거

  - 즉, 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메소드를 프로토타입에 미리 구현해 놓음으로써 또 구현하는것이 아니라 상위(부모) 객체인 프로토타입의 자산을 공유하여 사용할 수 있다.

  - \_\_proto\_\_접근자 프로퍼티로 자신의 프로토타입, 즉 Prototype 내부슬롯에 접근 할 수 있음.

    

- 프로토타입 체인:

  - 객체의 프로퍼티에 접근하려고 할때 객체에 접근하려는 프로퍼티가 없으면  \_\_proto\_\_접근자 프로퍼티가 가리키는 링크를 따라 자신의 부모역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색
  - 프로로타입체인의 최상위 객체는 Object.prototype이다. 이 객체의 프로퍼티와 메소드는 모든 객체에게 상속된다.
    prototype 프로퍼티 는 생성자함수가 생성할 인스턴스의 프로토타입을 가르킨다.

- This

  - 자바스크립트에서 This는 몇가지로 추론 될수 있는가, 아는대로 말해달라

  - 일반함수의 this와 화살표 함수의 this는 어떻게 다른가?

    자바스크립트의 내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든지 this는 전역객체를 가르킴
    일반함수의 this는 window(전역)을 가르키며, 화살표 함수의 this는 언제나 상위스코프의 this를 가르킴

- Call, Apply, Bind :

  - this를 바인딩하기 위한 방법
  - Call : this를 바인딩하면서 함수를 호출하는 것, 두번째 인자를 하나씩 넘기는 것
  - Apply : this를 바인딩하면서 함수를 호출하는 것, 두번째 인자가 배열
  - Bind : 함수를 호출하는 것이 아닌 this가 바인딩 된 새로운 함수를 리턴

  

- use strict모드에서의 this:

  일반함수에서의 this는 undefined가 바인딩 됨.

- ES6 크롬 정도의 브라우저를 제외하곤 ES6 스펙에 대한 지원이 완벽하지 않은데 해결방법:

  - Babel을 사용한다. ES6이상의 문법의 코드들을 브라우저가 이해할 수 있게끔 ES5이하의 문법으로 변환

- Babel: 

  - 트랜스파일러.
  - 컴파일 : 한 언어로 작성된 소스 코드를 다른 언어로 바꾸는것 (C-> 어셈블리어) 
  - 트랜스파일러: 한언어로 작성된 소스코드를 비슷한 수준의 추상화를 가진 다른 언어로 변환(C++>C, ES6->ES5)

  

- ES6 에서 추가된 스펙:

  - let, const, 화살표함수, 클래스, 프로미스, 스프레드 연산자

  

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

  

- Class:

  - Prototype, fucntion의 ES5 스펙만으로 Class를 구현할수 있음. 
  - 자바스크립트에는 프로토타입이라는 것이 존재하여 클래스처럼 구현할 수 있음
  - 클래스는 자바스크립트의 프로토타입 기반 패턴의 문법적 설탕

- 이벤트 버블링:

  - 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성

- 이벤트 캡쳐링:

  - 이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식(이벤트 리스너 capture: true 설정)

- 이벤트 위임:

  - 동적으로 노드를 생성하고 삭제할 때 각 노드에 대해 이벤트를 추가 하지 않고, 상위 노드에서 하위 노드의 이벤트를 제어 하는 방식

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>오늘의 할 일</h1>
      <ul class="itemList">
          <li>
              <input type="checkbox" id="item1">
              <label for="item1">이벤트 버블링 학습</label>
          </li>
          <li>
              <input type="checkbox" id="item2">
              <label for="item2">이벤트 캡쳐 학습</label>
          </li>
      </ul>
      <script>
          // var inputs = document.querySelectorAll('input');
          // inputs.forEach(function(input) {
          // 	input.addEventListener('click', function() {
          // 		alert('clicked');
          // 	});
          // });
          var inputs = document.querySelectorAll('input');
          var itemList = document.querySelector('.itemList');
          itemList.addEventListener('click', function(event) {
              alert('clicked');
          });
  
          var li = document.createElement('li');
          var input = document.createElement('input');
          var label = document.createElement('label');
          var labelText = document.createTextNode('이벤트 위임 학습');
  
          input.setAttribute('type', 'checkbox');
          input.setAttribute('id', 'item3');
          label.setAttribute('for', 'item3');
          label.appendChild(labelText);
          li.appendChild(input);
          li.appendChild(label);
          itemList.appendChild(li);
      </script>
  </body>
  </html>
  ```

- AMD와 CommonJS:

  - 모든 모듈의 로딩이 완료된 후에 실행/ 로딩 완료 이전에 실행(동기 vs 비동기)
  - Common.js : 모든 모듈이 로컬에 다운로드가 된 이후에 실행하는 방식. node.js에서 사용하는 방식으로 server 환경에서 외부 모듈을 가져올 때 유리

  ```javascript
  var lib = require("package/lib");
  function foo() {
  	lib.log("hello world!");
  }
  
  exports.foobar = foo;
  ```

  * AMD :  비동기적으로 필요한 파일을 다운로드하는 방식, client단(브라우저 환경)에서 외부 모듈을 가져올 때 유리한 방식 

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

- 다음 코드가 즉시 호출 함수 표현식(IIFE)로 동작하지 않는 이유:

  ```javascript
  function foo(){ }();
  ```

  - 함수 선언문이므로 실행되지 않음. 따라서 바깥을 감싸야함.

- 다음 코드의 차이점은 무엇인가요?

```javascript
function Person(){} var person = Person() var person = new Person()
```

- .call과 .apply의 차이점은 무엇인가요?

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



* 호스트 객체와 네이티브 객체:
  * Host Objects: 사용자에 의해 생성된 객체
  * Native Objects: 브라우저 또는 구동 엔진에 내장된 객체

- document.write()의 사용 시기:
  - 스크립트 심을 때 document.write는 block 되지 않으므로 근데 appendChild로 심을 수 있어서 안씀
- UA 문자열을 이용하여 기능 검출(feature detection)과 기능 추론(feature inference)의 차이점을 설명하세요.
- AJAX:
  - XMLHttpRequest 객체를 사용해 비동기 방식으로 서버와 통신을 하는 것
- JSON이 어떻게 동작 되는지 설명하세요. (그리고 AJAX와 어떻게 다른지 설명하세요.)
- 기존에 JavaScript 템플릿을 사용한 적이 있나요? 만약에 있다면, 어떠한 방식으로 사용했는지 말씀해주세요.
- 속성(Attribute)와 요소(property)의 차이:
  - 속성(Attribute)는 element가 가지고 있는것. element의 형식 지정(<div id=D1...의 id)
  - 요소(property)는 object가 가지고 있는 구성요소(name, parent, history, innerHeight 등)
- 내장된 JavaScript 객체를 확장하는 것이 좋지 않은 이유:
  - 그것을 참조한 모든 객체가 확장한 구문을 따라가기 때문에
- document load event와 DOMContentLoaded event:
  - document.load: DOM 안의 모든 게 로딩이 끝나야 발생 (더 느림)
  - DOMContentLoaded: DOM 초기화시 발생
- JavaScript의 동일출처정책(the same-origin policy):
  - js나 문서가 다른 origin에서 fetch되지 못하게 하는 정책
- 다음 코드를 동작하게 만드세요.

```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

- 삼항식(Ternary statement)을 사용하는 이유는 무엇이고, 그것을 표현하기 위한 연산자 단어는 무엇인가요?

- use strict;은 무엇이고, 사용했을 때 장단점:

  - 전체 코드나 함수에 strict mode를 적용하기 위해 사용. strict 모드의 선언은 자바스크립트 변형의 제한에 동의한다는 것

  

  - 의도하지 않은 전역 변수가 선언되지 못하도록 한다
  - 삭제할 수 없는 속성(property)를 삭제하려고 시도하면 오류를 발생시킨다
  - 함수의 파라미터 이름은 서로 달라야 한다
  - this 는 전역 컨텍스트에서 undefined다
  - 몇몇 일반적인 코딩 실수를 잡아서 예외 처리(throw exception)시킨다 (예를 들어 전역 객체에 접근하려고 하는 것)
  - 자바스크립트에서 개발자에게 혼란을 주거나, 잘못 만든 것으로 보이는 여러 기능의 사용을 금지한다

  

  - 못쓰게 되는 많은 기능들이 어떤 개발자에게는 필요한 기능일 수 있다
  - function.caller 그리고 function.arguments 에 접근할 수 없다
  - 서로 다른 strict mode로 작성된 코드를 연결했을 때 오류가 발생할 수 있다.



- 전역 scope를 사용했을 때 장단점:

  - 변수와 함수 이름의 충돌을 방지하기 위해

  - 모든 스크립트는 전역 스쿠프에 접근할 수 있다. 만약 모든 사람이 변수 선언에 전역 네임스페이스를 사용한다면 충돌이 매우 많이 발생할 것이다.

    모듈 패턴(IIFE 등)으로 직접 선언한 변수는 로컬 네임스페이스에 포함되도록 해야 한다.

    

- load event를 사용하는 이유:

  - DOM의 모든 게 로드가 끝난 후에 이벤트를 걸어야할 것이 있을 때 사용 (lazy loading)

    

- SPA에서 SEO에 유리하도록 만들기 위한 방법에 대해 설명해주세요.:

  - 클라이언트 사이드 렌더링 웹사이트

    

- Promise가 콜백 대비 장/단점:

  - 가독성 떨어지는 콜백 지옥에서의 탈출
  - .then()을 사용해서 순차적인 비동기 작업을 가독성 있게 작성할 수 있다
  - Promise.all()을 사용해서 병렬로 실행되는 비동기 작업을 쉽게 작성할 수 있다
  - 프로미스가 있으면 콜백만 사용하는 코딩에서 발생하는 콜백을 너무 빨리/늦게/많이/적게 실행, 필요한 환경변수/파라미터의 전달 실패, 확인해야 하는 에러, 예외가 숨어버리는 등이 발생하지 않는다
  - 조금 더 복잡한 코드
  - ES2015를 지원하지 않는 구형 브라우저에서는 사용할 수 없으며 폴리필이나 Babel을 통한 컴파일이 필요하다.



- JavaScript를 디버깅할 때 사용하는 도구:

  - Chrome devtools, debugger, console.log, React, Redux Devtools

  

- 객체 안의 속성과 배열의 아이템을 순회할 때 사용하는 문법:

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



- mutable object와 immutable object에 관해 설명해주세요.

  - JavaScript에서 immutable 객체의 예를 들어보세요.
  - immutability의 장/단점은 무엇인가요?
  - 자신의 코드에서 불변성(immutability를) 어떻게 달성할 수 있나요?

  

- 동기방식과 비동기 방식 함수의 차이:

  - 동기(synchronous : 동시에 일어나는) :  요청과 결과가 한 자리에서 동시에 일어남, A노드와 B노드 사이의 작업 처리 단위(transaction)를 동시에 맞춤
  - 비동기(Asynchronous : 동시에 일어나지 않는) : 요청과 결과가 동시에 일어나지 않음, 요청한 그 자리에서 결과가 주어지지 않음, 노드 사이의 작업 처리 단위를 동시에 맞추지 않아도 된다

  

- function foo() {}와 var foo = function() {}에서 foo 의 차이:

  - 함수 선언(함수바디가 호이스트)

  ```javascript
  foo() // 'FOOOOO'
  function foo() {
    console.log('FOOOOO')
  }
  ```

  - 함수 표현식(함수 바디는 호이스트되지 않음)

  ```js
  foo() // Uncaught TypeError: foo는 함수가 아닙니다
  var foo = function() {
    console.log('FOOOOO')
  }
  ```

- 

  

* javascript 원시타입:
  * string, number, boolean, symbol, null, undefiend총 6가지가 있으며, 이걸 제외한 나머지 타입은 참조타입

* typeof, instanceof 차이?:
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



* object 를 정의하는 방법
  * const obj = new Object();  // Object() 생성자 함수를 이용 const obj2 = {}; // object literal 생성
  * js 에서 제공하는 내장객체들은 아래와 같습니다.
  * Object String Number Boolean Date Array Math

js 에서 이야기하는 객체(object)는 key 와 value 로 구성된 속성(property)들의 집합입니다.

for ~ in 구문으로 객체를 순회하면 객체의 key 를 순회합니다.



* ES6 이전 js 에서 인스턴스를 생성하는 방법

```javascript
function Person(age) {  
    this.age = age;  
    this.printAge = function(){    
        console.log('Hi! my age is ' + this.age);  
    }; 
} 
const person = new Person(10);
```



* 생성자 함수 정의(함수명은 대문자로 시작)
  * new 연산자를 이용하여 인스턴스 생성
  * person 인스턴스 프로토타입 링크(__proto__)는 Person 의 prototype object 를 가리킨다.
  * new 연산자를 사용가능하려면 생성자 자격이 있어야한다.(constructor)



* == 과 === 의 차이:

  * == : 두 변수의 값 비교
  * === : 엄격한 비교를 한다. 값 + 타입

  ```javascript
  0 == false // true 왜? js 에서 0 은 false 한 값이기 때문 
  2 == "2" // true 왜? 자동으로 타입을 캐스팅 해버림 
  0 == ''     //true 
  0 == '0'     //true 
  1 == true     //true 
  false == '0'    //true 
  null == undefined    //true 
  false == null    //false 
  false == undefined    //false
  ```

  

== 같은 경우는 피연산자가 서로 다른 타입이면 타입을 강제로 변환하여 비교한다.

위 예제에서 의외인점은 null, undefined 도 falsy 한 값인데.. false == null 에서 false 가 나온다는게 의외다.

254 === '254' //  false true === 1 // false 'abc' === 'abc' // true

- AJAX : 자바스크립트를 이용해 비동기적으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식
  보통은 서버로부터 웹페이지가 반환되면 전체를 갱신해야하는데 / AJAX를 사용하면, 페이지 일부만을 갱신하고도 동일한 효과를 볼 수 있다. 즉, 갱신이 필요한 부분만 로드하여 갱신하면 되므로 빠르고, 부드러운 화면효과를 기대할 수 있음





- 이벤트 위임? : 

  * 자식 엘리먼트의 이벤트를 부모 엘리먼트에서 감지할 수 있으니 이벤트를 하나하나 등록하는 것이 아니라 부모에게 이벤트를 위임 하는 방법

- DOM을 건드리는 방식과 아닌 방식들의 차이 : 직접 DOM을 건드리는 경우 DOM의 구조를 파악하고 있어야하며, 클래스명이다 태그명이 바뀌는 경우 다시 DOM을 변경

  - Angular의 경우 view와 model을 연결시키는 바인딩작업이 있고 변화감지를 통해서 상태를 보고 있다가 업데이트 되는 식
  - React의 경우 가상 DOM이 있고, 가상 DOM이 실제 DOM과 비교하여 state가 변화되었는지 감지

- 반응형 프로그래밍 : 데이터 스트림이라는 하나의 일관된 형식으로 만들고, 이 데이터 스트림을 구독하여 데이터 스트림의 상태 변화에 반응하는 방식으로 동작하는 애플리케이션을 만드는 것

  - Tv와 Tv방송국이 있다고 가정했을때, Tv방송국이 일정한 시간 단위로 영상에 대한 프레임을 계속해서 방출(emit)하고 TV는 방송국을 관찰하고 있다가 새로운 영상을 방출하면 이를 획득하는 방식
  - 여기서 방송국의 역할이 옵저버블, Tv가 옵저버, 영상프레임이 Notification

- Call by value & call by ref

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

    

 

```javascript
var foo = 10 + '20';

// 1020
```

```javascript
console.log(0.1 + 0.2 == 0.3);

// false
```

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

```javascript
"i'm a lasagna hog".split("").reverse().join("");

// goh angasal a m'i
```



```javascript
( window.foo || ( window.foo = "bar" ) );

// 
```

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);

// 'hello world' 팝업창 한번
```

```javascript
var foo = [];
foo.push(1);
foo.push(2);
console.log(foo.length)
// 2
```

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};


```

```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');

// one
// three
// two
```



## 1) 이벤트 위임

#### (1) 이벤트 버블링(Event Bubbling), 이벤트 캡쳐링(Event Capturing)

* 이벤트 버블링 :  특정 화면 요소에서 이벤트가 발생했을 때 하위 -> 상위 요소들로 전달
* 이벤트 캡처링 : 이벤트 버블링과 반대로 상위 요소 -> 하위 요소로 탐색하며 이벤트를 전파

#### (2) event delegation

특정 요소 하나하나를 개별적으로 이벤트를 부여하는 것이 아니라, 하나의 부모에 이벤트를 등록하여 부모가 이벤트를 위임하는 방식을 이벤트 위임이라고 한다. 이 방법은 동적인 요소들에 대한 처리가 수월하며 이벤트 핸들러를 더 적게 등록해 주기 때문에 메모리도 절약할 수 있다.



## 2) this



* this는 자바스크립트 런타임 시에 바인딩이 이루어지는 실행 컨텍스트 중 하나로, 해당 함수가 실행되는 동안에 사용할 수 있으며 함수 호출 부분에서 this가 가리키는 것이 무엇인지를 확인할 수 있다. 
* 때로는 복잡한 코드에서 암시적 바인딩에 의해 혼란스러운 경우가 많은데, 이런 문제를 해결하기 위해서 call이나 apply 같은 내장 유틸리티를 사용하여 명시적으로 바인딩을 해 준다.



## 3) prototype 

* 자바스크립트 객체에는 Prototype이라는 내부 프로퍼티가 있고, 이는 다른 객체를 참조할 때 사용한다. 

* 자바스크립트에서 상속을 진행할 때는 프로토타입끼리 연결을 하는데, 부모 프로토타입을 create()나 setPropertyOf() 메서드를 사용하여 자식 프로토타입과 연결한다.

  

## 4) null과 undefined의 차이점은 무엇인가요?

* 두 타입 모두 값이 없음을 의미한다. 

* 둘 다 데이터 타입이자 그 변수의 값이다. 

* 자바스크립트에서 변수를 선언하면 초기값으로 undefined를 할당하게 된다. 

* 반면 null은 값이 비어있음을 나타내며 값이 없다는 값이 등록되어 있는 것이다.

  

### **익명함수(anonymous functions)는 주로 어떤 상황에서 사용하나요?**

익명함수는 즉시 실행이 필요한 상황에서 사용한다.

### AJAX에 관해 가능한 한 자세히 설명하세요. (D사 화상면접)

AJAX는 비동기 자바스크립트 xml의 약자이다. 쉽게 말하면 클라이언트와 서버가 xml 데이터를 주고 받는 기술이다. 기존에는 클라이언트에서 서버로 요청을 보내고 응답을 받으면 다시 화면을 갱신해야 했고 이 과정에서 많은 리소스가 낭비되었다. 이 문제를 해결하기 위해 ajax는 페이지에서 필요한 일부만 갱신할 수 있도록 XMLHttpRequest 객체를 서버에 요청한다. 이로 인해 자원과 시간을 많이 아낄 수 있다.

### **"호이스팅(Hoisting)"에 대해서 설명하세요. (V사 기술면접)**

호이스팅은 인터프리터가 자바스크립트 코드를 해석함에 있어서, Global 영역 또는 함수 영역 안에 대해서 주어진 선언들을 모두 끌어올려서 해당 유효 범위 최상단에 선언하는 것을 의미한다.

### **Callback과 Promise, async/await의 차이점에 대해서 설명해 주세요. (D사 화상면접)**

가장 먼저 나온 Callback은 비동기 처리를 구현하기 위해 만들어 졌다. 이 함수는 다른 함수에게 인자로 전달되어 어느 시점에 실행될 수 있도록 던져주는 함수이다. 하지만 콜백 지옥이라 불리는 중첩문이 발생하면서 에러처리 한계가 생기기 시작했고 이를 해결하기 위해 Promise가 나타났다.

Promise는 어떤 값이 생성 되었을 때 그 값을 대신하는 대리자이다. 비동기 연산이 종료된 이후에 그 결과 값이나 에러를 처리할 수 있도록 처리기를 연결하는 역할을 하는 객체이다. Promise 객체를 통해 성공, 실패, 오류에 따른 후속처리가 바로 가능해서 가독성도 좋고, 비동기 에러를 처리하기도 수월하다.

Async/await은 비동기 코드를 동기식으로 표현하는 더 나은 방법으로 ES2017에 등장하였다. Async와 await는 항상 같이 붙어 있어야 한다. await 모드는 Promise 객체를 받아 처리하고, 만약 비동기 함수가 아닌 동기적 함수라면 리턴 값을 그대로 받는다. Async 함수는 Promise 객체를 통해 비동기적으로 처리된 내용을 동기적인 코드 진행 순서로 보여주는 역할을 한다.



### **let, var, const의 차이점에 관해서 설명해주세요. (V사 기술면접)**

let, const 중복이나 호이스팅을 선언하지 않는다. 블록 단위의 변수타입이다.

### **event loop란 무엇인가요? (D사 화상면접)**

자바스크립트 엔진이 Call Stack과 Callback Queue의 상태를 체크하여 Call Stack이 빈 상태가 되면, Callback Queue의 첫번째 콜백을 Call Stack으로 밀어 넣는다.

### **Javascript Scope Chaining에 대해 설명해 주세요.**

실행 컨텍스트 내에서 변수를 탐색할 때 중복되는 변수가 있더라도 먼저 탐색된 변수를 우선적으로 실행시키는 방식이다.

### **use strict 은 무엇이고, 사용했을 때 장단점에 관해서 설명해주세요.**

use strict는 엄격 모드로 전체 스크립트 또는 부분 함수에 적용이 가능하다. use strict를 사용하게 되면 1. 기존에 무시되던 에러들이 throw 되며 2. JS 엔진 최적화 작업을 어렵게 만드는 실수들을 바로 잡고 3. ECMAScript의 차기 버전에서 정의될 문법들을 금지하는 특성을 가지고 있다.

특히 엄격 모드에서는 이전에 허용되던 실수를 오류로 바꾸어 놓는다. 예를 들어 전역 변수 생성을 불가능하게 만든다든지, 아니면 NaN에 할당하는 것과 같은 일들을 엄격 모드에서는 그냥 넘어가지 않는다. 또한 삭제할 수 없는 프로퍼티를 삭제하려고 하면 예외를 발생시킨다.