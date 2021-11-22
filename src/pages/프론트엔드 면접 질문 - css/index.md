---
path: "/프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - CSS/"
category: "기술 면접"
tags: ["프론트엔드", "개발자", "면접", "기술면접", "CSS"]
title: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - CSS"
date: "2021-04-14T01:00:00.000Z"
summary: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - CSS"
images: ["images/2.jpg"]
---

> 프론트 엔드 면접 질문용 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요





## 1) class와 id

#### (1) id

* 문서내에서 유일
* 단, 여러 번 선언해도 오류가 나거나 렌더링되지 않거나 하지 않음

#### (2) class

* 문서내에서 중복 사용 가능. 
* 문서내에서 중복 사용될 수 있으므로 재사용해야하는 경우 클래스를 주로 사용CSS 프레임워크 및 라이브러리들도 대부분 클래스를 기반으로 작동)

#### (3) 선택자 우선 순위

* CSS는 중복 선언을 허용하며 중복되는 경우 아래와 같은 우선순위로 처리
  * 속성값 뒤에 !important를 붙인 속성
  * HTML에서 style를 지정한 속성
  * #아이디로 지정한 속성
  * .클래스, :추상클래스로 지정한 속성
  * 요소 이름으로 지정한 속성
  * 상속된 속성

* 명시도 계산법 : !important > id[100] > class[10] > tag[1] > *[0]

* 가상 엘리먼트는 모두 무시



## 2) float

*  요소를 떠다니도록 만들어주는 속성
* 이미지와 텍스트가 나란히 있는 상태에서 이미지에 float 속성을 주면 텍스트가 이미지를 감싸는 형태가 됨
* 최신 레이아웃 기술(Flexbox, grid)이 나오기 전에는 주로 레이아웃 배치를 위하여 사용
* 최신 레이아웃 기술의 크로스브라우징 이슈로 인해 여전히 float로 레이아웃 설계를 많이 하고 있음



## 3) 클리어링(Clearing) 기법

* 자식에 float 속성을 주는 경우 자식이 부모 요소의 높이를 인지하지 못하는 문제를 해결

* 부모 > 자식 관계에서 자식에 float가 추가되어있다면 부모에
  * overflow:hidden 설정

  * height 값 설정

  * 요소 아래 clear: both 속성 추가

  * 가상 요소(::after, ::before)를 이용하여 clear: both 속성 추가

  
  

```css
.parent { 
    overflow: hidden; 
} 

.parent::after { 
    content:""; 
    display:block; 
    clear:both; 
} 

.clear { 
    clear:both; 
}

```





## 4) padding과 margin

* padding : border와 content 사이

* margin : border 바깥



## 5) CSS 전처리기의 장점과 단점

* CSS 전처리기를 사용하면 조건문, 반복문과 편리한 유틸 함수를 사용할 수 있으며 CSS를 마치 프로그래밍 하듯이 사용할 수 있음
* 장점 : 반복문과 조건문을 이용하면 긴 코드를 짧게 개발할 수 있으므로 유지보수상 유리
* 단점 : 브라우저가 이해하는 것은 CSS 뿐이므로 CSS로 따로 컴파일을 해주어야 함



## 6) 박스 모델(box model)

* 박스 모델 :  브라우저에 배치하기 위한 규칙

* W3C model과 IE model이 있는데 두 가지 박스 모델은 차이
* W3C 모델은 content 영역이 width에 해당
* IE 모델은 content + padding + border가 포함



## 7) display 속성

* 영역의 성질을 설정하는 속성

#### 1) block

* 100% 영역을 모두 차지, width, height, margin, padding 값 모두 상하좌우 설정 가능

#### 2) inline

* content 크기만큼 차지
* padding 속성은 적용되나 margin의 경우 좌우에만 설정 가능
* 추가적으로 padding 값이 적용이 되지만 실질적으로 크기에 영향을 주는 것은 좌우에만 해당되고 상하는 무시
* width, height 값을 설정할 수 없음

#### 3) inline-block

* iinline의 여러 단점들을 보완하기 위한 속성
* 앞서 inline에서 불가능한 속성들을 모두 설정할 수 있음

