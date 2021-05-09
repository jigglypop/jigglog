---
path: "/프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Vue(1)/"
category: "기술 면접"
tags: ["프론트엔드", "개발자", "면접", "기술면접", "Vue"]
title: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Vue(1)"
date: "2021-04-15T01:00:00.000Z"
summary: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Vue(1)"
images: ["images/2.jpg"]
---

> 프론트 엔드 면접 질문용(Vue) 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요





1. ### VueJS란 무엇인가

   **Vue.js**는 사용자 인터페이스를 만들기 위한 진보적인 프레임워크입니다. 핵심 라이브러리는 `뷰 레이어`만 초점을 맞추어, 다른 라이브러리나 기존 프로젝트와의 통합이 쉽습니다.

2. ### VueJS의 주요 특징은

   아래의 항목들은 VueJS의 주요 특징들입니다.

   1. **가상 DOM(Virtual DOM):** VueJS에서는 ReactJS, Ember 프레임워크와 유사하게 가상 DOM을 사용합니다. 가상 DOM은 원본 HTML DOM을 표현하는 메모리 상의 가벼운 DOM 트리로, 원본 DOM에 영향을 미치지 않고 업데이트를 할 수 있습니다.
   2. **컴포넌트(Components):** VueJS 어플리케이션에서 재사용할 수 있는 엘리먼트들을 만들 수 있습니다.
   3. **템플릿(Templates):** VueJS는 Vue 인스턴스 데이터와 DOM에 접근할 수 있는 HTML 기반의 템플릿을 제공합니다.
   4. **라우팅(Routing):** 페이지의 전환은 vue-router를 이용합니다.
   5. **저용량(Light weight):** VueJS는 다른 프레임워크와 비교해 저용량입니다.

3. ### VueJS의 라이프사이클(lifecycle) 함수는

   라이프사이클 훅(Lifecycle hook)은 사용중인 라이브러리가 어떤 순서로 동작하는지를 알려주는 역할을 합니다. 훅을 이용해 컴포넌트가 언제 생성되고, 언제 DOM에 추가되며, 언제 업데이트되고 언제 사라지는지 알 수 있습니다. 아래의 다이어그램을 통해 VueJS의 전반적인 라이프사이클을 확인할 수 있습니다.

   <img src="https://github.com/sudheerj/vuejs-interview-questions/raw/master/images/vuelifecycle.png" alt="img" style="zoom: 50%;" />

   1. **Creation(초기화):** Create 훅은 컴포넌트가 DOM에 추가되기 전에 실행되는 단계입니다. 클라이언트와 서버가 렌더링 단계 전에 컴포넌트에 설정해야 할 것들이 있을 때 사용하는 단계입니다. 다른 훅과는 다르게, Create 훅은 서버 사이드 렌더링에서도 지원되는 훅입니다.

      1. beforeCreate: `beforeCreate` 훅은 컴포넌트 초기화 단계 중 가장 처음으로 실행됩니다. 이 훅에서는 컴포넌트의 data를 관찰하고, 이벤트를 초기화합니다. 이 단계에서 data는 아직까지 반응적이지 않으며, 컴포넌트의 라이프사이클에서 발생하는 이벤트 역시 설정되지 않은 상태입니다.

      ```javascript
          new Vue({
            data: {
             count: 10
            },
            beforeCreate: function () {
              console.log('Nothing gets called at this moment')
              // `this` points to the view model instance
              console.log('count is ' + this.count);
            }
          })
             // count is undefined
      ```

      1. created: `created` 훅은 Vue 인스턴스가 이벤트를 설정하고 data를 관찰할 때 발생합니다. 이 단계에서 템플릿은 아직 마운트되거나 렌더링되지 않았지만, 이벤트들이 활성화되며 data에 반응적으로 접근하는 것이 가능합니다.

      ```javascript
        new Vue({
          data: {
           count: 10
          },
          created: function () {
            // `this` points to the view model instance
            console.log('count is: ' + this.count)
          }
        })
           // count is: 10
      ```

      **주의:** Create 훅에서는 DOM에 직접 접근하거나 마운트할 엘리먼트(`this.$el`)에 직접 접근할 수 없다는 점을 기억하세요.

   2. **Mounting(DOM 추가):** Mount 훅은 가장 많이 사용되는 단계로, 컴포넌트가 렌더링되기 직전이나 직후에 컴포넌트에 접근할 수 있는 단계입니다.

      1. beforeMount: `beforeMount` 훅은 컴포넌트가 DOM에 추가되기 직전에 실행되는 훅입니다.

      ```javascript
        new Vue({
          beforeMount: function () {
            // `this` points to the view model instance
            console.log(`this.$el is yet to be created`);
          }
        })
      ```

      1. mounted: `mounted` 훅은 반응적인 data, 템플릿, 렌더링된 DOM(`this.$el`) 모두에 접근할 수 있어서 가장 많이 사용되는 훅입니다. 흔히 컴포넌트에서 필요한 데이터를 외부에서 가져오는(fetch) 용도로 많이 사용됩니다.

      ```vue
      <div id="app">
          <p>I’m text inside the component.</p>
      </div>
        new Vue({
          el: '#app',
          mounted: function() {
            console.log(this.$el.textContent); // I'm text inside the component.
          }
        })
      ```

   3. **Updating (재 렌더링):** Update 훅은 컴포넌트 내부의 반응적인 속성이 변했거나, 그 외의 것들이 재 렌더링을 일으킬 때 실행되는 단계입니다.

      1. beforeUpdate: `beforeUpdate` 훅은 컴포넌트의 data가 변경되어 업데이트 사이클이 시작될 때 실행됩니다.

      ```javascript
      <div id="app">
        <p>{{counter}}</p>
      </div>
      ...// rest of the code
        new Vue({
          el: '#app',
          data() {
            return {
              counter: 0
            }
          },
           created: function() {
            setInterval(() => {
              this.counter++
            }, 1000)
          },
      
          beforeUpdate: function() {
            console.log(this.counter) // Logs the counter value every second, before the DOM updates.
          }
        })
      ```

      1. updated: `updated` 훅은 컴포넌트의 data가 변하여 재 렌더링이 일어난 후에 실행됩니다.

      ```
      <div id="app">
        <p ref="dom">{{counter}}</p>
      </div>
      ...//
        new Vue({
          el: '#app',
          data() {
            return {
              counter: 0
            }
          },
           created: function() {
            setInterval(() => {
              this.counter++
            }, 1000)
          },
          updated: function() {
            console.log(+this.$refs['dom'].textContent === this.counter) // Logs true every second
          }
        })
      ```

   4. **Destruction(해체):** Destruction 훅은 컴포넌트를 더 이상 사용하지 않을 때 사용하는 단계입니다.

      1. beforeDestroy: `beforeDestroy` 훅은 컴포넌트가 해체되기 직전에 실행됩니다. 이 훅은 반응적인 이벤트들이나 data들을 해체하는 훅으로 적합합니다. 이 단계에서 컴포넌트는 여전히 문제없이 잘 동작합니다.

      ```
      new Vue ({
        data() {
          return {
            message: 'Welcome VueJS developers'
          }
        },
      
        beforeDestroy: function() {
          this.message = null
          delete this.message
        }
      })
      ```

      1. destroyed: `destroyed` 훅은 컴포넌트가 해체되고 난 직후에 호출됩니다. 모든 지시자들의 바인딩이 해제되었으며, 이벤트 리스너가 제거된 상태입니다.

      ```
      new Vue ({
          destroyed: function() {
            console.log(this) // Nothing to show here
          }
        })
      ```



