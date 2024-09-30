"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[426],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{De:function(){return g}});var s,c=n("../../node_modules/react/index.js");function u(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var d=function(){function e(t){var n=t.content;u(this,e),r(this,"isMounted",!1),r(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return l(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),f="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(this,e),r(this,"symbols",new Map),r(this,"config",{attrs:{xmlns:f,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),r(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return l(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=d.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(f,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),h=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(h){var v="__SVG_SPRITE_NODE__";s=new p({attrs:{id:v}});var m=function(){var e=document.getElementById(v);e?s.attach(e):s.mount(document.body),document.removeEventListener("DOMContentLoaded",m)};document.querySelector("body")?m():document.addEventListener("DOMContentLoaded",m)}else s=null;var y=h?c.useLayoutEffect:c.useEffect,b=function(e){var t=e.width,n=void 0===t?0:t,r=e.height,s=void 0===r?0:r,u=e.viewBox,a=e.id,l=e.className,d=e.fill,f=e.getRootRef,p=e.style,h=e.title,v=e.children,m=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),y=o({width:n,height:s},void 0===p?{}:p);return c.createElement("svg",i(o({"aria-hidden":"true",display:"block"},m),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(n,s)),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(s),"vkuiIcon--".concat(a),void 0===l?"":l].join(" ").trim(),viewBox:u,width:n,height:s,style:y,ref:f}),h&&c.createElement("title",null,h),c.createElement("use",{xlinkHref:"#".concat(a),style:{fill:"currentColor",color:d}},v))};function g(e,t,n,r,u,a,l,f){var p=function(){h||(!function(e){s&&s.add(e)}(new d({content:r})),h=!0)},h=!1,v=function(e){var t={};return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),m=function(e){return y(p,[]),l&&v("Иконка устарела"+(f?". Замените на ".concat(f):"")),c.createElement(b,i(o({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?u:+e.width,height:void 0===e.height||isNaN(e.height)?a:+e.height}))};return m.mountIcon=p,m.displayName=e,m}},"../../node_modules/@vkontakte/icons/dist/es6/16/add_16.js":function(e,t,n){n.d(t,{n:function(){return r}});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Add","add_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="add_16"><path fill="currentColor" d="M9 9v4a1 1 0 1 1-2 0V9H3a1 1 0 1 1 0-2h4V3a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2H9Z" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js":function(e,t,n){n.d(t,{P:function(){return r}});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="spinner_16"><path fill="currentColor" fill-rule="evenodd" d="M11.21 2.93a6 6 0 0 0-8.64 7.62 1 1 0 1 1-1.8.86A8 8 0 1 1 8 16a1 1 0 1 1 0-2 6 6 0 0 0 3.21-11.07z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/add_24.js":function(e,t,n){n.d(t,{n:function(){return r}});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Add","add_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="add_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M13 11h6.5a1 1 0 0 1 0 2H13v6.5a1 1 0 0 1-2 0V13H4.5a1 1 0 0 1 0-2H11V4.5a1 1 0 0 1 2 0V11Z" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js":function(e,t,n){n.d(t,{h:function(){return r}});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js":function(e,t,n){n.d(t,{X:function(){return r}});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js":function(e,t,n){n.d(t,{C:function(){return r}});var r=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z" /></symbol>',44,44,!1,void 0)},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(e){e(n)}),(r=e.get("*"))&&r.slice().map(function(e){e(t,n)})}}}},"../../tools/storybook-addon-cartesian/src/index.tsx":function(e,t,n){n.d(t,{nW:function(){return u}});var r=n("../../node_modules/react/jsx-runtime.js");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}n("../../node_modules/react/index.js");var c={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},u=function(e,t){var n=t.argTypes,u=t.args.cartesian,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t.args,["cartesian"]);if(u){var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return Object.entries(e).reduce(function(e,n){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],s=!0,c=!1;try{for(o=o.call(e);!(s=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{s||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n,2),c=r[0],u=r[1],a=[];return e.forEach(function(e){u.forEach(function(n){a.push(function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(s({},e),i({},c,t[c].mapping?t[c].mapping[n]:n)))})}),a},[{}])}(u,n);return(0,r.jsx)("div",{style:c,children:l.map(function(t,n){return(0,r.jsx)(e,{args:s({},a,t)},n)})})}return(0,r.jsx)(e,{args:a})}}}]);