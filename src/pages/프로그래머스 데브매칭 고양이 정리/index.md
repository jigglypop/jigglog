---
path: "/프로그래머스 데브매칭 고양이 정리/"
category: "자격증"
tags: ["네트워크 관리사 2급", "자격증", "소프트웨어"]
title: "프로그래머스 데브매칭 고양이 정리"
date: "2021-03-01T12:23:00.000Z"
summary: "프로그래머스 데브매칭 고양이 정리입니다."
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
import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";
import Spinner from "./components/Spinner.js";
import Tags from "./components/Tags.js";
import DarkButton from "./components/DarkButton.js";
import Banner from "./components/Banner.js";
import throttling from "./utils/throttle.js";
import spinnerToggle from "./utils/spinnerToggle.js";

import api from "./api/api.js";

export default class App {
  $target = null;
  data = [];
  tags = [];

  constructor($target) {
    this.$target = $target;
    // 스피너
    this.spinner = new Spinner({
      $target,
    });

    // 검색
    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        spinnerToggle();
        this.tags.setTags(keyword);
        const res = await api.fetchCats(keyword);
        if (!res.isError) {
          this.setSearchData(res.data);
        } else {
          this.setError(res.data);
        }
        spinnerToggle();
      },

      onRandom: async () => {
        spinnerToggle();
        const res = await api.fetchRandoms();
        if (!res.isError) {
          this.setState(res.data);
        } else {
          this.setError(res.data);
        }
        spinnerToggle();
      },
    });
    // 다크모드
    this.darkbutton = new DarkButton({
      $target,
    });
    // 태그
    this.tags = new Tags({
      $target,
      onClickTag: async (keyword) => {
        spinnerToggle();
        const res = await api.fetchCats(keyword);
        if (!res.isError) {
          this.setSearchData(res.data);
        } else {
          this.setError(res.data);
        }
        spinnerToggle();
      },
    });
    // 배너
    this.banner = new Banner({
      $target,
      onRandom: async () => {
        spinnerToggle();
        const res = await api.fetchRandoms();
        if (!res.isError) {
          this.setState(res.data);
        } else {
          this.setError(res.data);
        }
        spinnerToggle();
      },
    });
    // 결과리스트
    const throttle = throttling();
    const scroll = () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 500) {
        throttle.throttle(async () => {
          spinnerToggle();
          this.setDummy();
          const res = await api.fetchRandoms();
          if (!res.isError) {
            this.setScroll(res.data);
          } else {
            this.setError(res.data);
          }
          this.setDummy();
          spinnerToggle();
        });
      }
    };

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (data) => {
        this.imageInfo.setState({
          visible: true,
          data,
        });
      },
      onScroll: async (isRandom) => {
        if (isRandom) {
          window.addEventListener("scroll", scroll);
        } else {
          window.removeEventListener("scroll", scroll);
        }
      },
    });
    // 모달
    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.banner.setState(nextData);
    this.searchResult.setState(nextData);
  }

  setSearchData(data) {
    this.banner.setState(data);
    this.searchResult.setSearchData(data);
  }

  setScroll(data) {
    this.data.push(...data);
    this.banner.setState(this.data);
    this.searchResult.setState(this.data);
  }

  setDummy() {
    this.searchResult.dummyToggle();
  }

  setError(errorData) {
    this.searchResult.setError(errorData);
  }
}

```

## 4. style.css

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



## 5. cache

```javascript
const cache = {
  get(key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  },
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
};

export default cache;

```



## 6. debounce

```javascript
const debouncing = () => {
  let timer;
  return {
    debounce(callback) {
      if (!timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...arguments);
      }, 500);
    },
  };
};

export default debouncing;

```



## 7. spinnerToggle

```javascript
const spinnerToggle = () => {
  const spinner = document.querySelector(".spinner-wrapper");
  spinner.classList.toggle("isvisible");
};
export default spinnerToggle;

```



## 8. throttle

```javascript
const throttling = () => {
  let timer;
  return {
    throttle(callback) {
      if (!timer) {
        timer = setTimeout(() => {
          callback(...arguments);
          timer = false;
        }, 500);
      }
    },
  };
};

export default throttling;

```



## 9. banner

```javascript
export default class Banner {
  data = [];
  onRandom = null;

  constructor({ $target, onRandom }) {
    const $outer = document.createElement("div");
    $outer.className = "carousel";
    this.$outer = $outer;
    this.onRandom = onRandom;
    $target.appendChild(this.$outer);
    this.onRandom();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this.$outer.innerHTML = "";
    const imgsContainer = document.createElement("div");
    imgsContainer.className = "imgs-container";
    imgsContainer.innerHTML = this.data
      .map(
        (img) => `
          <div class="banner-outer">
            <img src="${img.url}" class="banner-img"/>
          </div>
        `
      )
      .join("");

    // 넘기기
    const imgs = imgsContainer.getElementsByTagName("img");
    let idx = 0;
    const changeImg = () => {
      if (idx > imgs.length - 5) {
        idx = 0;
      } else if (idx < 0) {
        idx = imgs.length - 5;
      }
      imgsContainer.style.transform = `translateX(${-idx * 100}px)`;
    };

    const leftBtn = document.createElement("button");
    leftBtn.className = "left-btn";
    leftBtn.innerText = "이전";
    leftBtn.addEventListener("click", () => {
      idx--;
      changeImg();
    });

    const rightBtn = document.createElement("button");
    rightBtn.className = "right-btn";
    rightBtn.innerText = "다음";
    rightBtn.addEventListener("click", () => {
      idx++;
      changeImg();
    });
    this.$outer.appendChild(imgsContainer);
    this.$outer.appendChild(leftBtn);
    this.$outer.appendChild(rightBtn);
  }
}