### 조건부 지시자(conditional directives)

---



* 조건에 따라 엘리먼트를 보여주거나 숨길 수 있는 지시자들을 제공합니다. 사용할 수 있는 지시자
*  **v-if, v-else, v-else-if and v-show**



#### 1) v-if

 v-if 지시자는 조건에 따라 DOM 엘리먼트를 추가하거나 제거합니다. 예를 들어, 아래의 버튼은 `isLoggedIn`의 값이 `false`라면 나타나지 않습니다.

```
<button v-if="isLoggedIn">Logout</button>
```

엘리먼트들을 `<template>` 태그로 감싼다면, 하나의 v-if만으로 여러 엘리먼트들의 조건을 설정할 수 있습니다. 예를 들어, 아래와 같이 `label`과 `button` 태그를 하나의 조건 지시자로 제어할 수 있습니다.

```
<template v-if="isLoggedIn">
  <label> Logout </button>
  <button> Logout </button>
</template>
```



#### 2) v-else

프로그래밍 언어에서 `if`의 조건에 맞지 않는 경우 `else`로 넘어가는 것처럼, v-else 지시자는 인접한 v-if 지시자 또는 v-else-if 지시자가 `false`일 때만 그 내용이 나타납니다. 이 지시자에는 조건을 지정할 필요가 없습니다. 예를 들어, 아래의 예시는 `isLoggedIn`이 `false`일 때(즉 로그인 된 상태가 아닐 때), v-else를 이용해 로그인 버튼을 보여줍니다.

```
<button v-if="isLoggedIn"> Logout </button>
<button v-else> Log In </button>
```

#### 3) v-else-if

*  v-else-if 지시자는 v-if 이외의 다른 조건을 추가로 확인해야 할 때 사용합니다. 예를 들어, v-else-if 지시자를 이용해 `ifLoginDisabled`의 값이 `true`일 때는 로그인 버튼 대신 텍스트를 보여줄 수 있습니다.

```
<button v-if="isLoggedIn"> Logout </button>
<label v-else-if="isLoginDisabled"> User login disabled </label>
<button v-else> Log In </button>
```

#### 4) v-show

v-show 지시자는 v-if 지시자와 비슷한 기능을 하지만, DOM에 엘리먼트가 추가된 상태에서 CSS의 display 값을 이용해 보여주고 숨김을 결정합니다. v-show 지시자는 조건문이 자주 토글될 때 권장됩니다.

```
<span v-show="user.name">Welcome user,{{user.name}}</span>
```



#### 5) v-show와 v-if의 차이점



* v-if는 조건이 일치하는 엘리먼트만 DOM에 렌더링하는 반면, v-show는 모든 엘리먼트를 DOM에 렌더링한 후 CSS를 이용해 내용을 보여주거나 숨깁니다.

* v-if와 v-else-if에서는 v-else를 사용할 수 있지만, v-show에서는 사용할 수 없습니다.

* v-if는 토글할 때 높은 렌더링 비용이 들지만, v-show는 초기의 렌더링 작업에서 높은 비용이 듭니다. 즉, v-show는 요소를 자주 켜고 끄는 경우 성능 상의 이점이 있지만, 초기 렌더링 작업에서는 v-if가 더 효율적입니다.

* v-if는 `<template>`태그에서 사용할 수 있지만 v-show는 사용할 수 없습니다.



## v-for

---



### v-for를 쓰는 목적은

v-for 지시자는 배열이나 객체를 순환하면서 반복적인 렌더링을 가능하게 합니다.

1. 배열의 경우:

```
<ul id="list">
  <li v-for="(item, index) in items">
    {{ index }} - {{ item.message }}
  </li>
</ul>

var vm = new Vue({
  el: '#list',
  data: {
    items: [
      { message: 'John' },
      { message: 'Locke' }
    ]
  }
})
```

자바스크립트 순환문과 유사하게, `in` 외에도 `of`를 사용할 수 있습니다.

1. 객체의 경우:

```
<div id="object">
  <div v-for="(value, key, index) in user">
    {{ index }}. {{ key }}: {{ value }}
  </div>
</div>

var vm = new Vue({
  el: '#object',
  data: {
    user: {
      firstName: 'John',
      lastName: 'Locke',
      age: 30
    }
  }
})
```

1. ### Vue 인스턴스란

   모든 Vue 어플리케이션은 Vue 함수를 이용해 Vue 인스턴스를 생성하면서 동작합니다. 일반적으로 `vm`(ViewModel의 축약형)이라는 변수를 이용해 Vue 인스턴스를 참조합니다. 아래와 같은 방법으로 Vue 인스턴스를 생성할 수 있습니다.

   ```
   var vm = new Vue({
     // options
   })
   ```

   

2. ### 여러 엘리먼트들을 한 번에 조건부로 나타내는 방법은

   렌더링에 영향을 미치지 않는 `<template>` 태그에 **v-if** 지시자를 적용함으로써 여러 엘리먼트들을 한 번에 조건부로 나타낼 수 있습니다. 예를 들어, 아래와 같이 유효한 사용자인 경우에 한해서 사용자 정보를 보여줄 수 있습니다.

   ```
   <template v-if="condition">
     <h1>Name</h1>
     <p>Address</p>
     <p>Contact Details</p>
   </template>
   ```

