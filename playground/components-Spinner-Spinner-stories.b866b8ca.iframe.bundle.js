"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8783],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Spinner/Spinner.module.css":function(e,r,n){var t=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(t),i=n("../../node_modules/css-loader/dist/runtime/api.js"),s=n.n(i)()(o());s.push([e.id,".Spinner--aVS7j{align-items:center;color:#818c99;color:var(--vkui--color_icon_medium);display:flex;height:100%;justify-content:center;width:100%}.Spinner__self--i52N7{animation:vkui-spinner-rotator--PSgXX .7s linear infinite;animation:vkui-spinner-rotator--PSgXX var(--vkui_internal--duration) linear infinite;transform-origin:center}.Spinner__self--i52N7 svg{transform:scale(1)}.vkuiInternalPanelHeader .Spinner--aVS7j{color:currentColor}@keyframes vkui-spinner-rotator--PSgXX{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),s.locals={Spinner:"Spinner--aVS7j",Spinner__self:"Spinner__self--i52N7","vkui-spinner-rotator":"vkui-spinner-rotator--PSgXX"},r.Z=s},"./src/components/Spinner/Spinner.stories.tsx":function(e,r,n){n.r(r),n.d(r,{Playground:function(){return p}});var t,o,i,s=n("../../tools/storybook-addon-cartesian/src/index.tsx"),l=n("./src/storybook/constants.ts");function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){!function(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}(e,r,n[r])})}return e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n})(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}),e}var u={title:"Blocks/Spinner",component:n("./src/components/Spinner/Spinner.tsx").$,parameters:l.tW,decorators:[s.nW]};r.default=u;var p={};p.parameters=a(c({},p.parameters),{docs:a(c({},null===(t=p.parameters)||void 0===t?void 0:t.docs),{source:c({originalSource:"{}"},null===(o=p.parameters)||void 0===o?void 0:null===(i=o.docs)||void 0===i?void 0:i.source)})})},"./src/components/Spinner/Spinner.tsx":function(e,r,n){n.d(r,{$:function(){return d}});var t=n("../../node_modules/react/jsx-runtime.js"),o=n("../../node_modules/react/index.js"),i=n("../../node_modules/@vkontakte/icons-sprite/dist/index.js"),s=(0,i.De)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="spinner_16"><path fill="currentColor" fill-rule="evenodd" d="M11.21 2.93a6 6 0 0 0-8.64 7.62 1 1 0 1 1-1.8.86A8 8 0 1 1 8 16a1 1 0 1 1 0-2 6 6 0 0 0 3.21-11.07z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0),l=(0,i.De)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0),c=(0,i.De)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z" /></symbol>',32,32,!1,void 0),a=(0,i.De)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z" /></symbol>',44,44,!1,void 0),u=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),p=n("./src/components/Spinner/Spinner.module.css"),d=o.memo(function(e){var r=e.size,n=e["aria-label"],o=e.className,i=function(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["size","aria-label","className"]);return(0,t.jsx)("span",function(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n})(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}),e}(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){!function(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}(e,r,n[r])})}return e}({role:"status","aria-label":void 0===n?"Загружается...":n},i),{className:(0,u.AK)(p.Z.Spinner,o),children:(0,t.jsx)({small:s,regular:l,medium:c,large:a}[void 0===r?"regular":r],{className:p.Z.Spinner__self})}))});d.displayName="Spinner";try{d.displayName="Spinner",d.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:d.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch(e){}},"./src/storybook/constants.ts":function(e,r,n){n.d(r,{R0:function(){return i},nB:function(){return o},tW:function(){return t}});var t={layout:"fullscreen",centered:!0},o={cartesian:{disable:!0}},i={control:{type:"text"}}},"../../tools/storybook-addon-cartesian/src/index.tsx":function(e,r,n){n.d(r,{nW:function(){return c}});var t=n("../../node_modules/react/jsx-runtime.js");function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){i(e,r,n[r])})}return e}n("../../node_modules/react/index.js");var l={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",alignItems:"baseline"},c=function(e,r){var n=r.args.cartesian,c=function(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(r.args,["cartesian"]);if(n){var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object.entries(e).reduce(function(e,r){var n=function(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n,t,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],s=!0,l=!1;try{for(o=o.call(e);!(s=(n=o.next()).done)&&(i.push(n.value),!r||i.length!==r);s=!0);}catch(e){l=!0,t=e}finally{try{s||null==o.return||o.return()}finally{if(l)throw t}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return o(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r,2),t=n[0],l=n[1],c=[];return e.forEach(function(e){l.forEach(function(r){c.push(function(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n})(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}),e}(s({},e),i({},t,r)))})}),c},[{}])}(n);return(0,t.jsx)("div",{style:l,children:a.map(function(r,n){return(0,t.jsx)(e,{args:s({},c,r)},n)})})}return(0,t.jsx)(e,{args:c})}},"./src/components/Spinner/Spinner.module.css":function(e,r,n){var t=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=n.n(t),i=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),s=n.n(i),l=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(l),a=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),u=n.n(a),p=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),d=n.n(p),f=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Spinner/Spinner.module.css"),m={attributes:{class:"vkui-style"}};m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=d(),o()(f.Z,m),r.Z=f.Z&&f.Z.locals?f.Z.locals:void 0}}]);