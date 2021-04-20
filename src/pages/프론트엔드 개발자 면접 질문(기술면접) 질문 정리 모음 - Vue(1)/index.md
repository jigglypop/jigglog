---
path: "/프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Vue/"
category: "기술 면접"
tags: ["프론트엔드", "개발자", "면접", "기술면접", "Vue"]
title: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Vue"
date: "2021-04-15T01:00:00.000Z"
summary: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Vue"
images: ["images/2.jpg"]
---

> 프론트 엔드 면접 질문용(Vue) 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요





1. ### DevTool이란?

   DevTool은 Vue 어플리케이션을 사용자 친화적인 인터페이스로 디버그 할 수 있게 도와주는 브라우저 확장 프로그램입니다.

   ![img](https://github.com/sudheerj/vuejs-interview-questions/raw/master/images/DevTools.png)

   Note: Vue 페이지가 배포 모드일 경우에는 DevTool로 디버그할 수 없습니다.

2. ### VueJS의 브라우저 지원은?

   ECMAScript5를 지원하는 브라우저에서 동작 가능합니다. IE8 이하의 브라우저에서는 지원하지 않습니다.

3. ### CDN으로 Vue를 사용하는 방법은?

   Vue는 jsdelivr, unpkg, cdnjs에서 제공하는 CDN을 이용해서도 사용이 가능합니다. 일반적으로 초기 기획, 학습용으로 적합합니다.

   ```
   <script src="https://cdn.jsdelivr.net/npm/vue@2.6.7/dist/vue.js"></script>
   ```

   ```
   <script type="module">
     import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.7/dist/vue.esm.browser.js'
   </script>
   ```

   Note: 버전 정보를 지우면 항상 최신 버전을 가져옵니다.

4. ### 강제로 업데이트를 발생시키는 방법은?

   매우 드문 경우지만, 데이터가 변경되지 않았음에도 재 렌더링을 위해 강제로 업데이트를 발생시켜야 할 수도 있습니다. 이 경우 `vm.$forceUpdate()` API 메소드를 이용할 수 있습니다.

   Note: 모든 하위 컴포넌트에는 영향이 미치지 않으며, 슬롯 그 자체가 삽입된 슬롯 자체 및 하위 컴포넌트에만 영향을 미칩니다.

5. ### 템플릿에서 once 지시자를 쓰는 이유는?

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

   Note: 정적 컨텐츠가 많아서 느려지는 일이 발생하지 않는 한, 과다하게 사용하지 않는 것이 좋습니다.

6. ### 루트 Vue 인스턴스에 접근하는 방법은?

   루트 Vue 인스턴스(`new Vue()`)는 `$root` 속성을 이용해 접근할 수 있습니다.

   ```
   // The root Vue instance
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

   루트 인스턴스의 데이터와 메소드들을 하위 컴포넌트에서 아래와 같은 방법으로 접근할 수 있습니다.

   ```
   // Get root data
   this.$root.age
   
   // Set root data
   this.$root.age = 29
   
   // Access root computed properties
   this.$root.fullName
   
   // Call root methods
   this.$root.interest()
   ```

   상태 관리를 위한 용도라면 Vuex를 사용하는 것이 낫습니다.

7. 

8. ### renderError 메소드의 목적은?

   기본 `render` 함수가 렌더링 도중 에러가 발생하면, 대체되는 렌더링 결과를 제공합니다. `renderError`의 두 번째 전달인자로 에러가 전달됩니다.

   ```
   new Vue({
     render (h) {
       throw new Error('An error')
     },
     renderError (h, err) {
       return h('div', { style: { color: 'red' }}, err.stack)
     }
   }).$mount('#app')
   ```

9. ### 하위 컴포넌트에서 상위 컴포넌트로 직접 접근하는 방법은?

   상위 컴포넌트에서는 하위 컴포넌트들을 `$children` 배열로 참조하며, 하위 컴포넌트에서 상위 컴포넌트를 `$parent` 속성으로 참조합니다.

10. ### vuex란?

    Vuex는 Vue.js 애플리케이션을 위한 상태 관리 패턴 + 라이브러리(Flux에서 영감을 받은 애플리케이션 아키텍처)입니다. 예측 가능한 방식으로만 상태가 변경될 수 있도록 보장하는 규칙을 가지고 있는 애플리케이션의 모든 컴포넌트를 위한 중앙 집중식 저장소입니다.

11. ### 상태 관리 패턴의 주요 구성 요소는 무엇입니까?

    상태 관리의 주요 구성요소는 상태 및 뷰, 액션입니다. 이러한 구성요소에 따른 패턴을 애플리케이션에서 상태 관리 패턴이라고 합니다. 아래에 자세한 구성 요소가 자세히 설명되어 있습니다.

    1. 상태는 앱을 구동시키는 원천입니다.
    2. 뷰는 단지 상태의 선언적 매핑입니다.
    3. 액션은 뷰에서 사용자 입력에 반응하여 상태가 변할 수 있도록 하는 방법입니다. 위의 3가지 구성요소와 함께 상태 관리 패턴을 따르는 카운터 예를 들어보겠습니다.

    ```
    new Vue({
      // state
      data () {
        return {
          count: 0
        }
      },
      // view
      template: `
        <div>{{ count }}</div>
      `,
      // actions
      methods: {
        increment () {
          this.count++
        }
      }
    })
    ```

12. ### Vuex에서 단방향 데이터 흐름 모델을 어떻게 표현합니까?

    Vue.js는 props 속성을 통해 단방향 데이터 흐름 모델을 표현합니다. vuex에서 이와 동일한 개념은 아래와 같이 나타낼 수 있습니다.

    ![img](https://github.com/sudheerj/vuejs-interview-questions/raw/master/images/flow.png)

### vuejs loader는 무엇입니까?

Vue loader는 Vue 컴포넌트를 싱글 파일 컴포넌트(SFC, SFCs)라고 하는 형식으로 작성할 수 있는 웹팩용 로더입니다. 예를 들어 `HelloWorld` 라는 SFC를 작성하면 아래와 같습니다.

```vue
<template>
  <div class="greeting">{{ message }}</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello world for vueloader!'
    }
  }
}
</script>

