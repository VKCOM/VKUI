"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5794],{"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":function(e,t,r){r.d(t,{r:function(){return n}});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_24.js":function(e,t,r){r.d(t,{P:function(){return n}});var n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706Z" /></g></symbol>',16,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/BaseGallery/BaseGallery.module.css":function(e,t,r){var n=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=r.n(n),i=r("../../node_modules/css-loader/dist/runtime/api.js"),a=r.n(i)()(l());a.push([e.id,".BaseGallery--aehDU{overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.BaseGallery__viewport--I1eNk{height:100%;margin:0;position:relative}.BaseGallery--align-center--JQQn4 .BaseGallery__viewport--I1eNk{margin:0 auto}.BaseGallery__layer--nJ0KW{align-items:stretch;display:flex;height:100%;min-height:100px;width:100%}.BaseGallery--draggable--J_egI .BaseGallery__layer--nJ0KW{cursor:-webkit-grab;cursor:grab}.BaseGallery__layer--nJ0KW:empty{min-height:0}.BaseGallery__slide--N5num{flex:0 0 auto;max-width:100%;overflow:hidden;width:100%}.BaseGallery--custom-width--Cet7r .BaseGallery__slide--N5num{width:auto}.BaseGallery__slide--N5num>*{min-height:100%;width:100%}.BaseGallery__bullets--acbMd{align-items:center;bottom:10px;display:flex;height:6px;justify-content:center;left:0;position:absolute;width:100%}.BaseGallery__bullets--dark--T_Veu .BaseGallery__bullet--YYi6w{background-color:#2c2d2e;background-color:var(--vkui--color_icon_primary_invariably)}.BaseGallery__bullets--light--wkxQq .BaseGallery__bullet--YYi6w{background-color:#fff;background-color:var(--vkui--color_icon_contrast)}.BaseGallery__bullet--YYi6w{border-radius:50%;height:6px;margin:0 3px;opacity:.64;opacity:var(--vkui--opacity_disable_accessibility);width:6px}.BaseGallery__bullet--active--WpJY6{opacity:1}.BaseGallery__arrow--Z8JoJ{opacity:0;position:absolute;top:0}.BaseGallery--aehDU:hover .BaseGallery__arrow--Z8JoJ{opacity:.64;opacity:var(--vkui--opacity_disable_accessibility)}.BaseGallery--aehDU .BaseGallery__arrow--Z8JoJ:hover{opacity:1}",""]),a.locals={BaseGallery:"BaseGallery--aehDU",BaseGallery__viewport:"BaseGallery__viewport--I1eNk","BaseGallery--align-center":"BaseGallery--align-center--JQQn4",BaseGallery__layer:"BaseGallery__layer--nJ0KW","BaseGallery--draggable":"BaseGallery--draggable--J_egI",BaseGallery__slide:"BaseGallery__slide--N5num","BaseGallery--custom-width":"BaseGallery--custom-width--Cet7r",BaseGallery__bullets:"BaseGallery__bullets--acbMd","BaseGallery__bullets--dark":"BaseGallery__bullets--dark--T_Veu",BaseGallery__bullet:"BaseGallery__bullet--YYi6w","BaseGallery__bullets--light":"BaseGallery__bullets--light--wkxQq","BaseGallery__bullet--active":"BaseGallery__bullet--active--WpJY6",BaseGallery__arrow:"BaseGallery__arrow--Z8JoJ"},t.Z=a},"./src/components/Gallery/Gallery.tsx":function(e,t,r){r.d(t,{r:function(){return U}});var n=r("../../node_modules/react/jsx-runtime.js"),l=r("../../node_modules/react/index.js"),i=r("./src/helpers/math.ts"),a=r("./src/hooks/useIsClient.ts"),o=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),u=r("./src/hooks/useAdaptivityHasPointer.ts"),s=r("./src/hooks/useExternRef.ts"),c=r("./src/hooks/useGlobalEventListener.ts"),d=r("./src/lib/dom.tsx"),f=r("./src/lib/useIsomorphicLayoutEffect.ts"),m=r("./src/components/RootComponent/RootComponent.tsx"),y=r("./src/components/ScrollArrow/ScrollArrow.tsx"),Touch=r("./src/components/Touch/Touch.tsx"),p=function(e){var t=e.containerWidth,r=void 0===t?0:t,n=e.layerWidth,l=void 0===n?0:n,i=e.slides,a=void 0===i?[]:i,o=e.viewportOffsetWidth,u=void 0===o?0:o,s=e.align,c=e.isCenterWithCustomWidth;switch(s){case"left":return r-l;case"right":return u-l;case"center":if(!c||!a.length)return u-(r-u)/2-l;var d=a[a.length-1];return u/2-d.coordX-d.width/2}},h=function(e){var t=e.slides,r=void 0===t?[]:t,n=e.viewportOffsetWidth;if(e.isCenterWithCustomWidth&&r.length){var l=r[0],i=l.width;return(void 0===n?0:n)/2-l.coordX-i/2}return 0},v=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=r.n(v),b=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),_=r.n(b),w=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),O=r.n(w),S=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),j=r.n(S),B=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),G=r.n(B),x=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/BaseGallery/BaseGallery.module.css"),C={attributes:{class:"vkui-style"}};C.setAttributes=j(),C.insert=O().bind(null,"head"),C.domAPI=_(),C.insertStyleElement=G(),g()(x.Z,C);var k=x.Z&&x.Z.locals?x.Z.locals:void 0;function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function R(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var P={containerWidth:0,viewportOffsetWidth:0,layerWidth:0,min:0,max:0,slides:[],isFullyVisible:!0},V={animation:void 0,shiftX:0,dragging:!1,deltaX:0,indent:0},D={dark:k["BaseGallery__bullets--dark"],light:k["BaseGallery__bullets--light"]},q=function(e){var t,r=e.bullets,i=void 0!==r&&r,a=e.getRootRef,v=e.children,g=e.slideWidth,b=void 0===g?"100%":g,_=e.slideIndex,w=void 0===_?0:_,O=e.isDraggable,S=void 0===O||O,j=e.onDragStart,B=e.onDragEnd,G=e.onChange,x=e.onPrevClick,C=e.onNextClick,q=e.align,I=void 0===q?"left":q,W=e.showArrows,X=e.getRef,N=e.arrowSize,M=void 0===N?"l":N,T=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,["bullets","getRootRef","children","slideWidth","slideIndex","isDraggable","onDragStart","onDragEnd","onChange","onPrevClick","onNextClick","align","showArrows","getRef","arrowSize"]),L=l.useRef({}),z=l.useRef(P),F=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var i=[],a=!0,o=!1;try{for(l=l.call(e);!(a=(r=l.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(l.useState(V),2),J=F[0],K=F[1],Q=(0,s.Q)(a),Y=(0,s.Q)(X),Z=(0,d.NG)().window,H=(0,u.K)(),U="custom"===b&&"center"===I,$=function(e){var t,r,n=null!==(t=z.current.max)&&void 0!==t?t:0,l=null!==(r=z.current.min)&&void 0!==r?r:0;return e<l?l:e>n?n:e},ee=function(e){if(z.current.isFullyVisible)return 0;var t=(null===(r=z.current.slides)||void 0===r?void 0:r.length)?z.current.slides[e]:null;if(t){var r,n,l=t.coordX,i=t.width;return U?(null!==(n=z.current.viewportOffsetWidth)&&void 0!==n?n:0)/2-l-i/2:$(-1*l)}return 0},et=function(){var e,t,r=null!==(e=z.current.max)&&void 0!==e?e:0,n=null!==(t=z.current.min)&&void 0!==t?t:0,l=J.shiftX+J.deltaX;return l>r?r+Number((l-r)/3):l<n?n+Number((l-n)/3):l},er=function(){var e,t,r,n,i,a,o,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=null!==(i=l.Children.map(v,function(e,t){var r,n,l=L.current["slide-".concat(t)];return{coordX:null!==(r=null==l?void 0:l.offsetLeft)&&void 0!==r?r:0,width:null!==(n=null==l?void 0:l.offsetWidth)&&void 0!==n?n:0}}))&&void 0!==i?i:[],c=null!==(a=null===(e=Q.current)||void 0===e?void 0:e.offsetWidth)&&void 0!==a?a:0,d=null!==(o=null===(t=Y.current)||void 0===t?void 0:t.offsetWidth)&&void 0!==o?o:0,f=s.reduce(function(e,t){return t.width+e},0),m=s.length<=z.current.slides.length||(null===(r=z.current.slides[w])||void 0===r?void 0:r.coordX)!==(null===(n=s[w])||void 0===n?void 0:n.coordX);z.current={containerWidth:c,viewportOffsetWidth:d,layerWidth:f,max:h({slides:s,viewportOffsetWidth:d,isCenterWithCustomWidth:U}),min:p({containerWidth:c,layerWidth:f,slides:s,viewportOffsetWidth:d,isCenterWithCustomWidth:U,align:I}),slides:s,isFullyVisible:f<=c},K(function(e){var t;return R(A({},e),{shiftX:m?ee(w):e.shiftX,animation:null!==(t=u.animation)&&void 0!==t?t:e.shiftX===$(e.shiftX)})})};(0,c.J)(Z,"resize",function(){void 0!==J.animation&&er({animation:!1})}),(0,f.L)(function(){er({animation:!1})},[v,I,b]),(0,f.L)(function(){void 0!==J.animation&&K(function(e){return R(A({},e),{animation:!0,deltaX:0,shiftX:ee(null!=w?w:0)})})},[w]);var en=function(e){var t,r=J.deltaX/e.duration*144,n=J.shiftX+J.deltaX+r-(null!==(t=z.current.max)&&void 0!==t?t:0),l=J.deltaX<0?1:-1,i=z.current.slides.reduce(function(e,t,r){return Math.abs(z.current.slides[e].coordX+n)<Math.abs(t.coordX+n)?e:r},w);if(i===w){var a=w+l;a>=0&&a<z.current.slides.length&&Math.abs(J.deltaX)>.05*z.current.slides[a].width&&(i=a)}return i},el=J.dragging?et():J.shiftX,ei={WebkitTransform:"translateX(".concat(el,"px)"),transform:"translateX(".concat(el,"px)"),WebkitTransition:J.animation?"-webkit-transform ".concat(.24,"s cubic-bezier(.1, 0, .25, 1)"):"none",transition:J.animation?"transform ".concat(.24,"s cubic-bezier(.1, 0, .25, 1)"):"none"},ea=function(e,t){L.current["slide-".concat(t)]=e},eo=!z.current.isFullyVisible&&J.shiftX<0,eu=!z.current.isFullyVisible&&("left"===I&&z.current.containerWidth-J.shiftX<(null!==(t=z.current.layerWidth)&&void 0!==t?t:0)||"left"!==I&&w<z.current.slides.length-1),es=S&&!z.current.isFullyVisible;return(0,n.jsxs)(m.U,R(A({},T),{baseClassName:(0,o.AK)(k.BaseGallery,"center"===I&&k["BaseGallery--align-center"],"custom"===b&&k["BaseGallery--custom-width"],es&&k["BaseGallery--draggable"]),getRootRef:Q,children:[(0,n.jsx)(Touch.X,{className:k.BaseGallery__viewport,onStartX:function(e){e.originalEvent.stopPropagation(),null==j||j(e),K(function(e){return R(A({},e),{animation:!1})})},onMoveX:function(e){S&&!z.current.isFullyVisible&&(e.originalEvent.preventDefault(),e.isSlideX&&J.deltaX!==e.shiftX&&K(function(t){return R(A({},t),{deltaX:e.shiftX,dragging:e.isSlideX})}))},onEnd:function(e){var t=e.isSlide?en(e):null!=w?w:0;null==B||B(e,t);var r={animation:!0,dragging:!1,deltaX:0},n=et();t!==w&&(r.shiftX=n),K(function(e){return A({},e,r)}),t!==w&&(null==G||G(t))},style:{width:"custom"===b?"100%":b},getRootRef:Y,noSlideClick:!0,children:(0,n.jsx)("div",{className:k.BaseGallery__layer,style:ei,children:l.Children.map(v,function(e,t){return(0,n.jsx)("div",{className:k.BaseGallery__slide,ref:function(e){return ea(e,t)},children:e},"slide-".concat(t))})})}),i&&(0,n.jsx)("div",{"aria-hidden":!0,className:(0,o.AK)(k.BaseGallery__bullets,D[i]),children:l.Children.map(v,function(e,t){return(0,n.jsx)("div",{className:(0,o.AK)(k.BaseGallery__bullet,t===w&&k["BaseGallery__bullet--active"])},t)})}),W&&H&&eo&&(0,n.jsx)(y.Q,{className:k.BaseGallery__arrow,direction:"left",onClick:function(e){null==G||G(w-1),null==x||x(e)},size:M}),W&&H&&eu&&(0,n.jsx)(y.Q,{className:k.BaseGallery__arrow,direction:"right",onClick:function(e){null==G||G(w+1),null==C||C(e)},size:M})]}))};try{q.displayName="BaseGallery",q.__docgenInfo={description:"",displayName:"BaseGallery",props:{slideWidth:{defaultValue:{value:"100%"},description:"",name:"slideWidth",required:!1,type:{name:"string | number"}},slideIndex:{defaultValue:{value:"0"},description:"",name:"slideIndex",required:!1,type:{name:"number"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"TouchEventHandler"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((e: TouchEvent, targetIndex: number) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((current: number) => void)"}},onPrevClick:{defaultValue:null,description:"Будет вызвано при клике на кнопку-стрелку влево",name:"onPrevClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onNextClick:{defaultValue:null,description:"Будет вызвано при клике на кнопку-стрелку вправо",name:"onNextClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},bullets:{defaultValue:{value:"false"},description:"",name:"bullets",required:!1,type:{name:'false | "dark" | "light"'}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}},showArrows:{defaultValue:null,description:"",name:"showArrows",required:!1,type:{name:"boolean"}},hasPointer:{defaultValue:null,description:"",name:"hasPointer",required:!1,type:{name:"boolean"}},arrowSize:{defaultValue:{value:"l"},description:"",name:"arrowSize",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseGallery/BaseGallery.tsx#BaseGallery"]={docgenInfo:q.__docgenInfo,name:"BaseGallery",path:"src/components/BaseGallery/BaseGallery.tsx#BaseGallery"})}catch(e){}var I=r("./src/lib/warnOnce.ts"),W={canSlideLeft:!0,canSlideRight:!0,isDraggable:!0},X={viewportOffsetWidth:0,slides:[],isFullyVisible:!0,loopPoints:[],contentSize:0,snaps:[]};function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function M(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t,r){for(var n=r,l=[],i=1===e?0:t.length-1,a=1===e?t.length-1:0,o=i;(1===e?o<=a:o>=a)&&n>0;o+=e){var u=t[o].width;n>0&&l.push(o),n-=u}return l}function L(e,t,r,n){var l=r.contentSize,i=r.slides,a=r.snaps,o="start"===t,u=o?-l:l;return e.map(function(e){var t=o?0:-l,r=o?l:0,s=o?a[e]+n+u:a[e]-i[e].width+u-a[0];return{index:e,target:function(e){return e>=s?t:r}}})}var z=(0,r("./src/lib/fx.ts")._)(.8,1);function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function K(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var Q={dark:k["BaseGallery__bullets--dark"],light:k["BaseGallery__bullets--light"]};(0,I.O)("Gallery");var Y=function(e){var t=e.bullets,r=void 0!==t&&t,i=e.getRootRef,a=e.children,p=e.slideWidth,h=void 0===p?"100%":p,v=e.slideIndex,g=void 0===v?0:v,b=e.isDraggable,_=void 0===b||b,w=e.onDragStart,O=e.onDragEnd,S=e.onChange,j=e.onPrevClick,B=e.onNextClick,G=e.align,x=void 0===G?"left":G,C=e.showArrows,E=e.getRef,A=e.arrowSize,R=void 0===A?"l":A,P=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,["bullets","getRootRef","children","slideWidth","slideIndex","isDraggable","onDragStart","onDragEnd","onChange","onPrevClick","onNextClick","align","showArrows","getRef","arrowSize"]),V=l.useRef({}),D=l.useRef(X),q=(0,s.Q)(i),I=(0,s.Q)(E),N=l.useRef(null),Y=l.useRef(null),Z=l.useRef(0),H=l.useRef(0),U=l.useRef(!1),$=function(){var e=l.useRef([]);return{getAnimateFunction:function(t){return function(){!function(e){var t,r=e.duration,n=e.timing,l=e.draw,i=e.animationQueue,a=void 0===i?[]:i;o.Nq&&requestAnimationFrame(function e(i){t||(t=i);var o=Math.min((i-t)/r,1);if(l(n(o)),o<1){requestAnimationFrame(e);return}a.shift(),a.length>0&&a[0]()})}({duration:240,timing:z,animationQueue:e.current,draw:t})}},addToAnimationQueue:function(t){e.current.push(t)},startAnimation:function(){1===e.current.length&&e.current[0]()}}}(),ee=$.addToAnimationQueue,et=$.getAnimateFunction,er=$.startAnimation,en=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var i=[],a=!0,o=!1;try{for(l=l.call(e);!(a=(r=l.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(l.useState(W),2),el=en[0],ei=en[1],ea=(0,d.NG)().window,eo=(0,u.K)(),eu="custom"===h&&"center"===x,es=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];D.current.loopPoints.forEach(function(t){var r=t.target,n=t.index,l=V.current[n];l&&(l.style.transform="translate3d(".concat(r(e),"px, 0, 0)"))}),N.current&&(N.current.style.transform="translate3d(".concat(e,"px, 0, 0)"),N.current.style.transition=t?"transform ".concat(240,"ms cubic-bezier(.1, 0, .25, 1)"):"")},ec=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=D.current,n=r.snaps,l=r.contentSize,i=r.slides;null!==Y.current&&cancelAnimationFrame(Y.current),Y.current=requestAnimationFrame(function(){e>n[0]&&(Z.current=-l+n[0],e=Z.current+H.current);var r=i[i.length-1].width+i[i.length-1].coordX;e<=-r&&(Z.current=Math.abs(H.current)+n[0]),es(e,t)})},ed=function(){if(q.current&&I.current){var e=l.Children.map(a,function(e,t){var r=V.current[t]||{offsetLeft:0,offsetWidth:0};return{coordX:r.offsetLeft,width:r.offsetWidth}})||[],t=q.current.offsetWidth,r=I.current.offsetWidth,n=e.reduce(function(e,t){return t.width+e},0);if("center"===x){var i=(t-e[0].width)/2;e=e.map(function(e){return{width:e.width,coordX:e.coordX-i}})}D.current=K(J({},D.current),{viewportOffsetWidth:r,slides:e,isFullyVisible:n<=t});var o=e.map(function(e,t){return function(e,t,r){if(t.isFullyVisible||!t.slides.length)return 0;var n=t.slides[e];if(n){var l=n.coordX,i=n.width;return r?t.viewportOffsetWidth/2-l-i/2:-1*l}return 0}(t,D.current,eu)}),u=-o[o.length-1]+e[e.length-1].width;"center"===x&&(u+=o[0]),D.current.snaps=o,D.current.contentSize=u,D.current.loopPoints=function(e,t){var r=e.slides,n=e.snaps,l=T(-1,r,n[0]);return M(L(T(1,r,t-n[0]),"start",e,t)).concat(M(L(l,"end",e,t)))}(D.current,t),ei({canSlideLeft:!D.current.isFullyVisible,canSlideRight:!D.current.isFullyVisible,isDraggable:_&&!D.current.isFullyVisible}),Z.current=o[g],U.current=!0,ec(Z.current)}};(0,c.J)(ea,"resize",function(){U.current&&ed()}),(0,f.L)(function(){if(U.current){var e=D.current,t=e.snaps,r=e.slides,n=t[g],l=Z.current;if(n===t[0]&&Z.current<=t[t.length-1]){var i=Math.abs(t[t.length-1])+r[r.length-1].width+l;ee(et(function(e){var a=l+-(e*i*1);es(a),a<=t[t.length-1]-r[r.length-1].width&&requestAnimationFrame(function(){Z.current=n,es(t[0])})}))}else n===t[t.length-1]&&Z.current===t[0]?(l=n-r[r.length-1].width,ee(function(){requestAnimationFrame(function(){es(n-r[r.length-1].width),et(function(e){es(l+e*r[r.length-1].width)})()})})):ee(function(){var e=Math.abs(n-l),t=l<=n?1:-1;et(function(r){es(l+r*e*t)})()});er(),Z.current=n}},[g]),(0,f.L)(function(){ed()},[a,x,h]);var ef=function(e,t){V.current[t]=e},em=el.canSlideLeft,ey=el.canSlideRight,ep=el.isDraggable;return(0,n.jsxs)(m.U,K(J({},P),{baseClassName:(0,o.AK)(k.BaseGallery,"custom"===h&&k["BaseGallery--custom-width"],ep&&k["BaseGallery--draggable"]),getRootRef:q,children:[(0,n.jsx)(Touch.X,{className:k.BaseGallery__viewport,onStartX:function(e){e.originalEvent.stopPropagation(),null==w||w(e),Z.current=D.current.snaps[g],H.current=0},onMoveX:function(e){_&&!D.current.isFullyVisible&&(e.originalEvent.preventDefault(),e.isSlideX&&H.current!==e.shiftX&&(H.current=e.shiftX,ec(Z.current+H.current)))},onEnd:function(e){var t=g;e.isSlide&&(t=function(e,t,r,n){var l=r+n,i=n<0?1:-1,a=e.reduce(function(t,r,n){return Math.abs(e[t].coordX+l)<Math.abs(r.coordX+l)?t:n},t);if(a===t){var o=t+i;return o>=0&&o<e.length?Math.abs(n)>.05*e[o].width?o:a:i<0?(o+e.length)%e.length:o%e.length}return a}(D.current.slides,g,Z.current,H.current)),null==O||O(e,t),t!==g?(Z.current=Z.current+H.current,null==S||S(t)):ec(D.current.snaps[t],!0)},style:{width:"custom"===h?"100%":h},getRootRef:I,noSlideClick:!0,children:(0,n.jsx)("div",{className:k.BaseGallery__layer,ref:N,children:l.Children.map(a,function(e,t){return(0,n.jsx)("div",{className:k.BaseGallery__slide,ref:function(e){return ef(e,t)},children:e},"slide-".concat(t))})})}),r&&(0,n.jsx)("div",{"aria-hidden":!0,className:(0,o.AK)(k.BaseGallery__bullets,Q[r]),children:l.Children.map(a,function(e,t){return(0,n.jsx)("div",{className:(0,o.AK)(k.BaseGallery__bullet,t===g&&k["BaseGallery__bullet--active"])},t)})}),C&&eo&&em&&(0,n.jsx)(y.Q,{className:k.BaseGallery__arrow,direction:"left",onClick:function(e){null==S||S((g-1+D.current.slides.length)%D.current.slides.length),null==j||j(e)},size:R}),C&&eo&&ey&&(0,n.jsx)(y.Q,{className:k.BaseGallery__arrow,direction:"right",onClick:function(e){null==S||S((g+1)%D.current.slides.length),null==B||B(e)},size:R})]}))};try{Y.displayName="CarouselBase",Y.__docgenInfo={description:"",displayName:"CarouselBase",props:{slideWidth:{defaultValue:{value:"100%"},description:"",name:"slideWidth",required:!1,type:{name:"string | number"}},slideIndex:{defaultValue:{value:"0"},description:"",name:"slideIndex",required:!1,type:{name:"number"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"TouchEventHandler"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((e: TouchEvent, targetIndex: number) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((current: number) => void)"}},onPrevClick:{defaultValue:null,description:"Будет вызвано при клике на кнопку-стрелку влево",name:"onPrevClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onNextClick:{defaultValue:null,description:"Будет вызвано при клике на кнопку-стрелку вправо",name:"onNextClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},bullets:{defaultValue:{value:"false"},description:"",name:"bullets",required:!1,type:{name:'false | "dark" | "light"'}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}},showArrows:{defaultValue:null,description:"",name:"showArrows",required:!1,type:{name:"boolean"}},hasPointer:{defaultValue:null,description:"",name:"hasPointer",required:!1,type:{name:"boolean"}},arrowSize:{defaultValue:{value:"l"},description:"",name:"arrowSize",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseGallery/CarouselBase/CarouselBase.tsx#CarouselBase"]={docgenInfo:Y.__docgenInfo,name:"CarouselBase",path:"src/components/BaseGallery/CarouselBase/CarouselBase.tsx#CarouselBase"})}catch(e){}var Z=r("./src/hooks/useTimeout.ts");function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var U=function(e){var t,r=e.initialSlideIndex,o=e.children,u=e.timeout,s=e.onChange,c=e.bullets,f=e.looped,m=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,["initialSlideIndex","children","timeout","onChange","bullets","looped"]),y=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var i=[],a=!0,o=!1;try{for(l=l.call(e);!(a=(r=l.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(l.useState(void 0===r?0:r),2),p=y[0],h=y[1],v="number"==typeof m.slideIndex,g=v?null!==(t=m.slideIndex)&&void 0!==t?t:0:p,b=!v||!!s,_=l.useMemo(function(){return l.Children.toArray(o).filter(function(e){return!!e})},[o]),w=_.length,O=(0,a.O)(),S=l.useCallback(function(e){e!==g&&(v||h(e),s&&s(e))},[v,s,g]);!function(e,t,r){var n=(0,Z.K)(r,e),i=n.clear,a=n.set,o=(0,d.NG)().document;l.useEffect(function(){return e?a():i()},[e,t,i,a]),l.useEffect(function(){if(o&&e){var t=function(){"visible"===o.visibilityState&&(i(),a()),"hidden"===o.visibilityState&&i()};return o.addEventListener("visibilitychange",t),function(){o.removeEventListener("visibilitychange",t)}}},[o,e,i,a])}(void 0===u?0:u,g,function(){return S((g+1)%w)});var j=w>0?(0,i.uZ)(g,0,w-1):g;if(l.useEffect(function(){s&&j!==g&&s(j),h(j)},[s,j,g]),!O)return null;var B=f?Y:q;return(0,n.jsx)(B,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}({isDraggable:b},m),{bullets:w>0&&c,slideIndex:j,onChange:S,children:_}))};try{U.displayName="Gallery",U.__docgenInfo={description:"",displayName:"Gallery",props:{initialSlideIndex:{defaultValue:{value:"0"},description:"",name:"initialSlideIndex",required:!1,type:{name:"number"}},timeout:{defaultValue:{value:"0"},description:"",name:"timeout",required:!1,type:{name:"number"}},looped:{defaultValue:null,description:"",name:"looped",required:!1,type:{name:"boolean"}},slideWidth:{defaultValue:null,description:"",name:"slideWidth",required:!1,type:{name:"string | number"}},slideIndex:{defaultValue:null,description:"",name:"slideIndex",required:!1,type:{name:"number"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"TouchEventHandler"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((e: TouchEvent, targetIndex: number) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((current: number) => void)"}},onPrevClick:{defaultValue:null,description:"Будет вызвано при клике на кнопку-стрелку влево",name:"onPrevClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onNextClick:{defaultValue:null,description:"Будет вызвано при клике на кнопку-стрелку вправо",name:"onNextClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},bullets:{defaultValue:null,description:"",name:"bullets",required:!1,type:{name:'false | "dark" | "light"'}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}},showArrows:{defaultValue:null,description:"",name:"showArrows",required:!1,type:{name:"boolean"}},hasPointer:{defaultValue:null,description:"",name:"hasPointer",required:!1,type:{name:"boolean"}},arrowSize:{defaultValue:null,description:"",name:"arrowSize",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gallery/Gallery.tsx#Gallery"]={docgenInfo:U.__docgenInfo,name:"Gallery",path:"src/components/Gallery/Gallery.tsx#Gallery"})}catch(e){}}}]);