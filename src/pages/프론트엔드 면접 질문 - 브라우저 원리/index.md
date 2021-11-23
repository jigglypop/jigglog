---
path: '/프론트엔드 면접 질문 - 브라우저/'
category: '기술 면접'
tags: ['프론트엔드', '개발자', '면접', '기술면접', '자바스크립트']
title: '프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 프론트엔드'
date: '2021-04-07T01:00:00.000Z'
summary: '프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 프론트엔드 파트 - 브라우저'
images: ['images/2.jpg']
---

> 프론트 엔드 면접 질문, 브라우저용 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요



## 웹 애플리케이션 구동 과정

- `URL Entered`: 사용자가 웹 브라우저에서 사이트 주소를 입력

- `DNS Lookup`: DNS를 이용하여 사이트 주소에 해당되는 Server IP 접근

- `Socket Connection`: Client(브라우저)와 Server 간 접속을 위한 TCP 소켓 연결

- `HTTP Request`: Client 에서 HTTP Header 와 데이터가 서버로 전송

- `Content Download`: 해당 요청이 Server 에 도달하면 사용자가 원하는 문서를 다시 웹 브라우저에 전송

- `Browser Rendering`: 웹 브라우저의 렌더링엔진에서 해당 문서를 다음과 같은 순서로 파싱

<img src="https://yilpe93.github.io/static/7efd177711cd81dd0712e9dd79eaf12c/fcda8/client-server.png" alt="./images/client-server.png" style="zoom:200%;" />

---



## 브라우저의 역할

- 사용자가 선택한 자원(URL)을 서버에 요청하고 받아 화면에 표시

- 주요 브라우저

* Google Chrome - Webkit
* Safari - Webkit
* Mozilla Firefox(Escape) - Gecko
* Microsoft Internet Explorer
* Opera



## 브라우저의 구조

