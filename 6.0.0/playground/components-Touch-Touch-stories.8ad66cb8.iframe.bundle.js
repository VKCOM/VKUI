"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7478],{"./src/components/Touch/Touch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts"),_Touch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Touch/Touch.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={title:"Service/Touch",component:_Touch__WEBPACK_IMPORTED_MODULE_1__.X,parameters:_object_spread(_object_spread_props(_object_spread({},_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.tW),{cantered:!1}),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.nB)};var circleStyle={width:40,height:40,borderRadius:"50%",background:"var(--vkui--color_background_accent)",position:"absolute",left:"50%",top:"50%",marginLeft:-20,marginTop:-20},containerStyle={height:200,width:"50%",border:"8px solid var(--vkui--color_icon_secondary)",position:"relative"},Playground={render:function Render(args){var _React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(0),2),shiftX=_React_useState[0],setShiftX=_React_useState[1],_React_useState1=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(0),2),shiftY=_React_useState1[0],setShiftY=_React_useState1[1],_React_useState2=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(0),2),limitX=_React_useState2[0],setLimitX=_React_useState2[1],_React_useState3=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(0),2),limitY=_React_useState3[0],setLimitY=_React_useState3[1],circleRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),startX=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0),startY=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(function(){circleRef.current&&(setLimitX(circleRef.current.offsetLeft),setLimitY(circleRef.current.offsetTop))});var getValueWithLimit=function(value,limit){return value>limit?limit:value<-limit?-limit:value},limitExceeded=Math.abs(shiftX)>=limitX||Math.abs(shiftY)>=limitY;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:_object_spread_props(_object_spread({},containerStyle),{borderColor:limitExceeded?"var(--vkui--color_icon_negative)":"var(--vkui--color_icon_secondary)"})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Touch__WEBPACK_IMPORTED_MODULE_1__.X,_object_spread_props(_object_spread({},args),{getRootRef:circleRef,onMove:function(e){var shiftX=startX.current+e.shiftX,shiftY=startY.current+e.shiftY;setShiftX(getValueWithLimit(shiftX,limitX)),setShiftY(getValueWithLimit(shiftY,limitY))},onEnd:function(e){var shiftX=startX.current+e.shiftX,shiftY=startY.current+e.shiftY;startX.current=getValueWithLimit(shiftX,limitX),startY.current=getValueWithLimit(shiftY,limitY)},style:_object_spread_props(_object_spread({},circleStyle),{transform:"translate(".concat(shiftX,"px, ").concat(shiftY,"px)")})})))}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render(args) {\n    const [shiftX, setShiftX] = React.useState(0);\n    const [shiftY, setShiftY] = React.useState(0);\n    const [limitX, setLimitX] = React.useState(0);\n    const [limitY, setLimitY] = React.useState(0);\n    const circleRef = React.useRef<HTMLDivElement | null>(null);\n    const startX = React.useRef(0);\n    const startY = React.useRef(0);\n\n    // eslint-disable-next-line no-restricted-properties,react-hooks/exhaustive-deps,no-restricted-properties\n    React.useLayoutEffect(() => {\n      if (circleRef.current) {\n        setLimitX(circleRef.current.offsetLeft);\n        setLimitY(circleRef.current.offsetTop);\n      }\n    });\n    const getValueWithLimit = (value: number, limit: number) => {\n      return value > limit ? limit : value < -limit ? -limit : value;\n    };\n    const onMove = (e: TouchEvent) => {\n      const shiftX = startX.current + e.shiftX;\n      const shiftY = startY.current + e.shiftY;\n      setShiftX(getValueWithLimit(shiftX, limitX));\n      setShiftY(getValueWithLimit(shiftY, limitY));\n    };\n    const onEnd = (e: TouchEvent) => {\n      const shiftX = startX.current + e.shiftX;\n      const shiftY = startY.current + e.shiftY;\n      startX.current = getValueWithLimit(shiftX, limitX);\n      startY.current = getValueWithLimit(shiftY, limitY);\n    };\n    const limitExceeded = Math.abs(shiftX) >= limitX || Math.abs(shiftY) >= limitY;\n    return <div style={{\n      ...containerStyle,\n      borderColor: limitExceeded ? 'var(--vkui--color_icon_negative)' : 'var(--vkui--color_icon_secondary)'\n    }}>\n        <Touch {...args} getRootRef={circleRef} onMove={onMove} onEnd={onEnd} style={{\n        ...circleStyle,\n        transform: `translate(${shiftX}px, ${shiftY}px)`\n      }} />\n      </div>;\n  }\n}",...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R0:()=>StringArg,nB:()=>DisableCartesianParam,tW:()=>CanvasFullLayout});var CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:{type:"text"}}}}]);