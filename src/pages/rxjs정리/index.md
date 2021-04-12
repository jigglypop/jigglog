---
path: "/RxJs 정리/"
category: "RxJs"
tags: ["벡엔드", "개발자", "프론트엔드", "기술면접", "RxJs"]
title: "RxJs 정리"
date: "2021-04-09T01:00:00.000Z"
summary: "RxJs 정리"
images: ["images/2.jpg"]
---

>  RxJs 정리 질문용 공부 후 정리 자료입니다.

---



## 1) RxJs란



* Reactive Extensions For JavaScript 라이브러리이다.

여기서 Reactive Extensions 는 ReactiveX 프로젝트에서 출발한 리액티브 프로그래밍을 지원하기위해 확장했다는 뜻이다.

ReactiveX 는 Observer 패턴, Iterator 패턴, 함수형 프로그래밍을 조합하여 제공한다.

RxJS는 이벤트 스트림을 Observable 이라는 객체로 표현한 후 비동기 이벤트 기반의 프로그램 작성을 돕는다.

이벤트 처리를 위한 API로 다양한 연산자를 제공하는 함수형 프로그래밍 기법도 도입되어 있다.



## 2) 리액티브 프로그래밍

* 이벤트나 배열 같은 데이터 스트림을 비동기로 처리해 변화에 유연하게 반응하는 프로그래밍 패러다임

외부와 통신하는 방식은 Pull 과 Push 시나리오가 있을 수 있다.

- Pull 시나리오
  외부에서 명령하여 응답받고 처리한다.
  데이터를 가지고 오기 위해서는 계속 호출해야 한다.
- Push 시나리오
  외부에서 명령하고 기다리지 않고, 응답이 오면 그때 반응하여 처리한다
  데이터를 가지고 오기 위해서 구독해야 한다.
  Reactive Programming 은 Push 시나리오를 채택하고 있다.

일반적인 비동기 이벤트인 클릭 이벤트를 구현 보자.

```null
// javascript
function event() {
  // ...
};
const el = document.getElementsById('Button');
el.addEventListener('click', event)
```

targetElement를 가져와서 addEventListener 로 ‘click’ 이벤트를 구독하였다.
사용자가 마우스 클릭을 하기 전까지는 event function이 발생되지 않는다.
여기서 우리는 Reactive Programming 의 개념중 하나인 Observer Pattern 을 발견할 수 있다.

addEventListener 로 targetElement가 click 이벤트를 구독하도록 옵저버를 등록한후,
click 이벤트가 발생하면 event function을 호출하여 옵저버에게 알린다.

> Observer pattern은 객체의 상태 변화를 관찰하는 옵저버들의 목록을 객체에 등록하여 상태 변화가 있을 때마다 메서드 등을 통해 객체가 직접 목록의 각 옵저버에게 통지하도록 하는 디자인 패턴이다.

### RxJS

비동기 코드가 많아지면 그만큼 제어의 흐름이 복잡하게 얽혀 코드를 예측하기 어려워진다.
RxJS 는 Javascript 의 비동기 프로그래밍의 문제를 해결하는데 도움을 준다.
RxJS는 Observer 패턴을 적용한 Observable 이라는 객체를 중심으로 동작한다.

### RxJS Observable

```javascript
// javascript
Observable.create(
  (observer) => {
    try {
      observer.next('item');
    } catch(e) {
      observer.error(e);
    } finally {
      observer.complete();
    }
}).subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
  () => console.log('complete')
)
```

#### observer에는 3가지 메서드가 존재한다.

1. next : Observable 구독자에게 데이터를 전달한다.
2. complete : Observable 구독자에게 완료 되었음을 알린다. next는 더 이상 데이터를 전달하지 않는다.
3. error : Observable 구독자에게 에러를 전달한다. 이후에 next 및 complete 이벤트가 발생하지 않는다.

#### RxJS Observable Lifecycle

1. 생성
   Observable.create()
   생성시점에는 어떠한 이벤트도 발생되지 않는다.
2. 구독
   Observable.subscribe()
   구독시점에 이벤트를 구독할 수 있다.
3. 실행
   observer.next()
   실행시점에 이벤트를 구독하고 있는 대상에게 값을 전달한다.
4. 구독 해제
   observer.complete()
   Observable.unsubscribe()
   구독 해제 시점에 구독하고 있는 모든 대상의 구독을 종료한다.

### RxJS Subject

RxJS에서는 Subject를 지원한다.
Subject는 여러 Observer 에서 구독이 가능하며, Subject에서 전달하는 값을 Observer 들이 전달 받는다.

```null
// javascript
const subject = new Subject();
subject.subscribe(
  (item) => console.log('a', item),
  (err) => console.error(err),
  () => console.log('a complete'),
);
subject.subscribe(
  (item) => console.log('b', item),
  (err) => console.error(err),
  () => console.log('b complete'),
);
subject.next('item');
subject.complete();
// a item
// b item
// a complete
// b complete
```

### RxJS Scheduler

RxJS에서는 Scheduler를 지원한다.

자바스크립트는 싱글스레드, 이벤트 루프로 동작하기 때문에, RxJS 에서의 Scheduler 는 이벤트 루프에 어떤 순서로 처리될지로 구현되었다.

스케줄러에는 3가지 종류가 존재한다.

1. AsyncScheduler
   setTimeout과 비슷하다.
   asyncScheduler.schedule(() => console.log(‘async’), 2000);
2. AsapScheduler
   asapScheduler.schedule(() => console.log(‘asap’));
   다음 이벤트 루프에 실행
3. QueueScheduler
   스케줄러에 전달된 state 를 처리한다.

```javascript
queueScheduler.schedule(function (x) {
  if(state) { this.schedule(state-1) }
  console.log(state);
}, 0, 3)
// 3
// 2
// 1
// 0
```

### 간단한 예제

1부터 10 까지 중에서 짝수를 구하여 1 을 더하는 예제 이다.

```javascript
range(1, 10).pipe(
  tap(
    (x) => console.log('tap:' + x),
    (err) => console.error(err),
    () => console.log('tap complete')
  ),
  filter(x => !(x % 2)),
  map(x => x + 1),
).subscribe(
  (x) => console.log('subscribe:' + x),
  (err) => console.err(err),
  () => console.log('complete')
);
// tap:1
// tap:2
// subscribe:3
// tap:3
// tap:4
// subscribe:5
// tap:5
// tap:6
// subscribe:7
// tap:7
// tap:8
// subscribe:9
// tap:9
// tap:10
// subscribe:11
// tap complete
// complete
```