---
path: '/프론트엔드 면접 질문 - React(1)/'
category: '기술 면접'
tags: ['프론트엔드', '개발자', '면접', '기술면접', 'React']
title: '프론트엔드 면접 질문 - React(1)'
date: '2021-11-01T01:00:00.000Z'
summary: '프론트엔드 면접 질문 - React(1)'
images: ['images/2.jpg']
---

> 프론트 엔드 면접 질문용 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요

# 1. 상태 관리

---

#### (1) 상태 관리

- 여러 컴포넌트 간의 데이터 전달과 이벤트 통신을 한곳에서 관리하는 패턴

#### (2) 리액트의 상태관리?

##### (1) Redux

- 리액트에서 전역의 상태를 관리하기 위해서 사용하는 방법
- 컴포넌트간의 상태들을 한 곳에 모아놓고 공유해서 사용하는 방식

- Redux는 사실 다른 곳에서도 많이 쓰이는 기술이었지만, react-redux라는 것이 있어서 react에서 사용하기 편리
- react-redux 규칙

  - 단일 스토어
  - 읽기 전용 상태 (기존의 객체는 건드리지 않고 새로운 객체를 생성해서 사용)
  - 순수 함수(리듀서는 파라미터 외의 값에는 의존하지 않아야 함)

- reduce 만드는 순서

  - 액션 타입을 정함
  - 액션 생성 함수를 만듦
  - 이 액션들을 사용하는 리듀서 함수(초기상태 포함)를 만듦
  - index.js에서 스토어를 만들어 provider로 스토어를 props로 전달해줌

* 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트
* 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하여, 컨테이너 컴포넌트에서 connect함수를 사용해서 mapStateToProps(스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수),

* mapDispatchToProps(액션 생성 함수를 컴포넌트의 Props로 넘겨주기 위해 사용하는 함수)

```
connect(mapStateToProps, mapDispatchToProps)(타깃컴포넌트)
```

- 리액트의 상태관리
- Context API, Redux, MobX 등의 상태관리가 있으며, Context API보다 Redux를 사용하는 이유는 대규모 개발에서 유지보수성이나 작업효율을 높이기에는 Redux를 사용하는것이 좋기 때문에 많은 사람들이 Redux를 사용

# 2. 클래스 / 함수형

---

#### 1) 함수형 컴포넌트

- 함수형 프로그래밍은 **명령형(imperative)** 이 아닌 **선언형(declarative)** 이며 애플리케이션의 상태는 순수 함수를 통해 전달된다.
- 애플리케이션의 상태가 일반적으로 공유되고 객체의 메서드와 함께 배치 되는 객체 지향 프로그래밍과는 대조된다.

* 함수형은 상태를 저장할 수 없음. 기본적으로 함수는 한번 실행되고 나면 메모리 상에서 사라진다. (가비지 컬렉팅)
* 함수형 컴포넌트는 클래스형 컴포넌트보다 선언하기가 좀 더 편하고, 메모리 자원을 덜 사용한다는 장점
* 함수형 컴포넌트에서만 사용할 수 있는 hooks는 로직을 state와 분리할 수 있게 해주기 때문에 로직을 재사용할 수 있게 해줌
* hooks 는 클로저 원리를 이용해서 state를 저장

```jsx
function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function() {
      console.log(this.name + ': 멍멍!');
    },
  };
}

const blackDog = new Blackdog();
blackDog.bark(); // 검둥이: 멍멍!

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ': 멍멍!');
    },
  };
}

const whiteDog = new Whitedog();
whiteDog.bark(); // 흰둥이: 멍멍!
```

일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킴

##### (1) 장점

- 선언이 간편
- 메모리 자원을 덜 사용
- 프로젝트 빌드 후 배포할 때 결과물의 파일 크기가 더 작음

##### (2) 단점

- state 와 라이프사이클 API 사용이 불가능하나 hook을 사용하여 해결

#### 2) 클래스형 컴포넌트

- 상태를 저장할 수 있고, React Life Cycle Method 를 사용할 수 있음

* render()함수가 필수적으로 있어야 함
* 클래스가 인스턴스를 찍어내면 마치 그 인스턴스는 그 때부터 독자적인 생명체처럼 메모리에 상주하고 있기 때문
* State 와 Action을 분리하기 어렵다는 단점이 있음

##### (1) 장점

- state및 라이프사이클 기능을 사용할 수 있음
- 임의 메서드를 정의할 수 있음

##### (2) 단점

- 서로 연관성 없는 여러 가지 로직을 하나의 생명 주기 컴포넌트에서 작성
  - ex) componentDidMount 메서드에 등록하고 componentWillUnmount에서 해제

