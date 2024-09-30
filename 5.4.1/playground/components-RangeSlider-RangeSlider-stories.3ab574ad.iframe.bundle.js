"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9904],{"./src/components/RangeSlider/RangeSlider.stories.tsx":function(e,t,r){r.r(t),r.d(t,{Playground:function(){return v},default:function(){return g}});var n,o,a,u=r("../../node_modules/react/jsx-runtime.js"),i=r("../../node_modules/react/index.js"),l=r("./src/storybook/VKUIDecorators.tsx"),c=r("./src/storybook/constants.ts"),s=r("./src/components/Group/Group.tsx"),p=r("./src/helpers/math.ts"),d=r("./src/components/RangeSlider/UniversalSlider.tsx");function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],u=!0,i=!1;try{for(o=o.call(e);!(u=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(e){i=!0,n=e}finally{try{u||null==o.return||o.return()}finally{if(i)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(e){var t=e.onChange,r=e.min,n=void 0===r?0:r,o=e.max,a=void 0===o?100:o,l=e.defaultValue,c=e.step,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["onChange","min","max","defaultValue","step"]),f=void 0!==s.value,y=m(i.useState(void 0===l?[n,a]:l),2),b=y[0],O=y[1],g=m(s.value||b,2),v=g[0],j=g[1],S=i.useMemo(function(){return[(0,p.uZ)(v,n,a),(0,p.uZ)(j,n,a)]},[j,a,n,v]),h=i.useCallback(function(e,r){!s.disabled&&(S[0]!==e[0]||S[1]!==e[1])&&(f||O(e),t&&t(e,r))},[s.disabled,S,f,t]);return(0,u.jsx)(d.y,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}({},s),{value:S,onChange:h,min:n,max:a,step:void 0===c?0:c}))};try{y.displayName="RangeSlider",y.__docgenInfo={description:"",displayName:"RangeSlider",props:{min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"0"},description:"",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Value"}},defaultValue:{defaultValue:{value:"[min, max]"},description:"",name:"defaultValue",required:!1,type:{name:"Value"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: Value, e: TouchEvent) => void)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RangeSlider/RangeSlider.tsx#RangeSlider"]={docgenInfo:y.__docgenInfo,name:"RangeSlider",path:"src/components/RangeSlider/RangeSlider.tsx#RangeSlider"})}catch(e){}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var g={title:"Forms/RangeSlider",component:y,parameters:b({},c.tW,c.nB)},v={decorators:[function(e,t){return(0,u.jsx)(s.Z,{children:(0,u.jsx)(e,b({},t.args))})},l.vO,l.Z0]};v.parameters=O(b({},v.parameters),{docs:O(b({},null===(n=v.parameters)||void 0===n?void 0:n.docs),{source:b({originalSource:"{\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}"},null===(o=v.parameters)||void 0===o?void 0:null===(a=o.docs)||void 0===a?void 0:a.source)})})}}]);