"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9327],{"./src/lib/children.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>getTextFromChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const childToString=child=>null==child||"boolean"==typeof child||"{}"===JSON.stringify(child)?"":child.toString(),getTextFromChildren=children=>children instanceof Array||(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce(((text,child)=>{let newText="";const isValidElementResult=(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child),hasChildren=isValidElementResult&&"children"in child.props;return newText=isValidElementResult&&hasChildren?getTextFromChildren(child.props.children):isValidElementResult&&!hasChildren?"":childToString(child),text.concat(newText)}),""):childToString(children)},"./src/components/ChipsInput/ChipsInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ChipsInput_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),constants=__webpack_require__("./src/storybook/constants.ts"),getFormFieldIconsPresets=__webpack_require__("./src/testing/presets/getFormFieldIconsPresets.tsx"),FormItem=__webpack_require__("./src/components/FormItem/FormItem.tsx"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),ChipsInputBase=__webpack_require__("./src/components/ChipsInputBase/ChipsInputBase.tsx"),useChipsInput=__webpack_require__("./src/components/ChipsInput/useChipsInput.ts");const ChipsInput=({value:valueProp,defaultValue,onChange,getRef,inputValue:inputValueProp,defaultInputValue:inputDefaultValueProp,onInputChange:onInputChangeProp,getOptionValue,getOptionLabel,getNewOptionData,disabled,allowClearButton,...restProps})=>{const{value,addOptionFromInput,removeOption,clearOptions,inputRef:inputRefHook,inputValue,onInputChange}=(0,useChipsInput.v)({value:valueProp,defaultValue,onChange,getOptionLabel,getOptionValue,getNewOptionData,inputValue:inputValueProp,defaultInputValue:inputDefaultValueProp,onInputChange:onInputChangeProp,disabled}),inputRef=(0,useExternRef.Z)(getRef,inputRefHook);return(0,jsx_runtime.jsx)(ChipsInputBase.j,{...restProps,disabled,value,clearButtonShown:allowClearButton&&(!!value.length||!!inputValue.length),onAddChipOption:addOptionFromInput,onRemoveChipOption:removeOption,onClear:clearOptions,getRef:inputRef,inputValue,onInputChange})};try{ChipsInput.displayName="ChipsInput",ChipsInput.__docgenInfo={description:"",displayName:"ChipsInput",props:{allowClearButton:{defaultValue:null,description:"Если `true`, то справа будет отображаться кнопка для очистки значения",name:"allowClearButton",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},addOnBlur:{defaultValue:null,description:"Добавляет значение в список на событие `onBlur`",name:"addOnBlur",required:!1,type:{name:"boolean"}},renderChip:{defaultValue:{value:"Используется [Chip](#/Chip)"},description:"Render prop функция для возврата своего компонента.",name:"renderChip",required:!1,type:{name:"RenderChip<ChipOption>"}},clearButtonShown:{defaultValue:null,description:"Показывать ли кнопку для очистки значения",name:"clearButtonShown",required:!1,type:{name:"boolean"}},clearButtonTestId:{defaultValue:null,description:"(e2e) testId кнопки очистки",name:"clearButtonTestId",required:!1,type:{name:"string"}},ClearButton:{defaultValue:null,description:"Кастомная кнопка для очистки значения.\nДолжна принимать обязательное свойство `onClick`",name:"ClearButton",required:!1,type:{name:"ComponentType<FormFieldClearButtonProps>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Option[]"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"OnInputChange"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},getOptionValue:{defaultValue:null,description:"Селектор значения.",name:"getOptionValue",required:!1,type:{name:"GetOptionValue<Option>"}},getOptionLabel:{defaultValue:null,description:"Селектор пользовательского представления.",name:"getOptionLabel",required:!1,type:{name:"GetOptionLabel<Option>"}},getNewOptionData:{defaultValue:null,description:"Функция для создания новой опции.",name:"getNewOptionData",required:!1,type:{name:"GetNewOptionData<Option>"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"Option[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"OnChange<Option>"}},defaultInputValue:{defaultValue:null,description:"",name:"defaultInputValue",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"Режим отображения.\n\n- `default` — показывает фон, обводку и, при наличии, текст-подсказку.\n- `plain` — показывает только текст-подсказку.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"default"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChipsInput/ChipsInput.tsx#ChipsInput"]={docgenInfo:ChipsInput.__docgenInfo,name:"ChipsInput",path:"src/components/ChipsInput/ChipsInput.tsx#ChipsInput"})}catch(__react_docgen_typescript_loader_error){}const iconsPresets=(0,getFormFieldIconsPresets.b)(),ChipsInput_stories={title:"Forms/ChipsInput",component:ChipsInput,parameters:{...constants.eb,...constants.eC},args:{onInputChange:(0,dist.fn)()},argTypes:{before:iconsPresets,after:iconsPresets}},Playground={render:args=>(0,jsx_runtime.jsx)(FormItem.e,{top:"Добавьте любимые теги",htmlFor:"chips-input",style:{width:320},children:(0,jsx_runtime.jsx)(ChipsInput,{...args,id:"chips-input"})})},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <FormItem top="Добавьте любимые теги" htmlFor="chips-input" style={{\n    width: 320\n  }}>\n      <ChipsInput {...args} id="chips-input" />\n    </FormItem>\n}',...Playground.parameters?.docs?.source}}}}}]);