![./images/browser_02.png](https://yilpe93.github.io/static/4ec9d46ea98033d0bf8d5c6966ba0462/0b533/browser_02.png)

#### UI

주소창, 즐겨찾기 등 사용자가 조작 가능한 영역

#### 브라우저 엔진

UI와 렌더링 엔진 동작 제어

#### 렌더링 엔진

요청된 자원을 화면에 표시

#### 네트워킹

HTTP 요청과 같은 네트워크 호출

#### UI 백엔드

OS 사용자 인터페이스 방법을 활용하여 기본적인 위젯을 그림

#### 자바스크립트 인터프리터

자바스크립트를 해석하고 실행

#### 데이터 저장소

Local Storage, Indexed DB, 쿠키 등 브라우저 메모리를 활용하여 저장하는 영역

---

## 렌더링 엔진

렌더링 엔진의 역할은 요청 받은 내용을 브라우저 화면에 표시

| 브라우저 | 렌더링 엔진 |
| :------- | :---------- |
| IE       | Trident     |
| Chrome   | Webkit      |
| Safari   | Webkit      |
| Firefox  | Gecko       |
| Opera    | Presto      |



## 렌더링 주요 동작과정 - Critical Rendering Path

브라우저가 HTML, CSS, Javascript 등의 파일을 변환하여 화면에 픽셀 단위로 나타내기 위해 거쳐야하는 일련의 과정

렌더링 최적화의 과정은 항상 측정을 먼저 하고 최적화를 진행해야 한다.

### Main Flow

![./images/browser_03.png](https://yilpe93.github.io/static/58dd63a5db0e6951536d1f080d54a9a0/fcda8/browser_03.png)

1. DOM Tree 생성
2. CSSOM 생성
3. Render Trre(DOM + CSSOM) 생성
4. Render Tree 배치
5. Render Tree 그리기

![./images/browser_04.png](https://yilpe93.github.io/static/85a66640e7f1d9b94421884d454cad12/fcda8/browser_04.png)



## Parsing과 DOM Tree

#### Parsing

`문서 파싱은 브라우저가 코드를 이해하고 사용할 수 있는 구조로 변환하는 것`

파싱 결과는 보통 문서 구조를 나타내는 `Node Tree` 이다.

파싱은 아래와 같이 두 가지로 구분할 수 있다.

- `어휘 분석(Tokenizing)`: 문서의 자료를 토큰으로 분해하는 과정
- `구문 분석`: 언어의 구문 규칙을 적용하는 과정

![./images/browser_05.png](https://yilpe93.github.io/static/a19d79568197571c6712eb948872fdf5/8e189/browser_05.png)

#### DOM Tree 생성

- HTML의 내용과 속성을 Node로 갖고 각 Node의 관계를 나타내는 트리
- HTML 문서를 구조화 하여 스크립트 또는 프로그래밍 언어에서 접근 가능한 형태로 제공
- `Conversiotn`: 서버에서 HTML문서를 raw bytes(원시 바이트) 형태로 받아와 해당 파일의 인코딩에 따라 문자열 태그로 변환
- `Tokenizing(토큰화)`: 변환된 문자열 태그를 토큰화를 통해 토큰으로 변환
- `Lexing`: 토큰을 다시 각각의 특성과 규칙을 정의한 객체 `Node`로 변환
- `DOM Tree 생성`: HTML마크업은 여러 태그 간의 관계를 나타내기에 DOM은 Tree 구조를 가진다. 따라서, DOM에 포함된 Node 또한 서로 관계를 가지게 된다. Node의 상대적인 관계를 이용하면 하나의 Node를 기준으로 모든 Node에 접근할 수 있다.

DOM 트리는 문서 마크업의 속성과 관계를 포함하지만, 렌더링되어 그려질 때는 CSSOM 이 관여한다.

---

#### CSSOM(CSS Object Model)

- DOM 생성과 마찬가지로 태그들을 토큰화, 토큰을 Node로 변환하여 CSS Object Model로 변환
- Cascading Style Sheets는 Body와 같이 페이지 구조상 상위에 있는 HTML 요소의 스타일이 하위 요소에 상속된다는 의미
- 브라우저가 모든 CSS를 파싱하고 처리할 때까지 페이지가 화면에 그려지지 않는다.

#### Render Tree

- DOM + CSSOM, DOM의 Node에 일치하는 CSSOM 규칙을 찾아 연결 `Attachment`
- 렌더링 트리에는 페이지를 렌더링하는 데 필요한 가시적인 Node만 포함된다. 따라서, 메타 태그나 스크립트 태그 같은 Node 또는 `display : none` 스타일이 지정된 Node 는 제외된다. `visibility : hidden` 스타일이 적용된 Node는 보이지는 않지만 공간을 차지하므로 렌더링 트리에 포함된다.
- Render Tree가 화면에 최종적으로 그려지는 내용이 된다.

#### Render Tree 배치(Layout)

- 브라우저가 화면에 그릴 Node와 해당 Node의 스타일을 계산하여 하나의 그룹으로 묶어서 `Render Tree`를 만드는 것
- Layout은 브라우저가 화면에 그리기 전에 각각의 Node들의 정확한 위치와 크기로 나타내기 위해 계산하는 과정이다. 이때, 모든 상대적인 값(%)은 절대적인 값 (px)로 변환된다.

#### Render tree 그리기

- Rneder Tree의 각 Node를 화면의 픽셀로 나타내는 작업



# 브라우저 동작 과정

- 주소창에 url 입력, 서버에 요청 전송

- 해당 페이지에 존재하는 자원들(text, image) 보냄

- 브라우저의 렌더링 엔진이 자원 해석

  - html 파싱

  - css 파싱

  - 렌더 트리(2개를 연결. 렌더 트리를 통해 문서가 시각적 요소를 포함한 형태로 구성된 상태)

  - 화면에 배치 시작, UI백엔드가 노드를 돌며 형상을 그림 (빠른 브라우저 화면 표시를 위해 배치와 그리는 과정은 페이지 정보를 모두 받고 한번에 진행되지 않음. 자원을 전송받으면 기다리는 동시에 일부분 먼저 진행 후 화면에 표시)



# 브라우저 렌더링 과정

- 렌더링 : HTML,CSS, 자바스크립트 등 개발자가 작성한 문서가 브라우저에서 출력되는 과정

- 브라우저의 렌더링 엔진
  - 크롬 : 블링크(Blink),
  - 사파리 : 웹킷(Webkit)
  - 파이어폭스 : 게코(Gecko)

## 1) DOM 트리 생성

![img](https://miro.medium.com/max/875/0*rkjgCl-RSVTvRGgS)

- HTML 코드가 DOM 트리로 변환되는 과정

  - 변환 : 브라우저가 HTML의 원시 바이트를 읽어와서, HTML에 정의된 인코딩(예: UTF-8)에 따라 개별 문자로 변환
  - 토큰화 : 브라우저가 문자열을 W3C 표준에 지정된 고유 토큰으로 변환
  - 렉싱 : 방출된 토큰은 해당 속성 및 규칙을 정의하는 객체로 변환
  - DOM 생성 : 마지막으로 HTML 마크업에 정의된 여러 태그 간의 관계를 해석해서 트리 구조로 연결

- 브라우저는 HTML 마크업을 처리 할 때 마다 위의 모든 단계를 수행

## 2) CSSOM 트리 생성

- HTML 마크업 내에 직접(inline) 스타일을 선언할 수도 있지만, head 태그에 외부(external) css 파일을 참조하거나, head 태그에 style 태그(internal)를 정의할 수 있음
- HTML과 마찬가지로 외부(external) css 파일에 정의된 스타일과 style 태그에 작성된 스타일을 브라우저가 이해하고 처리할 수 있는 형식으로 변환

- DOM 트리를 생성하는 과정과 동일한 과정으로 CSSOM 트리를 생성

![img](https://miro.medium.com/max/875/0*wO7ezCeTdpHyhgWm)

- 이런 과정을 거쳐서 마지막으로 CSSOM(CSS Object Model)이라는 트리 구조가 생성

![img](https://miro.medium.com/max/728/0*SMOVnyZjS0-Tp-pp)

## 3) 렌더링 트리(Rendering Tree) 생성

- DOM 트리와 CSSOM 트리가 만들어지면, 이 둘을 결합해서 렌더링 트리를 생성
- 렌더링 트리에는 페이지를 렌더링 하는데 필요한 노드만 포함

![img](https://miro.medium.com/max/875/0*9Xbmy7JUOcRxn2Vh)

## 3) 레이아웃(Layout) 단계

- 뷰포트 내에서 각 요소의 정확한 위치와 크기를 정확하게 캡처하는 Box 모델이 출력
- 모든 상대적인 측정값은 화면에서 절대적인 픽셀로 변환

![img](https://miro.medium.com/max/770/0*1ZVisC80ge0AllX4)

## 4) 페인팅 단계

- 페인팅(래스터화) : 이미 레이아웃 단계에서 각 노드들이 위치, 크기, 색상 등 스타일이 모두 계산이 되었기 때문에 화면에 실제 픽셀로 변환
  - 렌더링 트리의 각 노드를 화면의 실제 픽셀로 변환
  - 레이아웃 단계에서 모든 계산이 완료가 되면 화면에 요소들을 그림



# 리플로우(Reflow), 리페인트(Repaint)

### 1) 리플로우(Reflow)

- 사용자가 웹 페이지에 처음 접속을 하면 렌더링 과정을 거쳐서 화면에 모든 요소가 그려지게 됨
- 이후에 사용자는 다양한 액션을 수행하게 되고, 여기서 발생되는 이벤트로 인해서 새로운 HTML 요소가 추가되거나, 기존 요소의 스타일이 바뀌거나 하는 변경이 일어나게 됨
- 이런 변경을 통해 영향을 받게되는 모든 노드에 대해서 렌더링 트리 생성과 레이아웃 과정을 다시 수행하게 됨

### 2) 리페인트(Repaint)

- 리플로우는 단지 변경사항을 반영하기 위해서 렌더링 트리를 생성하고 레이아웃 과정을 다시 수행하는 것이고, 실제 이 결과를 화면에 그려지기 위해서는 다시 페인팅 단계를 수행

- 기존 요소에 변경 사항이 생겼다고 해서 항상 리플로우(Reflow)-리페인트(Repaint)가 일어나는 것은 아니고, 레이아웃에 영향이 미치지 않는 단순한 색상 변경 같은 변경사항은 리플로우(Reflow) 수행 없이 바로 리페인트(Repaint)만 수행
- 리플로우가 일어나면 반드시 리페인트가 일어남

### 3) 리플로우(Reflow)가 일어나는 대표적인 속성

- position, width, height, margin, padding, border, border-width, font-size, font-weight, line-height, text-align, overflow

### 4) 리페인트(Repaint)가 일어나는 대표적인 속성

- background, color, text-decoration, border-style, border-radius





# 성능 개선

<img src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fuser-images.githubusercontent.com%2F35218826%2F59728733-36851b80-9276-11e9-8ba8-a9e1997f251a.png&blockId=42c29c31-faea-42af-bd44-3cd8cfa8281a" alt="img" style="zoom:100%;" />



- 현대의 브라우저는 앞선 로드 이벤트와 상관 없이 DOM 생성을 최대한 빨리하고 블로킹을 일으키는 복잡한 스크립트 로직은 비동기적으로 처리
- 사용자 기준 성능 측정 도구

  - FP(First Paint) : 처음 뭔가 그리기 시작
  - FCP(First Contentful Paint) : 텍스트나 이미지 그리기 시작
  - FMP(First Meaningful Paint) : 의미 있는 데이터 그리기 시작
  - TTI(Time to Interactive) : 사용자가 행동을 취할수 있는 시점

![img](https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fuser-images.githubusercontent.com%2F35218826%2F59728736-36851b80-9276-11e9-854d-bf1f2e0992f4.png&blockId=634db91e-7d3b-484f-b929-a69ce6e90238)

![img](https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fuser-images.githubusercontent.com%2F35218826%2F59728735-36851b80-9276-11e9-8a3d-ed60eaec2d1d.png&blockId=6c7ba98d-fef5-46ef-a225-4991e4429c45)

• 같은 혹은 더 빠른 DOMContentLoaded, load 이벤트 시점이라도 사용자는 위에서처럼 점차적으로 보이는 화면을 더 빠르다고 판단

## 2) 성능 개선 지표

- DOMContentLoaded나 Load 이벤트의 시점이 빠름
- DOMContentLoaded와 Load 이벤트 사이의 시간이 짧음

• 같은 혹은 더 빠른 DOMContentLoaded, load 이벤트 시점이라도 사용자는 위에서처럼 점차적으로 보이는 화면을 더 빠르다고 판단



# 점진적 향상 기법과 번들 분리 전략

- 점진적 향상 : 가능한 많은 사용자에게 필수 콘텐츠와 기능을 제공하기 위한 설계 철학
- 기능 실행이 되는 최신 브라우저 사용자에게는 더 나은 최상의 경험을 제공
- 일단 코어 기능들 부터 만든 후에 구형 브라우저에서도 빠르게 동작은 되도록 한다.
- 그후 추가 기능은 최신 브라우저 대상으로 개발되며 더 빠르고 더 좋은 사용자 경험을 만들도록 한다.
- 핵심 기능과 세부 기능이 분리가 잘 되어 있다면 번들도 두 가지로 만들어서 구형 브라우저와 최신 브라우저에게 선별적으로 제공하는 전략도 가능

- 최신 브라우저에 babel 로 변환 안된 번들을 분별해서 전달 : babel은 최신 브라우저의 API 도 구형 코드로 변환하기 때문에 변환전 코드를 쓰는 최신 브라우저의 동작이 구형으로 변환된 코드에서는 조금 더 느리게 동작

### 프레임워크와 라이브러리 평가

* 모든 프로젝트에 프레임워크와 SPA 라이브러리가 필요로 되는 건 아니고 한번 선택되면 바꾸기 어렵기 때문에 선택을 신중히
*  접근성, 안정성, 프로젝트 적합도, 러닝커브, Document, 관련 생태계 등 많은 고려 할 점이 있음

SPA 라이브러리 같은 경우에는 SSR 이나 Pre-rendering 지원되는지 알아보면 좋다. SEO나 FCP, TTI 향상을 위해서 다양한 렌더 방법이 고려 될 수 있는데 내가 선택한 라이브러리가 이를 지원 하지 않는다면 애초에 성능 개선을 위한 렌더 방법 선택을 못할 수도 있다.

### GraphQL

 바닥부터 시작하는 프로젝트라면 한번의 호출로 원하는 데이터를 쏙쏙 빼올 수 있는 GraphQL 도 매력적인 선택이다. GraphQL은 최소한의 요청으로 최적의 최소 데이터를 가져오기 때문에 성능 개선을 위한 강력한 무기가 될 수 있다.

## 데이터 로드 최적화

### 공통

- 파일을 불러오는 도메인은 다르게 하는게 좋다.
- http2 기준 에서는 상관없지만 http1.1 기준으로 최신브라우저는 도메인당 6개의 접속만 허용 한다.
- 한번에 가져올 수 있는 제약이 있기 때문에 데이터 로드 시 병목이 생길 가능성이 높다.
- 별도 도메인을 쓰거나 CDN을 써서 도메인을 여러개로 만들면 해결 할 수 있다.



- 네트워크 요청은 되도록 최소화 하는게 좋다.
- 데이터 크기가 작더라도 http가 연결되면서 보안 인증 등 때문에 부수적인 네트워크 시간이 소요된다.
- 한번의 요청으로 필요한 대부분의 데이터를 가져오면 좋다.

* Service Worker 를 이용하면 JS 코드나 스태틱 리소스들을 브라우저 내부에 캐싱해서 오프라인 상황에서도 쓸수 있게 한다.
* 오프라인에 쓸수 있는 장점도 있지만 온라인 상황에서도 주요 코드들이 캐싱 되어 있기 때문에 다시 리소스를 호출하지 않고 그대로 이용하고 성능 개선을 할 수 있다.

### JS

- 로드시 블로킹 방지 : script 로드를 위한 script 태그는 DOM 생성 블로킹을 일으킬 수 있기 때문에 HTML 최하단에 배치 되어야 하며 비동기적인 로드를 위해서 async defer 속성 사용도 고려

- 로드 사이즈 줄이기
  - Bundling : 대부분 Webpack, Parcel 같은 번들러가 제공하는 기능을 이용해서 파일 사이즈 줄이기
  - 번들러를 이용해서 하나의 번들로 만들면 되면 한번의 호출로 여러 자바스크립트 파일을 사용 가능
  - minify 기능을 이용하면 자바스크립트를 공백을 최소화해서 코드 라인수를 줄이게 됨
  - 트리 쉐이킹 기능을 이용하면 쓰지 않는 코드는 번들에 추가하지 않음.
- 모듈 임포트시 default 사용 : 전자의 경우 모듈 전부를 다 가져오지만 후자의 경우 트리 쉐이킹 기능을 사용하면 필요한 메서드들 만 번들링 되어서 번들 크기를 많이 줄일 수 있음

```javascript
// 모든 배열 유틸리티들을 가져온다.
import arrayUtils from 'array-utils';
// bad // 유틸의 일부만 가져온다.

import { unique, implode, explode } from 'array-utils';
// good
```

• Import On Interaction 패턴 : 초기 로드하는 JS 파일 크기 를 줄이기 위해서 Import On Interaction 패턴을 사용 가능. 사용자가 특정 동작을 했을 시에 해당 쪼개진 필요한 JS 파일을 LazyLoad 하고 실행. 특정 동작 에는 스크롤 이벤트, 라우팅, 클릭 등 다양한 상황이 해당 될 수 있음. ES6에서 제공하는 모듈 기능을 이용해서 Code Splitting 방법을 씀. SPA 라이브러리 내부에서 기능적으로 제공하는 경우도 많음

### CSS

#### 로드시 블로킹 대응

- CSS는 렌더링 차단 리소스

- DOM은 CSSOM이 있어야 렌더 트리가 구상되기 때문에 CSS는 항상 html 최상단 head 태그에 배치

```html
<head>
  <link href="style.css" rel="stylesheet" />
</head>
```

- 특정 조건에서만 필요한 CSS가 있을 때 미디어 쿼리를 사용하면 불필요한 블로킹을 방지 가능

```html
<link href="style.css" rel="stylesheet" />
<link href="print.css" rel="stylesheet" media="print" />
<link href="portrait.css" rel="stylesheet" media="orientation:portrait" />
```

## HTML

- 외부 스타일시트를 가져올 때 사용하는 @import 사용 자제

```javascript
/* foo.css */
@import url("bar.css")
CSS
```

### 이미지

- WebP 사용 : 평균 20 30 프로 정도 크기 감소. 구버전 브라우저 주의

![img](https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31928836-6a1f-4cbb-bb9c-766a5467b26c%2FUntitled.png&blockId=13de0c25-855d-40ca-836a-59b023b8f824)

- 이미지 스프라이트 : 여러 개 이미지를 하나로 만들고, CSS의 background-position 속성을 사용해 부분 이미지를 사용하는 방법
  - 이미지와 같은 아이콘들을 8번 호출해서 가져 오는게 아니라 한번 호출해서 잘라서 사용하면 호출 횟수를 줄일 수 있음

![img](https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb7dd2602-b45e-4967-b7d1-d4d02c7e4f0c%2FUntitled.png&blockId=b6462951-f7de-4ce2-95d5-d52102f7aba8)

- Base64 대체 : 웹 페이지에서 사용하는 아이콘 이미지 개수가 적은 경우, 다운로드한 이미지를 사용하는 대신 이미지를 Base64로 변환해서 HTML, CSS에 포함해 사용할 수 있음 (캐싱 불가)

.btn{background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAAXNSR0IArs4c6QAAAHBJREFUKBVjYBimICwsLAaEsXmPGV0QqnAeUNxfW1v7/tWrVy8hq0HRgKQ4CahoIxDPQ9cE14CseNWqVUtAJoMUo2tiBFkXGRmp9/fv3zNAZhJIMUgMBmAGMTMzmyxfvhzhPJAmmCJ0Gp8cutqhwAcASWgwk+79LiQAAAAASUVORK5CYII=') no-repeat 0 0;}

CSS

- 레이지 로드 이용 : Html의 loading 옵션을 이용하거나 Intersection Observer를 활용해서 적시에 이미지를 로드하도록 해서 초기 데이터 비용 감소