3. ### key 속성을 이용해 엘리먼트를 재사용하는 방법은

   Vue는 가능한 한 엘리먼트를 효율적으로 렌더링하려 합니다. 그래서 엘리먼트를 처음부터 다시 만들기보다는 재사용하려 합니다. 그러나 이는 몇 가지 상황에서 문제를 일으킬 수 있습니다. 예를 들어, `input` 엘리먼트를 `v-if`와 `v-else` 블록 양쪽에서 사용하면, `input` 엘리먼트는 조건문에 따라 바뀌지 않고 최초에 렌더링 된 엘리먼트의 상태를 유지하고 있습니다.

   ```
   <template v-if="loginType === 'Admin'">
     <label>Admin</label>
     <input placeholder="Enter your ID">
   </template>
   <template v-else>
     <label>Guest</label>
     <input placeholder="Enter your name">
   </template>
   ```

   이 경우에서 `input` 엘리먼트는 재사용되어서는 안 되기 때문에, **key** 속성을 이용해 두 개의 `input` 엘리먼트를 별개의 것으로 취급하도록 선언할 수 있습니다.

   ```
       <template v-if="loginType === 'Admin'">
         <label>Admin</label>
         <input placeholder="Enter your ID" key="admin-id">
       </template>
       <template v-else>
         <label>Guest</label>
         <input placeholder="Enter your name" key="user-name">
       </template>
   ```

   위의 경우는 두 개의 `input` 엘리먼트가 별개의 것으로 취급되며 서로에게 어떤 영향도 끼치지 않습니다.

4. ### 같은 엘리먼트에서 v-for와 v-if를 함께 쓰면 안 되는 이유는

   v-for 지시자는 v-if 보다 더 높은 우선 순위를 갖고 있기 때문에, 한 엘리먼트 내에서 v-for와 v-if를 함께 쓰는 것은 권장되지 않습니다. 일반적으로 다음과 같은 이유 때문에 두 지시자를 함께 쓰곤 합니다.

   1. 리스트의 요소를 필터링하기 위해 예를 들어, v-if 지시자를 이용해 리스트에 있는 아이템을 필터링하고 싶은 경우입니다.

   ```
   <ul>
     <li
       v-for="user in users"
       v-if="user.isActive"
       :key="user.id"
     >
       {{ user.name }}
     <li>
   </ul>
   ```

   이 경우는 아래와 같이 사전에 computed 속성을 이용해 필터링된 리스트를 만들어 사용할 수 있습니다.

   ```
   computed: {
     activeUsers: function () {
       return this.users.filter(function (user) {
         return user.isActive
       })
     }
   }
   ...... //
   ...... //
   <ul>
     <li
       v-for="user in activeUsers"
       :key="user.id">
       {{ user.name }}
     <li>
   </ul>
   ```

   1. 리스트 자체가 숨겨져야 할 때 예를 들어, v-if를 이용해 반복되는 리스트를 숨기고 싶은 경우입니다.

   ```
   <ul>
     <li
       v-for="user in users"
       v-if="shouldShowUsers"
       :key="user.id"
     >
       {{ user.name }}
     <li>
   </ul>
   ```

   이 경우는 아래와 같이 조건문을 상위 엘리먼트로 옮김으로써 해결할 수 있습니다.

   ```
   <ul v-if="shouldShowUsers">
     <li
       v-for="user in users"
       :key="user.id"
     >
       {{ user.name }}
     <li>
   </ul>
   ```

5. ### v-for에서 key 속성이 필요한 이유

   Vue에서 개별 DOM 노드들을 추적하고 기존 엘리먼트의 재사용/재정렬을 위해, v-for의 요소에 고유한 key 속성을 제공해야 합니다. key에 대한 이상적인 값은 각 항목을 식별할 수 있는 고유한 ID입니다.

   ```
   <div v-for="item in items" :key="item.id">
     {{item.name}}
   </div>
   ```

   반복되는 DOM 내용이 단순한 경우나 의도적인 성능 향상을 위해 기본 동작에 의존하지 않는 경우를 제외하면, 가능하면 언제나 v-for에 key를 추가하는 것이 좋습니다. **Note:** 객체나 배열처럼, 기본 타입(Primitive value)이 아닌 값을 키로 사용해서는 안됩니다. 문자열이나 숫자를 사용하세요.

6. ### 배열을 변화시키는 함수(Mutation method)란

   이름에서 볼 수 있듯, 배열을 변화시키는 함수(mutation methods)는 원본 배열을 변경시킵니다. 아래의 함수는 뷰(view) 업데이트를 일으킵니다.

   1. push()
   2. pop()
   3. shift()
   4. unshift()
   5. splice()
   6. sort()
   7. reverse()

   예를 들어, 아래와 같이 `todos` 배열에 `push` 함수를 실행시키면 뷰 업데이트가 일어납니다.

   ```
   vm.todos.push({ message: 'Baz' })
   ```

7. ### 배열을 대체하는 함수(Non-mutation method)란

   배열을 대체하는 함수는 원본 배열을 수정하지 않고, 항상 새로운 배열을 반환합니다. 아래의 함수는 배열을 대체하는 함수입니다.

   1. filter()
   2. concat()
   3. slice()

   예를 들어, 아래와 같이 `status` 속성에 따라 `todos` 배열을 필터링한 새로운 배열을 반환받을 수 있습니다.

   ```
   vm.todos = vm.todos.filter(function (todo) {
     return todo.status.match(/Completed/)
   })
   ```

   Vue가 DOM을 효율적으로 재사용하기 때문에, 전체 리스트가 새로 렌더링되지는 않습니다.

8. ### 배열 변경을 탐지할 때 주의할 점

   Vue는 아래의 두 가지 경우의 변경 사항을 감지할 수 없습니다.

   1. 인덱스로 배열에 있는 항목을 직접 할당하는 경우

   ```
   vm.todos[indexOfTodo] = newTodo
   ```

   1. 배열의 길이를 수정하는 경우

   ```
   vm.todos.length = todosLength
   ```

   이는 `set`과 `splice` 함수를 이용해 해결할 수 있습니다.

   **첫 번째 경우**

   ```
   // Vue.set
   Vue.set(vm.todos, indexOfTodo, newTodoValue)
   ```

   ```
   // Array.prototype.splice
   vm.todos.splice(indexOfTodo, 1, newTodoValue)
   ```

   **두 번째 경우**

   ```
   vm.todos.splice(todosLength)
   ```

9. ### 객체 변경을 탐지할 때 주의할 점

   Vue는 추가되거나 삭제된 속성에 반응형으로 접근할 수 없습니다.

   ```
   var vm = new Vue({
     data: {
       user: {
         name: 'John'
       }
     }
   })
   
   // `vm.name` is now reactive
   
   vm.email = john@email.com // `vm.email` is NOT reactive
   ```

   이 경우는 `Vue.set(object, key, value)`나 `Object.assign()`를 이용함으로써 반응형 속성을 추가할 수 있습니다.

   ```
   Vue.set(vm.user, 'email', john@email.com);
   ```

   ```
   vm.user = Object.assign({}, vm.user, {
     email: john@email.com
   })
   ```

