(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{tRbT:function(t,e,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("pIFo");var a=n("Ff2n"),r=n("wx14"),i=n("q1tI"),o=n("iuhU"),c=n("H2TA"),l=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var d=i.forwardRef((function(t,e){var n=t.alignContent,c=void 0===n?"stretch":n,l=t.alignItems,s=void 0===l?"stretch":l,p=t.classes,d=t.className,f=t.component,u=void 0===f?"div":f,g=t.container,m=void 0!==g&&g,x=t.direction,h=void 0===x?"row":x,b=t.item,w=void 0!==b&&b,y=t.justify,v=void 0===y?"flex-start":y,j=t.lg,E=void 0!==j&&j,O=t.md,S=void 0!==O&&O,z=t.sm,k=void 0!==z&&z,I=t.spacing,C=void 0===I?0:I,N=t.wrap,W=void 0===N?"wrap":N,T=t.xl,R=void 0!==T&&T,P=t.xs,A=void 0!==P&&P,G=t.zeroMinWidth,_=void 0!==G&&G,q=Object(a.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),M=Object(o.a)(p.root,d,m&&[p.container,0!==C&&p["spacing-xs-".concat(String(C))]],w&&p.item,_&&p.zeroMinWidth,"row"!==h&&p["direction-xs-".concat(String(h))],"wrap"!==W&&p["wrap-xs-".concat(String(W))],"stretch"!==s&&p["align-items-xs-".concat(String(s))],"stretch"!==c&&p["align-content-xs-".concat(String(c))],"flex-start"!==v&&p["justify-xs-".concat(String(v))],!1!==A&&p["grid-xs-".concat(String(A))],!1!==k&&p["grid-sm-".concat(String(k))],!1!==S&&p["grid-md-".concat(String(S))],!1!==E&&p["grid-lg-".concat(String(E))],!1!==R&&p["grid-xl-".concat(String(R))]);return i.createElement(u,Object(r.default)({className:M,ref:e},q))})),f=Object(c.a)((function(t){return Object(r.default)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return l.forEach((function(a){var r=t.spacing(a);0!==r&&(n["spacing-".concat(e,"-").concat(a)]={margin:"-".concat(p(r,2)),width:"calc(100% + ".concat(p(r),")"),"& > $item":{padding:p(r,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var a={};s.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var r="".concat(Math.round(t/12*1e8)/1e6,"%");a[e]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.default)(t,a):t[e.breakpoints.up(n)]=a}(e,t,n),e}),{}))}),{name:"MuiGrid"})(d);e.a=f},wDpu:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return I}));var a=n("q1tI"),r=n.n(a),i=n("6uTu"),o=(n("91GP"),n("RW0V"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("h7Nl"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb"),n("KKXr"),n("17x9")),c=n.n(o),l=n("TJpk"),s=n.n(l),p=n("/3x3"),d=n("dz3X"),f=n("WlAH"),u=n("tRbT"),g=n("Wbzz"),m=n("l1im"),x=n("W69Y"),h=n("oPSi"),b=n.n(h),w=n("vOnD");function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function v(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(l){r=!0,i=l}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var O=w.default.div.withConfig({displayName:"TaggedList__PostsWrapper",componentId:"vlmqs5-0"})(['background:linear-gradient(45deg,#c31432,#240b36) !important;margin:auto;padding:120px 0 0;max-width:100%;font-size:0;.cardpage{padding:100px;}@media (max-width:1000px){padding:70px 16px 0;}&:before,&:after{display:block;content:"";clear:both;}h1{margin:0.67em 0;font-size:32px;}time{margin:1em 0;font-size:14px;}.cardpage{padding:30px;}']),S=w.default.div.withConfig({displayName:"TaggedList__ImageWrapper",componentId:"vlmqs5-1"})([".jb-wrap{width:400px;margin:10px auto;position:relative;}.jb-wrap img{width:100%;vertical-align:middle;}.jb-text{color:white;font-weight:800;text-shadow:2px 2px 20px gray;font-size:35px;margin-top:-50px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);animation:blink 1.2s ease-in-out infinite alternate;@keyframes blink{50%{opacity:0.5;}100%{opacity:1;}}}.jb-under{color:white;font-weight:800;text-shadow:2px 2px 20px gray;font-size:25px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}.jb-tag{margin-top:50px;color:white;z-index:20;font-weight:800;text-shadow:2px 2px 20px gray;font-size:12px;}h2{margin:2px;}@media (max-width:1000px){.jb-wrap{width:300px;margin:10px auto;position:relative;}.jb-wrap img{width:100%;vertical-align:middle;}.jb-text{color:white;font-weight:800;text-shadow:2px 2px 20px gray;font-size:20px;margin-top:-50px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);animation:blink 1.2s ease-in-out infinite alternate;@keyframes blink{50%{opacity:0.5;}100%{opacity:1;}}}.jb-under{color:white;font-weight:800;text-shadow:2px 2px 20px gray;font-size:15px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}.jb-tag{margin-top:50px;color:white;z-index:20;font-weight:800;text-shadow:2px 2px 20px gray;font-size:10px;}h2{margin:2px;}}"]),z=function(t){var e=t.data,n=t.location,i=j(Object(a.useState)(1),2),o=i[0],c=i[1],l=j(n.pathname.split("/"),3)[2],h=Object(d.a)(e).filter((function(t){return-1!==t.node.frontmatter.tags.indexOf(decodeURI(l))})),w=h.length,E=h.slice((o-1)*f.CONTENT_PER_PAGE,o*f.CONTENT_PER_PAGE),z=[];Object(d.a)(e).filter((function(t){var e=t.node.frontmatter,n=e.type,a=e.tags;return null===n?Object.entries(a).map((function(t){return z.push(t[1])})):""}));var k=z.reduce((function(t,e){return t[e]||(t[e]={key:e,length:0}),t[e].length++,t}),{}),I=[];for(var C in k)I.push(k[C]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement(s.a,null,r.a.createElement("title",null,decodeURI(l)),r.a.createElement("meta",{name:"og:title",content:decodeURI(l)})),r.a.createElement(S,null,r.a.createElement("div",{className:"jb-wrap"},r.a.createElement(x.a,null,r.a.createElement("img",{src:b.a})),r.a.createElement("h1",{className:"jb-text"},decodeURI(l)),r.a.createElement("h1",{className:"jb-under"},"태그"),r.a.createElement(u.a,{container:!0,className:"jb-tag"},I.map((function(t){var e=t.key;t.length;return r.a.createElement(u.a,{key:e},r.a.createElement("h2",null,r.a.createElement(g.Link,{to:"/tags/".concat(e,"/1")},"#",e)))}))))),r.a.createElement("div",{className:"cardpage"},r.a.createElement(m.a,{count:Math.ceil(w/f.CONTENT_PER_PAGE),page:o,size:"large",onChange:function(t,e){c(e)},style:{listStyle:"none",color:"primary",marginBottom:"100px"}}),0===E.length?r.a.createElement("div",null,"No posts."):null,E.map((function(t){var e=t.node.frontmatter,n=e.images,a=e.tags,i=e.path,o=v(e,["images","tags","path"]);return r.a.createElement(p.a,y({key:i,path:i,tags:a,images:n},o))})))))};z.propTypes={data:c.a.shape({}).isRequired,location:c.a.shape({}).isRequired};var k=z,I=(e.default=function(t){return r.a.createElement(i.a,t,r.a.createElement(k,t))},"253846513")}}]);
//# sourceMappingURL=component---src-templates-tagged-list-jsx-dd9e380e6ca247a98712.js.map