<style>
.greeting {
  color: blue;
}
</style>
```

### 웹팩에서 vue loader를 설정하는 방법은?

`Vue-Loader`의 설정은 웹팩 설정에 Vue Loader의 플러그인을 추가하기 때문에 다른 로더와는 약간 다릅니다. Vue 로더 플러그인은 정의된 다른 규칙(js 및 css 규칙)을 복제하여 `.vue` 파일에서 해당 언어 블록(`script` 및 `style`)에 적용하기 위해 필요합니다. Vue 로더에 대한 웹팩 구성의 간단한 예는 다음과 같습니다.

```javascript
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files and `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files and `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for cloning and mapping them to respective language blocks
    new VueLoaderPlugin()
  ]
}
```

### vue-loader의 Asset URL 핸들링 규칙은?

1. 절대 경로(Absolute path): 만약 URL 경로가 `/images/loader.png`와 같은 절대 경로라면 그대로 보존됩니다.
2. 상대 경로(Relative path): 만약 URL 경로가 `./images/loader.png`와 같은 절대 경로라면 상대 모듈 요청(`require(./images/loader.png)`)으로 컴파일되고 파일 시스템의 폴더 구조를 기반으로 해결됩니다.
3. ~로 시작하는 경로(URLs starts with ~ symbol): 만약 URL 경로가 `./some-node-package/loader.png`와 같은 `~`로 시작된다면, 모듈 요청으로 컴파일됩니다.
4. @로 시작하는 경로(URLs starts with @ symbol): 만약 URL 경로가 `@`로 시작된다면, 모듈 요청으로 컴파일됩니다. 이것은 웹팩 `config`에 `@`에 대한 별칭이 있는 경우에 유용하며, 기본적으로 `vue-cli`가 만든 모든 프로젝트에서 `/src`를 가리킵니다.

### vue loader에서 전처리기를 사용하는 경우라면?

`Vue-loader`는 작성된 언어 블록의 `lang` 속성을 이용해 적절한 로더를 적용하고 웹팩 설정에 적용된 규칙을 따릅니다. `Vue-loader`에서 SASS, LESS, Stylus나 PostCSS 같은 전처리기를 사용할 수 있습니다.

### 범위 CSS(Scoped CSS)란?

범위를 가지는 CSS(Scoped CSS)는 Vue에서 싱글 파일 컴포넌트에서 해당 컴포넌트에 작성된 CSS가 다른 컴포넌트에 영향을 미치지 않도록 그 적용 범위를 제한하는 것을 의미합니다. 즉, `<style>` 태그가 `scoped` 속성을 가지고 있다면, 해당 CSS는 해당 컴포넌트에서만 영향을 미칩니다.

```
<style scoped>
.greeting {
  color: green;
}
</style>
```

```
<template>
  <div class="greeting">Let's start Scoped CSS</div>
</template>
```

위의 코드는 아래로 변환됩니다.

```
 <style scoped>
 .greeting[data-v-f3f3eg9] {
   color: green;
 }
 </style>
```

```
<template>
  <div class="greeting" data-v-f3f3eg9>Let's start Scoped CSS</div>
