"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4612,1238],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Typography/Footnote/Footnote.module.css":function(e,t,o){var n=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=o.n(n),s=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(s)()(r());i.push([e.id,".Footnote--TsLLT{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),i.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"},t.Z=i},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,o){o.d(t,{Z:function(){return n}});function n(e){return{all:e=e||new Map,on:function(t,o){var n=e.get(t);n?n.push(o):e.set(t,[o])},off:function(t,o){var n=e.get(t);n&&(o?n.splice(n.indexOf(o)>>>0,1):e.set(t,[]))},emit:function(t,o){var n=e.get(t);n&&n.slice().map(function(e){e(o)}),(n=e.get("*"))&&n.slice().map(function(e){e(t,o)})}}}},"./src/components/Checkbox/Checkbox.stories.tsx":function(e,t,o){o.r(t),o.d(t,{Playground:function(){return g},WithDescription:function(){return b},WithText:function(){return v}});var n,r,s,i,a,l,u,c,d,p=o("./src/storybook/constants.ts");function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}var y={title:"Forms/Checkbox",component:o("./src/components/Checkbox/Checkbox.tsx").X,parameters:f({},p.tW,p.nB),argTypes:{description:p.R0}};t.default=y;var g={},v=m(f({},g),{args:m(f({},g.args),{children:"Закрепить сообщение"})}),b=m(f({},g),{args:m(f({},v.args),{description:"Все пользователи получат уведомление"})});g.parameters=m(f({},g.parameters),{docs:m(f({},null===(n=g.parameters)||void 0===n?void 0:n.docs),{source:f({originalSource:"{}"},null===(r=g.parameters)||void 0===r?void 0:null===(s=r.docs)||void 0===s?void 0:s.source)})}),v.parameters=m(f({},v.parameters),{docs:m(f({},null===(i=v.parameters)||void 0===i?void 0:i.docs),{source:f({originalSource:"{\n  ...Playground,\n  args: {\n    ...Playground.args,\n    children: 'Закрепить сообщение'\n  }\n}"},null===(a=v.parameters)||void 0===a?void 0:null===(l=a.docs)||void 0===l?void 0:l.source)})}),b.parameters=m(f({},b.parameters),{docs:m(f({},null===(u=b.parameters)||void 0===u?void 0:u.docs),{source:f({originalSource:"{\n  ...Playground,\n  args: {\n    ...WithText.args,\n    description: 'Все пользователи получат уведомление'\n  }\n}"},null===(c=b.parameters)||void 0===c?void 0:null===(d=c.docs)||void 0===d?void 0:d.source)})})},"./src/components/Typography/Footnote/Footnote.tsx":function(e,t,o){o.d(t,{w:function(){return h}});var n=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var r=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),s=o("./src/components/Typography/Typography.tsx"),i=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=o.n(i),l=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=o.n(l),c=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=o.n(c),p=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=o.n(p),m=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=o.n(m),g=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Typography/Footnote/Footnote.module.css"),v={attributes:{class:"vkui-style"}};v.setAttributes=f(),v.insert=d().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=y(),a()(g.Z,v);var b=g.Z&&g.Z.locals?g.Z.locals:void 0,h=function(e){var t=e.className,o=e.caps,i=e.Component,a=e.normalize,l=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["className","caps","Component","normalize"]);return(0,n.jsx)(s.Z,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({Component:void 0===i?"span":i,normalize:void 0===a||a,className:(0,r.AK)(t,b.Footnote,o&&b["Footnote--caps"])},l))};try{h.displayName="Footnote",h.__docgenInfo={description:"",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:h.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}}}]);