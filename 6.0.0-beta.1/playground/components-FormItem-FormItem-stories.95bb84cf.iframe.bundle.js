"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5961,9495],{"./src/components/FormItem/FormItem.stories.tsx":(e,t,o)=>{o.r(t),o.d(t,{Playground:()=>v,WithInputField:()=>h,__namedExportsOrder:()=>_,default:()=>f});var r,n,i,s,a,l,u=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var d=o("./src/storybook/constants.ts"),c=o("./src/components/Input/Input.tsx");function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}let f={title:"Forms/FormItem",component:o("./src/components/FormItem/FormItem.tsx").x,parameters:m({},d.tW,d.nB)};var v={args:{top:"Top form item",bottom:"Bottom form item",children:"Form Item"}},h=p(m({},v),{args:{top:"Пароль",htmlFor:"password",children:(0,u.jsx)(c.I,{id:"password",type:"password",placeholder:"Введите пароль"})}});v.parameters=p(m({},v.parameters),{docs:p(m({},null===(r=v.parameters)||void 0===r?void 0:r.docs),{source:m({originalSource:"{\n  args: {\n    top: 'Top form item',\n    bottom: 'Bottom form item',\n    children: 'Form Item'\n  }\n}"},null===(i=v.parameters)||void 0===i?void 0:null===(n=i.docs)||void 0===n?void 0:n.source)})}),h.parameters=p(m({},h.parameters),{docs:p(m({},null===(s=h.parameters)||void 0===s?void 0:s.docs),{source:m({originalSource:'{\n  ...Playground,\n  args: {\n    top: \'Пароль\',\n    htmlFor: \'password\',\n    children: <Input id="password" type="password" placeholder="Введите пароль" />\n  }\n}'},null===(l=h.parameters)||void 0===l?void 0:null===(a=l.docs)||void 0===a?void 0:a.source)})});let _=["Playground","WithInputField"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,o)=>{o.d(t,{_:()=>r});function r(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,o)=>{o.d(t,{De:()=>y});var r,n=o("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=o("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),s=o("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),a=o("../../node_modules/react/index.js"),l=o("../../node_modules/@swc/helpers/esm/_class_call_check.js"),u=o("../../node_modules/@swc/helpers/esm/_create_class.js"),d=o("../../node_modules/@swc/helpers/esm/_define_property.js"),c=function(){function e(t){var o=t.content;(0,l._)(this,e),(0,d._)(this,"isMounted",!1),(0,d._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,o=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(o,!0):o}(o)}return(0,u._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var o=new e({content:""});return o.node=t,o}}]),e}(),m="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,d._)(this,"symbols",new Map),(0,d._)(this,"config",{attrs:{xmlns:m,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,d._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,u._)(e,[{key:"push",value:function(e){var t=this.symbols,o=t.has(e.id);return t.set(e.id,e),!o}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var o=c.createFromExistingNode(e);t.add(o)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(m,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),f=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(f){var v="__SVG_SPRITE_NODE__";r=new p({attrs:{id:v}});var h=function(){var e=document.getElementById(v);e?r.attach(e):r.mount(document.body),document.removeEventListener("DOMContentLoaded",h)};document.querySelector("body")?h():document.addEventListener("DOMContentLoaded",h)}else r=null;var _=f?a.useLayoutEffect:a.useEffect,b=function(e){var t=e.width,o=void 0===t?0:t,r=e.height,l=void 0===r?0:r,u=e.viewBox,d=e.id,c=e.className,m=e.fill,p=e.getRootRef,f=e.style,v=e.title,h=e.children,_=(0,s._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),b=Math.max(o,l),y=(0,n._)({width:o,height:l},void 0===f?{}:f);return a.createElement("svg",(0,i._)((0,n._)({"aria-hidden":"true",display:"block"},_),{className:["vkuiIcon","vkuiIcon--".concat(b),"vkuiIcon--w-".concat(o),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(d),void 0===c?"":c].join(" ").trim(),viewBox:u,width:o,height:l,style:y,ref:p}),v&&a.createElement("title",null,v),a.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:m}},h))};function y(e,t,o,s,l,u,d,m){var p=function(){f||(!function(e){r&&r.add(e)}(new c({content:s})),f=!0)},f=!1,v=function(e){var t={};return function(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[o]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(o)),t[o]=!0)}}(e),h=function(e){return _(p,[]),d&&v("Иконка устарела"+(m?". Замените на ".concat(m):"")),a.createElement(b,(0,i._)((0,n._)({},e),{viewBox:o,id:t,width:void 0===e.width||isNaN(e.width)?l:+e.width,height:void 0===e.height||isNaN(e.height)?u:+e.height}))};return h.mountIcon=p,h.displayName=e,h}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/FormField/FormField.module.css":(e,t,o)=>{o.d(t,{Z:()=>a});var r=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(r),i=o("../../node_modules/css-loader/dist/runtime/api.js"),s=o.n(i)()(n());s.push([e.id,".FormField--cV1je{-webkit-tap-highlight-color:transparent;align-items:center;border-radius:var(--vkui--size_border_radius--regular);box-sizing:border-box;display:flex;font-family:var(--vkui--font_family_base);isolation:isolate;min-height:var(--vkui--size_field_height--regular);position:relative}.FormField--sizeY-compact--oV07Z{min-height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX{min-height:var(--vkui--size_field_height--compact)}}.FormField--cV1je>*{border-radius:inherit;z-index:var(--vkui_internal--z_index_form_field_element)}.FormField__after--a5xC5,.FormField__before--SmyZI{align-content:center;align-items:center;color:var(--vkui--color_icon_secondary);display:flex;flex-shrink:0;height:100%;justify-content:center;min-width:var(--vkui--size_field_height--regular);position:relative;z-index:var(--vkui_internal--z_index_form_field_side)}.FormField--sizeY-compact--oV07Z .FormField__after--a5xC5,.FormField--sizeY-compact--oV07Z .FormField__before--SmyZI{height:var(--vkui--size_field_height--compact);min-width:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX .FormField__after--a5xC5,.FormField--sizeY-none--xlzBX .FormField__before--SmyZI{height:var(--vkui--size_field_height--compact);min-width:var(--vkui--size_field_height--compact)}}.FormField__before--SmyZI{color:var(--vkui--color_icon_accent)}.FormField__after--a5xC5{color:var(--vkui--color_icon_secondary)}.FormField__border--et6Lb{border:var(--vkui--size_border--regular) solid transparent;border-radius:inherit;box-sizing:border-box;height:100%;left:0;pointer-events:none;position:absolute;top:0;transform-origin:left top;width:100%;z-index:var(--vkui_internal--z_index_form_field_border)}.FormField--mode-default--sUDAK .FormField__border--et6Lb{border-color:var(--vkui--color_field_border_alpha)}.FormField--mode-default--sUDAK{background-color:var(--vkui--color_field_background)}.FormField--status-error--MkLL5 .FormField__border--et6Lb,.vkuiInternalFormItem--status-error .FormField__border--et6Lb{border-color:var(--vkui--color_stroke_negative);z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--status-error--MkLL5,.vkuiInternalFormItem--status-error .FormField--cV1je{background-color:var(--vkui--color_background_negative_tint)}.FormField--status-valid--dDam8 .FormField__border--et6Lb,.vkuiInternalFormItem--status-valid .FormField__border--et6Lb{border-color:var(--vkui--color_stroke_positive);z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--disabled--qRxeX{cursor:default;opacity:var(--vkui--opacity_disable_accessibility);pointer-events:none}.FormField--hover--zNrWU{background-color:var(--vkui--color_field_background)}.FormField--mode-default--sUDAK.FormField--hover--zNrWU .FormField__border--et6Lb{border-color:var(--vkui--color_field_border_alpha--hover);z-index:var(--vkui_internal--z_index_form_field_border_hover)}.vkuiInternalModalCardBase__header+.FormField--cV1je,.vkuiInternalModalCardBase__subheader+.FormField--cV1je{margin-top:16px}.vkuiInternalNativeSelect .FormField__after--a5xC5{pointer-events:none}.vkuiInternalCalendarHeader__picker .FormField__after--a5xC5{min-width:12px;padding-right:8px}.vkuiInternalFormLayoutGroup--segmented .FormField--cV1je{border-radius:0;isolation:auto;z-index:auto}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-top-left-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-right-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-top-left-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-bottom-right-radius:var(--vkui--size_border_radius--regular)}.FormField--focus-visible--_koel.FormField--focus-visible--_koel.FormField--focus-visible--_koel{outline:var(--vkui_internal--outline);outline-offset:calc(-1 * var(--vkui--size_border--regular));outline-width:var(--vkui--size_border--regular)}",""]),s.locals={FormField:"FormField--cV1je","FormField--sizeY-compact":"FormField--sizeY-compact--oV07Z","FormField--sizeY-none":"FormField--sizeY-none--xlzBX",FormField__after:"FormField__after--a5xC5",FormField__before:"FormField__before--SmyZI",FormField__border:"FormField__border--et6Lb","FormField--mode-default":"FormField--mode-default--sUDAK","FormField--status-error":"FormField--status-error--MkLL5","FormField--status-valid":"FormField--status-valid--dDam8","FormField--disabled":"FormField--disabled--qRxeX","FormField--hover":"FormField--hover--zNrWU","FormField--focus-visible":"FormField--focus-visible--_koel"};let a=s},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Input/Input.module.css":(e,t,o)=>{o.d(t,{Z:()=>a});var r=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(r),i=o("../../node_modules/css-loader/dist/runtime/api.js"),s=o.n(i)()(n());s.push([e.id,".Input--dNCUO{font-size:16px;line-height:20px;position:relative}.Input--align-center--hN4kQ .Input__el--rGYHX{text-align:center}.Input--align-right--uv_jo .Input__el--rGYHX{text-align:right}.Input__el--rGYHX{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;border-radius:inherit;box-shadow:none;box-sizing:border-box;color:var(--vkui--color_text_primary);height:var(--vkui--size_field_height--regular);margin:0;padding:0 12px;position:relative;width:100%;z-index:var(--vkui_internal--z_index_form_field_element)}.Input__el--rGYHX::-webkit-inner-spin-button,.Input__el--rGYHX::-webkit-outer-spin-button{-webkit-appearance:none}.Input__el--rGYHX[type=number]{-moz-appearance:textfield}.Input--sizeY-compact--UuBh9 .Input__el--rGYHX{height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Input--sizeY-none--RZSHl .Input__el--rGYHX{height:var(--vkui--size_field_height--compact)}}.Input--hasBefore--EFXhx .Input__el--rGYHX{padding-left:0}.Input--hasAfter--D_w4r .Input__el--rGYHX{padding-right:0}.Input__el--rGYHX:disabled{opacity:var(--vkui--opacity_disable_accessibility)}.Input__el--rGYHX::-ms-input-placeholder{color:var(--vkui--color_text_secondary);opacity:1}.Input__el--rGYHX::placeholder{color:var(--vkui--color_text_secondary);opacity:1}.Input__el--rGYHX:disabled::-ms-input-placeholder{color:var(--vkui--color_text_secondary)}.Input__el--rGYHX:disabled::placeholder{color:var(--vkui--color_text_secondary)}",""]),s.locals={Input:"Input--dNCUO","Input--align-center":"Input--align-center--hN4kQ",Input__el:"Input__el--rGYHX","Input--align-right":"Input--align-right--uv_jo","Input--sizeY-compact":"Input--sizeY-compact--UuBh9","Input--sizeY-none":"Input--sizeY-none--RZSHl","Input--hasBefore":"Input--hasBefore--EFXhx","Input--hasAfter":"Input--hasAfter--D_w4r"};let a=s},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css":(e,t,o)=>{o.d(t,{Z:()=>a});var r=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(r),i=o("../../node_modules/css-loader/dist/runtime/api.js"),s=o.n(i)()(n());s.push([e.id,".Footnote--TsLLT{font-family:var(--vkui--font_footnote--font_family--regular);font-size:var(--vkui--font_footnote--font_size--regular);font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),s.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"};let a=s},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Subhead/Subhead.module.css":(e,t,o)=>{o.d(t,{Z:()=>a});var r=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(r),i=o("../../node_modules/css-loader/dist/runtime/api.js"),s=o.n(i)()(n());s.push([e.id,".Subhead--aLKgN{font-family:var(--vkui--font_subhead--font_family--regular);font-size:var(--vkui--font_subhead--font_size--regular);font-weight:var(--vkui--font_subhead--font_weight--regular);line-height:var(--vkui--font_subhead--line_height--regular)}.Subhead--sizeY-compact--bY5aX{font-size:var(--vkui--font_subhead--font_size--compact);line-height:var(--vkui--font_subhead--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Subhead--sizeY-none--zWIAB{font-size:var(--vkui--font_subhead--font_size--compact);line-height:var(--vkui--font_subhead--line_height--compact)}}",""]),s.locals={Subhead:"Subhead--aLKgN","Subhead--sizeY-compact":"Subhead--sizeY-compact--bY5aX","Subhead--sizeY-none":"Subhead--sizeY-none--zWIAB"};let a=s},"./src/components/FormField/FormField.tsx":(e,t,o)=>{o.d(t,{W:()=>x});var r=o("../../node_modules/react/jsx-runtime.js"),n=o("../../node_modules/react/index.js"),i=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),s=o("./src/hooks/useAdaptivity.ts"),a=o("./src/hooks/useExternRef.ts"),l=o("./src/hooks/useFocusVisibleClassName.ts"),u=o("./src/hooks/useFocusWithin.ts"),d=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=o.n(d),m=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),p=o.n(m),f=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),v=o.n(f),h=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_=o.n(h),b=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=o.n(b),g=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/FormField/FormField.module.css"),F={attributes:{class:"vkui-style"}};F.setAttributes=_(),F.insert=v().bind(null,"head"),F.domAPI=p(),F.insertStyleElement=y(),c()(g.Z,F);let j=g.Z&&g.Z.locals?g.Z.locals:void 0;function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}function I(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var O=I({none:j["FormField--sizeY-none"]},"compact",j["FormField--sizeY-compact"]),S={error:j["FormField--status-error"],valid:j["FormField--status-valid"]},x=function(e){var t=e.Component,o=e.status,d=void 0===o?"default":o,c=e.children,m=e.getRootRef,p=e.before,f=e.after,v=e.disabled,h=e.mode,_=e.className,b=function(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["Component","status","children","getRootRef","before","after","disabled","mode","className"]),y=(0,a.Q)(m),g=(0,s.g)().sizeY,F=void 0===g?"none":g,x=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o,r,n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return k(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n.useState(!1),2),w=x[0],z=x[1],E=(0,u.L)(y),A=(0,l.a)({focusVisible:E,mode:j["FormField--focus-visible"]});return(0,r.jsxs)(void 0===t?"span":t,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){I(e,t,o[t])})}return e}({},b),{ref:y,onMouseEnter:function(e){e.stopPropagation(),z(!0)},onMouseLeave:function(e){e.stopPropagation(),z(!1)},className:(0,i.AK)(j.FormField,"default"===(void 0===h?"default":h)&&j["FormField--mode-default"],"default"!==d&&S[d],"regular"!==F&&O[F],v&&j["FormField--disabled"],!v&&w&&j["FormField--hover"],A,_),children:[p&&(0,r.jsx)("span",{className:j.FormField__before,children:p}),c,f&&(0,r.jsx)("span",{className:(0,i.AK)(j.FormField__after,"vkuiInternalFormField__after"),children:f}),(0,r.jsx)("span",{"aria-hidden":!0,className:j.FormField__border})]}))};try{x.displayName="FormField",x.__docgenInfo={description:"",displayName:"FormField",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:{value:"default"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:x.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(e){}},"./src/components/Input/Input.tsx":(e,t,o)=>{o.d(t,{I:()=>k});var r=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var n=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=o("./src/hooks/useAdaptivity.ts"),s=o("./src/components/FormField/FormField.tsx"),a=o("./src/components/Typography/Text/Text.tsx"),l=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=o.n(l),d=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),c=o.n(d),m=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),p=o.n(m),f=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),v=o.n(f),h=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=o.n(h),b=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Input/Input.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=v(),y.insert=p().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=_(),u()(b.Z,y);let g=b.Z&&b.Z.locals?b.Z.locals:void 0;function F(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var j=F({none:g["Input--sizeY-none"]},"compact",g["Input--sizeY-compact"]),k=function(e){var t=e.type,o=e.align,l=void 0===o?"left":o,u=e.getRef,d=e.className,c=e.getRootRef,m=e.style,p=e.before,f=e.after,v=e.status,h=e.mode,_=function(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["type","align","getRef","className","getRootRef","style","before","after","status","mode"]),b=(0,i.g)().sizeY,y=void 0===b?"none":b;return(0,r.jsx)(s.W,{style:m,className:(0,n.AK)(g.Input,"right"===l&&g["Input--align-right"],"center"===l&&g["Input--align-center"],"regular"!==y&&j[y],p&&g["Input--hasBefore"],f&&g["Input--hasAfter"],d),getRootRef:c,before:p,after:f,disabled:_.disabled,mode:h,status:v,children:(0,r.jsx)(a.x,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){F(e,t,o[t])})}return e}({},_),{Component:"input",normalize:!1,type:void 0===t?"text":t,className:g.Input__el,getRootRef:u}))})};try{k.displayName="Input",k.__docgenInfo={description:"",displayName:"Input",props:{getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:k.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(e){}},"./src/components/Typography/Footnote/Footnote.tsx":(e,t,o)=>{o.d(t,{w:()=>y});var r=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var n=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=o("./src/components/Typography/Typography.tsx"),s=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=o.n(s),l=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=o.n(l),d=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=o.n(d),m=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=o.n(m),f=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=o.n(f),h=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=p(),_.insert=c().bind(null,"head"),_.domAPI=u(),_.insertStyleElement=v(),a()(h.Z,_);let b=h.Z&&h.Z.locals?h.Z.locals:void 0;var y=function(e){var t=e.className,o=e.caps,s=e.Component,a=e.normalize,l=function(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["className","caps","Component","normalize"]);return(0,r.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({Component:void 0===s?"span":s,normalize:void 0===a||a,className:(0,n.AK)(t,b.Footnote,o&&b["Footnote--caps"])},l))};try{y.displayName="Footnote",y.__docgenInfo={description:"Используется для основных подписей.",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:y.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}},"./src/components/Typography/Subhead/Subhead.tsx":(e,t,o)=>{o.d(t,{v:()=>j});var r=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var n=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=o("./src/hooks/useAdaptivity.ts"),s=o("./src/components/Typography/Typography.tsx"),a=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=o.n(a),u=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=o.n(u),c=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),m=o.n(c),p=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=o.n(p),v=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=o.n(v),_=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Subhead/Subhead.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=f(),b.insert=m().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=h(),l()(_.Z,b);let y=_.Z&&_.Z.locals?_.Z.locals:void 0;function g(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var F=g({none:y["Subhead--sizeY-none"]},"compact",y["Subhead--sizeY-compact"]),j=function(e){var t=e.className,o=e.Component,a=e.normalize,l=function(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["className","Component","normalize"]),u=(0,i.g)().sizeY,d=void 0===u?"none":u;return(0,r.jsx)(s.Z,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){g(e,t,o[t])})}return e}({Component:void 0===o?"span":o,normalize:void 0===a||a,className:(0,n.AK)(t,y.Subhead,"regular"!==d&&F[d])},l))};try{j.displayName="Subhead",j.__docgenInfo={description:"Используется для подзаголовков 2 уровня.",displayName:"Subhead",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Subhead/Subhead.tsx#Subhead"]={docgenInfo:j.__docgenInfo,name:"Subhead",path:"src/components/Typography/Subhead/Subhead.tsx#Subhead"})}catch(e){}},"./src/hooks/useFocusWithin.ts":(e,t,o)=>{o.d(t,{L:()=>l});var r=o("../../node_modules/react/index.js"),n=o("./src/lib/dom.tsx"),i=o("./src/lib/useIsomorphicLayoutEffect.ts");function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}var a=function(e,t){return e.contains(t.activeElement)};function l(e){var t=(0,n.NG)().document,o=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o,r,n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return s(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.useState(function(){return!!e.current&&!!t&&a(e.current,t)}),2),l=o[0],u=o[1];return(0,i.L)(function(){if(t){var o=function(){e.current&&u(a(e.current,t))};return o(),t.addEventListener("focus",o,{capture:!0}),t.addEventListener("blur",o,{capture:!0}),function(){t.removeEventListener("focus",o,{capture:!0}),t.removeEventListener("blur",o,{capture:!0})}}},[]),l}},"./src/lib/children.ts":(e,t,o)=>{o.d(t,{I:()=>i});var r=o("../../node_modules/react/index.js"),n=function(e){return null==e||"boolean"==typeof e||"{}"===JSON.stringify(e)?"":e.toString()},i=function(e){return function(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}(e,Array)||(0,r.isValidElement)(e)?r.Children.toArray(e).reduce(function(e,t){var o="",s=(0,r.isValidElement)(t),a=s&&"children"in t.props;return o=s&&a?i(t.props.children):s&&!a?"":n(t),e.concat(o)},""):n(e)}}}]);