"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2967],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":function(e,t,n){n.d(t,{_:function(){return o}});function o(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){n.d(t,{De:function(){return y}});var o,a=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),s=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),r=n("../../node_modules/react/index.js"),l=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),p=n("../../node_modules/@swc/helpers/esm/_create_class.js"),c=n("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(t){var n=t.content;(0,l._)(this,e),(0,c._)(this,"isMounted",!1),(0,c._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,p._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),d="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,c._)(this,"symbols",new Map),(0,c._)(this,"config",{attrs:{xmlns:d,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,c._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,p._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=u.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(d,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),_=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(_){var v="__SVG_SPRITE_NODE__";o=new m({attrs:{id:v}});var h=function(){var e=document.getElementById(v);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else o=null;var f=_?r.useLayoutEffect:r.useEffect,g=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,l=void 0===o?0:o,p=e.viewBox,c=e.id,u=e.className,d=e.fill,m=e.getRootRef,_=e.style,v=e.title,h=e.children,f=(0,s._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),g=Math.max(n,l),y=(0,a._)({width:n,height:l},void 0===_?{}:_);return r.createElement("svg",(0,i._)((0,a._)({"aria-hidden":"true",display:"block"},f),{className:["vkuiIcon","vkuiIcon--".concat(g),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(c),void 0===u?"":u].join(" ").trim(),viewBox:p,width:n,height:l,style:y,ref:m}),v&&r.createElement("title",null,v),r.createElement("use",{xlinkHref:"#".concat(c),style:{fill:"currentColor",color:d}},h))};function y(e,t,n,s,l,p,c,d){var m=function(){_||(!function(e){o&&o.add(e)}(new u({content:s})),_=!0)},_=!1,v=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),h=function(e){return f(m,[]),c&&v("Иконка устарела"+(d?". Замените на ".concat(d):"")),r.createElement(g,(0,i._)((0,a._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?l:+e.width,height:void 0===e.height||isNaN(e.height)?p:+e.height}))};return h.mountIcon=m,h.displayName=e,h}},"../../node_modules/@vkontakte/icons/dist/es6/12/circle_12.js":function(e,t,n){n.d(t,{m:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/12/online_mobile_12.js":function(e,t,n){n.d(t,{I:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98Zm.007 3H2.004a.502.502 0 0 0-.503.502v4.995c0 .278.225.503.503.503h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/HorizontalCell/HorizontalCell.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),s=n.n(i)()(a());s.push([e.id,'.HorizontalCell--lF45T{display:flex}.HorizontalCell__image--C5Lto{display:flex;justify-content:center}.HorizontalCell__body--U9H6W{font-family:inherit;text-decoration:none}.HorizontalCell--lF45T .HorizontalCell__body--U9H6W{border-radius:8px;border-radius:var(--vkui--size_border_radius--regular)}.HorizontalCell__content--WYvRt{color:#000;color:var(--vkui--color_text_primary);text-overflow:ellipsis;word-break:break-all}.HorizontalCell__subtitle--M6MdM{color:#818c99;color:var(--vkui--color_text_secondary)}.HorizontalCell__content--WYvRt .HorizontalCell__subtitle--M6MdM{margin-top:2px}.HorizontalCell--size-s--bs9U4{--vkui_internal--side_cell_gap:calc(var(--vkui--size_base_padding_horizontal--regular) - var(--vkui--spacing_size_m));--vkui_internal--side_cell_width:calc(72px + var(--vkui_internal--side_cell_gap));max-width:72px}.HorizontalCell__image--C5Lto{padding:4px 6px;padding:4px var(--vkui--spacing_size_s)}.HorizontalCell__content--WYvRt{padding:2px 6px 8px;text-align:left}.HorizontalCell--size-s--bs9U4 .HorizontalCell__image--C5Lto{padding:4px 8px;padding:4px var(--vkui--spacing_size_m)}.HorizontalCell--size-s--bs9U4 .HorizontalCell__content--WYvRt{padding:2px 4px 8px;text-align:center}.HorizontalCell--size-m--iJtxk{--vkui_internal--side_cell_width:calc(100px + var(--vkui_internal--side_cell_gap));width:100px}.HorizontalCell--size-l--NzOUv{width:auto}.HorizontalCell--lF45T:first-child:before,.HorizontalCell--lF45T:last-child:after{content:"";min-width:calc(16px - 6px);min-width:var(--vkui_internal--side_cell_gap)}.HorizontalCell--size-s--bs9U4:first-child,.HorizontalCell--size-s--bs9U4:last-child{max-width:var(--vkui_internal--side_cell_width)}.HorizontalCell--size-m--iJtxk:first-child,.HorizontalCell--size-m--iJtxk:last-child{width:var(--vkui_internal--side_cell_width)}',""]),s.locals={HorizontalCell:"HorizontalCell--lF45T",HorizontalCell__image:"HorizontalCell__image--C5Lto",HorizontalCell__body:"HorizontalCell__body--U9H6W",HorizontalCell__content:"HorizontalCell__content--WYvRt",HorizontalCell__subtitle:"HorizontalCell__subtitle--M6MdM","HorizontalCell--size-s":"HorizontalCell--size-s--bs9U4","HorizontalCell--size-m":"HorizontalCell--size-m--iJtxk","HorizontalCell--size-l":"HorizontalCell--size-l--NzOUv"},t.Z=s},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Caption/Caption.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(o),i=n("../../node_modules/css-loader/dist/runtime/api.js"),s=n.n(i)()(a());s.push([e.id,".Caption--caps--hL0Xn{text-transform:uppercase}.Caption--level-1--rEY2G{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_caption1--font_family--regular);font-size:12px;font-size:var(--vkui--font_caption1--font_size--regular);font-weight:400;font-weight:var(--vkui--font_caption1--font_weight--regular);line-height:14px;line-height:var(--vkui--font_caption1--line_height--regular)}.Caption--level-1--rEY2G.Caption--caps--hL0Xn{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_caption1_caps--font_family--regular);font-size:12px;font-size:var(--vkui--font_caption1_caps--font_size--regular);font-weight:600;font-weight:var(--vkui--font_caption1_caps--font_weight--regular);line-height:14px;line-height:var(--vkui--font_caption1_caps--line_height--regular)}.Caption--level-2--HNUmL{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_caption2--font_family--regular);font-size:11px;font-size:var(--vkui--font_caption2--font_size--regular);font-weight:400;font-weight:var(--vkui--font_caption2--font_weight--regular);line-height:14px;line-height:var(--vkui--font_caption2--line_height--regular)}.Caption--level-2--HNUmL.Caption--caps--hL0Xn{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_caption2_caps--font_family--regular);font-size:11px;font-size:var(--vkui--font_caption2_caps--font_size--regular);font-weight:600;font-weight:var(--vkui--font_caption2_caps--font_weight--regular);line-height:14px;line-height:var(--vkui--font_caption2_caps--line_height--regular)}.Caption--level-3--xTTp4{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_caption3--font_family--regular);font-size:9px;font-size:var(--vkui--font_caption3--font_size--regular);font-weight:400;font-weight:var(--vkui--font_caption3--font_weight--regular);line-height:12px;line-height:var(--vkui--font_caption3--line_height--regular)}.Caption--level-3--xTTp4.Caption--caps--hL0Xn{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_caption3_caps--font_family--regular);font-size:9px;font-size:var(--vkui--font_caption3_caps--font_size--regular);font-weight:600;font-weight:var(--vkui--font_caption3_caps--font_weight--regular);line-height:12px;line-height:var(--vkui--font_caption3_caps--line_height--regular)}",""]),s.locals={"Caption--caps":"Caption--caps--hL0Xn","Caption--level-1":"Caption--level-1--rEY2G","Caption--level-2":"Caption--level-2--HNUmL","Caption--level-3":"Caption--level-3--xTTp4"},t.Z=s},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(e){e(n)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,n)})}}}},"./src/components/HorizontalCell/HorizontalCell.tsx":function(e,t,n){n.d(t,{u:function(){return H}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var a=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/components/Avatar/Avatar.tsx"),s=n("./src/components/Tappable/Tappable.tsx"),r=n("./src/components/Typography/Caption/Caption.tsx"),l=n("./src/components/Typography/Footnote/Footnote.tsx"),p=n("./src/components/Typography/Subhead/Subhead.tsx"),c=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=n.n(c),d=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),m=n.n(d),_=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),v=n.n(_),h=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=n.n(h),g=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=n.n(g),j=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/HorizontalCell/HorizontalCell.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=f(),b.insert=v().bind(null,"head"),b.domAPI=m(),b.insertStyleElement=y(),u()(j.Z,b);var z=j.Z&&j.Z.locals?j.Z.locals:void 0;function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function k(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x={s:z["HorizontalCell--size-s"],m:z["HorizontalCell--size-m"],l:z["HorizontalCell--size-l"]},O=function(e){var t=e.size,n=e.children,a=k(e,["size","children"]);return"s"===t?(0,o.jsx)(r.Y,w(C({},a),{children:n})):(0,o.jsx)(p.v,w(C({},a),{children:n}))},H=function(e){var t=e.className,n=e.header,r=e.style,p=e.subtitle,c=e.size,u=void 0===c?"s":c,d=e.children,m=void 0===d?(0,o.jsx)(i.q,{size:56}):d,_=e.getRootRef,v=e.getRef,h=e.extraSubtitle,f=k(e,["className","header","style","subtitle","size","children","getRootRef","getRef","extraSubtitle"]);return(0,o.jsx)("div",{ref:_,style:r,className:(0,a.AK)(z.HorizontalCell,x[u],t),children:(0,o.jsxs)(s.KR,w(C({className:z.HorizontalCell__body,getRootRef:v},f),{children:[(0,a.p7)(m)&&(0,o.jsx)("div",{className:z.HorizontalCell__image,children:m}),(n||p||h)&&(0,o.jsxs)("div",{className:z.HorizontalCell__content,children:[(0,a.p7)(n)&&(0,o.jsx)(O,{size:u,children:n}),(0,a.p7)(p)&&(0,o.jsx)(l.w,{className:z.HorizontalCell__subtitle,children:p}),(0,a.p7)(h)&&(0,o.jsx)(l.w,{className:z.HorizontalCell__subtitle,children:h})]})]}))})};try{H.displayName="HorizontalCell",H.__docgenInfo={description:"",displayName:"HorizontalCell",props:{size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},header:{defaultValue:null,description:"Заголовок",name:"header",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Дополнительная строка текста под `children`.",name:"subtitle",required:!1,type:{name:"ReactNode"}},extraSubtitle:{defaultValue:null,description:"Дополнительная строка текста под `children` и `subtitle`.",name:"extraSubtitle",required:!1,type:{name:"ReactNode"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HorizontalCell/HorizontalCell.tsx#HorizontalCell"]={docgenInfo:H.__docgenInfo,name:"HorizontalCell",path:"src/components/HorizontalCell/HorizontalCell.tsx#HorizontalCell"})}catch(e){}},"./src/components/Typography/Caption/Caption.tsx":function(e,t,n){n.d(t,{Y:function(){return j}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var a=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/components/Typography/Typography.tsx"),s=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=n.n(s),l=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),p=n.n(l),c=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),u=n.n(c),d=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=n.n(d),_=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=n.n(_),h=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Caption/Caption.module.css"),f={attributes:{class:"vkui-style"}};f.setAttributes=m(),f.insert=u().bind(null,"head"),f.domAPI=p(),f.insertStyleElement=v(),r()(h.Z,f);var g=h.Z&&h.Z.locals?h.Z.locals:void 0,y={1:g["Caption--level-1"],2:g["Caption--level-2"],3:g["Caption--level-3"]},j=function(e){var t=e.className,n=e.level,s=e.caps,r=e.Component,l=e.normalize,p=function(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["className","level","caps","Component","normalize"]);return(0,o.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===r?"span":r,normalize:void 0===l||l,className:(0,a.AK)(t,s&&g["Caption--caps"],y[void 0===n?"1":n])},p))};try{j.displayName="Caption",j.__docgenInfo={description:"Используется для мелких подписей.",displayName:"Caption",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Caption/Caption.tsx#Caption"]={docgenInfo:j.__docgenInfo,name:"Caption",path:"src/components/Typography/Caption/Caption.tsx#Caption"})}catch(e){}},"./src/testing/mock.ts":function(e,t,n){n.d(t,{cA:function(){return c},E$:function(){return r},XF:function(){return a},bt:function(){return l},ow:function(){return p}});var o=[{id:3520,first_name:"Вадим",last_name:"Дорохов",screen_name:"dorokhov",photo_100:"https://sun9-60.userapi.com/c855032/v855032963/15d4f9/XOQY9NSlP5A.jpg?ava=1",photo_200:"https://sun9-32.userapi.com/c855032/v855032963/15d4f8/YWT1CBkuDUM.jpg?ava=1"},{id:83492458,first_name:"Влад",last_name:"Анесов",screen_name:"va",photo_100:"https://sun9-44.userapi.com/c858128/v858128761/67fe1/nAnraWnpHK8.jpg?ava=1",photo_200:"https://sun9-69.userapi.com/c858128/v858128761/67fe0/itnUs52j974.jpg?ava=1"},{id:79153907,first_name:"Александр",last_name:"Колобов",screen_name:"iamaleko",photo_100:"https://sun9-44.userapi.com/c848528/v848528590/1e57b2/JA3HmfitPZU.jpg?ava=1",photo_200:"https://sun9-55.userapi.com/c848528/v848528590/1e57b1/rwQw-askMow.jpg?ava=1"},{id:403563269,first_name:"Artur",last_name:"Stambultsian",screen_name:"arthurstam",photo_100:"https://sun9-61.userapi.com/O-2f7t0yecmx38WXoF37RkhkJTG2rcjL4Yq88w/J39s0u1f90c.jpg?ava=1",photo_200:"https://sun9-62.userapi.com/z4_z-ls5mVpMw1edyggl4gz6RoItDjH0pGxbyg/FII3YzuW73Y.jpg?ava=1"},{id:1122996,first_name:"Илья",last_name:"Таратухин",screen_name:"darkilfa",photo_100:"https://sun9-19.userapi.com/yGUuBADgtYRKU5yN_Vb3UkZL6PEaY3OWTBCEeA/bGpg5AL0WiM.jpg?ava=1",photo_200:"https://sun9-57.userapi.com/K2opK6HGnGq1eQ292zUP4q4IAjjdxOcixJxbBw/VbOeiRIGEnI.jpg?ava=1"},{id:26277006,first_name:"Роман",last_name:"Захаров",screen_name:"rom",photo_100:"https://sun9-21.userapi.com/c854428/v854428614/479c6/jSqse8LyfS8.jpg?ava=1",photo_200:"https://sun9-31.userapi.com/c854428/v854428614/479c5/tQyKztSqZfU.jpg?ava=1"},{id:818250,first_name:"Миша",last_name:"Андриевский",screen_name:"m.andrievskiy",photo_100:"https://sun9-52.userapi.com/c846017/v846017974/114170/WFIMAZh8H1o.jpg?ava=1",photo_200:"https://sun9-21.userapi.com/c846017/v846017974/11416f/4geIRdA2GkQ.jpg?ava=1"},{id:37700627,first_name:"Тарас",last_name:"Иванов",screen_name:"ti",photo_100:"https://sun9-16.userapi.com/c857724/v857724589/9c7ad/01M-8UlcNoo.jpg?ava=1",photo_200:"https://sun9-29.userapi.com/c857724/v857724589/9c7ac/_OQ6lzK7PSc.jpg?ava=1"},{id:92093600,first_name:"Илья",last_name:"Гришин",screen_name:"ilyagrshn",photo_100:"https://sun9-34.userapi.com/c857132/v857132690/49628/r4wBoWw0mJI.jpg?ava=1",photo_200:"https://sun9-14.userapi.com/c857132/v857132690/49627/MCT6QoygisY.jpg?ava=1"},{id:274123,first_name:"Илья",last_name:"Пеняев",screen_name:"ia",photo_100:"https://sun9-53.userapi.com/c857620/v857620811/76951/_1bkgzBj5M0.jpg?ava=1",photo_200:"https://sun9-13.userapi.com/c857620/v857620811/76950/mcdVNs_siHk.jpg?ava=1"},{id:50875477,first_name:"Иван",last_name:"Барышев",screen_name:"wayshev",photo_100:"https://sun9-4.userapi.com/oDjqp-AYVog1kuee5JOjzP9fMOvzCWCGBY0YHg/WW88aTocBxA.jpg?ava=1",photo_200:"https://sun9-5.userapi.com/-NguPXLiF8tpwvEwBjtPgz89ads9fadFWCLxYw/o0xdilzOClE.jpg?ava=1"},{id:54986442,first_name:"Иван",last_name:"Гусев",screen_name:"girl",photo_100:"https://sun9-9.userapi.com/U_neC4C0b0k2TacpGigQf_4cbGKN7Z7tj4QzHQ/WCj1fIGbtZ8.jpg?ava=1",photo_200:"https://sun9-13.userapi.com/EdYJ0DLky80jbtItUYw6BZliBw9KDNxxPUjuSA/vdEHQgCkWdI.jpg?ava=1"},{id:690765,first_name:"Макс",last_name:"Павлов",screen_name:"mp",photo_100:"https://sun9-5.userapi.com/c852232/v852232119/15fdda/0Ghe0f06u3s.jpg?ava=1",photo_200:"https://sun9-55.userapi.com/c852232/v852232119/15fdd9/hXPvs--xpBE.jpg?ava=1"},{id:494075,first_name:"Антон",last_name:"Циварев",screen_name:"tsivarev",photo_100:"https://sun9-47.userapi.com/c830708/v830708352/1c50b4/Nl8LPuMRj5k.jpg?ava=1",photo_200:"https://sun9-71.userapi.com/c830708/v830708352/1c50b3/W-ZDnTalKLE.jpg?ava=1"},{id:168850,first_name:"Юля",last_name:"Брук",screen_name:"yb",photo_100:"https://sun9-9.userapi.com/c850032/v850032014/5a495/rZnSh_81UgY.jpg?ava=1",photo_200:"https://sun9-44.userapi.com/c850032/v850032014/5a494/4xtk-O2o1Z4.jpg?ava=1"},{id:6492,first_name:"Андрей",last_name:"Рогозов",screen_name:"andrew",photo_100:"https://sun9-27.userapi.com/c837536/v837536492/2f070/HT6-ucTq-cQ.jpg?ava=1",photo_200:"https://sun9-41.userapi.com/c837536/v837536492/2f06f/O0YuCLtzlDg.jpg?ava=1"},{id:53448,first_name:"Андрей",last_name:"Новосельский",screen_name:"andrewnovoselsky",photo_100:"https://sun9-44.userapi.com/c848628/v848628445/16041a/6K1dtEwQl5g.jpg?ava=1",photo_200:"https://sun9-57.userapi.com/c848628/v848628445/160419/pT8x_uOMMlc.jpg?ava=1"},{id:331639485,first_name:"Igor",last_name:"Fedorov",screen_name:"xyz",photo_100:"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1",photo_200:"https://sun9-50.userapi.com/mN6GLkHt4Ul_AoWy-qGsHyOGrq3zdYboHvo8Cg/T87c3LJBVuk.jpg?ava=1"},{id:52826694,first_name:"Михаил",last_name:"Лихачёв",screen_name:"lihachyov",photo_100:"https://sun9-49.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1",photo_200:"https://sun9-28.userapi.com/c850332/v850332555/11502f/rVlRIjlWkWw.jpg?ava=1"},{id:2604586,first_name:"Тимофей",last_name:"Чаптыков",screen_name:"tc",photo_100:"https://sun9-60.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1",photo_200:"https://sun9-19.userapi.com/c851416/v851416327/be83f/zS1b6d0GLvs.jpg?ava=1"},{id:163093483,first_name:"Алексей",last_name:"Мазелюк",screen_name:"mm",photo_100:"https://sun9-60.userapi.com/c855124/v855124003/167f36/TzgXYX1Izqk.jpg?ava=1",photo_200:"https://sun9-15.userapi.com/c855124/v855124003/167f35/lbGw8DnDPbs.jpg?ava=1"},{id:61351294,first_name:"Евгений",last_name:"Котляров",screen_name:"eee",photo_100:"https://sun9-48.userapi.com/MTiajl5N6b467FGSPppTxnMvk3DSjWVaImgCjw/n4ajtifm__g.jpg?ava=1",photo_200:"https://sun9-21.userapi.com/Qs3nvx49pimar_UID28JXOIcVEA_4Yx3Itd8CQ/ORdcJxdkow8.jpg?ava=1"},{id:19039187,first_name:"Иван",last_name:"Недзвецкий",screen_name:"in",photo_100:"https://sun9-71.userapi.com/S6sD78Ezdj0a63Tm3wU2gzS1sq-bP42TwKLYGg/BRRvQaRNJPE.jpg?ava=1",photo_200:"https://sun9-32.userapi.com/SXlqIOOYqVZyfmcOE66dnWvK-dguVsLYXbw1KQ/c3lwSlf75qM.jpg?ava=1"},{id:3538429,first_name:"Иван",last_name:"Тимофеев",screen_name:"ox",photo_100:"https://sun9-11.userapi.com/c858420/v858420276/5e9b7/WodDi1aEvFQ.jpg?ava=1",photo_200:"https://sun9-8.userapi.com/c858420/v858420276/5e9b6/QrbYATzAdQc.jpg?ava=1"},{id:84115983,first_name:"Настя",last_name:"Манзюк",screen_name:"manzuk",photo_100:"https://sun9-72.userapi.com/c857628/v857628986/22ddf/6gkgoYPj-Ms.jpg?ava=1",photo_200:"https://sun9-11.userapi.com/c857628/v857628986/22dde/4AiaIut-n5g.jpg?ava=1"},{id:82613762,first_name:"Jean",last_name:"Isahakyan",screen_name:"ji",photo_100:"https://sun9-27.userapi.com/zmcGxRfZe3fdjIdMlq0OgjYGfIdYGOF67YfiLQ/TJi2eetIwN0.jpg?ava=1",photo_200:"https://sun9-14.userapi.com/l5q9tXplH5akRTPKfhqkJynKdCd6DcHImS9z3g/kWUJAOv51o0.jpg?ava=1"},{id:66748,first_name:"Олег",last_name:"Илларионов",screen_name:"illarionov",photo_100:"https://sun9-18.userapi.com/c841629/v841629884/290aa/TUPsSYQXzKg.jpg?ava=1",photo_200:"https://sun9-36.userapi.com/c841629/v841629884/290a9/xwmA1U54rNw.jpg?ava=1"},{id:34,first_name:"Татьяна",last_name:"Плуталова",screen_name:"id34",photo_100:"https://sun9-70.userapi.com/c636327/v636327034/2be84/TYzZpZ8BL0k.jpg?ava=1",photo_200:"https://sun9-12.userapi.com/c636327/v636327034/2be83/n8JO0z5V8FA.jpg?ava=1"},{id:39840293,first_name:"Евгений",last_name:"Авсиевич",screen_name:"evg",photo_100:"https://sun9-19.userapi.com/c846020/v846020298/1d0e79/R41LGoPtIK0.jpg?ava=1",photo_200:"https://sun9-67.userapi.com/c846020/v846020298/1d0e78/Nte_l9WWJTU.jpg?ava=1"},{id:2050,first_name:"Катя",last_name:"Лебедева",screen_name:"me",photo_100:"https://sun9-45.userapi.com/c857436/v857436004/f3f2c/eQ-xaP73964.jpg?ava=1",photo_200:"https://sun9-55.userapi.com/c857436/v857436004/f3f2b/81R9C6HQ7GI.jpg?ava=1"},{id:1986125,first_name:"Настя",last_name:"Семенюк",screen_name:"ya",photo_100:"https://sun9-13.userapi.com/c855036/v855036032/16d259/tJwjpfzoPRc.jpg?ava=1",photo_200:"https://sun9-24.userapi.com/c855036/v855036032/16d258/RiAL8XjFGqs.jpg?ava=1"},{id:13329312,first_name:"Павел",last_name:"Князев",screen_name:"apvel",photo_100:"https://sun9-52.userapi.com/c844521/v844521213/83b9f/uYAH_OJZisM.jpg?ava=1",photo_200:"https://sun9-9.userapi.com/c844521/v844521213/83b9e/eQ-X89V6J3k.jpg?ava=1"},{id:242670751,first_name:"Кирилл",last_name:"Аверьянов",screen_name:"kir",photo_100:"https://sun9-68.userapi.com/c849032/v849032673/112633/pUPD0KXXWGc.jpg?ava=1",photo_200:"https://sun9-53.userapi.com/c849032/v849032673/112632/cVO914r-OsU.jpg?ava=1"},{id:151477469,first_name:"Коля",last_name:"Борисов",screen_name:"casper6479",photo_100:"https://sun9-12.userapi.com/c850128/v850128006/86340/1IV4iSrVWQY.jpg?ava=1",photo_200:"https://sun9-2.userapi.com/c850128/v850128006/8633f/yRgM9VtYjBA.jpg?ava=1"},{id:152199439,first_name:"Виталя",last_name:"Волынский",screen_name:"vitalyavolyn",photo_100:"https://sun9-55.userapi.com/c848416/v848416376/1b82ab/K5YJ8Htn3as.jpg?ava=1",photo_200:"https://sun9-56.userapi.com/c848416/v848416376/1b82aa/IhAknTNCFjE.jpg?ava=1"}];function a(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function i(e){return e[Math.floor(Math.random()*e.length)]}var s={app_shorm_online:{photo_100:"https://pp.userapi.com/c844616/v844616889/9ec4a/9Fk-RI7uchQ.jpg"},app_shashki:{photo_100:"https://pp.userapi.com/c848536/v848536020/18242/ZLjAYM59EqY.jpg"},app_vega_mix:{photo_100:"https://pp.userapi.com/c849028/v849028348/1b353/Na_GRlqgRNM.jpg"},app_zagadki:{photo_100:"https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg",photo_200:"https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg"},app_promokot:{photo_100:"https://sun9-54.userapi.com/c850536/v850536134/15096d/6806J7q6YwM.jpg"},app_split_bill:{photo_100:"https://sun9-20.userapi.com/c857416/v857416681/fc6d0/06XQvs4SyiE.jpg"},app_emails:{photo_100:"https://sun9-50.userapi.com/c850536/v850536397/129313/qdVJ7A7xd70.jpg"},app_lyrics:{photo_100:"https://sun9-41.userapi.com/Zf2HluZJZDYjTbxhnSfeYnHtttBYsYbdjJ3QJQ/aDcJQrVVnbQ.jpg"},audio_arctic_monkeys:{photo_100:"https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg"},audio_leto_zveri:{photo_100:"https://pp.userapi.com/c845220/v845220642/7cacc/XzhH5b7FSKY.jpg"},audio_depeche_mode:{photo_100:"https://pp.userapi.com/c837628/v837628453/39175/4JRjMaFvCrw.jpg"},audio_linkin_park:{photo_100:"https://pp.userapi.com/c846120/v846120617/1ff005/WmCcgV5CozY.jpg"},audio_face:{photo_100:"https://pp.userapi.com/c845218/v845218888/182681/Al6XrhpJYn0.jpg"},chat_basketball:{photo_100:"https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg",photo_200:"https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg"}};function r(e,t){var n;return(null==e?void 0:e.startsWith("user_"))?(n=o.find(function(t){return"user_"+t.screen_name===e}))||(n=i(o)):(e&&s.hasOwnProperty(e)||(e=function(e){var t=Object.keys(e);return t[t.length*Math.random()<<0]}(s)),n=s[e]),200===t&&n.photo_200||n.photo_100}function l(){var e=Object.assign({},i(o));return e.id=a(1,2e9),function(e){return function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({},e),{name:"".concat(e.first_name," ").concat(e.last_name),initials:"".concat(e.first_name[0]).concat(e.last_name[0])})}(e)}function p(e){for(var t=[],n={},o=0;o<e;o++){var a=l();if(n[a.name])for(var i=0;i<5&&n[(a=l()).name];i++);t.push(a),n[a.name]=!0}return t}var c=[{label:"Санкт-Петербург",description:"Россия",value:"0"},{label:"Москва",description:"Россия",value:"1"},{label:"Новосибирск",description:"Россия",disabled:!0,value:"2"},{label:"Нью-Йорк",description:"США",value:"3"},{label:"Чикаго",description:"США",value:"4"}]}}]);