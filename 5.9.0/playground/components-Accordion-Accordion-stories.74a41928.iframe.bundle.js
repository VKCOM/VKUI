"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8313],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,n,t){t.d(n,{De:function(){return b}});var o,r=t("../../node_modules/@swc/helpers/esm/_object_spread.js");function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var a=t("../../node_modules/react/index.js"),l=t("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=t("../../node_modules/@swc/helpers/esm/_create_class.js"),u=t("../../node_modules/@swc/helpers/esm/_define_property.js"),c=function(){function e(n){var t=n.content;(0,l._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=function(e){var n=!!document.importNode,t=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return n?document.importNode(t,!0):t}(t)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(n){var t=new e({content:""});return t.node=n,t}}]),e}(),s="http://www.w3.org/2000/svg",m=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:s,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,n.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var n=this.symbols,t=n.has(e.id);return n.set(e.id,e),!t}},{key:"add",value:function(e){var n=this.push(e);return this.node&&n&&e.mount(this.node),n}},{key:"attach",value:function(e){var n=this;this.node||(this.node=e,this.symbols.forEach(function(n){n.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var t=c.createFromExistingNode(e);n.add(t)}))}},{key:"mount",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),n&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(s,"svg");return Object.entries(this.config.attrs).forEach(function(n){return e.setAttribute(n[0],n[1])}),this.symbols.forEach(function(n){return e.appendChild(n.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),p=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(p){var f="__SVG_SPRITE_NODE__";o=new m({attrs:{id:f}});var v=function(){var e=document.getElementById(f);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else o=null;var y=p?a.useLayoutEffect:a.useEffect,h=function(e){var n=e.width,t=void 0===n?0:n,o=e.height,l=void 0===o?0:o,d=e.viewBox,u=e.id,c=e.className,s=e.fill,m=e.getRootRef,p=e.style,f=e.title,v=e.children,y=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),h=(0,r._)({width:t,height:l},void 0===p?{}:p);return a.createElement("svg",i((0,r._)({"aria-hidden":"true",display:"block"},y),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(t,l)),"vkuiIcon--w-".concat(t),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(u),void 0===c?"":c].join(" ").trim(),viewBox:d,width:t,height:l,style:h,ref:m}),f&&a.createElement("title",null,f),a.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:s}},v))};function b(e,n,t,l,d,u,s,m){var p=function(){f||(!function(e){o&&o.add(e)}(new c({content:l})),f=!0)},f=!1,v=function(e){var n={};return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";n[t]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(t)),n[t]=!0)}}(e),b=function(e){return y(p,[]),s&&v("Иконка устарела"+(m?". Замените на ".concat(m):"")),a.createElement(h,i((0,r._)({},e),{viewBox:t,id:n,width:void 0===e.width||isNaN(e.width)?d:+e.width,height:void 0===e.height||isNaN(e.height)?u:+e.height}))};return b.mountIcon=p,b.displayName=e,b}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":function(e,n,t){t.d(n,{r:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":function(e,n,t){t.d(n,{o:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_down_24.js":function(e,n,t){t.d(n,{K:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronDown","chevron_down_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_down_24"><path d="M12 13.698 6.64 9.232a1 1 0 0 0-1.28 1.536l6 5a1 1 0 0 0 1.28 0l6-5a1 1 0 1 0-1.28-1.536L12 13.698Z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_up_24.js":function(e,n,t){t.d(n,{E:function(){return o}});var o=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronUp","chevron_up_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_up_24"><path d="m12 10.302-5.36 4.466a1 1 0 1 1-1.28-1.536l6-5a1 1 0 0 1 1.28 0l6 5a1 1 0 1 1-1.28 1.536L12 10.302Z" /></symbol>',24,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Accordion/Accordion.module.css":function(e,n,t){var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),i=t("../../node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(r());a.push([e.id,".AccordionSummary--xh6ut::-webkit-details-marker{display:none}.AccordionSummary__icon--J1BKN{color:#99a2ad;color:var(--vkui--color_icon_secondary)}.Accordion--vS9CC:not([open])>summary .AccordionSummary__icon--collapse--qQDLV,.Accordion--vS9CC[open]>summary .AccordionSummary__icon--expand--OEa6C{display:none}",""]),a.locals={AccordionSummary:"AccordionSummary--xh6ut",AccordionSummary__icon:"AccordionSummary__icon--J1BKN",Accordion:"Accordion--vS9CC","AccordionSummary__icon--collapse":"AccordionSummary__icon--collapse--qQDLV","AccordionSummary__icon--expand":"AccordionSummary__icon--expand--OEa6C"},n.Z=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Div/Div.module.css":function(e,n,t){var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),i=t("../../node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(r());a.push([e.id,".Div--jWBVN{padding:12px 16px;padding:var(--vkui--size_base_padding_vertical--regular) var(--vkui--size_base_padding_horizontal--regular)}",""]),a.locals={Div:"Div--jWBVN"},n.Z=a},"../../node_modules/mitt/dist/mitt.mjs":function(e,n,t){t.d(n,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(n,t){var o=e.get(n);o?o.push(t):e.set(n,[t])},off:function(n,t){var o=e.get(n);o&&(t?o.splice(o.indexOf(t)>>>0,1):e.set(n,[]))},emit:function(n,t){var o=e.get(n);o&&o.slice().map(function(e){e(t)}),(o=e.get("*"))&&o.slice().map(function(e){e(n,t)})}}}},"./src/components/Accordion/Accordion.stories.tsx":function(e,n,t){t.r(n),t.d(n,{Playground:function(){return N},default:function(){return C}});var o,r,i,a=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var l=t("./src/storybook/constants.ts"),d=t("./src/components/Div/Div.tsx"),u=t("./src/components/Group/Group.tsx"),c=t("./src/components/RootComponent/RootComponent.tsx"),s=t("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_down_24.js"),m=t("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_up_24.js"),p=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),f=t("./src/components/SimpleCell/SimpleCell.tsx"),v=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=t.n(v),h=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),b=t.n(h),_=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),g=t.n(_),S=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),j=t.n(S),O=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=t.n(O),A=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Accordion/Accordion.module.css"),E={attributes:{class:"vkui-style"}};E.setAttributes=j(),E.insert=g().bind(null,"head"),E.domAPI=b(),E.insertStyleElement=w(),y()(A.Z,E);var x=A.Z&&A.Z.locals?A.Z.locals:void 0,V=function(e){var n=e.className,t=e.after,o=e.before,r=e.ExpandIcon,i=void 0===r?s.K:r,l=e.CollapseIcon,d=void 0===l?m.E:l,u=e.iconPosition,c=void 0===u?"after":u,v=e.children,y=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["className","after","before","ExpandIcon","CollapseIcon","iconPosition","children"]),h=(0,a.jsxs)("span",{className:"vkuiIcon",children:[(0,a.jsx)(i,{className:(0,p.AK)(x.AccordionSummary__icon,x["AccordionSummary__icon--expand"])}),(0,a.jsx)(d,{className:(0,p.AK)(x.AccordionSummary__icon,x["AccordionSummary__icon--collapse"])})]});return(0,a.jsx)(f.q,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({className:(0,p.AK)(x.AccordionSummary,n),Component:"summary",before:(0,a.jsxs)(a.Fragment,{children:["before"===c&&h,o]}),after:(0,a.jsxs)(a.Fragment,{children:[t,"after"===c&&h]})},y),{children:v}))};try{V.displayName="AccordionSummary",V.__docgenInfo={description:"Обертка над summary.",displayName:"AccordionSummary",props:{ExpandIcon:{defaultValue:null,description:"Иконка для раскрытия контента.",name:"ExpandIcon",required:!1,type:{name:"ElementType<any>"}},CollapseIcon:{defaultValue:null,description:"Иконка для сворачивания контента.",name:"CollapseIcon",required:!1,type:{name:"ElementType<any>"}},iconPosition:{defaultValue:{value:"after"},description:"Позиция иконки.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},disabled:{defaultValue:null,description:"Убирает анимацию нажатия",name:"disabled",required:!1,type:{name:"boolean"}},before:{defaultValue:null,description:"Иконка 28 или `<Avatar size={28|32|40|48|72} />`",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.",name:"after",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},indicator:{defaultValue:null,description:"Контейнер для текста справа от `children`.",name:"indicator",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Дополнительная строка текста под `children`.",name:"subtitle",required:!1,type:{name:"ReactNode"}},badgeBeforeTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится слева от текста `children`.",name:"badgeBeforeTitle",required:!1,type:{name:"ReactNode"}},badgeAfterTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится справа от текста `children`.",name:"badgeAfterTitle",required:!1,type:{name:"ReactNode"}},badgeBeforeSubtitle:{defaultValue:null,description:"Иконка 12. Добавится слева от текста `subtitle`.",name:"badgeBeforeSubtitle",required:!1,type:{name:"ReactNode"}},badgeAfterSubtitle:{defaultValue:null,description:"Иконка 12. Добавится справа от текста `subtitle`.",name:"badgeAfterSubtitle",required:!1,type:{name:"ReactNode"}},subhead:{defaultValue:null,description:"Дополнительная строка текста над `children`.",name:"subhead",required:!1,type:{name:"ReactNode"}},extraSubtitle:{defaultValue:null,description:"Дополнительная строка текста под `children` и `subtitle`.",name:"extraSubtitle",required:!1,type:{name:"ReactNode"}},chevronSize:{defaultValue:null,description:"Размер chevron",name:"chevronSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},multiline:{defaultValue:null,description:"Включает многострочный режим для отображения текста",name:"multiline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionSummary.tsx#AccordionSummary"]={docgenInfo:V.__docgenInfo,name:"AccordionSummary",path:"src/components/Accordion/AccordionSummary.tsx#AccordionSummary"})}catch(e){}var k=function(e){return(0,a.jsx)(c.U,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({Component:"details",baseClassName:x.Accordion},e))};k.Summary=V;try{k.displayName="Accordion",k.__docgenInfo={description:"Компонент, позволяет отображать несколько разделов контента в ограниченном\nпространстве и сворачивать или разворачивать их пользователем.\n\nОбертка над details.",displayName:"Accordion",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDetailsElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:k.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(e){}try{Summary.displayName="Accordion.Summary",Summary.__docgenInfo={description:"Обертка над summary.",displayName:"Accordion.Summary",props:{ExpandIcon:{defaultValue:null,description:"Иконка для раскрытия контента.",name:"ExpandIcon",required:!1,type:{name:"ElementType<any>"}},CollapseIcon:{defaultValue:null,description:"Иконка для сворачивания контента.",name:"CollapseIcon",required:!1,type:{name:"ElementType<any>"}},iconPosition:{defaultValue:{value:"after"},description:"Позиция иконки.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},disabled:{defaultValue:null,description:"Убирает анимацию нажатия",name:"disabled",required:!1,type:{name:"boolean"}},before:{defaultValue:null,description:"Иконка 28 или `<Avatar size={28|32|40|48|72} />`",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.",name:"after",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},indicator:{defaultValue:null,description:"Контейнер для текста справа от `children`.",name:"indicator",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Дополнительная строка текста под `children`.",name:"subtitle",required:!1,type:{name:"ReactNode"}},badgeBeforeTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится слева от текста `children`.",name:"badgeBeforeTitle",required:!1,type:{name:"ReactNode"}},badgeAfterTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится справа от текста `children`.",name:"badgeAfterTitle",required:!1,type:{name:"ReactNode"}},badgeBeforeSubtitle:{defaultValue:null,description:"Иконка 12. Добавится слева от текста `subtitle`.",name:"badgeBeforeSubtitle",required:!1,type:{name:"ReactNode"}},badgeAfterSubtitle:{defaultValue:null,description:"Иконка 12. Добавится справа от текста `subtitle`.",name:"badgeAfterSubtitle",required:!1,type:{name:"ReactNode"}},subhead:{defaultValue:null,description:"Дополнительная строка текста над `children`.",name:"subhead",required:!1,type:{name:"ReactNode"}},extraSubtitle:{defaultValue:null,description:"Дополнительная строка текста под `children` и `subtitle`.",name:"extraSubtitle",required:!1,type:{name:"ReactNode"}},chevronSize:{defaultValue:null,description:"Размер chevron",name:"chevronSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},multiline:{defaultValue:null,description:"Включает многострочный режим для отображения текста",name:"multiline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion.Summary"]={docgenInfo:k.Summary.__docgenInfo,name:"Accordion.Summary",path:"src/components/Accordion/Accordion.tsx#Accordion.Summary"})}catch(e){}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function R(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var C={title:"Blocks/Accordion",component:k,parameters:q({},l.tW,l.nB)},N={render:function(e){return(0,a.jsxs)(k,R(q({},e),{children:[(0,a.jsx)(k.Summary,{children:"Title"}),(0,a.jsx)(d.Z,{children:"Content"})]}))},decorators:[function(e){return(0,a.jsx)(u.Z,{children:(0,a.jsx)(e,{})})}]};N.parameters=R(q({},N.parameters),{docs:R(q({},null===(o=N.parameters)||void 0===o?void 0:o.docs),{source:q({originalSource:"{\n  render: args => <Accordion {...args}>\n      <Accordion.Summary>Title</Accordion.Summary>\n      <Div>Content</Div>\n    </Accordion>,\n  decorators: [Component => <Group>\n        <Component />\n      </Group>]\n}"},null===(i=N.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})})},"./src/components/Div/Div.tsx":function(e,n,t){t.d(n,{Z:function(){return b}});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("./src/components/RootComponent/RootComponent.tsx"),i=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=t.n(i),l=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=t.n(l),u=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=t.n(u),s=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=t.n(s),p=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=t.n(p),v=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Div/Div.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=m(),y.insert=c().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=f(),a()(v.Z,y);var h=v.Z&&v.Z.locals?v.Z.locals:void 0,b=function(e){return(0,o.jsx)(r.U,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({baseClassName:h.Div},e))};try{b.displayName="Div",b.__docgenInfo={description:"",displayName:"Div",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Div/Div.tsx#Div"]={docgenInfo:b.__docgenInfo,name:"Div",path:"src/components/Div/Div.tsx#Div"})}catch(e){}}}]);