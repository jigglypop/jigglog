---
path: "/프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 자바스크립트(2)/"
category: "기술 면접"
tags: ["프론트엔드", "개발자", "면접", "기술면접", "자바스크립트"]
title: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 자바스크립트(2)"
date: "2021-04-07T01:00:00.000Z"
summary: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 자바스크립트(2) 파트"
images: ["images/2.jpg"]
---

> 프론트 엔드 면접 질문용 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요



# Java Script

---



## 1) JAVASCRIPT 원시 타입

- `string`,  `number`,  `boolean`,  `undefined` , `null` , `symbol`
- undefined :  선언만 되어있고 값은 없는 상태 
- null : 자료형이 객체이며 빈값을 의미

* 자바스크립트의 Number Type :  number는 하나. 정수만을 위한 타입이 없고, 모든 수를 실수로 처리



## 실행 컨텍스트(Execution Context) 

- 자바스크립트의 코드가 실행되기 위해 변수 객체, 스코프 체인, this 정보들을 담고 있는 곳

- 자바스크립트의 코드들이 실행되기 위한 환경(전역 컨텍스트 ,함수 컨텍스트)  

- 전역 컨텍스트 하나 생성 후에 함수 호출할 때마다 함수 컨텍스트가 생성. 

- 컨텍스트를 생성시에 변수객체, 스코프 체인, this가 생성. 컨텍스트 생성 후 함수가 실행되는데 사용되는 변수들은 변수 객체 안에서 값을 찾고 없다면 스코프 체인을 따라 올라가며 찾음. 

- 함수 실행이 마무리되면 해당 컨텍스트는 사라짐. 

- 페이지가 종료되면 전역 컨텍스트가 사라짐. 

  

## 가비지 컬렉터

- 메모리 할당을 추적하고 할당된 메모리 영역이 필요하지 않은 영역일 경우를 판단해서 회수하는 것. 
- 자바스크립트에서 변수는 직접적으로 참조 값(문자열, 객체, 배열 등)을 담고 있지 않고, 해당 값을 메모리 상에 저장. 따라서 참조 값을 생성하고나서 더이상 참조할 것이 없거나 비어졌을 때 가비지 컬렉터가 동작해서 메모리가 반환(메모리를 다시 재사용할 수 있는 상태가 된다)

- 자바스크립트의 순환참조 해결방법: 서로 순환되어서 참조되어져서 가비지컬렉터가 작동하지 않고 메모리 누수가 발생된다. null을 할당해서 연결을 끊는 방법을 사용한다.

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

  

## 자바스크립트의 배열

- 자바스크립트의 배열은 실제 자료구조의 배열과 다르게 HashMap으로 구현. 

- HashMap을 구현하기 위해서는 연결리스트로 구현하게 되는데 연결리스트에서 값을 찾기 위해서는 탐색해나가면서 값을 찾는 불상사가 발생

- 이를 해결하기 위해서 타이핑된배열(Int8Array, Float32Array 등) 이 추가되고 있다.

  

## 이벤트 루프, 동시성 모델

- 자바스크립트는 싱글 스레드 기반 언어이다. 
- 함수를 실행하면 함수 호출이 스택에 순차적으로 쌓이고 스택의 맨위에서부터 아래로 한번에 하나의 함수만 처리 할 수 있다. 
- 하지만, 자바스크립트에는 이벤트 루프라는것을 통해 동시성을 지원한다. (동시에 일어나는 것이 아니라 동시에 일어나는 것처럼 보이게 하는것이다!) 
- 이벤트 루프는 콜 스택에서 실행 중인 게 있는지 확인하고, Event queue에 작업이 있는지 확인해서 콜스택이 비어있다면 이벤트큐 내의 작업이 콜스택으로 이동되어서 실행된다. 





## 클로저

- 클로저(Closure) : 자신이 생성될때의 환경을 기억하는 함수 

  - 반환된 내부함수가 자신이 선언됬을때의 환경인 스코프를 기억하여 자신이 선언되었을때의 환경 밖에서 호출되어도 그 환경에 접근할 수 있는 함수
- 클로저의 사용 이유:

  - 현재 상태를 기억하고 변경된 최신 상태를 유지하기 위해
  - 전역 변수의 사용을 억제
  - 정보를 은닉하기 위해 



## ES6

- let, const, 화살표함수, 클래스, 프로미스, 스프레드 연산자

  

  

## Class

- Prototype, fucntion의 ES5 스펙만으로 Class를 구현할수 있음. 
- 자바스크립트에는 프로토타입이라는 것이 존재하여 클래스처럼 구현할 수 있음
- 클래스는 자바스크립트의 프로토타입 기반 패턴의 문법적 설탕





## AMD와 CommonJS

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





* 호스트 객체와 네이티브 객체:
  * Host Objects: 사용자에 의해 생성된 객체
  * Native Objects: 브라우저 또는 구동 엔진에 내장된 객체



