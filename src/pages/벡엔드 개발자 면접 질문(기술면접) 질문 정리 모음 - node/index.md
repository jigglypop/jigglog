---
path: "/벡엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - node/"
category: "기술 면접"
tags: ["벡엔드", "개발자", "면접", "기술면접", "node"]
title: "벡엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - node"
date: "2021-04-20T01:00:00.000Z"
summary: "벡엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - node"
images: ["images/2.jpg"]
---

>  백엔드 면접 질문용 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요

---



### worker_thread 모듈



* Node.js는 이벤트 루프가 싱글 스레드에서 동작하지만 내부적으로 스레드풀을 두어 I/O 작업에 스레드를 사용할 수 있도록 하고 이를 통해 병렬적으로 작업

```javascript
const http = require("http");
const requestHandler = (req, res) => {
  console.log(req.url);
  res.end("node.js");
};

const server = http.createServer(requestHandler);
server.listen(3000, (err) => {
  if (err) {
    return console.log("error");
  }
  console.log("http://localhost:3000");
});

```



* node.js가 사용하는 libuv의 모듈은 내부적으로 thread pool을 두어 I/O 작업을 thead pool에 존재하는 thread를 사용해 처리하기 때문에 event loop는 Block 당하지 않고 빠르게 작업을 계속 진행할 수 있음

* Node.js는 싱글 스레드다 라는 말은 거짓
* 하지만 일반적인 javascript 코드들은 싱글 스레드인 이벤트 루프에서 작업

* CPU 작업량이 많은 코드는 다른 자바스크립트 코드를 Block하게 만들어 다른 작업이 중단된 것처럼 보일 수 있음

* Node.js 버전 10.5부터 thread pool에 worker_thread라는 모듈을 통해 스레드를 생성

* node를 실행시킬 때 다음 플래그

```bash
(node index.js) --experimental-worker
```





