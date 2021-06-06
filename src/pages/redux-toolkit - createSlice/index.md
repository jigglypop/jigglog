---
path: "/redux-toolkit - createSlice/"
category: "redux-toolkit"
tags: ["리액트", "react", "redux", "redux-toolkit"]
title: "redux-toolkit - createSlice"
date: "2021-06-05T01:06:00.000Z"
summary: "redux-toolkit - createSlice 정리 자료입니다."
images: ["images/react.jpg"]
---

> redux-toolkit - 튜토리얼 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요
>
> redux-toolkit 공식 문서를 해석했습니다.



# 1. createSlice 개요

---



* `createSlice` : initialState, reducer 함수 객체, slice의 name(이름), generator와 상태에 해당하는 동작 생성자와 동작 유형을 자동으로 생성하는 함수

* 이 API는 Redux 논리를 쓰는 표준 접근 방식입니다.

* 내부적으로 createAction 및 createReducer를 사용하기 때문에  immer를 사용하여 mutating 불변 업데이트를 작성할 수도 있습니다.

```jsx
// 타입스크립트
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState = { value: 0 } as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

```jsx
// 자바스크립트

import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```





# 2. 파라미터

---



* createSlice는 다음 옵션을 사용하여 단일 구성 개체 매개 변수를 허용합니다.

```jsx
function createSlice({
    // 작업 유형에 사용되는 이름
    name: string,
    // reducer의 초기 상태
    initialState: any,
    // "case reducers"의 개체입니다. 키 이름은 작업을 생성하는 데 사용됩니다.
    reducers: Object<string, ReducerFunction | ReducerAndPrepareObject>
  	// 키가 다른 작업 유형이어야 하는 "대소문자 구분자" 또는 
    // "대소문자 구분자"의 추가 객체를 추가하는 데 사용되는 "builder callback" 함수
    extraReducers?:
    | Object<string, ReducerFunction>
    | ((builder: ActionReducerMapBuilder<State>) => void)
})
```



## 1) initialState

---



* 이 상태 조각의 초기 상태 값입니다.



## 2) name

---



* 이 slice의 문자열 이름입니다. 생성된 작업 유형 상수는 이를 접두사로 사용합니다.



## 3) reducers

---



* Redux "case reducer" 함수를 포함하는 객체(스위치의 단일 case 문과 동등한 특정 동작 유형을 처리하기 위한 함수)

* 개체의 키는 문자열 작업 유형 상수를 생성하는 데 사용되며, 이러한 상수는 Redux DevTools Extension에 표시됩니다. 또한 응용 프로그램의 다른 부분이 정확히 동일한 유형 문자열로 작업을 디스패치하는 경우 해당 리듀서가 실행됩니다. 따라서 함수에 대한 설명 이름을 지정해야 합니다.

* 이 개체는 reducers를 만들기 위해 전달되므로 reducers가 주어진 상태를 안전하게 "변환"할 수 있습니다.

```jsx
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
})
// Will handle the action type `'counter/increment'`
```

```jsx
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
})
// Will handle the action type `'counter/increment'`
```

* 생성된 작업 작성자 사용자 정의
* 콜백 준비를 통해 작업 생성자의 페이로드 값을 생성하도록 사용자 정의해야 하는 경우, 리듀서 인수 객체의 적절한 필드 값은 함수 대신 개체여야 합니다. 이 개체에는 감압기와 준비라는 두 가지 속성이 포함되어야 합니다. reducers 필드의 값은 대소문자 reducers 함수여야 하며, 준비 필드의 값은 콜백 준비 함수여야 합니다.

```jsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import nanoid from 'nanoid'

interface Item {
  id: string
  text: string
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Item[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.push(action.payload)
      },
      prepare: (text: string) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    },
  },
})
```

```jsx
import { createSlice } from '@reduxjs/toolkit'
import nanoid from 'nanoid'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (text) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    },
  },
})
```



## extraReducers

---



* Redux의 주요 개념 중 하나는 각 슬라이스 리듀서가 상태 슬라이스를 "소유"하고 많은 슬라이스 리듀서가 동일한 작업 유형에 독립적으로 반응할 수 있다는 것이다. 
* extraReducers를 사용하면 slice가 생성한 유형 외에 다른 작업 유형에 응답할 수 있습니다.

* 추가 리듀서로 지정된 사례 리듀서는 "외부" 작업을 참조하기 위한 것이므로 슬라이스 작업에서 생성된 작업은 없습니다.

* reducers와 마찬가지로, 이러한 사례 reducers는 reducers를 만들기 위해 전달되며, 상태를 안전하게 "변환"할 수 있다.

* reducers와 extraReducers의 두 필드가 동일한 작업 유형 문자열로 끝나는 경우 reducers의 함수를 사용하여 해당 작업 유형을 처리합니다.



## extraReducers "bilder callback" 표기법

---



* extraReducers를 사용하는 권장 방법은 ActionReducerMapBuilder 인스턴스를 수신하는 콜백을 사용하는 것입니다.

* 또한 이 작성기 표기법은 슬라이스에 매치처 리듀서와 기본 케이스 리듀서를 추가할 수 있는 유일한 방법입니다.

```jsx
import { createAction, createSlice, Action, AnyAction } from '@reduxjs/toolkit'
const incrementBy = createAction<number>('incrementBy')
const decrement = createAction('decrement')

