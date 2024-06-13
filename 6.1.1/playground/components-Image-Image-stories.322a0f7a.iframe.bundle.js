"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1791],{"./src/components/Image/Image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/storybook/constants.ts"),_testing_mock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/testing/mock.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Image",component:__webpack_require__("./src/components/Image/Image.tsx")._,parameters:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_storybook_constants__WEBPACK_IMPORTED_MODULE_1__.eb,_storybook_constants__WEBPACK_IMPORTED_MODULE_1__.eC)};var Playground={args:{src:(0,_testing_mock__WEBPACK_IMPORTED_MODULE_2__.TW)("app_shorm_online"),alt:"Приложение шторм онлайн"}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: getAvatarUrl('app_shorm_online'),\n    alt: 'Приложение шторм онлайн'\n  }\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Image/ImageBadge/ImageBadge.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ImageBadge--EYcTk{inset-block-end:-4px;inset-inline-end:-4px;position:absolute}.ImageBadge--shifted--PLhGD{inset-block-end:-3px;inset-inline-end:-3px}","",{version:3,sources:["webpack://./src/components/Image/ImageBadge/ImageBadge.module.css"],names:[],mappings:"AAAA,mBAEE,oBAAqB,CACrB,qBAAsB,CAFtB,iBAGF,CAEA,4BACE,oBAAqB,CACrB,qBACF",sourcesContent:[".ImageBadge {\n  position: absolute;\n  inset-block-end: -4px;\n  inset-inline-end: -4px;\n}\n\n.ImageBadge--shifted {\n  inset-block-end: -3px;\n  inset-inline-end: -3px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ImageBadge:"ImageBadge--EYcTk","ImageBadge--shifted":"ImageBadge--shifted--PLhGD"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Image/Image.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Image});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),ImageBase=__webpack_require__("./src/components/ImageBase/ImageBase.tsx"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),context=__webpack_require__("./src/components/ImageBase/context.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ImageBadge_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Image/ImageBadge/ImageBadge.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ImageBadge_module.A,options);const ImageBadge_ImageBadge_module=ImageBadge_module.A&&ImageBadge_module.A.locals?ImageBadge_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ImageBadge=function(_param){var className=_param.className,restProps=_object_without_properties(_param,["className"]),size=react.useContext(context.S).size;return(0,jsx_runtime.jsx)(ImageBase.vO.Badge,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},restProps),{className:(0,es6.xW)(ImageBadge_ImageBadge_module.ImageBadge,size<96&&ImageBadge_ImageBadge_module["ImageBadge--shifted"],className)}))};ImageBadge.displayName="ImageBadge";try{ImageBadge.displayName="ImageBadge",ImageBadge.__docgenInfo={description:"",displayName:"ImageBadge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/ImageBadge/ImageBadge.tsx#ImageBadge"]={docgenInfo:ImageBadge.__docgenInfo,name:"ImageBadge",path:"src/components/Image/ImageBadge/ImageBadge.tsx#ImageBadge"})}catch(__react_docgen_typescript_loader_error){}function Image_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Image_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Image_define_property(target,key,source[key])}))}return target}function Image_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function Image_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function Image_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function Image_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Image=function(_param){var _param_size=_param.size,size=void 0===_param_size?48:_param_size,tmp=_param.borderRadius,borderRadiusProp=void 0===tmp?"m":tmp,style=_param.style,className=_param.className,restProps=Image_object_without_properties(_param,["size","borderRadius","style","className"]),borderRadius=react.useMemo((function(){return function(size,borderRadius){switch(borderRadius){case"s":return size<=32?2:size<=56?3:4;case"m":return size<=32?3:size<=48?4:size<=72?6:size<=80?8:10;case"l":return size<=16?4:size<=20?5:size<=32?6:size<=40?8:size<=48?10:size<=56?12:size<=64?14:16}}(size,borderRadiusProp)}),[size,borderRadiusProp]);return(0,jsx_runtime.jsx)(ImageBase.vO,Image_object_spread_props(Image_object_spread({},restProps),{size,style:Image_object_spread_props(Image_object_spread({},style),{borderRadius}),className}))};Image.displayName="Image",Image.Badge=ImageBadge,Image.Badge.displayName="Image.Badge",Image.Overlay=ImageBase.vO.Overlay,Image.Overlay.displayName="Image.Overlay";try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{borderRadius:{defaultValue:null,description:"Размер закругления.",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLImageElement>"}},size:{defaultValue:{value:"48"},description:"Задаёт размер картинки.\n\nИспользуйте размеры заданные дизайн-системой `16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96`.\n\n> ⚠️ Использование кастомного размера – это пограничный кейс.",name:"size",required:!1,type:{name:"LiteralUnion<16 | 32 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96, number>"}},widthSize:{defaultValue:null,description:"Ширина изображения",name:"widthSize",required:!1,type:{name:"number"}},heightSize:{defaultValue:null,description:"Высота изображения",name:"heightSize",required:!1,type:{name:"number"}},noBorder:{defaultValue:null,description:"Отключает обводку.",name:"noBorder",required:!1,type:{name:"boolean"}},fallbackIcon:{defaultValue:null,description:"Фолбек на случай, если картинка не прогрузилась.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getFallbackIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.\n\n> ⚠️ Может перекрывать `children`.",name:"fallbackIcon",required:!1,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},withTransparentBackground:{defaultValue:null,description:"Отключает фон, заданный по умолчанию. Полезен для отображения картинок с прозрачностью.\n@since 5.10.0",name:"withTransparentBackground",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/Image.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"src/components/Image/Image.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}try{Badge.displayName="Image.Badge",Badge.__docgenInfo={description:"",displayName:"Image.Badge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/Image.tsx#Image.Badge"]={docgenInfo:Image.Badge.__docgenInfo,name:"Image.Badge",path:"src/components/Image/Image.tsx#Image.Badge"})}catch(__react_docgen_typescript_loader_error){}try{Overlay.displayName="Image.Overlay",Overlay.__docgenInfo={description:"Интерактивный оверлей над картинкой.",displayName:"Image.Overlay",props:{theme:{defaultValue:null,description:"Задаёт тему оформления.\n\n> По умолчанию берётся из параметра `appearance` в `ConfigProvider`.",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},visibility:{defaultValue:null,description:'Определяет каким образом должен показываться оверлей.\n\n- `"on-hover"` – на наведение указателя мыши.\n- `"always"` – всегда показывать.\n\n> По умолчанию определяется в зависимости от того, есть ли у пользователя мышь или нет.',name:"visibility",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"on-hover"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getOverlayIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Image/Image.tsx#Image.Overlay"]={docgenInfo:Image.Overlay.__docgenInfo,name:"Image.Overlay",path:"src/components/Image/Image.tsx#Image.Overlay"})}catch(__react_docgen_typescript_loader_error){}},"./src/testing/mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E8:()=>cities,TW:()=>getAvatarUrl,hw:()=>getRandomInt,$A:()=>getRandomUser,uM:()=>getRandomUsers});var user_dataset_users=[{id:3520,first_name:"Вадим",last_name:"Дорохов",screen_name:"dorokhov",photo_100:"https://sun9-60.userapi.com/c855032/v855032963/15d4f9/XOQY9NSlP5A.jpg?ava=1",photo_200:"https://sun9-32.userapi.com/c855032/v855032963/15d4f8/YWT1CBkuDUM.jpg?ava=1"},{id:83492458,first_name:"Влад",last_name:"Анесов",screen_name:"va",photo_100:"https://sun9-44.userapi.com/c858128/v858128761/67fe1/nAnraWnpHK8.jpg?ava=1",photo_200:"https://sun9-69.userapi.com/c858128/v858128761/67fe0/itnUs52j974.jpg?ava=1"},{id:79153907,first_name:"Александр",last_name:"Колобов",screen_name:"iamaleko",photo_100:"https://sun9-44.userapi.com/c848528/v848528590/1e57b2/JA3HmfitPZU.jpg?ava=1",photo_200:"https://sun9-55.userapi.com/c848528/v848528590/1e57b1/rwQw-askMow.jpg?ava=1"},{id:403563269,first_name:"Artur",last_name:"Stambultsian",screen_name:"arthurstam",photo_100:"https://sun9-61.userapi.com/O-2f7t0yecmx38WXoF37RkhkJTG2rcjL4Yq88w/J39s0u1f90c.jpg?ava=1",photo_200:"https://sun9-62.userapi.com/z4_z-ls5mVpMw1edyggl4gz6RoItDjH0pGxbyg/FII3YzuW73Y.jpg?ava=1"},{id:1122996,first_name:"Илья",last_name:"Таратухин",screen_name:"darkilfa",photo_100:"https://sun9-19.userapi.com/yGUuBADgtYRKU5yN_Vb3UkZL6PEaY3OWTBCEeA/bGpg5AL0WiM.jpg?ava=1",photo_200:"https://sun9-57.userapi.com/K2opK6HGnGq1eQ292zUP4q4IAjjdxOcixJxbBw/VbOeiRIGEnI.jpg?ava=1"},{id:26277006,first_name:"Роман",last_name:"Захаров",screen_name:"rom",photo_100:"https://sun9-21.userapi.com/c854428/v854428614/479c6/jSqse8LyfS8.jpg?ava=1",photo_200:"https://sun9-31.userapi.com/c854428/v854428614/479c5/tQyKztSqZfU.jpg?ava=1"},{id:818250,first_name:"Миша",last_name:"Андриевский",screen_name:"m.andrievskiy",photo_100:"https://sun9-52.userapi.com/c846017/v846017974/114170/WFIMAZh8H1o.jpg?ava=1",photo_200:"https://sun9-21.userapi.com/c846017/v846017974/11416f/4geIRdA2GkQ.jpg?ava=1"},{id:37700627,first_name:"Тарас",last_name:"Иванов",screen_name:"ti",photo_100:"https://sun9-16.userapi.com/c857724/v857724589/9c7ad/01M-8UlcNoo.jpg?ava=1",photo_200:"https://sun9-29.userapi.com/c857724/v857724589/9c7ac/_OQ6lzK7PSc.jpg?ava=1"},{id:92093600,first_name:"Илья",last_name:"Гришин",screen_name:"ilyagrshn",photo_100:"https://sun9-34.userapi.com/c857132/v857132690/49628/r4wBoWw0mJI.jpg?ava=1",photo_200:"https://sun9-14.userapi.com/c857132/v857132690/49627/MCT6QoygisY.jpg?ava=1"},{id:274123,first_name:"Илья",last_name:"Пеняев",screen_name:"ia",photo_100:"https://sun9-53.userapi.com/c857620/v857620811/76951/_1bkgzBj5M0.jpg?ava=1",photo_200:"https://sun9-13.userapi.com/c857620/v857620811/76950/mcdVNs_siHk.jpg?ava=1"},{id:50875477,first_name:"Иван",last_name:"Барышев",screen_name:"wayshev",photo_100:"https://sun9-4.userapi.com/oDjqp-AYVog1kuee5JOjzP9fMOvzCWCGBY0YHg/WW88aTocBxA.jpg?ava=1",photo_200:"https://sun9-5.userapi.com/-NguPXLiF8tpwvEwBjtPgz89ads9fadFWCLxYw/o0xdilzOClE.jpg?ava=1"},{id:54986442,first_name:"Иван",last_name:"Гусев",screen_name:"girl",photo_100:"https://sun9-9.userapi.com/U_neC4C0b0k2TacpGigQf_4cbGKN7Z7tj4QzHQ/WCj1fIGbtZ8.jpg?ava=1",photo_200:"https://sun9-13.userapi.com/EdYJ0DLky80jbtItUYw6BZliBw9KDNxxPUjuSA/vdEHQgCkWdI.jpg?ava=1"},{id:690765,first_name:"Макс",last_name:"Павлов",screen_name:"mp",photo_100:"https://sun9-5.userapi.com/c852232/v852232119/15fdda/0Ghe0f06u3s.jpg?ava=1",photo_200:"https://sun9-55.userapi.com/c852232/v852232119/15fdd9/hXPvs--xpBE.jpg?ava=1"},{id:494075,first_name:"Антон",last_name:"Циварев",screen_name:"tsivarev",photo_100:"https://sun9-47.userapi.com/c830708/v830708352/1c50b4/Nl8LPuMRj5k.jpg?ava=1",photo_200:"https://sun9-71.userapi.com/c830708/v830708352/1c50b3/W-ZDnTalKLE.jpg?ava=1"},{id:168850,first_name:"Юля",last_name:"Брук",screen_name:"yb",photo_100:"https://sun9-9.userapi.com/c850032/v850032014/5a495/rZnSh_81UgY.jpg?ava=1",photo_200:"https://sun9-44.userapi.com/c850032/v850032014/5a494/4xtk-O2o1Z4.jpg?ava=1"},{id:6492,first_name:"Андрей",last_name:"Рогозов",screen_name:"andrew",photo_100:"https://sun9-27.userapi.com/c837536/v837536492/2f070/HT6-ucTq-cQ.jpg?ava=1",photo_200:"https://sun9-41.userapi.com/c837536/v837536492/2f06f/O0YuCLtzlDg.jpg?ava=1"},{id:53448,first_name:"Андрей",last_name:"Новосельский",screen_name:"andrewnovoselsky",photo_100:"https://sun9-44.userapi.com/c848628/v848628445/16041a/6K1dtEwQl5g.jpg?ava=1",photo_200:"https://sun9-57.userapi.com/c848628/v848628445/160419/pT8x_uOMMlc.jpg?ava=1"},{id:331639485,first_name:"Igor",last_name:"Fedorov",screen_name:"xyz",photo_100:"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1",photo_200:"https://sun9-50.userapi.com/mN6GLkHt4Ul_AoWy-qGsHyOGrq3zdYboHvo8Cg/T87c3LJBVuk.jpg?ava=1"},{id:52826694,first_name:"Михаил",last_name:"Лихачёв",screen_name:"lihachyov",photo_100:"https://sun9-49.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1",photo_200:"https://sun9-28.userapi.com/c850332/v850332555/11502f/rVlRIjlWkWw.jpg?ava=1"},{id:2604586,first_name:"Тимофей",last_name:"Чаптыков",screen_name:"tc",photo_100:"https://sun9-60.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1",photo_200:"https://sun9-19.userapi.com/c851416/v851416327/be83f/zS1b6d0GLvs.jpg?ava=1"},{id:163093483,first_name:"Алексей",last_name:"Мазелюк",screen_name:"mm",photo_100:"https://sun9-60.userapi.com/c855124/v855124003/167f36/TzgXYX1Izqk.jpg?ava=1",photo_200:"https://sun9-15.userapi.com/c855124/v855124003/167f35/lbGw8DnDPbs.jpg?ava=1"},{id:61351294,first_name:"Евгений",last_name:"Котляров",screen_name:"eee",photo_100:"https://sun9-48.userapi.com/MTiajl5N6b467FGSPppTxnMvk3DSjWVaImgCjw/n4ajtifm__g.jpg?ava=1",photo_200:"https://sun9-21.userapi.com/Qs3nvx49pimar_UID28JXOIcVEA_4Yx3Itd8CQ/ORdcJxdkow8.jpg?ava=1"},{id:19039187,first_name:"Иван",last_name:"Недзвецкий",screen_name:"in",photo_100:"https://sun9-71.userapi.com/S6sD78Ezdj0a63Tm3wU2gzS1sq-bP42TwKLYGg/BRRvQaRNJPE.jpg?ava=1",photo_200:"https://sun9-32.userapi.com/SXlqIOOYqVZyfmcOE66dnWvK-dguVsLYXbw1KQ/c3lwSlf75qM.jpg?ava=1"},{id:3538429,first_name:"Иван",last_name:"Тимофеев",screen_name:"ox",photo_100:"https://sun9-11.userapi.com/c858420/v858420276/5e9b7/WodDi1aEvFQ.jpg?ava=1",photo_200:"https://sun9-8.userapi.com/c858420/v858420276/5e9b6/QrbYATzAdQc.jpg?ava=1"},{id:84115983,first_name:"Настя",last_name:"Манзюк",screen_name:"manzuk",photo_100:"https://sun9-72.userapi.com/c857628/v857628986/22ddf/6gkgoYPj-Ms.jpg?ava=1",photo_200:"https://sun9-11.userapi.com/c857628/v857628986/22dde/4AiaIut-n5g.jpg?ava=1"},{id:82613762,first_name:"Jean",last_name:"Isahakyan",screen_name:"ji",photo_100:"https://sun9-27.userapi.com/zmcGxRfZe3fdjIdMlq0OgjYGfIdYGOF67YfiLQ/TJi2eetIwN0.jpg?ava=1",photo_200:"https://sun9-14.userapi.com/l5q9tXplH5akRTPKfhqkJynKdCd6DcHImS9z3g/kWUJAOv51o0.jpg?ava=1"},{id:66748,first_name:"Олег",last_name:"Илларионов",screen_name:"illarionov",photo_100:"https://sun9-18.userapi.com/c841629/v841629884/290aa/TUPsSYQXzKg.jpg?ava=1",photo_200:"https://sun9-36.userapi.com/c841629/v841629884/290a9/xwmA1U54rNw.jpg?ava=1"},{id:34,first_name:"Татьяна",last_name:"Плуталова",screen_name:"id34",photo_100:"https://sun9-70.userapi.com/c636327/v636327034/2be84/TYzZpZ8BL0k.jpg?ava=1",photo_200:"https://sun9-12.userapi.com/c636327/v636327034/2be83/n8JO0z5V8FA.jpg?ava=1"},{id:39840293,first_name:"Евгений",last_name:"Авсиевич",screen_name:"evg",photo_100:"https://sun9-19.userapi.com/c846020/v846020298/1d0e79/R41LGoPtIK0.jpg?ava=1",photo_200:"https://sun9-67.userapi.com/c846020/v846020298/1d0e78/Nte_l9WWJTU.jpg?ava=1"},{id:2050,first_name:"Катя",last_name:"Лебедева",screen_name:"me",photo_100:"https://sun9-45.userapi.com/c857436/v857436004/f3f2c/eQ-xaP73964.jpg?ava=1",photo_200:"https://sun9-55.userapi.com/c857436/v857436004/f3f2b/81R9C6HQ7GI.jpg?ava=1"},{id:1986125,first_name:"Настя",last_name:"Семенюк",screen_name:"ya",photo_100:"https://sun9-13.userapi.com/c855036/v855036032/16d259/tJwjpfzoPRc.jpg?ava=1",photo_200:"https://sun9-24.userapi.com/c855036/v855036032/16d258/RiAL8XjFGqs.jpg?ava=1"},{id:13329312,first_name:"Павел",last_name:"Князев",screen_name:"apvel",photo_100:"https://sun9-52.userapi.com/c844521/v844521213/83b9f/uYAH_OJZisM.jpg?ava=1",photo_200:"https://sun9-9.userapi.com/c844521/v844521213/83b9e/eQ-X89V6J3k.jpg?ava=1"},{id:242670751,first_name:"Кирилл",last_name:"Аверьянов",screen_name:"kir",photo_100:"https://sun9-68.userapi.com/c849032/v849032673/112633/pUPD0KXXWGc.jpg?ava=1",photo_200:"https://sun9-53.userapi.com/c849032/v849032673/112632/cVO914r-OsU.jpg?ava=1"},{id:151477469,first_name:"Коля",last_name:"Борисов",screen_name:"casper6479",photo_100:"https://sun9-12.userapi.com/c850128/v850128006/86340/1IV4iSrVWQY.jpg?ava=1",photo_200:"https://sun9-2.userapi.com/c850128/v850128006/8633f/yRgM9VtYjBA.jpg?ava=1"},{id:152199439,first_name:"Виталя",last_name:"Волынский",screen_name:"vitalyavolyn",photo_100:"https://sun9-55.userapi.com/c848416/v848416376/1b82ab/K5YJ8Htn3as.jpg?ava=1",photo_200:"https://sun9-56.userapi.com/c848416/v848416376/1b82aa/IhAknTNCFjE.jpg?ava=1"}];function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1)+min)}function getRandomArrayElement(items){return items[Math.floor(Math.random()*items.length)]}var photos={app_shorm_online:{photo_100:"https://pp.userapi.com/c844616/v844616889/9ec4a/9Fk-RI7uchQ.jpg"},app_shashki:{photo_100:"https://pp.userapi.com/c848536/v848536020/18242/ZLjAYM59EqY.jpg"},app_vega_mix:{photo_100:"https://pp.userapi.com/c849028/v849028348/1b353/Na_GRlqgRNM.jpg"},app_zagadki:{photo_100:"https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg",photo_200:"https://pp.userapi.com/c639222/v639222699/5e1d8/2wtUaVn4Pho.jpg"},app_promokot:{photo_100:"https://sun9-54.userapi.com/c850536/v850536134/15096d/6806J7q6YwM.jpg"},app_split_bill:{photo_100:"https://sun9-20.userapi.com/c857416/v857416681/fc6d0/06XQvs4SyiE.jpg"},app_emails:{photo_100:"https://sun9-50.userapi.com/c850536/v850536397/129313/qdVJ7A7xd70.jpg"},app_lyrics:{photo_100:"https://sun9-41.userapi.com/Zf2HluZJZDYjTbxhnSfeYnHtttBYsYbdjJ3QJQ/aDcJQrVVnbQ.jpg"},audio_arctic_monkeys:{photo_100:"https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg"},audio_leto_zveri:{photo_100:"https://pp.userapi.com/c845220/v845220642/7cacc/XzhH5b7FSKY.jpg"},audio_depeche_mode:{photo_100:"https://pp.userapi.com/c837628/v837628453/39175/4JRjMaFvCrw.jpg"},audio_linkin_park:{photo_100:"https://pp.userapi.com/c846120/v846120617/1ff005/WmCcgV5CozY.jpg"},audio_face:{photo_100:"https://pp.userapi.com/c845218/v845218888/182681/Al6XrhpJYn0.jpg"},chat_basketball:{photo_100:"https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg",photo_200:"https://pp.userapi.com/c849324/v849324409/1cacfa/MLy1Lzz_q6E.jpg"}};function getAvatarUrl(id,size){var object;return(null==id?void 0:id.startsWith("user_"))?(object=user_dataset_users.find((function(user){return"user_"+user.screen_name===id})))||(object=getRandomArrayElement(user_dataset_users)):(id&&photos.hasOwnProperty(id)||(id=function getRandomObjectKey(object){var keys=Object.keys(object);return keys[keys.length*Math.random()<<0]}(photos)),object=photos[id]),200===size&&object.photo_200||object.photo_100}function prepareUser(user){return _object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},user),{name:"".concat(user.first_name," ").concat(user.last_name),initials:"".concat(user.first_name[0]).concat(user.last_name[0])})}function getRandomUser(){var user=Object.assign({},getRandomArrayElement(user_dataset_users));return user.id=getRandomInt(1,2e9),prepareUser(user)}function getRandomUsers(count){for(var items=[],names={},i=0;i<count;i++){var user=getRandomUser();if(names[user.name])for(var j=0;j<5&&names[(user=getRandomUser()).name];j++);items.push(user),names[user.name]=!0}return items}var cities=[{label:"Санкт-Петербург",description:"Россия",value:"0"},{label:"Москва",description:"Россия",value:"1"},{label:"Новосибирск",description:"Россия",disabled:!0,value:"2"},{label:"Нью-Йорк",description:"США",value:"3"},{label:"Чикаго",description:"США",value:"4"}]}}]);