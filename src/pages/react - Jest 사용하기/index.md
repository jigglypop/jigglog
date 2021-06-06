---
path: "/react - Jest 사용하기/"
category: "react"
tags: ["리액트", "react"]
title: "react - Jest 사용하기"
date: "2021-06-06T01:06:00.000Z"
summary: "react - Jest 사용하기 정리 자료입니다."
images: ["images/react.jpg"]
---

> react - Jest 사용하기 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요


# 1. Jest
---
## 1) Jest란

## 2) Jest 어써션
* `.not`: 이어지는 체인의 비교를 반대로 만든다
* `expect(OBJECT).toBe(value)`: 자바스크립트 일치 연산자(===)를 사용했을 때 값이 동일할 것을 예상한다(값뿐만 아니라 값의 타입도 비교)
* `expect(OBJECT).toEqual(value)`: 값을 깊은 비교(deep-equal)했을 때 동일할 것을 예상한다
* `expect(OBJECT).toBeFalsy()`: 값이 거짓일 것으로 예상한다
* `expect(OBJECT).toBeTruthy()`: 값이 참일 것으로 예상한다
* `expect(OBJECT).toBeNull()`: 값이 null일 것으로 예상한다
* `expect(OBJECT).toBeUndefined()`: 값이 정의되지 않을 것으로 예상한다
* `expect(OBJECT).toBeDefined()`: 값이 정의될 것으로 예상한다
* `expect(OBJECT).toMatch()`: 값이 정규표현식에 일치할 것으로 예상한다
