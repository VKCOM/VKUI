"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8313],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,o,n){n.d(o,{De:function(){return _}});var t,r=n("../../node_modules/@swc/helpers/esm/_object_spread.js");function i(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n})(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}),e}var a=n("../../node_modules/react/index.js"),d=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),s=n("../../node_modules/@swc/helpers/esm/_create_class.js"),u=n("../../node_modules/@swc/helpers/esm/_define_property.js"),l=function(){function e(o){var n=o.content;(0,d._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=function(e){var o=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return o?document.importNode(n,!0):n}(n)}return(0,s._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(o){var n=new e({content:""});return n.node=o,n}}]),e}(),c="http://www.w3.org/2000/svg",p=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,d._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:c,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,o.attrs)}return(0,s._)(e,[{key:"push",value:function(e){var o=this.symbols,n=o.has(e.id);return o.set(e.id,e),!n}},{key:"add",value:function(e){var o=this.push(e);return this.node&&o&&e.mount(this.node),o}},{key:"attach",value:function(e){var o=this;this.node||(this.node=e,this.symbols.forEach(function(o){o.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=l.createFromExistingNode(e);o.add(n)}))}},{key:"mount",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),o&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(c,"svg");return Object.entries(this.config.attrs).forEach(function(o){return e.setAttribute(o[0],o[1])}),this.symbols.forEach(function(o){return e.appendChild(o.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var f="__SVG_SPRITE_NODE__";t=new p({attrs:{id:f}});var v=function(){var e=document.getElementById(f);e?t.attach(e):t.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else t=null;var y=m?a.useLayoutEffect:a.useEffect,b=function(e){var o=e.width,n=void 0===o?0:o,t=e.height,d=void 0===t?0:t,s=e.viewBox,u=e.id,l=e.className,c=e.fill,p=e.getRootRef,m=e.style,f=e.title,v=e.children,y=function(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),b=(0,r._)({width:n,height:d},void 0===m?{}:m);return a.createElement("svg",i((0,r._)({"aria-hidden":"true",display:"block"},y),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(n,d)),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(d),"vkuiIcon--".concat(u),void 0===l?"":l].join(" ").trim(),viewBox:s,width:n,height:d,style:b,ref:p}),f&&a.createElement("title",null,f),a.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:c}},v))};function _(e,o,n,d,s,u,c,p){var m=function(){f||(!function(e){t&&t.add(e)}(new l({content:d})),f=!0)},f=!1,v=function(e){var o={};return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";o[n]||(console[t]("[@vkontakte/icons][".concat(e,"] ").concat(n)),o[n]=!0)}}(e),_=function(e){return y(m,[]),c&&v("Иконка устарела"+(p?". Замените на ".concat(p):"")),a.createElement(b,i((0,r._)({},e),{viewBox:n,id:o,width:void 0===e.width||isNaN(e.width)?s:+e.width,height:void 0===e.height||isNaN(e.height)?u:+e.height}))};return _.mountIcon=m,_.displayName=e,_}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":function(e,o,n){n.d(o,{r:function(){return t}});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":function(e,o,n){n.d(o,{o:function(){return t}});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_down_24.js":function(e,o,n){n.d(o,{K:function(){return t}});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronDown","chevron_down_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_down_24"><path d="M12 13.698 6.64 9.232a1 1 0 0 0-1.28 1.536l6 5a1 1 0 0 0 1.28 0l6-5a1 1 0 1 0-1.28-1.536L12 13.698Z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_up_24.js":function(e,o,n){n.d(o,{E:function(){return t}});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronUp","chevron_up_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_up_24"><path d="m12 10.302-5.36 4.466a1 1 0 1 1-1.28-1.536l6-5a1 1 0 0 1 1.28 0l6 5a1 1 0 1 1-1.28 1.536L12 10.302Z" /></symbol>',24,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Accordion/Accordion.module.css":function(e,o,n){var t=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(t),i=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(i)()(r());a.push([e.id,".AccordionSummary--xh6ut::-webkit-details-marker{display:none}.AccordionSummary__icon--J1BKN{color:#99a2ad;color:var(--vkui--color_icon_secondary)}.Accordion--vS9CC:not([open])>summary .AccordionSummary__icon--collapse--qQDLV,.Accordion--vS9CC[open]>summary .AccordionSummary__icon--expand--OEa6C{display:none}",""]),a.locals={AccordionSummary:"AccordionSummary--xh6ut",AccordionSummary__icon:"AccordionSummary__icon--J1BKN",Accordion:"Accordion--vS9CC","AccordionSummary__icon--collapse":"AccordionSummary__icon--collapse--qQDLV","AccordionSummary__icon--expand":"AccordionSummary__icon--expand--OEa6C"},o.Z=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Div/Div.module.css":function(e,o,n){var t=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(t),i=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(i)()(r());a.push([e.id,".Div--jWBVN{padding:12px 16px;padding:var(--vkui--size_base_padding_vertical--regular) var(--vkui--size_base_padding_horizontal--regular)}",""]),a.locals={Div:"Div--jWBVN"},o.Z=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Group/Group.module.css":function(e,o,n){var t=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(t),i=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(i)()(r());a.push([e.id,'.Group--xobVt{color:#000;color:var(--vkui--color_text_primary);padding-bottom:8px;padding-top:8px}.Group__separator--separator--ZKY_V,.Group__separator--spacing--FNhA3{display:none}.Group--mode-plain--KwMj9+*+.Group__separator--separator--ZKY_V{display:block}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+*+.Group__separator--separator--ZKY_V{display:block}}.Group--mode-card--fmlmp+.Group__separator--spacing--FNhA3{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--spacing--FNhA3{display:block}}.Group--xobVt:last-of-type~.Group__separator--op6Xj{display:none}.Group--mode-card--fmlmp:last-of-type+.Group__separator--spacing--FNhA3,.Group--xobVt:last-of-type~.Group__separator--force--xEXPB{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:last-of-type+.Group__separator--spacing--FNhA3{display:block}}.Group--mode-card--fmlmp.Group--padding-s--T4za1{padding:4px}.Group--mode-card--fmlmp.Group--padding-m--eq6yP{padding:8px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-s--T4za1,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-s--T4za1{padding:4px}.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-m--eq6yP,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-m--eq6yP{padding:8px}}.Group--sizeX-compact--I3zDP,.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp{padding-left:0;padding-right:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj,.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp{padding-left:0;padding-right:0}}.Group--mode-card--fmlmp{background:#fff;background:var(--vkui--color_background_content);border-radius:12px;border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8{background:#fff;background:var(--vkui--color_background_content);border-radius:12px;border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:first-of-type{border-radius:0 0 12px 12px;border-radius:0 0 var(--vkui--size_border_radius_paper--regular) var(--vkui--size_border_radius_paper--regular)}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:first-of-type{border-radius:0 0 12px 12px;border-radius:0 0 var(--vkui--size_border_radius_paper--regular) var(--vkui--size_border_radius_paper--regular)}}.Group--mode-card--fmlmp:before{border-radius:inherit;box-shadow:inset 0 0 0 1px #d7d8d9;box-shadow:inset 0 0 0 var(--vkui_internal--thin_border) var(--vkui--color_separator_primary);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:before{border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);box-shadow:inset 0 0 0 var(--vkui_internal--thin_border) var(--vkui--color_field_border_alpha);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:before{box-shadow:none}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:before{box-shadow:none}}.Group--mode-plain--KwMj9+.Group__separator--op6Xj,.Group--mode-plain--KwMj9+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}}.Group__description--Xolzh{color:#818c99;color:var(--vkui--color_text_secondary);display:block;padding:4px 16px 16px}.Group--xobVt .Group--xobVt,.Group--xobVt .Group--xobVt+.Group__separator--op6Xj{padding-left:0;padding-right:0}.Group--xobVt .Group--xobVt:first-of-type{padding-top:0}.Group--xobVt .Group--xobVt:last-of-type{padding-bottom:0}.Group--ios--ZeO5F .Group__description--Xolzh{padding:4px 12px 16px}.vkuiInternalPanelHeader--vkcom+* .Group--xobVt:first-of-type,.vkuiInternalPanelHeader--vkcom~.Group--xobVt:first-of-type{border-top-left-radius:0;border-top-right-radius:0;position:relative;top:-1px}',""]),a.locals={Group:"Group--xobVt","Group__separator--separator":"Group__separator--separator--ZKY_V","Group__separator--spacing":"Group__separator--spacing--FNhA3","Group--mode-plain":"Group--mode-plain--KwMj9","Group--sizeX-none":"Group--sizeX-none--_sXRj","Group--mode-none":"Group--mode-none--OYdt8","Group--mode-card":"Group--mode-card--fmlmp",Group__separator:"Group__separator--op6Xj","Group__separator--force":"Group__separator--force--xEXPB","Group--padding-s":"Group--padding-s--T4za1","Group--padding-m":"Group--padding-m--eq6yP","Group--inside-modal":"Group--inside-modal--Xhx9h","Group--sizeX-compact":"Group--sizeX-compact--I3zDP",Group__description:"Group__description--Xolzh","Group--ios":"Group--ios--ZeO5F"},o.Z=a},"../../node_modules/mitt/dist/mitt.mjs":function(e,o,n){n.d(o,{Z:function(){return t}});function t(e){return{all:e=e||new Map,on:function(o,n){var t=e.get(o);t?t.push(n):e.set(o,[n])},off:function(o,n){var t=e.get(o);t&&(n?t.splice(t.indexOf(n)>>>0,1):e.set(o,[]))},emit:function(o,n){var t=e.get(o);t&&t.slice().map(function(e){e(n)}),(t=e.get("*"))&&t.slice().map(function(e){e(o,n)})}}}},"./src/components/Accordion/Accordion.stories.tsx":function(e,o,n){n.r(o),n.d(o,{Playground:function(){return C},default:function(){return P}});var t,r,i,a=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var d=n("./src/storybook/constants.ts"),s=n("./src/components/Div/Div.tsx"),u=n("./src/components/Group/Group.tsx"),l=n("./src/components/RootComponent/RootComponent.tsx"),c=n("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_down_24.js"),p=n("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_up_24.js"),m=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),f=n("./src/components/SimpleCell/SimpleCell.tsx"),v=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=n.n(v),b=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),_=n.n(b),h=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),g=n.n(h),j=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),O=n.n(j),x=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=n.n(x),G=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Accordion/Accordion.module.css"),w={attributes:{class:"vkui-style"}};w.setAttributes=O(),w.insert=g().bind(null,"head"),w.domAPI=_(),w.insertStyleElement=S(),y()(G.Z,w);var A=G.Z&&G.Z.locals?G.Z.locals:void 0,k=function(e){var o=e.className,n=e.after,t=e.before,r=e.ExpandIcon,i=void 0===r?c.K:r,d=e.CollapseIcon,s=void 0===d?p.E:d,u=e.iconPosition,l=void 0===u?"after":u,v=e.children,y=function(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["className","after","before","ExpandIcon","CollapseIcon","iconPosition","children"]),b=(0,a.jsxs)("span",{className:"vkuiIcon",children:[(0,a.jsx)(i,{className:(0,m.AK)(A.AccordionSummary__icon,A["AccordionSummary__icon--expand"])}),(0,a.jsx)(s,{className:(0,m.AK)(A.AccordionSummary__icon,A["AccordionSummary__icon--collapse"])})]});return(0,a.jsx)(f.q,function(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n})(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}),e}(function(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(o){!function(e,o,n){o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n}(e,o,n[o])})}return e}({className:(0,m.AK)(A.AccordionSummary,o),Component:"summary",before:(0,a.jsxs)(a.Fragment,{children:["before"===l&&b,t]}),after:(0,a.jsxs)(a.Fragment,{children:[n,"after"===l&&b]})},y),{children:v}))};try{k.displayName="AccordionSummary",k.__docgenInfo={description:"Обертка над summary.",displayName:"AccordionSummary",props:{ExpandIcon:{defaultValue:null,description:"Иконка для раскрытия контента.",name:"ExpandIcon",required:!1,type:{name:"ElementType<any>"}},CollapseIcon:{defaultValue:null,description:"Иконка для сворачивания контента.",name:"CollapseIcon",required:!1,type:{name:"ElementType<any>"}},iconPosition:{defaultValue:{value:"after"},description:"Позиция иконки.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},disabled:{defaultValue:null,description:"Убирает анимацию нажатия",name:"disabled",required:!1,type:{name:"boolean"}},before:{defaultValue:null,description:"Иконка 28 или `<Avatar size={28|32|40|48|72} />`",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.",name:"after",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},indicator:{defaultValue:null,description:"Контейнер для текста справа от `children`.",name:"indicator",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Дополнительная строка текста под `children`.",name:"subtitle",required:!1,type:{name:"ReactNode"}},badgeBeforeTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится слева от текста `children`.",name:"badgeBeforeTitle",required:!1,type:{name:"ReactNode"}},badgeAfterTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится справа от текста `children`.",name:"badgeAfterTitle",required:!1,type:{name:"ReactNode"}},badgeBeforeSubtitle:{defaultValue:null,description:"Иконка 12. Добавится слева от текста `subtitle`.",name:"badgeBeforeSubtitle",required:!1,type:{name:"ReactNode"}},badgeAfterSubtitle:{defaultValue:null,description:"Иконка 12. Добавится справа от текста `subtitle`.",name:"badgeAfterSubtitle",required:!1,type:{name:"ReactNode"}},subhead:{defaultValue:null,description:"Дополнительная строка текста над `children`.",name:"subhead",required:!1,type:{name:"ReactNode"}},extraSubtitle:{defaultValue:null,description:"Дополнительная строка текста под `children` и `subtitle`.",name:"extraSubtitle",required:!1,type:{name:"ReactNode"}},chevronSize:{defaultValue:null,description:"Размер chevron",name:"chevronSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},multiline:{defaultValue:null,description:"Включает многострочный режим для отображения текста",name:"multiline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionSummary.tsx#AccordionSummary"]={docgenInfo:k.__docgenInfo,name:"AccordionSummary",path:"src/components/Accordion/AccordionSummary.tsx#AccordionSummary"})}catch(e){}var E=function(e){return(0,a.jsx)(l.U,function(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(o){!function(e,o,n){o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n}(e,o,n[o])})}return e}({Component:"details",baseClassName:A.Accordion},e))};E.Summary=k;try{E.displayName="Accordion",E.__docgenInfo={description:"Компонент, позволяет отображать несколько разделов контента в ограниченном\nпространстве и сворачивать или разворачивать их пользователем.\n\nОбертка над details.",displayName:"Accordion",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDetailsElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:E.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(e){}try{Summary.displayName="Accordion.Summary",Summary.__docgenInfo={description:"Обертка над summary.",displayName:"Accordion.Summary",props:{ExpandIcon:{defaultValue:null,description:"Иконка для раскрытия контента.",name:"ExpandIcon",required:!1,type:{name:"ElementType<any>"}},CollapseIcon:{defaultValue:null,description:"Иконка для сворачивания контента.",name:"CollapseIcon",required:!1,type:{name:"ElementType<any>"}},iconPosition:{defaultValue:{value:"after"},description:"Позиция иконки.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},disabled:{defaultValue:null,description:"Убирает анимацию нажатия",name:"disabled",required:!1,type:{name:"boolean"}},before:{defaultValue:null,description:"Иконка 28 или `<Avatar size={28|32|40|48|72} />`",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.",name:"after",required:!1,type:{name:"ReactNode"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},indicator:{defaultValue:null,description:"Контейнер для текста справа от `children`.",name:"indicator",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Дополнительная строка текста под `children`.",name:"subtitle",required:!1,type:{name:"ReactNode"}},badgeBeforeTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится слева от текста `children`.",name:"badgeBeforeTitle",required:!1,type:{name:"ReactNode"}},badgeAfterTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится справа от текста `children`.",name:"badgeAfterTitle",required:!1,type:{name:"ReactNode"}},badgeBeforeSubtitle:{defaultValue:null,description:"Иконка 12. Добавится слева от текста `subtitle`.",name:"badgeBeforeSubtitle",required:!1,type:{name:"ReactNode"}},badgeAfterSubtitle:{defaultValue:null,description:"Иконка 12. Добавится справа от текста `subtitle`.",name:"badgeAfterSubtitle",required:!1,type:{name:"ReactNode"}},subhead:{defaultValue:null,description:"Дополнительная строка текста над `children`.",name:"subhead",required:!1,type:{name:"ReactNode"}},extraSubtitle:{defaultValue:null,description:"Дополнительная строка текста под `children` и `subtitle`.",name:"extraSubtitle",required:!1,type:{name:"ReactNode"}},chevronSize:{defaultValue:null,description:"Размер chevron",name:"chevronSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},multiline:{defaultValue:null,description:"Включает многострочный режим для отображения текста",name:"multiline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion.Summary"]={docgenInfo:E.Summary.__docgenInfo,name:"Accordion.Summary",path:"src/components/Accordion/Accordion.tsx#Accordion.Summary"})}catch(e){}function R(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(o){!function(e,o,n){o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n}(e,o,n[o])})}return e}function V(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n})(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}),e}var P={title:"Blocks/Accordion",component:E,parameters:R({},d.tW,d.nB)},C={render:function(e){return(0,a.jsxs)(E,V(R({},e),{children:[(0,a.jsx)(E.Summary,{children:"Title"}),(0,a.jsx)(s.Z,{children:"Content"})]}))},decorators:[function(e){return(0,a.jsx)(u.Z,{children:(0,a.jsx)(e,{})})}]};C.parameters=V(R({},C.parameters),{docs:V(R({},null===(t=C.parameters)||void 0===t?void 0:t.docs),{source:R({originalSource:"{\n  render: args => <Accordion {...args}>\n      <Accordion.Summary>Title</Accordion.Summary>\n      <Div>Content</Div>\n    </Accordion>,\n  decorators: [Component => <Group>\n        <Component />\n      </Group>]\n}"},null===(i=C.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})})},"./src/components/Div/Div.tsx":function(e,o,n){n.d(o,{Z:function(){return _}});var t=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("./src/components/RootComponent/RootComponent.tsx"),i=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=n.n(i),d=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),s=n.n(d),u=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),l=n.n(u),c=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(c),m=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=n.n(m),v=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Div/Div.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=p(),y.insert=l().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=f(),a()(v.Z,y);var b=v.Z&&v.Z.locals?v.Z.locals:void 0,_=function(e){return(0,t.jsx)(r.U,function(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(o){!function(e,o,n){o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n}(e,o,n[o])})}return e}({baseClassName:b.Div},e))};try{_.displayName="Div",_.__docgenInfo={description:"",displayName:"Div",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Div/Div.tsx#Div"]={docgenInfo:_.__docgenInfo,name:"Div",path:"src/components/Div/Div.tsx#Div"})}catch(e){}},"./src/components/Group/Group.tsx":function(e,o,n){n.d(o,{Z:function(){return q}});var t=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/react/index.js"),i=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=n("./src/hooks/useAdaptivity.ts"),d=n("./src/hooks/usePlatform.ts"),s=n("./src/lib/adaptivity/constants.ts"),u=n("./src/lib/platform.ts"),l=n("./src/lib/warnOnce.ts"),c=n("./src/components/AppRoot/AppRootContext.ts"),p=n("./src/components/ModalRoot/ModalRootContext.tsx"),m=n("./src/components/RootComponent/RootComponent.tsx"),f=n("./src/components/Separator/Separator.tsx"),v=n("./src/components/Spacing/Spacing.tsx"),y=n("./src/components/Typography/Footnote/Footnote.tsx"),b=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=n.n(b),h=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),g=n.n(h),j=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),O=n.n(j),x=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),S=n.n(x),G=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=n.n(G),A=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Group/Group.module.css"),k={attributes:{class:"vkui-style"}};k.setAttributes=S(),k.insert=O().bind(null,"head"),k.domAPI=g(),k.insertStyleElement=w(),_()(A.Z,k);var E=A.Z&&A.Z.locals?A.Z.locals:void 0;function R(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}var V=R({none:(0,i.AK)(E["Group--sizeX-none"],"vkuiInternalGroup--sizeX-none")},s.n$.COMPACT,E["Group--sizeX-compact"]),P={none:(0,i.AK)(E["Group--mode-none"],"vkuiInternalGroup--mode-none"),plain:(0,i.AK)(E["Group--mode-plain"],"vkuiInternalGroup--mode-plain"),card:(0,i.AK)(E["Group--mode-card"],"vkuiInternalGroup--mode-card")},C={s:E["Group--padding-s"],m:E["Group--padding-m"]};(0,l.O)("Group");var q=function(e){var o=e.header,n=e.description,l=e.children,b=e.separator,_=void 0===b?"auto":b,h=e.mode,g=e.padding,j=e.tabIndex,O=function(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["header","description","children","separator","mode","padding","tabIndex"]),x=r.useContext(p.E).isInsideModal,S=(0,d.F)(),G=(0,a.g)().sizeX,w=void 0===G?"none":G,A=function(e,o,n){var t=r.useContext(c.A).layout;return e||(n?"plain":t||("none"!==o?o===s.n$.REGULAR?"card":"plain":"none"))}(h,w,x),k="tabpanel"===O.role;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m.U,function(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n})(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}),e}(function(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(o){R(e,o,n[o])})}return e}({Component:"section"},O),{tabIndex:k&&void 0===j?0:j,baseClassName:(0,i.AK)("vkuiInternalGroup",E.Group,x&&E["Group--inside-modal"],S===u.t.IOS&&E["Group--ios"],w!==s.n$.REGULAR&&V[w],A&&P[A],C[void 0===g?"m":g]),children:[o,l,(0,i.p7)(n)&&(0,t.jsx)(y.w,{className:E.Group__description,children:n})]})),"hide"!==_&&(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)(v.K,{className:(0,i.AK)(E.Group__separator,E["Group__separator--spacing"]),size:16}),(0,t.jsx)(f.Z,{className:(0,i.AK)(E.Group__separator,E["Group__separator--separator"],"show"===_&&E["Group__separator--force"])})]})]})};try{q.displayName="Group",q.__docgenInfo={description:"",displayName:"Group",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},separator:{defaultValue:{value:"auto"},description:"`show` - разделитель всегда показывается,\n`hide` - разделитель всегда спрятан,\n`auto` - разделитель рисуется автоматически между соседними группами.",name:"separator",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"show"'},{value:'"hide"'}]}},mode:{defaultValue:null,description:"Режим отображения. Если установлен `card`, выглядит как карточка c\nобводкой и внешними отступами. Если `plain` — без отступов и обводки.\nПо умолчанию режим отображения зависит от `sizeX` (`mode=card` при `sizeX=REGULAR` и `mode=plain` при `sizeX=COMPACT`)\nВ модальных окнах по умолчанию `plain`.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"card"'}]}},padding:{defaultValue:{value:"m"},description:"Отвечает за отступы вокруг контента в режиме `card`.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group/Group.tsx#Group"]={docgenInfo:q.__docgenInfo,name:"Group",path:"src/components/Group/Group.tsx#Group"})}catch(e){}}}]);