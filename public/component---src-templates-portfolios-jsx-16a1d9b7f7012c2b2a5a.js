(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"4QhF":function(e,t,n){},U951:function(e,t,n){"use strict";var a=n("vOnD").default.div.withConfig({displayName:"SimpleWrapper",componentId:"sc-1ui6x1z-0"})(['margin:auto;padding:120px 0 0;max-width:1200px;font-size:16px;background-image:white;@media (max-width:614px){padding:70px 16px 0;}&:before,&:after{display:block;content:"";clear:both;}h1{margin:0.67em 0;font-size:36px;}time{margin:1em 0;font-size:14px;}']);t.a=a},"af+D":function(e,t,n){"use strict";n("a1Th"),n("h7Nl"),n("Btvt"),n("I5cv");var a=n("lSNA"),o=n("lwsE"),r=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),l=n("Nsbk");function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return s(this,n)}}function p(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var u=p(n("wx14")),f=p(n("zLVn")),d=p(n("q1tI")),h=n("P4c3"),m=h.Globals.defaultElement,y=h.animated(m),g=d.createContext(null),x=g.Provider,v=g.Consumer;function w(e){return e?"scrollLeft":"scrollTop"}var k=function(e){i(n,e);var t=c(n);function n(){return o(this,n),t.apply(this,arguments)}return r(n,[{key:"componentDidMount",value:function(){var e=this.parent;e&&(e.layers=e.layers.concat(this),e.update())}},{key:"componentWillUnmount",value:function(){var e=this,t=this.parent;t&&(t.layers=t.layers.filter((function(t){return t!==e})),t.update())}},{key:"setPosition",value:function(e,t,n){void 0===n&&(n=!1);var a=this.parent.props.config,o=Math.floor(this.props.offset)*e,r=e*this.props.offset+o*this.props.speed,i=parseFloat(-t*this.props.speed+r);this.controller.update({translate:i,config:a,immediate:n})}},{key:"setHeight",value:function(e,t){void 0===t&&(t=!1);var n=this.parent.props.config,a=parseFloat(e*this.props.factor);this.controller.update({space:a,config:n,immediate:t})}},{key:"initialize",value:function(){var e=this.props,t=this.parent,n=Math.floor(e.offset)*t.space,a=t.space*e.offset+n*e.speed,o=parseFloat(-t.current*e.speed+a);this.controller=new h.Controller({space:t.space*e.factor,translate:o})}},{key:"renderLayer",value:function(){var e,t=this.props,n=t.style,o=t.children,r=(t.offset,t.speed,t.factor,t.className),i=f(t,["style","children","offset","speed","factor","className"]),s=this.parent.props.horizontal,l=this.controller.interpolations.translate.interpolate((function(e){return s?"translate3d(".concat(e,"px,0,0)"):"translate3d(0,".concat(e,"px,0)")}));return d.createElement(y,u({},i,{className:r,style:u((e={position:"absolute",backgroundSize:"auto",backgroundRepeat:"no-repeat",willChange:"transform"},a(e,s?"height":"width","100%"),a(e,s?"width":"height",this.controller.interpolations.space),a(e,"WebkitTransform",l),a(e,"MsTransform",l),a(e,"transform",l),e),n)}),o)}},{key:"render",value:function(){var e=this;return d.createElement(v,null,(function(t){return t&&!e.parent&&(e.parent=t,e.initialize()),e.renderLayer()}))}}]),n}(d.PureComponent);k.defaultProps={factor:1,offset:0,speed:0};var b=function(e){i(n,e);var t=c(n);function n(e){var a;return o(this,n),(a=t.call(this)).moveItems=function(){a.layers.forEach((function(e){return e.setPosition(a.space,a.current)})),a.busy=!1},a.scrollerRaf=function(){return h.Globals.requestFrame(a.moveItems)},a.onScroll=function(e){var t=a.props.horizontal;a.busy||(a.busy=!0,a.scrollerRaf(),a.current=e.target[w(t)])},a.update=function(){var e=a.props,t=e.scrolling,n=e.horizontal,o=w(n);a.container&&(a.space=a.container[n?"clientWidth":"clientHeight"],t?a.current=a.container[o]:a.container[o]=a.current=a.offset*a.space,a.content&&(a.content.style[n?"width":"height"]="".concat(a.space*a.props.pages,"px")),a.layers.forEach((function(e){e.setHeight(a.space,!0),e.setPosition(a.space,a.current,!0)})))},a.updateRaf=function(){h.Globals.requestFrame(a.update),setTimeout(a.update,150)},a.scrollStop=function(e){return a.controller.stop()},a.state={ready:!1},a.layers=[],a.space=0,a.current=0,a.offset=0,a.busy=!1,a.controller=new h.Controller({scroll:0}),a}return r(n,[{key:"scrollTo",value:function(e){var t=this.props,n=t.horizontal,a=t.config,o=w(n);this.scrollStop(),this.offset=e;var r=this.container;this.controller.update({scroll:e*this.space,config:a,onFrame:function(e){var t=e.scroll;return r[o]=t}})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateRaf,!1),this.update(),this.setState({ready:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateRaf,!1)}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"render",value:function(){var e,t=this,n=this.props,o=n.style,r=n.innerStyle,i=n.pages,s=n.id,l=n.className,c=n.scrolling,p=n.children,f=n.horizontal,h=c?"scroll":"hidden";return d.createElement(m,{ref:function(e){return t.container=e},onScroll:this.onScroll,onWheel:c?this.scrollStop:null,onTouchStart:c?this.scrollStop:null,style:u({position:"absolute",width:"100%",height:"100%",overflow:h,overflowY:f?"hidden":h,overflowX:f?h:"hidden",WebkitOverflowScrolling:"touch",WebkitTransform:"translate(0px,0px)",MsTransform:"translate(0px,0px)",transform:"translate3d(0px,0px,0px)"},o),id:s,className:l},this.state.ready&&d.createElement(m,{ref:function(e){return t.content=e},style:u((e={position:"absolute"},a(e,f?"height":"width","100%"),a(e,"WebkitTransform","translate(0px,0px)"),a(e,"MsTransform","translate(0px,0px)"),a(e,"transform","translate3d(0px,0px,0px)"),a(e,"overflow","hidden"),a(e,f?"width":"height",this.space*i),e),r)},d.createElement(x,{value:this},p)))}}]),n}(d.PureComponent);b.Layer=k,b.defaultProps={config:h.config.slow,scrolling:!0,horizontal:!1},t.Parallax=b,t.ParallaxLayer=k},dbyK:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return E}));var a=n("q1tI"),o=n.n(a),r=n("6uTu"),i=n("17x9"),s=n.n(i),l=n("TJpk"),c=n.n(l),p=n("Wbzz"),u=n("WlAH"),f=n("vOnD"),d=n("U951"),h=n("af+D"),m=(n("pIFo"),n("tRbT")),y=f.default.div.withConfig({displayName:"IconSetBig__LogoItem",componentId:"sc-1htcmd7-0"})(["color:white;text-shadow:2px 2px 20px white;font-weight:800;font-size:15px;margin:5px;animation:blink ","s ease-in-out infinite alternate;@media (max-width:600px){font-size:10px;}@keyframes blink{30%{opacity:0.4;}100%{opacity:1;}}"],(function(e){return e.second})),g=function(e){var t=e.IconObject;return o.a.createElement(m.a,{container:!0,style:{display:"flex",justifyContent:"center",width:"40%"}},t.map((function(e,t){return o.a.createElement(y,{second:Math.floor(1.6*Math.random())+.5,key:t},"#",e.replace("logo","").toUpperCase())})))},x=(n("4QhF"),Object(f.default)(d.a).withConfig({displayName:"Portfolios__Wrapper",componentId:"gnocsz-0"})(["padding:100px 0 0;@media (max-width:414px){padding:70px 0 0;}"]),f.default.img.withConfig({displayName:"Portfolios__BlinkImage",componentId:"gnocsz-1"})(["animation:blink 0.5s ease-in-out infinite alternate;@keyframes blink{50%{opacity:0.1;}100%{opacity:1;}}"]),f.default.div.withConfig({displayName:"Portfolios__TitleBig",componentId:"gnocsz-2"})(['font-family:"NanumBarunGothic" !important;animation:blink 1.2s ease-in-out infinite alternate;@keyframes blink{50%{opacity:0.5;}100%{opacity:1;}}font-size:50px;font-weight:800;text-shadow:4px 4px 40px white;@media (max-width:600px){font-size:30px;}'])),v=f.default.div.withConfig({displayName:"Portfolios__Content",componentId:"gnocsz-3"})(['font-family:"NanumBarunGothic" !important;font-size:20px;font-weight:800;text-shadow:4px 4px 40px white;@media (max-width:600px){font-size:15px;}']),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"".concat(t?"url(":"","https://awv3node-homepage.surge.sh/build/assets/").concat(e,".svg").concat(t?")":"")},k=function(e){var t,r=e.data.portfolios.edges,i=(Object(a.useRef)(),function(e){r.length-1===e?t.scrollTo(0):t.scrollTo(e+1)});return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.Parallax,{ref:function(e){return t=e},pages:r.length},o.a.createElement(h.ParallaxLayer,{offset:0,speed:0,factor:3,style:{backgroundImage:w("stars",!0),backgroundSize:"cover"}}),r.map((function(e,t){var a=e.node.frontmatter,r=a.path,s=a.title,l=a.description,c=a.images,u=void 0===c?[]:c,f=a.iconset;return o.a.createElement("div",{key:t},o.a.createElement(h.ParallaxLayer,{offset:t,speed:1},o.a.createElement("img",{src:n("M3HJ")("./".concat(u[0])),alt:"portfolio",style:{opacity:.3},onClick:function(){return i(t)}})),o.a.createElement(h.ParallaxLayer,{offset:t,speed:-0,style:{display:"flex",alignItems:"center",justifyContent:"center",zIndex:"6"}},o.a.createElement(p.Link,{to:r},o.a.createElement(x,null,s))),o.a.createElement(h.ParallaxLayer,{offset:t,speed:-0,style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"13%"},onClick:function(){return i(t)}},o.a.createElement(v,null,l)),o.a.createElement(h.ParallaxLayer,{offset:t,speed:-0,style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"150px"},onClick:function(){return i(t)}},o.a.createElement(g,{IconObject:f})))}))),o.a.createElement(c.a,null,o.a.createElement("title",null,"".concat(u.PREFIX,"PORTFOLIOS")),o.a.createElement("meta",{name:"og:title",content:"".concat(u.PREFIX,"PORTFOLIOS")})))};k.propTypes={data:s.a.shape({}).isRequired};var b=k,E=(t.default=function(e){return o.a.createElement(r.a,e,o.a.createElement(b,e))},"1644520203")}}]);
//# sourceMappingURL=component---src-templates-portfolios-jsx-16a1d9b7f7012c2b2a5a.js.map