* 함수형 컴포넌트보다 선언이 길고 작성해야 하는 부수적으로 코드가 많음
* 클래스 사용 시 코드 압축이 잘 안되고 핫 리로딩이 어렵고 컴파일 단계에서 코드를 최적화하기 어려움
  - 메모리 자원을 좀 더 사용
  - 배포할 때 결과물의 파일 크기가 좀 더 큼

# 3. 라이프사이클

---

![img](https://i.imgur.com/cNfpEph.png)

#### 1) 마운트(mount)

- constructor

* getDerivedStateFromProps
* render
* componentDidMount

#### 2) 업데이트(update)

- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidupdate

#### 3) 언마운트(unmount)

- componentWllUnmount

#### 4) 사용

- mount에서 컴포넌트가 만들어질때 componetDidMount에서 비동기처리 같은것을 주로 함
- shouldComponentUpdate에서 업데이트 직전에 랜더링시(상태가변경)에 조건으로 재랜더링을 하냐마냐 결정을 할 수 있음
- componentDidUpdate 업데이트 직후에 호출되는 메소드
- unmount에서 컴포넌트가 소멸된 시점에 타이머나 비동기 API를 제거 하는 곳

## 5) 리액트 훅

#### 1) 이유

- 컴포넌트에서 상태관련 로직을 사용할 때 레이어 변화 없이 재사용할 수 있게하기 위함

- 기존의 라이프사이클 메서드 기반이 아닌 로직 기반으로 나눌 수 있어서 컴포넌트를 함수 단위로 잘게 쪼갤 수 있다는 이점

#### 2) useState

- 함수형 컴포넌트에서 가변적인 상태를 지닐 수 있게 해줌
- 함수형 컴포넌트에서 상태를 관리해야 할 때 사용
- state는 원시타입 뿐만 아니라 객체로 사용할 수도 있음
- 여러개의 useState를 사용할 수도 있지만 하나의 state에 여러 프로퍼티를 추가해서 두 가지 이상의 상태를 관리할 수도 있음

```javascript
import React, { useState } from 'react';

function Example() {
  // 새로운 state 변수를 선언하고, count라 부름
  // count의 초깃값은 0으로 지정
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

```javascript
import React, { useState } from 'react';
import './styles.css';

export default function App() {
  const [state, setState] = useState({
    name: 'John',
    id: 0,
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>name: {state.name} </h3>
      <h3>id: {state.id} </h3>
      <button onClick={() => setState({ ...state, id: state.id + 1 })}>
        Increase
      </button>
    </div>
  );
}
```

#### 3) useEffect

- 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정
- 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate, componentWillUnmount를 합친 형태
- 함수형 컴포넌트에서 사이드 이펙트(side effect)를 수행(데이터 가져오기, 구독 설정, 수동으로 DOM 조작)
- useEffect는 리액트에서 컴포넌트 렌더링 이후 어떠한 일을 수행해야 하는지 말해줌
- 우리가 넘긴 함수(effect라고 부름)를 기억했다가 DOM 업데이트 이후 불러옴
- 이렇게 컴포넌트 안에서 불러오게 될 경우 effect를 통해 state나 props에 접근할 수 있게 됨
- useEffect는 컴포넌트의 첫 번째 렌더링과 그 이후 모든 업데이트에서 수행
- 만약에 useEffect에 설정한 함수를 매번 업데이트마다 수행시키지 않으려면 어떻게 해야 할까? 업데이트 될 때 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어 주면 됨
- 그리고 만약 특정 값이 업데이트 될 때만 useEffect를 실행하고 싶다면 두 번째 파라미터 배열에 해당 값들을 넣어주면 됨
- 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리 함수(clean-up)를 반환해 주어야 함
- 예를 들면 외부 데이터에 구독(subscription) 설정을 해야 하는 경우 메모리 누수가 발생하지 않도록 clean-up을 해 주어야 함
- 리액트에서 뒷정리를 하는 시점은 컴포넌트가 마운트를 해제하는 시점
- effect는 렌더링이 실행될 때마다 실행되는데, 그렇기 때문에 다음 effect를 실행하기 전에 이전 렌더링에서 파생된 effect를 정리해 주어야 할 필요가 있음

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

```javascript
// 첫 렌더링 때만 useEffect 실행
useEffect(() => {
  console.log('마운트 될 때만 실행');
}, []);
// 특정 값(name)이 바뀔 때만 useEffect 실행
useEffect(() => {
  console.log(`${name}이 바뀔 때만 실행`);
}, [name]);
```

```javascript
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

#### 4) useReducer

- useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용
- (state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 state를 반환
- 하윗값이 복잡한 정적 로직을 만들거나, 다음 state가 이전 state에 의존적인 경우 보통 useState 대신 useReducer를 사용
- 또한 useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 성능을 최적화 할 수 있는데, 이것은 Callback 대신 dispatch를 전달할 수 있기 때문

- useReducer의 첫 번째 파라미터에는 리듀서 함수를 넣고, 두 번째 파라미터에는 해당 리듀서의 기본값을 넣음
- 이 Hook을 사용하면 state값과 dispatch 함수를 받아온다. 여기서 state는 현재 가리키고 있는 상태고, dispatch는 액션을 발생시키는 함수
- dispatch(action)과 같은 형태로 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출되는 구조
- 초기화를 조금 지연할 수도 있는데 init 함수를 세 번째 인자로 전달. 이는 reducer 외부에서 초기 state를 계산하는 로직을 추출할 수 있도록 하고 또한 어떤 행동에 대한 대응으로 나중에 state를 재설정하는 데에도 유용

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

#### useMemo

- 함수형 컴포넌트 내부에서 발생하는 연산을 최적화. 메모이제이션 된 값을 반환
- 의존성이 변경되었을 때만 메모이제이션 된 값을 다시 계산. 모든 렌더링 시 고비용 계산을 방지하게 해줌
- useMemo로 전달된 함수는 렌더링 중에 실행이 되므로 렌더링 중에 하지 않는 작업은 이 함수 내에서 할 수 없음

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

#### useCallback

- 메모이제이션 된 콜백을 반환
- 주로 렌더링 성능을 최적화 해야 하는 상황에서 사용. 이벤트 핸들러 함수를 필요할 때만 생성 가능

- 인라인 콜백과 그것의 의존성 값의 배열을 전달하면 useCallback은 콜백의 메모이제이션된 버전을 반환
- 그 메모이제이션된 버전은 콜백의 의존성이 변경되었을 때만 변경
- 이는 불필요한 렌더링을 방지하기 위해 참조의 동일성에 의존적인 최적화된 자식 컴포넌트에 콜백을 전달할 때 유용
- useMemo와 비슷한 역할을 하고 useCallback은 결국 useMemo로 함수를 반환하는 상황에서 더 편하게 사용할 수 있는 훅
- 숫자, 문자열, 객체 처럼 일반 값을 재사용 : useMemo를 사용, 함수를 재사용 : useCallback을 사용

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

#### useRef

- 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줌
- .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환
- 본질적으로 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 상자와 같음
- 만약 리액트에서 ref 객체를 전달한다면 리액트는 모드가 변경될 때 마다 변경된 DOM 노드에 .current 프로퍼티를 설정할 것

- ref 속성을 사용하는 것보다 useRef() 훅을 사용하는게 더 유용한데, 그 이유는 useRef()가 순수 자바스크립트 객체를 생성하기 때문이다. useRef()와 {current: ...} 객체를 생성하는 것의 차이점은 useRef는 매번 렌더링을 할 때 동일한 ref 객체를 제공한다는 점

- useRef는 내용이 변경될 때 그것을 알려주지는 않음(.current 프로퍼티를 변형하는 것이 리렌더링을 발생시키지는 않기 때문)
- 만약 리액트가 DOM 노드에 ref를 attach 하거나 detach할 때 어떤 코드를 실행하고 싶다면 callback ref를 사용

```javascript
const refContainer = useRef(initialValue);
```

```javascript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

#### useContext

- useContext는 context 객체(React.createContext)를 받아 그 context의 현재 값을 반환
- context의 현재 값은 트리 안에서 이 Hook을 호출하는 컴포넌트의 가장 가까이에 있는 <MyContext.Provider>의 value prop에 의해 결정
- 컴포넌트에서 가장 가까운 <MyContext.Provider>가 갱신되면 useContext는 <MyContext.Provider>에게 전달된 가장 가까운 context value를 사용하여 렌더러를 트리거 한다.상위 컴포넌트에서 React.memo나 shouldComponentUpdate를 사용하더라도 useContext를 사용하고 있는 컴포넌트 자체에서부터 다시 렌더링이 된다. 항상 인자는 context 객체 그 자체여야 함
- useContext를 호출한 컴포넌트는 context 값이 변경되는 항상 리렌더링 된다. 따라서 이 비용이 많이 들면 메모이제이션을 통해 최적화를 할 수도 있음

```javascript
const value = useContext(MyContext);
```
