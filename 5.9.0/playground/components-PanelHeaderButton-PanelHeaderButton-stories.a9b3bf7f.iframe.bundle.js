"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3288],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,n,t){t.d(n,{De:function(){return h}});var r,o=t("../../node_modules/@swc/helpers/esm/_object_spread.js");function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var a=t("../../node_modules/react/index.js"),l=t("../../node_modules/@swc/helpers/esm/_class_call_check.js"),u=t("../../node_modules/@swc/helpers/esm/_create_class.js"),d=t("../../node_modules/@swc/helpers/esm/_define_property.js"),s=function(){function e(n){var t=n.content;(0,l._)(this,e),(0,d._)(this,"isMounted",!1),(0,d._)(this,"node",void 0),this.node=function(e){var n=!!document.importNode,t=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return n?document.importNode(t,!0):t}(t)}return(0,u._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(n){var t=new e({content:""});return t.node=n,t}}]),e}(),c="http://www.w3.org/2000/svg",p=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,d._)(this,"symbols",new Map),(0,d._)(this,"config",{attrs:{xmlns:c,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,d._)(this,"node",null),Object.assign(this.config.attrs,n.attrs)}return(0,u._)(e,[{key:"push",value:function(e){var n=this.symbols,t=n.has(e.id);return n.set(e.id,e),!t}},{key:"add",value:function(e){var n=this.push(e);return this.node&&n&&e.mount(this.node),n}},{key:"attach",value:function(e){var n=this;this.node||(this.node=e,this.symbols.forEach(function(n){n.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var t=s.createFromExistingNode(e);n.add(t)}))}},{key:"mount",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),n&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(c,"svg");return Object.entries(this.config.attrs).forEach(function(n){return e.setAttribute(n[0],n[1])}),this.symbols.forEach(function(n){return e.appendChild(n.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var f="__SVG_SPRITE_NODE__";r=new p({attrs:{id:f}});var v=function(){var e=document.getElementById(f);e?r.attach(e):r.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else r=null;var b=m?a.useLayoutEffect:a.useEffect,y=function(e){var n=e.width,t=void 0===n?0:n,r=e.height,l=void 0===r?0:r,u=e.viewBox,d=e.id,s=e.className,c=e.fill,p=e.getRootRef,m=e.style,f=e.title,v=e.children,b=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),y=(0,o._)({width:t,height:l},void 0===m?{}:m);return a.createElement("svg",i((0,o._)({"aria-hidden":"true",display:"block"},b),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(t,l)),"vkuiIcon--w-".concat(t),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(d),void 0===s?"":s].join(" ").trim(),viewBox:u,width:t,height:l,style:y,ref:p}),f&&a.createElement("title",null,f),a.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:c}},v))};function h(e,n,t,l,u,d,c,p){var m=function(){f||(!function(e){r&&r.add(e)}(new s({content:l})),f=!0)},f=!1,v=function(e){var n={};return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";n[t]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(t)),n[t]=!0)}}(e),h=function(e){return b(m,[]),c&&v("Иконка устарела"+(p?". Замените на ".concat(p):"")),a.createElement(y,i((0,o._)({},e),{viewBox:t,id:n,width:void 0===e.width||isNaN(e.width)?u:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return h.mountIcon=m,h.displayName=e,h}},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js":function(e,n,t){t.d(n,{P:function(){return r}});var r=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1Z" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/arrow_left_outline_28.js":function(e,n,t){t.d(n,{D:function(){return r}});var r=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28ArrowLeftOutline","arrow_left_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_left_outline_28"><g fill="none" fill-rule="evenodd"><path d="M28 0H0v28h28z" /><path fill="currentColor" fill-rule="nonzero" d="M12.293 6.293a1 1 0 0 1 1.414 1.414L8.414 13H22a1 1 0 0 1 .993.883L23 14a1 1 0 0 1-1 1H8.414l5.293 5.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-7-7-.073-.082A1.005 1.005 0 0 1 5 14l.004.09A1.006 1.006 0 0 1 5 14.02V14a1.02 1.02 0 0 1 .125-.484.878.878 0 0 1 .071-.111.999.999 0 0 1 .097-.112l-.08.09c.025-.031.051-.062.08-.09Z" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/cancel_outline_28.js":function(e,n,t){t.d(n,{c:function(){return r}});var r=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28CancelOutline","cancel_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="cancel_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M6.293 6.293a1 1 0 0 1 1.414 0L14 12.585l6.293-6.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414L15.415 14l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0L14 15.415l-6.293 6.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414L12.585 14 6.293 7.707a1 1 0 0 1-.083-1.32Z" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/chevron_back_28.js":function(e,n,t){t.d(n,{V:function(){return r}});var r=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28ChevronBack","chevron_back_28","0 0 20 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 28" id="chevron_back_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v28H0z" /><path fill="currentColor" d="M4.56 12.94 13 4.5a1.414 1.414 0 0 1 2 2L7.5 14l7.5 7.5a1.414 1.414 0 0 1-2 2l-8.44-8.44a1.5 1.5 0 0 1 0-2.12Z" /></g></symbol>',20,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/chevron_left_outline_28.js":function(e,n,t){t.d(n,{v:function(){return r}});var r=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28ChevronLeftOutline","chevron_left_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="chevron_left_outline_28"><path fill="currentColor" d="m12.414 14 5.793-5.793a1 1 0 0 0-1.414-1.414l-6.5 6.5a1 1 0 0 0 0 1.414l6.5 6.5a1 1 0 0 0 1.414-1.414z" /></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/done_outline_28.js":function(e,n,t){t.d(n,{k:function(){return r}});var r=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28DoneOutline","done_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="done_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="m11 18.586-5.293-5.293a1 1 0 1 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l12-12a1 1 0 1 0-1.414-1.414L11 18.586Z" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/edit_outline_28.js":function(e,n,t){t.d(n,{K:function(){return r}});var r=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28EditOutline","edit_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="edit_outline_28"><path fill="currentColor" fill-rule="evenodd" d="M21.782 3.335a3 3 0 0 0-2.724 0c-.428.218-.8.591-1.23 1.023L4.677 17.508c-.354.355-.609.609-.818.897a4.5 4.5 0 0 0-.804 1.94C3 20.698 3 21.058 3 21.558V22.681c-.001.282-.002.628.098.937a2 2 0 0 0 1.284 1.284c.309.1.655.1.937.098H6.443c.5 0 .86 0 1.211-.055a4.5 4.5 0 0 0 1.941-.804c.288-.21.542-.464.896-.818l13.151-13.15c.432-.431.805-.803 1.023-1.231a3 3 0 0 0 0-2.724c-.218-.428-.591-.8-1.023-1.23l-.63-.63c-.43-.432-.802-.805-1.23-1.023Zm-1.816 1.782a1 1 0 0 1 .908 0c.106.054.237.168.819.75l.44.44c.582.582.696.713.75.819a1 1 0 0 1 0 .908c-.054.106-.168.237-.75.819l-.858.858-2.986-2.986.858-.858c.582-.582.713-.696.82-.75ZM16.875 8.14 6.142 18.872c-.425.425-.56.564-.665.708a2.5 2.5 0 0 0-.446 1.079c-.028.176-.03.369-.03.97v.971c-.001.197 0 .305.004.383v.012h.012c.078.005.186.005.383.005h.97c.602 0 .795-.003.971-.03a2.5 2.5 0 0 0 1.079-.447c.144-.105.283-.24.708-.665l10.733-10.733-2.986-2.986Z" clip-rule="evenodd" /></symbol>',28,28,!1,void 0)},"../../node_modules/mitt/dist/mitt.mjs":function(e,n,t){t.d(n,{Z:function(){return r}});function r(e){return{all:e=e||new Map,on:function(n,t){var r=e.get(n);r?r.push(t):e.set(n,[t])},off:function(n,t){var r=e.get(n);r&&(t?r.splice(r.indexOf(t)>>>0,1):e.set(n,[]))},emit:function(n,t){var r=e.get(n);r&&r.slice().map(function(e){e(t)}),(r=e.get("*"))&&r.slice().map(function(e){e(n,t)})}}}},"./src/components/PanelHeaderButton/PanelHeaderButton.stories.tsx":function(e,n,t){t.r(n),t.d(n,{PanelHeaderBack:function(){return D},PanelHeaderClose:function(){return L},PanelHeaderEdit:function(){return R},PanelHeaderSubmit:function(){return B},Playground:function(){return q},default:function(){return C}});var r,o,i,a,l,u,d,s,c,p,m,f,v,b,y,h=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var O=t("../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js"),g=t("./src/storybook/constants.ts"),_=t("./src/components/PanelHeaderBack/PanelHeaderBack.tsx"),j=t("./src/components/PanelHeaderClose/PanelHeaderClose.tsx"),P=t("../../node_modules/@vkontakte/icons/dist/es6/28/done_outline_28.js"),w=t("../../node_modules/@vkontakte/icons/dist/es6/28/edit_outline_28.js"),k=t("./src/hooks/usePlatform.ts"),E=t("./src/lib/platform.ts"),S=t("./src/components/PanelHeaderButton/PanelHeaderButton.tsx"),H=function(e){var n=e.isActive,t=void 0!==n&&n,r=e.editLabel,o=e.doneLabel,i=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["isActive","editLabel","doneLabel"]),a=t?void 0===o?"Готово":o:void 0===r?"Редактировать":r,l=t?P.k:w.K,u=(0,k.F)();return(0,h.jsx)(S.C,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({"aria-label":a},i),{children:u===E.t.IOS?a:(0,h.jsx)(l,{})}))};try{H.displayName="PanelHeaderEdit",H.__docgenInfo={description:"",displayName:"PanelHeaderEdit",props:{isActive:{defaultValue:{value:"false"},description:"Включен ли режим редактирования",name:"isActive",required:!1,type:{name:"boolean"}},editLabel:{defaultValue:{value:"Редактировать"},description:"iOS only. Текст кнопки, когда режим редактирования не активен",name:"editLabel",required:!1,type:{name:"string"}},doneLabel:{defaultValue:{value:"Готово"},description:"iOS only. Текст кнопки при активном режиме редактирования для выхода из него",name:"doneLabel",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeaderEdit/PanelHeaderEdit.tsx#PanelHeaderEdit"]={docgenInfo:H.__docgenInfo,name:"PanelHeaderEdit",path:"src/components/PanelHeaderEdit/PanelHeaderEdit.tsx#PanelHeaderEdit"})}catch(e){}var x=t("./src/components/PanelHeaderSubmit/PanelHeaderSubmit.tsx");function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function M(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var C={title:"Layout/PanelHeaderButton",component:S.C,parameters:V({},g.tW,g.nB)},q={render:function(e){return(0,h.jsx)(S.C,M(V({},e),{children:(0,h.jsx)(O.P,{})}))}},L={render:function(e){return(0,h.jsx)(j.U,V({},e))}},D={render:function(e){return(0,h.jsx)(_.b,V({},e))}},R={args:{isActive:!0},render:function(e){return(0,h.jsx)(H,V({},e))}},B={render:function(e){return(0,h.jsx)(x.I,V({},e))}};q.parameters=M(V({},q.parameters),{docs:M(V({},null===(r=q.parameters)||void 0===r?void 0:r.docs),{source:V({originalSource:"{\n  render: args => {\n    return <PanelHeaderButton {...args}>\n        <Icon28AddOutline />\n      </PanelHeaderButton>;\n  }\n}"},null===(i=q.parameters)||void 0===i?void 0:null===(o=i.docs)||void 0===o?void 0:o.source)})}),L.parameters=M(V({},L.parameters),{docs:M(V({},null===(a=L.parameters)||void 0===a?void 0:a.docs),{source:V({originalSource:"{\n  render: args => {\n    return <PanelHeaderCloseCmp {...args} />;\n  }\n}"},null===(u=L.parameters)||void 0===u?void 0:null===(l=u.docs)||void 0===l?void 0:l.source)})}),D.parameters=M(V({},D.parameters),{docs:M(V({},null===(d=D.parameters)||void 0===d?void 0:d.docs),{source:V({originalSource:"{\n  render: args => {\n    return <PanelHeaderBackCmp {...args} />;\n  }\n}"},null===(c=D.parameters)||void 0===c?void 0:null===(s=c.docs)||void 0===s?void 0:s.source)})}),R.parameters=M(V({},R.parameters),{docs:M(V({},null===(p=R.parameters)||void 0===p?void 0:p.docs),{source:V({originalSource:"{\n  args: {\n    isActive: true\n  },\n  render: args => {\n    return <PanelHeaderEditCmp {...args} />;\n  }\n}"},null===(f=R.parameters)||void 0===f?void 0:null===(m=f.docs)||void 0===m?void 0:m.source)})}),B.parameters=M(V({},B.parameters),{docs:M(V({},null===(v=B.parameters)||void 0===v?void 0:v.docs),{source:V({originalSource:"{\n  render: args => {\n    return <PanelHeaderSubmitCmp {...args} />;\n  }\n}"},null===(y=B.parameters)||void 0===y?void 0:null===(b=y.docs)||void 0===b?void 0:b.source)})})},"./src/components/PanelHeaderClose/PanelHeaderClose.tsx":function(e,n,t){t.d(n,{U:function(){return d}});var r=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var o=t("../../node_modules/@vkontakte/icons/dist/es6/28/cancel_outline_28.js"),i=t("./src/hooks/usePlatform.ts"),a=t("./src/lib/platform.ts"),l=t("./src/lib/utils.ts"),u=t("./src/components/PanelHeaderButton/PanelHeaderButton.tsx"),d=function(e){var n=e.children,t=void 0===n?"Отмена":n,d=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["children"]),s=(0,i.F)();return(0,r.jsx)(u.C,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({"aria-label":(0,l.P1)(t)},d),{children:s===a.t.IOS?t:(0,r.jsx)(o.c,{})}))};try{d.displayName="PanelHeaderClose",d.__docgenInfo={description:"",displayName:"PanelHeaderClose",props:{primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeaderClose/PanelHeaderClose.tsx#PanelHeaderClose"]={docgenInfo:d.__docgenInfo,name:"PanelHeaderClose",path:"src/components/PanelHeaderClose/PanelHeaderClose.tsx#PanelHeaderClose"})}catch(e){}},"./src/components/PanelHeaderSubmit/PanelHeaderSubmit.tsx":function(e,n,t){t.d(n,{I:function(){return d}});var r=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var o=t("../../node_modules/@vkontakte/icons/dist/es6/28/done_outline_28.js"),i=t("./src/hooks/usePlatform.ts"),a=t("./src/lib/platform.ts"),l=t("./src/lib/utils.ts"),u=t("./src/components/PanelHeaderButton/PanelHeaderButton.tsx"),d=function(e){var n=e.children,t=void 0===n?"Готово":n,d=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["children"]),s=(0,i.F)();return(0,r.jsx)(u.C,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({"aria-label":(0,l.P1)(t),primary:!0},d),{children:s===a.t.IOS?t:(0,r.jsx)(o.k,{})}))};try{d.displayName="PanelHeaderSubmit",d.__docgenInfo={description:"",displayName:"PanelHeaderSubmit",props:{primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeaderSubmit/PanelHeaderSubmit.tsx#PanelHeaderSubmit"]={docgenInfo:d.__docgenInfo,name:"PanelHeaderSubmit",path:"src/components/PanelHeaderSubmit/PanelHeaderSubmit.tsx#PanelHeaderSubmit"})}catch(e){}}}]);