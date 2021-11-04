---
path: '/프론트엔드 면접 질문 - graphql/'
category: '기술 면접'
tags: ['프론트엔드', '개발자', '면접', '기술면접', '자바스크립트']
title: '프론트엔드 면접 질문 - graphql'
date: '2021-04-07T01:00:00.000Z'
summary: '프론트엔드 개발자 면접 질문(기술면접) 질문 정리 모음 - 프론트엔드 파트 - graphql'
images: ['images/2.jpg']
---

> 프론트 엔드 면접 질문, graphql 공부 후 정리 자료입니다. 정확하지 않을 수 있으니 꼭 다시 책이나 자료를 참고하여 공부하세요



# GraphQL이란

## 1) graphQl이란

*  Facebook이 개발한 Query언어



## 2) 기존 REST API 통신의 한계

* 특정 기능을 위해 여러번 API가 호출 됨
* 특정 요청에 fit한 응답을 돌려주기 위해서는 API를 새로 만들어야함
* API 유지보수의 어려움



## 3) GraphQL의 특징

* EndPoint가 하나



[![img](https://owin2828.github.io/img/web/web_13_1.png)](https://owin2828.github.io/img/web/web_13_1.png)



* 기존에 REST API에서는 정보를 얻기 위해 여러번 네트워크를 호출하거나, 다양한 API를 호출
* GraphQL :  하나의 Endpoint를 제공, 한 번의 요청으로 모든 정보를 가져옴



## 4) GraphQL의 통신 방법



[![img](https://owin2828.github.io/img/web/web_13_2.png)](https://owin2828.github.io/img/web/web_13_2.png)



*  Cient-side와 Server-side에서 각각 모듈을 활용하여 통신을 주고 받을 수 있음

* Client-side에서 지원되는 라이브러리 : Relay, Apollo GraphQL



# GraphQL의 장점



## 1) 하나의 Endpoint

* 단 `한 개`의 Endpoint를 지님으로써, API나 View를 따로 구성할 필요가 없음.  
* 요청을 보낼때는 정해진 한 군데로만 요청을 보내면 되고, 그 외의 API를 신경쓸 필요가 없어져 유지보수가 용이



## 2) Fit한 Data

* GraphQL은 한번의 요청으로 원하는 모든 데이터를 서버로부터 요청하여 가져오므로 `Overfetching`이나 `Underfetching`등의 문제가 없음

* Overfetching : 원하는 data 이상의 정보를 요청받는 것, data의 정제에 리소스가 낭비

* Underfetching : 원하는 data의 정보를 요청받기 위해 여러번 요청을 보내는 것, 네트워크를 통해 여러번 접근을 하여 리소스 낭비



### 3) 기종에 상관없는 API

Facebook의 [GraphQL blog](https://graphql.org/blog/graphql-a-query-language/)에서는 iOS, Android에 따라 `다른 기종`을 위해 제공하는 API 구현이 힘들었다고 한다.
RESTful API로는 일일히 다른 기종을 위해 API를 구현해야 했다고 말하며, `표준화`된 쿼리언어를 개발했다고 한다.



### 4) Redux를 대체할 Apollo

React와 함께 사용하는 어플리케이션에서는 `Flux 아키텍처`를 구현한 `Redux`를 제공하는데, 이는 다음과 같은 방식으로 진행된다.



[![img](https://owin2828.github.io/img/web/web_13_3.png)](https://owin2828.github.io/img/web/web_13_3.png)



기존의 Redux와 Universal Router를 사용한 SSR은 위의 사진처럼 실행되고 이는 다음과 같은 `단점`을 야기

- 리소스를 가져오는 로직과 API를 `라우팅 경로마다` 구현해야 함
- Redux의 스토어를 사용하기 위해 `액션과 리듀서`를 구현해야 함
- 렌더링 절차가 `복잡`
- 렌더링에 필요한 모든 리소스를 받을 때까지 렌더링을 실행할 수 `없음`

이를 `Apollo` 기반의 서비스에서 `React Router v4` 라이브러리를 사용하여 다음과 같이 진행할 수 있게 된다.



[![img](https://owin2828.github.io/img/web/web_13_4.png)](https://owin2828.github.io/img/web/web_13_4.png)



1. React Router v4에서 라우팅 경로에 맞는 컴포넌트를 랜더링
2. 컴포넌트를 렌더링할 때 Apollo Client를 통해 컴포넌트 렌더링에 필요한 리소스를 받은 후 HTML 코드로 변환
3. 서버에서 받은 HTML 코드로 클라이언트 렌더링을 실행

Redux와 Universal Router를 사용할 때보다 프로세스가 `간결`
또한 Redux와 Universal Router 조합에서 생겨난 단점이 보완되고 다음과 같은 `장점`이 추가

- 라우팅 경로에 `상관없이` 컴포넌트별로 필요한 리소스만 가져올 수 있음
- 리소스를 가져오는 데 시간이 오래 걸리는 컴포넌트는 리소스를 가져오지 않고 렌더링만 실행하고, 클라이언트 렌더링을 실행할 때 리소스를 가져오게 할 수 있음
- 라우팅 경로에 의존성이 사라져서 `재사용` 가능한 컴포넌트의 개발이 용이해짐
- 내부의 분기가 없는 `하나의 라우터 코드`로 클라이언트 렌더링과 서버 렌더링을 실행할 수 있음
- 별도의 액션과 리듀서가 없어도 필요한 리소스를 컴포넌트에서 사용할 수 있음





# GraphQL의 단점



### 1) HTTP 캐싱

* HTTP의 캐싱 전략은 각각 URL에 각자의 정책을 설정하는 방식으로 이루어 지는데, RESTful API는 이를 그대로 사용이 가능
* GraphQL은 하나의 URL로 처리하기에, HTTP에서 제공하는 캐싱 전략을 그대로 사용하는 것은 불가능
* 따라서 GraphQL만의 캐싱 방법을 제공하게 됨
  * ex ) 영속쿼리(persisted query),  아폴로엔진(Apollo Engine)



### 2) 파일 업로드

* GraphQL은 지속적으로 성장하는 생태계로써, 완성된 명세가 없어 이 외의 것들은 직접 개발함

* 대표적인 예로 파일업로드가 있음

* 해결법

  * Base64 인코딩을 사용
  * Upload를 위해 분리된 API 사용
  * apollo-upload-server같이 GraphQL multipart 요청 명세를 구현하는 라이브러리를 사용

  

### 3) 요청 필터링의 어려움

* GraphQL은 클라이언트가 필요한 데이터를 스스로 결정하여 요청. 따라서 다양한 요청형태에서 잘못된 요청을 필터링하기 어려움

