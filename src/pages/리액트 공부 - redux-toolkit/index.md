---
path: "/리액트 공부 - redux-toolkit - 튜토리얼/"
category: "리액트"
tags: ["리액트", "react", "redux", "redux-toolkit"]
title: "리액트 공부 - redux-toolkit - 튜토리얼"
date: "2021-06-05T01:06:00.000Z"
summary: "리액트 공부 - redux-toolkit - 튜토리얼 정리 자료입니다."
images: ["images/react.jpg"]
---

> 리액트 공부 - redux-toolkit - 튜토리얼 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요
>
> redux-toolkit 공식 문서를 해석했습니다.



# 1. Redux toolkit  튜토리얼

---




* Redux Toolkit 빠른 시작 튜토리얼에 오신 것을 환영합니다! 이 튜토리얼에서는 Redux Toolkit에 대해 간략하게 소개하고 Redux Toolkit을 올바르게 사용하는 방법에 대해 설명합니다.

* 이 페이지는 Redux Toolkit을 사용하여 Redux 응용 프로그램을 설정하는 방법과 사용할 기본 API에 초점을 맞춥니다. Redux의 기능, 작동 방식 및 Redux Toolkit 사용 방법에 대한 전체 예는 "자습서 개요" 페이지에 연결된 튜토리얼을 참조하십시오.

* 이 튜토리얼에서는 React와 함께 Redux Toolkit을 사용하고 있지만 다른 UI 계층과도 함께 사용할 수 있습니다. 이러한 예는 모든 응용 프로그램 코드가 src에 있지만 사용 중인 프로젝트나 폴더 설정에 맞게 패턴을 조정할 수 있는 일반적인 Create-Ract-App 폴더 구조를 기반으로 합니다.

* Create-Ract-App의 Redux+JS 템플릿은 이미 구성된 동일한 프로젝트 설정과 함께 제공됩니다.

# 2. Redux toolkit 설치

---



## 1) Redux 툴킷 및 React-Redux 설치

---



* Redux 툴킷 및 React-Redux 패키지를 프로젝트에 추가합니다.

```bash
npm install @reduxjs/toolkit react-redux
```

* 또는

```bash
npm install @reduxjs/toolkit react-redux
```

## 2) Redux Store 생성

---



* src/app/store.js라는 파일을 생성합니다. 
* Redux Toolkit에서 configureStore API를 가져옵니다. 
* 빈 Redux 저장소를 생성하고  export default로 내보냅니다

```jsx
// app/store.js

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {},
})
```

* 그러면 Redux 저장소가 생성되고 개발 중에 저장소를 검사할 수 있도록 Redux DevTools 확장자도 자동으로 구성됩니다.



## 3) React에 Redux Store 세팅

---



* store가 생성되면 index.js의 응용 프로그램 주위에 React-Redux <Provider>를 배치하여 리액트 컴포넌트가 사용할 수 있도록 할 수 있습니다. 
* 방금 생성한 Redux 스토어를 가져오고, app 주변에 prov 공급자를 배치한 다음, 해당 스토어를 provider로 전달합니다.

```jsx
// index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 추가하기
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
    // provider에 store 세팅
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

```



## 4) Redux State Slice
---



* src/features/counter/counterSlice.js라는 새 파일을 추가합니다. 이 파일에서 Redux Toolkit에서 createSlice API를 가져옵니다.
* 슬라이스를 만들려면 슬라이스를 식별하는 문자열 이름, 초기 상태 값 및 상태를 업데이트할 수 있는 방법을 정의하는 하나 이상의 리듀서 함수가 필요합니다. 슬라이스가 생성되면 생성된 Redux 작업 생성자와 전체 슬라이스에 대한 리듀서 함수를 내보낼 수 있습니다.
* Redux에서는 데이터 복사본을 만들고 복사본을 업데이트하여 모든 상태 업데이트를 중단 없이 작성해야 합니다. 
* 그러나 Redux Toolkit의 createSlice와 createReducer APIs는 immer를 사용하여 정확한 불변 업데이트가 되는 "mutating" 업데이트 논리를 쓸 수 있게 한다.

```jsx
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```



## 5) State에 Slice Reducer 추가

---



* 다음으로 Counter Slice에서 reducer기능을 가져와 store에 추가해야 합니다. 
* reducer 파라미터 내의 필드를 정의하여 store에 이 Slice Reducer 기능을 사용하여 해당 상태에 대한 모든 업데이트를 처리하도록 합니다

```jsx
import { configureStore } from "@reduxjs/toolkit";
// 추가
import counterReducer from "../features/counter/counter";

export default configureStore({
  reducer: {
    // 추가
    counter: counterReducer,
  },
});

```



## 6) Redux State 와 Actions 사용
---



* 이제 React-Redux hook을 사용하여 Redux 저장소와 상호 작용할 수 있습니다. 
* useSelector를 사용하여 store에서 데이터를 읽고 useDispatch를 사용하여 작업을 디스패치할 수 있습니다. 
* 내부에 counter 구성 요소가 있는 src/features/counter/counter.js 파일을 생성한 다음 해당 구성 요소를 App.js로 가져와 app 내부에 렌더링합니다.

```jsx
import { Counter } from "./features/counter/counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
```

* 이제 "+" 및 "-" 단추를 누를 때마다 다음을 수행합니다.

* 해당 Redux action이 store에 dispatch됩니다.
* counter slice reduce가 action을 보고 state를 업데이트합니다.
* <Counter> 컴포넌트는 store에서 새 state 값을 확인하고 새 데이터로 다시 렌더링합니다.