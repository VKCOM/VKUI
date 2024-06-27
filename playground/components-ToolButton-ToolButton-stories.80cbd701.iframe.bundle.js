"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9869],{"./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>AdaptiveIconRenderer});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_hooks_useAdaptivityConditionalRender__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx"),AdaptiveIconRenderer=function(param){var IconCompact=param.IconCompact,IconRegular=param.IconRegular,sizeY=(0,_hooks_useAdaptivityConditionalRender__WEBPACK_IMPORTED_MODULE_2__.V)().sizeY;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[sizeY.compact&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconCompact,{className:sizeY.compact.className}),sizeY.regular&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconRegular,{className:sizeY.regular.className})]})};try{AdaptiveIconRenderer.displayName="AdaptiveIconRenderer",AdaptiveIconRenderer.__docgenInfo={description:"",displayName:"AdaptiveIconRenderer",props:{IconCompact:{defaultValue:null,description:"",name:"IconCompact",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}},IconRegular:{defaultValue:null,description:"",name:"IconRegular",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx#AdaptiveIconRenderer"]={docgenInfo:AdaptiveIconRenderer.__docgenInfo,name:"AdaptiveIconRenderer",path:"src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx#AdaptiveIconRenderer"})}catch(__react_docgen_typescript_loader_error){}},"../../tools/storybook-addon-cartesian/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L1:()=>withCartesian});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"};var withCartesian=function(StoryFn,context){var argTypes=context.argTypes,cartesian=context.args.cartesian,restArgs=_object_without_properties(context.args,["cartesian"]);if(cartesian){var variants=function cartesianFunc(){var propDesc=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],argTypes=arguments.length>1?arguments[1]:void 0;return Object.entries(propDesc).reduce((function(acc,param){var _param=_sliced_to_array(param,2),prop=_param[0],values=_param[1],res=[];return acc.forEach((function(props){values.forEach((function(value){var mapping=argTypes[prop].mapping;res.push(_object_spread_props(_object_spread({},props),_define_property({},prop,mapping?mapping[value]:value)))}))})),res}),[{}])}(cartesian,argTypes);return(0,jsx_runtime.jsx)("div",{style:CartesianContainerStyle,children:variants.map((function(ops,index){return(0,jsx_runtime.jsx)(StoryFn,{args:_object_spread({},restArgs,ops)},index)}))})}return(0,jsx_runtime.jsx)(StoryFn,{args:restArgs})};"".concat("storybook/addon-cartesian","/tool")},"./src/components/ToolButton/ToolButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ToolButton_stories});var src=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),Icon20Add=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20Add","add_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" id="add_20"><path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v5.5h5.5a.75.75 0 0 1 0 1.5h-5.5v5.5a.75.75 0 0 1-1.5 0v-5.5h-5.5a.75.75 0 0 1 0-1.5h5.5v-5.5A.75.75 0 0 1 10 3" clip-rule="evenodd" /></symbol>',20,20,!1,void 0),add_24=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/24/add_24.js"),constants=__webpack_require__("./src/storybook/constants.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),AdaptiveIconRenderer=__webpack_require__("./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx"),Tappable=__webpack_require__("./src/components/Tappable/Tappable.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ToolButton_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ToolButton/ToolButton.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ToolButton_module.A,options);const ToolButton_ToolButton_module=ToolButton_module.A&&ToolButton_module.A.locals?ToolButton_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var stylesMode={primary:ToolButton_ToolButton_module["ToolButton--mode-primary"],secondary:ToolButton_ToolButton_module["ToolButton--mode-secondary"],tertiary:ToolButton_ToolButton_module["ToolButton--mode-tertiary"],outline:ToolButton_ToolButton_module["ToolButton--mode-outline"]},stylesAppearance={accent:ToolButton_ToolButton_module["ToolButton--appearance-accent"],neutral:ToolButton_ToolButton_module["ToolButton--appearance-neutral"]},stylesDirection={row:ToolButton_ToolButton_module["ToolButton--direction-row"],column:ToolButton_ToolButton_module["ToolButton--direction-column"]},sizeYClassNames={none:ToolButton_ToolButton_module["ToolButton--sizeY-none"],regular:ToolButton_ToolButton_module["ToolButton--sizeY-regular"]},ToolButton=function(_param){var _param_mode=_param.mode,mode=void 0===_param_mode?"primary":_param_mode,_param_appearance=_param.appearance,appearance=void 0===_param_appearance?"accent":_param_appearance,_param_direction=_param.direction,direction=void 0===_param_direction?"row":_param_direction,_param_onClick=_param.onClick,onClick=void 0===_param_onClick?es6.lQ:_param_onClick,className=_param.className,children=_param.children,IconCompact=_param.IconCompact,IconRegular=_param.IconRegular,rounded=_param.rounded,restProps=_object_without_properties(_param,["mode","appearance","direction","onClick","className","children","IconCompact","IconRegular","rounded"]),_useAdaptivity_sizeY=(0,useAdaptivity.L)().sizeY,sizeY=void 0===_useAdaptivity_sizeY?"none":_useAdaptivity_sizeY,hasChildren=(0,es6.G1)(children);return(0,jsx_runtime.jsxs)(Tappable.S,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({hoverMode:ToolButton_ToolButton_module["ToolButton--hover"],activeMode:ToolButton_ToolButton_module["ToolButton--active"],Component:restProps.href?"a":"button",focusVisibleMode:"outside",onClick,className:(0,es6.xW)(className,ToolButton_ToolButton_module.ToolButton,rounded&&!hasChildren&&ToolButton_ToolButton_module["ToolButton--rounded"],stylesMode[mode],stylesAppearance[appearance],stylesDirection[direction],"compact"!==sizeY&&sizeYClassNames[sizeY])},restProps),{children:[(0,jsx_runtime.jsx)(AdaptiveIconRenderer.p,{IconCompact,IconRegular}),hasChildren&&(0,jsx_runtime.jsx)("span",{className:ToolButton_ToolButton_module.ToolButton__text,children})]}))};try{ToolButton.displayName="ToolButton",ToolButton.__docgenInfo={description:"Кнопки, которые используются для вызова инструмента, вставки аттачей или\nдля форматирования. Их можно использовать как кнопки для разового действия\nили для включения/выключения режима.",displayName:"ToolButton",props:{mode:{defaultValue:{value:"primary"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"outline"'}]}},appearance:{defaultValue:{value:"accent"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"neutral"'}]}},direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},rounded:{defaultValue:null,description:"Задаёт `50%` закругления для контейнера.\n\n> Note: игнорируется при передаче `children`.",name:"rounded",required:!1,type:{name:"boolean"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}},IconCompact:{defaultValue:null,description:"",name:"IconCompact",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}},IconRegular:{defaultValue:null,description:"",name:"IconRegular",required:!0,type:{name:"ComponentType<{ className?: string | undefined; }>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToolButton/ToolButton.tsx#ToolButton"]={docgenInfo:ToolButton.__docgenInfo,name:"ToolButton",path:"src/components/ToolButton/ToolButton.tsx#ToolButton"})}catch(__react_docgen_typescript_loader_error){}const ToolButton_stories={title:"Blocks/ToolButton",component:ToolButton,parameters:constants.eb,decorators:[src.L1]};var Playground={args:{children:"ToolButton",IconCompact:Icon20Add,IconRegular:add_24.p}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'ToolButton',\n    IconCompact: Icon20Add,\n    IconRegular: Icon24Add\n  }\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"../../node_modules/@vkontakte/icons/dist_es6/24/add_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Icon24Add});var Icon24Add=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Add","add_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="add_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M13 11h6.5a1 1 0 0 1 0 2H13v6.5a1 1 0 0 1-2 0V13H4.5a1 1 0 0 1 0-2H11V4.5a1 1 0 0 1 2 0z" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ToolButton/ToolButton.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ToolButton--Ii9_s{align-items:center;border:0;border-radius:var(--vkui--size_border_radius_paper--regular);box-sizing:border-box;display:flex;flex-basis:0;flex-grow:1;font-family:var(--vkui--font_caption1--font_family--regular);font-size:var(--vkui--font_caption1--font_size--regular);inline-size:100%;justify-content:center;line-height:var(--vkui--font_caption1--line_height--regular);margin:0;padding:10px;position:relative;text-decoration:none}.ToolButton--rounded--Ivt0V{border-radius:var(--vkui--size_border_radius_rounded--regular)}.ToolButton--sizeY-regular--YHQY4{font-family:var(--vkui--font_subhead--font_family--regular);font-size:var(--vkui--font_subhead--font_size--regular);line-height:var(--vkui--font_subhead--line_height--regular)}@media (max-width:767.9px) and (min-height:415px),(pointer:coarse) and (min-height:415px),(pointer:none) and (min-height:415px){.ToolButton--sizeY-none--i9oIM{font-family:var(--vkui--font_subhead--font_family--regular);font-size:var(--vkui--font_subhead--font_size--regular);line-height:var(--vkui--font_subhead--line_height--regular)}}.ToolButton--Ii9_s[disabled]{opacity:var(--vkui--opacity_disable)}.ToolButton--direction-row--LmUAx{flex-direction:row}.ToolButton--direction-column--NyVwe{flex-direction:column}.ToolButton--direction-row--LmUAx .ToolButton__text--FgivO{-webkit-margin-start:4px;margin-inline-start:4px}.ToolButton--direction-column--NyVwe .ToolButton__text--FgivO{-webkit-margin-before:4px;margin-block-start:4px}.ToolButton--mode-primary--Igwuf.ToolButton--appearance-accent--huE5w{background-color:var(--vkui--color_background_accent_themed)}.ToolButton--mode-primary--Igwuf.ToolButton--appearance-accent--huE5w.ToolButton--hover--RwTa6{background-color:var(--vkui--color_background_accent_themed--hover)}.ToolButton--mode-primary--Igwuf.ToolButton--appearance-accent--huE5w.ToolButton--active--rLH_4{background-color:var(--vkui--color_background_accent_themed--active)}.ToolButton--mode-primary--Igwuf.ToolButton--appearance-neutral--nRZ8e{background-color:var(--vkui--color_background_secondary)}.ToolButton--mode-primary--Igwuf.ToolButton--appearance-neutral--nRZ8e.ToolButton--hover--RwTa6{background-color:var(--vkui--color_background_secondary--hover)}.ToolButton--mode-primary--Igwuf.ToolButton--appearance-neutral--nRZ8e.ToolButton--active--rLH_4{background-color:var(--vkui--color_background_secondary--active)}.ToolButton--mode-secondary--bqBKh{background-color:var(--vkui--color_background_secondary_alpha)}.ToolButton--mode-secondary--bqBKh.ToolButton--hover--RwTa6{background-color:var(--vkui--color_background_secondary_alpha--hover)}.ToolButton--mode-secondary--bqBKh.ToolButton--active--rLH_4{background-color:var(--vkui--color_background_secondary_alpha--active)}.ToolButton--mode-outline--gSDmh,.ToolButton--mode-tertiary--P_RQ5{background-color:var(--vkui--color_transparent)}.ToolButton--mode-outline--gSDmh.ToolButton--hover--RwTa6,.ToolButton--mode-tertiary--P_RQ5.ToolButton--hover--RwTa6{background-color:var(--vkui--color_transparent--hover)}.ToolButton--mode-outline--gSDmh.ToolButton--active--rLH_4,.ToolButton--mode-tertiary--P_RQ5.ToolButton--active--rLH_4{background-color:var(--vkui--color_transparent--active)}.ToolButton--Ii9_s.ToolButton--appearance-accent--huE5w{color:var(--vkui--color_text_accent_themed)}.ToolButton--Ii9_s.ToolButton--appearance-neutral--nRZ8e{color:var(--vkui--color_text_primary)}.ToolButton--mode-primary--Igwuf.ToolButton--appearance-accent--huE5w{color:var(--vkui--color_text_contrast_themed)}.ToolButton--mode-outline--gSDmh.ToolButton--appearance-accent--huE5w,.ToolButton--mode-outline--gSDmh.ToolButton--appearance-accent--huE5w.ToolButton--active--rLH_4,.ToolButton--mode-outline--gSDmh.ToolButton--appearance-accent--huE5w.ToolButton--hover--RwTa6{box-shadow:inset 0 0 0 1px var(--vkui--color_stroke_accent_themed)}.ToolButton--mode-outline--gSDmh.ToolButton--appearance-neutral--nRZ8e{box-shadow:inset 0 0 0 1px var(--vkui--color_field_border_alpha)}.ToolButton--mode-outline--gSDmh.ToolButton--appearance-neutral--nRZ8e.ToolButton--hover--RwTa6{background-color:var(--vkui--color_background_secondary--hover);box-shadow:unset}.ToolButton--mode-outline--gSDmh.ToolButton--appearance-neutral--nRZ8e.ToolButton--active--rLH_4{background-color:var(--vkui--color_background_secondary--active);box-shadow:unset}","",{version:3,sources:["webpack://./src/components/ToolButton/ToolButton.module.css"],names:[],mappings:"AAAA,mBAYE,kBAAmB,CAPnB,QAAS,CAGT,4DAA6D,CAL7D,qBAAsB,CADtB,YAAa,CASb,YAAa,CADb,WAAY,CAIZ,4DAA6D,CAC7D,wDAAyD,CANzD,gBAAiB,CAIjB,sBAAuB,CAGvB,4DAA6D,CAV7D,QAAS,CACT,YAAa,CANb,iBAAkB,CAGlB,oBAaF,CAEA,4BACE,8DACF,CAEA,kCACE,2DAA4D,CAC5D,uDAAwD,CACxD,2DACF,CAEA,gIACE,+BACE,2DAA4D,CAC5D,uDAAwD,CACxD,2DACF,CACF,CAEA,6BACE,oCACF,CAGA,kCACE,kBACF,CAEA,qCACE,qBACF,CAEA,2DACE,wBAAwB,CAAxB,uBACF,CAEA,8DACE,yBAAuB,CAAvB,sBACF,CAIA,sEACE,4DACF,CAEA,+FACE,mEACF,CAEA,gGACE,oEACF,CAEA,uEACE,wDACF,CAEA,gGACE,+DACF,CAEA,iGACE,gEACF,CAGA,mCACE,8DACF,CAEA,4DACE,qEACF,CAEA,6DACE,sEACF,CAGA,mEAEE,+CACF,CAEA,qHAEE,sDACF,CAEA,uHAEE,uDACF,CAKA,wDACE,2CACF,CAEA,yDACE,qCACF,CAEA,sEACE,6CACF,CAKA,qQAGE,kEACF,CAEA,uEACE,gEACF,CAEA,gGACE,+DAAgE,CAChE,gBACF,CAEA,iGACE,gEAAiE,CACjE,gBACF",sourcesContent:[".ToolButton {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  text-decoration: none;\n  border: 0;\n  margin: 0;\n  padding: 10px;\n  border-radius: var(--vkui--size_border_radius_paper--regular);\n  inline-size: 100%;\n  flex-grow: 1;\n  flex-basis: 0;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--vkui--font_caption1--font_family--regular);\n  font-size: var(--vkui--font_caption1--font_size--regular);\n  line-height: var(--vkui--font_caption1--line_height--regular);\n}\n\n.ToolButton--rounded {\n  border-radius: var(--vkui--size_border_radius_rounded--regular);\n}\n\n.ToolButton--sizeY-regular {\n  font-family: var(--vkui--font_subhead--font_family--regular);\n  font-size: var(--vkui--font_subhead--font_size--regular);\n  line-height: var(--vkui--font_subhead--line_height--regular);\n}\n\n@media (--sizeY-regular) {\n  .ToolButton--sizeY-none {\n    font-family: var(--vkui--font_subhead--font_family--regular);\n    font-size: var(--vkui--font_subhead--font_size--regular);\n    line-height: var(--vkui--font_subhead--line_height--regular);\n  }\n}\n\n.ToolButton[disabled] {\n  opacity: var(--vkui--opacity_disable);\n}\n\n/* ToolButton's directions */\n.ToolButton--direction-row {\n  flex-direction: row;\n}\n\n.ToolButton--direction-column {\n  flex-direction: column;\n}\n\n.ToolButton--direction-row .ToolButton__text {\n  margin-inline-start: 4px;\n}\n\n.ToolButton--direction-column .ToolButton__text {\n  margin-block-start: 4px;\n}\n\n/* ToolButton's backgrounds */\n/* Mode  = Primary */\n.ToolButton--mode-primary.ToolButton--appearance-accent {\n  background-color: var(--vkui--color_background_accent_themed);\n}\n\n.ToolButton--mode-primary.ToolButton--appearance-accent.ToolButton--hover {\n  background-color: var(--vkui--color_background_accent_themed--hover);\n}\n\n.ToolButton--mode-primary.ToolButton--appearance-accent.ToolButton--active {\n  background-color: var(--vkui--color_background_accent_themed--active);\n}\n\n.ToolButton--mode-primary.ToolButton--appearance-neutral {\n  background-color: var(--vkui--color_background_secondary);\n}\n\n.ToolButton--mode-primary.ToolButton--appearance-neutral.ToolButton--hover {\n  background-color: var(--vkui--color_background_secondary--hover);\n}\n\n.ToolButton--mode-primary.ToolButton--appearance-neutral.ToolButton--active {\n  background-color: var(--vkui--color_background_secondary--active);\n}\n\n/* Mode = Secondary */\n.ToolButton--mode-secondary {\n  background-color: var(--vkui--color_background_secondary_alpha);\n}\n\n.ToolButton--mode-secondary.ToolButton--hover {\n  background-color: var(--vkui--color_background_secondary_alpha--hover);\n}\n\n.ToolButton--mode-secondary.ToolButton--active {\n  background-color: var(--vkui--color_background_secondary_alpha--active);\n}\n\n/* Mode = Tertiary */\n.ToolButton--mode-tertiary,\n.ToolButton--mode-outline {\n  background-color: var(--vkui--color_transparent);\n}\n\n.ToolButton--mode-tertiary.ToolButton--hover,\n.ToolButton--mode-outline.ToolButton--hover {\n  background-color: var(--vkui--color_transparent--hover);\n}\n\n.ToolButton--mode-tertiary.ToolButton--active,\n.ToolButton--mode-outline.ToolButton--active {\n  background-color: var(--vkui--color_transparent--active);\n}\n\n/*\n  ToolButtons text colors\n*/\n.ToolButton.ToolButton--appearance-accent {\n  color: var(--vkui--color_text_accent_themed);\n}\n\n.ToolButton.ToolButton--appearance-neutral {\n  color: var(--vkui--color_text_primary);\n}\n\n.ToolButton--mode-primary.ToolButton--appearance-accent {\n  color: var(--vkui--color_text_contrast_themed);\n}\n\n/*\n  Outline buttons borders\n*/\n.ToolButton--mode-outline.ToolButton--appearance-accent,\n.ToolButton--mode-outline.ToolButton--appearance-accent.ToolButton--hover,\n.ToolButton--mode-outline.ToolButton--appearance-accent.ToolButton--active {\n  box-shadow: inset 0 0 0 1px var(--vkui--color_stroke_accent_themed);\n}\n\n.ToolButton--mode-outline.ToolButton--appearance-neutral {\n  box-shadow: inset 0 0 0 1px var(--vkui--color_field_border_alpha);\n}\n\n.ToolButton--mode-outline.ToolButton--appearance-neutral.ToolButton--hover {\n  background-color: var(--vkui--color_background_secondary--hover);\n  box-shadow: unset;\n}\n\n.ToolButton--mode-outline.ToolButton--appearance-neutral.ToolButton--active {\n  background-color: var(--vkui--color_background_secondary--active);\n  box-shadow: unset;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ToolButton:"ToolButton--Ii9_s","ToolButton--rounded":"ToolButton--rounded--Ivt0V","ToolButton--sizeY-regular":"ToolButton--sizeY-regular--YHQY4","ToolButton--sizeY-none":"ToolButton--sizeY-none--i9oIM","ToolButton--direction-row":"ToolButton--direction-row--LmUAx","ToolButton--direction-column":"ToolButton--direction-column--NyVwe",ToolButton__text:"ToolButton__text--FgivO","ToolButton--mode-primary":"ToolButton--mode-primary--Igwuf","ToolButton--appearance-accent":"ToolButton--appearance-accent--huE5w","ToolButton--hover":"ToolButton--hover--RwTa6","ToolButton--active":"ToolButton--active--rLH_4","ToolButton--appearance-neutral":"ToolButton--appearance-neutral--nRZ8e","ToolButton--mode-secondary":"ToolButton--mode-secondary--bqBKh","ToolButton--mode-outline":"ToolButton--mode-outline--gSDmh","ToolButton--mode-tertiary":"ToolButton--mode-tertiary--P_RQ5"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);