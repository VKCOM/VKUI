"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7786],{"./src/components/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),useFocusVisibleClassName=__webpack_require__("./src/hooks/useFocusVisibleClassName.ts"),useFocusWithin=__webpack_require__("./src/hooks/useFocusWithin.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),FormField_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/FormField/FormField.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(FormField_module.Z,options);let FormField_FormField_module=FormField_module.Z&&FormField_module.Z.locals?FormField_module.Z.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var sizeYClassNames=_define_property({none:FormField_FormField_module["FormField--sizeY-none"]},"compact",FormField_FormField_module["FormField--sizeY-compact"]),stylesStatus={error:FormField_FormField_module["FormField--status-error"],valid:FormField_FormField_module["FormField--status-valid"]},FormField=function(_param){var _param_Component=_param.Component,_param_status=_param.status,status=void 0===_param_status?"default":_param_status,children=_param.children,getRootRef=_param.getRootRef,before=_param.before,after=_param.after,disabled=_param.disabled,_param_mode=_param.mode,className=_param.className,restProps=_object_without_properties(_param,["Component","status","children","getRootRef","before","after","disabled","mode","className"]),elRef=(0,useExternRef.Q)(getRootRef),_useAdaptivity_sizeY=(0,useAdaptivity.g)().sizeY,sizeY=void 0===_useAdaptivity_sizeY?"none":_useAdaptivity_sizeY,_React_useState=_sliced_to_array(react.useState(!1),2),hover=_React_useState[0],setHover=_React_useState[1],focusWithin=(0,useFocusWithin.L)(elRef),focusVisibleClassNames=(0,useFocusVisibleClassName.a)({focusVisible:focusWithin,mode:FormField_FormField_module["FormField--focus-visible"]});return react.createElement(void 0===_param_Component?"span":_param_Component,_object_spread_props(_object_spread({},restProps),{ref:elRef,onMouseEnter:function(e){e.stopPropagation(),setHover(!0)},onMouseLeave:function(e){e.stopPropagation(),setHover(!1)},className:(0,es6.AK)(FormField_FormField_module.FormField,"default"===(void 0===_param_mode?"default":_param_mode)&&FormField_FormField_module["FormField--mode-default"],"default"!==status&&stylesStatus[status],"regular"!==sizeY&&sizeYClassNames[sizeY],disabled&&FormField_FormField_module["FormField--disabled"],!disabled&&hover&&FormField_FormField_module["FormField--hover"],focusVisibleClassNames,className)}),before&&react.createElement("span",{className:FormField_FormField_module.FormField__before},before),children,after&&react.createElement("span",{className:(0,es6.AK)(FormField_FormField_module.FormField__after,"vkuiInternalFormField__after")},after),react.createElement("span",{"aria-hidden":!0,className:FormField_FormField_module.FormField__border}))};try{FormField.displayName="FormField",FormField.__docgenInfo={description:"",displayName:"FormField",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:{value:"default"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useFocusWithin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useFocusWithin});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_lib_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/dom.tsx"),_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var isFocusWithin=function(ref,document){return ref.contains(document.activeElement)};function useFocusWithin(ref){var document=(0,_lib_dom__WEBPACK_IMPORTED_MODULE_1__.NG)().document,_React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(function(){return!!ref.current&&!!document&&isFocusWithin(ref.current,document)}),2),focusWithin=_React_useState[0],setFocusWithin=_React_useState[1];return(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.L)(function handleAutoFocus(){if(document){var handleFocusOrBlurEvents=function(){ref.current&&setFocusWithin(isFocusWithin(ref.current,document))};return handleFocusOrBlurEvents(),document.addEventListener("focus",handleFocusOrBlurEvents,{capture:!0}),document.addEventListener("blur",handleFocusOrBlurEvents,{capture:!0}),function(){document.removeEventListener("focus",handleFocusOrBlurEvents,{capture:!0}),document.removeEventListener("blur",handleFocusOrBlurEvents,{capture:!0})}}},[]),focusWithin}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/FormField/FormField.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".FormField--cV1je{align-items:center;box-sizing:border-box;display:flex;font-family:var(--vkui--font_family_base);min-height:var(--vkui--size_field_height--regular);position:relative;-webkit-tap-highlight-color:transparent;border-radius:var(--vkui--size_border_radius--regular);isolation:isolate}.FormField--sizeY-compact--oV07Z{min-height:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX{min-height:var(--vkui--size_field_height--compact)}}.FormField--cV1je>*{border-radius:inherit;z-index:var(--vkui_internal--z_index_form_field_element)}.FormField__after--a5xC5,.FormField__before--SmyZI{align-content:center;align-items:center;color:var(--vkui--color_icon_secondary);display:flex;flex-shrink:0;height:100%;justify-content:center;min-width:var(--vkui--size_field_height--regular);position:relative;z-index:var(--vkui_internal--z_index_form_field_side)}.FormField--sizeY-compact--oV07Z .FormField__after--a5xC5,.FormField--sizeY-compact--oV07Z .FormField__before--SmyZI{height:var(--vkui--size_field_height--compact);min-width:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField--sizeY-none--xlzBX .FormField__after--a5xC5,.FormField--sizeY-none--xlzBX .FormField__before--SmyZI{height:var(--vkui--size_field_height--compact);min-width:var(--vkui--size_field_height--compact)}}.FormField__before--SmyZI{color:var(--vkui--color_icon_accent)}.FormField__after--a5xC5{color:var(--vkui--color_icon_secondary)}.FormField__border--et6Lb{border:var(--vkui--size_border--regular) solid transparent;border-radius:inherit;box-sizing:border-box;height:100%;left:0;pointer-events:none;position:absolute;top:0;transform-origin:left top;width:100%;z-index:var(--vkui_internal--z_index_form_field_border)}.FormField--mode-default--sUDAK .FormField__border--et6Lb{border-color:var(--vkui--color_field_border_alpha)}.FormField--mode-default--sUDAK{background-color:var(--vkui--color_field_background)}.FormField--status-error--MkLL5 .FormField__border--et6Lb,.vkuiInternalFormItem--status-error .FormField__border--et6Lb{border-color:var(--vkui--color_stroke_negative);z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--status-error--MkLL5,.vkuiInternalFormItem--status-error .FormField--cV1je{background-color:var(--vkui--color_background_negative_tint)}.FormField--status-valid--dDam8 .FormField__border--et6Lb,.vkuiInternalFormItem--status-valid .FormField__border--et6Lb{border-color:var(--vkui--color_stroke_positive);z-index:var(--vkui_internal--z_index_form_field_status)}.FormField--disabled--qRxeX{cursor:default;opacity:var(--vkui--opacity_disable_accessibility);pointer-events:none}.FormField--hover--zNrWU{background-color:var(--vkui--color_field_background)}.FormField--mode-default--sUDAK.FormField--hover--zNrWU .FormField__border--et6Lb{border-color:var(--vkui--color_field_border_alpha--hover);z-index:var(--vkui_internal--z_index_form_field_border_hover)}.vkuiInternalNativeSelect .FormField__after--a5xC5{pointer-events:none}.vkuiInternalCalendarHeader__picker .FormField__after--a5xC5{min-width:12px;padding-right:8px}.vkuiInternalFormLayoutGroup--segmented .FormField--cV1je{border-radius:0;isolation:auto;z-index:auto}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-top-left-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-right-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:first-of-type .FormField--cV1je{border-top-left-radius:var(--vkui--size_border_radius--regular);border-top-right-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:last-of-type .FormField--cV1je{border-bottom-left-radius:var(--vkui--size_border_radius--regular);border-bottom-right-radius:var(--vkui--size_border_radius--regular)}.FormField--focus-visible--_koel.FormField--focus-visible--_koel .FormField__border--et6Lb{border-color:var(--vkui--color_stroke_accent)}","",{version:3,sources:["webpack://./src/components/FormField/FormField.module.css"],names:[],mappings:"AAAA,kBAGE,kBAAmB,CACnB,qBAAsB,CAFtB,YAAa,CAIb,yCAA0C,CAD1C,kDAAuD,CAJvD,iBAAkB,CAMlB,uCAAwC,CAExC,sDAAuD,CADvD,iBAEF,CAEA,iCACE,kDACF,CAEA,iEACE,8BACE,kDACF,CACF,CAGA,oBACE,qBAAsB,CACtB,wDACF,CAEA,mDAME,oBAAqB,CADrB,kBAAmB,CAMnB,uCAAwC,CAPxC,YAAa,CAIb,aAAc,CAEd,WAAgB,CAHhB,sBAAuB,CAEvB,iDAAwD,CAPxD,iBAAkB,CAClB,qDASF,CAEA,qHAGE,8CAAmD,CADnD,iDAEF,CAEA,iEACE,+GAGE,8CAAmD,CADnD,iDAEF,CACF,CAEA,0BACE,oCACF,CAEA,yBACE,uCACF,CAEA,0BAUE,0DAA2D,CAC3D,qBAAsB,CAHtB,qBAAsB,CADtB,WAAgB,CAHhB,MAAqB,CAHrB,mBAAoB,CACpB,iBAAkB,CAGlB,KAAoB,CAIpB,yBAA0B,CAH1B,UAAiB,CAHjB,uDASF,CAEA,0DACE,kDACF,CAEA,gCACE,oDACF,CAQA,wHAEE,+CAAgD,CAChD,uDACF,CAGA,sFAEE,4DACF,CAGA,wHAEE,+CAAgD,CAChD,uDACF,CAGA,4BAEE,cAAe,CADf,kDAAmD,CAEnD,mBACF,CAEA,yBACE,oDACF,CAEA,kFACE,yDAA0D,CAC1D,6DACF,CAOA,mDACE,mBACF,CAOA,6DACE,cAAqB,CACrB,iBACF,CAOA,0DAGE,eAAgB,CADhB,cAAe,CADf,YAGF,CAGA,2IAME,kEAAiE,CADjE,+DAEF,CAGA,0IAME,mEAA+D,CAD/D,gEAEF,CAGA,yIAKE,+DAAmE,CACnE,gEACF,CAGA,wIAKE,kEAAiE,CACjE,mEACF,CAMA,2FACE,6CACF",sourcesContent:[".FormField {\n  position: relative;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  min-block-size: var(--vkui--size_field_height--regular);\n  font-family: var(--vkui--font_family_base);\n  -webkit-tap-highlight-color: transparent;\n  isolation: isolate;\n  border-radius: var(--vkui--size_border_radius--regular);\n}\n\n.FormField--sizeY-compact {\n  min-block-size: var(--vkui--size_field_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .FormField--sizeY-none {\n    min-block-size: var(--vkui--size_field_height--compact);\n  }\n}\n\n/* stylelint-disable-next-line selector-max-universal */\n.FormField > * {\n  border-radius: inherit;\n  z-index: var(--vkui_internal--z_index_form_field_element);\n}\n\n.FormField__before,\n.FormField__after {\n  position: relative;\n  z-index: var(--vkui_internal--z_index_form_field_side);\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  flex-shrink: 0;\n  min-inline-size: var(--vkui--size_field_height--regular);\n  block-size: 100%;\n  color: var(--vkui--color_icon_secondary);\n}\n\n.FormField--sizeY-compact .FormField__before,\n.FormField--sizeY-compact .FormField__after {\n  min-inline-size: var(--vkui--size_field_height--compact);\n  block-size: var(--vkui--size_field_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .FormField--sizeY-none .FormField__before,\n  .FormField--sizeY-none .FormField__after {\n    min-inline-size: var(--vkui--size_field_height--compact);\n    block-size: var(--vkui--size_field_height--compact);\n  }\n}\n\n.FormField__before {\n  color: var(--vkui--color_icon_accent);\n}\n\n.FormField__after {\n  color: var(--vkui--color_icon_secondary);\n}\n\n.FormField__border {\n  pointer-events: none;\n  position: absolute;\n  z-index: var(--vkui_internal--z_index_form_field_border);\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  inline-size: 100%;\n  block-size: 100%;\n  box-sizing: border-box;\n  transform-origin: left top;\n  border: var(--vkui--size_border--regular) solid transparent;\n  border-radius: inherit;\n}\n\n.FormField--mode-default .FormField__border {\n  border-color: var(--vkui--color_field_border_alpha);\n}\n\n.FormField--mode-default {\n  background-color: var(--vkui--color_field_background);\n}\n\n/**\n * CMP:\n * FormItem\n * [start]\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--status-error) .FormField__border,\n.FormField--status-error .FormField__border {\n  border-color: var(--vkui--color_stroke_negative);\n  z-index: var(--vkui_internal--z_index_form_field_status);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--status-error) .FormField,\n.FormField--status-error {\n  background-color: var(--vkui--color_background_negative_tint);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--status-valid) .FormField__border,\n.FormField--status-valid .FormField__border {\n  border-color: var(--vkui--color_stroke_positive);\n  z-index: var(--vkui_internal--z_index_form_field_status);\n}\n/* [end] */\n\n.FormField--disabled {\n  opacity: var(--vkui--opacity_disable_accessibility);\n  cursor: default;\n  pointer-events: none;\n}\n\n.FormField--hover {\n  background-color: var(--vkui--color_field_background);\n}\n\n.FormField--mode-default.FormField--hover .FormField__border {\n  border-color: var(--vkui--color_field_border_alpha--hover);\n  z-index: var(--vkui_internal--z_index_form_field_border_hover);\n}\n\n/**\n * CMP:\n * NativeSelect\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalNativeSelect) .FormField__after {\n  pointer-events: none;\n}\n\n/**\n * CMP:\n * CalendarHeader\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCalendarHeader__picker) .FormField__after {\n  min-inline-size: 12px;\n  padding-inline-end: 8px;\n}\n\n/**\n * CMP:\n * FormLayoutGroup\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormLayoutGroup--segmented) .FormField {\n  z-index: auto;\n  isolation: auto;\n  border-radius: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(\n    .vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal\n      .vkuiInternalFormItem\n  ):first-of-type\n  .FormField {\n  border-start-start-radius: var(--vkui--size_border_radius--regular);\n  border-end-start-radius: var(--vkui--size_border_radius--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(\n    .vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal\n      .vkuiInternalFormItem\n  ):last-of-type\n  .FormField {\n  border-start-end-radius: var(--vkui--size_border_radius--regular);\n  border-end-end-radius: var(--vkui--size_border_radius--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(\n    .vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical\n      .vkuiInternalFormItem\n  ):first-of-type\n  .FormField {\n  border-start-start-radius: var(--vkui--size_border_radius--regular);\n  border-start-end-radius: var(--vkui--size_border_radius--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(\n    .vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical\n      .vkuiInternalFormItem\n  ):last-of-type\n  .FormField {\n  border-end-start-radius: var(--vkui--size_border_radius--regular);\n  border-end-end-radius: var(--vkui--size_border_radius--regular);\n}\n\n/**\n * useFocusVisibleClassName()\n */\n/* increase specificity for selects */\n.FormField--focus-visible.FormField--focus-visible .FormField__border {\n  border-color: var(--vkui--color_stroke_accent);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={FormField:"FormField--cV1je","FormField--sizeY-compact":"FormField--sizeY-compact--oV07Z","FormField--sizeY-none":"FormField--sizeY-none--xlzBX",FormField__after:"FormField__after--a5xC5",FormField__before:"FormField__before--SmyZI",FormField__border:"FormField__border--et6Lb","FormField--mode-default":"FormField--mode-default--sUDAK","FormField--status-error":"FormField--status-error--MkLL5","FormField--status-valid":"FormField--status-valid--dDam8","FormField--disabled":"FormField--disabled--qRxeX","FormField--hover":"FormField--hover--zNrWU","FormField--focus-visible":"FormField--focus-visible--_koel"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);