interface RejectedAction extends Action {
  error: Error
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementBy, (state, action) => {
        // action is inferred correctly here if using TS
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(decrement, (state, action) => {})
      // You can match a range of action types
      .addMatcher(
        isRejectedAction,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {}
      )
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  },
})
```

```jsx
import { createAction, createSlice } from '@reduxjs/toolkit'
const incrementBy = createAction('incrementBy')
const decrement = createAction('decrement')

function isRejectedAction(action) {
  return action.type.endsWith('rejected')
}

createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementBy, (state, action) => {
        // action is inferred correctly here if using TS
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(decrement, (state, action) => {})
      // You can match a range of action types
      .addMatcher(
        isRejectedAction,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {}
      )
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  },
})
```

* 제공된 액션 생성자를 기반으로 리듀서의 액션 유형을 정확하게 추론할 수 있으므로 이 API를 사용하는 것이 좋습니다. 따라서, 자바스크립트 사용자도 IDE 자동 완성 기능이 더 우수하기 때문입니다. 이 기능은 createAction 및 asyncThunk를 사용하여 생성된 작업을 수행하는 데 특히 유용합니다.

* builder.addCase,build.addMatcher 및 builder.addDefault를 사용하는 방법에 대한 자세한 내용은 createReducer 참조의 "Builder 콜백 표기법" 섹션을 참조하십시오.

## extraReducers의  "map object" 표기법

---

* reducers와 마찬가지로, 추가 reducers는 환원 케이스 reducers 기능을 포함하는 객체일 수 있습니다. 그러나 키는 다른 Redux 문자열 작업 유형 상수여야 하며 createSlice는 이 매개 변수에 포함된 축소기에 대한 작업 유형 또는 작업 생성자를 자동으로 생성하지 않습니다.

* createAction을 사용하여 생성된 작업 생성자는 계산된 속성 구문을 사용하여 여기서 키로 직접 사용될 수 있습니다.

```jsx
const incrementBy = createAction('incrementBy')

createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {},
  extraReducers: {
    [incrementBy]: (state, action) => {
      return state + action.payload
    },
    'some/other/action': (state, action) => {}
  }
})
```



* 참고: TypeScript를 사용하는 경우 위에 표시된 빌더 콜백 API를 사용하는 것이 좋습니다. 작성기 콜백을 사용하지 않고 TypeScript를 사용하는 경우, TS 컴파일러가 계산 속성을 허용하도록 하려면 actionCreator.type 또는 actionCreator.toString()을 사용해야 합니다. 자세한 내용은 TypeScript 사용을 참조하십시오.

## 반환 값

* createSlice는 다음과 같은 개체를 반환합니다.

```jsx
{
    name : string,
    reducer : ReducerFunction,
    actions : Record<string, ActionCreator>,
    caseReducers: Record<string, CaseReducer>
}
```



* 리듀서 인수에 정의된 각 함수는 createAction을 사용하여 생성된 해당 액션 생성자를 가지며 동일한 함수 이름을 사용하여 결과의 액션 필드에 포함됩니다.

* 생성된 reducers 함수는 "슬라이스 reducers"로서 reducers 결합 함수로 전달하기에 적합합니다.

* 더 큰 코드베이스에서 참조를 쉽게 검색하기 위해 작업 작성자를 해체하고 개별적으로 내보낼 수도 있습니다.

* 참고: 결과 객체는 개념적으로 "Redux duck" 코드 구조와 유사합니다. 사용하는 실제 코드 구조는 사용자의 몫이지만 다음과 같은 몇 가지 주의 사항이 있습니다.

* 작업은 단일 슬라이스로만 제한되지 않습니다. reducers 로직의 모든 부분은 파견된 어떤 동작에도 반응할 수 있고, 또 그래야 한다!).
  동시에 순환 참조로 인해 가져오기 문제가 발생할 수 있습니다. 조각 A와 B가 별도의 파일에 정의되어 있고 각 파일이 다른 작업을 들을 수 있도록 다른 파일을 가져오려고 하면 예기치 않은 동작이 발생할 수 있습니다.



## 예제

---

```jsx
import { createSlice, createAction } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'

const incrementBy = createAction('incrementBy')
const decrementBy = createAction('decrementBy')

const counter = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    multiply: {
      reducer: (state, action) => state * action.payload,
      prepare: (value) => ({ payload: value || 2 }), // fallback if the payload is a falsy value
    },
  },
  // "builder callback API", recommended for TypeScript users
  extraReducers: (builder) => {
    builder.addCase(incrementBy, (state, action) => {
      return state + action.payload
    })
    builder.addCase(decrementBy, (state, action) => {
      return state - action.payload
    })
  },
})

const user = createSlice({
  name: 'user',
  initialState: { name: '', age: 20 },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload // mutate the state all you want with immer
    },
  },
  // "map object API"
  extraReducers: {
    [counter.actions.increment]: (
      state,
      action /* action will be inferred as "any", as the map notation does not contain type information */
    ) => {
      state.age += 1
    },
  },
})

const reducer = combineReducers({
  counter: counter.reducer,
  user: user.reducer,
})

const store = createStore(reducer)

store.dispatch(counter.actions.increment())
// -> { counter: 1, user: {name : '', age: 21} }
store.dispatch(counter.actions.increment())
// -> { counter: 2, user: {name: '', age: 22} }
store.dispatch(counter.actions.multiply(3))
// -> { counter: 6, user: {name: '', age: 22} }
store.dispatch(counter.actions.multiply())
// -> { counter: 12, user: {name: '', age: 22} }
console.log(`${counter.actions.decrement}`)
// -> "counter/decrement"
store.dispatch(user.actions.setUserName('eric'))
// -> { counter: 6, user: { name: 'eric', age: 22} }
```