10. ### v-for를 특정 횟수만큼 반복하는 방법은?

    `v-for` 지시자에 정수를 사용해 특정 횟수만큼 반복해 렌더링 할 수 있습니다.

    ```
    <div>
      <span v-for="n in 20">{{ n }} </span>
    </div>
    ```

    이 경우 1부터 20까지 숫자가 출력됩니다.

11. ### v-for로 템플릿을 반복하는 방법은

    `<template>`에서 v-if를 사용한 것과 유사하게, `<template>`에서 v-for 문법을 사용할 수 있습니다.

    ```
    <ul>
      <template v-for="todo in todos">
        <li>{{ todo.title }}</li>
        <li class="divider"></li>
      </template>
    </ul>
    ```

12. ### 이벤트 핸들러를 사용하는 방법은?

    VueJS에서는 순수 자바스크립트와 유사하게 이벤트 핸들러를 사용할 수 있습니다. 함수에서 `$event` 변수를 호출해 사용할 수 있습니다.

    ```
    <button v-on:click="show('Welcome to VueJS world', $event)">
      Submit
    </button>
    
    methods: {
      show: function (message, event) {
        // now we have access to the native event
        if (event) event.preventDefault()
        console.log(message);
      }
    }
    ```

13. ### Vue에서 이벤트 수식어(Event modifier)란?

    일반적으로 자바스크립트에서는 이벤트 핸들러 내부에서 `event.preventDefault()` 또는 `event.stopPropagation()`를 제공합니다. Vue의 메소드 내부에서도 이 작업을 할 수 있지만, DOM에서 발생한 이벤트와 메소드의 로직은 별개로 구분하는 것이 좋습니다.

    이 문제를 해결하기 위해, Vue는 `v-on` 이벤트에 이벤트 수식어를 제공합니다. 수식어는 점으로 표시된 접미사 입니다.

    1. `.stop`
    2. `.prevent`
    3. `.capture`
    4. `.self`
    5. `.once`
    6. `.passive`

    `.stop` 수식어를 예로 들어보겠습니다.

    ```
    <!-- the click event's propagation will be stopped -->
    <a v-on:click.stop="methodCall"></a>
    ```

    수식어는 연속해서 사용할 수 있습니다.

    ```
    <!-- modifiers can be chained -->
    <a v-on:click.stop.prevent="doThat"></a>
    ```

14. ### 키 수식어(Key modifiers)란?

    Vue는 키보드 이벤트를 제어하기 위해 `v-on` 지시자에 키 수식어를 제공합니다.

    ```
    <!-- only call `vm.show()` when the `keyCode` is 13 -->
    <input v-on:keyup.13="show">
    ```

    모든 키 코드를 외우는 것은 어렵기 때문에, Vue에서는 자주 사용되는 키들은 별칭을 제공하고 있습니다.

    1. `.enter`
    2. `.tab`
    3. `.delete` (“Delete”와 “Backspace” 포함)
    4. `.esc`
    5. `.space`
    6. `.up`
    7. `.down`
    8. `.left`
    9. `.right`

    위 예시의 키 코드는 아래와 같이 별칭으로 다시 쓸 수 있습니다.

    ```
    <input v-on:keyup.enter="submit">
    // (OR)
    <!-- with shorthand notation-->
    <input @keyup.enter="submit">
    ```

    **키 코드 이벤트의 사용은 최신 브라우저에서는 지원되지 않을 수 있습니다.**

15. ### 키 수식어를 커스터마이징하는 방법은?

    전역 `config.keyCodes` 객체를 통해 키 수식어를 커스터마이징할 수 있습니다. 여기에는 몇 가지 규칙들이 있습니다.

    1. 카멜 케이스(camelCase)를 대신 쌍따옴표로 감싸진 케밥 케이스(Kebab-case)를 사용해야 합니다.
    2. 배열을 이용해 한 번에 여러 값들을 정의할 수 있습니다.

    ```
    Vue.config.keyCodes = {
      f1: 112,
      "media-play-pause": 179,
      down: [40, 87]
    }
    ```

16. ### 시스템 수식어 키(System modifier key)란?

    Vue에서는 다음 수식어를 사용해 해당 수식어 키가 눌러진 경우에만 마우스 또는 키보드 이벤트를 발생시킬 수 있습니다.

    1. `.ctrl`
    2. `.alt`
    3. `.shift`
    4. `.meta`

    아래는 컨트롤 키가 눌린 상태에서 클릭 이벤트를 활성화 하는 예시입니다.

    ```
    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">Do something</div>
    ```

17. ### 마우스 버튼 수식어(Mouse button modifier)란?

    Vue는 특정한 마우스 버튼으로 발생한 이벤트를 제어할 수 있습니다.

    1. `.left`
    2. `.right`
    3. `.middle`

    마우스 이벤트로 `.right`를 이용한 예시입니다.

    ```
     <button
       v-if="button === 'right'"
       v-on:mousedown.right="increment"
       v-on:mousedown.left="decrement"
     />
    ```

18. ### v-model의 역할은?

    `v-model` 지시자를 이용해 `input`, `textarea`, `select` 엘리먼트의 데이터를 양방향으로 제어할 수 있습니다. 아래의 `input` 엘리먼트를 살펴보세요.

    ```
    <input v-model="message" placeholder="Enter input here">
    <p>The message is: {{ message }}</p>
    ```

    `v-model`은 모든 `form` 엘리먼트에서 HTML 속성(attribute)으로 선언된 `value`, `checked` 그리고 `selected`를 무시합니다. 그 대신 Vue 인스턴스에서 `v-model`로 바인딩한 값을 이용합니다. 따라서 컴포넌트의 data에서 초기값을 선언해야 합니다.

19. ### v-model에서 지원되는 수식어는?

    `v-model` 지시자에는 세 가지 수식어가 지원됩니다.

    **1. lazy:** 기본적으로, `v-model`은 하나의 키 입력 이벤트가 발생할 때마다 data가 업데이트됩니다. 이를 방지하기 위해서는 `.lazy` 수식어를 이용합니다.

    ```
    <!-- synced after "change" instead of "input" -->
    <input v-model.lazy="msg" >
    ```

    **2. number:** `v-model`에 `.number` 수식어를 붙이면 자동적으로 사용자의 입력의 자료형이 `Number`로 변환됩니다. HTML `input` 태그의 속성이 `type="number"`일지라도 반환되는 값의 자료형은 문자열이기 때문에, 숫자 자료형이 필요하다면 `.number` 수식어를 사용해야 합니다.

    ```
    <input v-model.number="age" type="number">
    ```

    **3. trim:** `.trim` 수식어를 사용자 입력에서 처음과 끝에 들어있는 공백을 자동으로 제거해줍니다.

    ```
    <input v-model.trim="msg">
    ```

