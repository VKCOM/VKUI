"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[278],{"../../node_modules/@vkontakte/icons/dist/es6/28/smile_outline.js":function(e,n,t){var o=t("../../node_modules/@vkontakte/icons-sprite/dist/index.js");n.Z=(0,o.De)("Icon28SmileOutline","smile_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="smile_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12Zm0-2c5.523 0 10-4.477 10-10S19.523 4 14 4 4 8.477 4 14s4.477 10 10 10Zm-4.388-5.909a1 1 0 1 1 1.463-1.364 4 4 0 0 0 5.85.001 1 1 0 1 1 1.46 1.367 6 6 0 0 1-8.774-.003Zm7.763-4.841a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25Zm-6.75 0a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25Z" /></g></symbol>',28,28,!1,void 0)},"./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.stories.tsx":function(e,n,t){t.r(n),t.d(n,{Playground:function(){return v},default:function(){return m}});var o,r,c,i=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var s=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24SmileOutline","smile_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="smile_outline_24"><path d="M8.438 14.297a.9.9 0 0 1 1.259.133c.013.016.196.223.53.432.383.24.97.488 1.773.488a3.3 3.3 0 0 0 1.773-.488c.191-.12.382-.26.53-.432a.9.9 0 0 1 1.4 1.132 4.045 4.045 0 0 1-.976.826A5.094 5.094 0 0 1 12 17.15a5.094 5.094 0 0 1-2.727-.762 3.987 3.987 0 0 1-.976-.826.9.9 0 0 1 .14-1.265Zm1.812-4.047a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15 11.5A1.25 1.25 0 1 0 15 9a1.25 1.25 0 0 0 0 2.5Zm-3-9.4c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9ZM3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0Z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0),a=t("../../node_modules/@vkontakte/icons/dist/es6/28/smile_outline.js"),d=t("./src/storybook/constants.ts"),l=t("./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx");function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var m={title:"Blocks/AdaptiveIconRenderer",component:l.S,parameters:u({},d.tW,d.nB)},v={render:function(){return(0,i.jsx)(l.S,{IconCompact:s,IconRegular:a.Z})}};v.parameters=p(u({},v.parameters),{docs:p(u({},null===(o=v.parameters)||void 0===o?void 0:o.docs),{source:u({originalSource:"{\n  render: () => <AdaptiveIconRenderer IconCompact={Icon24SmileOutline} IconRegular={Icon28SmileOutline} />\n}"},null===(r=v.parameters)||void 0===r?void 0:null===(c=r.docs)||void 0===c?void 0:c.source)})})},"./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx":function(e,n,t){t.d(n,{S:function(){return i}});var o=t("../../node_modules/react/jsx-runtime.js"),r=t("../../node_modules/react/index.js"),c=t("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx"),i=function(e){var n=e.IconCompact,t=e.IconRegular,i=(0,c.m)().sizeY;return(0,o.jsxs)(r.Fragment,{children:[i.compact&&(0,o.jsx)(n,{className:i.compact.className}),i.regular&&(0,o.jsx)(t,{className:i.regular.className})]})};try{i.displayName="AdaptiveIconRenderer",i.__docgenInfo={description:"",displayName:"AdaptiveIconRenderer",props:{IconCompact:{defaultValue:null,description:"",name:"IconCompact",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}},IconRegular:{defaultValue:null,description:"",name:"IconRegular",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx#AdaptiveIconRenderer"]={docgenInfo:i.__docgenInfo,name:"AdaptiveIconRenderer",path:"src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx#AdaptiveIconRenderer"})}catch(e){}},"./src/storybook/constants.ts":function(e,n,t){t.d(n,{R0:function(){return c},nB:function(){return r},tW:function(){return o}});var o={layout:"fullscreen",centered:!0},r={cartesian:{disable:!0}},c={control:{type:"text"}}}}]);