- UA 문자열을 이용하여 기능 검출(feature detection)과 기능 추론(feature inference)의 차이점을 설명하세요.
- JSON이 어떻게 동작 되는지 설명하세요. (그리고 AJAX와 어떻게 다른지 설명하세요.)
- 기존에 JavaScript 템플릿을 사용한 적이 있나요? 만약에 있다면, 어떠한 방식으로 사용했는지 말씀해주세요.



## 속성(Attribute)와 요소(property)

- 속성(Attribute)는 element가 가지고 있는것. element의 형식 지정(<div id=D1...의 id)
- 요소(property)는 object가 가지고 있는 구성요소(name, parent, history, innerHeight 등)



## 내장된 JavaScript 객체를 확장하는 것이 좋지 않은 이유:

- 그것을 참조한 모든 객체가 확장한 구문을 따라가기 때문에

  

- document load event와 DOMContentLoaded event:
  - document.load: DOM 안의 모든 게 로딩이 끝나야 발생 (더 느림)
  - DOMContentLoaded: DOM 초기화시 발생
- JavaScript의 동일 출처 정책(the same-origin policy):
  
  - js나 문서가 다른 origin에서 fetch되지 못하게 하는 정책
- 다음 코드를 동작하게 만드세요.

```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

- 삼항식(Ternary statement)을 사용하는 이유는 무엇이고, 그것을 표현하기 위한 연산자 단어는 무엇인가요?

  




- 전역 scope를 사용했을 때 장단점:

  - 변수와 함수 이름의 충돌을 방지하기 위해

  - 모든 스크립트는 전역 스쿠프에 접근할 수 있다. 만약 모든 사람이 변수 선언에 전역 네임스페이스를 사용한다면 충돌이 매우 많이 발생할 것이다.

    모듈 패턴(IIFE 등)으로 직접 선언한 변수는 로컬 네임스페이스에 포함되도록 해야 한다.

    

- load event를 사용하는 이유:

  - DOM의 모든 게 로드가 끝난 후에 이벤트를 걸어야할 것이 있을 때 사용 (lazy loading)




## 디버깅

- Chrome devtools, debugger, console.log, React, Redux Devtools



- mutable object와 immutable object에 관해 설명해주세요.

  - JavaScript에서 immutable 객체의 예를 들어보세요.
  - immutability의 장/단점은 무엇인가요?
  - 자신의 코드에서 불변성(immutability를) 어떻게 달성할 수 있나요?

  

- 동기방식과 비동기 방식 함수의 차이:

  - 동기(synchronous : 동시에 일어나는) :  요청과 결과가 한 자리에서 동시에 일어남, A노드와 B노드 사이의 작업 처리 단위(transaction)를 동시에 맞춤
  - 비동기(Asynchronous : 동시에 일어나지 않는) : 요청과 결과가 동시에 일어나지 않음, 요청한 그 자리에서 결과가 주어지지 않음, 노드 사이의 작업 처리 단위를 동시에 맞추지 않아도 된다

  


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



## == 과 === 

* `==` : 두 변수의 값 비교
* `===` : 엄격한 비교(값 + 타입)

```javascript
0 == false // true 왜? js 에서 0 은 false 한 값이기 때문 
1 == true     //true 

2 == "2" // true 왜? 자동으로 타입을 캐스팅 해버림 
0 == ''     //true 
0 == '0'     //true 

false == '0'    //true 
null == undefined    //true 
false == null    //false 
false == undefined    //false
```



== 같은 경우는 피연산자가 서로 다른 타입이면 타입을 강제로 변환하여 비교한다.

위 예제에서 의외인점은 null, undefined 도 falsy 한 값인데.. false == null 에서 false 가 나온다는게 의외다.

254 === '254' //  false true === 1 // false 'abc' === 'abc' // true





## DOM

- Angular의 경우 view와 model을 연결시키는 바인딩작업이 있고 변화감지를 통해서 상태를 보고 있다가 업데이트 되는 식
- React의 경우 가상 DOM이 있고, 가상 DOM이 실제 DOM과 비교하여 state가 변화되었는지 감지





## 1) 이벤트 위임

#### (1) 이벤트 버블링(Event Bubbling), 이벤트 캡쳐링(Event Capturing)

* `이벤트 버블링(하위 -> 상위)` :  특정 화면 요소에서 이벤트가 발생했을 때 하위 -> 상위 요소들로 전달
* `이벤트 캡처링(상위 -> 하위)` : 이벤트 버블링과 반대로 상위 요소 -> 하위 요소로 탐색하며 이벤트를 전파

#### (2) event delegation

* 하나의 부모에 이벤트를 등록하여 부모가 이벤트를 위임하는 방식
* 이 방법은 동적인 요소들에 대한 처리가 수월, 이벤트 핸들러를 더 적게 등록해 주기 때문에 메모리 절약

- 이벤트 버블링:

  - 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성

- 이벤트 캡쳐링:

  - 이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식(이벤트 리스너 capture: true 설정)

- 이벤트 위임:

  - 동적으로 노드를 생성하고 삭제할 때 각 노드에 대해 이벤트를 추가 하지 않고, 상위 노드에서 하위 노드의 이벤트를 제어 

    

