"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4679],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/FocusVisible/FocusVisible.module.css":function(e,i,s){var o=s("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=s.n(o),n=s("../../node_modules/css-loader/dist/runtime/api.js"),l=s.n(n)()(t());l.push([e.id,".FocusVisible--NGtEI{border-radius:inherit;bottom:0;bottom:var(--vkui_internal--focus_visible_distance,0);left:0;left:var(--vkui_internal--focus_visible_distance,0);overflow:hidden;pointer-events:none;position:absolute;right:0;right:var(--vkui_internal--focus_visible_distance,0);top:0;top:var(--vkui_internal--focus_visible_distance,0);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden}.FocusVisible--visible--wE6cf{visibility:visible}.FocusVisible--NGtEI.FocusVisible--NGtEI{position:absolute}.FocusVisible--NGtEI{--vkui_internal--focus_visible_thin:2px}.FocusVisible--thin--o_Aqc{--vkui_internal--focus_visible_thin:var(--vkui_internal--thin_border)}.FocusVisible--mode-inside--jbxik,.FocusVisible--mode-outline--nn_01{border-color:#2688eb;border-color:var(--vkui--color_stroke_accent);border-style:solid;border-width:var(--vkui_internal--focus_visible_thin);box-sizing:border-box}.FocusVisible--mode-outline--nn_01{--vkui_internal--focus_visible_distance:0}.FocusVisible--mode-inside--jbxik{--vkui_internal--focus_visible_distance:2px}.FocusVisible--mode-outside--rxeMB{--vkui_internal--focus_visible_distance:-2px;box-shadow:0 0 0 var(--vkui_internal--focus_visible_thin) #2688eb;box-shadow:0 0 0 var(--vkui_internal--focus_visible_thin) var(--vkui--color_stroke_accent)}@media (prefers-reduced-motion:no-preference){.FocusVisible--visible--wE6cf.FocusVisible--mode-inside--jbxik{--vkui_internal--focus_visible_distance:4px;animation:vkui-animation-focus-visible--nhA4c .15s ease-in-out forwards;animation-delay:.01ms;will-change:top,left,bottom,right}.FocusVisible--visible--wE6cf.FocusVisible--mode-outside--rxeMB{--vkui_internal--focus_visible_distance:0;animation-name:vkui-animation-focus-visible-outside--P2Xa4}@keyframes vkui-animation-focus-visible--nhA4c{0%{}to{bottom:0;left:0;right:0;top:0;will-change:auto}}@keyframes vkui-animation-focus-visible-outside--P2Xa4{0%{}to{bottom:-2px;left:-2px;right:-2px;top:-2px;will-change:auto}}}",""]),l.locals={FocusVisible:"FocusVisible--NGtEI","FocusVisible--visible":"FocusVisible--visible--wE6cf","FocusVisible--thin":"FocusVisible--thin--o_Aqc","FocusVisible--mode-inside":"FocusVisible--mode-inside--jbxik","FocusVisible--mode-outline":"FocusVisible--mode-outline--nn_01","FocusVisible--mode-outside":"FocusVisible--mode-outside--rxeMB","vkui-animation-focus-visible":"vkui-animation-focus-visible--nhA4c","vkui-animation-focus-visible-outside":"vkui-animation-focus-visible-outside--P2Xa4"},i.Z=l},"./src/components/Textarea/Textarea.stories.tsx":function(e,i,s){s.r(i),s.d(i,{Playground:function(){return a}});var o,t,n,l=s("./src/storybook/constants.ts");function r(e){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{},o=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),o.forEach(function(i){!function(e,i,s){i in e?Object.defineProperty(e,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[i]=s}(e,i,s[i])})}return e}function u(e,i){return i=null!=i?i:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):(function(e,i){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),s.push.apply(s,o)}return s})(Object(i)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))}),e}var c={title:"Forms/Textarea",component:s("./src/components/Textarea/Textarea.tsx").g,parameters:r({},l.tW,l.nB)};i.default=c;var a={};a.parameters=u(r({},a.parameters),{docs:u(r({},null===(o=a.parameters)||void 0===o?void 0:o.docs),{source:r({originalSource:"{}"},null===(t=a.parameters)||void 0===t?void 0:null===(n=t.docs)||void 0===n?void 0:n.source)})})},"./src/components/FocusVisible/FocusVisible.tsx":function(e,i,s){s.d(i,{W:function(){return k}});var o=s("../../node_modules/react/jsx-runtime.js");s("../../node_modules/react/index.js");var t=s("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),n=s("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=s.n(n),r=s("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=s.n(r),c=s("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),a=s.n(c),d=s("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),b=s.n(d),m=s("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=s.n(m),f=s("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/FocusVisible/FocusVisible.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=b(),_.insert=a().bind(null,"head"),_.domAPI=u(),_.insertStyleElement=v(),l()(f.Z,_);var p=f.Z&&f.Z.locals?f.Z.locals:void 0,k=function(e){var i=e.visible,s=e.mode,n=e.thin;return(0,o.jsx)("span",{"aria-hidden":!0,className:(0,t.AK)(p.FocusVisible,i&&p["FocusVisible--visible"],n&&p["FocusVisible--thin"],{inside:p["FocusVisible--mode-inside"],outside:p["FocusVisible--mode-outside"],outline:p["FocusVisible--mode-outline"]}[s])})};try{k.displayName="FocusVisible",k.__docgenInfo={description:"",displayName:"FocusVisible",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean | undefined"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"inside"'},{value:'"outside"'},{value:'"outline"'}]}},thin:{defaultValue:null,description:"",name:"thin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FocusVisible/FocusVisible.tsx#FocusVisible"]={docgenInfo:k.__docgenInfo,name:"FocusVisible",path:"src/components/FocusVisible/FocusVisible.tsx#FocusVisible"})}catch(e){}},"./src/storybook/constants.ts":function(e,i,s){s.d(i,{R0:function(){return n},nB:function(){return t},tW:function(){return o}});var o={layout:"fullscreen",centered:!0},t={cartesian:{disable:!0}},n={control:{type:"text"}}}}]);