---
path: "/[리액트 3D] 리액트 + three.js 시작하기/"
category: "리액트 + three.js"
tags: ["react", "three.js", "3D"]
title: "[리액트 3D] 리액트 + three.js 시작하기"
date: "2020-07-31T19:23:00.000Z"
summary: "리액트로 three.js 를 다루어보기 시리즈, 3D 웹페이지를 만들기 위한 포스팅입니다."
images: ["images/1.jpg"]
---

> 리액트로 three.js 를 다루어보기 시리즈, 3D 웹페이지를 만들기 위한 포스팅입니다. 리액트는 전 세계적으로 사랑받는 프레임워크이지만 한국에서 리액트를 사용한, 그리고 three.js를 사용한 포스팅이 많이 없어서 아쉬워서 직접 포스팅해보려고 합니다. 다음 포스팅은 기본적으로 리액트에 대한 지식이 있다는 것을 전제로 시작합니다.



# 1. three.js란

---

자바스크립트로 3D 툴을 다루어 보신 분들은 아시겠지만, 유명한 3D 라이브러리입니다. 흔히 react를 따로 쓰지 않는 경우에는 자바스크립트 CDN방식으로 붙여서 사용하죠. 위키 백과에 있는 three.js의 정의는 다음과 같습니다.



*`three.js란?` : Three.js는 웹 브라우저에서 애니메이션 3차원 컴퓨터 그래픽스를 만들고 표시하기 위해 사용되는 크로스 브라우저 자바스크립트 라이브러리이자 API이다. 소스 코드는 깃허브의 한 저장소에서 호스팅된다.*

# 2. react로 three.js 뼈대 페이지 생성하기

---

리액트로 three.js를 띄워봅시다. 당연히 리액트로 three.js를 사용할 수 있습니다. 

three.js를 사용하기 전에 아무것도 없는 뼈대 페이지를 만들어봅시다. 먼저 리액트 앱, three.js부터 간단히 인스톨 해봅시다.

```bash
# chap1 이름으로 리액트 앱 시작
create-react-app chap1
...
...

# three.js 인스톨
yarn add three
...
...
```

three라는 이름의 라이브러리를 추가하면 기존 three.js를 리액트에서 사용할 수 있습니다.

간단한 빈 뼈대 페이지를 생성해 봅시다

기존의 App에 있는 다른 것은 지우고 다음과 같이 작성해주세요


* chap1/src/app


```javascript
import React from "react";
import * as THREE from "three";

// 로딩이 끝나면 수행할 함수
function init() {
// 여기에 three.js 코드가 추가될 겁니다.
}
function App() {
  // init 함수 시작
  window.onload = init;
  return (
    <div>
      <div id="practice"></div>
    </div>
  );
}

export default App;
```

당연히 웹페이지에는 아무 장면도 뜨지 않습니다. app에서 추가해야만 하는 3D객체의 함수들이 있습니다.


# 3. 3D 객체의 렌더링과 표시
---

| 객체   | 설명                                                       |
| ------ | ---------------------------------------------------------- |
| Plane  | 2차원 사각형                                               |
| Cube   | 3차원 정육면체                                             |
| Sphere | 3차원 구체                                                 |
| Camera | 결과물이 어떻게 보여질 것인지 결정                         |
| Axes   | x,y,z축이 있고, 3차원 공간에서 렌더링되는 위치 확인이 가능 |

