"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4795],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,o,t){t.d(o,{De:function(){return b}});var n,r=t("../../node_modules/@swc/helpers/esm/_object_spread.js");function i(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t})(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}),e}var s=t("../../node_modules/react/index.js"),a=t("../../node_modules/@swc/helpers/esm/_class_call_check.js"),u=t("../../node_modules/@swc/helpers/esm/_create_class.js"),d=t("../../node_modules/@swc/helpers/esm/_define_property.js"),c=function(){function e(o){var t=o.content;(0,a._)(this,e),(0,d._)(this,"isMounted",!1),(0,d._)(this,"node",void 0),this.node=function(e){var o=!!document.importNode,t=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return o?document.importNode(t,!0):t}(t)}return(0,u._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(o){var t=new e({content:""});return t.node=o,t}}]),e}(),l="http://www.w3.org/2000/svg",p=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a._)(this,e),(0,d._)(this,"symbols",new Map),(0,d._)(this,"config",{attrs:{xmlns:l,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,d._)(this,"node",null),Object.assign(this.config.attrs,o.attrs)}return(0,u._)(e,[{key:"push",value:function(e){var o=this.symbols,t=o.has(e.id);return o.set(e.id,e),!t}},{key:"add",value:function(e){var o=this.push(e);return this.node&&o&&e.mount(this.node),o}},{key:"attach",value:function(e){var o=this;this.node||(this.node=e,this.symbols.forEach(function(o){o.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var t=c.createFromExistingNode(e);o.add(t)}))}},{key:"mount",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),o&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(l,"svg");return Object.entries(this.config.attrs).forEach(function(o){return e.setAttribute(o[0],o[1])}),this.symbols.forEach(function(o){return e.appendChild(o.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var v="__SVG_SPRITE_NODE__";n=new p({attrs:{id:v}});var f=function(){var e=document.getElementById(v);e?n.attach(e):n.mount(document.body),document.removeEventListener("DOMContentLoaded",f)};document.querySelector("body")?f():document.addEventListener("DOMContentLoaded",f)}else n=null;var h=m?s.useLayoutEffect:s.useEffect,_=function(e){var o=e.width,t=void 0===o?0:o,n=e.height,a=void 0===n?0:n,u=e.viewBox,d=e.id,c=e.className,l=e.fill,p=e.getRootRef,m=e.style,v=e.title,f=e.children,h=function(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),_=(0,r._)({width:t,height:a},void 0===m?{}:m);return s.createElement("svg",i((0,r._)({"aria-hidden":"true",display:"block"},h),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(t,a)),"vkuiIcon--w-".concat(t),"vkuiIcon--h-".concat(a),"vkuiIcon--".concat(d),void 0===c?"":c].join(" ").trim(),viewBox:u,width:t,height:a,style:_,ref:p}),v&&s.createElement("title",null,v),s.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:l}},f))};function b(e,o,t,a,u,d,l,p){var m=function(){v||(!function(e){n&&n.add(e)}(new c({content:a})),v=!0)},v=!1,f=function(e){var o={};return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";o[t]||(console[n]("[@vkontakte/icons][".concat(e,"] ").concat(t)),o[t]=!0)}}(e),b=function(e){return h(m,[]),l&&f("Иконка устарела"+(p?". Замените на ".concat(p):"")),s.createElement(_,i((0,r._)({},e),{viewBox:t,id:o,width:void 0===e.width||isNaN(e.width)?u:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return b.mountIcon=m,b.displayName=e,b}},"../../node_modules/@vkontakte/icons/dist/es6/12/circle_12.js":function(e,o,t){t.d(o,{m:function(){return n}});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/12/online_mobile_12.js":function(e,o,t){t.d(o,{I:function(){return n}});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98Zm.007 3H2.004a.502.502 0 0 0-.503.502v4.995c0 .278.225.503.503.503h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":function(e,o,t){t.d(o,{r:function(){return n}});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":function(e,o,t){t.d(o,{o:function(){return n}});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js":function(e,o,t){t.d(o,{C:function(){return n}});var n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28MessageOutline","message_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="message_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 3.5c6.32 0 11.5 4.44 11.5 10s-5.18 10-11.5 10c-1.355 0-2.678-.204-3.924-.597-1.402 1.306-3.458 1.994-6.124 2.098a1.434 1.434 0 0 1-1.363-2.023c.911-2.015 1.413-3.498 1.514-4.379C3.062 17.073 2.5 15.323 2.5 13.5c0-5.56 5.18-10 11.5-10Zm0 2c-5.278 0-9.5 3.619-9.5 8 0 1.508.497 2.955 1.426 4.213a1 1 0 0 1 .196.598c-.004 1.047-.45 2.567-1.33 4.627 1.987-.208 3.388-.831 4.245-1.837a1 1 0 0 1 1.111-.287c1.202.45 2.506.686 3.852.686 5.278 0 9.5-3.619 9.5-8s-4.222-8-9.5-8Z" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Group/Group.module.css":function(e,o,t){var n=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(n),i=t("../../node_modules/css-loader/dist/runtime/api.js"),s=t.n(i)()(r());s.push([e.id,'.Group--xobVt{color:#000;color:var(--vkui--color_text_primary);padding-bottom:8px;padding-top:8px}.Group__separator--separator--ZKY_V,.Group__separator--spacing--FNhA3{display:none}.Group--mode-plain--KwMj9+*+.Group__separator--separator--ZKY_V{display:block}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+*+.Group__separator--separator--ZKY_V{display:block}}.Group--mode-card--fmlmp+.Group__separator--spacing--FNhA3{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--spacing--FNhA3{display:block}}.Group--xobVt:last-of-type~.Group__separator--op6Xj{display:none}.Group--mode-card--fmlmp:last-of-type+.Group__separator--spacing--FNhA3,.Group--xobVt:last-of-type~.Group__separator--force--xEXPB{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:last-of-type+.Group__separator--spacing--FNhA3{display:block}}.Group--mode-card--fmlmp.Group--padding-s--T4za1{padding:4px}.Group--mode-card--fmlmp.Group--padding-m--eq6yP{padding:8px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-s--T4za1,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-s--T4za1{padding:4px}.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-m--eq6yP,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-m--eq6yP{padding:8px}}.Group--sizeX-compact--I3zDP,.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp{padding-left:0;padding-right:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj,.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp{padding-left:0;padding-right:0}}.Group--mode-card--fmlmp{background:#fff;background:var(--vkui--color_background_content);border-radius:12px;border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8{background:#fff;background:var(--vkui--color_background_content);border-radius:12px;border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:first-of-type{border-radius:0 0 12px 12px;border-radius:0 0 var(--vkui--size_border_radius_paper--regular) var(--vkui--size_border_radius_paper--regular)}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:first-of-type{border-radius:0 0 12px 12px;border-radius:0 0 var(--vkui--size_border_radius_paper--regular) var(--vkui--size_border_radius_paper--regular)}}.Group--mode-card--fmlmp:before{border-radius:inherit;box-shadow:inset 0 0 0 1px #d7d8d9;box-shadow:inset 0 0 0 var(--vkui_internal--thin_border) var(--vkui--color_separator_primary);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:before{border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);box-shadow:inset 0 0 0 var(--vkui_internal--thin_border) var(--vkui--color_field_border_alpha);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:before{box-shadow:none}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:before{box-shadow:none}}.Group--mode-plain--KwMj9+.Group__separator--op6Xj,.Group--mode-plain--KwMj9+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}}.Group__description--Xolzh{color:#818c99;color:var(--vkui--color_text_secondary);display:block;padding:4px 16px 16px}.Group--xobVt .Group--xobVt,.Group--xobVt .Group--xobVt+.Group__separator--op6Xj{padding-left:0;padding-right:0}.Group--xobVt .Group--xobVt:first-of-type{padding-top:0}.Group--xobVt .Group--xobVt:last-of-type{padding-bottom:0}.Group--ios--ZeO5F .Group__description--Xolzh{padding:4px 12px 16px}.vkuiInternalPanelHeader--vkcom+* .Group--xobVt:first-of-type,.vkuiInternalPanelHeader--vkcom~.Group--xobVt:first-of-type{border-top-left-radius:0;border-top-right-radius:0;position:relative;top:-1px}',""]),s.locals={Group:"Group--xobVt","Group__separator--separator":"Group__separator--separator--ZKY_V","Group__separator--spacing":"Group__separator--spacing--FNhA3","Group--mode-plain":"Group--mode-plain--KwMj9","Group--sizeX-none":"Group--sizeX-none--_sXRj","Group--mode-none":"Group--mode-none--OYdt8","Group--mode-card":"Group--mode-card--fmlmp",Group__separator:"Group__separator--op6Xj","Group__separator--force":"Group__separator--force--xEXPB","Group--padding-s":"Group--padding-s--T4za1","Group--padding-m":"Group--padding-m--eq6yP","Group--inside-modal":"Group--inside-modal--Xhx9h","Group--sizeX-compact":"Group--sizeX-compact--I3zDP",Group__description:"Group__description--Xolzh","Group--ios":"Group--ios--ZeO5F"},o.Z=s},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/IconButton/IconButton.module.css":function(e,o,t){var n=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(n),i=t("../../node_modules/css-loader/dist/runtime/api.js"),s=t.n(i)()(r());s.push([e.id,".IconButton--PgPFw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-radius:9999px;box-shadow:none;color:currentColor;display:block;height:48px;margin:0;padding:0;position:relative}.IconButton--sizeY-compact--xpjui{height:44px}.IconButton--PgPFw[disabled]{opacity:.64;opacity:var(--vkui--opacity_disable_accessibility)}.IconButton--ios--fXtvM{border-radius:8px;border-radius:var(--vkui--size_border_radius--regular)}.IconButton--PgPFw .vkuiIcon--16{padding:16px}.IconButton--PgPFw .vkuiIcon--16.vkuiIcon--w-8{padding:16px 14px}.IconButton--sizeY-compact--xpjui .vkuiIcon--16,.IconButton--sizeY-compact--xpjui .vkuiIcon--16.vkuiIcon--w-8{padding:14px}.IconButton--PgPFw .vkuiIcon--24{padding:12px}.IconButton--sizeY-compact--xpjui .vkuiIcon--24{padding:10px}.IconButton--PgPFw .vkuiIcon--28{padding:10px}.IconButton--sizeY-compact--xpjui .vkuiIcon--28{padding:8px}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.IconButton--sizeY-none--_mhUD{height:44px}.IconButton--sizeY-none--_mhUD .vkuiIcon--16,.IconButton--sizeY-none--_mhUD .vkuiIcon--16.vkuiIcon--w-8{padding:14px}.IconButton--sizeY-none--_mhUD .vkuiIcon--24{padding:10px}.IconButton--sizeY-none--_mhUD .vkuiIcon--28{padding:8px}}.vkuiInternalFormField__after .IconButton--PgPFw,.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--PgPFw,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--PgPFw{align-content:center;align-items:center;border-radius:8px;border-radius:var(--vkui--size_border_radius--regular);display:flex;height:44px;height:var(--vkui--size_field_height--regular);justify-content:center;width:44px;width:var(--vkui--size_field_height--regular)}.vkuiInternalFormField__after .IconButton--PgPFw .vkuiIcon.vkuiIcon.vkuiIcon{padding:0}.vkuiInternalFormField__after .IconButton--sizeY-compact--xpjui{height:36px;height:var(--vkui--size_field_height--compact);width:36px;width:var(--vkui--size_field_height--compact)}.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--sizeY-compact--xpjui,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--sizeY-compact--xpjui{height:36px;height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.vkuiInternalFormField__after .IconButton--sizeY-none--_mhUD{height:36px;height:var(--vkui--size_field_height--compact);width:36px;width:var(--vkui--size_field_height--compact)}.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--sizeY-none--_mhUD,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--sizeY-none--_mhUD{height:36px;height:var(--vkui--size_field_height--compact)}}.vkuiInternalSimpleCell__after .IconButton--PgPFw:last-child{margin-right:-12px}.vkuiInternalSimpleCell--ios .vkuiInternalSimpleCell__after .IconButton--PgPFw:last-child{margin-right:-9px}",""]),s.locals={IconButton:"IconButton--PgPFw","IconButton--sizeY-compact":"IconButton--sizeY-compact--xpjui","IconButton--ios":"IconButton--ios--fXtvM","IconButton--sizeY-none":"IconButton--sizeY-none--_mhUD"},o.Z=s},"../../node_modules/mitt/dist/mitt.mjs":function(e,o,t){t.d(o,{Z:function(){return n}});function n(e){return{all:e=e||new Map,on:function(o,t){var n=e.get(o);n?n.push(t):e.set(o,[t])},off:function(o,t){var n=e.get(o);n&&(t?n.splice(n.indexOf(t)>>>0,1):e.set(o,[]))},emit:function(o,t){var n=e.get(o);n&&n.slice().map(function(e){e(t)}),(n=e.get("*"))&&n.slice().map(function(e){e(o,t)})}}}},"./src/components/SimpleCell/SimpleCell.stories.tsx":function(e,o,t){t.r(o),t.d(o,{Playground:function(){return _},default:function(){return h}});var n,r,i,s=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var a=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Verified","verified_12","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="verified_12"><path fill="currentColor" d="M4.5 9.586 2.957 8.043a1 1 0 0 0-1.414 1.414l2.25 2.25a1 1 0 0 0 1.414 0l5.25-5.25a1 1 0 0 0-1.414-1.414z" /></symbol>',16,16,!1,void 0),u=t("../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js"),d=t("./src/storybook/VKUIDecorators.tsx"),c=t("./src/storybook/constants.ts"),l=t("./src/components/Avatar/Avatar.tsx"),p=t("./src/components/Group/Group.tsx"),m=t("./src/components/IconButton/IconButton.tsx");function v(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(o){!function(e,o,t){o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t}(e,o,t[o])})}return e}function f(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t})(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}),e}var h={title:"Blocks/SimpleCell",component:t("./src/components/SimpleCell/SimpleCell.tsx").q,parameters:v({},c.tW,c.nB)},_={args:{children:"Игорь Фёдоров",before:(0,s.jsx)(l.q,{size:48,src:"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"}),badgeAfterTitle:(0,s.jsx)(a,{}),after:(0,s.jsx)(m.h,{children:(0,s.jsx)(u.C,{})}),subtitle:"Команда ВКонтакте"},decorators:[function(e,o){return(0,s.jsx)(p.Z,{children:(0,s.jsx)(e,v({},o.args))})},d.vO,d.Z0]};_.parameters=f(v({},_.parameters),{docs:f(v({},null===(n=_.parameters)||void 0===n?void 0:n.docs),{source:v({originalSource:"{\n  args: {\n    children: 'Игорь Фёдоров',\n    before: <Avatar size={48} src=\"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1\" />,\n    badgeAfterTitle: <Icon12Verified />,\n    after: <IconButton>\n        <Icon28MessageOutline />\n      </IconButton>,\n    subtitle: 'Команда ВКонтакте'\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}"},null===(i=_.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})})},"./src/components/Group/Group.tsx":function(e,o,t){t.d(o,{Z:function(){return X}});var n=t("../../node_modules/react/jsx-runtime.js"),r=t("../../node_modules/react/index.js"),i=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),s=t("./src/hooks/useAdaptivity.ts"),a=t("./src/hooks/usePlatform.ts"),u=t("./src/lib/adaptivity/constants.ts"),d=t("./src/lib/platform.ts"),c=t("./src/lib/warnOnce.ts"),l=t("./src/components/AppRoot/AppRootContext.ts"),p=t("./src/components/ModalRoot/ModalRootContext.tsx"),m=t("./src/components/RootComponent/RootComponent.tsx"),v=t("./src/components/Separator/Separator.tsx"),f=t("./src/components/Spacing/Spacing.tsx"),h=t("./src/components/Typography/Footnote/Footnote.tsx"),_=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=t.n(_),g=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),y=t.n(g),x=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),j=t.n(x),w=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),k=t.n(w),G=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=t.n(G),I=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Group/Group.module.css"),P={attributes:{class:"vkui-style"}};P.setAttributes=k(),P.insert=j().bind(null,"head"),P.domAPI=y(),P.insertStyleElement=O(),b()(I.Z,P);var z=I.Z&&I.Z.locals?I.Z.locals:void 0;function S(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var B=S({none:(0,i.AK)(z["Group--sizeX-none"],"vkuiInternalGroup--sizeX-none")},u.n$.COMPACT,z["Group--sizeX-compact"]),R={none:(0,i.AK)(z["Group--mode-none"],"vkuiInternalGroup--mode-none"),plain:(0,i.AK)(z["Group--mode-plain"],"vkuiInternalGroup--mode-plain"),card:(0,i.AK)(z["Group--mode-card"],"vkuiInternalGroup--mode-card")},E={s:z["Group--padding-s"],m:z["Group--padding-m"]};(0,c.O)("Group");var X=function(e){var o=e.header,t=e.description,c=e.children,_=e.separator,b=void 0===_?"auto":_,g=e.mode,y=e.padding,x=e.tabIndex,j=function(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["header","description","children","separator","mode","padding","tabIndex"]),w=r.useContext(p.E).isInsideModal,k=(0,a.F)(),G=(0,s.g)().sizeX,O=void 0===G?"none":G,I=function(e,o,t){var n=r.useContext(l.A).layout;return e||(t?"plain":n||("none"!==o?o===u.n$.REGULAR?"card":"plain":"none"))}(g,O,w),P="tabpanel"===j.role;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.U,function(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t})(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}),e}(function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(o){S(e,o,t[o])})}return e}({Component:"section"},j),{tabIndex:P&&void 0===x?0:x,baseClassName:(0,i.AK)("vkuiInternalGroup",z.Group,w&&z["Group--inside-modal"],k===d.t.IOS&&z["Group--ios"],O!==u.n$.REGULAR&&B[O],I&&R[I],E[void 0===y?"m":y]),children:[o,c,(0,i.p7)(t)&&(0,n.jsx)(h.w,{className:z.Group__description,children:t})]})),"hide"!==b&&(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(f.K,{className:(0,i.AK)(z.Group__separator,z["Group__separator--spacing"]),size:16}),(0,n.jsx)(v.Z,{className:(0,i.AK)(z.Group__separator,z["Group__separator--separator"],"show"===b&&z["Group__separator--force"])})]})]})};try{X.displayName="Group",X.__docgenInfo={description:"",displayName:"Group",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},separator:{defaultValue:{value:"auto"},description:"`show` - разделитель всегда показывается,\n`hide` - разделитель всегда спрятан,\n`auto` - разделитель рисуется автоматически между соседними группами.",name:"separator",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"show"'},{value:'"hide"'}]}},mode:{defaultValue:null,description:"Режим отображения. Если установлен `card`, выглядит как карточка c\nобводкой и внешними отступами. Если `plain` — без отступов и обводки.\nПо умолчанию режим отображения зависит от `sizeX` (`mode=card` при `sizeX=REGULAR` и `mode=plain` при `sizeX=COMPACT`)\nВ модальных окнах по умолчанию `plain`.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"card"'}]}},padding:{defaultValue:{value:"m"},description:"Отвечает за отступы вокруг контента в режиме `card`.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group/Group.tsx#Group"]={docgenInfo:X.__docgenInfo,name:"Group",path:"src/components/Group/Group.tsx#Group"})}catch(e){}},"./src/components/IconButton/IconButton.tsx":function(e,o,t){t.d(o,{h:function(){return O}});var n=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=t("./src/hooks/useAdaptivity.ts"),s=t("./src/hooks/usePlatform.ts"),a=t("./src/lib/adaptivity/constants.ts"),u=t("./src/lib/platform.ts"),d=t("./src/lib/warnOnce.ts"),c=t("./src/components/Tappable/Tappable.tsx"),l=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=t.n(l),m=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),v=t.n(m),f=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),h=t.n(f),_=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),b=t.n(_),g=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=t.n(g),x=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/IconButton/IconButton.module.css"),j={attributes:{class:"vkui-style"}};j.setAttributes=b(),j.insert=h().bind(null,"head"),j.domAPI=v(),j.insertStyleElement=y(),p()(x.Z,j);var w=x.Z&&x.Z.locals?x.Z.locals:void 0;function k(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var G=k({none:w["IconButton--sizeY-none"]},a.n$.COMPACT,w["IconButton--sizeY-compact"]);(0,d.O)("IconButton");var O=function(e){var o=e.children,t=e.className,d=function(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["children","className"]),l=(0,s.F)(),p=(0,i.g)().sizeY,m=void 0===p?"none":p;return(0,n.jsx)(c.KR,function(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t})(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}),e}(function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(o){k(e,o,t[o])})}return e}({activeEffectDelay:200,activeMode:"background",Component:d.href?"a":"button"},d),{className:(0,r.AK)(w.IconButton,m!==a.n$.REGULAR&&G[m],l===u.t.IOS&&w["IconButton--ios"],t),children:o}))};try{O.displayName="IconButton",O.__docgenInfo={description:"",displayName:"IconButton",props:{activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:O.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(e){}}}]);