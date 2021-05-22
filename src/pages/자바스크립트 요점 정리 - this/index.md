---
path: "/자바스크립트 요점 정리 - this/"
category: "자바스크립트"
tags: ["자바스크립트"]
title: "자바스크립트 요점 정리 - this"
date: "2021-04-07T01:00:00.000Z"
summary: "자바스크립트 요점 정리 - this 파트"
images: ["images/2.jpg"]
---

> 자바스크립트 요점 정리 - this 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요





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
