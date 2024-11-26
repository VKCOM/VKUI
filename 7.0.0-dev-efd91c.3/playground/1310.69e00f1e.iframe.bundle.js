"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1310],{"./src/components/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>FormField});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),lib=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),useFocusVisibleClassName=__webpack_require__("./src/hooks/useFocusVisibleClassName.ts"),useFocusWithin=__webpack_require__("./src/hooks/useFocusWithin.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),FormField_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/FormField/FormField.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FormField_module.A,options);const FormField_FormField_module=FormField_module.A&&FormField_module.A.locals?FormField_module.A.locals:void 0,sizeYClassNames={none:FormField_FormField_module.sizeYNone,compact:FormField_FormField_module.sizeYCompact},stylesStatus={error:FormField_FormField_module.statusError,valid:FormField_FormField_module.statusValid},iconAlignClassNames={center:void 0,start:FormField_FormField_module.iconAlignStart,end:FormField_FormField_module.iconAlignEnd},renderIcon=(icon,align,className)=>(0,jsx_runtime.jsx)("div",{className:FormField_FormField_module.iconWrapper,children:(0,jsx_runtime.jsx)("span",{className:(0,lib.xW)(iconAlignClassNames[align],className),children:icon})}),FormField=({Component="span",status="default",children,getRootRef,before,after,beforeAlign="center",afterAlign="center",disabled,mode="default",className,maxHeight,style,...restProps})=>{const elRef=(0,useExternRef.Z)(getRootRef),{sizeY="none"}=(0,useAdaptivity.L)(),[hover,setHover]=react.useState(!1),focusWithin=(0,useFocusWithin.R)(elRef),focusVisibleClassNames=(0,useFocusVisibleClassName.z)({focusVisible:focusWithin,mode:FormField_FormField_module.focusVisible});return(0,jsx_runtime.jsxs)(Component,{...restProps,ref:elRef,style:{maxHeight,...style},onMouseEnter:e=>{e.stopPropagation(),setHover(!0)},onMouseLeave:e=>{e.stopPropagation(),setHover(!1)},className:(0,lib.xW)(FormField_FormField_module.host,"default"===mode&&FormField_FormField_module.modeDefault,"default"!==status&&stylesStatus[status],"regular"!==sizeY&&sizeYClassNames[sizeY],disabled&&FormField_FormField_module.disabled,!disabled&&hover&&FormField_FormField_module.hover,focusVisibleClassNames,className),children:[(0,jsx_runtime.jsxs)("div",{className:FormField_FormField_module.scrollContainer,children:[before&&renderIcon(before,beforeAlign,FormField_FormField_module.before),(0,jsx_runtime.jsx)("div",{className:FormField_FormField_module.content,children}),after&&renderIcon(after,afterAlign,(0,lib.xW)(FormField_FormField_module.after,"vkuiInternalFormField__after"))]}),(0,jsx_runtime.jsx)("span",{"aria-hidden":!0,className:FormField_FormField_module.border})]})};try{FormField.displayName="FormField",FormField.__docgenInfo={description:"",displayName:"FormField",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},beforeAlign:{defaultValue:{value:"center"},description:"Вертикальное выравнивание иконки слева",name:"beforeAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},afterAlign:{defaultValue:{value:"center"},description:"Вертикальное выравнивание иконки справа",name:"afterAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},mode:{defaultValue:{value:"default"},description:"Режим отображения.\n\n- `default` — показывает фон, обводку и, при наличии, текст-подсказку.\n- `plain` — показывает только текст-подсказку.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"default"'}]}},maxHeight:{defaultValue:null,description:"Максимальная высота поля",name:"maxHeight",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormField/FormField.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"src/components/FormField/FormField.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useFocusWithin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useFocusWithin});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_lib_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/dom.tsx"),_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");const isFocusWithin=(ref,document)=>ref.contains(document.activeElement);function useFocusWithin(ref){const{document}=(0,_lib_dom__WEBPACK_IMPORTED_MODULE_1__.a4)(),[focusWithin,setFocusWithin]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>!(!ref.current||!document)&&isFocusWithin(ref.current,document)));return(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.E)((function handleAutoFocus(){if(!document)return;const handleFocusOrBlurEvents=()=>{ref.current&&setFocusWithin(isFocusWithin(ref.current,document))};return handleFocusOrBlurEvents(),document.addEventListener("focus",handleFocusOrBlurEvents,{capture:!0}),document.addEventListener("blur",handleFocusOrBlurEvents,{capture:!0}),()=>{document.removeEventListener("focus",handleFocusOrBlurEvents,{capture:!0}),document.removeEventListener("blur",handleFocusOrBlurEvents,{capture:!0})}}),[]),focusWithin}},"./src/testing/presets/createFieldWithPresets.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>createFieldWithPresets});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/index.js"));const ICON_REGEX=/Icon(\d+)/,sizeToIconsMap=new Map;Object.keys(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__).forEach((iconName=>{if(!ICON_REGEX.test(iconName))return;const typedIconName=iconName,node=_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__[typedIconName],size=(iconName=>{const match=iconName.match(ICON_REGEX);return match?.[1]})(typedIconName);if(!size)return;const iconsBySize=sizeToIconsMap.get(size),Icon=node;iconsBySize?iconsBySize.set(typedIconName,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{})):sizeToIconsMap.set(size,new Map([[typedIconName,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{},"icon")]]))}));const createFieldWithPresets=({iconSizes=[],sizeIconsCount=5,requiredIcons=[],additionalPresets={}})=>{const options=["None"],mapping={None:null};iconSizes.forEach((iconSize=>{const iconsBySize=sizeToIconsMap.get(iconSize);Array.from(iconsBySize.keys()).slice(0,sizeIconsCount).forEach((iconName=>{options.push(iconName),mapping[iconName]=iconsBySize.get(iconName)}))})),requiredIcons.forEach((iconName=>{if(options.includes(iconName))return;options.push(iconName);const Icon=_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__[iconName];mapping[iconName]=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{})}));for(const presetName in additionalPresets)additionalPresets.hasOwnProperty(presetName)&&(options.push(presetName),mapping[presetName]=additionalPresets[presetName]);return{control:"select",options,mapping}};try{createFieldWithPresets.displayName="createFieldWithPresets",createFieldWithPresets.__docgenInfo={description:"",displayName:"createFieldWithPresets",props:{iconSizes:{defaultValue:{value:"[]"},description:"",name:"iconSizes",required:!1,type:{name:"IconSize[]"}},sizeIconsCount:{defaultValue:{value:"5"},description:"",name:"sizeIconsCount",required:!1,type:{name:"number"}},requiredIcons:{defaultValue:{value:"[]"},description:"",name:"requiredIcons",required:!1,type:{name:"IconName[]"}},additionalPresets:{defaultValue:{value:"{}"},description:"",name:"additionalPresets",required:!1,type:{name:"{ [K in CustomPresetName]?: ReactNode; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/testing/presets/createFieldWithPresets.tsx#createFieldWithPresets"]={docgenInfo:createFieldWithPresets.__docgenInfo,name:"createFieldWithPresets",path:"src/testing/presets/createFieldWithPresets.tsx#createFieldWithPresets"})}catch(__react_docgen_typescript_loader_error){}},"./src/testing/presets/getFormFieldIconsPresets.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>getFormFieldIconsPresets});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/message_outline_28.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/16/clear_16.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js"),_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/IconButton/IconButton.tsx"),_createFieldWithPresets__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/testing/presets/createFieldWithPresets.tsx");const getFormFieldIconsPresets=()=>(0,_createFieldWithPresets__WEBPACK_IMPORTED_MODULE_2__.z)({iconSizes:["12","16","20","24","28"],additionalPresets:{MessageButton:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.K,{onClick:_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.lQ,label:"Сообщения",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__.P,{})}),DeleteIconButton:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.K,{onClick:_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.lQ,label:"Очистить",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__.M,{})})}})},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/FormField/FormField.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".FormField__host--AHpbM{box-sizing:border-box;font-family:var(--vkui--font_family_base);min-block-size:var(--vkui--size_field_height--regular);position:relative;-webkit-tap-highlight-color:transparent;border-radius:var(--vkui--size_border_radius--regular);isolation:isolate}.FormField__host--AHpbM,.FormField__scrollContainer--I3znH{display:flex;inline-size:100%}.FormField__scrollContainer--I3znH{align-items:flex-start;justify-content:flex-start;min-block-size:inherit;overflow-y:auto}.FormField__content--KNyvp{display:flex;flex-grow:1;min-block-size:inherit;min-inline-size:0}.FormField__sizeYCompact--Vj8wW{min-block-size:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField__sizeYNone--w4dat{min-block-size:var(--vkui--size_field_height--compact)}}.FormField__host--AHpbM>*{border-radius:inherit;z-index:var(--vkui_internal--z_index_form_field_element)}.FormField__iconWrapper--uYmG1{block-size:100%;display:flex;flex-shrink:0;inset-block-start:0;position:-webkit-sticky;position:sticky}.FormField__after--wYEd8,.FormField__before--ADIVk{align-content:center;align-items:center;align-self:center;color:var(--vkui--color_icon_secondary);display:flex;justify-content:center;min-inline-size:var(--vkui--size_field_height--regular)}.FormField__sizeYCompact--Vj8wW .FormField__after--wYEd8,.FormField__sizeYCompact--Vj8wW .FormField__before--ADIVk{min-inline-size:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.FormField__sizeYNone--w4dat .FormField__after--wYEd8,.FormField__sizeYNone--w4dat .FormField__before--ADIVk{min-inline-size:var(--vkui--size_field_height--compact)}}.FormField__iconAlignStart--KTrnn{align-self:flex-start}.FormField__iconAlignEnd--oMAIo{align-self:flex-end}.FormField__before--ADIVk{color:var(--vkui--color_icon_accent)}.FormField__after--wYEd8{color:var(--vkui--color_icon_secondary)}.FormField__border--kVPeD{block-size:100%;border:var(--vkui--size_border--regular) solid transparent;border-radius:inherit;box-sizing:border-box;inline-size:100%;inset-block-start:0;inset-inline-start:0;pointer-events:none;position:absolute;transform-origin:left top;z-index:var(--vkui_internal--z_index_form_field_border)}.FormField__modeDefault--gqiSP .FormField__border--kVPeD{border-color:var(--vkui--color_field_border_alpha)}.FormField__hover--HYIxR,.FormField__modeDefault--gqiSP{background-color:var(--vkui--color_field_background)}.FormField__modeDefault--gqiSP.FormField__hover--HYIxR .FormField__border--kVPeD{border-color:var(--vkui--color_field_border_alpha--hover);z-index:var(--vkui_internal--z_index_form_field_border_hover)}.FormField__focusVisible--VHTFS.FormField__focusVisible--VHTFS .FormField__border--kVPeD{border-color:var(--vkui--color_stroke_accent)}.FormField__statusError--DNN_l.FormField__focusVisible--VHTFS .FormField__border--kVPeD,.FormField__statusError--DNN_l.FormField__modeDefault--gqiSP .FormField__border--kVPeD,.vkuiInternalFormItem--status-error .FormField__focusVisible--VHTFS .FormField__border--kVPeD,.vkuiInternalFormItem--status-error .FormField__modeDefault--gqiSP .FormField__border--kVPeD{border-color:var(--vkui--color_stroke_negative);z-index:var(--vkui_internal--z_index_form_field_status)}.FormField__statusError--DNN_l,.vkuiInternalFormItem--status-error .FormField__host--AHpbM{background-color:var(--vkui--color_background_negative_tint)}.FormField__statusValid--hamVf.FormField__focusVisible--VHTFS .FormField__border--kVPeD,.FormField__statusValid--hamVf.FormField__modeDefault--gqiSP .FormField__border--kVPeD,.vkuiInternalFormItem--status-valid .FormField__focusVisible--VHTFS .FormField__border--kVPeD,.vkuiInternalFormItem--status-valid .FormField__modeDefault--gqiSP .FormField__border--kVPeD{border-color:var(--vkui--color_stroke_positive);z-index:var(--vkui_internal--z_index_form_field_status)}.FormField__statusValid--hamVf:not(.FormField__modeDefault--gqiSP),.vkuiInternalFormItem--status-valid .FormField__host--AHpbM:not(.FormField__modeDefault--gqiSP){background-color:var(--vkui--color_background_positive_tint)}.FormField__disabled--IvfNG{cursor:default;opacity:var(--vkui--opacity_disable_accessibility);pointer-events:none}.vkuiInternalNativeSelect .FormField__after--wYEd8{pointer-events:none}.vkuiInternalCalendarHeader__picker .FormField__after--wYEd8{min-inline-size:12px;-webkit-padding-end:8px;padding-inline-end:8px}.vkuiInternalFormLayoutGroup--segmented .FormField__host--AHpbM{border-radius:0;isolation:auto;z-index:auto}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:first-of-type .FormField__host--AHpbM{border-end-start-radius:var(--vkui--size_border_radius--regular);border-start-start-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal .vkuiInternalFormItem:last-of-type .FormField__host--AHpbM{border-end-end-radius:var(--vkui--size_border_radius--regular);border-start-end-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:first-of-type .FormField__host--AHpbM{border-start-end-radius:var(--vkui--size_border_radius--regular);border-start-start-radius:var(--vkui--size_border_radius--regular)}.vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical .vkuiInternalFormItem:last-of-type .FormField__host--AHpbM{border-end-end-radius:var(--vkui--size_border_radius--regular);border-end-start-radius:var(--vkui--size_border_radius--regular)}","",{version:3,sources:["webpack://./src/components/FormField/FormField.module.css"],names:[],mappings:"AAAA,wBAGE,qBAAsB,CAEtB,yCAA0C,CAD1C,sDAAuD,CAHvD,iBAAkB,CAKlB,uCAAwC,CAExC,sDAAuD,CADvD,iBAGF,CAEA,2DAVE,YAAa,CAOb,gBAUF,CAPA,mCAGE,sBAAuB,CACvB,0BAA2B,CAE3B,sBAAuB,CADvB,eAEF,CAEA,2BAEE,YAAa,CACb,WAAY,CAFZ,sBAAuB,CAGvB,iBACF,CAEA,gCACE,sDACF,CAEA,iEACE,6BACE,sDACF,CACF,CAGA,0BACE,qBAAsB,CACtB,wDACF,CAEA,+BAEE,eAAgB,CAChB,YAAa,CAFb,aAAc,CAId,mBAAoB,CADpB,uBAAgB,CAAhB,eAEF,CAEA,mDAIE,oBAAqB,CADrB,kBAAmB,CAGnB,iBAAkB,CAElB,uCAAwC,CANxC,YAAa,CAGb,sBAAuB,CAEvB,uDAEF,CAEA,mHAEE,uDACF,CAEA,iEACE,6GAEE,uDACF,CACF,CAEA,kCACE,qBACF,CAEA,gCACE,mBACF,CAEA,0BACE,oCACF,CAEA,yBACE,uCACF,CAEA,0BAOE,eAAgB,CAGhB,0DAA2D,CAC3D,qBAAsB,CAHtB,qBAAsB,CAFtB,gBAAiB,CADjB,mBAAoB,CADpB,oBAAqB,CAHrB,mBAAoB,CACpB,iBAAkB,CAOlB,yBAA0B,CAN1B,uDASF,CAEA,yDACE,kDACF,CAMA,wDACE,oDACF,CAEA,iFACE,yDAA0D,CAC1D,6DACF,CAMA,yFACE,6CACF,CAQA,0WAIE,+CAAgD,CAChD,uDACF,CAGA,2FAEE,4DACF,CAIA,0WAIE,+CAAgD,CAChD,uDACF,CAGA,mKAEE,4DACF,CAGA,4BAEE,cAAe,CADf,kDAAmD,CAEnD,mBACF,CAOA,mDACE,mBACF,CAOA,6DACE,oBAAqB,CACrB,uBAAuB,CAAvB,sBACF,CAOA,gEAGE,eAAgB,CADhB,cAAe,CADf,YAGF,CAGA,iJAME,gEAAiE,CADjE,kEAEF,CAGA,gJAME,8DAA+D,CAD/D,gEAEF,CAGA,+IAME,gEAAiE,CADjE,kEAEF,CAGA,8IAME,8DAA+D,CAD/D,gEAEF",sourcesContent:[".host {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  min-block-size: var(--vkui--size_field_height--regular);\n  font-family: var(--vkui--font_family_base);\n  -webkit-tap-highlight-color: transparent;\n  isolation: isolate;\n  border-radius: var(--vkui--size_border_radius--regular);\n  inline-size: 100%;\n}\n\n.scrollContainer {\n  display: flex;\n  inline-size: 100%;\n  align-items: flex-start;\n  justify-content: flex-start;\n  overflow-y: auto;\n  min-block-size: inherit;\n}\n\n.content {\n  min-block-size: inherit;\n  display: flex;\n  flex-grow: 1;\n  min-inline-size: 0;\n}\n\n.sizeYCompact {\n  min-block-size: var(--vkui--size_field_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone {\n    min-block-size: var(--vkui--size_field_height--compact);\n  }\n}\n\n/* stylelint-disable-next-line selector-max-universal */\n.host > * {\n  border-radius: inherit;\n  z-index: var(--vkui_internal--z_index_form_field_element);\n}\n\n.iconWrapper {\n  flex-shrink: 0;\n  block-size: 100%;\n  display: flex;\n  position: sticky;\n  inset-block-start: 0;\n}\n\n.before,\n.after {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  align-self: center;\n  min-inline-size: var(--vkui--size_field_height--regular);\n  color: var(--vkui--color_icon_secondary);\n}\n\n.sizeYCompact .before,\n.sizeYCompact .after {\n  min-inline-size: var(--vkui--size_field_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone .before,\n  .sizeYNone .after {\n    min-inline-size: var(--vkui--size_field_height--compact);\n  }\n}\n\n.iconAlignStart {\n  align-self: flex-start;\n}\n\n.iconAlignEnd {\n  align-self: flex-end;\n}\n\n.before {\n  color: var(--vkui--color_icon_accent);\n}\n\n.after {\n  color: var(--vkui--color_icon_secondary);\n}\n\n.border {\n  pointer-events: none;\n  position: absolute;\n  z-index: var(--vkui_internal--z_index_form_field_border);\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  inline-size: 100%;\n  block-size: 100%;\n  box-sizing: border-box;\n  transform-origin: left top;\n  border: var(--vkui--size_border--regular) solid transparent;\n  border-radius: inherit;\n}\n\n.modeDefault .border {\n  border-color: var(--vkui--color_field_border_alpha);\n}\n\n.modeDefault {\n  background-color: var(--vkui--color_field_background);\n}\n\n.hover {\n  background-color: var(--vkui--color_field_background);\n}\n\n.modeDefault.hover .border {\n  border-color: var(--vkui--color_field_border_alpha--hover);\n  z-index: var(--vkui_internal--z_index_form_field_border_hover);\n}\n\n/**\n * useFocusVisibleClassName()\n */\n/* increase specificity for selects */\n.focusVisible.focusVisible .border {\n  border-color: var(--vkui--color_stroke_accent);\n}\n\n/**\n * CMP:\n * FormItem\n * [start]\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--status-error) .modeDefault .border,\n:global(.vkuiInternalFormItem--status-error) .focusVisible .border,\n.statusError.modeDefault .border,\n.statusError.focusVisible .border {\n  border-color: var(--vkui--color_stroke_negative);\n  z-index: var(--vkui_internal--z_index_form_field_status);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--status-error) .host,\n.statusError {\n  background-color: var(--vkui--color_background_negative_tint);\n}\n\n/* increase specificity to cover --mode-default case */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--status-valid) .modeDefault .border,\n:global(.vkuiInternalFormItem--status-valid) .focusVisible .border,\n.statusValid.modeDefault .border,\n.statusValid.focusVisible .border {\n  border-color: var(--vkui--color_stroke_positive);\n  z-index: var(--vkui_internal--z_index_form_field_status);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem--status-valid) .host:not(.modeDefault),\n.statusValid:not(.modeDefault) {\n  background-color: var(--vkui--color_background_positive_tint);\n}\n/* [end] */\n\n.disabled {\n  opacity: var(--vkui--opacity_disable_accessibility);\n  cursor: default;\n  pointer-events: none;\n}\n\n/**\n * CMP:\n * NativeSelect\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalNativeSelect) .after {\n  pointer-events: none;\n}\n\n/**\n * CMP:\n * CalendarHeader\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalCalendarHeader__picker) .after {\n  min-inline-size: 12px;\n  padding-inline-end: 8px;\n}\n\n/**\n * CMP:\n * FormLayoutGroup\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormLayoutGroup--segmented) .host {\n  z-index: auto;\n  isolation: auto;\n  border-radius: 0;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(\n    .vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal\n      .vkuiInternalFormItem\n  ):first-of-type\n  .host {\n  border-start-start-radius: var(--vkui--size_border_radius--regular);\n  border-end-start-radius: var(--vkui--size_border_radius--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(\n    .vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-horizontal\n      .vkuiInternalFormItem\n  ):last-of-type\n  .host {\n  border-start-end-radius: var(--vkui--size_border_radius--regular);\n  border-end-end-radius: var(--vkui--size_border_radius--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(\n    .vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical\n      .vkuiInternalFormItem\n  ):first-of-type\n  .host {\n  border-start-start-radius: var(--vkui--size_border_radius--regular);\n  border-start-end-radius: var(--vkui--size_border_radius--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(\n    .vkuiInternalFormLayoutGroup--segmented.vkuiInternalFormLayoutGroup--mode-vertical\n      .vkuiInternalFormItem\n  ):last-of-type\n  .host {\n  border-end-start-radius: var(--vkui--size_border_radius--regular);\n  border-end-end-radius: var(--vkui--size_border_radius--regular);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"FormField__host--AHpbM",scrollContainer:"FormField__scrollContainer--I3znH",content:"FormField__content--KNyvp",sizeYCompact:"FormField__sizeYCompact--Vj8wW",sizeYNone:"FormField__sizeYNone--w4dat",iconWrapper:"FormField__iconWrapper--uYmG1",after:"FormField__after--wYEd8",before:"FormField__before--ADIVk",iconAlignStart:"FormField__iconAlignStart--KTrnn",iconAlignEnd:"FormField__iconAlignEnd--oMAIo",border:"FormField__border--kVPeD",modeDefault:"FormField__modeDefault--gqiSP",hover:"FormField__hover--HYIxR",focusVisible:"FormField__focusVisible--VHTFS",statusError:"FormField__statusError--DNN_l",statusValid:"FormField__statusValid--hamVf",disabled:"FormField__disabled--IvfNG"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);