20. ### 컴포넌트(Component)란?

    컴포넌트란 **재사용 가능하면서 이름이 명명된 Vue 인스턴스**입니다. 컴포넌트는 Vue처럼 data, computed, watch, methods, 라이프사이클 옵션을 갖고 있습니다. 아래는 Vue에 전역으로 컴포넌트를 추가하는 예시입니다.

    ```javascript
    // Define a new component called button-counter
    Vue.component('button-counter', {
      template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
      data: function () {
        return {
          count: 0
        }
      },
    })
    ```

    이 컴포넌트는 전역으로 선언되었기 때문에 Vue 인스턴스에서 사용할 수 있습니다.

    ```
    <div id="app">
      <button-counter></button-counter>
    </div>
    
    var vm = new Vue({ el: '#app' });
    ```

21. ### props란?

    props는 상위 컴포넌트의 정보를 하위 컴포넌트로 전달할 수 있는 사용자 지정의 속성입니다. 상위 컴포넌트에서 전달되는 props는 하위 컴포넌트의 속성으로 여겨지며, 하위 컴포넌트에서는 props 옵션을 사용하여 수신할 것으로 예상되는 props를 명시적으로 선언해야 합니다.

    ```
    Vue.component('todo-item', {
      props: ['title'],
      template: '<h2>{{ title }}</h2>'
    })
    ```

    하위 컴포넌트에서 props가 등록되고 나면, 상위 컴포넌트에서는 사용자 지정 속성을 이용해 값을 전달할 수 있습니다.

    ```
    <todo-item title="Learn Vue conceptsnfirst"></todo-item>
    ```

22. ### 컴포넌트에서 여러 엘리먼트를 쓰려면?

    템플릿이 여러 개의 엘리먼트들로 구성되어 있을 때, **컴포넌트의 최상단 템플릿은 반드시 단일 엘리먼트로 감싸져 있어야 합니다.**

    ```
    <div class="todo-item">
      <h2>{{ title }}</h2>
      <div v-html="content"></div>
    </div>
    ```

    그렇지 않다면, `"Component template should contain exactly one root element..."`라는 에러를 발생시킵니다.

23. ### 하위 컴포넌트에서 상위 컴포넌트로 이벤트를 전달하는 방법은?

    하위 컴포넌트에서 `$event` 객체를 이용해 상위 컴포넌트로 이벤트를 발생킬 수 있습니다.

    ```
    Vue.component('todo-tem', {
      props: ['todo'],
      template: `
        <div class="todo-item">
          <h3>{{ todo.title }}</h3>
          <button v-on:click="$emit('increment-count', 1)">
            Add
          </button>
          <div v-html="todo.description"></div>
        </div>
      `
    })
    ```

    이 때 상위 컴포넌트에서는 `v-on` 지시자를 이용해 하위 컴포넌트에서 명명한 이벤트와 값을 사용할 수 있습니다.

    ```
    <ul v-for="todo in todos">
     <li>
       <todo-item
         v-bind:key="todo.id"
         v-bind:todo="todo"
         v-on:increment-count="total += 1">
       </todo-item>
     </li>
    </ul>
    <span> Total todos count is {{total}}</span>
    ```

24. ### 사용자 정의의 input 컴포넌트에서 v-model을 사용하는 법은?

    사용자 정의 input 컴포넌트에서도 `v-model`을 활용할 수 있습니다. 해당 컴포넌트의 `input`은 아래 규칙들을 준수해야 합니다.

    1. `input`의 `value`를 props를 이용해 바인딩합니다.
    2. 새로운 값이 입력되는 `input` 이벤트 발생 시, 해당 값을 `emit`하여 상위 컴포넌트로 이벤트를 전달합니다.

    ```
    Vue.component('custom-input', {
      props: ['value'],
      template: `
        <input
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
        >
      `
    })
    ```

    이 경우 상위 컴포넌트에서 `v-model`을 이용해 값을 바인딩할 수 있습니다.

    ```
    <custom-input v-model="searchInput"></custom-input>
    ```

25. ### slots이란?

    Vue에서는 `<slot>`을 이용해 상위 컴포넌트에서 하위 컴포넌트 내부에 사용자 정의의 컨텐츠를 집어 넣을 수 있습니다. 하위 컴포넌트에 `<slot>`을 이용해 문구를 동적으로 넣을 수 있는 컴포넌트를 만들어봅시다.

    ```
    Vue.component('alert', {
      template: `
        <div class="alert-box">
          <strong>Error!</strong>
          <slot></slot>
        </div>
      `
    })
    ```

    `<alert>` 태그 안에 넣은 값은 컴포넌트 내부의 `<slot>`의 컨텐츠로 들어가게 됩니다.

    ```
    <alert>
      There is an issue with in application.
    </alert>
    ```

26. ### 컴포넌트를 전역 등록하는 방법은?

    컴포넌트를 전역으로 등록하게 되면 모든 Vue 인스턴스에서 해당 컴포넌트를 사용할 수 있습니다. 컴포넌트는 `Vue.component()` 함수를 이용해 전역 등록할 수 있습니다.

    ```
    Vue.component('my-component-name', {
      // ... options ...
    })
    ```

    Vue 인스턴스에 여러 개의 컴포넌트를 전역 등록해봅시다.

    ```
    Vue.component('component-a', { /* ... */ })
    Vue.component('component-b', { /* ... */ })
    Vue.component('component-c', { /* ... */ })
    
    new Vue({ el: '#app' })
    ```

    위의 컴포넌트들은 Vue 인스턴스 내에서 사용될 수 있습니다.

    ```
    <div id="app">
      <component-a></component-a>
      <component-b></component-b>
      <component-c></component-c>
    </div>
    ```

    전역으로 등록한 컴포넌트들은 하위 컴포넌트에서도 사용이 가능합니다.

