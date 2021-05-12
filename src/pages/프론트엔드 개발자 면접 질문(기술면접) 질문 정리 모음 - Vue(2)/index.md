---
path: "/프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Vue(2)/"
category: "기술 면접"
tags: ["프론트엔드", "개발자", "면접", "기술면접", "Vue"]
title: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Vue(2)"
date: "2021-05-06T01:00:00.000Z"
summary: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Vue(2)"
images: ["images/2.jpg"]
---

> 프론트 엔드 면접 질문용(Vue) 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요



## 플러그인

---



#### 1) 개요

* 일반적으로 전역 수준 기능을 Vue 어플리케이션에 추가

* 전역 메소드 또는 속성 추가(`<vue-custom-element>`)

* 하나 이상의 글로벌 에셋 추가(지시자, 필터, 트랜지션)

* 전역 믹스인으로 컴포넌트 옵션(vuex)

* `Vue.prototype`를 이용해 Vue에 인스턴스 메소드를 추가
* 위의 기능과 함께 자체 API를 제공하는 라이브러리(vue-router)



#### 2) 플러그인을 만드는 방법

*  `install` 메소드를 정의. 이 메소드는 첫 번째 인자로 Vue 생성자와 외부에서 설정 가능한 옵션을 파라미터로 전달받음

```javascript
MyPlugin.install = function (Vue, options) {
  Vue.myGlobalMethod = function () {
  }
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
    }
    ...
  })
  Vue.mixin({
    created: function () {
    }
    ...
  })
  Vue.prototype.$myMethod = function (methodOptions) {
  	...
  }
}
```



#### 3) 사용법

* `Vue.use()` 전역 메소드를 호출하여 플러그인을 사용
* 이 함수는 생성자 `new Vue()`로 Vue 인스턴스를 생성하기 전에 호출

```javascript
Vue.use(MyPlugin)

new Vue({
  //... options
})
```



## 믹스인

---

#### 1) 개요

* Vue 컴포넌트에 재사용 가능한 기능을 배포하는 유연한 방법
* 믹스인에 존재하는 기능들은 호출된 컴포넌트의 기능들과 합쳐짐

*  모든 구성 요소 옵션을 포함 가능
* 배열 형태로 사용 가능

```javascript
const myMixin = {
  created(){
    console.log("Welcome to Mixins!")
  }
}
var app = new Vue({
  el: '#root',
  mixins: [myMixin]
})
```



#### 2) 전역 믹스인

* Vue 어플리케이션의 모든 컴포넌트에 동일한 옵션이나 기능을 확장해 사용할 필요가 있을 때 사용
* 모든 단일 Vue 인스턴스에 영향을 주기 때문에 적게 이용하고 신중하게 사용

```javascript
// 다음 전역 믹스인은 해당 Vue 인스턴스에서 각 컴포넌트가 생성될 때마다 `created` 훅에서 로그를 발생
Vue.mixin({
   created(){
     console.log("Write global mixins")
   }
})

new Vue({
  el: '#app'
})
```

#### 3) CLI 환경에서 믹스인을 사용하는 법

* Vue CLI를 사용한다면, 믹스인은 일반적으로 `/src/mixins` 디렉토리에서 `.js`파일로 작성
* `export` 키워드로 외부에 내보낸다는 것을 선언해야 하며 사용할 Vue 컴포넌트에서 `import` 키워드로 불러올 수 있음



#### 4) 믹스인의 옵션과 컴포넌트의 옵션의 충돌

* 믹스인과 컴포넌트에서 충돌하는 옵션이 있다면, 옵션은 몇 가지 방법을 통해 충돌하는 옵션을 병합

* data : 재귀적으로 병합하되, 충돌되는 속성은 컴포넌트의 데이터가 우선적

```javascript
var mixin = {
  data: function () {
    return {
      message: 'Hello, this is a Mixin'
    }
  }
 }
new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'Hello, this is a Component'
    }
  },
  created: function () {
    console.log(this.$data); // => { message: "Hello, this is a Component'" }
  }
})
```

