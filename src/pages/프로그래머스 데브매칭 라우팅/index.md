---
path: "/프로그래머스 데브매칭 라우팅/"
category: "프로그래머스 데브매칭"
tags: ["프로그래머스", "데브매칭", "소프트웨어"]
title: "프로그래머스 데브매칭 라우팅"
date: "2021-03-01T12:23:00.000Z"
summary: "프로그래머스 데브매칭 라우팅입니다."
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
import Header from "./components/Header.js";

export default class App {
  $target = null;

  constructor($target) {
    this.$target = $target;

    new Header({
      $target,
    });
  }

  setState(data) {
    this.data = data;
  }
}


```



# 4. style.css

```css
@font-face {
  font-family: "Goyang";
  src: url("fonts/Goyang.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

html {
  box-sizing: border-box;
}

body * {
  font-family: Goyang;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

#App {
  margin: 1.5em auto;
  max-width: 1200px;
  column-gap: 1.5em;
}

.SearchResult {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-gap: 10px;
}

@media only screen and (max-width: 992px) {
  .SearchResult {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 768px) {
  .SearchResult {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 576px) {
  .SearchResult {
    grid-template-columns: 1fr;
  }
}

.SearchResult img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.SearchResult .img-outer {
  width: 100%;
  height: 300px;
}

.SearchResult .item {
  background-color: #eee;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
}

.SearchInput {
  width: 100%;
  font-size: 40px;
  padding: 10px 15px;
}

.ImageInfo {
  position: fixed;
  z-index: -1;
  opacity: 0;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
}
.tooltip {
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.fade-in {
  z-index: 1;
  opacity: 1;
}

.fade-out {
  z-index: -1;
  opacity: 0;
}

.ImageInfo .title {
  display: flex;
  justify-content: space-between;
}

.ImageInfo .title,
.ImageInfo .description {
  padding: 5px;
}

.ImageInfo .content-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
}

.ImageInfo .content-wrapper img {
  width: 100%;
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

#dummy {
  width: 100vw;
  height: 1000px;
}

.isvisible {
  display: none;
}

.imgs-container img {
  width: 100px;
  height: 100px;
}

.imgs-container.banner-outer {
  width: 100px;
  height: 100px;
}

/* 캐러셀 */
.imgs-container {
  display: flex;
  transform: translate3d(0);
  transition: transform 0.5s ease-in-out;
}

.carousel {
  width: 500px;
  overflow: hidden;
}

/* dark mode 처리 */

@media (prefers-color-scheme: dark) {
  body {
    transition: all 0.5s ease-in-out;
    background-color: #000;
    color: #fff;
  }
}

body[data-theme="light"] {
  transition: all 0.5s ease-in-out;
  background-color: #fff;
  color: #000;
}

body[data-theme="dark"] {
  transition: all 0.5s ease-in-out;
  background-color: #000;
  color: #fff;
}

```



# 5. Main.js

```javascript
import Info from "./Info.js";
import About from "./About.js";
import Component from "./Component.js";

export default class Main extends Component {
  constructor({ $target }) {
    super({
      name: "main",
      $target,
    });
    this.render();
  }
  render() {
    switch (window.location.pathname) {
      case "/about":
        new About({
          $target: this.$outer,
        });
        break;
      case "/info":
        new Info({
          $target: this.$outer,
        });
        break;
      default:
        this.$outer.innerHTML = `
          <div>
            <h1>앱 부분</h1>
          </div>`;
        break;
    }
  }
}
```



# 6. info

```javascript
export default class Info {
  constructor({ $target }) {
    this.$target = $target;
    this.render();
  }
  render() {
    this.$target.innerHTML = `
      <div>
        <h1>정보</h1>
      </div>`;
  }
}
```





# 7. Header

```javascript
import Component from "./Component.js";
import Main from "./Main.js";

export default class Header extends Component {
  constructor({ $target }) {
    super({
      name: "header",
      $target,
    });
    this.render();
  }
  render() {
    this.$outer.innerHTML = `
        <h4 class="history" route="/">홈</h4>
        <h4 class="history" route="/about">ABOUT</h4>
        <h4 class="history" route="/info">INFO</h4>
    `;
    const header = document.querySelector(".header");
    const main = new Main({
      $target: this.$target,
    });

    header.addEventListener("click", (event) => {
      const path = event.target.getAttribute("route");
      if (path !== null) {
        window.history.pushState({}, path, window.location.origin + path);
        main.render();
      }
    });
  }
}

```





# 8. Component

```javascript
export default class Component {
  $target = null;
  $outer = null;

  constructor(props = {}) {
    this.$outer = document.createElement("div");
    this.$outer.className = `${props.name}`;
    props.$target.appendChild(this.$outer);
    this.$target = props.$target;
  }
}

```





# 9. About

```javascript
export default class About {
  constructor({ $target }) {
    this.$target = $target;
    this.render();
  }
  render() {
    this.$target.innerHTML = `
      <div>
        <h1>어바웃</h1>
      </div>`;
  }
}

```