</template>
```

### 범위 CSS와 전역 CSS를 함께 쓸 수 있을까?

범위가 지정된 스타일과 범위가 지정되지 않은 스타일은 동일한 컴포넌트에 포함할 수 있습니다.

```
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
</style>
```

### 범위 CSS가 자식 컴포넌트에 영향을 미치게 하는 방법은?

범위가 지정된 CSS에서, 자식 컴포넌트에 영향을 미치게 하는 방법은 `>>>` 연산자를 사용하면 됩니다.

```
<style scoped>
.class1 >>> .class2 { /* ... */ }
</style>
```

위의 CSS는 아래로 컴파일됩니다.

```
.class1[data-v-f3f3eg9] .class2 { /* ... */ }
```

Note: SASS에서는 `>>>` 연산자가 제대로 작동하지 않을 수 있습니다. 이때는 `/deep/` 또는 `::v-deep` 선택자를 대신 이용합니다.

### 상위 컴포넌트의 범위 CSS가 하위 컴포넌트에 영향을 주는가?

일반적으로 상위 컴포넌트의 스타일은 하위 컴포넌트에 영향을 미치지 않습니다. 하지만 하위 컴포넌트의 루트 노드는 상위 컴포넌트와 하위 컴포넌트의 스타일에 모두 영향을 받습니다. 즉, 하위 컴포넌트의 루트 노드에 상위 컴포넌트에서 사용된 클래스가 사용된다면, 상위 컴포넌트의 스타일이 하위 컴포넌트에도 영향을 끼칩니다. 이는 상위 컴포넌트에서 레이아웃을 위해 하위 컴포넌트에 영향을 미칠 수 있도록 디자인된 것입니다. 아래의 예시는 상위 컴포넌트의 `background`가 하위 컴포넌트에까지 영향을 미치는 예제입니다.

```
// parent.vue
<template>
  <div class="wrapper">
    <p>parent</p>
    <ChildMessageComponent/>
  </div>
</template>

<script>
import ChildMessageComponent from "./components/child";

export default {
  name: "App",
  components: {
    ChildMessageComponent
  }
};
</script>

<style scoped>
.wrapper {
  background: blue;
}
</style>
```

```
//child.vue
<template>
  <div class="wrapper">
    <p>child</p>
  </div>
</template>

