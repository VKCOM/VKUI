"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5739],{"./src/components/PanelHeaderContext/PanelHeaderContext.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PanelHeaderContext_stories});var _obj,react=__webpack_require__("../../node_modules/react/index.js"),add_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js"),dropdown_16=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/16/dropdown_16.js"),users_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/28/users_outline_28.js"),done_24=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/24/done_24.js"),settings_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/28/settings_outline_28.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),VKUIDecorators=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),constants=__webpack_require__("./src/storybook/constants.ts"),Cell=__webpack_require__("./src/components/Cell/Cell.tsx"),Div=__webpack_require__("./src/components/Div/Div.tsx"),Panel=__webpack_require__("./src/components/Panel/Panel.tsx"),PanelHeader=__webpack_require__("./src/components/PanelHeader/PanelHeader.tsx"),PanelHeaderBack=__webpack_require__("./src/components/PanelHeaderBack/PanelHeaderBack.tsx"),PanelHeaderButton=__webpack_require__("./src/components/PanelHeaderButton/PanelHeaderButton.tsx"),PanelHeaderContent=__webpack_require__("./src/components/PanelHeaderContent/PanelHeaderContent.tsx"),View=__webpack_require__("./src/components/View/View.tsx"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),useGlobalEventListener=__webpack_require__("./src/hooks/useGlobalEventListener.ts"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),useTimeout=__webpack_require__("./src/hooks/useTimeout.ts"),dom=__webpack_require__("./src/lib/dom.tsx"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),ScrollContext=__webpack_require__("./src/components/AppRoot/ScrollContext.tsx"),FixedLayout=__webpack_require__("./src/components/FixedLayout/FixedLayout.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),PanelHeaderContext_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/PanelHeaderContext/PanelHeaderContext.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(PanelHeaderContext_module.Z,options);let PanelHeaderContext_PanelHeaderContext_module=PanelHeaderContext_module.Z&&PanelHeaderContext_module.Z.locals?PanelHeaderContext_module.Z.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var sizeXClassNames=(_define_property(_obj={none:PanelHeaderContext_PanelHeaderContext_module["PanelHeaderContext--sizeX-none"]},"compact",PanelHeaderContext_PanelHeaderContext_module["PanelHeaderContext--sizeX-compact"]),_define_property(_obj,"regular",PanelHeaderContext_PanelHeaderContext_module["PanelHeaderContext--sizeX-regular"]),_obj),PanelHeaderContext=function(_param){var children=_param.children,onClose=_param.onClose,_param_opened=_param.opened,opened=void 0!==_param_opened&&_param_opened,className=_param.className,restProps=_object_without_properties(_param,["children","onClose","opened","className"]),document=(0,dom.NG)().document,platform=(0,usePlatform.F)(),_React_useState=_sliced_to_array(react.useState(opened),2),visible=_React_useState[0],setVisible=_React_useState[1],closing=visible&&!opened,_useAdaptivity_sizeX=(0,useAdaptivity.g)().sizeX,elementRef=react.useRef(null);(0,useIsomorphicLayoutEffect.L)(function(){opened&&setVisible(!0)},[opened]),(0,ScrollContext.Pr)("vkcom"!==platform&&opened),(0,useGlobalEventListener.J)(document,"click",opened&&!closing&&function(event){elementRef.current&&!elementRef.current.contains(event.target)&&(event.stopPropagation(),onClose())},{capture:!0});var onAnimationEnd=function(){return setVisible(!1)},animationFallback=(0,useTimeout.K)(onAnimationEnd,200);return react.useEffect(function(){return closing?animationFallback.set():animationFallback.clear()},[animationFallback,closing]),react.createElement(FixedLayout.e,_object_spread_props(_object_spread({},restProps),{className:(0,es6.AK)(PanelHeaderContext_PanelHeaderContext_module.PanelHeaderContext,"ios"===platform&&PanelHeaderContext_PanelHeaderContext_module["PanelHeaderContext--ios"],opened&&PanelHeaderContext_PanelHeaderContext_module["PanelHeaderContext--opened"],closing&&PanelHeaderContext_PanelHeaderContext_module["PanelHeaderContext--closing"],sizeXClassNames[void 0===_useAdaptivity_sizeX?"none":_useAdaptivity_sizeX],className),vertical:"top"}),visible&&react.createElement("div",{onClick:function(event){event.stopPropagation(),onClose()},className:PanelHeaderContext_PanelHeaderContext_module.PanelHeaderContext__fade}),react.createElement("div",{className:PanelHeaderContext_PanelHeaderContext_module.PanelHeaderContext__in,ref:elementRef,onAnimationEnd:closing?onAnimationEnd:void 0},visible&&react.createElement("div",{className:PanelHeaderContext_PanelHeaderContext_module.PanelHeaderContext__content},children)))};try{PanelHeaderContext.displayName="PanelHeaderContext",PanelHeaderContext.__docgenInfo={description:"",displayName:"PanelHeaderContext",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"VoidFunction"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeaderContext/PanelHeaderContext.tsx#PanelHeaderContext"]={docgenInfo:PanelHeaderContext.__docgenInfo,name:"PanelHeaderContext",path:"src/components/PanelHeaderContext/PanelHeaderContext.tsx#PanelHeaderContext"})}catch(__react_docgen_typescript_loader_error){}function PanelHeaderContext_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function PanelHeaderContext_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function PanelHeaderContext_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function PanelHeaderContext_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function PanelHeaderContext_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function PanelHeaderContext_stories_sliced_to_array(arr,i){return PanelHeaderContext_stories_array_with_holes(arr)||PanelHeaderContext_stories_iterable_to_array_limit(arr,i)||PanelHeaderContext_stories_unsupported_iterable_to_array(arr,i)||PanelHeaderContext_stories_non_iterable_rest()}function PanelHeaderContext_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return PanelHeaderContext_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return PanelHeaderContext_stories_array_like_to_array(o,minLen)}}let PanelHeaderContext_stories={title:"Layout/PanelHeaderContext",component:PanelHeaderContext,parameters:function PanelHeaderContext_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){PanelHeaderContext_stories_define_property(target,key,source[key])})}return target}({},constants.tW,constants.nB),decorators:[VKUIDecorators.Z0]};var Example={render:function Render(){var _React_useState=PanelHeaderContext_stories_sliced_to_array(react.useState(!0),2),contextOpened=_React_useState[0],setContextOpened=_React_useState[1],_React_useState1=PanelHeaderContext_stories_sliced_to_array(react.useState("all"),2),mode=_React_useState1[0],setMode=_React_useState1[1],toggleContext=function(){setContextOpened(function(prev){return!prev})},select=function(e){setMode(e.currentTarget.dataset.mode),requestAnimationFrame(toggleContext)};return react.createElement(View.G,{id:"main",activePanel:"panel1"},react.createElement(Panel.s,{id:"panel1"},react.createElement(PanelHeader.V,{before:react.createElement(PanelHeaderBack.b,{onClick:es6.ZT}),after:react.createElement(PanelHeaderButton.C,{onClick:es6.ZT},react.createElement(add_outline_28.P,null))},react.createElement(PanelHeaderContent.S,{aside:react.createElement(dropdown_16.T,{style:{transform:"rotate(".concat(contextOpened?"180deg":"0",")")}}),onClick:toggleContext},"Communities")),react.createElement(PanelHeaderContext,{opened:contextOpened,onClose:toggleContext},react.createElement(Cell.b,{before:react.createElement(users_outline_28.T,null),after:"all"===mode?react.createElement(done_24.R,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:select,"data-mode":"all"},"Communities"),react.createElement(Cell.b,{before:react.createElement(settings_outline_28.R,null),after:"managed"===mode?react.createElement(done_24.R,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:select,"data-mode":"managed"},"Managed Communities")),react.createElement(Div.Z,null,"PanelHeaderContext")))}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const [contextOpened, setContextOpened] = React.useState(true);\n    const [mode, setMode] = React.useState<string | undefined>(\'all\');\n    const toggleContext = () => {\n      setContextOpened(prev => !prev);\n    };\n    const select = (e: React.MouseEvent<HTMLElement>) => {\n      const mode = e.currentTarget.dataset.mode;\n      setMode(mode);\n      requestAnimationFrame(toggleContext);\n    };\n    return <View id="main" activePanel="panel1">\n        <Panel id="panel1">\n          <PanelHeader before={<PanelHeaderBack onClick={noop} />} after={<PanelHeaderButton onClick={noop}>\n                <Icon28AddOutline />\n              </PanelHeaderButton>}>\n            <PanelHeaderContent aside={<Icon16Dropdown style={{\n            transform: `rotate(${contextOpened ? \'180deg\' : \'0\'})`\n          }} />} onClick={toggleContext}>\n              Communities\n            </PanelHeaderContent>\n          </PanelHeader>\n          <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>\n            <Cell before={<Icon28UsersOutline />} after={mode === \'all\' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="all">\n              Communities\n            </Cell>\n            <Cell before={<Icon28SettingsOutline />} after={mode === \'managed\' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="managed">\n              Managed Communities\n            </Cell>\n          </PanelHeaderContext>\n          <Div>PanelHeaderContext</Div>\n        </Panel>\n      </View>;\n  }\n}',...Example.parameters?.docs?.source}}};let __namedExportsOrder=["Example"]},"../../node_modules/@vkontakte/icons/dist/es6/16/dropdown_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Icon16Dropdown});var Icon16Dropdown=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Dropdown","dropdown_16","0 0 16 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12" id="dropdown_16"><path fill="currentColor" d="M4.454 3.691a.9.9 0 0 0-1.108 1.418l4.096 3.203a.9.9 0 0 0 1.109 0l4.1-3.203a.9.9 0 1 0-1.109-1.418L7.997 6.46l-3.543-2.77Z" /></symbol>',16,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/done_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>Icon24Done});var Icon24Done=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Done","done_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="done_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="m9 16.2-3.5-3.5a.99.99 0 1 0-1.4 1.4l4.193 4.193a1 1 0 0 0 1.414 0L20.3 7.7a.99.99 0 0 0-1.4-1.4L9 16.2" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Icon28AddOutline});var Icon28AddOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/settings_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>Icon28SettingsOutline});var Icon28SettingsOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28SettingsOutline","settings_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="settings_outline_28"><g fill="none" fill-rule="nonzero"><path d="M0 0h28v28H0z" /><path fill="currentColor" d="M15.148 2.04c.428.07.832.233 1.195.523.595.476.878 1.076 1.097 1.952.056.224.153.486.275.74.278.117.55.249.815.393.262-.065.513-.15.714-.244 1.412-.658 2.597-.623 3.567.423.082.089.131.148.238.28l.629.776c.17.21.241.305.348.482.692 1.152.422 2.224-.452 3.386a4.112 4.112 0 0 0-.417.71c.078.283.143.57.195.86.222.178.46.334.668.441.804.41 1.325.821 1.655 1.508.202.42.27.85.24 1.282a3.48 3.48 0 0 1-.106.64l-.225.975c-.065.285-.099.41-.185.622a2.515 2.515 0 0 1-.778 1.047c-.598.473-1.246.614-2.148.63-.229.004-.502.04-.773.1-.177.243-.364.478-.563.704.003.275.03.544.077.764.187.884.196 1.547-.13 2.236-.2.42-.491.744-.845.993a3.48 3.48 0 0 1-.565.32l-.899.44a3.48 3.48 0 0 1-.6.247c-.414.126-.85.156-1.303.054-.744-.167-1.261-.582-1.842-1.273a4.103 4.103 0 0 0-.591-.561 9.627 9.627 0 0 1-.878 0c-.228.18-.437.378-.591.56-.58.692-1.098 1.107-1.842 1.274a2.515 2.515 0 0 1-1.303-.054 3.48 3.48 0 0 1-.6-.248l-.899-.438a7.152 7.152 0 0 1-.185-.093c-1.312-.683-1.696-1.847-1.355-3.457.047-.22.074-.49.077-.764a9.535 9.535 0 0 1-.563-.705 4.066 4.066 0 0 0-.773-.099c-.902-.016-1.55-.157-2.148-.63a2.515 2.515 0 0 1-.778-1.047 3.48 3.48 0 0 1-.185-.622l-.225-.974a3.381 3.381 0 0 1-.109-.681 2.509 2.509 0 0 1 .296-1.346c.339-.629.84-1.015 1.602-1.404a4.09 4.09 0 0 0 .668-.441c.052-.29.117-.577.195-.86a4.112 4.112 0 0 0-.417-.71c-.874-1.162-1.144-2.234-.452-3.386.107-.177.179-.273.348-.482l.63-.777c.106-.131.155-.19.237-.279.97-1.046 2.155-1.08 3.567-.423.201.093.452.18.714.244.265-.144.537-.276.815-.394.122-.253.219-.515.275-.74.219-.875.502-1.475 1.097-1.95.363-.291.767-.455 1.195-.523.18-.03.3-.038.49-.04L14.5 2c.292 0 .422.005.648.04M14.586 4H13.5c-.5 0-.75 0-1 1a6.347 6.347 0 0 1-.836 1.87 7.47 7.47 0 0 0-1.8.872 6.35 6.35 0 0 1-1.952-.525c-.934-.435-1.092-.24-1.406.148l-.63.777c-.314.389-.472.583.148 1.406.35.464.721 1.15.937 1.857a7.458 7.458 0 0 0-.429 1.894 6.345 6.345 0 0 1-1.643 1.245c-.918.468-.862.712-.75 1.199l.225.974c.113.487.169.731 1.2.75.57.01 1.323.135 2.003.39.345.575.765 1.1 1.247 1.56a6.35 6.35 0 0 1-.072 2.032c-.213 1.008.011 1.118.46 1.337l.9.439c.449.219.674.328 1.337-.46a6.343 6.343 0 0 1 1.59-1.327 7.571 7.571 0 0 0 1.942 0 6.343 6.343 0 0 1 1.59 1.326c.663.79.888.68 1.337.46l.9-.438c.449-.219.673-.329.46-1.337a6.35 6.35 0 0 1-.072-2.031 7.533 7.533 0 0 0 1.247-1.56 6.348 6.348 0 0 1 2.003-.391c1.031-.019 1.087-.263 1.2-.75l.225-.974c.112-.487.168-.73-.75-1.2a6.345 6.345 0 0 1-1.643-1.244 7.458 7.458 0 0 0-.43-1.894 6.342 6.342 0 0 1 .938-1.857c.62-.823.462-1.017.148-1.406l-.63-.777c-.314-.389-.472-.583-1.406-.148a6.35 6.35 0 0 1-1.952.525 7.47 7.47 0 0 0-1.8-.871A6.347 6.347 0 0 1 15.5 5c-.235-.941-.47-.997-.914-1M14 9.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/PanelHeaderContext/PanelHeaderContext.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".PanelHeaderContext--ZdWHR{z-index:var(--vkui_internal--z_index_panel_header_context)}.PanelHeaderContext--closing--U1Xrk,.PanelHeaderContext--opened--OHMZF{height:100%;width:100%}.PanelHeaderContext--sizeX-regular--ijBpw.PanelHeaderContext--closing--U1Xrk,.PanelHeaderContext--sizeX-regular--ijBpw.PanelHeaderContext--opened--OHMZF{height:auto}@media (min-width:768px){.PanelHeaderContext--sizeX-none--r5fbx.PanelHeaderContext--closing--U1Xrk,.PanelHeaderContext--sizeX-none--r5fbx.PanelHeaderContext--opened--OHMZF{height:auto}}.PanelHeaderContext__in--MufTw{box-sizing:border-box;left:0;padding:8px;pointer-events:none;position:absolute;width:100%}.PanelHeaderContext__fade--NtCLo{background:rgba(0,0,0,.4);display:none;height:100%;left:0;position:absolute;top:0;width:100%}.PanelHeaderContext--sizeX-compact--lZYFw .PanelHeaderContext__fade--NtCLo{display:block}@media (max-width:767.9px){.PanelHeaderContext--sizeX-none--r5fbx .PanelHeaderContext__fade--NtCLo{display:block}}.PanelHeaderContext--opened--OHMZF .PanelHeaderContext__fade--NtCLo{animation:animation-panelheadercontext-fade-in--PhfhU .2s ease}.PanelHeaderContext--closing--U1Xrk .PanelHeaderContext__fade--NtCLo{animation:animation-panelheadercontext-fade-out--XC2Na .2s ease}.PanelHeaderContext--opened--OHMZF .PanelHeaderContext__in--MufTw{animation:animation-panelheadercontext-translate-in--U7OfA .2s ease;pointer-events:auto}.PanelHeaderContext--closing--U1Xrk .PanelHeaderContext__in--MufTw{animation:animation-panelheadercontext-translate-out--tkQ0b .2s ease}.PanelHeaderContext__content--o2C9j{background:var(--vkui--color_background_content);overflow:hidden}.PanelHeaderContext--ios--Psolf .PanelHeaderContext__in--MufTw{padding:0}.PanelHeaderContext--sizeX-regular--ijBpw.PanelHeaderContext--ios--Psolf .PanelHeaderContext__content--o2C9j,.PanelHeaderContext--ZdWHR:not(.PanelHeaderContext--ios--Psolf) .PanelHeaderContext__content--o2C9j{border-radius:12px;padding:8px 0}@media (min-width:768px){.PanelHeaderContext--sizeX-none--r5fbx.PanelHeaderContext--ios--Psolf .PanelHeaderContext__content--o2C9j{border-radius:12px;padding:8px 0}}.PanelHeaderContext--sizeX-regular--ijBpw .PanelHeaderContext__in--MufTw{padding:12px 8px}.PanelHeaderContext--sizeX-regular--ijBpw .PanelHeaderContext__content--o2C9j{border-radius:12px;box-shadow:0 0 4px rgba(0,0,0,.08),0 8px 8px rgba(0,0,0,.16)}@media (min-width:768px){.PanelHeaderContext--sizeX-none--r5fbx .PanelHeaderContext__in--MufTw{padding:12px 8px}.PanelHeaderContext--sizeX-none--r5fbx .PanelHeaderContext__content--o2C9j{border-radius:12px;box-shadow:0 0 4px rgba(0,0,0,.08),0 8px 8px rgba(0,0,0,.16)}}@keyframes animation-panelheadercontext-translate-in--U7OfA{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes animation-panelheadercontext-translate-out--tkQ0b{0%{transform:translateY(0)}to{transform:translateY(-100%)}}@keyframes animation-panelheadercontext-fade-in--PhfhU{0%{opacity:0}to{opacity:1}}@keyframes animation-panelheadercontext-fade-out--XC2Na{0%{opacity:1}to{opacity:0}}","",{version:3,sources:["webpack://./src/components/PanelHeaderContext/PanelHeaderContext.module.css"],names:[],mappings:"AAAA,2BACE,0DACF,CAEA,uEAGE,WAAgB,CADhB,UAEF,CAEA,yJAEE,WACF,CAEA,yBACE,mJAEE,WACF,CACF,CAEA,+BAKE,qBAAsB,CAHtB,MAAqB,CAErB,WAAY,CAEZ,mBAAoB,CALpB,iBAAkB,CAElB,UAIF,CAEA,iCAOE,yBAA8B,CAN9B,YAAa,CAGb,WAAgB,CAChB,MAAqB,CAHrB,iBAAkB,CAIlB,KAAoB,CAHpB,UAKF,CAEA,2EACE,aACF,CAEA,2BACE,wEACE,aACF,CACF,CAEA,oEACE,8DACF,CAEA,qEACE,+DACF,CAEA,kEAEE,mEAA8D,CAD9D,mBAEF,CAEA,mEACE,oEACF,CAEA,oCAEE,gDAAiD,CADjD,eAEF,CAEA,+DACE,SACF,CAOA,iNAEE,kBAAmB,CAEnB,aACF,CAEA,yBACE,0GACE,kBAAmB,CAEnB,aACF,CACF,CAMA,yEAEE,gBACF,CAEA,8EACE,kBAAmB,CAInB,4DAHF,CAMA,yBACE,sEAEE,gBACF,CAEA,2EACE,kBAAmB,CAInB,4DAHF,CAKF,CAMA,4DACE,GACE,2BACF,CAEA,GACE,uBACF,CACF,CACA,6DACE,GACE,uBACF,CAEA,GACE,2BACF,CACF,CACA,uDACE,GACE,SACF,CAEA,GACE,SACF,CACF,CACA,wDACE,GACE,SACF,CAEA,GACE,SACF,CACF",sourcesContent:[".PanelHeaderContext {\n  z-index: var(--vkui_internal--z_index_panel_header_context);\n}\n\n.PanelHeaderContext--opened,\n.PanelHeaderContext--closing {\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n.PanelHeaderContext--sizeX-regular.PanelHeaderContext--opened,\n.PanelHeaderContext--sizeX-regular.PanelHeaderContext--closing {\n  block-size: auto;\n}\n\n@media (--sizeX-regular) {\n  .PanelHeaderContext--sizeX-none.PanelHeaderContext--opened,\n  .PanelHeaderContext--sizeX-none.PanelHeaderContext--closing {\n    block-size: auto;\n  }\n}\n\n.PanelHeaderContext__in {\n  position: absolute;\n  inset-inline-start: 0;\n  inline-size: 100%;\n  padding: 8px;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.PanelHeaderContext__fade {\n  display: none;\n  position: absolute;\n  inline-size: 100%;\n  block-size: 100%;\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.PanelHeaderContext--sizeX-compact .PanelHeaderContext__fade {\n  display: block;\n}\n\n@media (--sizeX-compact) {\n  .PanelHeaderContext--sizeX-none .PanelHeaderContext__fade {\n    display: block;\n  }\n}\n\n.PanelHeaderContext--opened .PanelHeaderContext__fade {\n  animation: animation-panelheadercontext-fade-in 0.2s ease;\n}\n\n.PanelHeaderContext--closing .PanelHeaderContext__fade {\n  animation: animation-panelheadercontext-fade-out 0.2s ease;\n}\n\n.PanelHeaderContext--opened .PanelHeaderContext__in {\n  pointer-events: auto;\n  animation: animation-panelheadercontext-translate-in 0.2s ease;\n}\n\n.PanelHeaderContext--closing .PanelHeaderContext__in {\n  animation: animation-panelheadercontext-translate-out 0.2s ease;\n}\n\n.PanelHeaderContext__content {\n  overflow: hidden;\n  background: var(--vkui--color_background_content);\n}\n\n.PanelHeaderContext--ios .PanelHeaderContext__in {\n  padding: 0;\n}\n\n/**\n * Имеется ввиду\n * platform !== 'ios' ||\n * (platform === 'ios' && isDesktop)\n */\n.PanelHeaderContext:not(.PanelHeaderContext--ios) .PanelHeaderContext__content,\n.PanelHeaderContext--sizeX-regular.PanelHeaderContext--ios .PanelHeaderContext__content {\n  border-radius: 12px;\n  padding-block: 8px;\n  padding-inline: 0;\n}\n\n@media (--sizeX-regular) {\n  .PanelHeaderContext--sizeX-none.PanelHeaderContext--ios .PanelHeaderContext__content {\n    border-radius: 12px;\n    padding-block: 8px;\n    padding-inline: 0;\n  }\n}\n\n/*\n Desktop\n */\n\n.PanelHeaderContext--sizeX-regular .PanelHeaderContext__in {\n  padding-block: 12px;\n  padding-inline: 8px;\n}\n\n.PanelHeaderContext--sizeX-regular .PanelHeaderContext__content {\n  border-radius: 12px;\n}\n\n.PanelHeaderContext--sizeX-regular .PanelHeaderContext__content {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08), 0 8px 8px rgba(0, 0, 0, 0.16);\n}\n\n@media (--sizeX-regular) {\n  .PanelHeaderContext--sizeX-none .PanelHeaderContext__in {\n    padding-block: 12px;\n    padding-inline: 8px;\n  }\n\n  .PanelHeaderContext--sizeX-none .PanelHeaderContext__content {\n    border-radius: 12px;\n  }\n\n  .PanelHeaderContext--sizeX-none .PanelHeaderContext__content {\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.08), 0 8px 8px rgba(0, 0, 0, 0.16);\n  }\n}\n\n/*\n  Animations\n */\n\n@keyframes animation-panelheadercontext-translate-in {\n  from {\n    transform: translateY(-100%);\n  }\n\n  to {\n    transform: translateY(0);\n  }\n}\n@keyframes animation-panelheadercontext-translate-out {\n  from {\n    transform: translateY(0);\n  }\n\n  to {\n    transform: translateY(-100%);\n  }\n}\n@keyframes animation-panelheadercontext-fade-in {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n@keyframes animation-panelheadercontext-fade-out {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={PanelHeaderContext:"PanelHeaderContext--ZdWHR","PanelHeaderContext--closing":"PanelHeaderContext--closing--U1Xrk","PanelHeaderContext--opened":"PanelHeaderContext--opened--OHMZF","PanelHeaderContext--sizeX-regular":"PanelHeaderContext--sizeX-regular--ijBpw","PanelHeaderContext--sizeX-none":"PanelHeaderContext--sizeX-none--r5fbx",PanelHeaderContext__in:"PanelHeaderContext__in--MufTw",PanelHeaderContext__fade:"PanelHeaderContext__fade--NtCLo","PanelHeaderContext--sizeX-compact":"PanelHeaderContext--sizeX-compact--lZYFw","animation-panelheadercontext-fade-in":"animation-panelheadercontext-fade-in--PhfhU","animation-panelheadercontext-fade-out":"animation-panelheadercontext-fade-out--XC2Na","animation-panelheadercontext-translate-in":"animation-panelheadercontext-translate-in--U7OfA","animation-panelheadercontext-translate-out":"animation-panelheadercontext-translate-out--tkQ0b",PanelHeaderContext__content:"PanelHeaderContext__content--o2C9j","PanelHeaderContext--ios":"PanelHeaderContext--ios--Psolf"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);