#### 4) none

* 영역을 보이지 않게 함



## 8) position 

* 영역의 위치를 설정하는 속성

#### (1) static

* 기본값
* 별도의 변경없이 문서 흐름에 따라 요소들이 배치

#### (2) relative

* 상대적인 위치로 설정
* 현 위치에 원본을 그대로 두고 복제본을 설정
* 주변 요소들은 영향 받지 않음

#### (3) absolute

* 절대적인 위치로 설정
* relative와 다르게 기존 위치에서 벗어나 설정
* 기존 위치에서 벗어나므로 주변 요소들이 영향을 받음

#### (4) fixed

* 브라우저 창을 기준으로 위치를 설정



## 9) flexbox와 grid

* CSS 공식적으로 지원하는 레이아웃과 관련된 속성
* 기존에 여러 trick(트릭)으로 구현한 기능들을 손쉽게 구현할
* ex) 상하좌우 중앙에 위치시키는 기능을 flexbox로 쉽게 구현





## reset CSS / normalize CSS



### 1) Reset.css

* 모든 브라우저의 형태에서 내장스타일을 모두 없애버린 스타일이 0인 상태에서 시작되는 초기화 기법
*  h1, div, em등 각 태그에 적용되는 모든 스타일링을 처음부터 다시 만들어 나가야하는 초기화 기법
* 장점
  * 초기화를 하는 것이기 때문에 지속적인 업데이트가 필요없음
* 단점
  * 각 브라우저마다의 버그를 고치는 것이 아니라서 Reset.css를 만들며 브라우저 마다의 버그 발생
  * 스타일링에 대한 시간이 오래걸림

 

### 2) Nomalize.css

* 모든 브라우저의 스타일링을 동일하게 유지하는 스타일 기법

* 기존의 기본 스타일링은 유지하되 웹 브라우저마다 내장되어 있는 기본스타일의 차이를 없애주는 스타일링

* 장점

  * 기본적으로 내장브라우저의 스타일링 자체가 브라우저의 버그를 손봐준 형태이기 때문에 이를 수정하면서 버그가 발생할 걱정을 덜고 스타일링에 대해서 힘을 덜 들일수 있음

* 단점
  * 내장브라우저의 스타일링을 손봐주며 차이를 없애주는 기법이기 때문에 브라우저 업데이트마다 지속적인 업데이트가 필요

  



## CSS 스프라이트(CSS Sprites)



* 여러 개의 이미지를 하나로 모아 이미지 파일의 요청 횟수를 줄이는 방법
* 3개의 이미지를 하나로 압축하면 용량이 더 커질 것이라고 생각하지만 그렇지 않기에 용량을 줄이는 효과



## 대체 이미지(Image Replacement)



* 이미지 로드가 느리거나 실패했을 때 
* CSS가 정상 적용되지 않았을 때 
* 시각장애인들이 스크린 리더를 통해 이미지에 대한 설명을 들을 수 있도록 하기 위해 
* <img> 태그의 경우 alt 속성을 이용하고 배경으로 이미지가 들어간 경우 배경 이미지에 대한 내용을 html 태그로 표현하고 아래에서 선언한 .blind라는 클래스를 만들어 재사용

```css
.blind {    
    position: absolute;    
    clip: rect(0 0 0 0);    
    width: 1px;    
    height: 1px;    
    margin: -1px;    
    overflow: hidden; 
}
```



## 컨텐츠 숨기기

* display: none : 영역 자체가 없어지면서 화면에 보이지 않음

* visibility: hidden : 영역 자체가 있지만 화면에 보이지 않음

* text-indent, position 등에 음수값 설정
* .blind 클래스



## 컨텐츠 중앙 정렬

| 순번 | 부모                                                         | 자식                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1)   | display: table;                                              | display: table-cell; <br />text-align: center; <br />vertical-align: middle; |
| 2)   | position: relative;                                          | position: absolute; <br />top: 50%; <br />left: 50%; <br />margin-top: -(자식 요소 높이 값의 절반)<br />margin-left: -(자식 요소 너비 값의 절반) |
| 3)   | position: relative;                                          | position: absolute; <br />top:50%; <br />left: 50%; <br />transform: translate(-50%, -50%); |
| 4)   | height: (부모 높이 값); <br />display: flex; <br />justify-content: center; <br />align-items: center; |                                                              |






