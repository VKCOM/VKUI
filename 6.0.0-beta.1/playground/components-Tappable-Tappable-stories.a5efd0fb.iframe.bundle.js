"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4869],{"./src/components/Tappable/Tappable.stories.tsx":(e,a,t)=>{t.r(a),t.d(a,{Playground:()=>u,__namedExportsOrder:()=>b,default:()=>d});var n,r,o,i=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var s=t("./src/storybook/constants.ts"),l=t("./src/components/Tappable/Tappable.tsx");function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(a){!function(e,a,t){a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t}(e,a,t[a])})}return e}function c(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):(function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t})(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}),e}let d={title:"Blocks/Tappable",component:l.K,parameters:p({},s.tW,s.nB)};var u={render:function(e){return(0,i.jsx)(l.K,c(p({},e),{children:(0,i.jsx)("div",{style:{padding:16},children:"Tappable"})}))}};u.parameters=c(p({},u.parameters),{docs:c(p({},null===(n=u.parameters)||void 0===n?void 0:n.docs),{source:p({originalSource:"{\n  render: args => <Tappable {...args}>\n      <div style={{\n      padding: 16\n    }}>Tappable</div>\n    </Tappable>\n}"},null===(o=u.parameters)||void 0===o?void 0:null===(r=o.docs)||void 0===r?void 0:r.source)})});let b=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css":(e,a,t)=>{t.d(a,{Z:()=>s});var n=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(n),o=t("../../node_modules/css-loader/dist/runtime/api.js"),i=t.n(o)()(r());i.push([e.id,'.Tappable--SKpjX{border-radius:var(--vkui--size_border_radius--regular)}.Tappable--sizeX-compact--cb0EA{border-radius:0}@media (max-width:767.9px){.Tappable--sizeX-none--OUJ8R{border-radius:0}}.Tappable--SKpjX.Tappable--borderRadiusInherit--TjTZm{border-radius:inherit}.Tappable__stateLayer--vrNPb{border-radius:inherit;bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;transition:background-color .15s ease-out;will-change:transform;z-index:var(--vkui_internal--z_index_tappable_state)}.Tappable--hasPointer-false--U2ndI .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}@media (pointer:coarse),(pointer:none){.Tappable--hasPointer-none--_tMdP .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}}.Tappable--hovered-background--BLT_y>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--hover)}.Tappable--activated-background--zlJ2e>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--active)}.Tappable--activated-opacity--HlTNV,.Tappable--hovered-opacity--gg3b1{transition:opacity .15s ease-out}.Tappable--hovered-opacity--gg3b1{opacity:.8}.Tappable--activated-opacity--HlTNV{opacity:.7}.Tappable__wave--iRi3O{animation:animation-wave--Spk35 .3s var(--vkui--animation_easing_platform);background:var(--vkui--color_transparent--active);border-radius:50%;content:"";height:24px;left:0;margin:-12px -12px 0 0;opacity:0;position:absolute;top:0;width:24px}@keyframes animation-wave--Spk35{0%{opacity:1;transform:scale(1)}30%{opacity:1}to{opacity:0;transform:scale(8)}}',""]),i.locals={Tappable:"Tappable--SKpjX","Tappable--sizeX-compact":"Tappable--sizeX-compact--cb0EA","Tappable--sizeX-none":"Tappable--sizeX-none--OUJ8R","Tappable--borderRadiusInherit":"Tappable--borderRadiusInherit--TjTZm",Tappable__stateLayer:"Tappable__stateLayer--vrNPb","Tappable--hasPointer-false":"Tappable--hasPointer-false--U2ndI",Tappable__ripple:"Tappable__ripple--H2dci","Tappable--hasPointer-none":"Tappable--hasPointer-none--_tMdP","Tappable--hovered-background":"Tappable--hovered-background--BLT_y","Tappable--activated-background":"Tappable--activated-background--zlJ2e","Tappable--activated-opacity":"Tappable--activated-opacity--HlTNV","Tappable--hovered-opacity":"Tappable--hovered-opacity--gg3b1",Tappable__wave:"Tappable__wave--iRi3O","animation-wave":"animation-wave--Spk35"};let s=i},"./src/components/Tappable/Tappable.tsx":(e,a,t)=>{t.d(a,{K:()=>D});var n=t("../../node_modules/react/jsx-runtime.js"),r=t("../../node_modules/react/index.js"),o=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=t("./src/hooks/useAdaptivity.ts"),s=t("./src/lib/adaptivity/constants.ts"),l=t("./src/lib/mergeCalls.ts"),p=t("./src/components/Clickable/Clickable.tsx"),c=t("./src/hooks/usePlatform.ts"),d=t("./src/hooks/useTimeout.ts"),u=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=t.n(u),m=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),f=t.n(m),v=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),y=t.n(v),T=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_=t.n(T),h=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=t.n(h),O=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css"),S={attributes:{class:"vkui-style"}};S.setAttributes=_(),S.insert=y().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=g(),b()(O.Z,S);let R=O.Z&&O.Z.locals?O.Z.locals:void 0;function j(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=Array(a);t<a;t++)n[t]=e[t];return n}function k(e,a){if(e){if("string"==typeof e)return j(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,a)}}var C=function(e,a){return"android"===(0,c.F)()&&!a&&"background"===e},A=function(e,a){var t=function(e,a,t){var n=Date.now();s((function(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(i.filter(function(e){return e.id+225>n})).concat([{x:e,y:a,id:n,pointerId:t}])),p.set(),l.delete(t)},n=function(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t,n,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!a||o.length!==a);i=!0);}catch(e){s=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw n}}return o}}(e,a)||k(e,a)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.useState([]),2),i=n[0],s=n[1],l=r.useMemo(function(){return new Map},[]),p=(0,d.K)(function(){return s([])},225),c=(!o.RX||!1===a)&&e;return{clicks:i,onPointerDown:c?function(e){var a=function(e){var a=null==e?void 0:e.getBoundingClientRect();return{top:null==a?void 0:a.top,left:null==a?void 0:a.left,width:null==e?void 0:e.offsetWidth,height:null==e?void 0:e.offsetHeight}}(e.currentTarget),n=a.top,r=a.left,o=e.clientX-(null!=r?r:0),i=e.clientY-(null!=n?n:0);l.set(e.pointerId,setTimeout(function(){return t(o,i,e.pointerId)},70))}:o.ZT,onPointerCancel:c?function(e){clearTimeout(l.get(e.pointerId)),l.delete(e.pointerId)}:o.ZT}},E=function(e){var a=e.needRipple,t=e.clicks;return(0,n.jsx)("span",{"aria-hidden":!0,className:(0,o.AK)(R.Tappable__stateLayer,(void 0===a||a)&&R.Tappable__ripple),children:t.map(function(e){return(0,n.jsx)("span",{className:R.Tappable__wave,style:{top:e.y,left:e.x}},e.id)})})};try{C.displayName="useMaybeNeedRipple",C.__docgenInfo={description:"Возможно нужен Ripple эффект. Данный хук нужен для отказа\nот двойного ререндера.",displayName:"useMaybeNeedRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"]={docgenInfo:C.__docgenInfo,name:"useMaybeNeedRipple",path:"src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"})}catch(e){}try{A.displayName="useRipple",A.__docgenInfo={description:"Хук для создания Ripple эффектов",displayName:"useRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useRipple"]={docgenInfo:A.__docgenInfo,name:"useRipple",path:"src/components/Tappable/Ripple.tsx#useRipple"})}catch(e){}try{E.displayName="Ripple",E.__docgenInfo={description:"",displayName:"Ripple",props:{needRipple:{defaultValue:{value:"true"},description:"",name:"needRipple",required:!1,type:{name:"boolean"}},clicks:{defaultValue:null,description:"",name:"clicks",required:!0,type:{name:"Wave[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#Ripple"]={docgenInfo:E.__docgenInfo,name:"Ripple",path:"src/components/Tappable/Ripple.tsx#Ripple"})}catch(e){}var P="background",w={background:R["Tappable--hovered-background"],opacity:R["Tappable--hovered-opacity"],none:""};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=w[e];return void 0!==a?a:e}var I={background:R["Tappable--activated-background"],opacity:R["Tappable--activated-opacity"],none:""};function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=I[e];return void 0!==a?a:e}try{x.displayName="hoverClass",x.__docgenInfo={description:"Определяем класс наведения",displayName:"hoverClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#hoverClass"]={docgenInfo:x.__docgenInfo,name:"hoverClass",path:"src/components/Tappable/state.tsx#hoverClass"})}catch(e){}try{N.displayName="activeClass",N.__docgenInfo={description:"Определяем класс наведения",displayName:"activeClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#activeClass"]={docgenInfo:N.__docgenInfo,name:"activeClass",path:"src/components/Tappable/state.tsx#activeClass"})}catch(e){}try{P.displayName="DEFAULT_STATE_MODE",P.__docgenInfo={description:"Состояние по умолчанию",displayName:"DEFAULT_STATE_MODE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"]={docgenInfo:P.__docgenInfo,name:"DEFAULT_STATE_MODE",path:"src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"})}catch(e){}function M(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var L={none:R["Tappable--sizeX-none"],compact:R["Tappable--sizeX-compact"]},D=function(e){var a=e.baseClassName,t=e.borderRadiusMode,r=e.children,c=e.hoverMode,d=void 0===c?P:c,u=e.activeMode,b=void 0===u?P:u,m=e.onPointerDown,f=e.onPointerCancel,v=M(e,["baseClassName","borderRadiusMode","children","hoverMode","activeMode","onPointerDown","onPointerCancel"]),y=(0,p.T)(v),T=(0,i.g)(),_=T.sizeX,h=void 0===_?"none":_,g=T.hasPointer,O=C(b,g),S=A(O,g),j=S.clicks,k=M(S,["clicks"]),w=(0,l.O)(k,{onPointerDown:m,onPointerCancel:f});return(0,n.jsxs)(p.P,function(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):(function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t})(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}),e}(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(a){!function(e,a,t){a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t}(e,a,t[a])})}return e}({baseClassName:(0,o.AK)(a,R.Tappable,h!==s.n$.REGULAR&&L[h],"inherit"===(void 0===t?"auto":t)&&R["Tappable--borderRadiusInherit"],function(e){switch(e){case void 0:return R["Tappable--hasPointer-none"];case!1:return R["Tappable--hasPointer-false"]}}(g)),hoverClassName:x(d),activeClassName:N(b)},w,v),{children:[r,y&&("background"===d||"background"===b)&&(0,n.jsx)(E,{needRipple:O,clicks:j})]}))};try{D.displayName="Tappable",D.__docgenInfo={description:"",displayName:"Tappable",props:{borderRadiusMode:{defaultValue:{value:"auto"},description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:{value:"background"},description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:{value:"background"},description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Tappable.tsx#Tappable"]={docgenInfo:D.__docgenInfo,name:"Tappable",path:"src/components/Tappable/Tappable.tsx#Tappable"})}catch(e){}}}]);