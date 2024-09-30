"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4612,9495],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{De:function(){return g}});var s,l=n("../../node_modules/react/index.js");function a(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var d=function(){function e(t){var n=t.content;a(this,e),o(this,"isMounted",!1),o(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return c(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),p="http://www.w3.org/2000/svg",f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),o(this,"symbols",new Map),o(this,"config",{attrs:{xmlns:p,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),o(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return c(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=d.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(p,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var y="__SVG_SPRITE_NODE__";s=new f({attrs:{id:y}});var h=function(){var e=document.getElementById(y);e?s.attach(e):s.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else s=null;var v=m?l.useLayoutEffect:l.useEffect,b=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,s=void 0===o?0:o,a=e.viewBox,u=e.id,c=e.className,d=e.fill,p=e.getRootRef,f=e.style,m=e.title,y=e.children,h=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),v=r({width:n,height:s},void 0===f?{}:f);return l.createElement("svg",i(r({"aria-hidden":"true",display:"block"},h),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(n,s)),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(s),"vkuiIcon--".concat(u),void 0===c?"":c].join(" ").trim(),viewBox:a,width:n,height:s,style:v,ref:p}),m&&l.createElement("title",null,m),l.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:d}},y))};function g(e,t,n,o,a,u,c,p){var f=function(){m||(!function(e){s&&s.add(e)}(new d({content:o})),m=!0)},m=!1,y=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),h=function(e){return v(f,[]),c&&y("Иконка устарела"+(p?". Замените на ".concat(p):"")),l.createElement(b,i(r({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?a:+e.width,height:void 0===e.height||isNaN(e.height)?u:+e.height}))};return h.mountIcon=f,h.displayName=e,h}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Footnote/Footnote.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),s=n.n(i)()(r());s.push([e.id,".Footnote--TsLLT{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),s.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"},t.Z=s},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),s=n.n(i)()(r());s.push([e.id,".VisuallyHidden--bAIOu{clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px!important;margin:-1px!important;opacity:0;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}",""]),s.locals={VisuallyHidden:"VisuallyHidden--bAIOu"},t.Z=s},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(e){e(n)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,n)})}}}},"./src/components/Checkbox/Checkbox.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return h},WithDescription:function(){return b},WithText:function(){return v}});var o,r,i,s,l,a,u,c,d,p=n("./src/storybook/constants.ts");function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var y={title:"Forms/Checkbox",component:n("./src/components/Checkbox/Checkbox.tsx").X,parameters:f({},p.tW,p.nB),argTypes:{description:p.R0}};t.default=y;var h={},v=m(f({},h),{args:m(f({},h.args),{children:"Закрепить сообщение"})}),b=m(f({},h),{args:m(f({},v.args),{description:"Все пользователи получат уведомление"})});h.parameters=m(f({},h.parameters),{docs:m(f({},null===(o=h.parameters)||void 0===o?void 0:o.docs),{source:f({originalSource:"{}"},null===(i=h.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})}),v.parameters=m(f({},v.parameters),{docs:m(f({},null===(s=v.parameters)||void 0===s?void 0:s.docs),{source:f({originalSource:"{\n  ...Playground,\n  args: {\n    ...Playground.args,\n    children: 'Закрепить сообщение'\n  }\n}"},null===(a=v.parameters)||void 0===a?void 0:null===(l=a.docs)||void 0===l?void 0:l.source)})}),b.parameters=m(f({},b.parameters),{docs:m(f({},null===(u=b.parameters)||void 0===u?void 0:u.docs),{source:f({originalSource:"{\n  ...Playground,\n  args: {\n    ...WithText.args,\n    description: 'Все пользователи получат уведомление'\n  }\n}"},null===(d=b.parameters)||void 0===d?void 0:null===(c=d.docs)||void 0===c?void 0:c.source)})})},"./src/components/Typography/Footnote/Footnote.tsx":function(e,t,n){n.d(t,{w:function(){return g}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/components/Typography/Typography.tsx"),s=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=n.n(s),a=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=n.n(a),c=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=n.n(c),p=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=n.n(p),m=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=n.n(m),h=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),v={attributes:{class:"vkui-style"}};v.setAttributes=f(),v.insert=d().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=y(),l()(h.Z,v);var b=h.Z&&h.Z.locals?h.Z.locals:void 0,g=function(e){var t=e.className,n=e.caps,s=e.Component,l=e.normalize,a=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["className","caps","Component","normalize"]);return(0,o.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===s?"span":s,normalize:void 0===l||l,className:(0,r.AK)(t,b.Footnote,n&&b["Footnote--caps"])},a))};try{g.displayName="Footnote",g.__docgenInfo={description:"",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:g.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":function(e,t,n){n.d(t,{T:function(){return b}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("./src/components/RootComponent/RootComponent.tsx"),i=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(i),l=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),a=n.n(l),u=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(u),d=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(d),f=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=n.n(f),y=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),h={attributes:{class:"vkui-style"}};h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=m(),s()(y.Z,h);var v=y.Z&&y.Z.locals?y.Z.locals:void 0,b=function(e){var t=e.Component,n=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["Component"]);return(0,o.jsx)(r.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===t?"span":t},n),{baseClassName:v.VisuallyHidden}))};try{b.displayName="VisuallyHidden",b.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:b.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(e){}}}]);