"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3424],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{De:function(){return g}});var s,c=n("../../node_modules/react/index.js");function u(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var d=function(){function e(t){var n=t.content;u(this,e),o(this,"isMounted",!1),o(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return l(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),m="http://www.w3.org/2000/svg",f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(this,e),o(this,"symbols",new Map),o(this,"config",{attrs:{xmlns:m,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),o(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return l(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=d.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(m,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),p=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(p){var v="__SVG_SPRITE_NODE__";s=new f({attrs:{id:v}});var b=function(){var e=document.getElementById(v);e?s.attach(e):s.mount(document.body),document.removeEventListener("DOMContentLoaded",b)};document.querySelector("body")?b():document.addEventListener("DOMContentLoaded",b)}else s=null;var y=p?c.useLayoutEffect:c.useEffect,h=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,s=void 0===o?0:o,u=e.viewBox,a=e.id,l=e.className,d=e.fill,m=e.getRootRef,f=e.style,p=e.title,v=e.children,b=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),y=r({width:n,height:s},void 0===f?{}:f);return c.createElement("svg",i(r({"aria-hidden":"true",display:"block"},b),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(n,s)),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(s),"vkuiIcon--".concat(a),void 0===l?"":l].join(" ").trim(),viewBox:u,width:n,height:s,style:y,ref:m}),p&&c.createElement("title",null,p),c.createElement("use",{xlinkHref:"#".concat(a),style:{fill:"currentColor",color:d}},v))};function g(e,t,n,o,u,a,l,m){var f=function(){p||(!function(e){s&&s.add(e)}(new d({content:o})),p=!0)},p=!1,v=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),b=function(e){return y(f,[]),l&&v("Иконка устарела"+(m?". Замените на ".concat(m):"")),c.createElement(h,i(r({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?u:+e.width,height:void 0===e.height||isNaN(e.height)?a:+e.height}))};return b.mountIcon=f,b.displayName=e,b}},"../../node_modules/@vkontakte/icons/dist/es6/20/cancel_20.js":function(e,t,n){n.d(t,{r:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon20Cancel","cancel_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="cancel_20"><path fill="currentColor" fill-rule="evenodd" d="M4.72 4.72a.75.75 0 0 1 1.06 0L10 8.94l4.22-4.22a.75.75 0 1 1 1.06 1.06L11.06 10l4.22 4.22a.75.75 0 1 1-1.06 1.06L10 11.06l-4.22 4.22a.75.75 0 0 1-1.06-1.06L8.94 10 4.72 5.78a.75.75 0 0 1 0-1.06z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/ModalDismissButton/ModalDismissButton.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),s=n.n(i)()(r());s.push([e.id,'.ModalDismissButton--wR4Ll{box-sizing:border-box;color:#fff;color:var(--vkui--color_icon_contrast);height:56px;justify-content:center;padding:18px;position:absolute;right:-56px;top:0;transition:opacity .15s ease-out;width:56px}.ModalDismissButton--wR4Ll:before{background:rgba(0,0,0,.4);background:var(--vkui--color_overlay_primary);border-radius:50%;bottom:14px;content:"";display:block;left:14px;position:absolute;right:14px;top:14px}.ModalDismissButton--wR4Ll .vkuiIcon{transform:translateX(0)}.ModalDismissButton--hover--NGjCj.ModalDismissButton--wR4Ll:before{background:rgba(0,0,0,.44);background:var(--vkui--color_overlay_primary--hover)}.ModalDismissButton--active--fSG9o.ModalDismissButton--wR4Ll:before{background:rgba(0,0,0,.48);background:var(--vkui--color_overlay_primary--active)}',""]),s.locals={ModalDismissButton:"ModalDismissButton--wR4Ll","ModalDismissButton--hover":"ModalDismissButton--hover--NGjCj","ModalDismissButton--active":"ModalDismissButton--active--fSG9o"},t.Z=s},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(e){e(n)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,n)})}}}},"./src/components/ModalDismissButton/ModalDismissButton.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return d}});var o,r,i,s=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var c=n("./src/storybook/constants.ts");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var l={title:"Modals/ModalDismissButton",component:n("./src/components/ModalDismissButton/ModalDismissButton.tsx").t,parameters:u({},c.tW,c.nB)};t.default=l;var d={decorators:[function(e){return(0,s.jsx)("div",{style:{position:"relative"},children:(0,s.jsx)(e,{})})}]};d.parameters=a(u({},d.parameters),{docs:a(u({},null===(o=d.parameters)||void 0===o?void 0:o.docs),{source:u({originalSource:"{\n  decorators: [Component => <div style={{\n    position: 'relative'\n  }}>\n        <Component />\n      </div>]\n}"},null===(i=d.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})})},"./src/components/ModalDismissButton/ModalDismissButton.tsx":function(e,t,n){n.d(t,{t:function(){return O}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("../../node_modules/@vkontakte/icons/dist/es6/20/cancel_20.js"),i=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),s=n("./src/components/Tappable/Tappable.tsx"),c=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=n.n(c),a=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),l=n.n(a),d=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),m=n.n(d),f=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(f),v=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=n.n(v),y=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/ModalDismissButton/ModalDismissButton.module.css"),h={attributes:{class:"vkui-style"}};h.setAttributes=p(),h.insert=m().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=b(),u()(y.Z,h);var g=y.Z&&y.Z.locals?y.Z.locals:void 0,O=function(e){var t=e["aria-label"],n=e.className,c=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["aria-label","className"]);return(0,o.jsx)(s.KR,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({className:(0,i.AK)(g.ModalDismissButton,n)},c),{"aria-label":void 0===t?"Закрыть":t,activeMode:g["ModalDismissButton--active"],hoverMode:g["ModalDismissButton--hover"],children:(0,o.jsx)(r.r,{})}))};try{O.displayName="ModalDismissButton",O.__docgenInfo={description:"",displayName:"ModalDismissButton",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDismissButton/ModalDismissButton.tsx#ModalDismissButton"]={docgenInfo:O.__docgenInfo,name:"ModalDismissButton",path:"src/components/ModalDismissButton/ModalDismissButton.tsx#ModalDismissButton"})}catch(e){}}}]);