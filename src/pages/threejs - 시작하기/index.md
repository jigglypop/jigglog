---
path: '/threejs - 시작하기/'
category: 'threejs'
tags: ['threejs']
title: 'threejs - 시작하기'
date: '2021-09-4T01:00:00.000Z'
summary: 'threejs - 시작하기'
images: ['images/threejs.png']
---



Three.js 는 자바스크립트 3d 라이브러리로 많은 곳에서 사용되고 있습니다.





## three.js?

---



이번 우아한 테크 캠프에서 썼던 three.js를 기획물로, 그리고 마지막에는 react-three-fiber 등 리액트에서 활용할 수 있는 방법에 대해 알아보려고 합니다. 

Three.js 의 장점은 우선 대부분의 브라우저, 심지어 모바일에서도 동작하고 3d 를 구현하기 위해 개별 플러그인이 필요하지 않습니다.

또한 WebGL 자체는 매우 복잡한데 webGL을 몰라도 쉽게 사용할 수 있다는 것입니다.  WebGL은 일반 캔버스와는 달리 GPU 자원을 사용할 수 있는데 이 부분은 3D 의 퀄리티와 속도를 상당히 높이므로 상당한 이점입니다.



```html
<html>
  <head></head>
  <style>
  </style>

  <body>
    <script src="main.js"></script>
  </body>
</html>
```


body에 적용된 css는 webpack의 css-loader를 직접 추가하셔서 개별 css 파일로 분리하셔도 좋습니다.

앞으로 작성하는 모든 코드는 index.ts에 추가할 것입니다.



## three.js hello World

---



우선 간단하게 three.js 헬로우 월드부터 시작해 볼까요?



1. three.js 패키지를 설치합니다. three 라이브러리 내에 타입 정의가 있기 때문에, 타입 definition을 따로 설치하지 않아도 됩니다.

```bash
npm install three
```



2. main 함수를 추가하고, 해당 main함수를 window.onload에 할당합니다.

```javascript
const main = () => {
}

window.onload = main;
```



3. html의 body에 output의 id를 가진 간단한 div를 추가합니다

```javascript
const main = () => {
    const output = document.createElement('div');
    output.id = 'output'
    document.getElementsByTagName("body")[0].appendChild(div);
}
```





3. three.js 를 import하고, scene과 renderer를 선언합니다.

```javascript
import \* as three from "three"; // 최상위에 해줄 것

const main = () => {
//...
const scene = new three.Scene();
const renderer = new three.WebGLRenderer();
}
```




여기서 주목할 부분은, 렌더링해주어야 할 대상(scene)과 렌더링해주는 대상(renderer)이 분리되어 있습니다.



4. renderer에 배경 색깔과 크기를 지정해주고, 그림자를 enable 해줍니다.

```javascript
renderer.setClearColor(0xeeeeee);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
```




그림자를 넣는 작업은 자원을 많이 소모하여 default로 false가 설정되어 있기 때문에 true로 변경해주어야 합니다.

5. plane, sphere과 cube를 추가해줍니다.

```javascript
const planeGeometry = new three.PlaneGeometry(60, 20);
const planeMaterial = new three.MeshLambertMaterial({ color: 0xcccccc });
const plane = new three.Mesh(planeGeometry, planeMaterial);

const cubeGeometry = new three.BoxGeometry(4, 4, 4);
const cubeMaterial = new three.MeshLambertMaterial({ color: 0xff0000 });
const cube = new three.Mesh(cubeGeometry, cubeMaterial);

const cubeGeometry = new three.BoxGeometry(4, 4, 4);
const cubeMaterial = new three.MeshLambertMaterial({ color: 0xff0000 });
const cube = new three.Mesh(cubeGeometry, cubeMaterial);
```




6. plane, sphere, cube의 그림자를 설정해줍니다. 그림자를 받기 + 그림자를 생성하기를 모두 추가해줍니다.

```javascript
plane.castShadow = true;
plane.receiveShadow = true;
cube.castShadow = true;
cube.receiveShadow = true;
sphere.castShadow = true;
sphere.receiveShadow = true;
```



7. plane, sphere, cube의 위치를 지정해줍니다.

```javascript
plane.position.set(15, 0, 0);
cube.position.set(-4, 3, 0);
sphere.position.set(20, 4, 2);
```



8. camera를 생성하고, 카메라의 위치를 지정하고, 카메라의 시점을 조정합니다.

```javascript
const camera = new three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.2, 1000);
camera.position.set(-30, 40, 30);
camera.lookAt(scene.position);
```



9. 광원을 생성하고, 광원의 위치를 지정하고, 광원에 의해 그림자가 생성되게 설정합니다.

```javascript
const spotLight = new three.SpotLight(0xffffff);
spotLight.position.set(-40, 60, -10);
spotLight.castShadow = true;
```



10. 생성한 개별 객체들을 scene에 추가해줍니다.

```javascript
scene.add(plane);
scene.add(cube);
scene.add(sphere);
scene.add(spotLight);
```

camera는 render할 때 camera를 추가해줍니다. (렌더링되는 영역 - 시야와 세계는 분리되어 구성됩니다)



11. 마지막으로, renderer로 렌더링해줍니다.

```javascript
renderer.render(scene, camera);
```



이제 정말 간단한 three.js를 다룰 수 있게 되었습니다!

간단히 지금까지 어떤 부분을 했는지 확인해 볼까요?



1. Scene을 정의하였습니다.
2. Renderer를 정의하였고, 그림자를 설정해주었습니다.
3. 각 Object의 Geometry, Material을 정의하고 position을 지정하였으며 그림자를 설정해주었습니다.
4. 광원을 정의하고 위치를 지정한 후 그림자를 설정해주었습니다.
5. 카메라를 정의하고, 카메라의 위치 및 보는 방향을 지정하였습니다.
6. 렌더러를 돔에 추가하고, 렌더링하였습니다.



첫술에 배부르지는 않겠죠! 다음 시간에는 gltf같은 다른 3D를 임포트해서 렌더링해 봅시다
