"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6606],{"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,o,r){r.d(o,{De:function(){return b}});var t,n=r("../../node_modules/@swc/helpers/esm/_object_spread.js");function i(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r})(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}),e}var s=r("../../node_modules/react/index.js"),a=r("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=r("../../node_modules/@swc/helpers/esm/_create_class.js"),p=r("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(o){var r=o.content;(0,a._)(this,e),(0,p._)(this,"isMounted",!1),(0,p._)(this,"node",void 0),this.node=function(e){var o=!!document.importNode,r=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return o?document.importNode(r,!0):r}(r)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(o){var r=new e({content:""});return r.node=o,r}}]),e}(),c="http://www.w3.org/2000/svg",l=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a._)(this,e),(0,p._)(this,"symbols",new Map),(0,p._)(this,"config",{attrs:{xmlns:c,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,p._)(this,"node",null),Object.assign(this.config.attrs,o.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var o=this.symbols,r=o.has(e.id);return o.set(e.id,e),!r}},{key:"add",value:function(e){var o=this.push(e);return this.node&&o&&e.mount(this.node),o}},{key:"attach",value:function(e){var o=this;this.node||(this.node=e,this.symbols.forEach(function(o){o.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var r=u.createFromExistingNode(e);o.add(r)}))}},{key:"mount",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),o&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(c,"svg");return Object.entries(this.config.attrs).forEach(function(o){return e.setAttribute(o[0],o[1])}),this.symbols.forEach(function(o){return e.appendChild(o.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),m=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(m){var f="__SVG_SPRITE_NODE__";t=new l({attrs:{id:f}});var _=function(){var e=document.getElementById(f);e?t.attach(e):t.mount(document.body),document.removeEventListener("DOMContentLoaded",_)};document.querySelector("body")?_():document.addEventListener("DOMContentLoaded",_)}else t=null;var h=m?s.useLayoutEffect:s.useEffect,v=function(e){var o=e.width,r=void 0===o?0:o,t=e.height,a=void 0===t?0:t,d=e.viewBox,p=e.id,u=e.className,c=e.fill,l=e.getRootRef,m=e.style,f=e.title,_=e.children,h=function(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),v=(0,n._)({width:r,height:a},void 0===m?{}:m);return s.createElement("svg",i((0,n._)({"aria-hidden":"true",display:"block"},h),{className:["vkuiIcon","vkuiIcon--".concat(Math.max(r,a)),"vkuiIcon--w-".concat(r),"vkuiIcon--h-".concat(a),"vkuiIcon--".concat(p),void 0===u?"":u].join(" ").trim(),viewBox:d,width:r,height:a,style:v,ref:l}),f&&s.createElement("title",null,f),s.createElement("use",{xlinkHref:"#".concat(p),style:{fill:"currentColor",color:c}},_))};function b(e,o,r,a,d,p,c,l){var m=function(){f||(!function(e){t&&t.add(e)}(new u({content:a})),f=!0)},f=!1,_=function(e){var o={};return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";o[r]||(console[t]("[@vkontakte/icons][".concat(e,"] ").concat(r)),o[r]=!0)}}(e),b=function(e){return h(m,[]),c&&_("Иконка устарела"+(l?". Замените на ".concat(l):"")),s.createElement(v,i((0,n._)({},e),{viewBox:r,id:o,width:void 0===e.width||isNaN(e.width)?d:+e.width,height:void 0===e.height||isNaN(e.height)?p:+e.height}))};return b.mountIcon=m,b.displayName=e,b}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":function(e,o,r){r.d(o,{r:function(){return t}});var t=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":function(e,o,r){r.d(o,{o:function(){return t}});var t=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/user_outline_28.js":function(e,o,r){r.d(o,{R:function(){return t}});var t=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28UserOutline","user_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 28 28" id="user_outline_28"><path fill-rule="evenodd" d="M14 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm-3.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm-6 13.475c0-4.109 4.415-6.475 9.5-6.475s9.5 2.366 9.5 6.475c0 2.135-.802 3.025-2.522 3.025H7.022c-1.72 0-2.522-.89-2.522-3.025Zm2 0c0-1.224.618-2.266 1.916-3.09C9.758 18.032 11.735 17.5 14 17.5c2.265 0 4.242.532 5.584 1.385 1.297.824 1.916 1.866 1.916 3.09 0 .417-.04.69-.085.859a.96.96 0 0 1-.042.127c-.06.016-.182.039-.395.039H7.022c-.213 0-.335-.023-.395-.039a.966.966 0 0 1-.042-.127c-.045-.168-.085-.442-.085-.86Z" clip-rule="evenodd" /></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Group/Group.module.css":function(e,o,r){var t=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=r.n(t),i=r("../../node_modules/css-loader/dist/runtime/api.js"),s=r.n(i)()(n());s.push([e.id,'.Group--xobVt{color:#000;color:var(--vkui--color_text_primary);padding-bottom:8px;padding-top:8px}.Group__separator--separator--ZKY_V,.Group__separator--spacing--FNhA3{display:none}.Group--mode-plain--KwMj9+*+.Group__separator--separator--ZKY_V{display:block}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+*+.Group__separator--separator--ZKY_V{display:block}}.Group--mode-card--fmlmp+.Group__separator--spacing--FNhA3{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--spacing--FNhA3{display:block}}.Group--xobVt:last-of-type~.Group__separator--op6Xj{display:none}.Group--mode-card--fmlmp:last-of-type+.Group__separator--spacing--FNhA3,.Group--xobVt:last-of-type~.Group__separator--force--xEXPB{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:last-of-type+.Group__separator--spacing--FNhA3{display:block}}.Group--mode-card--fmlmp.Group--padding-s--T4za1{padding:4px}.Group--mode-card--fmlmp.Group--padding-m--eq6yP{padding:8px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-s--T4za1,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-s--T4za1{padding:4px}.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-m--eq6yP,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-m--eq6yP{padding:8px}}.Group--sizeX-compact--I3zDP,.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp{padding-left:0;padding-right:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj,.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp{padding-left:0;padding-right:0}}.Group--mode-card--fmlmp{background:#fff;background:var(--vkui--color_background_content);border-radius:12px;border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8{background:#fff;background:var(--vkui--color_background_content);border-radius:12px;border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:first-of-type{border-radius:0 0 12px 12px;border-radius:0 0 var(--vkui--size_border_radius_paper--regular) var(--vkui--size_border_radius_paper--regular)}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:first-of-type{border-radius:0 0 12px 12px;border-radius:0 0 var(--vkui--size_border_radius_paper--regular) var(--vkui--size_border_radius_paper--regular)}}.Group--mode-card--fmlmp:before{border-radius:inherit;box-shadow:inset 0 0 0 1px #d7d8d9;box-shadow:inset 0 0 0 var(--vkui_internal--thin_border) var(--vkui--color_separator_primary);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:before{border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);box-shadow:inset 0 0 0 var(--vkui_internal--thin_border) var(--vkui--color_field_border_alpha);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:before{box-shadow:none}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:before{box-shadow:none}}.Group--mode-plain--KwMj9+.Group__separator--op6Xj,.Group--mode-plain--KwMj9+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}}.Group__description--Xolzh{color:#818c99;color:var(--vkui--color_text_secondary);display:block;padding:4px 16px 16px}.Group--xobVt .Group--xobVt,.Group--xobVt .Group--xobVt+.Group__separator--op6Xj{padding-left:0;padding-right:0}.Group--xobVt .Group--xobVt:first-of-type{padding-top:0}.Group--xobVt .Group--xobVt:last-of-type{padding-bottom:0}.Group--ios--ZeO5F .Group__description--Xolzh{padding:4px 12px 16px}.vkuiInternalPanelHeader--vkcom+* .Group--xobVt:first-of-type,.vkuiInternalPanelHeader--vkcom~.Group--xobVt:first-of-type{border-top-left-radius:0;border-top-right-radius:0;position:relative;top:-1px}',""]),s.locals={Group:"Group--xobVt","Group__separator--separator":"Group__separator--separator--ZKY_V","Group__separator--spacing":"Group__separator--spacing--FNhA3","Group--mode-plain":"Group--mode-plain--KwMj9","Group--sizeX-none":"Group--sizeX-none--_sXRj","Group--mode-none":"Group--mode-none--OYdt8","Group--mode-card":"Group--mode-card--fmlmp",Group__separator:"Group__separator--op6Xj","Group__separator--force":"Group__separator--force--xEXPB","Group--padding-s":"Group--padding-s--T4za1","Group--padding-m":"Group--padding-m--eq6yP","Group--inside-modal":"Group--inside-modal--Xhx9h","Group--sizeX-compact":"Group--sizeX-compact--I3zDP",Group__description:"Group__description--Xolzh","Group--ios":"Group--ios--ZeO5F"},o.Z=s},"../../node_modules/mitt/dist/mitt.mjs":function(e,o,r){r.d(o,{Z:function(){return t}});function t(e){return{all:e=e||new Map,on:function(o,r){var t=e.get(o);t?t.push(r):e.set(o,[r])},off:function(o,r){var t=e.get(o);t&&(r?t.splice(t.indexOf(r)>>>0,1):e.set(o,[]))},emit:function(o,r){var t=e.get(o);t&&t.slice().map(function(e){e(r)}),(t=e.get("*"))&&t.slice().map(function(e){e(o,r)})}}}},"./src/components/Spacing/Spacing.stories.tsx":function(e,o,r){r.r(o),r.d(o,{Example:function(){return g},Playground:function(){return b},default:function(){return v}});var t,n,i,s,a,d,p=r("../../node_modules/react/jsx-runtime.js");r("../../node_modules/react/index.js");var u=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28BlockOutline","block_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="block_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M20.329 21.743 6.257 7.67A9.959 9.959 0 0 0 4 14c0 5.523 4.477 10 10 10a9.959 9.959 0 0 0 6.329-2.257Zm1.414-1.414A9.959 9.959 0 0 0 24 14c0-5.523-4.477-10-10-10a9.959 9.959 0 0 0-6.329 2.257L21.743 20.33ZM14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12Z" /></g></symbol>',28,28,!1,void 0),c=r("../../node_modules/@vkontakte/icons/dist/es6/28/user_outline_28.js"),l=r("./src/storybook/constants.ts"),m=r("./src/components/Group/Group.tsx"),f=r("./src/components/SimpleCell/SimpleCell.tsx");function _(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(o){!function(e,o,r){o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r}(e,o,r[o])})}return e}function h(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r})(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}),e}var v={title:"Blocks/Spacing",component:r("./src/components/Spacing/Spacing.tsx").K,parameters:_({},l.tW,l.nB)},b={decorators:[function(e){return(0,p.jsxs)("div",{children:["Before Space",(0,p.jsx)(e,{}),"After Space"]})}]},g=h(_({},b),{decorators:[function(e){return(0,p.jsxs)(m.Z,{children:[(0,p.jsx)(f.q,{before:(0,p.jsx)(u,{}),children:"Не беспокоить"}),(0,p.jsx)(e,{}),(0,p.jsx)(f.q,{before:(0,p.jsx)(c.R,{}),children:"Учётная запись"})]})}]});b.parameters=h(_({},b.parameters),{docs:h(_({},null===(t=b.parameters)||void 0===t?void 0:t.docs),{source:_({originalSource:"{\n  decorators: [Component => <div>\n        Before Space\n        <Component />\n        After Space\n      </div>]\n}"},null===(i=b.parameters)||void 0===i?void 0:null===(n=i.docs)||void 0===n?void 0:n.source)})}),g.parameters=h(_({},g.parameters),{docs:h(_({},null===(s=g.parameters)||void 0===s?void 0:s.docs),{source:_({originalSource:"{\n  ...Playground,\n  decorators: [Component => <Group>\n        <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>\n        <Component />\n        <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>\n      </Group>]\n}"},null===(d=g.parameters)||void 0===d?void 0:null===(a=d.docs)||void 0===a?void 0:a.source)})})},"./src/components/Group/Group.tsx":function(e,o,r){r.d(o,{Z:function(){return I}});var t=r("../../node_modules/react/jsx-runtime.js"),n=r("../../node_modules/react/index.js"),i=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),s=r("./src/hooks/useAdaptivity.ts"),a=r("./src/hooks/usePlatform.ts"),d=r("./src/lib/adaptivity/constants.ts"),p=r("./src/lib/platform.ts"),u=r("./src/lib/warnOnce.ts"),c=r("./src/components/AppRoot/AppRootContext.ts"),l=r("./src/components/ModalRoot/ModalRootContext.tsx"),m=r("./src/components/RootComponent/RootComponent.tsx"),f=r("./src/components/Separator/Separator.tsx"),_=r("./src/components/Spacing/Spacing.tsx"),h=r("./src/components/Typography/Footnote/Footnote.tsx"),v=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=r.n(v),g=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),G=r.n(g),y=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),x=r.n(y),j=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),w=r.n(j),O=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),k=r.n(O),X=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Group/Group.module.css"),S={attributes:{class:"vkui-style"}};S.setAttributes=w(),S.insert=x().bind(null,"head"),S.domAPI=G(),S.insertStyleElement=k(),b()(X.Z,S);var P=X.Z&&X.Z.locals?X.Z.locals:void 0;function z(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}var R=z({none:(0,i.AK)(P["Group--sizeX-none"],"vkuiInternalGroup--sizeX-none")},d.n$.COMPACT,P["Group--sizeX-compact"]),C={none:(0,i.AK)(P["Group--mode-none"],"vkuiInternalGroup--mode-none"),plain:(0,i.AK)(P["Group--mode-plain"],"vkuiInternalGroup--mode-plain"),card:(0,i.AK)(P["Group--mode-card"],"vkuiInternalGroup--mode-card")},E={s:P["Group--padding-s"],m:P["Group--padding-m"]};(0,u.O)("Group");var I=function(e){var o=e.header,r=e.description,u=e.children,v=e.separator,b=void 0===v?"auto":v,g=e.mode,G=e.padding,y=e.tabIndex,x=function(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["header","description","children","separator","mode","padding","tabIndex"]),j=n.useContext(l.E).isInsideModal,w=(0,a.F)(),O=(0,s.g)().sizeX,k=void 0===O?"none":O,X=function(e,o,r){var t=n.useContext(c.A).layout;return e||(r?"plain":t||("none"!==o?o===d.n$.REGULAR?"card":"plain":"none"))}(g,k,j),S="tabpanel"===x.role;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m.U,function(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r})(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}),e}(function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(o){z(e,o,r[o])})}return e}({Component:"section"},x),{tabIndex:S&&void 0===y?0:y,baseClassName:(0,i.AK)("vkuiInternalGroup",P.Group,j&&P["Group--inside-modal"],w===p.t.IOS&&P["Group--ios"],k!==d.n$.REGULAR&&R[k],X&&C[X],E[void 0===G?"m":G]),children:[o,u,(0,i.p7)(r)&&(0,t.jsx)(h.w,{className:P.Group__description,children:r})]})),"hide"!==b&&(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)(_.K,{className:(0,i.AK)(P.Group__separator,P["Group__separator--spacing"]),size:16}),(0,t.jsx)(f.Z,{className:(0,i.AK)(P.Group__separator,P["Group__separator--separator"],"show"===b&&P["Group__separator--force"])})]})]})};try{I.displayName="Group",I.__docgenInfo={description:"",displayName:"Group",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},separator:{defaultValue:{value:"auto"},description:"`show` - разделитель всегда показывается,\n`hide` - разделитель всегда спрятан,\n`auto` - разделитель рисуется автоматически между соседними группами.",name:"separator",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"show"'},{value:'"hide"'}]}},mode:{defaultValue:null,description:"Режим отображения. Если установлен `card`, выглядит как карточка c\nобводкой и внешними отступами. Если `plain` — без отступов и обводки.\nПо умолчанию режим отображения зависит от `sizeX` (`mode=card` при `sizeX=REGULAR` и `mode=plain` при `sizeX=COMPACT`)\nВ модальных окнах по умолчанию `plain`.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"card"'}]}},padding:{defaultValue:{value:"m"},description:"Отвечает за отступы вокруг контента в режиме `card`.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group/Group.tsx#Group"]={docgenInfo:I.__docgenInfo,name:"Group",path:"src/components/Group/Group.tsx#Group"})}catch(e){}}}]);