* 라이프사이클 훅 : 믹스인 함수가 먼저 실행되고, 그 다음에 컴포넌트의 함수가 실행

```javascript
const myMixin = {
  created(){
    console.log("Called from Mixin")
  }
}

new Vue({
  el: '#root',
  mixins:[myMixin],
  created(){
    console.log("Called from Component")
  }
})

//Called from Mixin
//Called from Component
```

* methods, components, directives : 재귀적으로 병합하되, 이러한 객체에 충돌하는 키가 있을 경우 컴포넌트의 옵션이 우선순위

```javascript
var mixin = {
  methods: {
    firstName: function () {
      console.log('John')
    },
    contact: function () {
      console.log('+65 99898987')
    }
  }
}
var vm = new Vue({
  mixins: [mixin],
  methods: {
    lastName: function () {
      console.log('Murray')
    },
    contact: function () {
      console.log('+91 893839389')
    }
  }
})
vm.firstName() // "John"
vm.lastName() // "Murray"
vm.contact() // "+91 893839389"
```



#### 3) 믹스인의 병합 방법 사용자 정의

* Vue에서는 사용자 지정 옵션을 병합할 때 기본적으로 기존 값을 덮어는 방법을 이용합니다. 
* 만약 사용자 정의의 로직을 사용해 커스텀 옵션을 병합하려면,`Vue.config.optionMergeStrategies`에 함수를 추가할 필요가 있습니다.

```javascript
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  // return mergedVal
}
```

더 고급 예제는 Vuex의 1.x 병합 전략에서 확인하실 수 있습니다.

```
const merge = Vue.config.optionMergeStrategies.computed
Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
  if (!toVal) return fromVal
  if (!fromVal) return toVal
  return {
    getters: merge(toVal.getters, fromVal.getters),
    state: merge(toVal.state, fromVal.state),
    actions: merge(toVal.actions, fromVal.actions)
  }
}
```



## 사용자 정의 지시자(Custom directive)

#### 1) 개요

* DOM 엘리먼트에 부착할 수 있는 명령어
*  `v-`로 시작하는 문법을 사용해 Vue가 이 명령어를 인식할 수 있도록 해야함
* 하위 수준의 DOM을 제어하기 위해 직접 접근해야 할 필요가 있을 때

```javascript
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

//
<input v-focus>
```

#### 2) 지시자 지역 등록

* directives 옵션 사용

```javascript
directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
  }
}

<input v-focus>
```



#### 3) 지시자의 라이프 사이클 훅

* 지시자 객체가 등록될 때 몇 개의 라이프 사이클 훅을 제공

1. `bind`: 지시자가 처음 엘리먼트에 부착될 때 한 번 호출
2. `inserted`: 지시자가 부착된 엘리먼트가 DOM에 삽입되었을 때 호출
3. `update`: 해당 엘리먼트가 업데이트 될 때 호출됩니다. 하지만 아직 하위 엘리먼트는 업데이트 되지 않은 상태
4. `componentUpdated`: 하위 컴포넌트까지 업데이트 된 상태일 때 호출
5. `unbind`: 지시자가 엘리먼트에서부터 삭제될 때 호출

**Note:** 위의 훅에서는 특정한 전달인자(Argument)를 받는다.

