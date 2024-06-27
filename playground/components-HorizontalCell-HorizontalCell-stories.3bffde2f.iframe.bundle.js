"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9445],{"./src/components/Image/Image.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Image});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),ImageBase=__webpack_require__("./src/components/ImageBase/ImageBase.tsx"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),context=__webpack_require__("./src/components/ImageBase/context.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ImageBadge_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Image/ImageBadge/ImageBadge.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ImageBadge_module.A,options);const ImageBadge_ImageBadge_module=ImageBadge_module.A&&ImageBadge_module.A.locals?ImageBadge_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ImageBadge=function(_param){var className=_param.className,restProps=_object_without_properties(_param,["className"]),size=react.useContext(context.S).size;return(0,jsx_runtime.jsx)(ImageBase.vO.Badge,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},restProps),{className:(0,es6.xW)(ImageBadge_ImageBadge_module.ImageBadge,size<96&&ImageBadge_ImageBadge_module["ImageBadge--shifted"],className)}))};ImageBadge.displayName="ImageBadge";try{ImageBadge.displayName="ImageBadge",ImageBadge.__docgenInfo={description:"",displayName:"ImageBadge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/ImageBadge/ImageBadge.tsx#ImageBadge"]={docgenInfo:ImageBadge.__docgenInfo,name:"ImageBadge",path:"src/components/Image/ImageBadge/ImageBadge.tsx#ImageBadge"})}catch(__react_docgen_typescript_loader_error){}function Image_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Image_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Image_define_property(target,key,source[key])}))}return target}function Image_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function Image_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function Image_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function Image_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Image=function(_param){var _param_size=_param.size,size=void 0===_param_size?48:_param_size,tmp=_param.borderRadius,borderRadiusProp=void 0===tmp?"m":tmp,style=_param.style,className=_param.className,restProps=Image_object_without_properties(_param,["size","borderRadius","style","className"]),borderRadius=react.useMemo((function(){return function(size,borderRadius){switch(borderRadius){case"s":return size<=32?2:size<=56?3:4;case"m":return size<=32?3:size<=48?4:size<=72?6:size<=80?8:10;case"l":return size<=16?4:size<=20?5:size<=32?6:size<=40?8:size<=48?10:size<=56?12:size<=64?14:16}}(size,borderRadiusProp)}),[size,borderRadiusProp]);return(0,jsx_runtime.jsx)(ImageBase.vO,Image_object_spread_props(Image_object_spread({},restProps),{size,style:Image_object_spread_props(Image_object_spread({},style),{borderRadius}),className}))};Image.displayName="Image",Image.Badge=ImageBadge,Image.Badge.displayName="Image.Badge",Image.Overlay=ImageBase.vO.Overlay,Image.Overlay.displayName="Image.Overlay";try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{borderRadius:{defaultValue:null,description:"Размер закругления.",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLImageElement>"}},size:{defaultValue:{value:"48"},description:"Задаёт размер картинки.\n\nИспользуйте размеры заданные дизайн-системой `16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96`.\n\n> ⚠️ Использование кастомного размера – это пограничный кейс.",name:"size",required:!1,type:{name:"LiteralUnion<16 | 32 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96, number>"}},widthSize:{defaultValue:null,description:"Ширина изображения",name:"widthSize",required:!1,type:{name:"number"}},heightSize:{defaultValue:null,description:"Высота изображения",name:"heightSize",required:!1,type:{name:"number"}},noBorder:{defaultValue:null,description:"Отключает обводку.",name:"noBorder",required:!1,type:{name:"boolean"}},fallbackIcon:{defaultValue:null,description:"Фолбек на случай, если картинка не прогрузилась.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getFallbackIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.\n\n> ⚠️ Может перекрывать `children`.",name:"fallbackIcon",required:!1,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},withTransparentBackground:{defaultValue:null,description:"Отключает фон, заданный по умолчанию. Полезен для отображения картинок с прозрачностью.\n@since 5.10.0",name:"withTransparentBackground",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/Image.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"src/components/Image/Image.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}try{Badge.displayName="Image.Badge",Badge.__docgenInfo={description:"",displayName:"Image.Badge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/Image.tsx#Image.Badge"]={docgenInfo:Image.Badge.__docgenInfo,name:"Image.Badge",path:"src/components/Image/Image.tsx#Image.Badge"})}catch(__react_docgen_typescript_loader_error){}try{Overlay.displayName="Image.Overlay",Overlay.__docgenInfo={description:"Интерактивный оверлей над картинкой.",displayName:"Image.Overlay",props:{theme:{defaultValue:null,description:"Задаёт тему оформления.\n\n> По умолчанию берётся из параметра `appearance` в `ConfigProvider`.",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},visibility:{defaultValue:null,description:'Определяет каким образом должен показываться оверлей.\n\n- `"on-hover"` – на наведение указателя мыши.\n- `"always"` – всегда показывать.\n\n> По умолчанию определяется в зависимости от того, есть ли у пользователя мышь или нет.',name:"visibility",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"on-hover"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getOverlayIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/Image.tsx#Image.Overlay"]={docgenInfo:Image.Overlay.__docgenInfo,name:"Image.Overlay",path:"src/components/Image/Image.tsx#Image.Overlay"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Subhead/Subhead.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Subhead});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Subhead_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Subhead/Subhead.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Subhead_module.A,options);const Subhead_Subhead_module=Subhead_module.A&&Subhead_module.A.locals?Subhead_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var sizeYClassNames=_define_property({none:Subhead_Subhead_module["Subhead--sizeY-none"]},"compact",Subhead_Subhead_module["Subhead--sizeY-compact"]),Subhead=function(_param){var className=_param.className,_param_Component=_param.Component,Component=void 0===_param_Component?"span":_param_Component,_param_normalize=_param.normalize,normalize=void 0===_param_normalize||_param_normalize,_param_inline=_param.inline,inline=void 0!==_param_inline&&_param_inline,restProps=_object_without_properties(_param,["className","Component","normalize","inline"]),_useAdaptivity_sizeY=(0,useAdaptivity.L)().sizeY,sizeY=void 0===_useAdaptivity_sizeY?"none":_useAdaptivity_sizeY;return(0,jsx_runtime.jsx)(Typography.o,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({Component,normalize,inline,className:(0,es6.xW)(className,Subhead_Subhead_module.Subhead,"regular"!==sizeY&&sizeYClassNames[sizeY])},restProps))};try{Subhead.displayName="Subhead",Subhead.__docgenInfo={description:"Используется для подзаголовков 2 уровня.",displayName:"Subhead",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Subhead/Subhead.tsx#Subhead"]={docgenInfo:Subhead.__docgenInfo,name:"Subhead",path:"src/components/Typography/Subhead/Subhead.tsx#Subhead"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/HorizontalCell/HorizontalCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_hooks_usePlatform__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/usePlatform.ts"),_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/storybook/VKUIDecorators.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts"),_testing_mock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/testing/mock.ts"),_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Flex/Flex.tsx"),_Group_Group__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Group/Group.tsx"),_Image_Image__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Image/Image.tsx"),_HorizontalCell__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/HorizontalCell/HorizontalCell.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/HorizontalCell",component:_HorizontalCell__WEBPACK_IMPORTED_MODULE_1__.F,parameters:_object_spread({},_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eb,_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eC)};var Playground={render:function Render(_param){var values=_param.values,args=_object_without_properties(_param,["values"]),platform=(0,_hooks_usePlatform__WEBPACK_IMPORTED_MODULE_3__.V)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:values.map((function(value){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HorizontalCell__WEBPACK_IMPORTED_MODULE_1__.F,_object_spread_props(_object_spread({header:value.title},args),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image_Image__WEBPACK_IMPORTED_MODULE_4__._,{size:"ios"===platform?64:56,borderRadius:"l",src:value.icon})}),value.id)}))})},args:{values:[{id:1,title:"Промокот",icon:(0,_testing_mock__WEBPACK_IMPORTED_MODULE_5__.TW)("app_promokot")},{id:2,title:"Разделите счёт",icon:(0,_testing_mock__WEBPACK_IMPORTED_MODULE_5__.TW)("app_split_bill")},{id:3,title:"Рассылки",icon:(0,_testing_mock__WEBPACK_IMPORTED_MODULE_5__.TW)("app_emails")},{id:4,title:"Тексты песен",icon:(0,_testing_mock__WEBPACK_IMPORTED_MODULE_5__.TW)("app_lyrics")}]},decorators:[function(Component,context){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Group_Group__WEBPACK_IMPORTED_MODULE_6__.Y,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__.s,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,_object_spread({},context.args))})})},_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_8__.fd,_storybook_VKUIDecorators__WEBPACK_IMPORTED_MODULE_8__.E4]};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render({\n    values,\n    ...args\n  }) {\n    const platform = usePlatform();\n    return <>\n        {values.map(value => {\n        return <HorizontalCell key={value.id} header={value.title} {...args}>\n              <Image size={platform === 'ios' ? 64 : 56} borderRadius=\"l\" src={value.icon} />\n            </HorizontalCell>;\n      })}\n      </>;\n  },\n  args: {\n    values: [{\n      id: 1,\n      title: 'Промокот',\n      icon: getAvatarUrl('app_promokot')\n    }, {\n      id: 2,\n      title: 'Разделите счёт',\n      icon: getAvatarUrl('app_split_bill')\n    }, {\n      id: 3,\n      title: 'Рассылки',\n      icon: getAvatarUrl('app_emails')\n    }, {\n      id: 4,\n      title: 'Тексты песен',\n      icon: getAvatarUrl('app_lyrics')\n    }]\n  },\n  decorators: [(Component, context) => <Group>\n        <Flex>\n          <Component {...context.args} />\n        </Flex>\n      </Group>, withSinglePanel, withVKUILayout]\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Image/ImageBadge/ImageBadge.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ImageBadge--EYcTk{inset-block-end:-4px;inset-inline-end:-4px;position:absolute}.ImageBadge--shifted--PLhGD{inset-block-end:-3px;inset-inline-end:-3px}","",{version:3,sources:["webpack://./src/components/Image/ImageBadge/ImageBadge.module.css"],names:[],mappings:"AAAA,mBAEE,oBAAqB,CACrB,qBAAsB,CAFtB,iBAGF,CAEA,4BACE,oBAAqB,CACrB,qBACF",sourcesContent:[".ImageBadge {\n  position: absolute;\n  inset-block-end: -4px;\n  inset-inline-end: -4px;\n}\n\n.ImageBadge--shifted {\n  inset-block-end: -3px;\n  inset-inline-end: -3px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ImageBadge:"ImageBadge--EYcTk","ImageBadge--shifted":"ImageBadge--shifted--PLhGD"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Subhead/Subhead.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Subhead--aLKgN{font-family:var(--vkui--font_subhead--font_family--regular);font-size:var(--vkui--font_subhead--font_size--regular);font-weight:var(--vkui--font_subhead--font_weight--regular);line-height:var(--vkui--font_subhead--line_height--regular)}.Subhead--sizeY-compact--bY5aX{font-size:var(--vkui--font_subhead--font_size--compact);line-height:var(--vkui--font_subhead--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Subhead--sizeY-none--zWIAB{font-size:var(--vkui--font_subhead--font_size--compact);line-height:var(--vkui--font_subhead--line_height--compact)}}","",{version:3,sources:["webpack://./src/components/Typography/Subhead/Subhead.module.css"],names:[],mappings:"AAAA,gBAIE,2DAA4D,CAH5D,uDAAwD,CAExD,2DAA4D,CAD5D,2DAGF,CAEA,+BACE,uDAAwD,CACxD,2DACF,CAEA,iEACE,4BACE,uDAAwD,CACxD,2DACF,CACF",sourcesContent:[".Subhead {\n  font-size: var(--vkui--font_subhead--font_size--regular);\n  line-height: var(--vkui--font_subhead--line_height--regular);\n  font-weight: var(--vkui--font_subhead--font_weight--regular);\n  font-family: var(--vkui--font_subhead--font_family--regular);\n}\n\n.Subhead--sizeY-compact {\n  font-size: var(--vkui--font_subhead--font_size--compact);\n  line-height: var(--vkui--font_subhead--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Subhead--sizeY-none {\n    font-size: var(--vkui--font_subhead--font_size--compact);\n    line-height: var(--vkui--font_subhead--line_height--compact);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Subhead:"Subhead--aLKgN","Subhead--sizeY-compact":"Subhead--sizeY-compact--bY5aX","Subhead--sizeY-none":"Subhead--sizeY-none--zWIAB"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);