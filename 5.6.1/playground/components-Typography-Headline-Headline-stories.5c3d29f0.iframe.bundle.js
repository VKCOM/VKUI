"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8232],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Typography/Headline/Headline.module.css":function(e,n,t){var r=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=t.n(r),i=t("../../node_modules/css-loader/dist/runtime/api.js"),l=t.n(i)()(o());l.push([e.id,".Headline--level-1--qhWG1{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_headline1--font_family--regular);font-size:16px;font-size:var(--vkui--font_headline1--font_size--regular);font-weight:500;font-weight:var(--vkui--font_headline1--font_weight--regular);line-height:20px;line-height:var(--vkui--font_headline1--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-1--qhWG1{font-size:15px;font-size:var(--vkui--font_headline1--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline1--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-1--qhWG1{font-size:15px;font-size:var(--vkui--font_headline1--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline1--line_height--compact)}}.Headline--level-2--iu4Uh{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_headline2--font_family--regular);font-size:15px;font-size:var(--vkui--font_headline2--font_size--regular);font-weight:500;font-weight:var(--vkui--font_headline2--font_weight--regular);line-height:20px;line-height:var(--vkui--font_headline2--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-2--iu4Uh{font-size:14px;font-size:var(--vkui--font_headline2--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline2--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-2--iu4Uh{font-size:14px;font-size:var(--vkui--font_headline2--font_size--compact);line-height:20px;line-height:var(--vkui--font_headline2--line_height--compact)}}",""]),l.locals={"Headline--level-1":"Headline--level-1--qhWG1","Headline--sizeY-compact":"Headline--sizeY-compact--hkUOV","Headline--sizeY-none":"Headline--sizeY-none--eRbzg","Headline--level-2":"Headline--level-2--iu4Uh"},n.Z=l},"./src/components/Typography/Headline/Headline.stories.tsx":function(e,n,t){t.r(n),t.d(n,{Playground:function(){return p}});var r,o,i,l=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var a=t("../../tools/storybook-addon-cartesian/src/index.tsx"),s=t("./src/storybook/constants.ts"),u=t("./src/components/Typography/Headline/Headline.tsx");function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function d(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var f={title:"Typography/Headline",component:u.s,parameters:s.tW,decorators:[a.nW]};n.default=f;var p={render:function(e){return(0,l.jsxs)("div",{children:[(0,l.jsx)(u.s,d(c({level:"1"},e),{children:"Headline 1"})),(0,l.jsx)(u.s,d(c({level:"2"},e),{children:"Headline 2"}))]})}};p.parameters=d(c({},p.parameters),{docs:d(c({},null===(r=p.parameters)||void 0===r?void 0:r.docs),{source:c({originalSource:'{\n  render: args => <div>\n      <Headline level="1" {...args}>\n        Headline 1\n      </Headline>\n      <Headline level="2" {...args}>\n        Headline 2\n      </Headline>\n    </div>\n}'},null===(i=p.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})})},"./src/components/Typography/Headline/Headline.tsx":function(e,n,t){t.d(n,{s:function(){return x}});var r=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var o=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=t("./src/hooks/useAdaptivity.ts"),l=t("./src/lib/adaptivity/constants.ts"),a=t("./src/components/Typography/Typography.tsx"),s=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=t.n(s),c=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=t.n(c),f=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=t.n(f),m=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),y=t.n(m),v=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=t.n(v),g=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Typography/Headline/Headline.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=y(),b.insert=p().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=h(),u()(g.Z,b);var O=g.Z&&g.Z.locals?g.Z.locals:void 0;function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var _=j({none:O["Headline--sizeY-none"]},l.n$.COMPACT,O["Headline--sizeY-compact"]),x=function(e){var n=e.className,t=e.weight,s=e.level,u=e.Component,c=e.normalize,d=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["className","weight","level","Component","normalize"]),f=(0,i.g)().sizeY,p=void 0===f?"none":f;return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){j(e,n,t[n])})}return e}({Component:void 0===u?"h4":u,normalize:void 0===c||c,weight:void 0===t?"3":t,className:(0,o.AK)(n,O.Headline,p!==l.n$.REGULAR&&_[p],{1:O["Headline--level-1"],2:O["Headline--level-2"]}[void 0===s?"1":s])},d))};try{x.displayName="Headline",x.__docgenInfo={description:"",displayName:"Headline",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},weight:{defaultValue:{value:"3"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"h4"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Headline/Headline.tsx#Headline"]={docgenInfo:x.__docgenInfo,name:"Headline",path:"src/components/Typography/Headline/Headline.tsx#Headline"})}catch(e){}},"./src/storybook/constants.ts":function(e,n,t){t.d(n,{R0:function(){return i},nB:function(){return o},tW:function(){return r}});var r={layout:"fullscreen",centered:!0},o={cartesian:{disable:!0}},i={control:{type:"text"}}},"../../tools/storybook-addon-cartesian/src/index.tsx":function(e,n,t){t.d(n,{nW:function(){return s}});var r=t("../../node_modules/react/jsx-runtime.js");function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){i(e,n,t[n])})}return e}t("../../node_modules/react/index.js");var a={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",alignItems:"baseline"},s=function(e,n){var t=n.args.cartesian,s=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(n.args,["cartesian"]);if(t){var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object.entries(e).reduce(function(e,n){var t=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],l=!0,a=!1;try{for(o=o.call(e);!(l=(t=o.next()).done)&&(i.push(t.value),!n||i.length!==n);l=!0);}catch(e){a=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(a)throw r}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n,2),r=t[0],a=t[1],s=[];return e.forEach(function(e){a.forEach(function(n){s.push(function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(l({},e),i({},r,n)))})}),s},[{}])}(t);return(0,r.jsx)("div",{style:a,children:u.map(function(n,t){return(0,r.jsx)(e,{args:l({},s,n)},t)})})}return(0,r.jsx)(e,{args:s})}}}]);