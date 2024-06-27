"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1109],{"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});var CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"../../tools/storybook-addon-cartesian/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L1:()=>withCartesian});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"};var withCartesian=function(StoryFn,context){var argTypes=context.argTypes,cartesian=context.args.cartesian,restArgs=_object_without_properties(context.args,["cartesian"]);if(cartesian){var variants=function cartesianFunc(){var propDesc=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],argTypes=arguments.length>1?arguments[1]:void 0;return Object.entries(propDesc).reduce((function(acc,param){var _param=_sliced_to_array(param,2),prop=_param[0],values=_param[1],res=[];return acc.forEach((function(props){values.forEach((function(value){var mapping=argTypes[prop].mapping;res.push(_object_spread_props(_object_spread({},props),_define_property({},prop,mapping?mapping[value]:value)))}))})),res}),[{}])}(cartesian,argTypes);return(0,jsx_runtime.jsx)("div",{style:CartesianContainerStyle,children:variants.map((function(ops,index){return(0,jsx_runtime.jsx)(StoryFn,{args:_object_spread({},restArgs,ops)},index)}))})}return(0,jsx_runtime.jsx)(StoryFn,{args:restArgs})};"".concat("storybook/addon-cartesian","/tool")},"./src/components/UsersStack/UsersStack.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts"),_testing_mock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/testing/mock.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/UsersStack",component:__webpack_require__("./src/components/UsersStack/UsersStack.tsx").f,parameters:_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eb,decorators:[_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_0__.L1]};var Playground={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[(0,_testing_mock__WEBPACK_IMPORTED_MODULE_3__.TW)(),(0,_testing_mock__WEBPACK_IMPORTED_MODULE_3__.TW)(),(0,_testing_mock__WEBPACK_IMPORTED_MODULE_3__.TW)(),(0,_testing_mock__WEBPACK_IMPORTED_MODULE_3__.TW)()],direction:"row"}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Алексей, Илья, Михаил и ещё 1 человек',\n    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],\n    direction: 'row'\n  }\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]}}]);