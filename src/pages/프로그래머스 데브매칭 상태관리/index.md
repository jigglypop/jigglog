---
path: "/프로그래머스 데브매칭 상태관리/"
category: "프로그래머스 데브매칭 상태관리"
tags: ["프로그래머스 데브매칭", "상태관리"]
title: "프로그래머스 데브매칭 상태관리"
date: "2021-03-01T12:23:00.000Z"
summary: "프로그래머스 데브매칭 상태관리입니다."
images: ["images/1.jpg"]
---





# 1. index.html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="./src/style.css">
    </head>
    <body>
        <main id="App"></main>
        <script type="module" src="src/main.js"></script>
    </body>
</html>
```





# 2. main.js

```javascript
import App from "./App.js";

new App(document.querySelector("#App"));
```




# 3. App

```javascript
import Main from "./components/Main.js";

export default class App {
  $target = null;

  constructor($target) {
    this.$target = $target;
    new Main({
      $target,
    });
  }

  setState(data) {
    this.data = data;
  }
}

```

## 4. style.css

```css
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.spinner-wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.isvisible {
  display: none;
}

.header {
  position: fixed;
  height: 50px;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
}
.header h4 {
  margin: 10px;
  cursor: pointer;
}

#app {
  margin-top: 100px;
}
```





## 5. Main

```javascript
import Component from "./Component.js";
import Count from "./count.js";
import List from "./list.js";
import store from "../store/index.js";

export default class Main extends Component {
  constructor({ $target }) {
    super({
      store,
      name: "main",
      $target,
    });
    new Count({
      $target: this.$target,
    });
    new List({
      $target: this.$target,
    });
  }
  render() {
    this.$outer.innerHTML = `
      <form>
        <div class="boilerform">
          <input type="text" class="input" autocomplete="off" />
          <button>추가</button>
        </div>
      </form>
    `;
    const formEl = this.$outer.querySelector("form");
    const inputEl = formEl.querySelector(".input");
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      let value = inputEl.value.trim();
      if (value.length) {
        store.commit("addItem", value);
        inputEl.value = "";
        inputEl.focus();
      }
    });
  }
}

```



## 6. list.js

```javascript
import Component from "./component.js";
import store from "../store/index.js";

export default class List extends Component {
  constructor({ $target }) {
    super({
      store,
      name: "items",
      $target,
    });
  }

  render() {
    if (store.state.items.length === 0) {
      this.$outer.innerHTML = `<p class="no-items">리스트 없음</p>`;
      return;
    }
    this.$outer.innerHTML = `
        <ul>${store.state.items
          .map((item) => {
            return `<li>${item}<button>×</button></li>`;
          })
          .join("")}</ul>
    `;

    this.$outer.querySelectorAll("button").forEach((button, index) => {
      button.addEventListener("click", () => {
        store.commit("clearItem", { index });
      });
    });
  }
}
```



## 8. Component.js

```javascript
export default class Component {
  $target = null;
  $outer = null;

  constructor(props = {}) {
    let self = this;
    this.$outer = document.createElement("div");
    this.$outer.className = `${props.name}`;
    props.$target.appendChild(this.$outer);
    this.$target = props.$target;
    props.store.events.subscribe("stateChange", () => self.render());
    self.render();
  }
}
```



## 9. store/index.js

```javascript
import mutations from "./mutations.js";
import state from "./state.js";
import Store from "./store.js";

export default new Store({
  mutations,
  state,
});

```



## 10. store/mutations.js

```javascript
export default {
  addItem(state, payload) {
    state.items.push(payload);
    return state;
  },
  clearItem(state, payload) {
    state.items.splice(payload.index, 1);
    return state;
  },
};

```



## 11. store/pubsub.js

```javascript
export default class PubSub {
  events = {};
  subscribe(event, callback) {
    if (!this.events.hasOwnProperty(event)) this.events[event] = [];
    return this.events[event].push(callback);
  }

  publish(event, data = {}) {
    if (!this.events.hasOwnProperty(event)) return [];
    return this.events[event].map((callback) => callback(data));
  }
}


```





## 12. store/state.js

```java
export default {
  items: ["예시 1", "예시 2"],
};
```





## 13. store/store.js

```javascript
import PubSub from "./pubsub.js";

export default class Store {
  mutations = {};
  state = {};
  events = null;

  constructor(params) {
    this.events = new PubSub();
    this.mutations = params.mutations;

    this.state = new Proxy(params.state || {}, {
      set: (state, key, value) => {
        state[key] = value;
        console.log(`현재 상태: ${key}: ${value}`);
        this.events.publish("stateChange", this.state);
        return true;
      },
    });
  }

  commit(name, payload) {
    if (typeof this.mutations[name] !== "function") return false;
    this.state = Object.assign(
      this.state,
      this.mutations[name](this.state, payload)
    );
    return true;
  }
}


```

