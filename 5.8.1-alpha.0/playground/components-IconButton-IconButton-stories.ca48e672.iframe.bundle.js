"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6256],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){n.d(t,{De:function(){return b}});var o,i=n("../../node_modules/@swc/helpers/esm/_object_spread.js");function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var u=n("../../node_modules/react/index.js"),c=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),s=n("../../node_modules/@swc/helpers/esm/_create_class.js"),a=n("../../node_modules/@swc/helpers/esm/_define_property.js"),l=function(){function e(t){var n=t.content;(0,c._)(this,e),(0,a._)(this,"isMounted",!1),(0,a._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,s._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),d="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,c._)(this,e),(0,a._)(this,"symbols",new Map),(0,a._)(this,"config",{attrs:{xmlns:d,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,a._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,s._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=l.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(d,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var v="__SVG_SPRITE_NODE__";o=new p({attrs:{id:v}});var h=function(){var e=document.getElementById(v);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else o=null;var f=m?u.useLayoutEffect:u.useEffect,g=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,c=void 0===o?0:o,s=e.viewBox,a=e.id,l=e.className,d=e.fill,p=e.getRootRef,m=e.style,v=e.title,h=e.children,f=function(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),g=(0,i._)({width:n,height:c},void 0===m?{}:m);return u.createElement("svg",r((0,i._)({"aria-hidden":"true",display:"block"},f),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(n,c)),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(c),"vkuiIcon--".concat(a),void 0===l?"":l].join(" ").trim(),viewBox:s,width:n,height:c,style:g,ref:p}),v&&u.createElement("title",null,v),u.createElement("use",{xlinkHref:"#".concat(a),style:{fill:"currentColor",color:d}},h))};function b(e,t,n,c,s,a,d,p){var m=function(){v||(!function(e){o&&o.add(e)}(new l({content:c})),v=!0)},v=!1,h=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),b=function(e){return f(m,[]),d&&h("Иконка устарела"+(p?". Замените на ".concat(p):"")),u.createElement(g,r((0,i._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?s:+e.width,height:void 0===e.height||isNaN(e.height)?a:+e.height}))};return b.mountIcon=m,b.displayName=e,b}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/IconButton/IconButton.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),u=n.n(r)()(i());u.push([e.id,".IconButton--PgPFw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-radius:9999px;box-shadow:none;color:currentColor;display:block;height:48px;margin:0;padding:0;position:relative}.IconButton--sizeY-compact--xpjui{height:44px}.IconButton--PgPFw[disabled]{opacity:.64;opacity:var(--vkui--opacity_disable_accessibility)}.IconButton--ios--fXtvM{border-radius:8px;border-radius:var(--vkui--size_border_radius--regular)}.IconButton--PgPFw .vkuiIcon--16{padding:16px}.IconButton--PgPFw .vkuiIcon--16.vkuiIcon--w-8{padding:16px 14px}.IconButton--sizeY-compact--xpjui .vkuiIcon--16,.IconButton--sizeY-compact--xpjui .vkuiIcon--16.vkuiIcon--w-8{padding:14px}.IconButton--PgPFw .vkuiIcon--24{padding:12px}.IconButton--sizeY-compact--xpjui .vkuiIcon--24{padding:10px}.IconButton--PgPFw .vkuiIcon--28{padding:10px}.IconButton--sizeY-compact--xpjui .vkuiIcon--28{padding:8px}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.IconButton--sizeY-none--_mhUD{height:44px}.IconButton--sizeY-none--_mhUD .vkuiIcon--16,.IconButton--sizeY-none--_mhUD .vkuiIcon--16.vkuiIcon--w-8{padding:14px}.IconButton--sizeY-none--_mhUD .vkuiIcon--24{padding:10px}.IconButton--sizeY-none--_mhUD .vkuiIcon--28{padding:8px}}.vkuiInternalFormField__after .IconButton--PgPFw,.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--PgPFw,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--PgPFw{align-content:center;align-items:center;border-radius:8px;border-radius:var(--vkui--size_border_radius--regular);display:flex;height:44px;height:var(--vkui--size_field_height--regular);justify-content:center;width:44px;width:var(--vkui--size_field_height--regular)}.vkuiInternalFormField__after .IconButton--PgPFw .vkuiIcon.vkuiIcon.vkuiIcon{padding:0}.vkuiInternalFormField__after .IconButton--sizeY-compact--xpjui{height:36px;height:var(--vkui--size_field_height--compact);width:36px;width:var(--vkui--size_field_height--compact)}.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--sizeY-compact--xpjui,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--sizeY-compact--xpjui{height:36px;height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.vkuiInternalFormField__after .IconButton--sizeY-none--_mhUD{height:36px;height:var(--vkui--size_field_height--compact);width:36px;width:var(--vkui--size_field_height--compact)}.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--sizeY-none--_mhUD,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--sizeY-none--_mhUD{height:36px;height:var(--vkui--size_field_height--compact)}}.vkuiInternalSimpleCell__after .IconButton--PgPFw:last-child{margin-right:-12px}.vkuiInternalSimpleCell--ios .vkuiInternalSimpleCell__after .IconButton--PgPFw:last-child{margin-right:-9px}.vkuiInternalAlert__dismiss.IconButton--PgPFw{height:36px;padding:8px}",""]),u.locals={IconButton:"IconButton--PgPFw","IconButton--sizeY-compact":"IconButton--sizeY-compact--xpjui","IconButton--ios":"IconButton--ios--fXtvM","IconButton--sizeY-none":"IconButton--sizeY-none--_mhUD"},t.Z=u},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(e){e(n)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,n)})}}}},"./src/components/IconButton/IconButton.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return p},default:function(){return d}});var o,i,r,u=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var c=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Delete","delete_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="delete_16"><g fill="currentColor"><path d="M2.923 11.419c.133 1.266.2 1.898.49 2.376a2.5 2.5 0 0 0 1.074.967C4.992 15 5.628 15 6.9 15H9.1c1.273 0 1.91 0 2.415-.238a2.5 2.5 0 0 0 1.074-.967c.29-.478.356-1.11.49-2.376l.53-5.035c.031-.306.048-.46-.002-.578a.5.5 0 0 0-.22-.244c-.113-.062-.267-.062-.574-.062H3.189c-.308 0-.462 0-.574.062a.5.5 0 0 0-.22.244c-.05.119-.034.272-.002.578zM2 4h12a1 1 0 1 0 0-2h-3.353a2.751 2.751 0 0 0-5.293 0H2a1 1 0 0 0 0 2z" /></g></symbol>',16,16,!1,void 0),s=n("./src/storybook/constants.ts");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var d={title:"Blocks/IconButton",component:n("./src/components/IconButton/IconButton.tsx").h,parameters:a({},s.tW,s.nB)},p={args:{children:(0,u.jsx)(c,{})}};p.parameters=l(a({},p.parameters),{docs:l(a({},null===(o=p.parameters)||void 0===o?void 0:o.docs),{source:a({originalSource:"{\n  args: {\n    children: <Icon16Delete />\n  }\n}"},null===(r=p.parameters)||void 0===r?void 0:null===(i=r.docs)||void 0===i?void 0:i.source)})})},"./src/components/IconButton/IconButton.tsx":function(e,t,n){n.d(t,{h:function(){return x}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var i=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/hooks/useAdaptivity.ts"),u=n("./src/hooks/usePlatform.ts"),c=n("./src/lib/adaptivity/constants.ts"),s=n("./src/lib/platform.ts"),a=n("./src/lib/warnOnce.ts"),l=n("./src/components/Tappable/Tappable.tsx"),d=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=n.n(d),m=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),v=n.n(m),h=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),f=n.n(h),g=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),b=n.n(g),y=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=n.n(y),I=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/IconButton/IconButton.module.css"),k={attributes:{class:"vkui-style"}};k.setAttributes=b(),k.insert=f().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=_(),p()(I.Z,k);var w=I.Z&&I.Z.locals?I.Z.locals:void 0;function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=O({none:w["IconButton--sizeY-none"]},c.n$.COMPACT,w["IconButton--sizeY-compact"]);(0,a.O)("IconButton");var x=function(e){var t=e.children,n=e.className,a=function(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["children","className"]),d=(0,u.F)(),p=(0,r.g)().sizeY,m=void 0===p?"none":p;return(0,o.jsx)(l.KR,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){O(e,t,n[t])})}return e}({activeEffectDelay:200,activeMode:"background",Component:a.href?"a":"button"},a),{className:(0,i.AK)(w.IconButton,m!==c.n$.REGULAR&&j[m],d===s.t.IOS&&w["IconButton--ios"],n),children:t}))};try{x.displayName="IconButton",x.__docgenInfo={description:"",displayName:"IconButton",props:{activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:x.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(e){}}}]);