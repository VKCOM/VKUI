"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4033],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/CalendarRange/CalendarRange.module.css":function(e,n,t){var a=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(a),l=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(l)()(r());o.push([e.id,".CalendarRange--r0fHe{background:#fff;background:var(--vkui--color_background_modal);border:.5px solid #d7d8d9;border:.5px solid var(--vkui--color_separator_primary);border-radius:8px;box-shadow:0 0 2px rgba(0,0,0,.03),0 2px 2px rgba(0,0,0,.06);box-shadow:var(--vkui--elevation1);box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:space-around;padding:12px;width:610px}.CalendarRange__inner--MC9iy{display:flex;flex-direction:column;flex-grow:1}.CalendarRange__inner--MC9iy:not(:last-child){margin-right:24px}.CalendarRange__header--ZjxAa{margin-bottom:4px}",""]),o.locals={CalendarRange:"CalendarRange--r0fHe",CalendarRange__inner:"CalendarRange__inner--MC9iy",CalendarRange__header:"CalendarRange__header--ZjxAa"},n.Z=o},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Spinner/Spinner.module.css":function(e,n,t){var a=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(a),l=t("../../node_modules/css-loader/dist/runtime/api.js"),o=t.n(l)()(r());o.push([e.id,".Spinner--aVS7j{align-items:center;color:#818c99;color:var(--vkui--color_icon_medium);display:flex;height:100%;justify-content:center;width:100%}.Spinner__self--i52N7{animation:vkui-spinner-rotator--PSgXX .7s linear infinite;animation:vkui-spinner-rotator--PSgXX var(--vkui_internal--duration) linear infinite;transform-origin:center}.Spinner__self--i52N7 svg{transform:scale(1)}.vkuiInternalPanelHeader .Spinner--aVS7j{color:currentColor}@keyframes vkui-spinner-rotator--PSgXX{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),o.locals={Spinner:"Spinner--aVS7j",Spinner__self:"Spinner__self--i52N7","vkui-spinner-rotator":"vkui-spinner-rotator--PSgXX"},n.Z=o},"./src/components/CalendarRange/CalendarRange.tsx":function(e,n,t){t.d(n,{a:function(){return k}});var a=t("../../node_modules/react/jsx-runtime.js"),r=t("../../node_modules/react/index.js"),l=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),o=t("./src/hooks/useCalendar.ts"),s=t("./src/lib/calendar.ts"),i=t("./src/lib/date.ts"),u=t("./src/components/CalendarDays/CalendarDays.tsx"),d=t("./src/components/CalendarHeader/CalendarHeader.tsx"),c=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=t.n(c),m=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),b=t.n(m),y=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),f=t.n(y),g=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),v=t.n(g),h=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=t.n(h),j=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/CalendarRange/CalendarRange.module.css"),_={attributes:{class:"vkui-style"}};_.setAttributes=v(),_.insert=f().bind(null,"head"),_.domAPI=b(),_.insertStyleElement=S(),p()(j.Z,_);var C=j.Z&&j.Z.locals?j.Z.locals:void 0;function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var D=function(e,n){return null!=n&&!!n[0]&&!!n[1]&&!!(0,i._w)(e,(0,i.b7)(n[0]),(0,i.iX)(n[1]))},k=function(e){var n=e.value,t=e.onChange,c=e.disablePast,p=e.disableFuture,m=e.shouldDisableDate,b=(e.onClose,e.weekStartsOn),y=void 0===b?1:b,f=e.getRootRef,g=e.disablePickers,v=e.prevMonthAriaLabel,h=e.nextMonthAriaLabel,S=e.changeMonthAriaLabel,j=e.changeYearAriaLabel,_=e.changeDayAriaLabel,k=void 0===_?"Изменить день":_,x=e.prevMonthIcon,A=e.nextMonthIcon,w=e.className,R=e.listenDayChangesForUpdate,P=function(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["value","onChange","disablePast","disableFuture","shouldDisableDate","onClose","weekStartsOn","getRootRef","disablePickers","prevMonthAriaLabel","nextMonthAriaLabel","changeMonthAriaLabel","changeYearAriaLabel","changeDayAriaLabel","prevMonthIcon","nextMonthIcon","className","listenDayChangesForUpdate"]),M=(0,o.G)({value:n,disableFuture:p,disablePast:c,shouldDisableDate:m}),L=M.viewDate,I=M.setViewDate,E=M.setPrevMonth,V=M.setNextMonth,N=M.focusedDay,Z=M.setFocusedDay,q=M.isDayFocused,K=M.isDayDisabled,F=M.resetSelectedDay,H=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,a,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(l.push(t.value),!n||l.length!==n);o=!0);}catch(e){s=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.useState(),2),T=H[0],B=H[1],Y=(0,i.zI)(L,1),X=r.useCallback(function(e){["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&e.preventDefault();var t=(0,s.it)(null!=N?N:null==n?void 0:n[1],e.key);!t||(0,i.xj)(t,L)||(0,i.xj)(t,(0,i.zI)(L,1))||I(t),Z(t)},[N,Z,I,n,L]),U=r.useCallback(function(e){if(!n)return[e,null];var t=n[0],a=n[1];return t&&(0,i.KC)(e,t)||a&&(0,i.KC)(e,a)?[(0,s.VB)(e,t),(0,s.VB)(e,a)]:t&&(0,i.RR)(e,t)?[(0,s.VB)(e,t),a]:t&&(0,i.Ax)(e,t)?[t,(0,s.VB)(e,a)]:n},[n]),z=r.useCallback(function(e){null==t||t(U(e)),B(void 0)},[t,U]),W=r.useCallback(function(e){return D(e,n)},[n]),$=r.useCallback(function(e){return!!((null==n?void 0:n[0])&&(0,i.KC)(e,n[0])||(null==n?void 0:n[1])&&(0,i.KC)(e,n[1]))},[n]),G=r.useCallback(function(e,t){return!!((0,s.Rw)(e,t)||(null==n?void 0:n[1])&&(0,i.KC)(e,n[1]))},[n]),J=r.useCallback(function(e,n){return!!((0,s.Rw)(e,n)||(null==T?void 0:T[1])&&(0,i.KC)(e,T[1]))},[T]),Q=r.useCallback(function(e,t){return!!((0,s.Dk)(e,t)||(null==n?void 0:n[0])&&(0,i.KC)(e,n[0]))},[n]),ee=r.useCallback(function(e,n){return!!((0,s.Dk)(e,n)||(null==T?void 0:T[0])&&(0,i.KC)(e,T[0]))},[T]),en=r.useCallback(function(e){return B(U(e))},[B,U]),et=r.useCallback(function(){return B(void 0)},[B]),ea=r.useCallback(function(e){return D(e,T)},[T]);return(0,a.jsxs)("div",function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({},P),{ref:f,className:(0,l.AK)(C.CalendarRange,w),children:[(0,a.jsxs)("div",{className:C.CalendarRange__inner,children:[(0,a.jsx)(d.v,{viewDate:L,onChange:I,nextMonth:!1,onPrevMonth:E,disablePickers:g,className:C.CalendarRange__header,prevMonthAriaLabel:v,nextMonthAriaLabel:h,changeMonthAriaLabel:S,changeYearAriaLabel:j,prevMonthIcon:x}),(0,a.jsx)(u.E,{viewDate:L,value:n,weekStartsOn:y,onKeyDown:X,isDayFocused:q,onDayChange:z,isDaySelected:W,isDayActive:$,isDaySelectionEnd:G,isDaySelectionStart:Q,isDayHinted:ea,onDayEnter:en,onDayLeave:et,isHintedDaySelectionEnd:J,isHintedDaySelectionStart:ee,isDayDisabled:K,listenDayChangesForUpdate:R,"aria-label":k})]}),(0,a.jsxs)("div",{className:C.CalendarRange__inner,children:[(0,a.jsx)(d.v,{viewDate:Y,onChange:I,prevMonth:!1,onNextMonth:V,disablePickers:g,className:C.CalendarRange__header,prevMonthAriaLabel:v,nextMonthAriaLabel:h,changeMonthAriaLabel:S,changeYearAriaLabel:j,nextMonthIcon:A}),(0,a.jsx)(u.E,{viewDate:Y,value:n,weekStartsOn:y,"aria-label":k,onKeyDown:X,isDayFocused:q,onDayChange:z,isDaySelected:W,isDayActive:$,isDaySelectionEnd:G,isDaySelectionStart:Q,isDayHinted:ea,onDayEnter:en,onDayLeave:et,isHintedDaySelectionEnd:J,isHintedDaySelectionStart:ee,isDayDisabled:K,listenDayChangesForUpdate:R,tabIndex:0,onBlur:F})]})]}))};try{k.displayName="CalendarRange",k.__docgenInfo={description:"",displayName:"CalendarRange",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"(Date | null)[]"}},disablePast:{defaultValue:null,description:"",name:"disablePast",required:!1,type:{name:"boolean"}},disableFuture:{defaultValue:null,description:"",name:"disableFuture",required:!1,type:{name:"boolean"}},disablePickers:{defaultValue:null,description:"",name:"disablePickers",required:!1,type:{name:"boolean"}},changeDayAriaLabel:{defaultValue:{value:"Изменить день"},description:"",name:"changeDayAriaLabel",required:!1,type:{name:"string"}},weekStartsOn:{defaultValue:{value:"1"},description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"2"},{value:"1"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: (Date | null)[]) => void)"}},shouldDisableDate:{defaultValue:null,description:"",name:"shouldDisableDate",required:!1,type:{name:"((value: Date) => boolean)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},prevMonthAriaLabel:{defaultValue:null,description:"",name:"prevMonthAriaLabel",required:!1,type:{name:"string"}},nextMonthAriaLabel:{defaultValue:null,description:"",name:"nextMonthAriaLabel",required:!1,type:{name:"string"}},changeMonthAriaLabel:{defaultValue:null,description:"",name:"changeMonthAriaLabel",required:!1,type:{name:"string"}},changeYearAriaLabel:{defaultValue:null,description:"",name:"changeYearAriaLabel",required:!1,type:{name:"string"}},prevMonthIcon:{defaultValue:null,description:"",name:"prevMonthIcon",required:!1,type:{name:"ReactNode"}},nextMonthIcon:{defaultValue:null,description:"",name:"nextMonthIcon",required:!1,type:{name:"ReactNode"}},listenDayChangesForUpdate:{defaultValue:null,description:"",name:"listenDayChangesForUpdate",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CalendarRange/CalendarRange.tsx#CalendarRange"]={docgenInfo:k.__docgenInfo,name:"CalendarRange",path:"src/components/CalendarRange/CalendarRange.tsx#CalendarRange"})}catch(e){}},"./src/components/Spinner/Spinner.tsx":function(e,n,t){t.d(n,{$:function(){return c}});var a=t("../../node_modules/react/jsx-runtime.js"),r=t("../../node_modules/react/index.js"),l=t("../../node_modules/@vkontakte/icons/dist/es6/16/spinner.js"),o=t("../../node_modules/@vkontakte/icons/dist/es6/24/spinner.js"),s=t("../../node_modules/@vkontakte/icons/dist/es6/32/spinner.js"),i=t("../../node_modules/@vkontakte/icons/dist/es6/44/spinner.js"),u=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),d=t("./src/components/Spinner/Spinner.module.css"),c=r.memo(function(e){var n=e.size,t=e["aria-label"],r=e.className,c=function(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["size","aria-label","className"]),p={small:l.Z,regular:o.Z,medium:s.Z,large:i.Z}[void 0===n?"regular":n];return(0,a.jsx)("span",function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({role:"status","aria-label":void 0===t?"Загружается...":t},c),{className:(0,u.AK)(d.Z.Spinner,r),children:(0,a.jsx)(p,{className:d.Z.Spinner__self})}))});c.displayName="Spinner";try{c.displayName="Spinner",c.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:c.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch(e){}},"./src/components/Spinner/Spinner.module.css":function(e,n,t){var a=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=t.n(a),l=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),o=t.n(l),s=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),i=t.n(s),u=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),d=t.n(u),c=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(c),m=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Spinner/Spinner.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=p(),r()(m.Z,b),n.Z=m.Z&&m.Z.locals?m.Z.locals:void 0}}]);