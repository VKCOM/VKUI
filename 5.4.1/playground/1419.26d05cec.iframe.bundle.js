"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1419],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Spinner/Spinner.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),l=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(l)()(r());a.push([e.id,".Spinner--aVS7j{align-items:center;color:#818c99;color:var(--vkui--color_icon_medium);display:flex;height:100%;justify-content:center;width:100%}.Spinner__self--i52N7{animation:vkui-spinner-rotator--PSgXX .7s linear infinite;animation:vkui-spinner-rotator--PSgXX var(--vkui_internal--duration) linear infinite;transform-origin:center}.Spinner__self--i52N7 svg{transform:scale(1)}.vkuiInternalPanelHeader .Spinner--aVS7j{color:currentColor}@keyframes vkui-spinner-rotator--PSgXX{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),a.locals={Spinner:"Spinner--aVS7j",Spinner__self:"Spinner__self--i52N7","vkui-spinner-rotator":"vkui-spinner-rotator--PSgXX"},t.Z=a},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Typography/Footnote/Footnote.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),l=n("../../node_modules/css-loader/dist/runtime/api.js"),a=n.n(l)()(r());a.push([e.id,".Footnote--TsLLT{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),a.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"},t.Z=a},"./src/components/NativeSelect/NativeSelect.tsx":function(e,t,n){n.d(t,{p:function(){return S}});var o=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/react/index.js"),l=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=n("./src/hooks/useAdaptivity.ts"),i=n("./src/hooks/useEnsuredControl.ts"),u=n("./src/hooks/useExternRef.ts"),s=n("./src/lib/adaptivity/constants.ts"),c=n("./src/lib/useIsomorphicLayoutEffect.ts"),d=n("./src/components/DropdownIcon/DropdownIcon.tsx"),p=n("./src/components/FormField/FormField.tsx"),f=n("./src/components/SelectTypography/SelectTypography.tsx"),m=n("./src/components/Select/Select.module.css");function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=v({none:m.Z["Select--sizeY-none"]},s.n$.COMPACT,m.Z["Select--sizeY-compact"]),S=function(e){var t=e.style,n=e.defaultValue,y=e.align,S=e.placeholder,O=e.children,h=e.className,j=e.getRef,_=e.getRootRef,w=e.disabled,C=e.multiline,x=e.selectType,P=e.status,k=e.icon,V=void 0===k?(0,o.jsx)(d.K,{}):k,I=e.before,R=e.onChange,A=e.value,N=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["style","defaultValue","align","placeholder","children","className","getRef","getRootRef","disabled","multiline","selectType","status","icon","before","onChange","value"]),T=b(r.useState(""),2),E=T[0],q=T[1],D=b(r.useState(!1),2),F=D[0],B=D[1],Z=b((0,i.V)({defaultValue:void 0===n?"":n,disabled:w,onChange:R,value:A}),2),L=Z[0],z=Z[1],K=(0,u.Q)(j),H=(0,a.g)().sizeY,M=void 0===H?"none":H;return(0,c.L)(function(){var e,t=null===(e=K.current)||void 0===e?void 0:e.options[K.current.selectedIndex];t&&(q(t.text),B(""===t.value&&null!=S))},[L,O]),(0,o.jsxs)(p.W,{Component:"label",className:(0,l.AK)(m.Z.Select,"vkuiInternalNativeSelect",I&&m.Z["Select--hasBefore"],F&&m.Z["Select--empty"],C&&m.Z["Select--multiline"],"center"===y&&m.Z["Select--align-center"],"right"===y&&m.Z["Select--align-right"],M!==s.n$.REGULAR&&g[M],h),style:t,getRootRef:_,disabled:w,before:I,after:V,status:P,children:[(0,o.jsxs)("select",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){v(e,t,n[t])})}return e}({},N),{disabled:w,className:m.Z.Select__el,onChange:z,value:L,ref:K,children:[S&&(0,o.jsx)("option",{value:"",children:S}),O]})),(0,o.jsx)("div",{className:m.Z.Select__container,children:(0,o.jsx)(f.S,{className:m.Z.Select__title,selectType:void 0===x?"default":x,children:E})})]})};try{S.displayName="NativeSelect",S.__docgenInfo={description:"",displayName:"NativeSelect",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},selectType:{defaultValue:{value:"default"},description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"plain"'}]}},icon:{defaultValue:{value:"<DropdownIcon />"},description:"Иконка раскрывающегося списка",name:"icon",required:!1,type:{name:"ReactNode"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLSelectElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLLabelElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NativeSelect/NativeSelect.tsx#NativeSelect"]={docgenInfo:S.__docgenInfo,name:"NativeSelect",path:"src/components/NativeSelect/NativeSelect.tsx#NativeSelect"})}catch(e){}},"./src/components/Select/Select.tsx":function(e,t,n){n.d(t,{P:function(){return s}});var o=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/react/index.js"),l=n("./src/hooks/useAdaptivityHasPointer.ts"),a=n("./src/components/CustomSelect/CustomSelect.tsx"),i=n("./src/components/NativeSelect/NativeSelect.tsx");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}var s=function(e){e.children;var t=e.options,n=void 0===t?[]:t,s=e.popupDirection,c=e.renderOption,d=e.allowClearButton,p=e.ClearButton,f=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["children","options","popupDirection","renderOption","allowClearButton","ClearButton"]),m=(0,l.K)();return(0,o.jsxs)(r.Fragment,{children:[(void 0===m||m)&&(0,o.jsx)(a.A,u({options:n,popupDirection:s,renderOption:c,allowClearButton:d,ClearButton:p},f)),(void 0===m||!m)&&(0,o.jsx)(i.p,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(u({},f),{children:n.map(function(e){var t=e.label,n=e.value;return(0,o.jsx)("option",{value:n,children:t},"".concat(n))})}))]})};try{s.displayName="Select",s.__docgenInfo={description:"",displayName:"Select",props:{searchable:{defaultValue:null,description:"Если `true`, то при клике на селект в нём появится текстовое поле для поиска по `options`. По умолчанию поиск\nпроизводится по `option.label`.",name:"searchable",required:!1,type:{name:"boolean"}},emptyText:{defaultValue:null,description:"Текст, который будет отображен, если приходит пустой `options`.",name:"emptyText",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"> ⚠️ В v6 из возвращаемых типов будет удалён `CustomSelectOptionInterface[]`. Для кастомной фильтрации используйте\n> `filterFn`.",name:"onInputChange",required:!1,type:{name:"((e: ChangeEvent<Element>, options: CustomSelectOptionInterface[]) => void | CustomSelectOptionInterface[])"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"CustomSelectOptionInterface[]"}},filterFn:{defaultValue:null,description:"Функция для кастомной фильтрации. По умолчанию поиск производится по `option.label`.",name:"filterFn",required:!1,type:{name:"false | ((value: string, option: CustomSelectOptionInterface, getOptionLabel?: ((option: Partial<CustomSelectOptionInterface>) => string)) => boolean)"}},popupDirection:{defaultValue:null,description:"",name:"popupDirection",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},renderOption:{defaultValue:null,description:"Рендер-проп для кастомного рендера опции.\nВ объекте аргумента приходят [свойства опции](https://vkcom.github.io/VKUI/#/CustomSelectOption?id=props)",name:"renderOption",required:!1,type:{name:"((props: CustomSelectOptionProps) => ReactNode)"}},renderDropdown:{defaultValue:null,description:"Рендер-проп для кастомного рендера содержимого дропдауна.\nВ `defaultDropdownContent` содержится список опций в виде скроллящегося блока.",name:"renderDropdown",required:!1,type:{name:"(({ defaultDropdownContent, }: { defaultDropdownContent: ReactNode; }) => ReactNode)"}},fetching:{defaultValue:null,description:'Если `true`, то в дропдауне вместо списка опций рисуется спиннер. При переданных `renderDropdown` и `fetching: true`\n"победит" `renderDropdown`.',name:"fetching",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"VoidFunction"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"VoidFunction"}},icon:{defaultValue:null,description:"Иконка раскрывающегося списка",name:"icon",required:!1,type:{name:"ReactNode"}},ClearButton:{defaultValue:null,description:"Кастомная кнопка для очистки значения.\nДолжна принимать обязательное свойство `onClick`",name:"ClearButton",required:!1,type:{name:"ComponentType<CustomSelectClearButtonProps>"}},allowClearButton:{defaultValue:null,description:"Если `true`, то справа будет отображаться кнопка для очистки значения",name:"allowClearButton",required:!1,type:{name:"boolean"}},dropdownOffsetDistance:{defaultValue:null,description:"",name:"dropdownOffsetDistance",required:!1,type:{name:"number"}},fixDropdownWidth:{defaultValue:null,description:"",name:"fixDropdownWidth",required:!1,type:{name:"boolean"}},forceDropdownPortal:{defaultValue:null,description:"",name:"forceDropdownPortal",required:!1,type:{name:"boolean"}},selectType:{defaultValue:null,description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"plain"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLSelectElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLLabelElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}},autoHideScrollbar:{defaultValue:null,description:"Скрывать ли ползунок скроллбара",name:"autoHideScrollbar",required:!1,type:{name:"boolean"}},autoHideScrollbarDelay:{defaultValue:null,description:"Через какое кол-во миллисекунд ползунок скроллбара скрывается",name:"autoHideScrollbarDelay",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:s.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(e){}},"./src/components/Spinner/Spinner.tsx":function(e,t,n){n.d(t,{$:function(){return p}});var o=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/react/index.js"),l=n("../../node_modules/@vkontakte/icons-sprite/dist/index.js"),a=(0,l.De)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="spinner_16"><path fill="currentColor" fill-rule="evenodd" d="M11.21 2.93a6 6 0 0 0-8.64 7.62 1 1 0 1 1-1.8.86A8 8 0 1 1 8 16a1 1 0 1 1 0-2 6 6 0 0 0 3.21-11.07z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0),i=(0,l.De)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0),u=(0,l.De)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 15.97 15.97 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Z" /></symbol>',32,32,!1,void 0),s=(0,l.De)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A21.964 21.964 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22Z" /></symbol>',44,44,!1,void 0),c=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),d=n("./src/components/Spinner/Spinner.module.css"),p=r.memo(function(e){var t=e.size,n=e["aria-label"],r=e.className,l=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["size","aria-label","className"]);return(0,o.jsx)("span",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({role:"status","aria-label":void 0===n?"Загружается...":n},l),{className:(0,c.AK)(d.Z.Spinner,r),children:(0,o.jsx)({small:a,regular:i,medium:u,large:s}[void 0===t?"regular":t],{className:d.Z.Spinner__self})}))});p.displayName="Spinner";try{p.displayName="Spinner",p.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:p.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch(e){}},"./src/components/Typography/Footnote/Footnote.tsx":function(e,t,n){n.d(t,{w:function(){return S}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),l=n("./src/components/Typography/Typography.tsx"),a=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=n.n(a),u=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),s=n.n(u),c=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=n.n(c),p=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=n.n(p),m=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=n.n(m),v=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Typography/Footnote/Footnote.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=f(),b.insert=d().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=y(),i()(v.Z,b);var g=v.Z&&v.Z.locals?v.Z.locals:void 0,S=function(e){var t=e.className,n=e.caps,a=e.Component,i=e.normalize,u=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["className","caps","Component","normalize"]);return(0,o.jsx)(l.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===a?"span":a,normalize:void 0===i||i,className:(0,r.AK)(t,g.Footnote,n&&g["Footnote--caps"])},u))};try{S.displayName="Footnote",S.__docgenInfo={description:"",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:S.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}},"./src/hooks/useEnsuredControl.ts":function(e,t,n){n.d(t,{V:function(){return a},q:function(){return i}});var o=n("../../node_modules/react/index.js");function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){var t=e.onChange,n=e.disabled,r=l(i(function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["onChange","disabled"])),2),a=r[0],u=r[1];return[a,o.useCallback(function(e){!n&&(u(e.target.value),t&&t(e))},[u,t,n])]}function i(e){var t=e.disabled,n=e.onChange,r=e.defaultValue,a=e.value,i=void 0!==a,u=l(o.useState(r),2),s=u[0],c=u[1],d=o.useCallback(function(e){!t&&(i||c(e),n&&n(e))},[t,i,n]);return[i?a:s,d]}},"./src/components/Spinner/Spinner.module.css":function(e,t,n){var o=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=n.n(o),l=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),a=n.n(l),i=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),u=n.n(i),s=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),c=n.n(s),d=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=n.n(d),f=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/Spinner/Spinner.module.css"),m={attributes:{class:"vkui-style"}};m.setAttributes=c(),m.insert=u().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),r()(f.Z,m),t.Z=f.Z&&f.Z.locals?f.Z.locals:void 0}}]);