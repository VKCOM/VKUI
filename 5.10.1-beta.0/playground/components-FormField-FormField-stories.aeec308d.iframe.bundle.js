"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6171],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":function(e,t,o){o.d(t,{_:function(){return n}});function n(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,o){o.d(t,{De:function(){return g}});var n,r=o("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=o("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),a=o("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),s=o("../../node_modules/react/index.js"),l=o("../../node_modules/@swc/helpers/esm/_class_call_check.js"),u=o("../../node_modules/@swc/helpers/esm/_create_class.js"),d=o("../../node_modules/@swc/helpers/esm/_define_property.js"),c=function(){function e(t){var o=t.content;(0,l._)(this,e),(0,d._)(this,"isMounted",!1),(0,d._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,o=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(o,!0):o}(o)}return(0,u._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var o=new e({content:""});return o.node=t,o}}]),e}(),m="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,d._)(this,"symbols",new Map),(0,d._)(this,"config",{attrs:{xmlns:m,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,d._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,u._)(e,[{key:"push",value:function(e){var t=this.symbols,o=t.has(e.id);return t.set(e.id,e),!o}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var o=c.createFromExistingNode(e);t.add(o)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(m,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),v=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(v){var f="__SVG_SPRITE_NODE__";n=new p({attrs:{id:f}});var h=function(){var e=document.getElementById(f);e?n.attach(e):n.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else n=null;var _=v?s.useLayoutEffect:s.useEffect,b=function(e){var t=e.width,o=void 0===t?0:t,n=e.height,l=void 0===n?0:n,u=e.viewBox,d=e.id,c=e.className,m=e.fill,p=e.getRootRef,v=e.style,f=e.title,h=e.children,_=(0,a._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),b=Math.max(o,l),g=(0,r._)({width:o,height:l},void 0===v?{}:v);return s.createElement("svg",(0,i._)((0,r._)({"aria-hidden":"true",display:"block"},_),{className:["vkuiIcon","vkuiIcon--".concat(b),"vkuiIcon--w-".concat(o),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(d),void 0===c?"":c].join(" ").trim(),viewBox:u,width:o,height:l,style:g,ref:p}),f&&s.createElement("title",null,f),s.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:m}},h))};function g(e,t,o,a,l,u,d,m){var p=function(){v||(!function(e){n&&n.add(e)}(new c({content:a})),v=!0)},v=!1,f=function(e){var t={};return function(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[o]||(console[n]("[@vkontakte/icons][".concat(e,"] ").concat(o)),t[o]=!0)}}(e),h=function(e){return _(p,[]),d&&f("Иконка устарела"+(m?". Замените на ".concat(m):"")),s.createElement(b,(0,i._)((0,r._)({},e),{viewBox:o,id:t,width:void 0===e.width||isNaN(e.width)?l:+e.width,height:void 0===e.height||isNaN(e.height)?u:+e.height}))};return h.mountIcon=p,h.displayName=e,h}},"../../node_modules/@vkontakte/icons/dist/es6/16/clear_16.js":function(e,t,o){o.d(t,{l:function(){return n}});var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Clear","clear_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="clear_16"><path fill-rule="evenodd" d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0ZM4.563 4.564a.9.9 0 0 0 0 1.272L6.727 8l-2.164 2.164a.9.9 0 1 0 1.273 1.272L8 9.273l2.164 2.163a.9.9 0 0 0 1.272-1.272L9.273 8l2.163-2.164a.9.9 0 1 0-1.272-1.272L8 6.727 5.836 4.564a.9.9 0 0 0-1.273 0Z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js":function(e,t,o){o.d(t,{C:function(){return n}});var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28MessageOutline","message_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="message_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 3.5c6.32 0 11.5 4.44 11.5 10s-5.18 10-11.5 10c-1.355 0-2.678-.204-3.924-.597-1.402 1.306-3.458 1.994-6.124 2.098a1.434 1.434 0 0 1-1.363-2.023c.911-2.015 1.413-3.498 1.514-4.379C3.062 17.073 2.5 15.323 2.5 13.5c0-5.56 5.18-10 11.5-10Zm0 2c-5.278 0-9.5 3.619-9.5 8 0 1.508.497 2.955 1.426 4.213a1 1 0 0 1 .196.598c-.004 1.047-.45 2.567-1.33 4.627 1.987-.208 3.388-.831 4.245-1.837a1 1 0 0 1 1.111-.287c1.202.45 2.506.686 3.852.686 5.278 0 9.5-3.619 9.5-8s-4.222-8-9.5-8Z" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/FormField/FormField.module.css":function(e,t,o){var n=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=o.n(n),i=o("../../node_modules/css-loader/dist/runtime/api.js"),a=o.n(i)()(r());a.push([e.id,".FormField--cV1je{-webkit-tap-highlight-color:transparent;align-items:center;border-radius:8px;border-radius:var(--vkui--size_border_radius--regular);box-sizing:border-box;display:flex;font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_family_base);isolation:isolate;min-height:44px;min-height:var(--vkui--size_field_height--regular);position:relative}.FormField--sizeY-compact--oV07Z{min-height:36px;min-height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX{min-height:36px;min-height:var(--vkui--size_field_height--compact)}}.FormField--cV1je>*{border-radius:inherit;z-index:1;z-index:var(--vkui_internal--z_index_form_field_element)}.FormField__after--a5xC5,.FormField__before--SmyZI{align-content:center;align-items:center;color:#99a2ad;color:var(--vkui--color_icon_secondary);display:flex;flex-shrink:0;height:100%;justify-content:center;min-width:44px;min-width:var(--vkui--size_field_height--regular);position:relative;z-index:6;z-index:var(--vkui_internal--z_index_form_field_side)}.FormField--sizeY-compact--oV07Z .FormField__after--a5xC5,.FormField--sizeY-compact--oV07Z .FormField__before--SmyZI{height:36px;height:var(--vkui--size_field_height--compact);min-width:36px;min-width:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX .FormField__after--a5xC5,.FormField--sizeY-none--xlzBX .FormField__before--SmyZI{height:36px;height:var(--vkui--size_field_height--compact);min-width:36px;min-width:var(--vkui--size_field_height--compact)}}.FormField__before--SmyZI{color:#2688eb;color:var(--vkui--color_icon_accent)}.FormField__after--a5xC5{color:#99a2ad;color:var(--vkui--color_icon_secondary)}.FormField__border--et6Lb{border:1px solid transparent;border:var(--vkui--size_border--regular) solid transparent;border-radius:inherit;box-sizing:border-box;height:100%;left:0;pointer-events:none;position:absolute;top:0;transform-origin:left top;width:100%;z-index:2;z-index:var(--vkui_internal--z_index_form_field_border)}.FormField--mode-default--sUDAK .FormField__border--et6Lb{border-color:rgba(0,0,0,.12);border-color:var(--vkui--color_field_border_alpha)}.FormField--mode-default--sUDAK{background-color:#f2f3f5;background-color:var(--vkui--color_field_background)}.FormField--status-error--MkLL5 .FormField__border--et6Lb,.vkuiInternalFormItem--status-error .FormField__border--et6Lb{border-color:#e64646;border-color:var(--vkui--color_stroke_negative);z-index:3;z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--status-error--MkLL5,.vkuiInternalFormItem--status-error .FormField--cV1je{background-color:#faebeb;background-color:var(--vkui--color_background_negative_tint)}.FormField--status-valid--dDam8 .FormField__border--et6Lb,.vkuiInternalFormItem--status-valid .FormField__border--et6Lb{border-color:#4bb34b;border-color:var(--vkui--color_stroke_positive);z-index:3;z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--disabled--qRxeX{cursor:default;opacity:.64;opacity:var(--vkui--opacity_disable_accessibility);pointer-events:none}.FormField--hover--zNrWU{background-color:#f2f3f5;background-color:var(--vkui--color_field_background)}.FormField--mode-default--sUDAK.FormField--hover--zNrWU .FormField__border--et6Lb{border-color:rgba(0,0,0,.24);border-color:var(--vkui--color_field_border_alpha--hover);z-index:4;z-index:var(--vkui_internal--z_index_form_field_border_hover)}.vkuiInternalModalCardBase__header+.FormField--cV1je,.vkuiInternalModalCardBase__subheader+.FormField--cV1je{margin-top:16px}.vkuiInternalNativeSelect .FormField__after--a5xC5{pointer-events:none}.vkuiInternalCalendarHeader__picker .FormField__after--a5xC5{min-width:12px;padding-right:8px}.vkuiInternalChipsInput .FormField__after--a5xC5{z-index:6;z-index:var(--vkui_internal--z_index_form_field_side)}.vkuiInternalFormLayoutGroup--segmented .FormField--cV1je{border-radius:0;isolation:auto;z-index:auto}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-bottom-left-radius:8px;border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-top-left-radius:8px;border-top-left-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-right-radius:8px;border-bottom-right-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:8px;border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-top-left-radius:8px;border-top-left-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:8px;border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-left-radius:8px;border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-bottom-right-radius:8px;border-bottom-right-radius:var(--vkui--size_border_radius--regular)}.FormField--focus-visible--_koel.FormField--focus-visible--_koel.FormField--focus-visible--_koel{outline:2px solid #2688eb;outline:var(--vkui_internal--outline);outline-offset:calc(-1 * 1px);outline-offset:calc(-1 * var(--vkui--size_border--regular));outline-width:1px;outline-width:var(--vkui--size_border--regular)}",""]),a.locals={FormField:"FormField--cV1je","FormField--sizeY-compact":"FormField--sizeY-compact--oV07Z","FormField--sizeY-none":"FormField--sizeY-none--xlzBX",FormField__after:"FormField__after--a5xC5",FormField__before:"FormField__before--SmyZI",FormField__border:"FormField__border--et6Lb","FormField--mode-default":"FormField--mode-default--sUDAK","FormField--status-error":"FormField--status-error--MkLL5","FormField--status-valid":"FormField--status-valid--dDam8","FormField--disabled":"FormField--disabled--qRxeX","FormField--hover":"FormField--hover--zNrWU","FormField--focus-visible":"FormField--focus-visible--_koel"},t.Z=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/IconButton/IconButton.module.css":function(e,t,o){var n=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=o.n(n),i=o("../../node_modules/css-loader/dist/runtime/api.js"),a=o.n(i)()(r());a.push([e.id,".IconButton--PgPFw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-radius:9999px;box-shadow:none;color:currentColor;display:block;height:48px;margin:0;padding:0;position:relative}.IconButton--sizeY-compact--xpjui{height:44px}.IconButton--PgPFw[disabled]{opacity:.64;opacity:var(--vkui--opacity_disable_accessibility)}.IconButton--ios--fXtvM{border-radius:8px;border-radius:var(--vkui--size_border_radius--regular)}.IconButton--PgPFw .vkuiIcon--16{padding:16px}.IconButton--PgPFw .vkuiIcon--16.vkuiIcon--w-8{padding:16px 14px}.IconButton--sizeY-compact--xpjui .vkuiIcon--16,.IconButton--sizeY-compact--xpjui .vkuiIcon--16.vkuiIcon--w-8{padding:14px}.IconButton--PgPFw .vkuiIcon--24{padding:12px}.IconButton--sizeY-compact--xpjui .vkuiIcon--24{padding:10px}.IconButton--PgPFw .vkuiIcon--28{padding:10px}.IconButton--sizeY-compact--xpjui .vkuiIcon--28{padding:8px}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.IconButton--sizeY-none--_mhUD{height:44px}.IconButton--sizeY-none--_mhUD .vkuiIcon--16,.IconButton--sizeY-none--_mhUD .vkuiIcon--16.vkuiIcon--w-8{padding:14px}.IconButton--sizeY-none--_mhUD .vkuiIcon--24{padding:10px}.IconButton--sizeY-none--_mhUD .vkuiIcon--28{padding:8px}}.vkuiInternalFormField__after .IconButton--PgPFw,.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--PgPFw,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--PgPFw{align-content:center;align-items:center;border-radius:8px;border-radius:var(--vkui--size_border_radius--regular);display:flex;height:44px;height:var(--vkui--size_field_height--regular);justify-content:center;width:44px;width:var(--vkui--size_field_height--regular)}.vkuiInternalFormField__after .IconButton--PgPFw .vkuiIcon.vkuiIcon.vkuiIcon{padding:0}.vkuiInternalFormField__after .IconButton--sizeY-compact--xpjui{height:36px;height:var(--vkui--size_field_height--compact);width:36px;width:var(--vkui--size_field_height--compact)}.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--sizeY-compact--xpjui,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--sizeY-compact--xpjui{height:36px;height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.vkuiInternalFormField__after .IconButton--sizeY-none--_mhUD{height:36px;height:var(--vkui--size_field_height--compact);width:36px;width:var(--vkui--size_field_height--compact)}.vkuiInternalFormItem--removable .vkuiInternalRemovable__content>.IconButton--sizeY-none--_mhUD,.vkuiInternalFormLayoutGroup--removable .vkuiInternalRemovable__content>.IconButton--sizeY-none--_mhUD{height:36px;height:var(--vkui--size_field_height--compact)}}.vkuiInternalSimpleCell__after .IconButton--PgPFw:last-child{margin-right:-12px}.vkuiInternalSimpleCell__after .IconButton--ios--fXtvM:last-child{margin-right:-9px}.vkuiInternalAlert__dismiss.IconButton--PgPFw{height:36px;padding:8px}",""]),a.locals={IconButton:"IconButton--PgPFw","IconButton--sizeY-compact":"IconButton--sizeY-compact--xpjui","IconButton--ios":"IconButton--ios--fXtvM","IconButton--sizeY-none":"IconButton--sizeY-none--_mhUD"},t.Z=a},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,o){o.d(t,{Z:function(){return n}});function n(e){return{all:e=e||new Map,on:function(t,o){var n=e.get(t);n?n.push(o):e.set(t,[o])},off:function(t,o){var n=e.get(t);n&&(o?n.splice(n.indexOf(o)>>>0,1):e.set(t,[]))},emit:function(t,o){var n=e.get(t);n&&n.slice().map(function(e){e(o)}),(n=e.get("*"))&&n.slice().map(function(e){e(t,o)})}}}},"./src/components/FormField/FormField.stories.tsx":function(e,t,o){o.r(t),o.d(t,{Playground:function(){return _}});var n,r,i,a=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var s=o("../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js"),l=o("../../node_modules/@vkontakte/icons/dist/es6/16/clear_16.js"),u=o("./src/storybook/VKUIDecorators.tsx"),d=o("./src/storybook/constants.ts"),c=o("./src/components/Group/Group.tsx"),m=o("./src/components/IconButton/IconButton.tsx"),p=o("./src/components/FormField/FormField.tsx");function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}var h={title:"Forms/FormField",component:p.W,parameters:v({},d.tW,d.nB)};t.default=h;var _={render:function(e){return(0,a.jsx)(p.W,f(v({},e),{children:(0,a.jsx)("input",{style:{position:"relative",display:"block",width:"100%",margin:0,paddingRight:12,paddingLeft:12,fontSize:16,lineHeight:"20px",textOverflow:"ellipsis",color:"#000",border:"none",background:"transparent"}})}))},args:{before:(0,a.jsx)(m.h,{children:(0,a.jsx)(s.C,{})}),after:(0,a.jsx)(m.h,{children:(0,a.jsx)(l.l,{})})},decorators:[function(e,t){return(0,a.jsx)(c.Z,{children:(0,a.jsx)(e,v({},t.args))})},u.vO,u.Z0]};_.parameters=f(v({},_.parameters),{docs:f(v({},null===(n=_.parameters)||void 0===n?void 0:n.docs),{source:v({originalSource:"{\n  render: args => <FormField {...args}>\n      <input style={{\n      position: 'relative',\n      display: 'block',\n      width: '100%',\n      margin: 0,\n      paddingRight: 12,\n      paddingLeft: 12,\n      fontSize: 16,\n      lineHeight: '20px',\n      textOverflow: 'ellipsis',\n      color: '#000',\n      border: 'none',\n      background: 'transparent'\n    }} />\n    </FormField>,\n  args: {\n    before: <IconButton>\n        <Icon28MessageOutline />\n      </IconButton>,\n    after: <IconButton>\n        <Icon16Clear />\n      </IconButton>\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}"},null===(i=_.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})})},"./src/components/FormField/FormField.tsx":function(e,t,o){o.d(t,{W:function(){return z}});var n=o("../../node_modules/react/jsx-runtime.js"),r=o("../../node_modules/react/index.js"),i=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=o("./src/hooks/useAdaptivity.ts"),s=o("./src/hooks/useExternRef.ts"),l=o("./src/hooks/useFocusVisibleClassName.ts"),u=o("./src/hooks/useFocusWithin.ts"),d=o("./src/lib/adaptivity/constants.ts"),c=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=o.n(c),p=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),v=o.n(p),f=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),h=o.n(f),_=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),b=o.n(_),g=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=o.n(g),F=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/FormField/FormField.module.css"),k={attributes:{class:"vkui-style"}};k.setAttributes=b(),k.insert=h().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=y(),m()(F.Z,k);var x=F.Z&&F.Z.locals?F.Z.locals:void 0;function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function j(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var w=j({none:x["FormField--sizeY-none"]},d.n$.COMPACT,x["FormField--sizeY-compact"]),O={error:x["FormField--status-error"],valid:x["FormField--status-valid"]},z=function(e){var t=e.Component,o=e.status,c=void 0===o?"default":o,m=e.children,p=e.getRootRef,v=e.before,f=e.after,h=e.disabled,_=e.mode,b=e.className,g=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["Component","status","children","getRootRef","before","after","disabled","mode","className"]),y=(0,s.Q)(p),F=(0,a.g)().sizeY,k=void 0===F?"none":F,z=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o,n,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return I(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.useState(!1),2),S=z[0],B=z[1],P=(0,u.L)(y),E=(0,l.a)({focusVisible:P,mode:x["FormField--focus-visible"]});return(0,n.jsxs)(void 0===t?"span":t,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){j(e,t,o[t])})}return e}({},g),{ref:y,onMouseEnter:function(e){e.stopPropagation(),B(!0)},onMouseLeave:function(e){e.stopPropagation(),B(!1)},className:(0,i.AK)(x.FormField,"default"===(void 0===_?"default":_)&&x["FormField--mode-default"],"default"!==c&&O[c],k!==d.n$.REGULAR&&w[k],h&&x["FormField--disabled"],!h&&S&&x["FormField--hover"],E,b),children:[v&&(0,n.jsx)("span",{className:x.FormField__before,children:v}),m,f&&(0,n.jsx)("span",{className:(0,i.AK)(x.FormField__after,"vkuiInternalFormField__after"),children:f}),(0,n.jsx)("span",{"aria-hidden":!0,className:x.FormField__border})]}))};try{z.displayName="FormField",z.__docgenInfo={description:"",displayName:"FormField",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:{value:"default"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:z.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(e){}},"./src/components/IconButton/IconButton.tsx":function(e,t,o){o.d(t,{h:function(){return w}});var n=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var r=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=o("./src/hooks/useAdaptivity.ts"),a=o("./src/hooks/usePlatform.ts"),s=o("./src/lib/adaptivity/constants.ts"),l=o("./src/lib/platform.ts"),u=o("./src/lib/warnOnce.ts"),d=o("./src/components/Tappable/Tappable.tsx"),c=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=o.n(c),p=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),v=o.n(p),f=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),h=o.n(f),_=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),b=o.n(_),g=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=o.n(g),F=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/IconButton/IconButton.module.css"),k={attributes:{class:"vkui-style"}};k.setAttributes=b(),k.insert=h().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=y(),m()(F.Z,k);var x=F.Z&&F.Z.locals?F.Z.locals:void 0;function I(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var j=I({none:x["IconButton--sizeY-none"]},s.n$.COMPACT,x["IconButton--sizeY-compact"]);(0,u.O)("IconButton");var w=function(e){var t=e.children,o=e.className,u=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,["children","className"]),c=(0,a.F)(),m=(0,i.g)().sizeY,p=void 0===m?"none":m;return(0,n.jsx)(d.KR,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){I(e,t,o[t])})}return e}({activeEffectDelay:200,activeMode:"background",Component:u.href?"a":"button"},u),{className:(0,r.AK)(x.IconButton,p!==s.n$.REGULAR&&j[p],c===l.t.IOS&&x["IconButton--ios"],o),children:t}))};try{w.displayName="IconButton",w.__docgenInfo={description:"",displayName:"IconButton",props:{activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:w.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(e){}},"./src/hooks/useFocusWithin.ts":function(e,t,o){o.d(t,{L:function(){return l}});var n=o("../../node_modules/react/index.js"),r=o("./src/lib/dom.tsx"),i=o("./src/lib/useIsomorphicLayoutEffect.ts"),a=o("./src/hooks/useGlobalEventListener.ts");function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function l(e){var t=(0,r.NG)().document,o=function(){return!!e.current&&!!t&&e.current.contains(t.activeElement)},l=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o,n,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return s(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n.useState(o),2),u=l[0],d=l[1],c=function(){var e=o();e!==u&&d(e)};return(0,i.L)(c,[]),(0,a.J)(t,"focus",c,{capture:!0}),(0,a.J)(t,"blur",c,{capture:!0}),u}}}]);