"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3632],{"./src/components/CalendarRange/CalendarRange.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>CalendarRange});var react=__webpack_require__("../../node_modules/react/index.js"),useCalendar=__webpack_require__("./src/hooks/useCalendar.ts"),calendar=__webpack_require__("./src/lib/calendar.ts"),lib_date=__webpack_require__("./src/lib/date.ts"),CalendarDays=__webpack_require__("./src/components/CalendarDays/CalendarDays.tsx"),CalendarHeader=__webpack_require__("./src/components/CalendarHeader/CalendarHeader.tsx"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),CalendarRange_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/CalendarRange/CalendarRange.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(CalendarRange_module.Z,options);let CalendarRange_CalendarRange_module=CalendarRange_module.Z&&CalendarRange_module.Z.locals?CalendarRange_module.Z.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var getIsDaySelected=function(day,value){return!!(null==value?void 0:value[0])&&!!value[1]&&!!(0,lib_date._w)(day,(0,lib_date.b7)(value[0]),(0,lib_date.iX)(value[1]))},CalendarRange=function(_param){var value=_param.value,onChange=_param.onChange,disablePast=_param.disablePast,disableFuture=_param.disableFuture,shouldDisableDate=_param.shouldDisableDate,_param_weekStartsOn=(_param.onClose,_param.weekStartsOn),weekStartsOn=void 0===_param_weekStartsOn?1:_param_weekStartsOn,disablePickers=_param.disablePickers,_param_prevMonthLabel=_param.prevMonthLabel,prevMonthLabel=void 0===_param_prevMonthLabel?"Предыдущий месяц":_param_prevMonthLabel,_param_nextMonthLabel=_param.nextMonthLabel,nextMonthLabel=void 0===_param_nextMonthLabel?"Следующий месяц":_param_nextMonthLabel,_param_changeMonthLabel=_param.changeMonthLabel,changeMonthLabel=void 0===_param_changeMonthLabel?"Изменить месяц":_param_changeMonthLabel,_param_changeYearLabel=_param.changeYearLabel,changeYearLabel=void 0===_param_changeYearLabel?"Изменить год":_param_changeYearLabel,_param_changeDayLabel=_param.changeDayLabel,changeDayLabel=void 0===_param_changeDayLabel?"Изменить день":_param_changeDayLabel,prevMonthIcon=_param.prevMonthIcon,nextMonthIcon=_param.nextMonthIcon,listenDayChangesForUpdate=_param.listenDayChangesForUpdate,props=_object_without_properties(_param,["value","onChange","disablePast","disableFuture","shouldDisableDate","onClose","weekStartsOn","disablePickers","prevMonthLabel","nextMonthLabel","changeMonthLabel","changeYearLabel","changeDayLabel","prevMonthIcon","nextMonthIcon","listenDayChangesForUpdate"]),_useCalendar=(0,useCalendar.G)({value:value,disableFuture:disableFuture,disablePast:disablePast,shouldDisableDate:shouldDisableDate}),viewDate=_useCalendar.viewDate,setViewDate=_useCalendar.setViewDate,setPrevMonth=_useCalendar.setPrevMonth,setNextMonth=_useCalendar.setNextMonth,focusedDay=_useCalendar.focusedDay,setFocusedDay=_useCalendar.setFocusedDay,isDayFocused=_useCalendar.isDayFocused,isDayDisabled=_useCalendar.isDayDisabled,resetSelectedDay=_useCalendar.resetSelectedDay,_React_useState=_sliced_to_array(react.useState(),2),hintedDate=_React_useState[0],setHintedDate=_React_useState[1],secondViewDate=(0,lib_date.zI)(viewDate,1),handleKeyDown=react.useCallback(function(event){["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(event.key)&&event.preventDefault();var newFocusedDay=(0,calendar.it)(null!=focusedDay?focusedDay:null==value?void 0:value[1],event.key);!newFocusedDay||(0,lib_date.xj)(newFocusedDay,viewDate)||(0,lib_date.xj)(newFocusedDay,(0,lib_date.zI)(viewDate,1))||setViewDate(newFocusedDay),setFocusedDay(newFocusedDay)},[focusedDay,setFocusedDay,setViewDate,value,viewDate]),getNewValue=react.useCallback(function(date){if(!value||null===value[0]&&null===value[1])return[date,null];var start=value[0],end=value[1];return start&&(0,lib_date.KC)(date,start)||end&&(0,lib_date.KC)(date,end)?[(0,calendar.VB)(date,start),(0,calendar.VB)(date,end)]:start&&(0,lib_date.RR)(date,start)?[(0,calendar.VB)(date,start),end]:start&&(0,lib_date.Ax)(date,start)?[start,(0,calendar.VB)(date,end)]:value},[value]),onDayChange=react.useCallback(function(date){null==onChange||onChange(getNewValue(date)),setHintedDate(void 0)},[onChange,getNewValue]),isDaySelected=react.useCallback(function(day){return getIsDaySelected(day,value)},[value]),isDayActive=react.useCallback(function(day){return!!((null==value?void 0:value[0])&&(0,lib_date.KC)(day,value[0])||(null==value?void 0:value[1])&&(0,lib_date.KC)(day,value[1]))},[value]),isDaySelectionEnd=react.useCallback(function(day,dayOfWeek){return!!((0,calendar.Rw)(day,dayOfWeek)||(null==value?void 0:value[1])&&(0,lib_date.KC)(day,value[1]))},[value]),isHintedDaySelectionEnd=react.useCallback(function(day,dayOfWeek){return!!((0,calendar.Rw)(day,dayOfWeek)||(null==hintedDate?void 0:hintedDate[1])&&(0,lib_date.KC)(day,hintedDate[1]))},[hintedDate]),isDaySelectionStart=react.useCallback(function(day,dayOfWeek){return!!((0,calendar.Dk)(day,dayOfWeek)||(null==value?void 0:value[0])&&(0,lib_date.KC)(day,value[0]))},[value]),isHintedDaySelectionStart=react.useCallback(function(day,dayOfWeek){return!!((0,calendar.Dk)(day,dayOfWeek)||(null==hintedDate?void 0:hintedDate[0])&&(0,lib_date.KC)(day,hintedDate[0]))},[hintedDate]),onDayEnter=react.useCallback(function(date){return setHintedDate(getNewValue(date))},[setHintedDate,getNewValue]),onDayLeave=react.useCallback(function(){return setHintedDate(void 0)},[setHintedDate]),isDayHinted=react.useCallback(function(day){return getIsDaySelected(day,hintedDate)},[hintedDate]);return react.createElement(RootComponent.U,_object_spread_props(_object_spread({},props),{baseClassName:CalendarRange_CalendarRange_module.CalendarRange}),react.createElement("div",{className:CalendarRange_CalendarRange_module.CalendarRange__inner},react.createElement(CalendarHeader.v,{viewDate:viewDate,onChange:setViewDate,nextMonthHidden:!0,onPrevMonth:setPrevMonth,disablePickers:disablePickers,className:CalendarRange_CalendarRange_module.CalendarRange__header,prevMonthLabel:prevMonthLabel,nextMonthLabel:nextMonthLabel,changeMonthLabel:changeMonthLabel,changeYearLabel:changeYearLabel,prevMonthIcon:prevMonthIcon}),react.createElement(CalendarDays.E,{viewDate:viewDate,value:value,weekStartsOn:weekStartsOn,onKeyDown:handleKeyDown,isDayFocused:isDayFocused,onDayChange:onDayChange,isDaySelected:isDaySelected,isDayActive:isDayActive,isDaySelectionEnd:isDaySelectionEnd,isDaySelectionStart:isDaySelectionStart,isDayHinted:isDayHinted,onDayEnter:onDayEnter,onDayLeave:onDayLeave,isHintedDaySelectionEnd:isHintedDaySelectionEnd,isHintedDaySelectionStart:isHintedDaySelectionStart,isDayDisabled:isDayDisabled,listenDayChangesForUpdate:listenDayChangesForUpdate,"aria-label":changeDayLabel})),react.createElement("div",{className:CalendarRange_CalendarRange_module.CalendarRange__inner},react.createElement(CalendarHeader.v,{viewDate:secondViewDate,onChange:setViewDate,prevMonthHidden:!0,onNextMonth:setNextMonth,disablePickers:disablePickers,className:CalendarRange_CalendarRange_module.CalendarRange__header,prevMonthLabel:prevMonthLabel,nextMonthLabel:nextMonthLabel,changeMonthLabel:changeMonthLabel,changeYearLabel:changeYearLabel,nextMonthIcon:nextMonthIcon}),react.createElement(CalendarDays.E,{viewDate:secondViewDate,value:value,weekStartsOn:weekStartsOn,"aria-label":changeDayLabel,onKeyDown:handleKeyDown,isDayFocused:isDayFocused,onDayChange:onDayChange,isDaySelected:isDaySelected,isDayActive:isDayActive,isDaySelectionEnd:isDaySelectionEnd,isDaySelectionStart:isDaySelectionStart,isDayHinted:isDayHinted,onDayEnter:onDayEnter,onDayLeave:onDayLeave,isHintedDaySelectionEnd:isHintedDaySelectionEnd,isHintedDaySelectionStart:isHintedDaySelectionStart,isDayDisabled:isDayDisabled,listenDayChangesForUpdate:listenDayChangesForUpdate,tabIndex:0,onBlur:resetSelectedDay})))};try{CalendarRange.displayName="CalendarRange",CalendarRange.__docgenInfo={description:"",displayName:"CalendarRange",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"DateRangeType"}},disablePast:{defaultValue:null,description:"",name:"disablePast",required:!1,type:{name:"boolean"}},disableFuture:{defaultValue:null,description:"",name:"disableFuture",required:!1,type:{name:"boolean"}},disablePickers:{defaultValue:null,description:"",name:"disablePickers",required:!1,type:{name:"boolean"}},changeDayLabel:{defaultValue:{value:"Изменить день"},description:"",name:"changeDayLabel",required:!1,type:{name:"string"}},weekStartsOn:{defaultValue:{value:"1"},description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: DateRangeType) => void)"}},shouldDisableDate:{defaultValue:null,description:"",name:"shouldDisableDate",required:!1,type:{name:"((value: Date) => boolean)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},prevMonthLabel:{defaultValue:{value:"Предыдущий месяц"},description:"",name:"prevMonthLabel",required:!1,type:{name:"string"}},nextMonthLabel:{defaultValue:{value:"Следующий месяц"},description:"",name:"nextMonthLabel",required:!1,type:{name:"string"}},changeMonthLabel:{defaultValue:{value:"Изменить месяц"},description:"",name:"changeMonthLabel",required:!1,type:{name:"string"}},changeYearLabel:{defaultValue:{value:"Изменить год"},description:"",name:"changeYearLabel",required:!1,type:{name:"string"}},prevMonthIcon:{defaultValue:null,description:"",name:"prevMonthIcon",required:!1,type:{name:"ReactNode"}},nextMonthIcon:{defaultValue:null,description:"",name:"nextMonthIcon",required:!1,type:{name:"ReactNode"}},listenDayChangesForUpdate:{defaultValue:null,description:"",name:"listenDayChangesForUpdate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CalendarRange/CalendarRange.tsx#CalendarRange"]={docgenInfo:CalendarRange.__docgenInfo,name:"CalendarRange",path:"src/components/CalendarRange/CalendarRange.tsx#CalendarRange"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Spinner});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_RootComponent_RootComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),_VisuallyHidden_VisuallyHidden__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Spinner/Spinner.module.css");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Spinner=react__WEBPACK_IMPORTED_MODULE_0__.memo(function(_param){var _param_size=_param.size,size=void 0===_param_size?"regular":_param_size,_param_children=_param.children,children=void 0===_param_children?"Загружается...":_param_children,disableAnimation=_param.disableAnimation,restProps=_object_without_properties(_param,["size","children","disableAnimation"]),SpinnerIcon={small:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_3__.P,regular:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__.h,medium:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_5__.X,large:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__.C}[size],center={small:8,regular:12,medium:16,large:22}[size];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RootComponent_RootComponent__WEBPACK_IMPORTED_MODULE_7__.U,_object_spread_props(_object_spread({Component:"span",role:"status"},restProps),{baseClassName:_Spinner_module_css__WEBPACK_IMPORTED_MODULE_2__.Z.Spinner}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpinnerIcon,null,!disableAnimation&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 ".concat(center," ").concat(center),to:"360 ".concat(center," ").concat(center),dur:"0.7s",repeatCount:"indefinite"})),(0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.p7)(children)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_VisuallyHidden_VisuallyHidden__WEBPACK_IMPORTED_MODULE_8__.T,null,children))});Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'},{value:'"medium"'},{value:'"large"'}]}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/CalendarRange/CalendarRange.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CalendarRange--r0fHe{background:var(--vkui--color_background_modal);border:.5px solid var(--vkui--color_separator_primary);border-radius:8px;box-shadow:var(--vkui--elevation1);box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:space-around;padding:12px;width:610px}.CalendarRange__inner--MC9iy{display:flex;flex-direction:column;flex-grow:1}.CalendarRange__inner--MC9iy:not(:last-child){margin-right:24px}.CalendarRange__header--ZjxAa{margin-bottom:4px}","",{version:3,sources:["webpack://./src/components/CalendarRange/CalendarRange.module.css"],names:[],mappings:"AAAA,sBAKE,8CAA+C,CAC/C,sDAAwD,CAGxD,iBAAkB,CADlB,kCAAmC,CADnC,qBAAsB,CANtB,YAAa,CAEb,cAAe,CADf,4BAA6B,CAQ7B,YAAa,CANb,WAOF,CAEA,6BACE,YAAa,CACb,qBAAsB,CACtB,WACF,CAEA,8CACE,iBACF,CAEA,8BACE,iBACF",sourcesContent:[".CalendarRange {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  inline-size: 610px;\n  background: var(--vkui--color_background_modal);\n  border: 0.5px solid var(--vkui--color_separator_primary);\n  box-sizing: border-box;\n  box-shadow: var(--vkui--elevation1);\n  border-radius: 8px;\n  padding: 12px;\n}\n\n.CalendarRange__inner {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.CalendarRange__inner:not(:last-child) {\n  margin-inline-end: 24px;\n}\n\n.CalendarRange__header {\n  margin-block-end: 4px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={CalendarRange:"CalendarRange--r0fHe",CalendarRange__inner:"CalendarRange__inner--MC9iy",CalendarRange__header:"CalendarRange__header--ZjxAa"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Spinner/Spinner.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Spinner--aVS7j{align-items:center;color:var(--vkui--color_icon_medium);display:flex;height:100%;justify-content:center;width:100%}.vkuiInternalPanelHeader .Spinner--aVS7j{color:currentColor}","",{version:3,sources:["webpack://./src/components/Spinner/Spinner.module.css"],names:[],mappings:"AAAA,gBAIE,kBAAmB,CAEnB,oCAAqC,CAHrC,YAAa,CADb,WAAgB,CAGhB,sBAAuB,CAJvB,UAMF,CAOA,yCACE,kBACF",sourcesContent:[".Spinner {\n  inline-size: 100%;\n  block-size: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--vkui--color_icon_medium);\n}\n\n/**\n * CMP:\n * PanelHeader\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalPanelHeader) .Spinner {\n  color: currentColor;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Spinner:"Spinner--aVS7j"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Spinner/Spinner.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_Spinner_module_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Spinner/Spinner.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default(),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_Spinner_module_css__WEBPACK_IMPORTED_MODULE_5__.Z,options);let __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_Spinner_module_css__WEBPACK_IMPORTED_MODULE_5__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_Spinner_module_css__WEBPACK_IMPORTED_MODULE_5__.Z.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_Spinner_module_css__WEBPACK_IMPORTED_MODULE_5__.Z.locals:void 0}}]);