"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6742],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,o){o.d(t,{De:function(){return y}});var r,n=o("../../node_modules/@swc/helpers/esm/_object_spread.js");function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}var l=o("../../node_modules/react/index.js"),s=o("../../node_modules/@swc/helpers/esm/_class_call_check.js"),c=o("../../node_modules/@swc/helpers/esm/_create_class.js"),d=o("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(t){var o=t.content;(0,s._)(this,e),(0,d._)(this,"isMounted",!1),(0,d._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,o=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(o,!0):o}(o)}return(0,c._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var o=new e({content:""});return o.node=t,o}}]),e}(),a="http://www.w3.org/2000/svg",f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s._)(this,e),(0,d._)(this,"symbols",new Map),(0,d._)(this,"config",{attrs:{xmlns:a,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,d._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,c._)(e,[{key:"push",value:function(e){var t=this.symbols,o=t.has(e.id);return t.set(e.id,e),!o}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var o=u.createFromExistingNode(e);t.add(o)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(a,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),p=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(p){var m="__SVG_SPRITE_NODE__";r=new f({attrs:{id:m}});var h=function(){var e=document.getElementById(m);e?r.attach(e):r.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else r=null;var v=p?l.useLayoutEffect:l.useEffect,w=function(e){var t=e.width,o=void 0===t?0:t,r=e.height,s=void 0===r?0:r,c=e.viewBox,d=e.id,u=e.className,a=e.fill,f=e.getRootRef,p=e.style,m=e.title,h=e.children,v=function(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),w=(0,n._)({width:o,height:s},void 0===p?{}:p);return l.createElement("svg",i((0,n._)({"aria-hidden":"true",display:"block"},v),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(o,s)),"vkuiIcon--w-".concat(o),"vkuiIcon--h-".concat(s),"vkuiIcon--".concat(d),void 0===u?"":u].join(" ").trim(),viewBox:c,width:o,height:s,style:w,ref:f}),m&&l.createElement("title",null,m),l.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:a}},h))};function y(e,t,o,s,c,d,a,f){var p=function(){m||(!function(e){r&&r.add(e)}(new u({content:s})),m=!0)},m=!1,h=function(e){var t={};return function(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[o]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(o)),t[o]=!0)}}(e),y=function(e){return v(p,[]),a&&h("Иконка устарела"+(f?". Замените на ".concat(f):"")),l.createElement(w,i((0,n._)({},e),{viewBox:o,id:t,width:void 0===e.width||isNaN(e.width)?c:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return y.mountIcon=p,y.displayName=e,y}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":function(e,t,o){o.d(t,{r:function(){return r}});var r=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_24.js":function(e,t,o){o.d(t,{P:function(){return r}});var r=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706Z" /></g></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_left_24.js":function(e,t,o){o.d(t,{z:function(){return r}});var r=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactLeft","chevron_compact_left_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_left_24"><path fill="currentColor" d="M11.293 7.706a1 1 0 0 0 0-1.412l-.088-.088a.997.997 0 0 0-1.414.002l-5.084 5.084a.998.998 0 0 0 0 1.416l5.084 5.084c.39.391 1.026.39 1.414.002l.088-.088a.995.995 0 0 0 0-1.412L7 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css":function(e,t,o){var r=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(r),i=o("../../node_modules/css-loader/dist/runtime/api.js"),l=o.n(i)()(n());l.push([e.id,".ScrollArrow--JgxNW{background-color:initial;border:0;cursor:pointer;flex-direction:column;height:100%;padding:0;transition:opacity .15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:var(--vkui--animation_easing_platform);-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.ScrollArrow--JgxNW,.ScrollArrow__icon--gJpr6{display:flex;justify-content:center}.ScrollArrow__icon--gJpr6{align-items:center;background-color:#fff;background-color:var(--vkui--color_background_modal);box-shadow:0 0 2px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.08);box-shadow:var(--vkui--elevation3);color:#99a2ad;color:var(--vkui--color_icon_secondary);position:relative}.ScrollArrow--size-m--c7dtS .ScrollArrow__icon--gJpr6{border-radius:14px;height:28px;width:28px}.ScrollArrow--size-l--f8Hpn .ScrollArrow__icon--gJpr6{border-radius:24px;height:40px;width:40px}.ScrollArrow--direction-left--jS38A{left:0;padding-left:16px;padding-left:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-right--UIq4o{padding-right:16px;padding-right:var(--vkui--size_base_padding_horizontal--regular,16px);right:0}",""]),l.locals={ScrollArrow:"ScrollArrow--JgxNW",ScrollArrow__icon:"ScrollArrow__icon--gJpr6","ScrollArrow--size-m":"ScrollArrow--size-m--c7dtS","ScrollArrow--size-l":"ScrollArrow--size-l--f8Hpn","ScrollArrow--direction-left":"ScrollArrow--direction-left--jS38A","ScrollArrow--direction-right":"ScrollArrow--direction-right--UIq4o"},t.Z=l},"./src/components/ScrollArrow/ScrollArrow.stories.tsx":function(e,t,o){o.r(t),o.d(t,{Playground:function(){return u}});var r,n,i,l=o("./src/storybook/constants.ts");function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}var d={title:"Blocks/ScrollArrow",component:o("./src/components/ScrollArrow/ScrollArrow.tsx").Q,parameters:s({},l.tW,l.nB)};t.default=d;var u={};u.parameters=c(s({},u.parameters),{docs:c(s({},null===(r=u.parameters)||void 0===r?void 0:r.docs),{source:s({originalSource:"{}"},null===(i=u.parameters)||void 0===i?void 0:null===(n=i.docs)||void 0===n?void 0:n.source)})})},"./src/components/ScrollArrow/ScrollArrow.tsx":function(e,t,o){o.d(t,{Q:function(){return x}});var r=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16ChevronLeft","chevron_left_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_left_16"><path fill="currentColor" d="m4.773 8 3.363 3.364a.9.9 0 1 1-1.272 1.272l-4-4a.9.9 0 0 1 0-1.272l4-4a.9.9 0 1 1 1.272 1.272z" /></symbol>',12,16,!1,void 0),i=o("../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js"),l=o("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_left_24.js"),s=o("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_24.js"),c=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),d=o("./src/components/RootComponent/RootComponent.tsx"),u=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=o.n(u),f=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),p=o.n(f),m=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),h=o.n(m),v=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),w=o.n(v),y=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=o.n(y),g=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=w(),_.insert=h().bind(null,"head"),_.domAPI=p(),_.insertStyleElement=b(),a()(g.Z,_);var j=g.Z&&g.Z.locals?g.Z.locals:void 0,S={m:j["ScrollArrow--size-m"],l:j["ScrollArrow--size-l"]},O={left:j["ScrollArrow--direction-left"],right:j["ScrollArrow--direction-right"]},k=function(e){var t=e.size,o=e.direction;return"m"===t?"left"===o?(0,r.jsx)(n,{}):(0,r.jsx)(i.r,{}):"left"===o?(0,r.jsx)(l.z,{}):(0,r.jsx)(s.P,{})},x=function(e){var t=e.size,o=void 0===t?"l":t,n=e.offsetY,i=e.direction,l=e.children,s=void 0===l?(0,r.jsx)(k,{direction:i,size:o}):l,u=function(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["size","offsetY","direction","children"]);return(0,r.jsx)(d.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({Component:"button",baseClassName:(0,c.AK)(j.ScrollArrow,S[o],O[i])},u),{children:(0,r.jsx)("span",{className:j.ScrollArrow__icon,style:n?{top:n}:void 0,children:s})}))};try{x.displayName="ScrollArrow",x.__docgenInfo={description:"Компонент стрелки из HorizontalScroll",displayName:"ScrollArrow",props:{direction:{defaultValue:null,description:"Направление стрелки",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},size:{defaultValue:{value:"l"},description:"Размер стрелки",name:"size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},offsetY:{defaultValue:null,description:"Смещает иконку кнопки навигации по вертикали.",name:"offsetY",required:!1,type:{name:"string | number"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"]={docgenInfo:x.__docgenInfo,name:"ScrollArrow",path:"src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"})}catch(e){}},"./src/storybook/constants.ts":function(e,t,o){o.d(t,{R0:function(){return i},nB:function(){return n},tW:function(){return r}});var r={layout:"fullscreen",centered:!0},n={cartesian:{disable:!0}},i={control:{type:"text"}}}}]);