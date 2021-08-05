---
path: "/우아한 테크 캠프 4기 - 4주차 회고/"
category: "우아한 테크 캠프 4기"
tags: ["우아한 테크 캠프", "우아한 테크 캠프 4기", "우아한 리액트", "리액트"]
title: "우아한 테크 캠프 4기 - 4주차 회고"
date: "2021-08-02T19:21:00000Z"
summary: "우아한 테크 캠프 4기 - 4주차 회고"
images: ["images/woowa.jpg"]
---







> 우아한 테크 캠프 4기 중 회고를 적어봅니다

# 1. 들어가기에 앞서

---

* 안녕하세요 이번에 우아한 테크 캠프 4기에 합류하게 된 염동환입니다.
* 이제 우아한 테크 캠프가 반환점을 돌고 있네요. 합류한 것이 엊그제 같은데 벌써 반이 더 지났다니 놀랍습니다
* 우아한 테크 캠프에 들어와서 실력있는 분들이 이렇게 많구나 하는 놀라움을 멈추지 못했습니다. 제가 알고 있는 부분이 많고, 많은 프로젝트로 나름 자신감이 있었는데 여기 와서 대단하신 분들을 많이 만나게 되는 것 같습니다
* 저는 회고를 성장에 초점을 맞추어 생각하고 적어보려 합니다


## 1) 왜 만드는가

---

*  저는 리액트를 거의 1년여동안 써 오면서 막연하게 useState는 이렇게 동작하겠구나..하고 써왔고 원리에 대해서는 매우 무지하다는 것을 깨달았습니다.
* 그리고 우아한 테크 캠프에서 공개된 커리큘럼을 보면 1달 정도는 리액트를 사용할 수 없는데, 그 동안 쓸 바닐라 자바스크립트를 좀 준비해 볼 겸, 공부를 할 겸 만들게 되었습니다



## 2) 어떻게 만드는가

* 우선 클래스형 리액트는 다양한 과제 테스트에서 사용해 보았고, 비교적 큰 어려움은 없었던 것 같습니다. 하지만 함수형 리액트는 몇배는 더 어려운 과정이라고 생각합니다. 그만큼 코드가 간결하기 때문입니다.
* 리액트 함수형의 가장 큰 핵심은 훅이라고 생각합니다. 그리고 그 훅의 가장 핵심은 `클로저`입니다



## 3) 클로저

---

* 먼저 사전적 정의는 이렇습니다

> “A closure is the combination of a function and the lexical environment within which that function was declared.”
> 클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합이다.
>
> (MDN)

* 공식적인 설명은 이렇습니다만...확실히 와닿지는 않는 개념입니다. 예제를 보겠습니다

```javascript
const Redux = function () {
  let count = 0;
  return {
    setCount() {
      count++;
      return count;
    },
    getCount() {
      return count;
    },
  };
};
const redux1 = new Redux();
redux1.setCount();
const redux2 = new Redux();
redux2.setCount();
redux2.setCount();


console.log(redux1.getCount());
console.log(redux2.getCount());
```

* 다음과 같이 redux라는 함수를 따로따로 new 생성자로 생성해주었다고 합시다. setCount의 입장에서 보면 count는 이해할 수 없습니다. setCount 아무곳에서도 count가 선언된 곳을 찾을 수 없기 때문입니다.
* 하지만 결론적으로 말하자면 count를 setCount에서 쓸 수 있습니다. 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수이기 때문입니다.
* 그래서 count가 선언된 새로 생성된 redux1, 그리고 redux2의 환경에서 따로 setCount를 해 주었을 경우, 각각의 기억된 환경의 count를 추가합니다

* 따라서 답은 `1, 2`입니다.
* 그리고 리액트는 각각의 컴포넌트에서 useState를 해 줄 경우 각각 다른 상태를 모두 저장합니다. 모든 컴포넌트에 클로저를 잡아주면 useState를 사용할 수 있다는 말입니다.



# 2. 이제 만들어보자

* 오늘 만들 개략적인 파일 트리는 이렇습니다

```javascript
// 리액트 실행부입니다. 이 부분만 우리가 건드릴 겁니다
react
	// 클로저를 생성할 파일
	ㄴ Closure.js
	// uuid 만들기
	ㄴ getID.js
	// 앱 시작할 때
	ㄴ initApp.js
	// 전역 상태를 저장할 전역 클로저
    ㄴ memo.js
	// 핵심부. 훅 등이 들어있음
    ㄴ react.js
	// 정규표현식으로 jsx를 파싱할 곳
    ㄴ tag.js
// 사용자가 작성할 파일
src
	ㄴ [components]
        ㄴ count.js
        ㄴ word.js
        ㄴ wordB.js
	ㄴApp.js
...
// 인덱스 파일. 전역 클로저 시작부분입니다. 그리고 이 곳에 모듈을 등록해주어야 합니다.
index.js
```

* 이번 시간에는 react.js의 useState, useEffect만 볼겁니다.
* 우선 가장 핵심부 react.js부터 보시죠



## 1) react.js

---

* 이 곳에서 useState, useEffect와 같은 핵심 처리가 이루어집니다.
* 나중에 클로저로 감싸질 곳이고, global이라는 변수로 전역의 상태를 공유하고, i인덱스로 훅의 순서를 잡습니다. 또한 $target으로 자신의 부모 노드를 가리킵니다.