```

## 10. darkbutton

```javascript
export default class DarkButton {
  constructor({ $target }) {
    const $outer = document.createElement("div");
    $outer.className = "darkmode";
    this.$outer = $outer;
    $target.appendChild(this.$outer);
    this.render();
  }

  render() {
    let originTheme = document.body.dataset.theme;
    if (!originTheme) {
      originTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      document.body.setAttribute("data-theme", originTheme);
    }

    const btn = document.createElement("button");
    btn.id = "darkmode-btn";
    btn.innerText = "다크모드";
    btn.addEventListener("click", () => {
      if (originTheme === "dark") {
        originTheme = "light";
        document.body.setAttribute("data-theme", "light");
      } else {
        originTheme = "dark";
        document.body.setAttribute("data-theme", "dark");
      }
    });
    this.$outer.appendChild(btn);
  }
}

```



## 11. imageinfo

```javascript
import api from "../api/api.js";
import spinnerToggle from "../utils/spinnerToggle.js";

export default class ImageInfo {
  $imageInfo = null;
  data = null;
  catdata = null;
  caterror = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    $imageInfo.id = "image-info";
    this.$imageInfo = $imageInfo;

    $target.appendChild($imageInfo);
    this.data = data;
    this.render();
  }

  async onCatById(id) {
    const res = await api.fetchCatById(id);
    if (!res.isError) {
      this.catdata = res.data;
    } else {
      this.caterror = res.data;
    }
  }

  async setState(data) {
    spinnerToggle();
    this.data = data;
    await this.onCatById(this.data.data);
    spinnerToggle();
    this.render();
  }

  onClose() {
    this.data.visible = false;
    this.fadeOut();
    this.render();
  }

  fadeIn() {
    this.$imageInfo.classList.add("fade-in");
    this.$imageInfo.classList.remove("fade-out");
  }

  fadeOut() {
    this.$imageInfo.classList.add("fade-out");
    this.$imageInfo.classList.remove("fade-in");
  }

  render() {
    if (this.data.visible) {
      this.fadeIn();
      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${this.catdata.name}</span>
            <div class="close">x</div>
          </div>
          <img src="${this.catdata.url}" alt="${this.catdata.name}"/>        
          <div class="description">
            <div>성격: ${this.catdata.temperament}</div>
            <div>태생: ${this.catdata.origin}</div>
          </div>
        </div>`;

      this.$imageInfo.addEventListener("click", (e) => {
        if (e.target.id === "image-info" || e.target.className === "close") {
          this.onClose();
        }
      });
      window.addEventListener("keyup", (e) => {
        if (this.data.visible && e.key === "Escape") {
          this.onClose();
        }
      });
    } else {
      this.fadeOut();
    }
  }
}

```



## 12. searchinput

```javascript
export default class SearchInput {
  constructor({ $target, onSearch, onRandom }) {
    const $searchInput = document.createElement("section");
    this.$searchInput = $searchInput;
    this.onRandom = onRandom;
    this.onSearch = onSearch;
    $target.appendChild($searchInput);
    this.render();
  }

  render() {
    this.$searchInput.innerHTML = `
    <div class="search-wrapper">
      <span>
        <button class="random-button">고양이</button>
      </span>
      <input class="SearchInput" placeholder="고양이를 검색해보세요.|" />
    </div>`;
    const searchinput = document.querySelector(".SearchInput");
    searchinput.focus();
    this.$searchInput.addEventListener("keyup", (e) => {
      if (e.target.value !== "") {
        if (e.keyCode === 13) {
          this.onSearch(e.target.value);
          e.target.value = "";
        }
      }
    });

    const randombutton = document.querySelector(".random-button");
    randombutton.addEventListener("click", () => {
      this.onRandom();
    });
  }
}

```



## 13. searchresult

```javascript
export default class SearchResult {
  $searchResult = null;
  $dummy = null;
  data = null;
  isRandom = true;
  error = null;
  onClick = null;
  onScroll = null;

  constructor({ $target, initialData, onClick, onScroll }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";

    this.$searchResult.addEventListener("click", (e) => {
      this.onClick(e.target.id);
    });

    this.$dummy = document.createElement("div");
    this.$dummy.classList.add("isvisible");
    this.$dummy.id = "dummy";
    $target.appendChild(this.$searchResult);
    $target.appendChild(this.$dummy);

    this.data = initialData;
    this.onClick = onClick;
    this.onScroll = onScroll;
    this.render();
  }

  setState(nextData) {
    this.isRandom = true;
    this.data = nextData;
    this.error = null;
    this.render();
  }

  setError(errorData) {
    this.data = null;
    this.error = errorData.message;
    this.render();
  }

  setSearchData(nextData) {
    this.isRandom = false;
    this.data = nextData;
    this.error = null;
    this.render();
  }

  dummyToggle() {
    const dummy = document.querySelector("#dummy");
    dummy.classList.toggle("isvisible");
  }

  render() {
    if (this.data) {
      this.onScroll(this.isRandom);
      if (!this.isRandom && this.data.length === 0) {
        this.$searchResult.innerHTML = `<h1>검색 결과가 없습니다</h1>`;
        return;
      } else {
        if ("IntersectionObserver" in window) {
          const lazyimage = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const outer = entry.target;
                const img = outer.querySelector("img");
                const src = img.getAttribute("lazy");
                img.setAttribute("src", src);
                lazyimage.unobserve(outer);
              }
            });
          });

          const makeCat = (cat) => {
            const text = `
              <div class="item">
                <div class="img-outer">
                  <img lazy=${cat.url} alt=${cat.name} id=${cat.id} />
                </div>
                <h6 class="tooltip">${cat.name}</h6>
              </div>
            `;
            return text;
          };

          this.$searchResult.innerHTML = this.data
            .map((cat) => makeCat(cat))
            .join("");

          this.$searchResult.querySelectorAll(".item").forEach(($item) => {
            const tooltip = $item.querySelector(".tooltip");

            $item.addEventListener("mouseover", () => {
              tooltip.classList.add("fade-in");
              tooltip.classList.remove("fade-out");
            });
            $item.addEventListener("mouseout", () => {
              tooltip.classList.add("fade-out");
              tooltip.classList.remove("fade-in");
            });
            lazyimage.observe($item);
          });
        }
      }
    } else if (this.error) {
      this.$searchResult.innerHTML = `
        <h1>${this.error}</h1>
      `;
    }
  }
}

```



## 14. spinner

```javascript
export default class Spinner {
  $spinner = null;

  constructor({ $target }) {
    this.$spinner = document.createElement("div");
    this.$spinner.className = "spinner-wrapper";
    $target.appendChild(this.$spinner);
    this.render();
  }
  render() {
    this.$spinner.classList.add("isvisible");
    this.$spinner.innerHTML = `
      <span>
        <h1>잠시만 기다려주세요</h1>
      </span>`;
  }
}

```





## 15. tags

```java
export default class Tags {
  tags = [];
  onClickTag = null;

  constructor({ $target, onClickTag }) {
    const $outer = document.createElement("div");
    $outer.className = "tags";
    this.$outer = $outer;
    this.onClickTag = onClickTag;
    $target.appendChild(this.$outer);
    this.render();
  }

  setTags(tag) {
    if (this.tags.indexOf(tag) === -1) {
      if (this.tags.length >= 5) {
        this.tags.shift();
      }
      this.tags.push(tag);
    }
    this.render();
  }

  render() {
    this.$outer.innerHTML = "";
    this.tags.forEach((keyword) => {
      const tag = document.createElement("div");
      tag.className = "tag-item";
      tag.innerHTML = `<h4>${keyword}</h4>`;
      tag.addEventListener("click", () => {
        this.onClickTag(keyword);
      });
      this.$outer.appendChild(tag);
    });
  }
}

```





## 16. api

```javascript
import cache from "../utils/cache.js";

const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const errorMsg = (res) => {
  if (res.status < 300) return false;
  if (res.status < 400) {
    return `리다이렉트 에러: ${res.status}`;
  }
  if (res.status < 500) {
    return `클라이언트 에러: ${res.status}`;
  }
  if (res.status < 600) {
    return `서버 에러: ${res.status}`;
  }
};

const api = {
  fetchCats: async (keyword) => {
    try {
      const cachedata = cache.get(keyword);
      if (cachedata) {
        return {
          isError: false,
          data: cachedata,
        };
      }
      const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
      if (res.ok) {
        const data = await res.json();
        cache.set(keyword, data.data);
        return {
          isError: false,
          data: data.data,
        };
      } else {
        const error = errorMsg(res);
        throw error;
      }
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  },

  fetchRandoms: async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/api/cats/random50`);
      if (res.ok) {
        const data = await res.json();
        return {
          isError: false,
          data: data.data,
        };
      } else {
        const error = errorMsg(res);
        throw error;
      }
    } catch (e) {
      return {
        isError: true,
        data: {
          message: e.message,
          status: e.status,
        },
      };
    }
  },

  fetchCatById: async (id) => {
    try {
      const res = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
      if (res.ok) {
        const data = await res.json();
        return {
          isError: false,
          data: data.data,
        };
      } else {
        const error = errorMsg(res);
        throw error;
      }
    } catch (e) {
      return {
        isError: true,
        data: {
          message: e.message,
          status: e.status,
        },
      };
    }
  },
};
export default api;

```

