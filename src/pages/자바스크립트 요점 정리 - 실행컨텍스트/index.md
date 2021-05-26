---
path: "/자바스크립트 요점 정리 - 실행 컨텍스트/"
category: "자바스크립트"
tags: ["자바스크립트"]
title: "자바스크립트 요점 정리 - 실행 컨텍스트"
date: "2021-05-25T01:00:00.000Z"
summary: "자바스크립트 요점 정리 - 실행 컨텍스트"
images: ["images/2.jpg"]
---

> 프론트 엔드 면접 질문용 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요



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

##### 1) environmentRecord



#### 3) LexicalEnvironment

* 변경 사항이 실시간으로 반영됨