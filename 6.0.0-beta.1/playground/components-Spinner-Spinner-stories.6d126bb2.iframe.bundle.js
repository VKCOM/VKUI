"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8783],{"./src/components/Spinner/Spinner.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Playground:()=>u,__namedExportsOrder:()=>p,default:()=>c});var r,o,s,i=n("../../tools/storybook-addon-cartesian/src/index.tsx"),l=n("./src/storybook/constants.ts");function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}let c={title:"Blocks/Spinner",component:n("./src/components/Spinner/Spinner.tsx").$,parameters:l.tW,decorators:[i.nW]};var u={};u.parameters=a(d({},u.parameters),{docs:a(d({},null===(r=u.parameters)||void 0===r?void 0:r.docs),{source:d({originalSource:"{}"},null===(s=u.parameters)||void 0===s?void 0:null===(o=s.docs)||void 0===o?void 0:o.source)})});let p=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,n)=>{n.d(t,{_:()=>r});function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,n)=>{n.d(t,{De:()=>j});var r,o=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),s=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),i=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),l=n("../../node_modules/react/index.js"),d=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),a=n("../../node_modules/@swc/helpers/esm/_create_class.js"),c=n("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(t){var n=t.content;(0,d._)(this,e),(0,c._)(this,"isMounted",!1),(0,c._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,a._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),p="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,d._)(this,e),(0,c._)(this,"symbols",new Map),(0,c._)(this,"config",{attrs:{xmlns:p,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,c._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,a._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=u.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(p,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),f=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(f){var y="__SVG_SPRITE_NODE__";r=new m({attrs:{id:y}});var b=function(){var e=document.getElementById(y);e?r.attach(e):r.mount(document.body),document.removeEventListener("DOMContentLoaded",b)};document.querySelector("body")?b():document.addEventListener("DOMContentLoaded",b)}else r=null;var h=f?l.useLayoutEffect:l.useEffect,v=function(e){var t=e.width,n=void 0===t?0:t,r=e.height,d=void 0===r?0:r,a=e.viewBox,c=e.id,u=e.className,p=e.fill,m=e.getRootRef,f=e.style,y=e.title,b=e.children,h=(0,i._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),v=Math.max(n,d),j=(0,o._)({width:n,height:d},void 0===f?{}:f);return l.createElement("svg",(0,s._)((0,o._)({"aria-hidden":"true",display:"block"},h),{className:["vkuiIcon","vkuiIcon--".concat(v),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(d),"vkuiIcon--".concat(c),void 0===u?"":u].join(" ").trim(),viewBox:a,width:n,height:d,style:j,ref:m}),y&&l.createElement("title",null,y),l.createElement("use",{xlinkHref:"#".concat(c),style:{fill:"currentColor",color:p}},b))};function j(e,t,n,i,d,a,c,p){var m=function(){f||(!function(e){r&&r.add(e)}(new u({content:i})),f=!0)},f=!1,y=function(e){var t={};return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),b=function(e){return h(m,[]),c&&y("Иконка устарела"+(p?". Замените на ".concat(p):"")),l.createElement(v,(0,s._)((0,o._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?d:+e.width,height:void 0===e.height||isNaN(e.height)?a:+e.height}))};return b.mountIcon=m,b.displayName=e,b}},"../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js":(e,t,n)=>{n.d(t,{P:()=>r});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="spinner_16"><path fill-rule="evenodd" d="M8 3.25a4.75 4.75 0 0 0-4.149 7.065.75.75 0 1 1-1.31.732A6.25 6.25 0 1 1 8 14.25a.75.75 0 0 1 .001-1.5 4.75 4.75 0 1 0 0-9.5Z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js":(e,t,n)=>{n.d(t,{h:()=>r});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js":(e,t,n)=>{n.d(t,{X:()=>r});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js":(e,t,n)=>{n.d(t,{C:()=>r});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22" /></symbol>',44,44,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Spinner/Spinner.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var r=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(r),s=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(s)()(o());i.push([e.id,".Spinner--aVS7j{align-items:center;color:var(--vkui--color_icon_medium);display:flex;height:100%;justify-content:center;width:100%}.vkuiInternalPanelHeader .Spinner--aVS7j{color:currentColor}",""]),i.locals={Spinner:"Spinner--aVS7j"};let l=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var r=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(r),s=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(s)()(o());i.push([e.id,".VisuallyHidden--bAIOu{clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px!important;margin:-1px!important;opacity:0;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}",""]),i.locals={VisuallyHidden:"VisuallyHidden--bAIOu"};let l=i},"./src/components/Spinner/Spinner.tsx":(e,t,n)=>{n.d(t,{$:()=>m});var r=n("../../node_modules/react/jsx-runtime.js"),o=n("../../node_modules/react/index.js"),s=n("../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js"),i=n("../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js"),l=n("../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js"),d=n("../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js"),a=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),c=n("./src/components/RootComponent/RootComponent.tsx"),u=n("./src/components/VisuallyHidden/VisuallyHidden.tsx"),p=n("./src/components/Spinner/Spinner.module.css"),m=o.memo(function(e){var t=e.size,n=void 0===t?"regular":t,o=e.children,m=void 0===o?"Загружается...":o,f=e.disableAnimation,y=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["size","children","disableAnimation"]),b={small:s.P,regular:i.h,medium:l.X,large:d.C}[n],h={small:8,regular:12,medium:16,large:22}[n];return(0,r.jsxs)(c.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:"span",role:"status"},y),{baseClassName:p.Z.Spinner,children:[(0,r.jsx)(b,{children:!f&&(0,r.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 ".concat(h," ").concat(h),to:"360 ".concat(h," ").concat(h),dur:"0.7s",repeatCount:"indefinite"})}),(0,a.p7)(m)&&(0,r.jsx)(u.T,{children:m})]}))});m.displayName="Spinner";try{m.displayName="Spinner",m.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'},{value:'"medium"'},{value:'"large"'}]}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:m.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch(e){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(e,t,n)=>{n.d(t,{T:()=>v});var r=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var o=n("./src/components/RootComponent/RootComponent.tsx"),s=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=n.n(s),l=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=n.n(l),a=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(a),u=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(u),m=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=n.n(m),y=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=f(),i()(y.Z,b);let h=y.Z&&y.Z.locals?y.Z.locals:void 0;var v=function(e){var t=e.Component,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["Component"]);return(0,r.jsx)(o.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===t?"span":t},n),{baseClassName:h.VisuallyHidden}))};try{v.displayName="VisuallyHidden",v.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:v.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(e){}},"./src/storybook/constants.ts":(e,t,n)=>{n.d(t,{R0:()=>s,nB:()=>o,tW:()=>r});var r={layout:"fullscreen",centered:!0},o={cartesian:{disable:!0}},s={control:{type:"text"}}},"../../tools/storybook-addon-cartesian/src/index.tsx":(e,t,n)=>{n.d(t,{nW:()=>d});var r=n("../../node_modules/react/jsx-runtime.js");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}n("../../node_modules/react/index.js");var l={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},d=function(e,t){var n=t.argTypes,d=t.args.cartesian,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t.args,["cartesian"]);if(d){var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return Object.entries(e).reduce(function(e,n){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var s=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw r}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n,2),l=r[0],d=r[1],a=[];return e.forEach(function(e){d.forEach(function(n){a.push(function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(i({},e),s({},l,t[l].mapping?t[l].mapping[n]:n)))})}),a},[{}])}(d,n);return(0,r.jsx)("div",{style:l,children:c.map(function(t,n){return(0,r.jsx)(e,{args:i({},a,t)},n)})})}return(0,r.jsx)(e,{args:a})}},"./src/components/Spinner/Spinner.module.css":(e,t,n)=>{n.d(t,{Z:()=>y});var r=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=n.n(r),s=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),i=n.n(s),l=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=n.n(l),a=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),c=n.n(a),u=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=n.n(u),m=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Spinner/Spinner.module.css"),f={attributes:{class:"vkui-style"}};f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),o()(m.Z,f);let y=m.Z&&m.Z.locals?m.Z.locals:void 0}}]);