```javascript
const React = function () {
  // 클로저 내부(훅 인덱스, 루트 타겟)
  let global = {
    hooks: [],
    callback: {}
  };
  let i = 0;
  let $target = null;

  // useState
  function useState(state) {
    // 훅에서 상태 찾기
    const hooks = global.hooks;
    const _state = global.hooks[i] || state;
    hooks[i] = _state;
    // setState(클로저 내의 클로저)
    const setState = (function () {
      // 내부 클로저 index 고정
      let _i = i;
      let target = $target;
      return function (value) {
        global.hooks[_i] = value;
        // 리렌더링 함수로
        rerender(global.Component, target, target, global.params);
      };
    })();
    // 인덱스 늘리기
    i++;
    return [_state, setState];
  }

  // useEffect
  function useEffect(cb, value) {
    const hooks = global.hooks;
    let _value = hooks[i];
    let changed = true;
    // value에서 변한 것이 있는지 찾음
    if (_value) changed = value.some((d, i) => d !== _value[i]);
    // 바뀌었으면 콜백 함수 글로벌에 push
    if (changed) {
      cb()
    }
    hooks[i] = value;
    // 인덱스 늘리기
    i++;
  }
  return {
    render,
    useState,
    useEffect,
  };
};

export default React;
```

* 개략적으로 다음과 같이 됩니다.

```javascript
  // 클로저 내부(훅 인덱스, 루트 타겟)
  let global = {
    hooks: [],
  };
  let i = 0;
  let $target = null;
```

* 이 부분에서 global 내의 hooks를 정의합니다. 나중에 hook을 저장하고 여기에서 꺼내오게 됩니다

```javascript
  // useState
  function useState(state) {
    // 훅에서 상태 찾기
    const _state = global.hooks[i] || state;
    global.hooks[i] = _state;
    // setState(클로저 내의 클로저)
    const setState = (function () {
      // 내부 클로저 index 고정
      let _i = i;
      let target = $target;
      return function (value) {
        global.hooks[_i] = value;
        // 리렌더링 함수로
        rerender(global.Component, target, target, global.params);
      };
    })();
    // 인덱스 늘리기
    i++;
    return [_state, setState];
  }

```

* useState입니다.
* 처음 선언할 당시 useState는 초기값을 받습니다. 그리고 글로벌 내의 훅에서 현재 인덱스로 상태를 찾아온 뒤 있으면 그 값을 갱신하기 위해 _state를 global.hooks[i]로 하고 , 아니면 state(초기값)으로 합니다.
* setState는 클로저 내의 클로저입니다. setState는 클로저 내부에 target과 i를 고정시키고 호출될 시 global.hooks의 클로저 내부 지정된 인덱스 값을 갱신해주고 rerender링 해줍니다. 
*  마지막으로 다른 훅을 위해 인덱스를 늘려주고 state와 setState함수를 리턴해주고 마칩니다.



```javascript
  // useEffect
  function useEffect(cb, hook) {
    // const hooks = global.hooks;
    let _hook = global.hooks[i];
    let changed = true;
    // hook에서 변한 것이 있는지 찾음
    if (_hook) {
      changed = hook.some((h, i) => h !== _hook[i]);
    }
    // 바뀌었으면 콜백 함수 글로벌에 push
    if (changed) {
      memoset.setCallback(global.id, i, cb);
    }
    global.hooks[i] = hook;
    // 인덱스 늘리기
    i++;
  }
```

* useEffect입니다. 이 함수는 아시다시피 뒤에 배열로 바뀐 것을 추적할 값을 넣어줍니다. 빈 배열이면 그냥 초기 렌더링 이후에 실행되구요. 
* value가 값들의 배열입니다. 호출될 시 훅이 변했을 시 호출됩니다.


## 어려웠던 점?
---

### 리액트는 컴포넌트마다 클로저를 잡아준다
* 리액트는 컴포넌트 하나하나마다 모두 클로저가 있습니다.
* 저도 그렇게 만들고자 노력했을 때 상당한 난관에 부딪혔습니다. 
* 훅을 잡아 준 상위 컴포넌트에서 재랜더링이 호출되어 자식 컴포넌트를 다시 랜더링할 당시 클로저가 삭제되어버렸기 때문입니다.
* 이 부분은 트리구조를 다시 공부하면서 하나하나 자식부터 순회하면서 클로저를 복원시켜주면서 해결해야 했습니다. 
* 상당히 난이도가 있는 작업이었기 때문에 알고리즘을 다시 공부하면서 혼자 3일정도를 보고 해결해 왔던 것 같습니다.


### this 바인딩과 컴포넌트별로 분리
* 리액트라는 객체를 거쳐서 빠져나온 컴포넌트 자식별로 리액트스럽게 분리시키고 싶었습니다
* 하지만 그 부분에서 다시 반복되는 코드가 많이 들어가는 등의 문제가 있었습니다.
* 그리고 하나하나가 제대로 분리되지 않는 문제점이 발생하였습니다.
* 이 부분은 this의 명시적 바인딩 bind로 해결하였고, this의 개념을 다시 공부하는 계기가 되었습니다.



## 마무리

---

* 대략적인 훅의 개념을 알아봤습니다. 진짜 리액트는 이것보다 더 복잡하고 잘 구현되어 있을 겁니다. 

  부족하지만 리액트를 이해하기 위해서 구현해봤습니다. 다음에는 본격적인 렌더링을 구현해보겠습니다. 