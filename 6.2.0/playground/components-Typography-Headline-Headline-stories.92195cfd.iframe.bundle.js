"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1405],{"./src/components/Typography/Headline/Headline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Headline});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Headline_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Headline/Headline.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Headline_module.A,options);const Headline_Headline_module=Headline_module.A&&Headline_module.A.locals?Headline_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var stylesLevel={1:Headline_Headline_module["Headline--level-1"],2:Headline_Headline_module["Headline--level-2"]},sizeYClassNames=_define_property({none:Headline_Headline_module["Headline--sizeY-none"]},"compact",Headline_Headline_module["Headline--sizeY-compact"]),Headline=function(_param){var className=_param.className,_param_weight=_param.weight,weight=void 0===_param_weight?"3":_param_weight,_param_level=_param.level,level=void 0===_param_level?"1":_param_level,_param_Component=_param.Component,Component=void 0===_param_Component?"span":_param_Component,_param_normalize=_param.normalize,normalize=void 0===_param_normalize||_param_normalize,_param_inline=_param.inline,inline=void 0!==_param_inline&&_param_inline,restProps=_object_without_properties(_param,["className","weight","level","Component","normalize","inline"]),_useAdaptivity_sizeY=(0,useAdaptivity.L)().sizeY,sizeY=void 0===_useAdaptivity_sizeY?"none":_useAdaptivity_sizeY;return(0,jsx_runtime.jsx)(Typography.o,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({Component,normalize,inline,weight,className:(0,es6.xW)(className,"regular"!==sizeY&&sizeYClassNames[sizeY],stylesLevel[level])},restProps))};try{Headline.displayName="Headline",Headline.__docgenInfo={description:"Используется для подзаголовков.",displayName:"Headline",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},weight:{defaultValue:{value:"3"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Headline/Headline.tsx#Headline"]={docgenInfo:Headline.__docgenInfo,name:"Headline",path:"src/components/Typography/Headline/Headline.tsx#Headline"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});var CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"../../tools/storybook-addon-cartesian/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L1:()=>withCartesian});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"};var withCartesian=function(StoryFn,context){var argTypes=context.argTypes,cartesian=context.args.cartesian,restArgs=_object_without_properties(context.args,["cartesian"]);if(cartesian){var variants=function cartesianFunc(){var propDesc=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],argTypes=arguments.length>1?arguments[1]:void 0;return Object.entries(propDesc).reduce((function(acc,param){var _param=_sliced_to_array(param,2),prop=_param[0],values=_param[1],res=[];return acc.forEach((function(props){values.forEach((function(value){var mapping=argTypes[prop].mapping;res.push(_object_spread_props(_object_spread({},props),_define_property({},prop,mapping?mapping[value]:value)))}))})),res}),[{}])}(cartesian,argTypes);return(0,jsx_runtime.jsx)("div",{style:CartesianContainerStyle,children:variants.map((function(ops,index){return(0,jsx_runtime.jsx)(StoryFn,{args:_object_spread({},restArgs,ops)},index)}))})}return(0,jsx_runtime.jsx)(StoryFn,{args:restArgs})};"".concat("storybook/addon-cartesian","/tool")},"./src/components/Typography/Headline/Headline.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_Headline__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography/Headline/Headline.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}const __WEBPACK_DEFAULT_EXPORT__={title:"Typography/Headline",component:_Headline__WEBPACK_IMPORTED_MODULE_2__.$,parameters:_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eb,decorators:[_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__.L1]};var Playground={render:function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Headline__WEBPACK_IMPORTED_MODULE_2__.$,_object_spread_props(_object_spread({level:"1"},args),{children:"Headline 1"})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Headline__WEBPACK_IMPORTED_MODULE_2__.$,_object_spread_props(_object_spread({level:"2"},args),{children:"Headline 2"}))]})}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <div>\n      <Headline level="1" {...args}>\n        Headline 1\n      </Headline>\n      <Headline level="2" {...args}>\n        Headline 2\n      </Headline>\n    </div>\n}',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Headline/Headline.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Headline--level-1--qhWG1{font-family:var(--vkui--font_headline1--font_family--regular);font-size:var(--vkui--font_headline1--font_size--regular);font-weight:var(--vkui--font_headline1--font_weight--regular);line-height:var(--vkui--font_headline1--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}}.Headline--level-2--iu4Uh{font-family:var(--vkui--font_headline2--font_family--regular);font-size:var(--vkui--font_headline2--font_size--regular);font-weight:var(--vkui--font_headline2--font_weight--regular);line-height:var(--vkui--font_headline2--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}}","",{version:3,sources:["webpack://./src/components/Typography/Headline/Headline.module.css"],names:[],mappings:"AAAA,0BAIE,6DAA8D,CAH9D,yDAA0D,CAE1D,6DAA8D,CAD9D,6DAGF,CAEA,yDACE,yDAA0D,CAC1D,6DACF,CAEA,iEACE,sDACE,yDAA0D,CAC1D,6DACF,CACF,CAEA,0BAIE,6DAA8D,CAH9D,yDAA0D,CAE1D,6DAA8D,CAD9D,6DAGF,CAEA,yDACE,yDAA0D,CAC1D,6DACF,CAEA,iEACE,sDACE,yDAA0D,CAC1D,6DACF,CACF",sourcesContent:[".Headline--level-1 {\n  font-size: var(--vkui--font_headline1--font_size--regular);\n  line-height: var(--vkui--font_headline1--line_height--regular);\n  font-weight: var(--vkui--font_headline1--font_weight--regular);\n  font-family: var(--vkui--font_headline1--font_family--regular);\n}\n\n.Headline--sizeY-compact.Headline--level-1 {\n  font-size: var(--vkui--font_headline1--font_size--compact);\n  line-height: var(--vkui--font_headline1--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Headline--sizeY-none.Headline--level-1 {\n    font-size: var(--vkui--font_headline1--font_size--compact);\n    line-height: var(--vkui--font_headline1--line_height--compact);\n  }\n}\n\n.Headline--level-2 {\n  font-size: var(--vkui--font_headline2--font_size--regular);\n  line-height: var(--vkui--font_headline2--line_height--regular);\n  font-weight: var(--vkui--font_headline2--font_weight--regular);\n  font-family: var(--vkui--font_headline2--font_family--regular);\n}\n\n.Headline--sizeY-compact.Headline--level-2 {\n  font-size: var(--vkui--font_headline2--font_size--compact);\n  line-height: var(--vkui--font_headline2--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Headline--sizeY-none.Headline--level-2 {\n    font-size: var(--vkui--font_headline2--font_size--compact);\n    line-height: var(--vkui--font_headline2--line_height--compact);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"Headline--level-1":"Headline--level-1--qhWG1","Headline--sizeY-compact":"Headline--sizeY-compact--hkUOV","Headline--sizeY-none":"Headline--sizeY-none--eRbzg","Headline--level-2":"Headline--level-2--iu4Uh"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);