1. ### 디렉티브 훅의 전달인자는?

   모든 훅에서는 전달인자로 `el`, `binding`와 `vnode`를 갖고 있습니다. 그와 함께, **update**와 **componentUpdated**훅에서는 새 값과 이전 값을 비교하기 위해 `oldVnode`를 추가적으로 갖고 있습니다.

   1. `el`: 해당 지시자가 부착된 엘리먼트로, 이를 이용해 DOM을 조작할 수 있습니다.

   2. ```
      binding
      ```

      : 아래의 속성을 가진 객체입니다.

      1. `name`: 지시자의 이름으로, `v-` 접두사가 제거된 이름입니다.
      2. `value`: 지시자에서 전달 받은 값입니다. 만약 `v-my-directive="1 + 1"`라면 `2`가 됩니다.
      3. `oldValue`: 이전 값으로, `update`와 `componentUpdated`훅에서만 사용할 수 있습니다. 이를 통해 값이 변경되었는지 아닌지를 확인할 수 있습니다.
      4. `expression`: 문자열로 바인딩된 표현식입니다. 만약 `v-my-directive="1 + 1"`라면 `"1 + 1"`이 됩니다..
      5. `arg`: 지시자의 전달인자입니다. 만약 `v-my-directive:foo`라면 `"foo"`가 됩니다..
      6. `modifiers`: 수식어가 포함된 객체입니다. 만약 `v-my-directive.foo.bar`라면 `{ foo: true, bar: true }`가 됩니다.

   3. `vnode`: Vue의 컴파일러에 의해 생성된 가상 노드입니다.

   4. `oldVnode`: 이 전의 가상 노드로, `update`와 `componentUpdated`훅에서만 사용할 수 있습니다.

   [![custom-directives](https://github.com/sudheerj/vuejs-interview-questions/raw/master/images/custom-directives.svg)](https://github.com/sudheerj/vuejs-interview-questions/blob/master/images/custom-directives.svg)

2. ### 지시자에 여러 값들을 전달하는 방법은?

   지시자는 유효한 자바스크립트 표현식은 모두 수용할 수 있습니다. 따라서 지사자에 여러 값들을 전달하려면, 자바스크립트 객체 리터럴을 이용해 전달할 수 있습니다.

   ```
   <div v-avatar="{ width: 500, height: 400, url: 'path/logo', text: 'Iron Man' }"></div>
   ```

   이제 `v-avatar` 지시자를 전역으로 설정해봅시다.

   ```
   Vue.directive('avatar', function (el, binding) {
     console.log(binding.value.width) // 500
     console.log(binding.value.height)  // 400
     console.log(binding.value.url) // path/logo
     console.log(binding.value.text)  // "Iron Man"
   })
   ```

3. ### 지시자 훅에서 함수 약어는?

   드문 경우지만, 다른 훅과는 상관없이 `bind`나 `update` 훅에서 같은 동작을 하기 원할 수 있습니다. 이 경우에는 함수 약어를 사용할 수 있습니다.

   ```
   Vue.directive('theme-switcher', function (el, binding) {
     el.style.backgroundColor = binding.value
   })
   ```

4. ### render 함수를 사용하는 이유는?

   일반적인 경우 Vue의 템플릿을 이용해 HTML을 작성하는 것을 권장합니다. 하지만 `input`이나 `slot`의 값을 이용해 동적인 컴포넌트를 생성하는 것처럼, 일부 특별한 경우에는 JavaScript가 필요한 경우가 있습니다. 이때 `render` 함수를 사용하며, `render`함수는 JavaScript로 작성하기 때문에 프로그래밍 환경을 온전히 이용할 수 있다는 장점이 있습니다.

5. ### render 함수란?

   `render` 함수는 `createElement`라는 함수를 첫 번째 인자로 받아 가상 노드를 생성하는 함수입니다. 내부적으로 Vue의 템플릿은 빌드 타임에서 `render` 함수를 이용해 컴파일하고 있습니다. 그러므로 템플릿은 `render` 함수를 문법적으로 보기 쉽게 만들어 놓은 것에 가깝습니다.

   ```
   <template>
    <div :class="{'is-rounded': isRounded}">
      <p>Welcome to Vue render functions</p>
    </div>
   </template>
   ```

   위의 템플릿을 `render` 함수로 작성하면 아래와 같습니다.

   ```
   render: function (createElement) {
      return createElement('div', {
        'class': {
            'is-rounded': this.isRounded
        }
      }, [
        createElement('p', 'Welcome to Vue render functions')
      ]);
     },
   ```

6. ### createElement 함수란?

   `createElement` 함수는 몇 가지의 약속된 전달인자를 받는데, 이를 이용해 템플릿에서 사용되는 기능을 JavaScript 코드로 작성할 수 있습니다.

   ```javascript
   createElement(
     'div',
     {
         attrs: {
           id: 'someId'
         },
         props: {
           myProp: 'somePropValue'
         },
         domProps: {
           innerHTML: 'This is some text'
         },
         on: {
             click: this.clickHandler
           },
          style: {
             color: 'red',
             fontSize: '14px'
          },
           class: {
              classsName1: true,
              classsName2: false
           },
     },
   
     [
       'Learn about createElement arguments.',
       createElement('h1', 'Headline as a child virtual node'),
       createElement(MyComponent, {
         props: {
           someProp: 'This is a prop value'
         }
       })
     ]
   )
   ```

   

### 가상 노드를 여러 번 사용할 수 있는 방법은?

컴포넌트 트리의 모든 가상 노드(VNodes)는 고유해야 합니다. 즉, 직접 가상 노드를 여러 번 사용할 수는 없습니다. 만약 같은 엘리먼트나 컴포넌트를 여러 번 반복해서 사용해야 한다면, 팩토리 패턴을 이용해 작성해야 합니다.

아래의 `render` 함수는 `h1` 엘리먼트를 세 번 반복하려 했기 때문에 유효하지 않습니다.

```
render: function (createElement) {
  var myHeadingVNode = createElement('h1', 'This is a Virtual Node')
  return createElement('div', [
    myHeadingVNode, myHeadingVNode, myHeadingVNode
  ])
}
```

팩토리 패턴을 이용하면 됩니다.

```
render: function (createElement) {
  return createElement('div',
    Array.apply(null, { length: 3 }).map(function () {
      return createElement('h1', 'This is a Virtual Node')
    })
  )
}
```

1. ### render 함수와 템플릿을 비교한다면?

   Vue에서 HTML을 작성하는데 사용되는 템플릿과 render 함수를 비교해봅시다.

   | 템플릿(Templates)                                            | 렌더 함수(Render function)                                   |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | `v-if`와 `v-for`를 이용해 조건문/반복문 실행                 | JavaScript의 `if else`문과 `map` 메소드로 조건문/반복문 실행 |
   | `v-model`로 양방향 바인딩                                    | 바인딩과 이벤트를 직접 설정                                  |
   | Capture 이벤트 수식어는 `.passive`, `.capture`, `.once,` `.capture.once`, `.once.capture` | &, !, ~, ~!                                                  |
   | 이벤트 수식어와 키 수식어: `.stop`, `.prevent`, `.self`, keys(`.enter`, `.13`) and Modifiers Keys(`.ctrl`, `.alt`, `.shift`, `.meta`) | JavaScript로 해결, `event.stopPropagation()`, `event.preventDefault()`, `if (event.target !== event.currentTarget) return`, `if (event.keyCode !== 13) return`, `if (!event.ctrlKey) return` |
   | 슬롯 속성 활용                                               | 렌더 함수의 `this.$slots`와 `this.$scopedSlots` 활용         |



## 컴포넌트(Functional component)

---

#### 1) 함수형 컴포넌트

* context를 통해 전달받은 정보로만 생성되는 간단한 컴포넌트

* 상태 없음(Stateless): data 가 없음

* 인스턴스 없음(Instanceless):  this가 없음

* functional: true속성을 이용해 컴포넌트를 함수형으로 작성.

```javascript
Vue.component('my-component', {
  functional: true,
  props: {
    // ...
  },
  render: function (createElement, context) {
    // ...
  }
})
```

#### 2) 동적 컴포넌트

* <component> 태그에서 v-bind:is로 바인딩된 컴포넌트를 동적으로 전환

```javascript
new Vue({
  el: '#app',
  data: {
    currentPage: 'home'
  },
  components: {
    home: {
      template: "<p>Home</p>"
    },
    about: {
      template: "<p>About</p>"
    },
    contact: {
      template: "<p>Contact</p>"
    }
  }
})
```

```html
<div id="app">
   <component v-bind:is="currentPage">
   </component>
</div>
```



#### 3) keep-alive 태그

* 컴포넌트의 상태를 보존해서 재 렌더링을 막아주는 추상 컴포넌트입니다. 
* 만약 동적인 컴포넌트를 `<keep-alive>` 태그로 감싼다면, 컴포넌트 인스턴스를 없애지 않고 메모리에 유지해 보존합니다.
* DOM에 렌더링 되지 않음

```html
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

만약 조건문이 있다면, 해당 조건의 하위 컴포넌트만 렌더링됩니다.

```html
<keep-alive>
  <comp-a v-if="a > 1"></comp-a>
  <comp-b v-else></comp-b>
</keep-alive>
```



#### 4) 비동기 컴포넌트(Async component)

* 대규모 응용 프로그램에서는 응용 프로그램을 더 작은 덩어리로 나누고 실제로 필요할 때만 서버에서 컴포넌트를 로드해야 할 수도 있습니다. 
* Vue를 사용하면 컴포넌트 정의를 비동기식으로 해결하는 팩토리 함수로 컴포넌트를 정의 할 수 있습니다.

```javascript
Vue.component('async-webpack-example', function (resolve, reject) {
  // Webpack automatically split your built code into bundles which are loaded over Ajax requests.
  require(['./my-async-component'], resolve)
})
```

Vue는 Vue는 컴포넌트가 렌더링되어야 할 때만 팩토리 함수를 실행시키고, 이후의 나중에 있을 리렌더링을 위해 결과를 캐시합니다.



#### 5) 비동기 컴포넌트 팩토리 패턴

* 비동기 컴포넌트 팩토리는 다음 형태의 객체를 반환.

```javascript
const AsyncComponent = () => ({
  component: import('./MyComponent.vue'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})
```

#### 6) 인라인 템플릿(inline templates)

* 하위 컴포넌트에 `inline-template` 속성이 존재할 때, 컴포넌트는 내부 컨텐츠를 템플릿으로 사용
*  `inline-template`은 템플릿의 범위를 추론하기 어렵게 만듦
*  `template` 옵션을 사용하거나 `.vue` 파일의 `template` 엘리먼트를 사용하여 컴포넌트 내부에 템플릿을 정의

```html
<my-component inline-template>
   <div>
       <h1>Inline templates</p>
       <p>Treated as component component owne content</p>
   </div>
</my-component>
```

#### 7) X-Templates이란?

* 템플릿를 정의하는 또 다른 방법은 `text/x-template` 유형의 스크립트 엘리먼트 내부의 ID로 템플릿을 참조하는 것

```html
<script type="text/x-template" id="script-template">
  <p>Welcome to X-Template feature</p>
</script>
```

```javascript
Vue.component('x-template-example', {
  template: '#script-template'
})
```



#### 8) 재귀 컴포넌트(recursive components)

* 컴포넌트는 자신의 템플릿에서 자기 자신을 재귀적으로 호출 가능
* 재귀 컴포넌트는 블로그의 덧글이나 메뉴처럼 상위 컴포넌트와 하위 컴포넌트가 동등한 기능을 할 때 유용


```javascript
Vue.component('recursive-component', {
  template: `<!--Invoking myself!-->
             <recursive-component></recursive-component>`
});
```



#### 9) 컴포넌트 사이의 순환 참조

* 복잡한 어플리케이션에서 Vue 컴포넌트가 서로가 서로를 호출하고 있는 상황이 발생할 수 있음
*  `beforeCreate` 라이프 사이클 훅 시점까지 기다렸다가 해당 컴포넌트를 등록하거나, 웹팩의 비동기 `import`를 활용


```html
//ComponentA
<div>
  <component-b >
</div>

//ComponentB
<div>
  <component-b >
</div>
```

* 해결법 1

```javascript
beforeCreate: function () {
 this.$options.components.componentB = require('./component-b.vue').default
}
```

* 해결법 2

```javascript
components: {
 componentB: () => import('./component-b.vue')
}
```



### 하위 컴포넌트, 상위 컴포넌트

* 상위 컴포넌트에서는 하위 컴포넌트들을 `$children` 배열로 참조하며, 
* 하위 컴포넌트에서 상위 컴포넌트를 `$parent` 속성으로 참조합니다.









## vue 의 장단점

#### 1) Vue와 React

##### (1) 공통점

* 두 프레임워크 모두 가상 DOM모델을 사용

* 반응적이고 조합 가능한 컴포넌트를 제공

* 코어 라이브러리에만 집중하고 있고, 라우팅 및 상태 관리와 같은 라이브러리가 부가적으로 있음

##### (2) 차이점

| 특징              | Vue                       | React                    |
| ----------------- | ------------------------- | ------------------------ |
| 타입              | JavaScript MVC 프레임워크 | JavaScript 라이브러리    |
| 플랫폼            | 웹을 우선적으로           | 웹과 네이티브 모두       |
| 복잡도            | 상대적으로 간단           | 상대적으로 복잡          |
| 빌드 어플리케이션 | Vue-cli                   | CRA (`Create-React-App`) |

##### (3) Vue가 React에 비해 나은 점

* 가볍고 빠름

* 템플릿이 개발 과정을 쉽게 만들어줌

* JSX에 비해 가벼운 JavaScript 문법을 사용

##### (4) React가 Vue에 비해 나은 점

* 모바일 앱 제작에도 적합

* 생태계가 크고 풍부

* 큰 규모의 어플리케이션을 유연하게 만들 수 있음

* 테스트가 쉬움

#### 2) Vue와 Angular

| 특징          | Vue                      | Angular                                          |
| ------------- | ------------------------ | ------------------------------------------------ |
| 복잡도        | 배우기 쉬운 API와 디자인 | 프레임워크가 꽤 크고 타입스크립트 등의 지식 필요 |
| 데이터 바인딩 | 양방향 바인딩            | 단방향 바인딩                                    |
| 초기 릴리즈   | 2014                     | 2016                                             |
| 모델          | 가상 DOM 기반            | MVC                                              |
| 작성된 언어   | JavaScript               | TypeScript                                       |



1. ### CSP 환경에서 Vue 어플리케이션을 빌드하는 법은?

   Google 크롬 앱과 같은 일부 환경에서는 CSP(컨텐츠 보안 정책)를 적용하여 표현식을 평가하는 데 `new Function()` 을 사용할 수 없습니다. 전체 빌드는 이 기능을 사용하여 템플릿을 컴파일하므로 이러한 환경에서는 사용할 수 없습니다.

   반면 런타임 전용 빌드는 CSP와 완벽하게 호환됩니다. Webpack + vue-loader 또는 Browserify + vueify로 런타임 전용 빌드를 사용하는 경우 템플릿은 CSP 환경에서 완벽하게 작동하는 `render` 함수로 미리 컴파일됩니다.

2. ### 전체 빌드와 런타임 빌드의 차이점은?

   **1. 전체 빌드(Full):** 컴파일러와 런타임 빌드를 동시에 포함합니다. 템플릿을 작성한 경우 필요합니다.

   **2. 런타임 빌드(Runtime):** Vue 인스턴스 생성과 `render` 함수, 가상 돔을 포함하고 있지만 컴파일러 빌드를 포함하고 있지 않습니다.

3. ### Vue의 빌드 종류는?

   | 타입                    | UMD                | CommonJS              | ES Module (for bundlers) | ES Module (for browsers) |
   | ----------------------- | ------------------ | --------------------- | ------------------------ | ------------------------ |
   | 전체 빌드               | vue.js             | vue.common.js         | vue.esm.js               | vue.esm.browser.js       |
   | 런타임 빌드             | vue.runtime.js     | vue.runtime.common.js | vue.runtime.esm.js       | NA                       |
   | 전체 빌드 (배포 모드)   | vue.min.js         | NA                    | NA                       | vue.esm.browser.min.js   |
   | 런타임 빌드 (배포 모드) | vue.runtime.min.js | NA                    | NA                       | NA                       |

4. ### 웹팩에서 Vue 설정을 하는 방법은?

   `alias`를 이용해 Vue를 설정할 수 있습니다.

   ```javascript
   module.exports = {
     // ...
     resolve: {
       alias: {
         'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
       }
     }
   }
   ```

5. ### Vue 컴파일러의 목적은?

   Vue는 컴파일러를 이용해 템플릿을 `render` 함수로 변환합니다.

   ```javascript
   // this requires the compiler
   new Vue({
     template: '<div>{{ message }}</div>'
   })
   
   // this does not
   new Vue({
     render (h) {
       return h('div', this.message)
     }
   })
   ```

   

   

7. ### VueJS의 브라우저 지원은?

   ECMAScript5를 지원하는 브라우저에서 동작 가능합니다. IE8 이하의 브라우저에서는 지원하지 않습니다.

8. ### CDN으로 Vue를 사용하는 방법은?

   Vue는 jsdelivr, unpkg, cdnjs에서 제공하는 CDN을 이용해서도 사용이 가능합니다. 일반적으로 초기 기획, 학습용으로 적합합니다.

   ```
   <script src="https://cdn.jsdelivr.net/npm/vue@2.6.7/dist/vue.js"></script>
   ```

   ```
   <script type="module">
     import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.7/dist/vue.esm.browser.js'
   </script>
   ```

   **Note:** 버전 정보를 지우면 항상 최신 버전을 가져옵니다.

9. ### 강제로 업데이트를 발생시키는 방법은?

   매우 드문 경우지만, 데이터가 변경되지 않았음에도 재 렌더링을 위해 강제로 업데이트를 발생시켜야 할 수도 있습니다. 이 경우 `vm.$forceUpdate()` API 메소드를 이용할 수 있습니다.

   **Note:** 모든 하위 컴포넌트에는 영향이 미치지 않으며, 슬롯 그 자체가 삽입된 슬롯 자체 및 하위 컴포넌트에만 영향을 미칩니다.

10. ### 템플릿에서 once 지시자를 쓰는 이유는?

    많은 양의 정적 컨텐츠를 렌더링 할 때, 성능 향상을 위해 엘리먼트 및 컴포넌트를 한번만 렌더링하는 용도로 사용합니다.

    ```
    Vue.component('legal-terms', {
      template: `
        <div v-once>
          <h1>Legal Terms</h1>
          ... a lot of static content goes here...
        </div>
      `
    })
    ```

    **Note:** 정적 컨텐츠가 많아서 느려지는 일이 발생하지 않는 한, 과다하게 사용하지 않는 것이 좋습니다.



### 루트 Vue 인스턴스에 접근

* `$root` 속성을 이용해 접근

* 상태 관리를 위한 용도라면 Vuex를 사용하는 것이 낫습니다.

* 루트 인스턴스의 데이터와 메소드들을 하위 컴포넌트에서 아래와 같은 방법으로 접근

  

```javascript
new Vue({
  data: {
    age: 26
  },
  computed: {
    fullName: function () { /* ... */ }
  },
  methods: {
    interest: function () { /* ... */ }
  }
})
```

```javascript
this.$root.age
this.$root.age = 29
this.$root.fullName
this.$root.interest()
```



### renderError 메소드

* 기본 `render` 함수가 렌더링 도중 에러가 발생하면, 대체되는 렌더링 결과를 제공
*  `renderError`의 두 번째 전달인자로 에러가 전달

```javascript
new Vue({
  render (h) {
    throw new Error('An error')
  },
  renderError (h, err) {
    return h('div', { style: { color: 'red' }}, err.stack)
  }
}).$mount('#app')
```



