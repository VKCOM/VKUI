"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1739,9495],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,o){function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){n(e,t,o[t])})}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}o.d(t,{De:function(){return O}});var s,l=o("../../node_modules/react/index.js");function a(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,o){return t&&c(e.prototype,t),o&&c(e,o),e}var d=function(){function e(t){var o=t.content;a(this,e),n(this,"isMounted",!1),n(this,"node",void 0),this.node=function(e){var t=!!document.importNode,o=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(o,!0):o}(o)}return u(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var o=new e({content:""});return o.node=t,o}}]),e}(),p="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),n(this,"symbols",new Map),n(this,"config",{attrs:{xmlns:p,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),n(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return u(e,[{key:"push",value:function(e){var t=this.symbols,o=t.has(e.id);return t.set(e.id,e),!o}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var o=d.createFromExistingNode(e);t.add(o)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(p,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),f=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(f){var y="__SVG_SPRITE_NODE__";s=new m({attrs:{id:y}});var h=function(){var e=document.getElementById(y);e?s.attach(e):s.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else s=null;var v=f?l.useLayoutEffect:l.useEffect,g=function(e){var t=e.width,o=void 0===t?0:t,n=e.height,s=void 0===n?0:n,a=e.viewBox,c=e.id,u=e.className,d=e.fill,p=e.getRootRef,m=e.style,f=e.title,y=e.children,h=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),v=r({width:o,height:s},void 0===m?{}:m);return l.createElement("svg",i(r({"aria-hidden":"true",display:"block"},h),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(o,s)),"vkuiIcon--w-".concat(o),"vkuiIcon--h-".concat(s),"vkuiIcon--".concat(c),void 0===u?"":u].join(" ").trim(),viewBox:a,width:o,height:s,style:v,ref:p}),f&&l.createElement("title",null,f),l.createElement("use",{xlinkHref:"#".concat(c),style:{fill:"currentColor",color:d}},y))};function O(e,t,o,n,a,c,u,p){var m=function(){f||(!function(e){s&&s.add(e)}(new d({content:n})),f=!0)},f=!1,y=function(e){var t={};return function(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[o]||(console[n]("[@vkontakte/icons][".concat(e,"] ").concat(o)),t[o]=!0)}}(e),h=function(e){return v(m,[]),u&&y("Иконка устарела"+(p?". Замените на ".concat(p):"")),l.createElement(g,i(r({},e),{viewBox:o,id:t,width:void 0===e.width||isNaN(e.width)?a:+e.width,height:void 0===e.height||isNaN(e.height)?c:+e.height}))};return h.mountIcon=m,h.displayName=e,h}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/CustomSelectOption/CustomSelectOption.module.css":function(e,t,o){var n=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=o.n(n),i=o("../../node_modules/css-loader/dist/runtime/api.js"),s=o.n(i)()(r());s.push([e.id,".CustomSelectOption--H7Jqx{align-items:center;box-sizing:border-box;color:#000;color:var(--vkui--color_text_primary);cursor:pointer;display:flex;padding:8px 12px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.CustomSelectOption--hierarchy--Y6kIc{--vkui_internal--custom_select_option_hierarchy_level:0;padding-left:calc(0 * 32px);padding-left:calc(var(--vkui_internal--custom_select_option_hierarchy_level) * var(--vkui--size_option_hierarchy--regular))}.CustomSelectOption--sizeY-regular--t6DQ2{min-height:44px}@media (max-width:767.9px) and (min-height:415px),(pointer:coarse) and (min-height:415px),(pointer:none) and (min-height:415px){.CustomSelectOption--sizeY-none--oAE43{min-height:44px}}.CustomSelectOption--disabled--LJKGX{cursor:default;opacity:.64;opacity:var(--vkui--opacity_disable_accessibility)}.CustomSelectOption--hover--ozDpg{background-color:rgba(0,16,61,.04);background-color:var(--vkui--color_transparent--hover)}.CustomSelectOption__before--wBJPu{flex-shrink:0;margin-right:7px}.CustomSelectOption__main--kxymH{flex-grow:1;max-width:100%;min-width:0}.CustomSelectOption__children--A5a9A{min-width:0}.CustomSelectOption__after--BeMIk{align-items:center;display:flex;flex-shrink:0;margin-left:8px}.CustomSelectOption__description--QGYGV{color:#818c99;color:var(--vkui--color_text_secondary)}.CustomSelectOption__selectedIcon--TQME_{color:#2688eb;color:var(--vkui--color_icon_accent)}.CustomSelectOption__selectedIcon--TQME_:not(:first-child){margin-left:8px}",""]),s.locals={CustomSelectOption:"CustomSelectOption--H7Jqx","CustomSelectOption--hierarchy":"CustomSelectOption--hierarchy--Y6kIc","CustomSelectOption--sizeY-regular":"CustomSelectOption--sizeY-regular--t6DQ2","CustomSelectOption--sizeY-none":"CustomSelectOption--sizeY-none--oAE43","CustomSelectOption--disabled":"CustomSelectOption--disabled--LJKGX","CustomSelectOption--hover":"CustomSelectOption--hover--ozDpg",CustomSelectOption__before:"CustomSelectOption__before--wBJPu",CustomSelectOption__main:"CustomSelectOption__main--kxymH",CustomSelectOption__children:"CustomSelectOption__children--A5a9A",CustomSelectOption__after:"CustomSelectOption__after--BeMIk",CustomSelectOption__description:"CustomSelectOption__description--QGYGV",CustomSelectOption__selectedIcon:"CustomSelectOption__selectedIcon--TQME_"},t.Z=s},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Footnote/Footnote.module.css":function(e,t,o){var n=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=o.n(n),i=o("../../node_modules/css-loader/dist/runtime/api.js"),s=o.n(i)()(r());s.push([e.id,".Footnote--TsLLT{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),s.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"},t.Z=s},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Paragraph/Paragraph.module.css":function(e,t,o){var n=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=o.n(n),i=o("../../node_modules/css-loader/dist/runtime/api.js"),s=o.n(i)()(r());s.push([e.id,".Paragraph--lkCTy{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_paragraph--font_family--regular);font-size:15px;font-size:var(--vkui--font_paragraph--font_size--regular);font-weight:400;font-weight:var(--vkui--font_paragraph--font_weight--regular);line-height:20px;line-height:var(--vkui--font_paragraph--line_height--regular)}",""]),s.locals={Paragraph:"Paragraph--lkCTy"},t.Z=s},"./src/components/CustomSelectOption/CustomSelectOption.stories.tsx":function(e,t,o){o.r(t),o.d(t,{Playground:function(){return u}});var n,r,i,s=o("./src/storybook/constants.ts");function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}var c={title:"Forms/CustomSelectOption",component:o("./src/components/CustomSelectOption/CustomSelectOption.tsx").x,parameters:l({},s.tW,s.nB)};t.default=c;var u={args:{style:{width:300},children:"Игорь Федоров",description:"Россия, Санкт-Петербург"}};u.parameters=a(l({},u.parameters),{docs:a(l({},null===(n=u.parameters)||void 0===n?void 0:n.docs),{source:l({originalSource:"{\n  args: {\n    style: {\n      width: 300\n    },\n    children: 'Игорь Федоров',\n    description: 'Россия, Санкт-Петербург'\n  }\n}"},null===(i=u.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})})},"./src/components/CustomSelectOption/CustomSelectOption.tsx":function(e,t,o){o.d(t,{x:function(){return P}});var n=o("../../node_modules/react/jsx-runtime.js"),r=o("../../node_modules/react/index.js"),i=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Done","done_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="done_16"><path fill="currentColor" d="M13.743 3.756a.872.872 0 0 1 0 1.237l-7.317 7.25a.88.88 0 0 1-1.242 0L2.257 9.366a.872.872 0 0 1 0-1.237.88.88 0 0 1 1.242 0l2.306 2.261L12.5 3.756a.88.88 0 0 1 1.242 0Z" /></symbol>',16,16,!1,void 0),s=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),l=o("./src/hooks/useAdaptivity.ts"),a=o("./src/lib/adaptivity/constants.ts"),c=o("./src/lib/warnOnce.ts"),u=o("./src/components/Typography/Footnote/Footnote.tsx"),d=o("./src/components/Typography/Paragraph/Paragraph.tsx"),p=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=o.n(p),f=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),y=o.n(f),h=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),v=o.n(h),g=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),O=o.n(g),b=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=o.n(b),S=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/CustomSelectOption/CustomSelectOption.module.css"),j={attributes:{class:"vkui-style"}};j.setAttributes=O(),j.insert=v().bind(null,"head"),j.domAPI=y(),j.insertStyleElement=_(),m()(S.Z,j);var w=S.Z&&S.Z.locals?S.Z.locals:void 0;function C(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function k(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){C(e,t,o[t])})}return e}var x=C({none:w["CustomSelectOption--sizeY-none"]},a.n$.REGULAR,w["CustomSelectOption--sizeY-regular"]);(0,c.O)("CustomSelectOption");var P=function(e){var t=e.children,o=e.hierarchy,c=void 0===o?0:o,p=e.hovered,m=e.selected,f=e.before,y=e.after,h=(e.option,e.description),v=e.disabled,g=e.style,O=e.className,b=e.onClick,_=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["children","hierarchy","hovered","selected","before","after","option","description","disabled","style","className","onClick"]),S=(0,l.g)().sizeY,j=void 0===S?"none":S,C=r.useMemo(function(){return c>0?k({"--vkui_internal--custom_select_option_hierarchy_level":c},g):g},[c,g]);return(0,n.jsxs)(d.n,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}(k({},_),{onClick:v?void 0:b,Component:"div",role:"option",title:"string"==typeof t?t:void 0,"aria-disabled":v,"aria-selected":m,className:(0,s.AK)(w.CustomSelectOption,j!==a.n$.COMPACT&&x[j],p&&!v&&w["CustomSelectOption--hover"],v&&w["CustomSelectOption--disabled"],c>0&&w["CustomSelectOption--hierarchy"],O),style:C,children:[(0,s.p7)(f)&&(0,n.jsx)("div",{className:w.CustomSelectOption__before,children:f}),(0,n.jsxs)("div",{className:w.CustomSelectOption__main,children:[(0,n.jsx)("div",{className:w.CustomSelectOption__children,children:t}),(0,s.p7)(h)&&(0,n.jsx)(u.w,{className:w.CustomSelectOption__description,children:h})]}),(0,n.jsxs)("div",{className:w.CustomSelectOption__after,children:[(0,s.p7)(y)&&(0,n.jsx)("div",{children:y}),m&&(0,n.jsx)(i,{className:w.CustomSelectOption__selectedIcon})]})]}))};try{P.displayName="CustomSelectOption",P.__docgenInfo={description:"",displayName:"CustomSelectOption",props:{option:{defaultValue:null,description:"Вставляет основной контент.\n@deprecated since v6.0.0",name:"option",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"Добавляет описание под основным блоком.",name:"description",required:!1,type:{name:"ReactNode"}},before:{defaultValue:null,description:"Вставляет элемент в начало блока перед основным контентом.\nНапример, можно передать компонент `Avatar`, `Icon<Name>` или другие изображения.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Вставляет элемент в конец блока после основного контента.\nНапример, можно передать компонент `Avatar`, `Icon<Name>` или другие изображения.",name:"after",required:!1,type:{name:"ReactNode"}},hierarchy:{defaultValue:{value:"0"},description:"Позволяет создавать вложенность.",name:"hierarchy",required:!1,type:{name:"number"}},selected:{defaultValue:null,description:"Включает состояние выбранного элемента списка.",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Включает состояние наведения.",name:"hovered",required:!1,type:{name:"boolean"}},focused:{defaultValue:null,description:"Включает состояние фокуса.",name:"focused",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Блокирует весь блок.\n\n> ⚠️  Важно: если CustomSelectOption используется внутри [Select](https://vkcom.github.io/VKUI/#/Select) или [CustomSelect](https://vkcom.github.io/VKUI/#/CustomSelect), то свойство явно должно выставляться только через структуру `options`.\n> Запрещается выставлять `disabled` проп опциям в обход `options`, иначе селект не будет знать об актуальном состоянии\nопции.",name:"disabled",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CustomSelectOption/CustomSelectOption.tsx#CustomSelectOption"]={docgenInfo:P.__docgenInfo,name:"CustomSelectOption",path:"src/components/CustomSelectOption/CustomSelectOption.tsx#CustomSelectOption"})}catch(e){}},"./src/components/Typography/Footnote/Footnote.tsx":function(e,t,o){o.d(t,{w:function(){return O}});var n=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var r=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=o("./src/components/Typography/Typography.tsx"),s=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=o.n(s),a=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=o.n(a),u=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=o.n(u),p=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=o.n(p),f=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=o.n(f),h=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),v={attributes:{class:"vkui-style"}};v.setAttributes=m(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=y(),l()(h.Z,v);var g=h.Z&&h.Z.locals?h.Z.locals:void 0,O=function(e){var t=e.className,o=e.caps,s=e.Component,l=e.normalize,a=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["className","caps","Component","normalize"]);return(0,n.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({Component:void 0===s?"span":s,normalize:void 0===l||l,className:(0,r.AK)(t,g.Footnote,o&&g["Footnote--caps"])},a))};try{O.displayName="Footnote",O.__docgenInfo={description:"",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:O.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}},"./src/components/Typography/Paragraph/Paragraph.tsx":function(e,t,o){o.d(t,{n:function(){return O}});var n=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var r=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=o("./src/components/Typography/Typography.tsx"),s=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=o.n(s),a=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=o.n(a),u=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=o.n(u),p=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=o.n(p),f=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=o.n(f),h=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Paragraph/Paragraph.module.css"),v={attributes:{class:"vkui-style"}};v.setAttributes=m(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=y(),l()(h.Z,v);var g=h.Z&&h.Z.locals?h.Z.locals:void 0,O=function(e){var t=e.className,o=e.Component,s=e.normalize,l=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["className","Component","normalize"]);return(0,n.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({Component:void 0===o?"span":o,normalize:void 0!==s&&s,className:(0,r.AK)(t,g.Paragraph)},l))};try{O.displayName="Paragraph",O.__docgenInfo={description:"",displayName:"Paragraph",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"false"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Paragraph/Paragraph.tsx#Paragraph"]={docgenInfo:O.__docgenInfo,name:"Paragraph",path:"src/components/Typography/Paragraph/Paragraph.tsx#Paragraph"})}catch(e){}},"./src/storybook/constants.ts":function(e,t,o){o.d(t,{R0:function(){return i},nB:function(){return r},tW:function(){return n}});var n={layout:"fullscreen",centered:!0},r={cartesian:{disable:!0}},i={control:{type:"text"}}}}]);