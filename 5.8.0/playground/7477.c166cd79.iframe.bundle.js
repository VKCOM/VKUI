"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7477],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/CustomSelect/CustomSelect.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(r)()(l());a.push([e.id,".CustomSelect--t8BBn{cursor:pointer;display:block;position:relative;width:100%}.CustomSelect--pop-down--YTLW6{border-bottom-left-radius:0;border-bottom-right-radius:0}.CustomSelect--pop-up--wZZnV{border-top-left-radius:0;border-top-right-radius:0}.CustomSelect__control--VcHiM{display:none}.CustomSelect__empty--Vt06J{color:#818c99;color:var(--vkui--color_text_secondary);padding:12px 0;text-align:center}.CustomSelect__fetching--kv01N{align-items:center;display:flex;justify-content:center}.CustomSelect__dropdown-icon--OR19l{margin-right:10px}.CustomSelect--clear-icon--Zu9v8{margin-right:-6px}.CustomSelect--sizeY-compact--_zPzn .CustomSelect__dropdown-icon--OR19l{margin-right:8px}.CustomSelect--sizeY-compact--_zPzn .CustomSelect--clear-icon--Zu9v8{margin-right:-2px}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.CustomSelect--sizeY-none--ScLah .CustomSelect__dropdown-icon--OR19l{margin-right:8px}.CustomSelect--sizeY-none--ScLah .CustomSelect--clear-icon--Zu9v8{margin-right:-2px}}",""]),a.locals={CustomSelect:"CustomSelect--t8BBn","CustomSelect--pop-down":"CustomSelect--pop-down--YTLW6","CustomSelect--pop-up":"CustomSelect--pop-up--wZZnV",CustomSelect__control:"CustomSelect__control--VcHiM",CustomSelect__empty:"CustomSelect__empty--Vt06J",CustomSelect__fetching:"CustomSelect__fetching--kv01N","CustomSelect__dropdown-icon":"CustomSelect__dropdown-icon--OR19l","CustomSelect--clear-icon":"CustomSelect--clear-icon--Zu9v8","CustomSelect--sizeY-compact":"CustomSelect--sizeY-compact--_zPzn","CustomSelect--sizeY-none":"CustomSelect--sizeY-none--ScLah"},t.Z=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Select/Select.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(r)()(l());a.push([e.id,".Select--Op7ZO{box-sizing:border-box;cursor:pointer;font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_family_base);position:relative}.Select__el--pN0BO{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;display:block;font-family:inherit;font-size:15px;font-size:var(--vkui--font_paragraph--font_size--regular);height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;z-index:6;z-index:var(--vkui_internal--z_index_form_field_side)}.Select__container--foTl9{box-sizing:border-box;color:#000;color:var(--vkui--color_text_primary);flex-grow:1;flex-shrink:1;overflow:hidden;padding-left:12px;padding-right:0;position:relative;z-index:1;z-index:var(--vkui_internal--z_index_form_field_element)}.Select--hasBefore--aPsZw .Select__container--foTl9{padding-left:0}.Select--multiline--nhaGB .Select__container--foTl9{padding-bottom:12px;padding-top:12px}.Select--sizeY-compact--ASlUW.Select--multiline--nhaGB .Select__container--foTl9{padding-bottom:8px;padding-top:8px}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Select--sizeY-none--PwdgK.Select--multiline--nhaGB .Select__container--foTl9{padding-bottom:8px;padding-top:8px}}.Select__title--_WLca{display:block}.Select--Op7ZO:not(.Select--multiline--nhaGB) .Select__title--_WLca{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select--empty--mz3Zs .Select__title--_WLca{color:#818c99;color:var(--vkui--color_text_secondary)}.Select--align-right--tNhai .Select__title--_WLca{text-align:right}.Select--align-center--iLsQf .Select__title--_WLca{text-align:center}.vkuiInternalCalendarHeader__picker .Select__container--foTl9{padding-right:4px}",""]),a.locals={Select:"Select--Op7ZO",Select__el:"Select__el--pN0BO",Select__container:"Select__container--foTl9","Select--hasBefore":"Select--hasBefore--aPsZw","Select--multiline":"Select--multiline--nhaGB","Select--sizeY-compact":"Select--sizeY-compact--ASlUW","Select--sizeY-none":"Select--sizeY-none--PwdgK",Select__title:"Select__title--_WLca","Select--empty":"Select--empty--mz3Zs","Select--align-right":"Select--align-right--tNhai","Select--align-center":"Select--align-center--iLsQf"},t.Z=a},"./src/components/CustomSelect/CustomSelect.tsx":function(e,t,n){n.d(t,{A:function(){return G}});var o=n("../../node_modules/react/jsx-runtime.js"),l=n("../../node_modules/react/index.js"),r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=n("./src/hooks/useAdaptivity.ts"),i=n("./src/hooks/useExternRef.ts"),c=n("./src/lib/adaptivity/constants.ts"),u=n("./src/lib/select.ts"),s=n("./src/lib/useIsomorphicLayoutEffect.ts"),d=n("./src/lib/utils.ts"),p=n("./src/lib/warnOnce.ts"),m=n("./src/components/CustomSelectDropdown/CustomSelectDropdown.tsx"),f=n("./src/components/CustomSelectOption/CustomSelectOption.tsx"),y=n("./src/components/DropdownIcon/DropdownIcon.tsx"),v=n("./src/components/Input/Input.tsx"),S=n("./src/components/SelectMimicry/SelectMimicry.tsx"),b=n("./src/components/Typography/Footnote/Footnote.tsx"),g=n("../../node_modules/@vkontakte/icons/dist/es6/16/cancel_16.js"),h=n("./src/components/IconButton/IconButton.tsx"),C=function(e){var t=e.className,n=e.onClick;return(0,o.jsx)(h.h,{className:t,Component:"div",onClick:function(e){(0,d.UW)(e),n()},"aria-label":"Очистить поле",onKeyDown:d.UW,role:"button",activeMode:"opacity",hoverMode:"opacity",children:(0,o.jsx)(g.Q,{})})};try{C.displayName="CustomSelectClearButton",C.__docgenInfo={description:"",displayName:"CustomSelectClearButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CustomSelect/CustomSelectClearButton.tsx#CustomSelectClearButton"]={docgenInfo:C.__docgenInfo,name:"CustomSelectClearButton",path:"src/components/CustomSelect/CustomSelectClearButton.tsx#CustomSelectClearButton"})}catch(e){}var _=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=n.n(_),j=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),w=n.n(j),x=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),k=n.n(x),T=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),D=n.n(T),R=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=n.n(R),P=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/CustomSelect/CustomSelect.module.css"),E={attributes:{class:"vkui-style"}};E.setAttributes=D(),E.insert=k().bind(null,"head"),E.domAPI=w(),E.insertStyleElement=I(),O()(P.Z,E);var V=P.Z&&P.Z.locals?P.Z.locals:void 0;function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){A(e,t,n[t])})}return e}function q(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function z(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var r=[],a=!0,i=!1;try{for(l=l.call(e);!(a=(n=l.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(i)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=A({none:V["CustomSelect--sizeY-none"]},c.n$.COMPACT,V["CustomSelect--sizeY-compact"]),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return t>=e.length-1?-1:e.findIndex(function(e,n){return n>t&&!e.disabled})},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length,n=-1;if(t<=0)return n;for(var o=t-1;o>=0;o--)if(!e[o].disabled){n=o;break}return n};function K(e){e.option;var t=z(e,["option"]);return(0,o.jsx)(f.x,N({},t))}(0,p.O)("CustomSelect");var F=function(e){e.preventDefault()};function H(e,t,n){var o;return n&&""===t?-1:null!==(o=e.findIndex(function(e){return t="number"==typeof e.value?Number(t):t,e.value===t}))&&void 0!==o?o:-1}var W=function(e,t,n){return"function"==typeof n?e.filter(function(e){return n(t,e)}):e},U=[];function G(e){var t,n,p,f=Z(l.useState(!1),2),g=f[0],h=f[1],_=e.before,O=e.name,j=e.className,w=e.getRef,x=e.getRootRef,k=e.popupDirection,T=e.style,D=e.onChange,R=(e.children,e.onInputChange),I=e.renderDropdown,P=e.onOpen,E=e.onClose,B=e.fetching,A=e.forceDropdownPortal,G=e.selectType,Q=void 0===G?"default":G,$=e.autoHideScrollbar,J=e.autoHideScrollbarDelay,X=e.searchable,ee=void 0!==X&&X,et=e.renderOption,en=void 0===et?K:et,eo=e.options,el=void 0===eo?U:eo,er=e.emptyText,ea=void 0===er?"Ничего не найдено":er,ei=e.filterFn,ec=void 0===ei?u.B:ei,eu=e.icon,es=e.ClearButton,ed=void 0===es?C:es,ep=e.allowClearButton,em=void 0!==ep&&ep,ef=e.dropdownOffsetDistance,ey=void 0===ef?0:ef,ev=e.fixDropdownWidth,eS=z(e,["before","name","className","getRef","getRootRef","popupDirection","style","onChange","children","onInputChange","renderDropdown","onOpen","onClose","fetching","forceDropdownPortal","selectType","autoHideScrollbar","autoHideScrollbarDelay","searchable","renderOption","options","emptyText","filterFn","icon","ClearButton","allowClearButton","dropdownOffsetDistance","fixDropdownWidth"]),eb=(0,a.g)().sizeY,eg=void 0===eb?"none":eb,eh=l.useRef(null),eC=(0,i.Q)(eh,x),e_=l.useRef(null),eO=(0,i.Q)(w),ej=Z(l.useState(-1),2),ew=ej[0],ex=ej[1],ek=Z(l.useState(void 0!==e.value),2),eT=ek[0],eD=ek[1],eR=Z(l.useState(""),2),eI=eR[0],eP=eR[1],eE=Z(l.useState(function(){return null!==(n=null!==(t=e.value)&&void 0!==t?t:e.defaultValue)&&void 0!==n?n:em?"":void 0}),2),eV=eE[0],eB=eE[1],eA=Z(l.useState(""),2),eN=eA[0],eq=eA[1],ez=Z(l.useState(void 0),2),eZ=ez[0],eL=ez[1],eM=Z(l.useState(el),2),eY=eM[0],eK=eM[1],eF=Z(l.useState(H(el,null!==(p=e.value)&&void 0!==p?p:e.defaultValue,em)),2),eH=eF[0],eW=eF[1];l.useEffect(function(){var t;eD(void 0!==e.value),eB(function(n){return null!==(t=e.value)&&void 0!==t?t:n})},[e.value]),(0,s.L)(function(){if(eY.some(function(e){return eV===e.value})||em&&""===eV){var e,t=new Event("change",{bubbles:!0});null===(e=eO.current)||void 0===e||e.dispatchEvent(t)}},[eV]);var eU=l.useMemo(function(){return eY.length?void 0!==eH?eY[eH]:void 0:null},[eY,eH]),eG=l.useMemo(function(){return g&&0===ey&&((null==eZ?void 0:eZ.includes("top"))?V["CustomSelect--pop-up"]:V["CustomSelect--pop-down"])||void 0},[ey,g,eZ]),eQ=l.useCallback(function(){eq("")},[]),e$=l.useCallback(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e_.current,o=n?n.children[e]:null;if(o&&n){var l=n.offsetHeight,r=n.scrollTop,a=o.offsetTop,i=o.offsetHeight;t?n.scrollTop=a-l/2+i/2:a+i>l+r?n.scrollTop=a-l+i:a<r&&(n.scrollTop=a)}},[]),eJ=l.useCallback(function(e){var t;return e>=0&&e<(null!==(t=eY.length)&&void 0!==t?t:0)},[eY.length]),eX=l.useCallback(function(e){var t,n=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if(void 0!==e&&!(e<0)&&!(e>(null!==(t=eY.length)&&void 0!==t?t:0)-1)){var o=eY[e];null!=o&&o.disabled||(n&&e$(e),ex(function(t){return t!==e?e:t}))}},[eY,e$]),e0=l.useCallback(function(){return null!==e_.current},[]),e1=l.useCallback(function(e){e_.current=e,e&&void 0!==eH&&eJ(eH)&&e$(eH,!0)},[eJ,e$,eH]),e2=l.useCallback(function(e){var t=eN+e,n=eY.findIndex(function(e){return(0,d.P1)(e.label).toLowerCase().includes(t)});void 0!==n&&n>-1&&eX(n),eq(t)},[eX,eN,eY]),e8=l.useCallback(function(){eQ(),eP(""),h(!1),ex(-1),null==E||E()},[E,eQ]),e9=l.useCallback(function(t){var n=eY[t];if(eB(null==n?void 0:n.value),e8(),eT&&e.value!==eV&&eV===(null==n?void 0:n.value)){var o,l=new Event("change",{bubbles:!0});null===(o=eO.current)||void 0===o||o.dispatchEvent(l)}},[e8,eY,eO,eT,e.value,eV]),e6=l.useCallback(function(){void 0!==ew&&eJ(ew)&&e9(ew)},[ew,eJ,e9]),e3=l.useCallback(function(){h(!0),ex(eH),"function"==typeof P&&P()},[P,eH]),e4=l.useCallback(function(){e8();var e,t=new Event("blur");null===(e=eO.current)||void 0===e||e.dispatchEvent(t)},[e8,eO]),e7=l.useCallback(function(){ex(-1)},[]),e5=l.useCallback(function(){var e,t=new Event("focus");null===(e=eO.current)||void 0===e||e.dispatchEvent(t)},[eO]),te=l.useCallback(function(){g?e8():e3()},[e8,e3,g]),tt=l.useMemo(function(){return(0,d.Ds)(eQ,1e3)},[eQ]),tn=l.useCallback(function(e){var t=ew;if("next"===e){var n=M(eY,t);t=-1===n?M(eY):n}else if("prev"===e){var o=Y(eY,t);t=-1===o?Y(eY):o}eX(t)},[eX,ew,eY]);l.useEffect(function(){var t,n,o=null!==(n=null!==(t=e.value)&&void 0!==t?t:eV)&&void 0!==n?n:e.defaultValue,l=ee&&void 0!==eI?W(el,eI,ec):el;eK(l),eW(H(l,o,em))},[ec,eI,eV,el,e.defaultValue,e.value,ee,em]);var to=l.useCallback(function(e){var t;(null===(t=e_.current)||void 0===t?void 0:t.contains(e.target))&&e.preventDefault()},[]),tl=l.useCallback(function(e){switch(["ArrowUp","ArrowDown","Escape","Enter"].includes(e.key)&&e0()&&e.preventDefault(),e.key){case"ArrowUp":e0()&&tn("prev");break;case"ArrowDown":e0()&&tn("next");break;case"Escape":e8();break;case"Enter":e0()&&e6()}},[e0,e8,tn,e6]),tr=l.useCallback(function(e){if(R){var t=R(e,el);t&&(eK(t),eW(H(t,eV,em)))}else{var n=W(el,e.target.value,ec);eK(n),eW(H(n,eV,em))}eP(e.target.value)},[ec,eV,R,el,em]),ta=l.useCallback(function(e){if(1===e.key.length&&" "!==e.key){e2(e.key);return}switch(["ArrowUp","ArrowDown","Escape","Enter"].includes(e.key)&&e0()&&e.preventDefault(),e.key){case"ArrowUp":g?e0()&&tn("prev"):e3();break;case"ArrowDown":g?e0()&&tn("next"):e3();break;case"Escape":e8();break;case"Enter":case"Spacebar":case" ":g?e0()&&e6():e3()}},[e0,e8,tn,e2,e3,g,e6]),ti=l.useCallback(function(e){var t,n=Array.prototype.indexOf.call(null===(t=e.currentTarget.parentNode)||void 0===t?void 0:t.children,e.currentTarget),o=eY[n];o&&!o.disabled&&e9(n)},[eY,e9]),tc=l.useCallback(function(e){var t;eX(Array.prototype.indexOf.call(null===(t=e.currentTarget.parentNode)||void 0===t?void 0:t.children,e.currentTarget),!1)},[eX]),tu=l.useCallback(function(e,t){var n=t===ew,r=t===eH;return(0,o.jsx)(l.Fragment,{children:en({option:e,hovered:n,children:e.label,selected:r,disabled:e.disabled,onClick:ti,onMouseDown:F,onMouseOver:tc})},"".concat(e.value))},[ew,ti,tc,en,eH]),ts=l.useMemo(function(){var e=(null==eY?void 0:eY.length)>0?eY.map(tu):(0,o.jsx)(b.w,{className:V.CustomSelect__empty,children:ea});return"function"==typeof I?I({defaultDropdownContent:e}):e},[ea,eY,I,tu]),td=eT&&""!==e.value,tp=!eT&&""!==eV,tm=em&&!g&&(td||tp),tf=l.useMemo(function(){return tm?(0,o.jsx)(ed,{className:void 0===eu?V["CustomSelect--clear-icon"]:void 0,onClick:function(){return eB("")}}):null},[tm,ed,eu]),ty=l.useMemo(function(){return void 0!==eu?eu:(0,o.jsx)(y.K,{className:tm?V["CustomSelect__dropdown-icon"]:void 0,opened:g})},[tm,eu,g]),tv=(ty||tm)&&(0,o.jsxs)(l.Fragment,{children:[tf,ty]});return(0,o.jsxs)("label",{className:(0,r.AK)(V.CustomSelect,eg!==c.n$.REGULAR&&L[eg],j),style:T,ref:eC,onClick:to,children:[g&&ee?(0,o.jsx)(v.I,q(N({},eS),{autoFocus:!0,onBlur:e4,className:eG,value:eI,onKeyDown:tl,onChange:tr,onClick:e.onClick,before:_,after:tv,mode:(0,u.e)(Q)})):(0,o.jsx)(S.E,q(N({},eS),{"aria-hidden":!0,onClick:te,onKeyDown:ta,onKeyUp:tt,onFocus:e5,onBlur:e4,className:eG,before:_,after:tv,selectType:Q,children:null==eU?void 0:eU.label})),(0,o.jsxs)("select",{ref:eO,name:O,onChange:function(e){var t=H(eY,e.currentTarget.value,em);eH!==t&&(eT||eW(t),null==D||D(e))},onBlur:e.onBlur,onFocus:e.onFocus,onClick:e.onClick,value:eV,"aria-hidden":!0,className:V.CustomSelect__control,children:[em&&(0,o.jsx)("option",{value:""},""),el.map(function(e){return(0,o.jsx)("option",{value:e.value},"".concat(e.value))})]}),g&&(0,o.jsx)(m.U,{targetRef:eh,placement:k,scrollBoxRef:e1,onPlacementChange:eL,onMouseLeave:e7,fetching:B,offsetDistance:ey,sameWidth:void 0===ev||ev,forcePortal:A,autoHideScrollbar:$,autoHideScrollbarDelay:J,children:ts})]})}try{G.displayName="CustomSelect",G.__docgenInfo={description:"",displayName:"CustomSelect",props:{searchable:{defaultValue:null,description:"Если `true`, то при клике на селект в нём появится текстовое поле для поиска по `options`. По умолчанию поиск\nпроизводится по `option.label`.",name:"searchable",required:!1,type:{name:"boolean"}},emptyText:{defaultValue:null,description:"Текст, который будет отображен, если приходит пустой `options`.",name:"emptyText",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"> ⚠️ В **v6** из возвращаемых типов будет удалён `CustomSelectOptionInterface[]`. Для кастомной фильтрации используйте\n> `filterFn`.",name:"onInputChange",required:!1,type:{name:"((e: ChangeEvent<Element>, options: CustomSelectOptionInterface[]) => void | CustomSelectOptionInterface[])"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CustomSelectOptionInterface[]"}},filterFn:{defaultValue:null,description:"Функция для кастомной фильтрации. По умолчанию поиск производится по `option.label`.",name:"filterFn",required:!1,type:{name:"false | ((value: string, option: CustomSelectOptionInterface, getOptionLabel?: ((option: Partial<CustomSelectOptionInterface>) => string)) => boolean)"}},popupDirection:{defaultValue:null,description:"",name:"popupDirection",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},renderOption:{defaultValue:null,description:"Рендер-проп для кастомного рендера опции.\nВ объекте аргумента приходят [свойства опции](https://vkcom.github.io/VKUI/#/CustomSelectOption?id=props)\n\n> ⚠️  Важно: cвойство опции `disabled` должно выставляться только через проп `options`.\n> Запрещается выставлять `disabled` проп опциям в обход `options`, иначе селект не будет знать об актуальном состоянии\nопции.",name:"renderOption",required:!1,type:{name:"((props: CustomSelectOptionProps) => ReactNode)"}},renderDropdown:{defaultValue:null,description:"Рендер-проп для кастомного рендера содержимого дропдауна.\nВ `defaultDropdownContent` содержится список опций в виде скроллящегося блока.",name:"renderDropdown",required:!1,type:{name:"(({ defaultDropdownContent, }: { defaultDropdownContent: ReactNode; }) => ReactNode)"}},fetching:{defaultValue:null,description:'Если `true`, то в дропдауне вместо списка опций рисуется спиннер. При переданных `renderDropdown` и `fetching: true`\n"победит" `renderDropdown`.',name:"fetching",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"VoidFunction"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"VoidFunction"}},icon:{defaultValue:null,description:"Иконка раскрывающегося списка",name:"icon",required:!1,type:{name:"ReactNode"}},ClearButton:{defaultValue:null,description:"Кастомная кнопка для очистки значения.\nДолжна принимать обязательное свойство `onClick`",name:"ClearButton",required:!1,type:{name:"ComponentType<CustomSelectClearButtonProps>"}},allowClearButton:{defaultValue:null,description:"Если `true`, то справа будет отображаться кнопка для очистки значения",name:"allowClearButton",required:!1,type:{name:"boolean"}},dropdownOffsetDistance:{defaultValue:null,description:"",name:"dropdownOffsetDistance",required:!1,type:{name:"number"}},fixDropdownWidth:{defaultValue:null,description:"",name:"fixDropdownWidth",required:!1,type:{name:"boolean"}},forceDropdownPortal:{defaultValue:null,description:"",name:"forceDropdownPortal",required:!1,type:{name:"boolean"}},selectType:{defaultValue:null,description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"plain"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLSelectElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLLabelElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}},autoHideScrollbar:{defaultValue:null,description:"Скрывать ли ползунок скроллбара",name:"autoHideScrollbar",required:!1,type:{name:"boolean"}},autoHideScrollbarDelay:{defaultValue:null,description:"Через какое кол-во миллисекунд ползунок скроллбара скрывается",name:"autoHideScrollbarDelay",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CustomSelect/CustomSelect.tsx#CustomSelect"]={docgenInfo:G.__docgenInfo,name:"CustomSelect",path:"src/components/CustomSelect/CustomSelect.tsx#CustomSelect"})}catch(e){}},"./src/components/SelectMimicry/SelectMimicry.tsx":function(e,t,n){n.d(t,{E:function(){return v}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var l=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/hooks/useAdaptivity.ts"),a=n("./src/lib/useIsomorphicLayoutEffect.ts"),i=n("./src/hooks/useExternRef.ts"),c=n("./src/lib/adaptivity/constants.ts"),u=n("./src/lib/select.ts"),s=n("./src/components/DropdownIcon/DropdownIcon.tsx"),d=n("./src/components/FormField/FormField.tsx"),p=n("./src/components/SelectTypography/SelectTypography.tsx"),m=n("./src/components/Select/Select.module.css");function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=f({none:m.Z["Select--sizeY-none"]},c.n$.COMPACT,m.Z["Select--sizeY-compact"]),v=function(e){var t=e.tabIndex,n=e.placeholder,v=e.children,S=e.align,b=e.getRootRef,g=e.multiline,h=e.disabled,C=e.onClick,_=e.before,O=e.after,j=void 0===O?(0,o.jsx)(s.K,{}):O,w=e.selectType,x=void 0===w?"default":w,k=e.status,T=e.className,D=e.autoFocus,R=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["tabIndex","placeholder","children","align","getRootRef","multiline","disabled","onClick","before","after","selectType","status","className","autoFocus"]),I=(0,i.Q)(b),P=(0,r.g)().sizeY,E=void 0===P?"none":P,V=v||n;return!function(e,t){(0,a.L)(function(){t&&e.current&&e.current.focus()},[])}(I,D),(0,o.jsx)(d.W,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}({},R),{tabIndex:h?void 0:void 0===t?0:t,className:(0,l.AK)(m.Z.Select,E!==c.n$.REGULAR&&y[E],!v&&m.Z["Select--empty"],g&&m.Z["Select--multiline"],"center"===S&&m.Z["Select--align-center"],"right"===S&&m.Z["Select--align-right"],_&&m.Z["Select--hasBefore"],T),getRootRef:I,onClick:h?void 0:C,disabled:h,before:_,after:j,mode:(0,u.e)(x),status:k,children:(0,o.jsx)("div",{className:m.Z.Select__container,children:(0,o.jsx)(p.S,{selectType:x,className:m.Z.Select__title,children:V})})}))};try{v.displayName="SelectMimicry",v.__docgenInfo={description:"",displayName:"SelectMimicry",props:{multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},selectType:{defaultValue:{value:"default"},description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"plain"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:{value:"<DropdownIcon />"},description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectMimicry/SelectMimicry.tsx#SelectMimicry"]={docgenInfo:v.__docgenInfo,name:"SelectMimicry",path:"src/components/SelectMimicry/SelectMimicry.tsx#SelectMimicry"})}catch(e){}},"./src/components/SelectTypography/SelectTypography.tsx":function(e,t,n){n.d(t,{S:function(){return r}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var l=n("./src/components/Typography/Text/Text.tsx"),r=function(e){var t=e.selectType,n=e.children,r=function(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["selectType","children"]);return(0,o.jsx)(l.x,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({weight:"accent"===(void 0===t?"default":t)?"2":"3"},r),{children:n}))};try{r.displayName="SelectTypography",r.__docgenInfo={description:"",displayName:"SelectTypography",props:{selectType:{defaultValue:{value:"default"},description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"plain"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTypography/SelectTypography.tsx#SelectTypography"]={docgenInfo:r.__docgenInfo,name:"SelectTypography",path:"src/components/SelectTypography/SelectTypography.tsx#SelectTypography"})}catch(e){}},"./src/components/Select/Select.module.css":function(e,t,n){var o=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=n.n(o),r=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),a=n.n(r),i=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(i),u=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),s=n.n(u),d=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=n.n(d),m=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Select/Select.module.css"),f={attributes:{class:"vkui-style"}};f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),l()(m.Z,f),t.Z=m.Z&&m.Z.locals?m.Z.locals:void 0}}]);