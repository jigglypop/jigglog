---
path: "/[Mobx] Mobx 사용하기/"
category: "Mobx"
tags: ["react", "Mobx"]
title: "[Mobx] Mobx 사용하기"
date: "2020-07-31T19:23:00.000Z"
summary: "리액트로 mobx를 다뤄보기 시리즈입니다."
images: ["images/mobx.jpg"]
---

# Mobx의 [요지]

---

지금까지는 모든 것이 좀 화려하게 들릴 수 있지만, MobX를 사용하여 앱을 반응적으로 만드는 것은 다음과 같은 세가지 단계로 요약된다.

## 1. 자신의 상태를 정의하고 관찰할 수 있도록 합니다.

원하는 모든 데이터 구조(개체, 어레이, 클래스)에 상태 저장 반복적인 데이터 구조, 참조 자료, 그건 중요하지요. 시간이 지남에 따라 변경하려는 모든 속성이 다음과 같이 표시되는지 확인하십시오.`mobx`관찰할 수 있게 하기 위해서요

```javascript
import { observable } from "mobx";

var appState = observable({
  timer: 0,
});
```

## 2. 상태 변화에 대응하는 보기를 만듭니다.

우리는 우리의 것을 만들지 않나요?`appState`아무것도 관찰할 수 없습니다. 이제 의 관련 데이터가 자동으로 업데이트되는 보기를 생성할 수 있습니다.`appState`변화들 MobX는 당신의 보기를 업데이트하는 최소한의 방법을 찾을 것이다. 이 한가지 사실로 인해 엄청난 양의 보일러 플레이트가 절약되고 위험할 [정도로 효율](https://mendix.com/tech-blog/making-react-reactive-pursuit-high-performing-easily-maintainable-react-apps/)적입니다.

일반적으로 모든 함수는 데이터를 관찰하는 반응형 뷰가 될 수 있으며 MobX는 모든 ES5인증 JavaScript환경에 적용될 수 있습니다. 그러나(ES6)에는 React구성 요소 형식의 보기가 있습니다.

```javascript
import { observer } from "mobx-react";

@observer
class TimerView extends React.Component {
  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {this.props.appState.timer}
      </button>
    );
  }

  onReset() {
    this.props.appState.resetTimer();
  }
}

ReactDOM.render(<TimerView appState={appState} />, document.body);
```

(의 이행을 위해`resetTimer`기능은 다음 섹션을 참조하십시오.

## 3. 상태를 수정합니다.

세번째로 해야 할 일은 국가를 수정하는 것이다. 결국 그것이 당신의 앱이다. 다른 많은 프레임워크와 달리 MobX는 당신이 이것을 어떻게 하는지를 지시하지 않는다. 모범 사례도 있지만 기억해야 할 중요한 점은 **_MobX가 간단하고 간단한 방법으로 일을 할 수 있도록 도와_** 준다는 것이다.

다음 코드는 매초마다 데이터를 변경하며, UI는 필요할 때 자동으로 업데이트됩니다. 상태를 *변경*하는 컨트롤러 기능이나 *업데이트*해야 하는 보기에 명시적인 관계가 정의되어 있지 않습니다. 사용자의 상태 _및_ *관점*에 대한 설명`observable`모그가 모든 관계를 탐지하기에 충분합니다. 다음은 상태를 변경하는 두가지 예입니다.

```javascript
appState.resetTimer = action(function reset() {
  appState.timer = 0;
});

setInterval(
  action(function tick() {
    appState.timer += 1;
  }),
  1000
);
```

그`action`래퍼는 엄격한 모드에서 MobX를 사용하는 경우에만 필요합니다(기본적으로 꺼짐). 응용 프로그램의 구조를 개선하고 상태를 수정하려는 기능의 의도를 표현하는 데 도움이 되므로 액션을 사용하는 것이 좋습니다. 또한 최적의 성능을 위해 트랜잭션을 자동으로 적용합니다.

[JSFiddle](http://jsfiddle.net/mweststrate/wgbe4guu/)에서 또는 [MobXilerplate프로젝트](https://github.com/mobxjs/mobx-react-boilerplate)를 복제하여 이 예제를 자유롭게 사용해 보십시오.
