"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3859],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":function(e,t,r){r.d(t,{_:function(){return o}});function o(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,r){r.d(t,{De:function(){return y}});var o,n=r("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=r("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),l=r("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),a=r("../../node_modules/react/index.js"),s=r("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=r("../../node_modules/@swc/helpers/esm/_create_class.js"),u=r("../../node_modules/@swc/helpers/esm/_define_property.js"),c=function(){function e(t){var r=t.content;(0,s._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,r=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(r,!0):r}(r)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var r=new e({content:""});return r.node=t,r}}]),e}(),m="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:m,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var t=this.symbols,r=t.has(e.id);return t.set(e.id,e),!r}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var r=c.createFromExistingNode(e);t.add(r)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(m,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),f=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(f){var v="__SVG_SPRITE_NODE__";o=new p({attrs:{id:v}});var h=function(){var e=document.getElementById(v);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else o=null;var b=f?a.useLayoutEffect:a.useEffect,_=function(e){var t=e.width,r=void 0===t?0:t,o=e.height,s=void 0===o?0:o,d=e.viewBox,u=e.id,c=e.className,m=e.fill,p=e.getRootRef,f=e.style,v=e.title,h=e.children,b=(0,l._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),_=Math.max(r,s),y=(0,n._)({width:r,height:s},void 0===f?{}:f);return a.createElement("svg",(0,i._)((0,n._)({"aria-hidden":"true",display:"block"},b),{className:["vkuiIcon","vkuiIcon--".concat(_),"vkuiIcon--w-".concat(r),"vkuiIcon--h-".concat(s),"vkuiIcon--".concat(u),void 0===c?"":c].join(" ").trim(),viewBox:d,width:r,height:s,style:y,ref:p}),v&&a.createElement("title",null,v),a.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:m}},h))};function y(e,t,r,l,s,d,u,m){var p=function(){f||(!function(e){o&&o.add(e)}(new c({content:l})),f=!0)},f=!1,v=function(e){var t={};return function(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[r]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(r)),t[r]=!0)}}(e),h=function(e){return b(p,[]),u&&v("Иконка устарела"+(m?". Замените на ".concat(m):"")),a.createElement(_,(0,i._)((0,n._)({},e),{viewBox:r,id:t,width:void 0===e.width||isNaN(e.width)?s:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return h.mountIcon=p,h.displayName=e,h}},"../../node_modules/@vkontakte/icons/dist/es6/16/cancel_16.js":function(e,t,r){r.d(t,{Q:function(){return o}});var o=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Cancel","cancel_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="cancel_16"><path fill="currentColor" d="M12.736 3.264a.9.9 0 0 1 0 1.272L9.273 8l3.463 3.464a.9.9 0 0 1 .081 1.18l-.08.092a.9.9 0 0 1-1.273 0L8 9.273l-3.464 3.463a.9.9 0 0 1-1.272-1.272L6.727 8 3.264 4.536a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.272 0L8 6.727l3.464-3.463a.9.9 0 0 1 1.272 0Z" /></symbol>',16,16,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/ChipsInput/ChipsInput.module.css":function(e,t,r){var o=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=r.n(o),i=r("../../node_modules/css-loader/dist/runtime/api.js"),l=r.n(i)()(n());l.push([e.id,".ChipsInput--YcBqd{max-width:100%}",""]),l.locals={ChipsInput:"ChipsInput--YcBqd"},t.Z=l},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/FormField/FormField.module.css":function(e,t,r){var o=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=r.n(o),i=r("../../node_modules/css-loader/dist/runtime/api.js"),l=r.n(i)()(n());l.push([e.id,".FormField--cV1je{-webkit-tap-highlight-color:transparent;align-items:center;border-radius:8px;border-radius:var(--vkui--size_border_radius--regular);box-sizing:border-box;display:flex;font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_family_base);isolation:isolate;min-height:44px;min-height:var(--vkui--size_field_height--regular);position:relative}.FormField--sizeY-compact--oV07Z{min-height:36px;min-height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX{min-height:36px;min-height:var(--vkui--size_field_height--compact)}}.FormField--cV1je>*{border-radius:inherit;z-index:1;z-index:var(--vkui_internal--z_index_form_field_element)}.FormField__after--a5xC5,.FormField__before--SmyZI{align-content:center;align-items:center;color:#99a2ad;color:var(--vkui--color_icon_secondary);display:flex;flex-shrink:0;height:100%;justify-content:center;min-width:44px;min-width:var(--vkui--size_field_height--regular);position:relative;z-index:6;z-index:var(--vkui_internal--z_index_form_field_side)}.FormField--sizeY-compact--oV07Z .FormField__after--a5xC5,.FormField--sizeY-compact--oV07Z .FormField__before--SmyZI{height:36px;height:var(--vkui--size_field_height--compact);min-width:36px;min-width:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX .FormField__after--a5xC5,.FormField--sizeY-none--xlzBX .FormField__before--SmyZI{height:36px;height:var(--vkui--size_field_height--compact);min-width:36px;min-width:var(--vkui--size_field_height--compact)}}.FormField__before--SmyZI{color:#2688eb;color:var(--vkui--color_icon_accent)}.FormField__after--a5xC5{color:#99a2ad;color:var(--vkui--color_icon_secondary)}.FormField__border--et6Lb{border:1px solid transparent;border:var(--vkui--size_border--regular) solid transparent;border-radius:inherit;box-sizing:border-box;height:100%;left:0;pointer-events:none;position:absolute;top:0;transform-origin:left top;width:100%;z-index:2;z-index:var(--vkui_internal--z_index_form_field_border)}.FormField--mode-default--sUDAK .FormField__border--et6Lb{border-color:rgba(0,0,0,.12);border-color:var(--vkui--color_field_border_alpha)}.FormField--mode-default--sUDAK{background-color:#f2f3f5;background-color:var(--vkui--color_field_background)}.FormField--status-error--MkLL5 .FormField__border--et6Lb,.vkuiInternalFormItem--status-error .FormField__border--et6Lb{border-color:#e64646;border-color:var(--vkui--color_stroke_negative);z-index:3;z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--status-error--MkLL5,.vkuiInternalFormItem--status-error .FormField--cV1je{background-color:#faebeb;background-color:var(--vkui--color_background_negative_tint)}.FormField--status-valid--dDam8 .FormField__border--et6Lb,.vkuiInternalFormItem--status-valid .FormField__border--et6Lb{border-color:#4bb34b;border-color:var(--vkui--color_stroke_positive);z-index:3;z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--disabled--qRxeX{cursor:default;opacity:.64;opacity:var(--vkui--opacity_disable_accessibility);pointer-events:none}.FormField--hover--zNrWU{background-color:#f2f3f5;background-color:var(--vkui--color_field_background)}.FormField--mode-default--sUDAK.FormField--hover--zNrWU .FormField__border--et6Lb{border-color:rgba(0,0,0,.24);border-color:var(--vkui--color_field_border_alpha--hover);z-index:4;z-index:var(--vkui_internal--z_index_form_field_border_hover)}.vkuiInternalModalCardBase__header+.FormField--cV1je,.vkuiInternalModalCardBase__subheader+.FormField--cV1je{margin-top:16px}.vkuiInternalNativeSelect .FormField__after--a5xC5{pointer-events:none}.vkuiInternalCalendarHeader__picker .FormField__after--a5xC5{min-width:12px;padding-right:8px}.vkuiInternalChipsInput .FormField__after--a5xC5{z-index:6;z-index:var(--vkui_internal--z_index_form_field_side)}.vkuiInternalFormLayoutGroup--segmented .FormField--cV1je{border-radius:0;isolation:auto;z-index:auto}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-bottom-left-radius:8px;border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-top-left-radius:8px;border-top-left-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-right-radius:8px;border-bottom-right-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:8px;border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-top-left-radius:8px;border-top-left-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:8px;border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-left-radius:8px;border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-bottom-right-radius:8px;border-bottom-right-radius:var(--vkui--size_border_radius--regular)}.FormField--focus-visible--_koel.FormField--focus-visible--_koel.FormField--focus-visible--_koel{outline:2px solid #2688eb;outline:var(--vkui_internal--outline);outline-offset:calc(-1 * 1px);outline-offset:calc(-1 * var(--vkui--size_border--regular));outline-width:1px;outline-width:var(--vkui--size_border--regular)}",""]),l.locals={FormField:"FormField--cV1je","FormField--sizeY-compact":"FormField--sizeY-compact--oV07Z","FormField--sizeY-none":"FormField--sizeY-none--xlzBX",FormField__after:"FormField__after--a5xC5",FormField__before:"FormField__before--SmyZI",FormField__border:"FormField__border--et6Lb","FormField--mode-default":"FormField--mode-default--sUDAK","FormField--status-error":"FormField--status-error--MkLL5","FormField--status-valid":"FormField--status-valid--dDam8","FormField--disabled":"FormField--disabled--qRxeX","FormField--hover":"FormField--hover--zNrWU","FormField--focus-visible":"FormField--focus-visible--_koel"},t.Z=l},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,r){r.d(t,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(t,r){var o=e.get(t);o?o.push(r):e.set(t,[r])},off:function(t,r){var o=e.get(t);o&&(r?o.splice(o.indexOf(r)>>>0,1):e.set(t,[]))},emit:function(t,r){var o=e.get(t);o&&o.slice().map(function(e){e(r)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,r)})}}}},"./src/components/ChipsInput/ChipsInput.stories.tsx":function(e,t,r){r.r(t),r.d(t,{Playground:function(){return S},default:function(){return w}});var o,n,i,l=r("./src/storybook/constants.ts"),a=r("../../node_modules/react/jsx-runtime.js");r("../../node_modules/react/index.js");var s=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),d=r("./src/components/ChipsInputBase/ChipsInputBase.tsx"),u=r("./src/components/FormField/FormField.tsx"),c=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=r.n(c),p=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),f=r.n(p),v=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),h=r.n(v),b=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_=r.n(b),y=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=r.n(y),g=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/ChipsInput/ChipsInput.module.css"),k={attributes:{class:"vkui-style"}};k.setAttributes=_(),k.insert=h().bind(null,"head"),k.domAPI=f(),k.insertStyleElement=F(),m()(g.Z,k);var j=g.Z&&g.Z.locals?g.Z.locals:void 0,x=function(e){var t=e.style,r=e.className,o=e.getRootRef,n=e.before,i=e.after,l=e.status,c=e.mode,m=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["style","className","getRootRef","before","after","status","mode"]);return(0,a.jsx)(u.W,{getRootRef:o,className:(0,s.AK)(j.ChipsInput,"vkuiInternalChipsInput",r),style:t,disabled:m.disabled,before:n,after:i,role:"application","aria-disabled":m.disabled,"aria-readonly":m.readOnly,status:l,mode:c,children:(0,a.jsx)(d.J,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}({},m))})};try{x.displayName="ChipsInput",x.__docgenInfo={description:"",displayName:"ChipsInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Option[]"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((o: Option[]) => void)"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((e?: ChangeEvent<HTMLInputElement>) => void)"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"((o?: Option) => ChipValue)"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"((o?: Option) => string)"}},getNewOptionData:{defaultValue:null,description:"",name:"getNewOptionData",required:!1,type:{name:"((v?: ChipValue, l?: string) => Option) | undefined"}},renderChip:{defaultValue:null,description:"",name:"renderChip",required:!1,type:{name:"((props?: RenderChip<Option>) => ReactNode)"}},inputAriaLabel:{defaultValue:null,description:"",name:"inputAriaLabel",required:!1,type:{name:"string"}},addOnBlur:{defaultValue:null,description:"Добавляет значение в список на событие `onBlur`",name:"addOnBlur",required:!1,type:{name:"boolean"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChipsInput/ChipsInput.tsx#ChipsInput"]={docgenInfo:x.__docgenInfo,name:"ChipsInput",path:"src/components/ChipsInput/ChipsInput.tsx#ChipsInput"})}catch(e){}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])})}return e}function I(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var w={title:"Forms/ChipsInput",component:x,parameters:O({},l.tW,l.nB)},S={};S.parameters=I(O({},S.parameters),{docs:I(O({},null===(o=S.parameters)||void 0===o?void 0:o.docs),{source:O({originalSource:"{}"},null===(i=S.parameters)||void 0===i?void 0:null===(n=i.docs)||void 0===n?void 0:n.source)})})},"./src/components/FormField/FormField.tsx":function(e,t,r){r.d(t,{W:function(){return S}});var o=r("../../node_modules/react/jsx-runtime.js"),n=r("../../node_modules/react/index.js"),i=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),l=r("./src/hooks/useAdaptivity.ts"),a=r("./src/hooks/useExternRef.ts"),s=r("./src/hooks/useFocusVisibleClassName.ts"),d=r("./src/hooks/useFocusWithin.ts"),u=r("./src/lib/adaptivity/constants.ts"),c=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=r.n(c),p=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),f=r.n(p),v=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),h=r.n(v),b=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_=r.n(b),y=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=r.n(y),g=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/FormField/FormField.module.css"),k={attributes:{class:"vkui-style"}};k.setAttributes=_(),k.insert=h().bind(null,"head"),k.domAPI=f(),k.insertStyleElement=F(),m()(g.Z,k);var j=g.Z&&g.Z.locals?g.Z.locals:void 0;function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=O({none:j["FormField--sizeY-none"]},u.n$.COMPACT,j["FormField--sizeY-compact"]),w={error:j["FormField--status-error"],valid:j["FormField--status-valid"]},S=function(e){var t=e.Component,r=e.status,c=void 0===r?"default":r,m=e.children,p=e.getRootRef,f=e.before,v=e.after,h=e.disabled,b=e.mode,_=e.className,y=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["Component","status","children","getRootRef","before","after","disabled","mode","className"]),F=(0,a.Q)(p),g=(0,l.g)().sizeY,k=void 0===g?"none":g,S=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,o,n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n.useState(!1),2),C=S[0],z=S[1],E=(0,d.L)(F),V=(0,s.a)({focusVisible:E,mode:j["FormField--focus-visible"]});return(0,o.jsxs)(void 0===t?"span":t,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){O(e,t,r[t])})}return e}({},y),{ref:F,onMouseEnter:function(e){e.stopPropagation(),z(!0)},onMouseLeave:function(e){e.stopPropagation(),z(!1)},className:(0,i.AK)(j.FormField,"default"===(void 0===b?"default":b)&&j["FormField--mode-default"],"default"!==c&&w[c],k!==u.n$.REGULAR&&I[k],h&&j["FormField--disabled"],!h&&C&&j["FormField--hover"],V,_),children:[f&&(0,o.jsx)("span",{className:j.FormField__before,children:f}),m,v&&(0,o.jsx)("span",{className:(0,i.AK)(j.FormField__after,"vkuiInternalFormField__after"),children:v}),(0,o.jsx)("span",{"aria-hidden":!0,className:j.FormField__border})]}))};try{S.displayName="FormField",S.__docgenInfo={description:"",displayName:"FormField",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:{value:"default"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:S.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(e){}},"./src/hooks/useFocusWithin.ts":function(e,t,r){r.d(t,{L:function(){return s}});var o=r("../../node_modules/react/index.js"),n=r("./src/lib/dom.tsx"),i=r("./src/lib/useIsomorphicLayoutEffect.ts"),l=r("./src/hooks/useGlobalEventListener.ts");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function s(e){var t=(0,n.NG)().document,r=function(){return!!e.current&&!!t&&e.current.contains(t.activeElement)},s=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,o,n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o.useState(r),2),d=s[0],u=s[1],c=function(){var e=r();e!==d&&u(e)};return(0,i.L)(c,[]),(0,l.J)(t,"focus",c,{capture:!0}),(0,l.J)(t,"blur",c,{capture:!0}),d}}}]);