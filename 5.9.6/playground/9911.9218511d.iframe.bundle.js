"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9911],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,n,t){function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){o(e,n,t[n])})}return e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}t.d(n,{De:function(){return g}});var s,l=t("../../node_modules/react/index.js");function c(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,n,t){return n&&d(e.prototype,n),t&&d(e,t),e}var a=function(){function e(n){var t=n.content;c(this,e),o(this,"isMounted",!1),o(this,"node",void 0),this.node=function(e){var n=!!document.importNode,t=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return n?document.importNode(t,!0):t}(t)}return u(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(n){var t=new e({content:""});return t.node=n,t}}]),e}(),f="http://www.w3.org/2000/svg",v=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(this,e),o(this,"symbols",new Map),o(this,"config",{attrs:{xmlns:f,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),o(this,"node",null),Object.assign(this.config.attrs,n.attrs)}return u(e,[{key:"push",value:function(e){var n=this.symbols,t=n.has(e.id);return n.set(e.id,e),!t}},{key:"add",value:function(e){var n=this.push(e);return this.node&&n&&e.mount(this.node),n}},{key:"attach",value:function(e){var n=this;this.node||(this.node=e,this.symbols.forEach(function(n){n.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var t=a.createFromExistingNode(e);n.add(t)}))}},{key:"mount",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),n&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(f,"svg");return Object.entries(this.config.attrs).forEach(function(n){return e.setAttribute(n[0],n[1])}),this.symbols.forEach(function(n){return e.appendChild(n.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),h=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(h){var m="__SVG_SPRITE_NODE__";s=new v({attrs:{id:m}});var p=function(){var e=document.getElementById(m);e?s.attach(e):s.mount(document.body),document.removeEventListener("DOMContentLoaded",p)};document.querySelector("body")?p():document.addEventListener("DOMContentLoaded",p)}else s=null;var w=h?l.useLayoutEffect:l.useEffect,y=function(e){var n=e.width,t=void 0===n?0:n,o=e.height,s=void 0===o?0:o,c=e.viewBox,d=e.id,u=e.className,a=e.fill,f=e.getRootRef,v=e.style,h=e.title,m=e.children,p=function(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),w=i({width:t,height:s},void 0===v?{}:v);return l.createElement("svg",r(i({"aria-hidden":"true",display:"block"},p),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(t,s)),"vkuiIcon--w-".concat(t),"vkuiIcon--h-".concat(s),"vkuiIcon--".concat(d),void 0===u?"":u].join(" ").trim(),viewBox:c,width:t,height:s,style:w,ref:f}),h&&l.createElement("title",null,h),l.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:a}},m))};function g(e,n,t,o,c,d,u,f){var v=function(){h||(!function(e){s&&s.add(e)}(new a({content:o})),h=!0)},h=!1,m=function(e){var n={};return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";n[t]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(t)),n[t]=!0)}}(e),p=function(e){return w(v,[]),u&&m("Иконка устарела"+(f?". Замените на ".concat(f):"")),l.createElement(y,r(i({},e),{viewBox:t,id:n,width:void 0===e.width||isNaN(e.width)?c:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return p.mountIcon=v,p.displayName=e,p}},"../../node_modules/@vkontakte/icons/dist/es6/12/circle_12.js":function(e,n,t){t.d(n,{m:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/12/online_mobile_12.js":function(e,n,t){t.d(n,{I:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98Zm.007 3H2.004a.502.502 0 0 0-.503.502v4.995c0 .278.225.503.503.503h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js":function(e,n,t){t.d(n,{P:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="spinner_16"><path fill="currentColor" fill-rule="evenodd" d="M11.21 2.93a6 6 0 0 0-8.64 7.62 1 1 0 1 1-1.8.86A8 8 0 1 1 8 16a1 1 0 1 1 0-2 6 6 0 0 0 3.21-11.07z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/cancel_20.js":function(e,n,t){t.d(n,{r:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon20Cancel","cancel_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="cancel_20"><path fill="currentColor" fill-rule="evenodd" d="M4.72 4.72a.75.75 0 0 1 1.06 0L10 8.94l4.22-4.22a.75.75 0 1 1 1.06 1.06L11.06 10l4.22 4.22a.75.75 0 1 1-1.06 1.06L10 11.06l-4.22 4.22a.75.75 0 0 1-1.06-1.06L8.94 10 4.72 5.78a.75.75 0 0 1 0-1.06z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/dismiss_24.js":function(e,n,t){t.d(n,{a:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Dismiss","dismiss_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="dismiss_24"><g fill="currentColor"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" opacity=".12" /><path d="M16.736 7.264a.9.9 0 0 1 0 1.272L13.273 12l3.463 3.464a.9.9 0 0 1 .081 1.18l-.08.092a.9.9 0 0 1-1.273 0L12 13.273l-3.464 3.463a.9.9 0 1 1-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.272 0L12 10.727l3.464-3.463a.9.9 0 0 1 1.272 0z" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js":function(e,n,t){t.d(n,{h:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js":function(e,n,t){t.d(n,{X:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js":function(e,n,t){t.d(n,{C:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z" /></symbol>',44,44,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/56/money_transfer_outline_56.js":function(e,n,t){t.d(n,{B:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon56MoneyTransferOutline","money_transfer_outline_56","0 0 56 56",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="money_transfer_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path fill="currentColor" fill-rule="nonzero" d="M42.308 8c2.675 0 3.645.278 4.623.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 1.948.801 4.623V32.5a1.5 1.5 0 0 1-3 0V20.999H9v14.155c0 1.254.122 1.758.353 2.22l.048.091c.261.49.645.873 1.134 1.134.458.245.913.383 2.07.4l.24.001 32.032-.001-5.438-5.438a1.5 1.5 0 0 1 2.122-2.122l8 8a1.5 1.5 0 0 1 0 2.122l-8 8a1.5 1.5 0 0 1-2.122-2.122L44.878 42H13.692c-2.675 0-3.645-.278-4.623-.801a5.452 5.452 0 0 1-2.268-2.268C6.278 37.953 6 36.983 6 34.308V15.692c0-2.675.278-3.645.801-4.623A5.452 5.452 0 0 1 9.07 8.801C10.047 8.278 11.017 8 13.692 8h28.616Zm.846 3H12.846c-1.337 0-1.822.14-2.311.4A2.726 2.726 0 0 0 9.4 12.536c-.245.458-.383.913-.4 2.07l-.001.24V18h38v-3.153c0-1.254-.122-1.758-.353-2.22l-.048-.091a2.726 2.726 0 0 0-1.134-1.134c-.489-.262-.974-.401-2.31-.401Z" /></g></symbol>',56,56,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/56/notification_outline_56.js":function(e,n,t){t.d(n,{K:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon56NotificationOutline","notification_outline_56","0 0 56 56",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="notification_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path fill="currentColor" fill-rule="nonzero" d="M28.01 7c8.775 0 15.49 7.355 15.49 16.662l-.01 3.654c.001.77.445 1.564 1.596 2.918.137.16-.005-.003.544.632 2.063 2.387 2.87 3.746 2.87 5.81a6.1 6.1 0 0 1-.062.978 4.853 4.853 0 0 1-.473 1.51C47.045 40.975 45.06 42 42 42h-5.582l-.049.182C35.121 46.62 32.25 49 28 49c-4.307 0-7.198-2.445-8.42-6.999L14 42c-3.15 0-5.153-1.053-6.032-2.92a4.852 4.852 0 0 1-.414-1.442 6.586 6.586 0 0 1-.054-.962c0-2.064.805-3.422 2.864-5.81.548-.634.407-.47.543-.631 1.15-1.356 1.593-2.15 1.593-2.92v-3.657C12.5 14.358 19.23 7 28.01 7Zm5.276 35H22.714c.943 2.753 2.64 4 5.286 4 2.647 0 4.343-1.247 5.286-4Zm-5.277-32C20.95 10 15.5 15.958 15.5 23.658v3.656c0 1.7-.722 2.995-2.305 4.861l-.281.33-.278.322c-1.597 1.85-2.136 2.76-2.136 3.85 0 .52.04.821.183 1.126C11.021 38.522 11.931 39 14 39h28c2.004 0 2.926-.476 3.291-1.195.163-.32.209-.635.209-1.129 0-1.088-.54-1.997-2.14-3.848l-.278-.323a56.214 56.214 0 0 1-.282-.329c-1.586-1.866-2.31-3.16-2.31-4.862l.01-3.656C40.5 15.954 35.064 10 28.01 10Z" /></g></symbol>',56,56,!1,void 0)},"../../node_modules/mitt/dist/mitt.mjs":function(e,n,t){t.d(n,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(n,t){var o=e.get(n);o?o.push(t):e.set(n,[t])},off:function(n,t){var o=e.get(n);o&&(t?o.splice(o.indexOf(t)>>>0,1):e.set(n,[]))},emit:function(n,t){var o=e.get(n);o&&o.slice().map(function(e){e(t)}),(o=e.get("*"))&&o.slice().map(function(e){e(n,t)})}}}}}]);