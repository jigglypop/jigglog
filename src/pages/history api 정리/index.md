---
path: "/history api 정리/"
category: "자격증"
tags: ["네트워크 관리사 2급", "자격증", "소프트웨어"]
title: "프로그래머스 데브매칭 고양이 정리"
date: "2021-03-03T12:23:00.000Z"
summary: "history api 정리"
images: ["images/1.jpg"]
---



# 1. index

```javascript
<!doctype html>
<html lang="ko">
  <head>
    <title>History API Sample</title>
    <meta charset="utf-8">
    <style>
      section {margin: 20px 0;}
    </style>
  </head>
  <body>
    <section>
      <h2>push state</h2>
      <button id="push-state1">pushState1</button>
      <button id="push-state2">pushState2</button>
      <button id="push-state3">pushState3</button>
    </section>
    <section>
      <h2>replace state</h2>
      <button id="replace-state">replaceState</button>
    </section>
    <section>
        <h2>변경</h2>
        <div id="info"></div>
    </section>
  </body>
  <script type="module" src="./src/index.js"></script>
</html>
```



## 2. index.js

```javascript

// 현재의 history state 값을 출력합니다.
const currentHistoryState = () => {
  if (history.state) {
    document.getElementById("info").innerHTML = `
      <div>
        <h1>${history.state}</h1>
      </div>`;
  } else {
    document.getElementById("info").innerHTML = `
    <div>
      <h1>페이지가 없습니다.</h1>
    </div>`;
  }
};

currentHistoryState();

const pushState1Btn = document.getElementById("push-state1");
const pushState2Btn = document.getElementById("push-state2");
const pushState3Btn = document.getElementById("push-state3");
const replaceStateBtn = document.getElementById("replace-state");

// pushState()
pushState1Btn.addEventListener("click", () => {
  history.pushState("pushState1", "", "/push-state1");
  currentHistoryState();
});
pushState2Btn.addEventListener("click", () => {
  history.pushState("pushState2", "", "/push-state2");
  currentHistoryState();
});
pushState3Btn.addEventListener("click", () => {
  history.pushState("pushState3", "", "/push-state3");
  currentHistoryState();
});

// replaceState()
replaceStateBtn.addEventListener("click", () => {
  history.replaceState("replaceState", "", "/replace-state");
  currentHistoryState();
});

// 브라우저의 뒤로가기 / 앞으로가기를 누르면 history state 값을 확인하여 출력합니다.
window.addEventListener("popstate", () => {
  currentHistoryState();
});

```

