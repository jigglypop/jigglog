---
path: "/자바스크립트 요점 정리 - 실행 컨텍스트/"
category: "자바스크립트"
tags: ["자바스크립트"]
title: "자바스크립트 요점 정리 - 실행 컨텍스트"
date: "2021-05-25T01:00:00.000Z"
summary: "자바스크립트 요점 정리 - 실행 컨텍스트"
images: ["images/js.png"]
---

> 자바스크립트 요점 정리 - 실행 컨텍스트 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요



# 실행 컨텍스트

---

## 1) 실행 컨텍스트

#### 1) 실행 컨텍스트

* 실행할 코드에 제공할 환경 정보들을 모아놓은 객체

```javascript
var a = 1
function outer(){
    function inner(){
        console.log(a)
        var a = 1
    }
    inner()
    console.log(a)
}
outer()
console.log(4)
```



#### 2) VariableEnvironment

* 현재 컨텍스트 내의 식별자들에 대한 정보
* 외부 환경 정보
* 선언 시점의 LexicalEnvironment의 스냅샷
* 변경 사항은 반영되지 않음
* `environmentRecord`, `outerEnvironmentReference`


#### 3) LexicalEnvironment

* 변경 사항이 실시간으로 반영됨
* `environmentRecord`, `outerEnvironmentReference`

#### 4) environmentRecord
* 현재 컨텍스트와 관련된 코드의 식별자 정보들 저장
* 매개변수의 이름
* 함수 선언
* 변수명
  
#### 5) outerEnvironmentReference

##### 1) 스코프, 스코프 체인
* `스코프` : _식별자에 대한 유효 범위_
* `스코프 체인` : _식별자의 유효 범위를 안에서부터 바깥으로 차례로 검색해 나가는 것_
* `outerEnvironmentReference`는 현재 호출된 함수가 선언될 당시의 `LexicalEnvironment`를 참조

#### 6) 전역 변수와 지역 변수
* `전역 변수(global variable)` : 전역 공간에서 선언한 변수
* `지역 변수(local variable)` : 지역 공간에서 선언한 변수