<script>
export default {
  name: "Hello, Scoped CSS",
};
</script>
<style scoped>
.wrapper {
  background: red;
}
</style>
```

하위 컴포넌트의 `wrapper` 클래스의 배경색은 빨간색이 아니라 파란색이 됩니다.

1. ### 동적으로 생성된 컨텐츠에 범위 CSS를 적용시키는 방법은?

   범위 CSS는 `v-html` 지시자로 동적으로 생성된 내용에 영향을 주지 않습니다. 이 경우, `deep` 선택자를 통해 문제를 해결할 수 있습니다.

2. ### Vue에서 CSS 모듈을 사용할 수 있을까?

   CSS 모듈은 CSS를 모듈화하고 구성하는데 널리 사용되는 시스템입니다. `vue-loader`는 시뮬레이트된 범위 CSS의 대안으로 CSS 모듈과 함께 1급 클래스로의 통합을 제공합니다.

3. ### 모든 템플릿에 대해 런타임 빌드를 할 수 있는가?

   안 됩니다. Vue에서 사용되는 템플릿은 오직 `.vue` 파일에서만 사용되며, 다른 경우라면 `render` 함수가 필요합니다.

4. ### Vue에서 CSS 모듈을 사용하는 방법은?

   1. CSS 모듈 활성화: `webpack.config.js`의 `css-loader`에서 `modules: true` 옵션을 활성화해줍니다.

   ```
   // webpack.config.js
   {
     module: {
       rules: [
         // ... other rules omitted
         {
           test: /\.css$/,
           use: [
             'vue-style-loader',
             {
               loader: 'css-loader',
               options: {
                 // enable CSS Modules
                 modules: true,
                 // customize generated class names
                 localIdentName: '[local]_[hash:base64:8]'
               }
             }
           ]
         }
       ]
     }
   }
   ```

   1. 모듈 속성 추가: `<style>` 태그에 `module` 속성을 추가합니다.

   ```
   <style module>
   .customStyle {
     background: blue;
   }
   </style>
   ```

   1. CSS 모듈 주입: `computed` 속성인 `$style`을 통해 CSS 모듈을 객체로 접근할 수 있습니다.

   ```
   <template>
     <div :class="$style.blue">
       Background color should be in blue
     </p>
   </template>
   ```

   `:class`의 객체, 배열 문법에도 동작합니다.

5. ### CSS 모듈을 전처리기에서 사용할 수 있는가?

   CSS 모듈을 전처리기에서 사용할 수 있습니다. 예를 들어, Sass 전처리기는 웹팩에서 아래와 같이 설정할 수 있습니다.

   ```
   // webpack.config.js -> module.rules
   {
     test: /\.scss$/,
     use: [
       'vue-style-loader',
       {
         loader: 'css-loader',
         options: { modules: true }
       },
       'sass-loader'
     ]
   }
   ```

6. ### CSS 모듈에 사용자 정의의 이름을 사용할 수 있는가?

   주입된 CSS 모듈에 `module` 속성을 부여해서, 모듈의 이름을 커스터마이징할 수 있습니다. `*.vue` 파일에서 둘 이상의 `<style>` 태그가 존재할 때, 스타일이 서로 덮어쓰지 않게 하는 데 유용합니다. 예를 들어, 아래와 같이 속성을 줄 수 있습니다.

   ```
   <style module="a">
     /* identifiers injected as a */
   </style>
   
   <style module="b">
     /* identifiers injected as b */
   </style>
   ```

   

   

7. ### 핫 리로드(Hot Reload)란?

   핫 리로드는 `*.vue` 파일을 편집할 때 단순히 페이지를 다시 로드하는 것이 아닙니다. 핫 리로드 기능을 사용하면 `*.vue` 파일을 편집할 때 해당 컴포넌트의 모든 인스턴스가 페이지를 리로딩하지 않고 변경됩니다. 심지어 앱의 현재 상태와 변경된 컴포넌트를 보존합니다. 이것은 템플릿 또는 컴포넌트의 스타일을 수정할 때 개발 환경이 크게 개선됩니다.

8. ### 핫 리로드가 비활성화 될 때는?

   핫 리로드는 아래의 상황에서는 비활성화 되어있습니다.

   1. 웹팩의 `target`이 `node`일 때 (SSR)
   2. 웹팩이 코드를 minify할 때
   3. `process.env.NODE_ENV === 'production'`일 때

9. ### 핫 리로드를 명시적으로 비활성화하는 방법은?

   `hotReload: false` 옵션을 웹팩 로더에서 설정하면 됩니다.

   ```
   module: {
     rules: [
       {
         test: /\.vue$/,
         loader: 'vue-loader',
         options: {
           hotReload: false // disables Hot Reload
         }
       }
     ]
   }
   ```

10. ### 핫 리로드를 활성화하는 방법은?

    `vue-loader` 플러그인은 내부적으로 핫 리로드를 사용하고 있습니다. 만약 `vue-cli`를 이용해 프로젝트를 시작했다면, 핫 리로드를 바로 사용할 수 있습니다. 만약 프로젝트를 직접 세팅했다면, `webpack-dev-server --hot`옵션으로 프로젝트를 시작해 활성화 할 수 있습니다.

11. ### 핫 리로드에서 상태가 보존되는 규칙은?

    1. 컴포넌트의 `<template>`을 수정할 때, 수정된 컴포넌트는 모든 상태를 보존한 채로 다시 렌더링됩니다.
    2. 컴포넌트의 `<script>`를 수정할 때, 수정된 컴포넌트는 해체(destroy) 된 후 다시 생성(re-create)됩니다.
    3. 컴포넌트의 `<style>`을 수정할 때, 핫 리로드는 `vue-style-loader`에 의해 실행되며 상태에 영향을 끼치지 않습니다.

12. ### Vue loader를 이용해 함수형 컴포넌트를 생성하는 방법은?

    `functional` 속성을 템플릿에 추가해 함수형 컴포넌트를 생성할 수 있습니다.

    ```
    <template functional>
      <div>{{ props.msg }}</div>
    </template>
    ```

13. ### 함수형 컴포넌트에서 전역 속성에 접근하는 방법은?

    `Vue.prototype`에 전역으로 정의된 속성에 접근해야 한다면, `parent` 속성을 이용해 접근할 수 있습니다.

    ```
    <template functional>
      <div>{{ parent.$someProperty }}</div>
    </template>
    ```

14. ### Vue에서 테스트 하는 방법은?

    1. vue-cli: 유닛 테스트와 e2e 테스트 환경이 미리 설정되어 제공됩니다.
    2. 직접 세팅: `@vue/test-utils`에서 `mocha-webpack`이나 `jest`를 `*.vue` 파일을 대상으로 직접 설정합니다.

15. ### CSS에 Lint를 설정하는 방법은?

    Stylelint를 이용해 Vue의 싱글 파일 컴포넌트의 스타일 부분의 Lint를 설정할 수 있습니다. 특정 `.vue` 파일의 Lint는 아래와 같이 실행합니다.

    ```
    stylelint MyComponent.vue
    ```

    다른 방법은 웹팩에서 `stylelint-webpack-plugin`를 `dev-dependency`로 설치하고, 웹팩 설정에서 아래와 같이 설정하는 방법입니다.

    ```
    // webpack.config.js
    const StyleLintPlugin = require('stylelint-webpack-plugin');
    module.exports = {
      // ... other options
      plugins: [
        new StyleLintPlugin({
          files: ['/*.{vue,htm,html,css,sss,less,scss,sass}'],
        })
      ]
    }
    ```

16. ### eslint 플러그인을 사용하는 방법은?

    공식 `eslint-plugin-vue` 플러그인은 Vue의 싱글 파일 컴포넌트의 템플릿과 스크립트 부분에 대해 Lint를 제공합니다.

    ```
    // .eslintrc.js
    module.exports = {
      extends: [
        "plugin:vue/essential"
      ]
    }
    ```

    특정 파일에 대한 Lint는 아래와 같이 실행할 수 있습니다.

    ```
    eslint --ext js,vue MyComponent.vue
    ```

17. ### eslint-loader를 사용하는 이유는?

    `eslint-loader`를 이용하면 개발 도중에 자동으로 `*.vue` 파일들에 대해 Lint를 적용시킬 수 있습니다.

    우선 아래와 같이 NPM 모듈을 설치해야 합니다.

    ```
    npm install -D eslint eslint-loader
    ```

    그 후 웹팩의 설정에 추가해야 합니다.

    ```
    // webpack.config.js
    module.exports = {
      // ... other options
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
          }
        ]
      }
    }
    ```

    ### CSS 단일 파일 추출이란?

    CSS 단일 파일 추출(CSS Extraction)은 모든 Vue 컴포넌트에서 사용된 CSS를 단일 CSS 파일로 추출하는 것을 의미합니다.

    ```
    npm install -D mini-css-extract-plugin
    ```

    그 후 웹팩의 설정에 추가해야 합니다.

    ```javascript
    // webpack.config.js
    var MiniCssExtractPlugin = require('mini-css-extract-plugin')
    
    module.exports = {
      // other options...
      module: {
        rules: [
          // ... other rules omitted
          {
            test: /\.css$/,
            use: [
              process.env.NODE_ENV !== 'production'
                ? 'vue-style-loader'
                : MiniCssExtractPlugin.loader,
              'css-loader'
            ]
          }
        ]
      },
      plugins: [
        // ... Vue Loader plugin omitted
        new MiniCssExtractPlugin({
          filename: 'style.css'
        })
      ]
    }
    ```

    ### 사용자 정의 블록이란?

    사용자 정의 블록(Custom block)은 `*.vue` 파일에서 사용할 수 있는 `<template>`, `<script>`, `<style>` 태그 블록 이외의 블록을 정의하는 것을 말합니다. `lang` 속성, 태그 이름, 웹팩 설정의 `resourceQuery` 속성에 의해 정의할 수 있습니다. 아래 예시는 `*.vue` 파일에서 `<message>`로 정의된 태그를 찾는 방법입니다.

    ```
    {
      module: {
        rules: [
          {
            resourceQuery: /blockType=message/,
            loader: 'loader-to-use'
          }
        ]
      }
    }
    ```

18. ### What are the features of stylelint?

    Below are the list of major stylelint features

    1. It has more than 160 built-in rules to catch errors, apply limits and enforce stylistic conventions
    2. Understands latest CSS syntax including custom properties and level 4 selectors
    3. It extracts embedded styles from HTML, markdown and CSS-in-JS object & template literals
    4. Parses CSS-like syntaxes like SCSS, Sass, Less and SugarSS
    5. Supports Plugins for reusing community plugins and creating own plugins

19. ### What are the principles for vuex application structure?

    Vuex enforces below rules to structure any application.

    1. Application-level state is centralized in the store.
    2. The only way to mutate the state is by committing mutations, which are synchronous transactions.
    3. Asynchronous logic should be encapsulated in, and can be composed with actions. The project structure for any non-trivial application would be as below,

    ![img](https://github.com/sudheerj/vuejs-interview-questions/raw/master/images/vuex-app-structure.png)

20. ### Is Vuex supports hot reloading?

    Yes, Vuex supports hot-reloading for mutations, modules, actions and getters during development. You need to use either webpack's hot module replacement API or browserify's hot module replacement plugin.

21. ### What is the purpose of hotUpdate API of vuex store?

    The store.hotUpdate() API method is used for mutations and modules. For example, you need to configure vuex store as below,

    ```
    // store.js
    import Vue from 'vue'
    import Vuex from 'vuex'
    import mutations from './mutations'
    import myModule from './modules/myModule'
    
    Vue.use(Vuex)
    
    const state = { message: "Welcome to hot reloading" }
    
    const store = new Vuex.Store({
      state,
      mutations,
      modules: {
        moduleA: myModule
      }
    })
    
    if (module.hot) {
      // accept actions and mutations as hot modules
      module.hot.accept(['./mutations', './modules/newMyModule'], () => {
        // Get the updated modules
        const newMutations = require('./mutations').default
        const newMyModule = require('./modules/myModule').default
        //swap in the new modules and mutations
        store.hotUpdate({
          mutations: newMutations,
          modules: {
            moduleA: newMyModule
          }
        })
      })
    }
    ```

22. ### mutations의 테스트

     mutations 는 단지 그들의 arguments에 전적으로 의존하는 함수이기 때문에 시험하기가 더 쉬울 것이다. store.js 파일 내에 mutations 를 유지해야 하며 기본 내보내기와는 별도로 명명된 내보내기로도 내보내야 합니다. 

    ```javascript
    // mutations.js
    export const mutations = {
      increment: state => state.counter++
    }
    ```

    And test them using mocha and chai as below,

    ```javascript
    // mutations.spec.js
    import { expect } from 'chai'
    import { mutations } from './store'
    
    // destructure assign `mutations`
    const { increment } = mutations
    
    describe('mutations', () => {
      it('INCREMENT', () => {
        // mock state
        const state = { counter: 10 }
        // apply mutation
        increment(state)
        // assert result
        expect(state.counter).to.equal(11)
      })
    })
    ```

23. ### How do you test your getters?

    It is easier to test getters similar to mutations. It is recommended to test these getters if they have complicated computation. Let's take a simple todo filter as a getter

    ```
    // getters.js
    export const getters = {
      filterTodos (state, status) {
        return state.todos.filter(todo => {
          return todo.status === status
        })
      }
    }
    ```

    And the test case for above getter as follows,

    ```
    // getters.spec.js
    import { expect } from 'chai'
    import { getters } from './getters'
    
    describe('getters', () => {
      it('filteredTodos', () => {
        // mock state
        const state = {
          todos: [
            { id: 1, title: 'design', status: 'Completed' },
            { id: 2, title: 'testing', status: 'InProgress' },
            { id: 3, title: 'development', status: 'Completed' }
          ]
        }
        // mock getter
        const filterStatus = 'Completed'
    
        // get the result from the getter
        const result = getters.filterTodos(state, filterStatus)
    
        // assert the result
        expect(result).to.deep.equal([
          { id: 1, title: 'design', status: 'Completed' },
          { id: 2, title: 'development', status: 'Completed' }
        ])
      })
    })
    ```

24. ### What is the procedure to run tests in node?

    By proper mocking, you can bundle tests with webpack and run them on node without having depenceny on Browser API. It involves 2 steps,

    1. Create webpack config: Create webpack config with proper .babelrc

    ```javascript
    // webpack.config.js
    module.exports = {
      entry: './test.js',
      output: {
        path: __dirname,
        filename: 'test-bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      }
    }
    ```

    1.  Run testcases: First you need to bundle and then run them using mocha as below,

    ```
    webpack
    mocha test-bundle.js
    ```

25. ### What is the procedure to run tests in browser?

    Below are the steps to run tests in real browser,

    1. Install `mocha-loader`.
    2. Configure webpack config entry point to 'mocha-loader!babel-loader!./test.js'.
    3. Start webpack-dev-server using the config.
    4. Go to localhost:8080/webpack-dev-server/test-bundle to see the test result

26. ### What is the purpose of strict mode in vuex?

    In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be thrown. It make sure that all state mutations can be explicitly tracked by debugging tools. You can just enable this by passing `strict: true` while creating the vuex store.

    ```javascript
    const store = new Vuex.Store({
      // ...
      strict: true
    })
    ```

27. ### Can I use strict mode in production environment?

    No, it is not recommended to use strict mode in production environment. Strict mode runs a synchronous deep watcher on the state tree for detecting inappropriate mutations and it can be quite expensive when you perform large amount of mutations. i.e, It can impact performance if you enable in production mode. Hence it should be handled through build tools,

    ```javascript
    const store = new Vuex.Store({
      // ...
      strict: process.env.NODE_ENV !== 'production'
    })
    ```

28. ### What is vuex plugin?

    The vuex plugin is an option hat exposes hooks for each mutation. It is a normal function that receives the store as the only argument. You can create your own plugin or use built-in plugins. The plugin skeleton would be as below,

    ```javascript
    const myPlugin = store => {
      // called when the store is initialized
      store.subscribe((mutation, state) => {
        // called after every mutation.
        // The mutation comes in the format of `{ type, payload }`.
      })
    }
    ```

    After that plugin can be configured for plugins options as below,

    ```javascript
    const store = new Vuex.Store({
      // ...
      plugins: [myPlugin]
    })
    ```

29. ### How do you mutate state in plugins?

    Similar to components you can't mutate state directly but they can trigger changes by by committing mutations. This way a plugin can be used to sync a data source to the store. For example, createWebSocketPlugin plugin is used to sync a websocket data source to the store.

    ```javascript
    export default function createWebSocketPlugin (socket) {
      return store => {
        socket.on('data', data => {
          store.commit('receiveData', data)
        })
        store.subscribe(mutation => {
          if (mutation.type === 'UPDATE_DATA') {
            socket.emit('update', mutation.payload)
          }
        })
      }
    }
    ```

    And then configure plugin in vuex store as below

    ```javascript
    const plugin = createWebSocketPlugin(socket)
    
    const store = new Vuex.Store({
      state,
      mutations,
      plugins: [plugin]
    })
    ```

30. ### What is vuex store?

    A Vuex "store" is basically a container that holds your application state. The store creation is pretty straightforward. Below are the list of instructions to use vuex in an increment application,

    1. Configure vuex in vuejs ecosystem

    ```javascript
    import Vuex from "vuex";
    Vue.use(Vuex)
    ```

    1. Provide an initial state object and some mutations

    ```javascript
    // Make sure to call Vue.use(Vuex) first if using a module system
    
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment (state) {
          state.count++
        }
      }
    })
    ```

    1. Trigger state change with commit and access state variables,

    ```javascript
    store.commit('increment')
    
    console.log(store.state.count) // -> 1
    ```

    

31. vuex 스토어와 일반 글로벌 객체의 차이

    1) Vuex 스토어는 반응성 : 스토어의 상태가 변경되면 vue 구성 요소가 반응성 및 효율적으로 업데이트됩니다.
    2) 스토어 상태를 직접 변경할 수 없:  모든 상태 변경이 툴링 목적으로 추적 가능한 기록을 남길 수 있도록 mutations를 명시적으로 commit 하면서 스토어의 상태가 변경됩니다.

32. ### What is the reason not to update the state directly?

    We want to explicitly track application state in order to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging. So we need to commit a mutation instead of changing store's state directly.

33. ### What is Single state tree?

    Vuex's single state tree is single object contains all your application level state and serves as the "single source of truth". It does not conflict with modularity when you split state and mutations into sub modules.

34. ### How do you install vuex?

    You can install vuex using npm or yarn as below,

    ```
    npm install vuex --save
    (or)
    yarn add vuex
    ```

    In a module system, you must explicitly install Vuex via Vue.use()

    ```
    import Vue from 'vue'
    import Vuex from 'vuex'
    
    Vue.use(Vuex)
    ```

    (OR) You can also install it using CDN links such as unpkg.cpm which provides NPM-based CDN links. Just include vuex after Vue and it will install itself automatically.

    ```
    <script src="https://unpkg.com/vue.js"></script>
    <script src="https://unpkg.com/vuex.js"></script>
    ```

    Note: You can use a specific version/tag via URLs like https://unpkg.com/vuex@2.0.0. If you don't mention any version then it will point to latest version.

35. ### Do I need promise for vuex?

    Yes, Vuex requires Promise. If your supporting browsers do not implement Promise (e.g. IE), you can use a polyfill library, such as es6-promise using npm or yarn.

    ```
    npm install es6-promise --save # NPM
    yarn add es6-promise # Yarn
    ```

    After that import into anywhere in your application,

    ```
    import 'es6-promise/auto'
    ```

36. ### How do you display store state in vue components?

    Since Vuex stores are reactive, you can retrieve" state from store by simply returning store's state from within a computed property. i.e, Whenever store state changes, it will cause the computed property to re-evaluate, and trigger associated DOM updates. Let's take a hello word component which display store's state in the template,

    ```
    // let's create a hello world component
    const Greeting = {
      template: `<div>{{ greet }}</div>`,
      computed: {
        greet () {
          return store.state.msg
        }
      }
    }
    ```

37. ### How do you inject store into child components?

    Vuex provides a mechanism to "inject" the store into all child components from the root component with the store option. It will be enabled by vue.use(vuex). For example, let's inject into our app component as below,

    ```
    const app = new Vue({
      el: '#app',
      // provide the store using the "store" option.
      // this will inject the store instance to all child components.
      store,
      components: { Greeting },
      template: `
        <div class="app">
          <greeting></greeting>
        </div>
      `
    })
    ```

    Now the store will be injected into all child components of the root and will be available on them as this.$store

    ```
     // let's create a hello world component
         const Greeting = {
           template: `<div>{{ greet }}</div>`,
           computed: {
             greet () {
               return this.$store.state.msg
             }
           }
         }
    ```

38. ### What is mapState helper?

    In Vuex application, creating a computed property every time whenever we want to access the store's state property or getter is going to be repetitive and verbose, especially if a component needs more than one state property. In this case, we can make use of the mapState helper of vuex which generates computed getter functions for us. Let's take an increment example to demonstrate mapState helper,

    ```
    // in full builds helpers are exposed as Vuex.mapState
    import { mapState } from 'vuex'
    
    export default {
      // ...
      computed: mapState({
        // arrow functions can make the code very succinct!
        username: state => state.username,
    
        // passing the string value 'username' is same as `state => state.username`
        usernameAlias: 'username',
    
        // to access local state with `this`, a normal function must be used
         greeting (state) {
          return this.localTitle + state.username
        }
      })
    }
    ```

    We can also pass a string array to mapState when the name of a mapped computed property is the same as a state sub tree name

    ```
    computed: mapState([
      // map this.username to store.state.username
      'username'
    ])
    ```

39. ### How do you combine local computed properties with mapState helper?

    You can use object spread operator syntax in order to combine mapState helper(which returns an object) with other local computed properties. This way it simplify merging techniques using utilities.

    ```
    computed: {
      localComputed () { /* ... */ },
      // mix this into the outer object with the object spread operator
      ...mapState({
        // ...
      })
    }
    ```

40. ### Do you need to replace entire local state with vuex?

    No, if a piece of state strictly belongs to a single component, it could be just fine leaving it as local state. i.e, Eventhough vuex used in the application, it doesn't mean that you need to keep all the local state in vuex store. Other the code becomes more verbose and indirect although it makes your state mutations more explicit and debuggable.

41. ### What are vuex getters??

    Vuex getters acts as computed properties for stores to compute derived state based on store state. Similar to computed properties, a getter's result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed. Let's take a todo example which as completedTodos getter to find all completed todos,

    ```
    const store = new Vuex.Store({
      state: {
        todos: [
          { id: 1, text: 'Vue course', completed: true },
          { id: 2, text: 'Vuex course', completed: false },
          { id: 2, text: 'Vue Router course', completed: true }
        ]
      },
      getters: {
        completedTodos: state => {
          return state.todos.filter(todo => todo.completed)
        }
      }
    })
    ```

    Note:Getters receive state as first argument.

42. ### What is a property style access?

    You can access values of store's getter object(store.getters) as properties. This is known as property style access. For example, you can access todo's status as a property,

    ```
    store.getters.todosStatus
    ```

    The getters can be passed as 2nd argument for other getters. For example, you can derive completed todo's count based on their status as below,

    ```
    getters: {
      completedTodosCount: (state, getters) => {
        return getters.todosStatus === 'completed'
      }
    }
    ```

    Note: The getters accessed as properties are cached as part of Vue's reactivity system.

43. ### What is a method style access?

    You can access store's state in a method style by passing arguments. For example, you can pass user id to find user profile information as below,

    ```
    getters: {
      getUserProfileById: (state) => (id) => {
        return state.users.find(user => user.id === id)
      }
    }
    ```

    After that you can access it as a method call,

    ```
    store.getters.getUserProfileById(111); {id: '111', name: 'John', age: 33}
    ```

44. ### What is mapGetter helper??

    The mapGetters is a helper that simply maps store getters to local computed properties. For example, the usage of getters for todo app would be as below,

    ```
    import { mapGetters } from 'vuex'
    
    export default {
      computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
          'completedTodos',
          'todosCount',
          // ...
        ])
      }
    }
    ```

45. ### What are mutations?

    Vuex mutations are similar to any events with a string `type` and a `handler`. The handler function is where we perform actual state modifications, and it will receive the state as the first argument. For example, the counter example with increment mutation would be as below,

    ```
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment (state) {
          // mutate state
          state.count++
        }
      }
    })
    ```

    You can't directly invoke mutation instead you need to call `store.commit` with its type. The above mutation would be triggered as folows

    ```
    store.commit('increment')
    ```

46. ### How do you commit with payload?

    You can also pass payload for the mutation as an additional argument to `store.commit`. For example, the counter mutation with payload object would be as below,

    ```
    mutations: {
      increment (state, payload) {
        state.count += payload.increment
      }
    }
    ```

    And then you can trigger increment commit

    ```
    store.commit('increment', {
      increment: 20
    })
    ```

    Note: You can also pass primitives as payload.

47. ### What is object style commit?

    You can also commit a mutation is by directly using an object that has a type property.

    ```
    store.commit({
      type: 'increment',
      value: 20
    })
    ```

    Now the entire object will be passed as the payload to mutation handlers(i.e, without any changes to handler signature).

    ```
    mutations: {
      increment (state, payload) {
        state.count += payload.value
      }
    }
    ```

48. ### What are the caveats with vuex mutations?

    Since a Vuex store's state is made reactive by Vue, the same reactivity caveats of vue will apply to vuex mutations. These are the rules should be followed for vuex mutations,

    1. It is recommended to initialize store's initial state with all desired fields upfront
    2. Add new properties to state Object either by set method or object spread syntax

    ```
    Vue.set(stateObject, 'newProperty', 'John')
    ```

    (OR)

    ```
    state.stateObject = { ...state.stateObject, newProperty: 'John' }
    ```

49. ### Why mutations should be synchronous?

    You need to remember that mutation handler functions must be synchronous. This is why because any state mutation performed in the callback is essentially un-trackable. It is going to be problematic when the devtool will need to capture a "before" and "after" snapshots of the state during the mutations.

    ```
    mutations: {
      someMutation (state) {
        api.callAsyncMethod(() => {
          state.count++
        })
      }
    }
    ```

50. ### How do you perform mutations in components?

    You can commit mutations in components with either this.$store.commit('mutation name') or mapMutations helper to map component methods to store.commit calls. For example, the usage of mapMutations helper on counter example would be as below,

    ```
    import { mapMutations } from 'vuex'
    
    export default {
      methods: {
        ...mapMutations([
          'increment', // map `this.increment()` to `this.$store.commit('increment')`
    
          // `mapMutations` also supports payloads:
          'incrementBy' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
        ]),
        ...mapMutations({
          add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
        })
      }
    }
    ```

51. ### Is it mandatory to use constants for mutation types?

    No, it is not mandatory. But you might observed that State management implementations such Flux and Redux use constants for mutation types. This convention is just a preference and useful to take advantage of tooling like linters, and putting all constants in a single file allows your collaborators to get an at-a-glance view of what mutations are possible in the entire application. For example, the mutations can be declared as below,

    ```
    // mutation-types.js
    export const SOME_MUTATION = 'SOME_MUTATION'
    ```

    And you can configure them in store as follows,

    ```
    // store.js
    import Vuex from 'vuex'
    import { SOME_MUTATION } from './mutation-types'
    
    const store = new Vuex.Store({
      state: { ... },
      mutations: {
        // ES2015 computed property name feature to use a constant as the function name
        [SOME_MUTATION] (state) {
          // mutate state
        }
      }
    })
    ```

52. ### How do you perform asynchronous operations?

    In Vuex, mutations are synchronous transactions. But if you want to handle asynchronous operations then you should use actions.

    

53. mutations와 actions의 차이점

    \1. Mutations는 state에서 mutations를 일으키고, actions는 commit를 mutations
    \2. Actions에는 mutations와 달리 임의적인 비동기 작업이 포함될 수 있습니다.