"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5783],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Title/Title.module.css":function(e,t,r){var n=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=r.n(n),l=r("../../node_modules/css-loader/dist/runtime/api.js"),i=r.n(l)()(o());i.push([e.id,".Title--level-1--TJIWX{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_title1--font_family--regular);font-size:24px;font-size:var(--vkui--font_title1--font_size--regular);font-weight:600;font-weight:var(--vkui--font_title1--font_weight--regular);line-height:28px;line-height:var(--vkui--font_title1--line_height--regular)}.Title--level-2--btQdj{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_title2--font_family--regular);font-size:20px;font-size:var(--vkui--font_title2--font_size--regular);font-weight:600;font-weight:var(--vkui--font_title2--font_weight--regular);line-height:24px;line-height:var(--vkui--font_title2--line_height--regular)}.Title--level-3--eS9fO{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_title3--font_family--regular);font-size:17px;font-size:var(--vkui--font_title3--font_size--regular);font-weight:600;font-weight:var(--vkui--font_title3--font_weight--regular);line-height:22px;line-height:var(--vkui--font_title3--line_height--regular)}",""]),i.locals={"Title--level-1":"Title--level-1--TJIWX","Title--level-2":"Title--level-2--btQdj","Title--level-3":"Title--level-3--eS9fO"},t.Z=i},"./src/components/Typography/Title/Title.stories.tsx":function(e,t,r){r.r(t),r.d(t,{Playground:function(){return d}});var n,o,l,i=r("../../node_modules/react/jsx-runtime.js");r("../../node_modules/react/index.js");var s=r("../../tools/storybook-addon-cartesian/src/index.tsx"),a=r("./src/storybook/constants.ts"),u=r("./src/components/Typography/Title/Title.tsx");function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var p={title:"Typography/Title",component:u.D,parameters:a.tW,decorators:[s.nW]};t.default=p;var d={render:function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)(u.D,f(c({level:"1"},e),{children:"Title 1"})),(0,i.jsx)(u.D,f(c({level:"2"},e),{children:"Title 2"})),(0,i.jsx)(u.D,f(c({level:"3"},e),{children:"Title 3"}))]})}};d.parameters=f(c({},d.parameters),{docs:f(c({},null===(n=d.parameters)||void 0===n?void 0:n.docs),{source:c({originalSource:'{\n  render: args => <div>\n      <Title level="1" {...args}>\n        Title 1\n      </Title>\n      <Title level="2" {...args}>\n        Title 2\n      </Title>\n      <Title level="3" {...args}>\n        Title 3\n      </Title>\n    </div>\n}'},null===(l=d.parameters)||void 0===l?void 0:null===(o=l.docs)||void 0===o?void 0:o.source)})})},"./src/components/Typography/Title/Title.tsx":function(e,t,r){r.d(t,{D:function(){return h}});var n=r("../../node_modules/react/jsx-runtime.js");r("../../node_modules/react/index.js");var o=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),l=r("./src/components/Typography/Typography.tsx"),i=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=r.n(i),a=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=r.n(a),c=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),f=r.n(c),p=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),d=r.n(p),y=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(y),v=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Title/Title.module.css"),g={attributes:{class:"vkui-style"}};g.setAttributes=d(),g.insert=f().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=m(),s()(v.Z,g);var b=v.Z&&v.Z.locals?v.Z.locals:void 0,j={1:b["Title--level-1"],2:b["Title--level-2"],3:b["Title--level-3"]},h=function(e){var t=e.className,r=e.level,i=void 0===r?"1":r,s=e.Component,a=e.normalize,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["className","level","Component","normalize"]);return s||(s="h"+i),(0,n.jsx)(l.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}({Component:s,normalize:void 0===a||a,className:(0,o.AK)(t,j[i])},u))};try{h.displayName="Title",h.__docgenInfo={description:"",displayName:"Title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Title/Title.tsx#Title"]={docgenInfo:h.__docgenInfo,name:"Title",path:"src/components/Typography/Title/Title.tsx#Title"})}catch(e){}},"./src/storybook/constants.ts":function(e,t,r){r.d(t,{R0:function(){return l},nB:function(){return o},tW:function(){return n}});var n={layout:"fullscreen",centered:!0},o={cartesian:{disable:!0}},l={control:{type:"text"}}},"../../tools/storybook-addon-cartesian/src/index.tsx":function(e,t,r){r.d(t,{nW:function(){return a}});var n=r("../../node_modules/react/jsx-runtime.js");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}r("../../node_modules/react/index.js");var s={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},a=function(e,t){var r=t.argTypes,a=t.args.cartesian,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t.args,["cartesian"]);if(a){var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return Object.entries(e).reduce(function(e,r){var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var l=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(r=o.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){s=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(s)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r,2),s=n[0],a=n[1],u=[];return e.forEach(function(e){a.forEach(function(r){u.push(function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(i({},e),l({},s,t[s].mapping?t[s].mapping[r]:r)))})}),u},[{}])}(a,r);return(0,n.jsx)("div",{style:s,children:c.map(function(t,r){return(0,n.jsx)(e,{args:i({},u,t)},r)})})}return(0,n.jsx)(e,{args:u})}}}]);