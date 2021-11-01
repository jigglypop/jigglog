---
path: "/프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Nuxt/"
category: "기술 면접"
tags: ["프론트엔드", "개발자", "면접", "기술면접", "Nuxt"]
title: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Nuxt"
date: "2021-04-15T01:00:00.000Z"
summary: "프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - Nuxt"
images: ["images/2.jpg"]
---

> 프론트 엔드 면접 질문용(Nuxt) 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요





## asyncData()

#### 1) 개요

* 컴포넌트 데이터를 세팅하기 전에 비동기 처리를 할 수 있음

- 컴포넌트를 로드하기 전에 호출
- 페이지 컴포넌트에서만 사용 가능
- 컨텍스트 객체를 첫번째 인수로 받으며, 이를 사용해 일부 데이터를 가져와 컴포넌트 데이터를 반환
- asyncData()의 return값은 컴포넌트의 data와 병합
- asyncData()는 컴포넌트를 초기화 하기 전에 실행되기 때문에 메서드 내부에서는 this를 통해 컴포넌트 인스턴스에 접근할 수 없음



#### 2) 사용 방법

* Promise 객체 사용

```javascript
export default {
    asyncData({ params }) {
        return axios.get(`https://my-api/posts/${params.id}`).then((res) => {
            return { title: res.data.title };
        });
    },
};
```

* async/await 사용

```javascript
export default {
    async asyncData({ params }) {
        const { data } = await axios.get(`https://my-api/posts/${params.id}`);
        return { title: data.title };
    },
};
```

###  

## fetch()

#### 1) 개요

* 페이지가 랜더링되기 전에 데이터를 스토어에 넣기위해서 사용

- 컴포넌트를 로드하기 전에 호출
- 모든 컴포넌트에서 사용 가능
- 컨텍스트객체를 첫번째 인수로 받으며, 그 데이터를 스토어에 넣을 수 있음
- return값은 Promise
- `Nuxt.js`는 컴포넌트가 랜더링 되기 전에 Promise가 종료되기를 기다림



#### 2) 사용방법

* Promise 객체 사용

```javascript
export default {
    fetch({ store, params }) {
        return axios.get(`https://my-api/posts/${params.id}`).then((res) => {
            store.commit("setPosts", res.data);
        });
    },
};
```

* async/await 사용

```javascript
export default {
    async fetch({ store, params }) {
        const { data } = await axios.get(`https://my-api/posts/${params.id}`);
        store.commit("setPosts", data);
    },
};
```