---
path: "/[mobx] Next.js 에서 Mobx 사용하기/"
category: "mobx"
tags: ["mobx", "next.js"]
title: "[mobx] Next.js 에서 Mobx 사용하기"
date: "2020-08-21T01:00:00.000Z"
summary: "mobx와 Next.js를 사용하기"
images: ["images/2.jpg"]
---



## Next.js with MobX

By Mike Lewis

이 기사에서는 Next.js와 함께 MobX를예시보다 더 실용적인 방법으로 사용하는 것을 검토하겠다. 공식 사례는 MobX 설치 및 구성 방법에 대한 이해를 제공하지만, 특히 다수 store의 경우 어떻게 실용적으로 사용할 수 있는지, **getInitialProps**가 있는 페이지에는 잘 표시하지 않는다. 이 예는 Next.js에서 MobX를 설정하는 방법과 서버측 데이터로 클라이언트측 저장소에 수분을 공급하는 방법을 보여준다.

# Installation

First, install the required packages:

```bash
yarn add mobx mobx-react
```

```bash
npm install --save mobx mobx-react
```

Then install the babel plugins:

```bash
yarn add -D @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
```

or

```bash
npm install --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
```

 

Next you will need to update or create a **.babelrc** file in the root directory with the following:



다음으로 루트 디렉터리에 다음과 같은 **.babelrc* 파일을 업데이트하거나 생성하십시오.

```json
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
```

 

# Creating Stores

Now we can create some stores. I put mine in a folder named stores/. For this example let's make two separate stores so that you can get the basics and expand from there. The first I'm calling UIStore.js and is really just used to control global UI elements. The second I'm calling PostStore.js and this is used to interact with an API to get posts.



이제 우리는 몇 개의 store를 만들 수 있다. 나는 내 것을 store라는 폴더에 넣었다. 이 예시라면 두 개의 store을 따로 만들어 기본을 얻고 거기서부터 확장해 나갈 수 있도록 하자. 첫 번째 나는 UIStore.js에 호출하고, 글로벌 UI 요소를 제어하는 데 정말 익숙하다. 두번째로, PostStore.js에 호출하는데, 이것은 API와 상호 작용하여 게시물을 얻는데 사용된다.

**stores/UIStore.js:**

```react
class UIStore {
  @observable searchOverlayOpen = false;

  @action setSearchOverlayOpen(value) {
    this.searchOverlayOpen = value;
  }
}

export default UIStore;
```

 

**stores/PostStore.js:**

```react
import { observable, action } from 'mobx';

import { makeFetchRequest } from '../utils/API';

class PostStore {
  @observable post = null;

  endpoint = 'post';

  constructor(initialData = {}) {
    this.post = initialData.post;
  }

  async fetch(id) {
    const response = await makeFetchRequest(`${this.endpoint}/${id}/`);
    this.setPost(response);
  }

  @action setPost(post) {
    this.post = post;
  }
}

export default PostStore;
```

이제 우리는 스토어에 store.js 파일을 설정해야 한다/ 이 두 개의 MobX 스토어를 포함하고 초기화할 수 있다. UIStore의 경우 재하이드레이팅할 서버측 데이터가 없으므로 서버에서 재하이드레이팅해야 하는 PostStore와는 다르게 처리된다는 점에 유의한다. 만약 우리가 수압을 다시 해야 한다면 우리는 서버로부터 초기 데이터를 넘겨야 할 것이다.

**stores/stores.js:**

```react
import { useStaticRendering } from 'mobx-react';

import PostStore from './PostStore';
import UIStore from './UIStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { postStore: {} }) {
  if (isServer) {
    return {
      postStore: new PostStore(initialData.postStore),
      uiStore: new UIStore(),
    };
  }
  if (store === null) {
    store = {
      postStore: new PostStore(initialData.postStore),
      uiStore: new UIStore(),
    };
  }

  return store;
}
```

 

# Wiring it Up

이제 우리는 store를 초기화하고 우리의 앱을 우리의 pages/_app.js file.을  MobX Provider로 감싸줍니다



**pages/_app.js:**

```javascript
import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react';

import initializeStore from '../stores/stores';

class CustomApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.mobxStore}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default CustomApp;
```

 

# Using It

The part that I had trouble finding an explanation for is how to actually use a MobX store in a pages' **getInitialProps** function while hydrating from server data. Here is how you do that, roughly:



설명을 찾는데 어려움을 겪었던 부분은 서버 데이터에서 수분을 공급하면서 페이지의 **getInitialProps** 기능에 MobX 스토어를 실제로 사용하는 방법이다. 이렇게 하는 방법은 대략 다음과 같다.

```javascript
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('postStore') 
@observer
class Post extends Component {
  static async getInitialProps({ mobxStore, query }) {
    await mobxStore.postStore.fetch(query.id);
    return { post: mobxStore.postStore.post };
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <h1>{post.title}</h1>
      </div>
    );
  }
}

export default Post;
```

Above I am also using next-routes and am passing in a query variable to getInitialProps with the id of the post. You can omit that if you don't require a query paramater. Basically, getInitialProps will receive mobxStore as a keyword argument. mobxStore is an object containing all of your stores that you passed in via pages/_app.js.

That should get you started but feel free to reach out if you have any issues.



위에서 나는 또한 다음 next-routes를 사용하고 있으며, 다음 루트를 얻기 위해 쿼리 변수를 전달하고 있다.게시물 ID가 있는 초기 제안 당신은 질의 파라메이터가 필요하지 않다면 그것을 생략할 수 있다. 기본적으로 getInitialProps는 키워드 인수로 mobxStore를 받게 된다. mobxStore는 페이지/_app.js를 통해 전달된 모든 스토어가 포함된 개체다.

그러면 시작할 수 있지만 문제가 있으면 언제든지 연락하십시오.