"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4395],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":function(e,r,t){t.d(r,{_:function(){return o}});function o(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,r,t){t.d(r,{De:function(){return _}});var o,n=t("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=t("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),l=t("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),s=t("../../node_modules/react/index.js"),c=t("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=t("../../node_modules/@swc/helpers/esm/_create_class.js"),u=t("../../node_modules/@swc/helpers/esm/_define_property.js"),a=function(){function e(r){var t=r.content;(0,c._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=function(e){var r=!!document.importNode,t=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return r?document.importNode(t,!0):t}(t)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(r){var t=new e({content:""});return t.node=r,t}}]),e}(),p="http://www.w3.org/2000/svg",f=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,c._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:p,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,r.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var r=this.symbols,t=r.has(e.id);return r.set(e.id,e),!t}},{key:"add",value:function(e){var r=this.push(e);return this.node&&r&&e.mount(this.node),r}},{key:"attach",value:function(e){var r=this;this.node||(this.node=e,this.symbols.forEach(function(r){r.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var t=a.createFromExistingNode(e);r.add(t)}))}},{key:"mount",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),r&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(p,"svg");return Object.entries(this.config.attrs).forEach(function(r){return e.setAttribute(r[0],r[1])}),this.symbols.forEach(function(r){return e.appendChild(r.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var h="__SVG_SPRITE_NODE__";o=new f({attrs:{id:h}});var v=function(){var e=document.getElementById(h);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else o=null;var w=m?s.useLayoutEffect:s.useEffect,g=function(e){var r=e.width,t=void 0===r?0:r,o=e.height,c=void 0===o?0:o,d=e.viewBox,u=e.id,a=e.className,p=e.fill,f=e.getRootRef,m=e.style,h=e.title,v=e.children,w=(0,l._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),g=Math.max(t,c),_=(0,n._)({width:t,height:c},void 0===m?{}:m);return s.createElement("svg",(0,i._)((0,n._)({"aria-hidden":"true",display:"block"},w),{className:["vkuiIcon","vkuiIcon--".concat(g),"vkuiIcon--w-".concat(t),"vkuiIcon--h-".concat(c),"vkuiIcon--".concat(u),void 0===a?"":a].join(" ").trim(),viewBox:d,width:t,height:c,style:_,ref:f}),h&&s.createElement("title",null,h),s.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:p}},v))};function _(e,r,t,l,c,d,u,p){var f=function(){m||(!function(e){o&&o.add(e)}(new a({content:l})),m=!0)},m=!1,h=function(e){var r={};return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";r[t]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(t)),r[t]=!0)}}(e),v=function(e){return w(f,[]),u&&h("Иконка устарела"+(p?". Замените на ".concat(p):"")),s.createElement(g,(0,i._)((0,n._)({},e),{viewBox:t,id:r,width:void 0===e.width||isNaN(e.width)?c:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return v.mountIcon=f,v.displayName=e,v}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css":function(e,r,t){var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(o),i=t("../../node_modules/css-loader/dist/runtime/api.js"),l=t.n(i)()(n());l.push([e.id,".ScrollArrow--JgxNW{background-color:initial;border:0;cursor:pointer;display:flex;justify-content:center;padding:0;transition:opacity .15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:var(--vkui--animation_easing_platform);-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.ScrollArrow--direction-left--jS38A,.ScrollArrow--direction-right--UIq4o{flex-direction:column;height:100%}.ScrollArrow--direction-down--KQFqm,.ScrollArrow--direction-up--LfNde{flex-direction:row;width:100%}.ScrollArrow__icon--gJpr6{align-items:center;background-color:#fff;background-color:var(--vkui--color_background_modal);box-shadow:0 0 2px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.08);box-shadow:var(--vkui--elevation3);color:#99a2ad;color:var(--vkui--color_icon_secondary);display:flex;justify-content:center;position:relative}.ScrollArrow--size-m--c7dtS .ScrollArrow__icon--gJpr6{border-radius:14px;height:28px;width:28px}.ScrollArrow--size-l--f8Hpn .ScrollArrow__icon--gJpr6{border-radius:24px;height:40px;width:40px}.ScrollArrow--direction-left--jS38A{left:0;padding-left:16px;padding-left:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-right--UIq4o{padding-right:16px;padding-right:var(--vkui--size_base_padding_horizontal--regular,16px);right:0}.ScrollArrow--direction-up--LfNde{padding-top:16px;padding-top:var(--vkui--size_base_padding_horizontal--regular,16px);top:0}.ScrollArrow--direction-down--KQFqm{bottom:0;padding-bottom:16px;padding-bottom:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-left--jS38A .ScrollArrow__defaultIcon--k1Jug{transform:rotate(180deg)}.ScrollArrow--direction-up--LfNde .ScrollArrow__defaultIcon--k1Jug{transform:rotate(-90deg)}.ScrollArrow--direction-down--KQFqm .ScrollArrow__defaultIcon--k1Jug{transform:rotate(90deg)}",""]),l.locals={ScrollArrow:"ScrollArrow--JgxNW","ScrollArrow--direction-left":"ScrollArrow--direction-left--jS38A","ScrollArrow--direction-right":"ScrollArrow--direction-right--UIq4o","ScrollArrow--direction-down":"ScrollArrow--direction-down--KQFqm","ScrollArrow--direction-up":"ScrollArrow--direction-up--LfNde",ScrollArrow__icon:"ScrollArrow__icon--gJpr6","ScrollArrow--size-m":"ScrollArrow--size-m--c7dtS","ScrollArrow--size-l":"ScrollArrow--size-l--f8Hpn",ScrollArrow__defaultIcon:"ScrollArrow__defaultIcon--k1Jug"},r.Z=l},"./src/components/Gallery/Gallery.stories.tsx":function(e,r,t){t.r(r),t.d(r,{Playground:function(){return p}});var o,n,i,l=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var s=t("./src/storybook/constants.ts"),c=t("./src/components/Gallery/Gallery.tsx");function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(r){!function(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}(e,r,t[r])})}return e}function u(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}var a={title:"Blocks/Gallery",component:c.r,parameters:d({},s.tW,s.nB)};r.default=a;var p={render:function(e){return(0,l.jsxs)(c.r,u(d({},e),{children:[(0,l.jsx)("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),(0,l.jsx)("img",{alt:"image",src:"https://picsum.photos/1024/640",style:{display:"block"}}),(0,l.jsx)("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]}))}};p.parameters=u(d({},p.parameters),{docs:u(d({},null===(o=p.parameters)||void 0===o?void 0:o.docs),{source:d({originalSource:"{\n  render: args => <Gallery {...args}>\n      <div style={{\n      backgroundColor: 'var(--vkui--color_background_negative)'\n    }} />\n      <img alt=\"image\" src=\"https://picsum.photos/1024/640\" style={{\n      display: 'block'\n    }} />\n      <div style={{\n      backgroundColor: 'var(--vkui--color_background_accent)'\n    }} />\n    </Gallery>\n}"},null===(i=p.parameters)||void 0===i?void 0:null===(n=i.docs)||void 0===n?void 0:n.source)})})},"./src/components/ScrollArrow/ScrollArrow.tsx":function(e,r,t){t.d(r,{Q:function(){return k}});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var n=t("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_24.js"),i=t("../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js"),l=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),s=t("./src/components/RootComponent/RootComponent.tsx"),c=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=t.n(c),u=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),a=t.n(u),p=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),f=t.n(p),m=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),h=t.n(m),v=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=t.n(v),g=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=h(),_.insert=f().bind(null,"head"),_.domAPI=a(),_.insertStyleElement=w(),d()(g.Z,_);var y=g.Z&&g.Z.locals?g.Z.locals:void 0,b={m:y["ScrollArrow--size-m"],l:y["ScrollArrow--size-l"]},S={up:y["ScrollArrow--direction-up"],right:y["ScrollArrow--direction-right"],down:y["ScrollArrow--direction-down"],left:y["ScrollArrow--direction-left"]},j=function(e){var r=e.size,t=n.P;return"m"===r&&(t=i.r),(0,o.jsx)(t,{className:y.ScrollArrow__defaultIcon})},k=function(e){var r=e.size,t=void 0===r?"l":r,n=e.offsetY,i=e.direction,c=e.children,d=void 0===c?(0,o.jsx)(j,{size:t}):c,u=function(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}(e,["size","offsetY","direction","children"]);return(0,o.jsx)(s.U,function(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(r){!function(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}(e,r,t[r])})}return e}({Component:"button",type:"button",baseClassName:(0,l.AK)(y.ScrollArrow,b[t],S[i])},u),{children:(0,o.jsx)("span",{className:y.ScrollArrow__icon,style:n?{top:n}:void 0,children:d})}))};try{k.displayName="ScrollArrow",k.__docgenInfo={description:"Компонент стрелки из HorizontalScroll",displayName:"ScrollArrow",props:{direction:{defaultValue:null,description:"Направление стрелки",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"up"'},{value:'"down"'}]}},size:{defaultValue:{value:"l"},description:"Размер стрелки",name:"size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},offsetY:{defaultValue:null,description:"Смещает иконку кнопки навигации по вертикали.",name:"offsetY",required:!1,type:{name:"string | number"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"]={docgenInfo:k.__docgenInfo,name:"ScrollArrow",path:"src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"})}catch(e){}},"./src/hooks/useAdaptivityHasPointer.ts":function(e,r,t){t.d(r,{K:function(){return s}});var o=t("../../node_modules/react/index.js"),n=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=t("./src/components/AdaptivityProvider/AdaptivityContext.tsx"),l=t("./src/hooks/useIsClient.ts");function s(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],r=o.useContext(i.s).hasPointer;return(0,l.O)(!(e||void 0===r))&&void 0===r?n.RX:r}},"./src/lib/fx.ts":function(e,r,t){function o(e){return .5*(1-Math.cos(Math.PI*e))}function n(e,r){return function(t){var o=3*e,n=3*(r-e)-o;return(1-o-n)*Math.pow(t,3)+n*Math.pow(t,2)+o*t}}t.d(r,{F:function(){return o},_:function(){return n}})},"./src/storybook/constants.ts":function(e,r,t){t.d(r,{R0:function(){return i},nB:function(){return n},tW:function(){return o}});var o={layout:"fullscreen",centered:!0},n={cartesian:{disable:!0}},i={control:{type:"text"}}}}]);