27. ### 컴포넌트의 지역 등록이 필요한 이유는?

    전역 등록으로 인해 사용되지 않는 컴포넌트가 빌드 시에 여전히 남아있을 수 있습니다. 이는 불필요한 자바스크립트를 만들죠. 이를 방지하기 위해, 아래와 같이 컴포넌트를 지역 등록할 수 있습니다.

    1. 우선 자바스크립트 객체로 컴포넌트를 정의합니다.

    ```
    var ComponentA = { /* ... */ }
    var ComponentB = { /* ... */ }
    var ComponentC = { /* ... */ }
    ```

    지역 등록한 컴포넌트는 다른 컴포넌트의 하위에서는 사용할 수 없습니다. 이 경우, `components` 속성으로 컴포넌트를 추가해 사용할 수 있습니다.

    ```
    var ComponentA = { /* ... */ }
    
    var ComponentB = {
      components: {
        'component-a': ComponentA
      },
      // ...
    }
    ```

    1. Vue 인스턴스에서 `components` 속성에 사용할 컴포넌트들을 정의할 수 있습니다.

    ```
    new Vue({
      el: '#app',
      components: {
        'component-a': ComponentA,
        'component-b': ComponentB
      }
    })
    ```

28. ### 모듈 시스템에서 전역 등록과 지역 등록의 차이점은?

    **지역 등록**의 경우, 각 컴포넌트를 디렉토리에 생성하고 각각의 컴포넌트는 다른 컴포넌트 안에서 `import` 하여 사용하는 것이 권장됩니다. 만약 여러분들이 컴포넌트 C에서 컴포넌트 A와 B를 사용하고 싶다면 아래와 같은 설정을 해야 합니다.

    ```
    import ComponentA from './ComponentA'
    import ComponentB from './ComponentC'
    
    export default {
      components: {
        ComponentA,
        ComponentB
      }
    }
    ```

    위의 경우 컴포넌트 A와 컴포넌트 B는 컴포넌트 C의 템플릿에서 사용할 수 있습니다.

    **전역 등록**의 경우, 공통적으로 사용되는 컴포넌트를 각각의 파일에서 `export`해야합니다. 하지만 `webpack`과 같은 유명한 번들러들은 `require.context`라는 문법을 이용해서 컴포넌트를 쉽게 전역적으로 등록할 수 있게 해줍니다.

    ```
    import Vue from 'vue'
    import upperFirst from 'lodash/upperFirst'
    import camelCase from 'lodash/camelCase'
    
    const requireComponent = require.context(
      // The relative path of the components folder
      './components',
      // Whether or not to look in subfolders
      false,
      // The regular expression used to match base component filenames
      /Base[A-Z]\w+\.(vue|js)$/
    )
    
    requireComponent.keys().forEach(fileName => {
      // Get component config
      const componentConfig = requireComponent(fileName)
    
      // Get PascalCase name of component
      const componentName = upperFirst(
        camelCase(
          // Strip the leading `./` and extension from the filename
          fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
      )
    
      // Register component globally
      Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
      )
    })
    ```



## Prop

---



1. ### Prop 타입의 종류는?

   `props`에는 타입을 지정할 수도, 지정하지 않을 수도 있습니다. 하지만 일반적으로 타입을 지정하면 다른 개발자들이 해당 코드에서 잘못된 타입의 `props`를 넘겨주는 실수를 줄여주기 때문에, 가능하면 타입을 지정해주는 것이 좋습니다.

   ```
   props: {
     name: String,
     age: Number,
     isAuthenticated: Boolean,
     phoneNumbers: Array,
     address: Object
   }
   ```

   `props` 객체의 속성과 값을 선언함으로서, 타입을 선언할 수 있습니다.

2. ### props에 의한 데이터 흐름은?

   모든 `props`는 하위 속성과 상위 속성 사이에서 단방향 바인딩을 형성합니다. 즉, 상위 속성이 변경되는 것은 하위 속성에게 전달되지만, 그 반대는 안됩니다. 원칙적으로, 하위 컴포넌트에서는 상위 컴포넌트에서 받은 `props`을 수정해서는 안됩니다.

   하위 컴포넌트에서 `props` 수정의 필요성을 느낄 수 있는 몇 가지 경우가 있는데, 아래와 같은 방법으로 해결할 수 있습니다.

   1. 상위 컴포넌트의 `props`는 하위 컴포넌트의 초기값 설정에만 사용되고 그 이후에는 로컬 데이터 속성으로 활용되는 경우:

   이 경우, 하위 컴포넌트에서 사용할 속성을 `data`에 선언하고, 그 값을 `props`로 초기화하면 됩니다.

   ```
   props: ['defaultUser'],
   data: function () {
     return {
       username: this.defaultUser
     }
   }
   ```

   1. 상위 컴포넌트에서 `props`로 전해주는 값이 수정되는 경우

   이 경우, 하위 컴포넌트에서 `computed` 속성을 이용해 `props`의 값이 바뀔 때마다 신규 값을 얻을 수 있습니다.

   ```
   props: ['environment'],
   computed: {
     localEnvironment: function () {
       return this.environment.trim().toUpperCase()
     }
   }
   ```

3. ### Props가 아닌 속성은?

   `props`가 아닌 속성이란, 컴포넌트에 전달되기는 하지만 해당 `props`가 하위 컴포넌트에서 정의되지는 않은 속성을 말합니다. 만약 `data-tooltip` 속성을 요구하는 컴포넌트를 사용하고 있다고 가정해봅시다. 이 속성을 컴포넌트 인스턴스에 다음과 같이 추가 할 수 있습니다.

   ```
   <custom-input data-tooltip="Enter your input" />
   ```

   상위 컴포넌트에서부터 `props`가 아닌 속성을 넘겨주려 한다면, 하위 컴포넌트에서 같은 이름을 가진 속성은 덮어씌워집니다. 하지만 `class`나 `style`같은 `props`는 예외로, 이 값들은 하위 컴포넌트와 합쳐집니다.

   ```
   //Parent component
   <custom-input class="custom-class" />
   
   //Child component
   <input type="date" class="date-control">
   ```

4. ### props를 검증하는 방법은?

   Vue에서는 타입, 필수 여부, 디폴트 값 등 `props`의 유효성 검증을 제공하고 있습니다. 아래와 같이 `props`를 검증하는 규칙이 속성으로 담긴 객체를 제공하면 됩니다.

   ```
   Vue.component('user-profile', {
     props: {
       // Basic type check (`null` matches any type)
       age: Number,
       // Multiple possible types
       identityNumber: [String, Number],
       // Required string
       email: {
         type: String,
         required: true
       },
       // Number with a default value
       minBalance: {
         type: Number,
         default: 10000
       },
       // Object with a default value
       message: {
         type: Object,
         // Object or array defaults must be returned from
         // a factory function
         default: function () {
           return { message: 'Welcome to Vue' }
         }
       },
       // Custom validator function
       location: {
         validator: function (value) {
           // The value must match one of these strings
           return ['India', 'Singapore', 'Australia'].indexOf(value) !== -1
         }
       }
     }
   })
   ```



