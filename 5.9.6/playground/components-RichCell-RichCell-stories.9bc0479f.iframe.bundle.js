"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8488],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{De:function(){return g}});var c,s=n("../../node_modules/react/index.js");function a(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var d=function(){function e(t){var n=t.content;a(this,e),o(this,"isMounted",!1),o(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return l(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),f="http://www.w3.org/2000/svg",h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),o(this,"symbols",new Map),o(this,"config",{attrs:{xmlns:f,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),o(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return l(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=d.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(f,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),p=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(p){var v="__SVG_SPRITE_NODE__";c=new h({attrs:{id:v}});var m=function(){var e=document.getElementById(v);e?c.attach(e):c.mount(document.body),document.removeEventListener("DOMContentLoaded",m)};document.querySelector("body")?m():document.addEventListener("DOMContentLoaded",m)}else c=null;var b=p?s.useLayoutEffect:s.useEffect,y=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,c=void 0===o?0:o,a=e.viewBox,u=e.id,l=e.className,d=e.fill,f=e.getRootRef,h=e.style,p=e.title,v=e.children,m=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),b=r({width:n,height:c},void 0===h?{}:h);return s.createElement("svg",i(r({"aria-hidden":"true",display:"block"},m),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(n,c)),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(c),"vkuiIcon--".concat(u),void 0===l?"":l].join(" ").trim(),viewBox:a,width:n,height:c,style:b,ref:f}),p&&s.createElement("title",null,p),s.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:d}},v))};function g(e,t,n,o,a,u,l,f){var h=function(){p||(!function(e){c&&c.add(e)}(new d({content:o})),p=!0)},p=!1,v=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),m=function(e){return b(h,[]),l&&v("Иконка устарела"+(f?". Замените на ".concat(f):"")),s.createElement(y,i(r({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?a:+e.width,height:void 0===e.height||isNaN(e.height)?u:+e.height}))};return m.mountIcon=h,m.displayName=e,m}},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(e){e(n)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,n)})}}}},"./src/components/RichCell/RichCell.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Playground:function(){return p}});var o,r,i,c=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var s=n("./src/storybook/VKUIDecorators.tsx"),a=n("./src/storybook/constants.ts"),u=n("./src/components/Avatar/Avatar.tsx"),l=n("./src/components/Group/Group.tsx");function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var h={title:"Blocks/RichCell",component:n("./src/components/RichCell/RichCell.tsx").B,parameters:d({},a.tW,a.nB)};t.default=h;var p={args:{before:(0,c.jsx)(u.q,{size:72,src:"https://sun9-29.userapi.com/c623616/v623616034/1c184/MnbEYczHxSY.jpg?ava=1"}),subhead:"Subhead",text:"Text",caption:"Caption",after:"After",afterCaption:"After Caption",children:"Example"},decorators:[function(e,t){return(0,c.jsx)(l.Z,{children:(0,c.jsx)(e,d({},t.args))})},s.vO,s.Z0]};p.parameters=f(d({},p.parameters),{docs:f(d({},null===(o=p.parameters)||void 0===o?void 0:o.docs),{source:d({originalSource:"{\n  args: {\n    before: <Avatar size={72} src=\"https://sun9-29.userapi.com/c623616/v623616034/1c184/MnbEYczHxSY.jpg?ava=1\" />,\n    subhead: 'Subhead',\n    text: 'Text',\n    caption: 'Caption',\n    after: 'After',\n    afterCaption: 'After Caption',\n    children: 'Example'\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}"},null===(i=p.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})})}}]);