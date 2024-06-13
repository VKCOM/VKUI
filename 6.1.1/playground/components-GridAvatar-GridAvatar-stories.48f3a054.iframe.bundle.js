"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5511],{"./src/components/GridAvatar/GridAvatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GridAvatar_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),src=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),constants=__webpack_require__("./src/storybook/constants.ts"),icons=__webpack_require__("./src/testing/icons.tsx"),mock=__webpack_require__("./src/testing/mock.ts"),types=__webpack_require__("./src/components/ImageBase/types.ts"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),warnOnce=__webpack_require__("./src/lib/warnOnce.ts"),ImageBase=__webpack_require__("./src/components/ImageBase/ImageBase.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),context=__webpack_require__("./src/components/ImageBase/context.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),GridAvatarBadge_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/GridAvatar/GridAvatarBadge/GridAvatarBadge.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(GridAvatarBadge_module.A,options);const GridAvatarBadge_GridAvatarBadge_module=GridAvatarBadge_module.A&&GridAvatarBadge_module.A.locals?GridAvatarBadge_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var GridAvatarBadge=function(_param){var className=_param.className,restProps=_object_without_properties(_param,["className"]),size=react.useContext(context.S).size;return(0,jsx_runtime.jsx)(ImageBase.vO.Badge,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},restProps),{className:(0,es6.xW)(GridAvatarBadge_GridAvatarBadge_module.GridAvatarBadge,size<96&&GridAvatarBadge_GridAvatarBadge_module["GridAvatarBadge--shifted"],className)}))};try{GridAvatarBadge.displayName="GridAvatarBadge",GridAvatarBadge.__docgenInfo={description:"",displayName:"GridAvatarBadge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GridAvatar/GridAvatarBadge/GridAvatarBadge.tsx#GridAvatarBadge"]={docgenInfo:GridAvatarBadge.__docgenInfo,name:"GridAvatarBadge",path:"src/components/GridAvatar/GridAvatarBadge/GridAvatarBadge.tsx#GridAvatarBadge"})}catch(__react_docgen_typescript_loader_error){}var GridAvatar_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/GridAvatar/GridAvatar.module.css"),GridAvatar_module_options={attributes:{class:"vkui-style"}};GridAvatar_module_options.setAttributes=setAttributesWithAttributesAndNonce_default(),GridAvatar_module_options.insert=insertBySelector_default().bind(null,"head"),GridAvatar_module_options.domAPI=singletonStyleDomAPI_default(),GridAvatar_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(GridAvatar_module.A,GridAvatar_module_options);const GridAvatar_GridAvatar_module=GridAvatar_module.A&&GridAvatar_module.A.locals?GridAvatar_module.A.locals:void 0;function GridAvatar_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function GridAvatar_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function GridAvatar_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function GridAvatar_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function GridAvatar_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}(0,warnOnce.m)("GridAvatar");var GridAvatar=function(_param){var _param_src=_param.src,src=void 0===_param_src?[]:_param_src,_param_size=_param.size,size=void 0===_param_size?48:_param_size,className=_param.className,children=_param.children,restProps=GridAvatar_object_without_properties(_param,["src","size","className","children"]);return(0,jsx_runtime.jsxs)(ImageBase.vO,GridAvatar_object_spread_props(function GridAvatar_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){GridAvatar_define_property(target,key,source[key])}))}return target}({},restProps),{size,className:(0,es6.xW)(GridAvatar_GridAvatar_module.GridAvatar,className),children:[(0,jsx_runtime.jsx)("div",{className:GridAvatar_GridAvatar_module.GridAvatar__in,"aria-hidden":!0,children:src.map((function(url,index){return index<4?(0,jsx_runtime.jsx)("div",{className:GridAvatar_GridAvatar_module.GridAvatar__item,style:{backgroundImage:"url(".concat(url,")")}},url):null}))}),children]}))};GridAvatar.Badge=GridAvatarBadge;try{GridAvatar.displayName="GridAvatar",GridAvatar.__docgenInfo={description:"",displayName:"GridAvatar",props:{src:{defaultValue:{value:"[]"},description:"Массив со ссылками. От 1 до 4 элементов.",name:"src",required:!1,type:{name:"string[]"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLImageElement>"}},size:{defaultValue:{value:"48"},description:"Задаёт размер картинки.\n\nИспользуйте размеры заданные дизайн-системой `16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96`.\n\n> ⚠️ Использование кастомного размера – это пограничный кейс.",name:"size",required:!1,type:{name:"LiteralUnion<16 | 32 | 20 | 24 | 28 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96, number>"}},widthSize:{defaultValue:null,description:"Ширина изображения",name:"widthSize",required:!1,type:{name:"number"}},heightSize:{defaultValue:null,description:"Высота изображения",name:"heightSize",required:!1,type:{name:"number"}},noBorder:{defaultValue:null,description:"Отключает обводку.",name:"noBorder",required:!1,type:{name:"boolean"}},withTransparentBackground:{defaultValue:null,description:"Отключает фон, заданный по умолчанию. Полезен для отображения картинок с прозрачностью.\n@since 5.10.0",name:"withTransparentBackground",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GridAvatar/GridAvatar.tsx#GridAvatar"]={docgenInfo:GridAvatar.__docgenInfo,name:"GridAvatar",path:"src/components/GridAvatar/GridAvatar.tsx#GridAvatar"})}catch(__react_docgen_typescript_loader_error){}try{Badge.displayName="GridAvatar.Badge",Badge.__docgenInfo={description:"",displayName:"GridAvatar.Badge",props:{background:{defaultValue:null,description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GridAvatar/GridAvatar.tsx#GridAvatar.Badge"]={docgenInfo:GridAvatar.Badge.__docgenInfo,name:"GridAvatar.Badge",path:"src/components/GridAvatar/GridAvatar.tsx#GridAvatar.Badge"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function GridAvatar_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function GridAvatar_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function GridAvatar_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function GridAvatar_stories_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function GridAvatar_stories_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const GridAvatar_stories={title:"Blocks/GridAvatar",component:GridAvatar,parameters:constants.eb,argTypes:{badged:{control:"boolean"},size:{control:{type:"select"},options:function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(types.j)}},decorators:[src.L1]};var Playground={render:function(_param){var badged=_param.badged,_param_size=_param.size,size=void 0===_param_size?48:_param_size,args=GridAvatar_stories_object_without_properties(_param,["badged","size"]),badge=size>=24&&badged?(0,jsx_runtime.jsx)(GridAvatar.Badge,{children:(0,jsx_runtime.jsx)(icons.Fb,{})}):void 0;return(0,jsx_runtime.jsx)(GridAvatar,GridAvatar_stories_object_spread_props(function GridAvatar_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){GridAvatar_stories_define_property(target,key,source[key])}))}return target}({},args),{size,children:badge}))},args:{src:[(0,mock.TW)(),(0,mock.TW)(),(0,mock.TW)(),(0,mock.TW)()],badged:!1}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: ({\n    badged,\n    size = 48,\n    ...args\n  }) => {\n    const badge = size >= 24 && badged ? <GridAvatar.Badge>\n          <IconExampleForBadgeBasedOnImageBaseSize />\n        </GridAvatar.Badge> : undefined;\n    return <GridAvatar {...args} size={size}>\n        {badge}\n      </GridAvatar>;\n  },\n  args: {\n    src: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],\n    badged: false\n  }\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/GridAvatar/GridAvatar.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".GridAvatar--zMaTn{border-radius:50%}.GridAvatar__in--Rnx3A{block-size:100%;border-radius:inherit;display:flex;flex-flow:column wrap;inline-size:100%;overflow:hidden}.GridAvatar__item--hQ52f{block-size:calc(50% - var(--vkui_internal--grid_avatar_image_offset) / 2);inline-size:calc(50% - var(--vkui_internal--grid_avatar_image_offset) / 2);-webkit-margin-end:var(--vkui_internal--grid_avatar_image_offset);background-position:50%;background-size:cover;margin-inline-end:var(--vkui_internal--grid_avatar_image_offset)}.GridAvatar__item--hQ52f:only-child{inline-size:100%}.GridAvatar__item--hQ52f:first-child:not(:nth-last-child(4)),.GridAvatar__item--hQ52f:nth-child(2):last-child{block-size:100%}.GridAvatar__item--hQ52f:nth-last-child(4),.GridAvatar__item--hQ52f:nth-last-child(n+3)~.GridAvatar__item--hQ52f:nth-last-child(2){-webkit-margin-after:var(--vkui_internal--grid_avatar_image_offset);margin-block-end:var(--vkui_internal--grid_avatar_image_offset)}","",{version:3,sources:["webpack://./src/components/GridAvatar/GridAvatar.module.css"],names:[],mappings:"AAAA,mBACE,iBACF,CAEA,uBAGE,eAAgB,CAGhB,qBAAsB,CALtB,YAAa,CACb,qBAAsB,CAEtB,gBAAiB,CACjB,eAEF,CAEA,yBAEE,yEAA0E,CAD1E,0EAA2E,CAE3E,iEAAiE,CAEjE,uBAA2B,CAD3B,qBAAsB,CADtB,gEAGF,CAEA,oCACE,gBACF,CAEA,8GAEE,eACF,CAGA,mIAGE,mEAAgE,CAAhE,+DACF",sourcesContent:[".GridAvatar {\n  border-radius: 50%;\n}\n\n.GridAvatar__in {\n  display: flex;\n  flex-flow: column wrap;\n  block-size: 100%;\n  inline-size: 100%;\n  overflow: hidden;\n  border-radius: inherit;\n}\n\n.GridAvatar__item {\n  inline-size: calc(50% - var(--vkui_internal--grid_avatar_image_offset) / 2);\n  block-size: calc(50% - var(--vkui_internal--grid_avatar_image_offset) / 2);\n  margin-inline-end: var(--vkui_internal--grid_avatar_image_offset);\n  background-size: cover;\n  background-position: center;\n}\n\n.GridAvatar__item:only-child {\n  inline-size: 100%;\n}\n\n.GridAvatar__item:first-child:not(:nth-last-child(4)),\n.GridAvatar__item:nth-child(2):last-child {\n  block-size: 100%;\n}\n\n/* если есть минимум три элемента — выбираем второй с конца */\n.GridAvatar__item:nth-last-child(n + 3) ~ .GridAvatar__item:nth-last-child(2),\n/* четвертый с конца */\n.GridAvatar__item:nth-last-child(4) {\n  margin-block-end: var(--vkui_internal--grid_avatar_image_offset);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={GridAvatar:"GridAvatar--zMaTn",GridAvatar__in:"GridAvatar__in--Rnx3A",GridAvatar__item:"GridAvatar__item--hQ52f"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/GridAvatar/GridAvatarBadge/GridAvatarBadge.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".GridAvatarBadge--J_6Ka{inset-block-end:0;inset-inline-end:0}.GridAvatarBadge--shifted--jEyVM{inset-block-end:-2px;inset-inline-end:-2px}","",{version:3,sources:["webpack://./src/components/GridAvatar/GridAvatarBadge/GridAvatarBadge.module.css"],names:[],mappings:"AAAA,wBAEE,iBAAkB,CADlB,kBAEF,CAEA,iCAEE,oBAAqB,CADrB,qBAEF",sourcesContent:[".GridAvatarBadge {\n  inset-inline-end: 0;\n  inset-block-end: 0;\n}\n\n.GridAvatarBadge--shifted {\n  inset-inline-end: -2px;\n  inset-block-end: -2px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={GridAvatarBadge:"GridAvatarBadge--J_6Ka","GridAvatarBadge--shifted":"GridAvatarBadge--shifted--jEyVM"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/ImageBase/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getFallbackIconSizeByImageBaseSize(imageSize){return imageSize<=20?12:imageSize>20&&imageSize<=28?16:imageSize>28&&imageSize<=32?20:imageSize>32&&imageSize<=44?24:imageSize>44&&imageSize<=64?28:getFallbackIconSizeByImageBaseSize.MAX_SIZE}function getBadgeIconSizeByImageBaseSize(imageSize){return imageSize<=36?12:imageSize>36&&imageSize<=48?16:imageSize>48&&imageSize<=64?20:getBadgeIconSizeByImageBaseSize.MAX_SIZE}function getOverlayIconSizeByImageBaseSize(imageSize){return imageSize<=20?12:imageSize>20&&imageSize<=24?16:imageSize>24&&imageSize<=28?18:imageSize>28&&imageSize<=40?20:imageSize>40&&imageSize<=48?24:imageSize>48&&imageSize<=88?28:getOverlayIconSizeByImageBaseSize.MAX_SIZE}__webpack_require__.d(__webpack_exports__,{Ju:()=>getOverlayIconSizeByImageBaseSize,Ln:()=>getFallbackIconSizeByImageBaseSize,Q3:()=>getBadgeIconSizeByImageBaseSize}),getFallbackIconSizeByImageBaseSize.MAX_SIZE=36,getBadgeIconSizeByImageBaseSize.MAX_SIZE=24,getOverlayIconSizeByImageBaseSize.MAX_SIZE=32}}]);