## v-model

---



### 컴포넌트에서 v-model을 사용자 정의하는 방법은?

일반적인 컴포넌트에서 `v-model` 지시자는 **value**를 `props`로 사용하고 **input**을 이벤트로 사용하지만, 체크 박스나 라디오 버튼같은 일부 입력 타입은 다른 목적으로 `value` 속성을 사용할 수 있습니다. 이런 경우에는 `v-model`을 커스터마이징해서 사용하는 것이 좋습니다.

```vue
Vue.component('custom-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
```

이 컴포넌트에서 `v-model`은 다음과 같이 사용할 수 있습니다.

```
<custom-checkbox v-model="selectFramework"></custom-checkbox>
```

`selectFramework` 속성은 `props` 중 `checked`로 넘어갈 것이고, 체크 박스 컴포넌트에서 값이 변경되면 이벤트를 발생시킬 것입니다.

1. ### 트랜지션 효과를 넣을 수 있는 방법은?

   Vue에서는 항목들이 DOM에서 추가, 갱신 또는 삭제될 때, 다양한 방법으로 트랜지션 효과를 입힐 수 있습니다.

   1. CSS 트랜지션과 애니메이션을 위한 클래스를 자동으로 적용
   2. Animate.css와 같은 써드파티 CSS 애니메이션 라이브러리 통합
   3. 트랜지션 훅 중에 JavaScript를 사용하여 DOM을 직접 조작
   4. Velocity.js와 같은 써드파티 JavaScript 애니메이션 라이브러리 통합



## Vue Router

----



##### Vue Router

Vue Router는 Vue에서 동작하는 공식적인 라우팅 라이브러리입니다.

1. 중첩된 라우트/뷰 매핑
2. 모듈화된, 컴포넌트 기반의 라우터 설정
3. 라우터 파라미터, 쿼리, 와일드카드
4. Vue의 트랜지션 시스템을 이용한 트랜지션 효과
5. 세밀한 네비게이션 컨트롤
6. active CSS 클래스를 자동으로 추가해주는 링크
7. HTML5 히스토리 모드 또는 해시 모드(IE9에서 자동으로 폴백)
8. 사용자 정의 가능한 스크롤 동작

1. ### Vue Router를 사용하는 방법은?

   Vue를 사용하고 있다면, 쉽게 Vue Router를 통합할 수 있습니다.

   **Step 1:** 먼저 템플릿에서 `<router-link>`태그를 설정합니다.

   ```
   <script src="https://unpkg.com/vue/dist/vue.js"></script>
   <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
   
   <div id="app">
     <h1>Welcome to Vue routing app!</h1>
     <p>
       <!-- use router-link component for navigation using `to` prop. It rendered as an `<a>` tag -->
       <router-link to="/home">Home</router-link>
       <router-link to="/services">Services</router-link>
     </p>
     <!-- route outlet in which component matched by the route will render here -->
     <router-view></router-view>
   </div>
   ```

   **Step 2:** `main.js`에서 Vue와 Vue 라우터를 `import`하고 `Vue.use()`함수를 이용해 호출합니다.

   ```
   import Vue from 'vue';
   import VueRouter from 'vue-router';
   
   Vue.use(VueRouter)
   ```

   **Step 3:** 라우트 컴포넌트를 정의하거나 `import`합니다.

   ```
   const Home = { template: '<div>Home</div>' }
   const Services = { template: '<div>Services</div>' }
   ```

   **Step 4:** 라우트를 정의합니다. 각 라우트는 반드시 컴포넌트와 매핑되어야 합니다.

   ```
   const routes = [
     { path: '/home', component: Home },
     { path: '/services', component: Services }
   ]
   ```

   **Step 5:** `routes` 옵션과 함께 router 인스턴스를 만듭니다.

   ```
   const router = new VueRouter({
     routes // short for `routes: routes`
   })
   ```

   **Step 6:** 루트 Vue 인스턴스를 만들고 `mount`합니다.

   ```
   const app = new Vue({
     router
   }).$mount('#app')
   ```

   이제 Vue 어플리케이션에서 다른 페이지(Home, Services)로 네비게이트 할 수 있습니다.

2. ### 동적 라우트 매칭이란?

   주어진 패턴을 가진 라우트를 동일한 컴포넌트에 매핑해야하는 경우가 자주 있습니다. 동적 세그먼트를 이용해 `/user/john/post/123`나 `/user/jack/post/235`와 같이 매핑된 URL을 가지는 컴포넌트를 만들어봅시다.

   ```javascript
   const User = {
     template: '<div>User {{ $route.params.name }}, PostId: {{ route.params.postid }}</div>'
   }
   
   const router = new VueRouter({
     routes: [
       // dynamic segments start with a colon
       { path: '/user/:name/post/:postid', component: User }
     ]
   })
   ```

3. ### 라우터 params를 반응적으로 만드는 방법은?

   매개 변수와 함께 라우트를 사용할 때 주의 해야할 점은 사용자가 `/user/foo`에서 `/user/bar`로 이동할 때 동일한 컴포넌트 인스턴스가 재사용된다는 것입니다. 두 라우트 모두 동일한 컴포넌트를 렌더링하므로 이전 인스턴스를 삭제 한 다음 새 인스턴스를 만드는 것보다 효율적입니다. 그러나 이는 또한 컴포넌트의 라이프 사이클 훅이 호출되지 않음을 의미합니다.

   동일한 컴포넌트의 `params` 변경 사항에 반응하려면 `$route` 객체를 보면됩니다.

   1. `watch`에서 `$route` 관찰하기:

   ```
   const User = {
     template: '<div>User {{ $route.params.name }} </div>',
     watch: {
       '$route' (to, from) {
         // react to route changes...
       }
     }
   }
   ```

   1. `beforeRouteUpdate` 네비게이션 가드를 사용하기:

   ```
   const User = {
     template: '<div>User {{ $route.params.name }} </div>',
     beforeRouteUpdate (to, from, next) {
       // react to route changes and then call next()
     }
   }
   ```

   `beforeRouteEnter` 가드에서는 `this`에 접근할 권한이 없다는 것을 기억하세요. 대신, `next` 콜백 함수를 이용해 인스턴스에 접근할 수 있습니다.

4. ### 라우트의 우선 순위는?

   동일한 URL이 여러 라우트와 일치하는 경우가 있습니다. 이 경우 일치하는 우선 순위는 라우트 정의의 순서에 따라 결정됩니다. 즉, 경로가 더 먼저 정의 될수록 우선 순위가 높아집니다.

   ```
   const router = new VueRouter({
          routes: [
            // dynamic segments start with a colon
            { path: '/user/:name', component: User } // This route gets higher priority
            { path: '/user/:name', component: Admin }
            { path: '/user/:name', component: Customer }
          ]
        })
   ```