#### 반응형과 적응형 웹

* 반응형 : 전적으로 클라이언트에서 변화를 처리

* 적응형 : 서버에서 웹에 접근하는 디바이스를 체크하여 디바이스에 최적화된 마크업 호출



## box-sizing: border-box

* 요소가 width를 계산 할 때 어디까지 포함할지 설정하는 속성
* 기본값은 content-box이며 컨텐츠 크기만 고려
* box-sizing: border-box로 설정시 width 값에 border와 padding 값도 포함



### (17) 시맨틱 마크업

* "의미론적" 마크업을 의미
* 관련 태그로 <table>, <header>, <footer>, <address> 등이 있으며 개발자에게 태그를 통해 소스코드의 의미를 간접적으로 전달
* 브라우저는 태그를 통해 웹페이지를 더 쉽게 이해할 수 있게 됨. 

  

* 장점
  * 접근성이 좋아짐
  * SEO에 유리
  * 코드 가독성이 높아짐

 

## 18) 브라우저 접두사

* 최신의 CSS 기술을 구형 브라우저에 사용해야하는 경우 사용

* -webkit- : 구글, 사파리

* -moz- : 파이어폭스

* -ms- : 익스플로러

* -o- : 오페라



## 19) CSS의 단위



#### (1) em

```css
body {    
    font-size: 14px; 
} 

div {
    font-size: 1.2em; // 14px * 1.2 = 16.8px 
}
```

```html
<div> 
    Test (14 * 1.2 = 16.8px)
    <div> 
        Test (16.8 * 1.2 = 20.16px)
        <div>
            Test (20.16 * 1.2 = 24.192px)
        </div>
    </div>
</div>
```

* body 태그에 em 값을 이용해 폰트 사이즈를 지정하면 모든 자식 요소들은 body의 폰트 사이즈에 영향을 받음
* 1.2em은 14px을 기준으로 1.2배의 폰트 사이즈로 표현
* em을 정의한 요소를 중첩 선언시 각각 계산된 font-size에 1.2배를 다시 계산



#### (2) rem(root em)

```css
body {    
    font-size: 14px; 
} 

div {    
    font-size: 1.2rem; 
}
```

```html
<div> 
    Test (14 * 1.2 = 16.8px)
    <div> 
        Test (14 * 1.2 = 16.8px)
        <div>
            Test (14 * 1.2 = 16.8px)
        </div>
    </div>
</div>
```

* 모두 16.8px로 표현

#### (3) vh & vw(vertical height & vertical width)

```css
.vh {    
    height: 100vh; 
} 
.vw {
    width: 100vw; 
}
```

* CSS의 너비 값은 가장 가까운 부모 요소에 상대적인 영향을 받음
* 타겟 요소의 너비값과 높이값을 뷰포트의 너비값과 높이값에 맞게 사용
* vh 요소는 높이값의 100분의 1의 단위

#### (4) vmin & vmax

* vmin :  웹 브라우저 너비와 높이 중에 더 작은 값을 기준으로 하여 100분의 1의 값

* wmax :  웹 브라우저 너비와 높이 중에 더 큰 값을 기준으로 하여 100분의 1의 값



## 20) 크로스 브라우징



*  IE의 경우 Promise 객체가 없어서 폴리필(Pollyfill)을 추가하여 문제를 해결 
* babel과 같은 트랜스파일러가 필요(ES6 코드를 ES5로 변경) 
*  자동화를 위해 webpack과 같은 번들러 도입



## 21 ) CSS 성능

* 이미지에 height, width 속성 값을 설정하여 렌더링 성능을 향상시키고 이미지 로드에 따른 화면 늘어남을 방지

* 애니메이션이 들어간 요소는 position 속성을 fixed나 absolute로 설정하여 성능을 향상

* 최소한의 선택자를 사용하여 CSS를 검색

* 최소한의 마크업

* 이미지 스프라이트 기법을 이용하여 요청 횟수를 줄임

