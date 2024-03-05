"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4773],{"./src/hooks/useEnsuredControl.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>useEnsuredControl,q:()=>useCustomEnsuredControl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function useEnsuredControl(_param){var onChangeProp=_param.onChange,disabled=_param.disabled,_useCustomEnsuredControl=_sliced_to_array(useCustomEnsuredControl(_object_without_properties(_param,["onChange","disabled"])),2),value=_useCustomEnsuredControl[0],onChangeValue=_useCustomEnsuredControl[1];return[value,react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(e){!disabled&&(onChangeValue(e.target.value),onChangeProp&&onChangeProp(e))},[onChangeValue,onChangeProp,disabled])]}function useCustomEnsuredControl(param){var value=param.value,defaultValue=param.defaultValue,disabled=param.disabled,onChangeProp=param.onChange,isControlled=void 0!==value,_React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue),2),localValue=_React_useState[0],setLocalValue=_React_useState[1],preservedControlledValueRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef();(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.L)(function(){preservedControlledValueRef.current=value});var onChange=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(nextValue){!disabled&&((0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.mf)(nextValue)?isControlled?onChangeProp&&onChangeProp(nextValue(preservedControlledValueRef.current)):setLocalValue(function(prevValue){var resolvedValue=nextValue(prevValue);return onChangeProp&&onChangeProp(resolvedValue),resolvedValue}):(onChangeProp&&onChangeProp(nextValue),isControlled||setLocalValue(nextValue)))},[disabled,isControlled,onChangeProp]);return[isControlled?value:localValue,onChange]}},"./src/hooks/useGlobalOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useGlobalOnClickOutside}),__webpack_require__("../../node_modules/react/index.js");var _lib_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/dom.tsx"),_lib_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/utils/dom/dist/floating-ui.utils.dom.esm.js"),_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var useGlobalOnClickOutside=function(callback){for(var _len=arguments.length,refs=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)refs[_key-1]=arguments[_key];var document=(0,_lib_dom__WEBPACK_IMPORTED_MODULE_1__.NG)().document;(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.L)(function(){var someRefNotNull=refs.some(function(ref){return ref&&null!==ref.current});if(document&&someRefNotNull){var handleClick=function(event){var targetEl=event.target;(0,_lib_dom__WEBPACK_IMPORTED_MODULE_3__.kK)(targetEl)&&refs.some(function(ref){return ref&&ref.current&&ref.current.contains(targetEl)})||callback(event)};return document.addEventListener("click",handleClick,{passive:!0,capture:!0}),function(){document.removeEventListener("click",handleClick,!0)}}},[document,callback].concat(_to_consumable_array(refs)))}},"./src/lib/cssAnimation/fades.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>animationFadeClassNames});var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),animationFades_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/styles/animationFades.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(animationFades_module.Z,options);let styles_animationFades_module=animationFades_module.Z&&animationFades_module.Z.locals?animationFades_module.Z.locals:void 0;var animationFadeClassNames={in:styles_animationFades_module["-anim-fade-in"],out:styles_animationFades_module["-anim-fade-out"]}},"./src/lib/floating/useFloatingWithInteractions/useFloatingWithInteractions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useFloatingWithInteractions});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),floating_ui_utils_dom_esm=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/utils/dom/dist/floating-ui.utils.dom.esm.js"),useEnsuredControl=__webpack_require__("./src/hooks/useEnsuredControl.ts"),useGlobalOnClickOutside=__webpack_require__("./src/hooks/useGlobalOnClickOutside.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function useStableCallback(fn){var _this=this,ref=react.useRef(fn);return(0,useIsomorphicLayoutEffect.L)(function(){ref.current=fn}),react.useRef(function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,ref.current).apply(_this,_to_consumable_array(args))}).current}var dom=__webpack_require__("./src/lib/dom.tsx"),adapters=__webpack_require__("./src/lib/floating/adapters.ts"),floating_ui_react_dom_esm=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),functions=__webpack_require__("./src/lib/floating/functions.ts");function useFloatingWithInteractions_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function useFloatingWithInteractions_array_without_holes(arr){if(Array.isArray(arr))return useFloatingWithInteractions_array_like_to_array(arr)}function useFloatingWithInteractions_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function useFloatingWithInteractions_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||useFloatingWithInteractions_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function useFloatingWithInteractions_to_consumable_array(arr){return useFloatingWithInteractions_array_without_holes(arr)||useFloatingWithInteractions_iterable_to_array(arr)||useFloatingWithInteractions_unsupported_iterable_to_array(arr)||useFloatingWithInteractions_non_iterable_spread()}function useFloatingWithInteractions_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return useFloatingWithInteractions_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useFloatingWithInteractions_array_like_to_array(o,minLen)}}var whileElementsMounted=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return adapters.JO.apply(void 0,useFloatingWithInteractions_to_consumable_array(args).concat([{elementResize:!0}]))},useFloatingWithInteractions=function(param){var triggerProp,_param_trigger=param.trigger,tmp=param.placement,middlewares=param.middlewares,_param_hoverDelay=param.hoverDelay,hoverDelay=void 0===_param_hoverDelay?0:_param_hoverDelay,_param_closeAfterClick=param.closeAfterClick,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_disableInteractive=param.disableInteractive,disableInteractive=void 0!==_param_disableInteractive&&_param_disableInteractive,_param_disableCloseOnClickOutside=param.disableCloseOnClickOutside,_param_disableCloseOnEscKey=param.disableCloseOnEscKey,_param_defaultShown=param.defaultShown,shownProp=param.shown,onShownChangeProp=param.onShownChange,memoizedValue=react.useMemo(function(){return void 0!==shownProp?{shown:shownProp}:void 0},[shownProp]),_useCustomEnsuredControl=_sliced_to_array((0,useEnsuredControl.q)({value:memoizedValue,disabled:disabled,defaultValue:{shown:void 0!==_param_defaultShown&&_param_defaultShown},onChange:useStableCallback(function(param){var shown=param.shown,reason=param.reason;onShownChangeProp&&onShownChangeProp(shown,reason)})}),2),shownLocalState=_useCustomEnsuredControl[0],setShownLocalState=_useCustomEnsuredControl[1],_React_useState=_sliced_to_array(react.useState(function(){return shownLocalState.shown}),2),shownFinalState=_React_useState[0],setShownFinalState=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(!1),2),willBeHide=_React_useState1[0],setWillBeHide=_React_useState1[1],hasCSSAnimation=react.useRef(!1),blockMouseEnterRef=react.useRef(!1),blockFocusRef=react.useRef(!1),blurTimeoutRef=react.useRef(),handleCloseOnReferenceClickOutsideDisabled=disabled||void 0!==_param_disableCloseOnClickOutside&&_param_disableCloseOnClickOutside||willBeHide||!shownLocalState.shown,_useResolveTriggerType=(triggerProp=void 0===_param_trigger?"click":_param_trigger,("string"==typeof triggerProp?[triggerProp]:triggerProp).reduce(function(result,trigger){switch(trigger){case"click":return result.triggerOnClick=!0,result;case"hover":return result.triggerOnHover=!0,result;case"focus":return result.triggerOnFocus=!0,result;case"manual":return result}},{triggerOnFocus:!1,triggerOnClick:!1,triggerOnHover:!1})),triggerOnFocus=_useResolveTriggerType.triggerOnFocus,triggerOnClick=_useResolveTriggerType.triggerOnClick,triggerOnHover=_useResolveTriggerType.triggerOnHover,_useFloating=(0,floating_ui_react_dom_esm.YF)({strategy:"fixed",placement:void 0===tmp?"bottom":tmp,middleware:middlewares,whileElementsMounted:whileElementsMounted}),placement=_useFloating.placement,x=_useFloating.x,y=_useFloating.y,strategy=_useFloating.strategy,refs=_useFloating.refs,middlewareData=_useFloating.middlewareData,commitShownLocalState=react.useCallback(function(nextShown,reason){setShownLocalState(function(prevState){return prevState.shown!==nextShown?{shown:nextShown,reason:reason}:prevState})},[setShownLocalState]),_ref=_sliced_to_array("number"==typeof hoverDelay?[hoverDelay,hoverDelay]:hoverDelay,2),mouseEnterDelay=_ref[0],mouseLeaveDelay=_ref[1],showWithDelay=react.useMemo(function(){return(0,es6.Ds)(function(){return commitShownLocalState(!0,"hover")},mouseEnterDelay)},[mouseEnterDelay,commitShownLocalState]),hideWithDelay=react.useMemo(function(){return(0,es6.Ds)(function(){return commitShownLocalState(!1,"hover")},mouseLeaveDelay)},[mouseLeaveDelay,commitShownLocalState]),handleFocusOnReference=useStableCallback(function(){if(blockFocusRef.current){blockFocusRef.current=!1;return}commitShownLocalState(!0,"focus")}),handleBlurOnReference=useStableCallback(function(event){if(blockFocusRef.current=!1,blockMouseEnterRef.current=!1,!shownLocalState.shown){clearTimeout(blurTimeoutRef.current);return}var relatedTarget=event.relatedTarget;blurTimeoutRef.current=setTimeout(function waitWindowBlurFire(){var reference=refs.reference.current;!relatedTarget&&(0,dom._g)(reference)===reference||(0,dom.r3)(refs.floating.current,relatedTarget)||(0,dom.r3)(reference,relatedTarget)||commitShownLocalState(!1,"focus")})}),handleClickOnReference=useStableCallback(function(){commitShownLocalState(!shownLocalState.shown,"click")}),handleClickOnReferenceForOnlyClose=useStableCallback(function(){blockMouseEnterRef.current=!0,commitShownLocalState(!1,"click")}),handleMouseEnterOnBoth=useStableCallback(function(){showWithDelay.cancel(),hideWithDelay.cancel(),blockMouseEnterRef.current||shownLocalState.shown||showWithDelay()}),handleMouseLeaveOnBothForHoverAndFocusStates=useStableCallback(function(){blockFocusRef.current=!1,blockMouseEnterRef.current=!1,triggerOnHover&&(showWithDelay.cancel(),hideWithDelay.cancel(),"focus"!==shownLocalState.reason&&"click"!==shownLocalState.reason&&hideWithDelay())}),handleOnClose=react.useCallback(function(){blockFocusRef.current=!0,commitShownLocalState(!1,"callback")},[commitShownLocalState]),handleRestoreFocus=react.useCallback(function(){return!triggerOnFocus||blockFocusRef.current},[triggerOnFocus]),handleEscapeKeyDown=react.useCallback(function(){blockFocusRef.current=!0,commitShownLocalState(!1,"escape-key")},[commitShownLocalState]),handleClickOutside=react.useCallback(function(){blockFocusRef.current=!0,commitShownLocalState(!1,"click-outside")},[commitShownLocalState]);(0,useGlobalOnClickOutside.s)(handleClickOutside,handleCloseOnReferenceClickOutsideDisabled?null:refs.reference,disableInteractive||handleCloseOnReferenceClickOutsideDisabled?null:refs.floating),(0,useIsomorphicLayoutEffect.L)(function setGlobalBlurForTriggerOnFocus(){if(triggerOnFocus&&refs.reference.current){var handleGlobalBlur=function(){var reference=refs.reference.current;!shownLocalState.shown&&(0,floating_ui_utils_dom_esm.Re)(reference)&&reference===(0,dom._g)(reference)&&(blockFocusRef.current=!0)},win=(0,floating_ui_utils_dom_esm.Jj)(refs.reference.current);return win.addEventListener("blur",handleGlobalBlur),function(){win.removeEventListener("blur",handleGlobalBlur)}}},[triggerOnFocus,refs.reference,shownLocalState]),(0,useIsomorphicLayoutEffect.L)(function resolveShownStates(){if(!willBeHide&&shownLocalState.shown!==shownFinalState)return shownLocalState.shown?setShownFinalState(!0):hasCSSAnimation.current&&!willBeHide?setWillBeHide(!0):setShownFinalState(!1),function(){clearTimeout(blurTimeoutRef.current)}},[shownLocalState,shownFinalState,willBeHide]);var referencePropsRef=react.useRef({}),floatingPropsRef=react.useRef({style:{}});return shownFinalState&&(floatingPropsRef.current.style=(0,functions.EA)(strategy,x,y,void 0,middlewareData),disableInteractive&&(floatingPropsRef.current.style.pointerEvents="none")),triggerOnFocus&&(referencePropsRef.current.onFocus=handleFocusOnReference,referencePropsRef.current.onBlur=handleBlurOnReference),triggerOnClick&&(referencePropsRef.current.onClick=handleClickOnReference),triggerOnHover&&(referencePropsRef.current.onMouseOver=handleMouseEnterOnBoth,void 0!==_param_closeAfterClick&&_param_closeAfterClick&&!triggerOnClick&&(referencePropsRef.current.onClick=handleClickOnReferenceForOnlyClose),disableInteractive||(floatingPropsRef.current.onMouseOver=handleMouseEnterOnBoth)),(triggerOnHover||triggerOnFocus)&&(referencePropsRef.current.onMouseLeave=handleMouseLeaveOnBothForHoverAndFocusStates,disableInteractive||(floatingPropsRef.current.onMouseLeave=handleMouseLeaveOnBothForHoverAndFocusStates)),shownFinalState&&(floatingPropsRef.current.onAnimationStart=function(){hasCSSAnimation.current=!0},floatingPropsRef.current.onAnimationEnd=function(){willBeHide&&(setShownFinalState(!1),setWillBeHide(!1))}),{placement:placement,shown:shownFinalState,willBeHide:willBeHide,refs:refs,referenceProps:referencePropsRef.current,floatingProps:floatingPropsRef.current,middlewareData:middlewareData,onClose:handleOnClose,onEscapeKeyDown:!shownFinalState||void 0!==_param_disableCloseOnEscKey&&_param_disableCloseOnEscKey?void 0:handleEscapeKeyDown,onRestoreFocus:handleRestoreFocus}}},"../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Icon16Spinner});var Icon16Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="spinner_16"><path fill-rule="evenodd" d="M8 3.25a4.75 4.75 0 0 0-4.149 7.065.75.75 0 1 1-1.31.732A6.25 6.25 0 1 1 8 14.25a.75.75 0 0 1 .001-1.5 4.75 4.75 0 1 0 0-9.5Z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Icon24Spinner});var Icon24Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Icon32Spinner});var Icon32Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Icon44Spinner});var Icon44Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22" /></symbol>',44,44,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/styles/animationFades.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media (prefers-reduced-motion:no-preference){.-anim-fade-in--__Eff{animation:anim-fade-in--xxsS4 .1s ease-in forwards}.-anim-fade-out--j9FS6{animation:anim-fade-out--JWrSu .1s ease-out forwards}}@keyframes anim-fade-in--xxsS4{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes anim-fade-out--JWrSu{0%{opacity:1}to{opacity:0}}","",{version:3,sources:["webpack://./src/styles/animationFades.module.css"],names:[],mappings:"AAMA,8CACE,sBACE,kDACF,CAEA,uBACE,oDACF,CACF,CAEA,+BACE,GACE,SAAU,CACV,mBACF,CAEA,GACE,SAAU,CACV,kBACF,CACF,CACA,gCACE,GACE,SACF,CAEA,GACE,SACF,CACF",sourcesContent:["/**\n * [a11y]\n * add animation for browsers that support prefers-reduced-motion\n * so that users with vestibular motion disorders have no problem\n * navigating accessible vkui apps via keyboard\n */\n@media (prefers-reduced-motion: no-preference) {\n  .-anim-fade-in {\n    animation: anim-fade-in 0.1s ease-in forwards;\n  }\n\n  .-anim-fade-out {\n    animation: anim-fade-out 0.1s ease-out forwards;\n  }\n}\n\n@keyframes anim-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes anim-fade-out {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"-anim-fade-in":"-anim-fade-in--__Eff","anim-fade-in":"anim-fade-in--xxsS4","-anim-fade-out":"-anim-fade-out--j9FS6","anim-fade-out":"anim-fade-out--JWrSu"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);