5. ### 중첩된 라우트란?

   일반적으로 어플리케이션은 여러 단계의 중첩된 컴포넌트로 이루어져 있습니다. URL의 세그먼트 역시 중첩된 컴포넌트의 특정 구조와 일치합니다. 중첩된 아웃렛에서 컴포넌트를 렌더링하려면 `VueRouter` 생성자에서 `config`로 `children`을 설정해야 합니다.

   프로필과 포스트들이 상대적인 경로로 설정된 어플리케이션을 만들어봅시다. 매칭되는 하위 라우트가 없을 경우에 렌더링되는 라우트 컴포넌트를 설정할 수 있습니다.

   ```
   const router = new VueRouter({
     routes: [
       { path: '/user/:id', component: User,
         children: [
           {
             // UserProfile will be rendered inside User's <router-view> when /user/:id/profile is matched
             path: 'profile',
             component: UserProfile
           },
           {
             // UserPosts will be rendered inside User's <router-view> when /user/:id/posts is matched
             path: 'posts',
             component: UserPosts
           },
             // UserHome will be rendered inside User's <router-view> when /user/:id is matched
           {  path: '',
              component: UserHome },
         ]
       }
     ]
   })
   ```



## 싱글 파일 컴포넌트

---



#### 싱글 파일 컴포넌트

* 템플릿과 스타일, 로직들을 하나의 파일에 정리

```vue
<template>
    <div>
        <h1>Welcome {{ name }}!</h1>
    </div>
</template>

<script>
    module.exports = {
       data: function() {
           return {
               name: 'John'
           }
       }
    }
</script>

<style scoped>
    h1 {
        color: #34c779;
        padding: 3px;
    }
</style>
```



#### 관심사 분리(separation of concerns)

주목해야 할 중요한 점은 관심사 분리가 파일 타입 분리와 같지 않다는 것입니다. 현대적인 UI 개발에서 코드베이스를 서로 얽혀있는 세 개의 거대한 레이어로 나누는 대신, 느슨하게 결합 된 컴포넌트로 나누고 구성하는 것이 더 중요합니다. 컴포넌트 내부에서 템플릿, 로직 및 스타일이 본질적으로 결합되어 배치되면 컴포넌트의 응집력과 유지 보수성이 향상됩니다.

싱글 파일 컴포넌트에 대한 아이디어가 마음에 들지 않더라도 JavaScript와 CSS를 별도의 파일로 분리하여 핫 리로드 및 사전 컴파일 기능을 활용할 수 있습니다.

```
<template>
  <div>This section will be pre-compiled and hot reloaded</div>
</template>
<script src="./my-component.js"></script>
<style src="./my-component.css"></style>../0+.3
```



#### 싱글 파일 컴포넌트 이유

복잡한 프로젝트의 경우 또는 프론트엔드가 JavaScript 기반인 경우 단점이 분명해집니다. 싱글 파일 컴포넌트가 아닌 경우에는 아래와 같은 문제점이 있을 수 있습니다.

1. **전역 정의** 모든 구성 요소에 대해 고유한 이름을 지정하도록 강요됩니다.
2. **문자열 템플릿** 구문 강조가 약해 여러 줄로 된 HTML에 보기 안좋은 슬래시가 많이 필요합니다.
3. **CSS 지원 없음** HTML 및 JavaScript가 컴포넌트로 모듈화 되어 있으나 CSS가 빠져 있는 것을 말합니다.
4. **빌드 단계 없음** Pug (이전의 Jade) 및 Babel과 같은 전처리기가 아닌 HTML 및 ES5 JavaScript로 제한됩니다.

싱글 파일 컴포넌트는 JavaScript 기반에서 발생하는 문제점을 해결하기 위해, 별도의 `.vue` 확장자의 파일로 작성합니다.



## filter

---



### filter란?

`filter`는 텍스트 형식화를 위해 사용됩니다. 이 필터들은 자바스크립트 표현식에 파이프(`|`) 기호와 함께 추가되어야 합니다. 크게 두 가지 경우에서 사용될 수 있습니다.

1. 중괄호 보간법
2. `v-bind` 표현식

첫 글자를 대문자로 만드는 로컬 필터를 정의해봅시다.

```
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

이 필터를 중괄호 보간법 또는 `v-bind` 표현식 함께 사용할 수 있습니다.

```
<!-- in mustaches -->
{{ username | capitalize }}

<!-- in v-bind -->
<div v-bind:id="username | capitalize"></div>
```



### filter를 전역적 또는 지역적으로 만드는 법은?

1. **지역 필터(Local filters):** 지역 필터는 컴포넌트의 옵션에서 정의할 수 있습니다. 이 경우, 필터는 해당 컴포넌트에서만 사용 가능합니다.

```javascript
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

1. **전역 필터(Global filters):** Vue 인스턴스를 만들기 전에 전역적으로 필터를 정의할 수 있습니다. 이 경우 Vue 인스턴스 내의 모든 컴포넌트에서 필터를 사용할 수 있습니다.

```javascript
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```



### filter를 연속해 쓰는 방법은?

일반적으로 아래와 같이, 표현식에서 필터 뒤에 또 다른 필터를 사용할 수 있습니다.

```
{{ message | filterA | filterB | filterC ... }}
```

각각의 필터는 파이프(`|`)로 구분되며, `message`는 `filterA`의 결과가 `filterB`의 영향을 받고, 그 결과가 다시 `filterC`의 영향을 받습니다.

예를 들어, 날짜 형식의 데이터를 변경한 뒤 대문자로 변경하고 싶다면 아래와 같이 사용할 수 있습니다.

```
{{ birthday | dateFormat | uppercase }}
```



### filter에 파라미터를 전달할 수 있을까?

필터는 기본적으로 자바스크립트 함수이기 때문에, 아래와 같이 두 개 이상의 인수를 받을 수 있습니다.

```
{{ message | filterA('arg1', arg2) }}
```

여기서 `filterA`는 세 개의 인수를 받는 함수로 정의되었습니다. `message`의 값은 첫번째 인수로 전달될 것이며, 순수 문자열인 `'arg1'`은 두번째 인수로 전달될 것이며, 자바스크립트 표현식인 `arg2`는 표현식이 실행된 이후에 세번째 인수로 전달될 것입니다.

```
{{ 2 | exponentialStrength(10) }} // prints 2 power 10 = 1024
```

