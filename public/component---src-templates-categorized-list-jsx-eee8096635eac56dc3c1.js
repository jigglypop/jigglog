(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{JP5d:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return N}));var r=n("q1tI"),a=n.n(r),o=n("6uTu"),l=(n("91GP"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("h7Nl"),n("Btvt"),n("rGqo"),n("rE2o"),n("ioFf"),n("KKXr"),n("17x9"),n("TJpk")),i=n.n(l),c=n("/3x3"),u=n("dz3X"),s=n("WlAH"),d=(n("W69Y"),n("oPSi"),n("l1im")),m=n("Wbzz"),f=n("07k4"),p=(n("0biq"),n("mC4u")),g=n("z5xC"),y=n("PGEe"),h=n("vOnD"),b=h.a.div.withConfig({displayName:"styled__CategoryWrapper",componentId:"sc-1qjk0tb-0"})(["display:grid;grid-template-rows:200px 100px 100px 1fr 200px;"]),v=h.a.div.withConfig({displayName:"styled__ListImage",componentId:"sc-1qjk0tb-1"})(["grid-row:1/2;"]),E=h.a.div.withConfig({displayName:"styled__ListTitle",componentId:"sc-1qjk0tb-2"})(["grid-row:2/3;display:flex;justify-content:center;align-items:center;text-align:center;background-color:black;h3{font-size:32px;font-weight:800;color:white;}"]),w=h.a.div.withConfig({displayName:"styled__ListCategory",componentId:"sc-1qjk0tb-3"})(["grid-row:3/4;display:flex;justify-content:center;align-items:center;text-align:center;background-color:black;overflow:scroll;h3{font-size:28px;font-weight:800;color:white;}"]),O=h.a.div.withConfig({displayName:"styled__ListContent",componentId:"sc-1qjk0tb-4"})(["grid-row:4/5;"]),j=h.a.div.withConfig({displayName:"styled__ListPage",componentId:"sc-1qjk0tb-5"})(["grid-row:5/6;display:flex;justify-content:center;align-items:center;text-align:center;"]);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=function(e){var t=e.data,n=e.location,o=C(Object(r.useState)(1),2),l=o[0],h=o[1],_=C(n.pathname.split("/"),3)[2],I=Object(u.a)(t).filter((function(e){var t=e.node.frontmatter.category;return decodeURI(_)===t})),N=I.length,P=I.slice((l-1)*s.CONTENT_PER_PAGE,l*s.CONTENT_PER_PAGE),T=[];Object(u.a)(t).filter((function(e){var t=e.node.frontmatter,n=t.type,r=t.category;return null===n?T.push(r):""}));var A=T.reduce((function(e,t){return e[t]||(e[t]={key:t,length:0}),e[t].length++,e}),{}),S=[];for(var q in A)S.push(A[q]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,null,a.a.createElement(i.a,null,a.a.createElement("title",null,decodeURI(_)),a.a.createElement("meta",{name:"og:title",content:decodeURI(_)})),a.a.createElement(p.a,null,a.a.createElement(b,null,a.a.createElement(v,null,a.a.createElement(y.a,null,a.a.createElement("h1",null,"CATEGORY"))),a.a.createElement(E,null,a.a.createElement("h3",null,"카테고리")),a.a.createElement(w,null,a.a.createElement("div",null,S.map((function(e){var t=e.key;e.length;return a.a.createElement("div",{style:{display:"inline-block"}},a.a.createElement(m.Link,{to:"/categories/".concat(t,"/1")},a.a.createElement(g.a,null,a.a.createElement("h4",null,t))))})))),a.a.createElement(O,null,0===P.length?a.a.createElement("div",null,"No posts."):null,P.map((function(e){var t=e.node.frontmatter,n=t.images,r=t.tags,o=t.path,l=x(t,["images","tags","path"]);return a.a.createElement(c.a,k({key:o,path:o,images:n,tags:r},l))}))),a.a.createElement(j,null,a.a.createElement(d.a,{count:Math.ceil(N/s.CONTENT_PER_PAGE),page:l,size:"large",onChange:function(e,t){h(t)},style:{listStyle:"none",color:"primary",marginBottom:"100px"}}))))))},N=(t.default=function(e){return a.a.createElement(o.a,e,a.a.createElement(I,e))},"3424469794")},TsY6:function(e,t,n){e.exports=n.p+"static/moon-f3a8c40e82bf8b0f8d61a88ddb7d34e8.webp"},W69Y:function(e,t,n){"use strict";var r=n("vOnD"),a=n("P4c3"),o=Object(r.a)(a.animated.div).withConfig({displayName:"Circle",componentId:"sc-1v7i063-0"})(["border-radius:50%;"]),l=n("TsY6"),i=n.n(l),c=Object(r.b)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);Object(r.a)(o).withConfig({displayName:"LargeMoon",componentId:"sc-1jqrak2-0"})(["width:100%;height:100%;background-image:url(",");background-size:cover;animation:"," 120s linear infinite;"],i.a,c)}}]);
//# sourceMappingURL=component---src-templates-categorized-list-jsx-eee8096635eac56dc3c1.js.map