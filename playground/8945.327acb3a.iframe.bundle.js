"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8945,9495],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Spinner/Spinner.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),l=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(l)()(r());i.push([e.id,".Spinner--aVS7j{align-items:center;color:#818c99;color:var(--vkui--color_icon_medium);display:flex;height:100%;justify-content:center;width:100%}.vkuiInternalPanelHeader .Spinner--aVS7j{color:currentColor}",""]),i.locals={Spinner:"Spinner--aVS7j"},t.Z=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Footnote/Footnote.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),l=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(l)()(r());i.push([e.id,".Footnote--TsLLT{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:13px;font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:400;font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:16px;line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}",""]),i.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"},t.Z=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":function(e,t,n){var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),l=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(l)()(r());i.push([e.id,".VisuallyHidden--bAIOu{clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px!important;margin:-1px!important;opacity:0;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}",""]),i.locals={VisuallyHidden:"VisuallyHidden--bAIOu"},t.Z=i},"./src/components/NativeSelect/NativeSelect.tsx":function(e,t,n){n.d(t,{p:function(){return S}});var o=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/react/index.js"),l=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/hooks/useAdaptivity.ts"),a=n("./src/hooks/useEnsuredControl.ts"),s=n("./src/hooks/useExternRef.ts"),u=n("./src/lib/adaptivity/constants.ts"),c=n("./src/lib/select.ts"),d=n("./src/lib/useIsomorphicLayoutEffect.ts"),p=n("./src/components/DropdownIcon/DropdownIcon.tsx"),m=n("./src/components/FormField/FormField.tsx"),f=n("./src/components/SelectTypography/SelectTypography.tsx"),y=n("./src/components/Select/Select.module.css");function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=v({none:y.Z["Select--sizeY-none"]},u.n$.COMPACT,y.Z["Select--sizeY-compact"]),S=function(e){var t=e.style,n=e.defaultValue,b=e.align,S=e.placeholder,j=e.children,h=e.className,_=e.getRef,w=e.getRootRef,C=e.disabled,x=e.multiline,V=e.selectType,P=void 0===V?"default":V,R=e.status,k=e.icon,T=void 0===k?(0,o.jsx)(p.K,{}):k,A=e.before,I=e.onChange,E=e.value,D=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["style","defaultValue","align","placeholder","children","className","getRef","getRootRef","disabled","multiline","selectType","status","icon","before","onChange","value"]),N=O(r.useState(""),2),q=N[0],H=N[1],F=O(r.useState(!1),2),B=F[0],Z=F[1],L=O((0,a.V)({defaultValue:void 0===n?"":n,disabled:C,onChange:I,value:E}),2),z=L[0],K=L[1],M=(0,s.Q)(_),Y=(0,i.g)().sizeY,U=void 0===Y?"none":Y;return(0,d.L)(function(){var e,t=null===(e=M.current)||void 0===e?void 0:e.options[M.current.selectedIndex];t&&(H(t.text),Z(""===t.value&&null!=S))},[z,j]),(0,o.jsxs)(m.W,{Component:"label",className:(0,l.AK)(y.Z.Select,"vkuiInternalNativeSelect",A&&y.Z["Select--hasBefore"],B&&y.Z["Select--empty"],x&&y.Z["Select--multiline"],"center"===b&&y.Z["Select--align-center"],"right"===b&&y.Z["Select--align-right"],U!==u.n$.REGULAR&&g[U],h),style:t,getRootRef:w,disabled:C,before:A,after:T,status:R,mode:(0,c.e)(P),children:[(0,o.jsxs)("select",function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){v(e,t,n[t])})}return e}({},D),{disabled:C,className:y.Z.Select__el,onChange:K,value:z,ref:M,children:[S&&(0,o.jsx)("option",{value:"",children:S}),j]})),(0,o.jsx)("div",{className:y.Z.Select__container,"aria-hidden":!0,children:(0,o.jsx)(f.S,{className:y.Z.Select__title,selectType:P,children:q})})]})};try{S.displayName="NativeSelect",S.__docgenInfo={description:"",displayName:"NativeSelect",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},selectType:{defaultValue:{value:"default"},description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"plain"'}]}},icon:{defaultValue:{value:"<DropdownIcon />"},description:"Иконка раскрывающегося списка",name:"icon",required:!1,type:{name:"ReactNode"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLSelectElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLLabelElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NativeSelect/NativeSelect.tsx#NativeSelect"]={docgenInfo:S.__docgenInfo,name:"NativeSelect",path:"src/components/NativeSelect/NativeSelect.tsx#NativeSelect"})}catch(e){}},"./src/components/Select/Select.tsx":function(e,t,n){n.d(t,{P:function(){return c}});var o=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/react/index.js"),l=n("./src/hooks/useAdaptivityHasPointer.ts"),i=n("./src/components/CustomSelect/CustomSelect.tsx"),a=n("./src/components/NativeSelect/NativeSelect.tsx");function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=function(e){e.children;var t=u(e,["children"]),n=t.options,c=(t.searchable,t.emptyText,t.onInputChange,t.filterFn,t.popupDirection,t.renderOption,t.renderDropdown,t.fetching,t.onClose,t.onOpen,t.icon,t.ClearButton,t.allowClearButton,t.dropdownOffsetDistance,t.fixDropdownWidth,t.forceDropdownPortal,t.selectType,t.autoHideScrollbar,t.autoHideScrollbarDelay,u(t,["options","searchable","emptyText","onInputChange","filterFn","popupDirection","renderOption","renderDropdown","fetching","onClose","onOpen","icon","ClearButton","allowClearButton","dropdownOffsetDistance","fixDropdownWidth","forceDropdownPortal","selectType","autoHideScrollbar","autoHideScrollbarDelay"])),d=(0,l.K)();return(0,o.jsxs)(r.Fragment,{children:[(void 0===d||d)&&(0,o.jsx)(i.A,s({},t)),(void 0===d||!d)&&(0,o.jsx)(a.p,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(s({},c),{children:(void 0===n?[]:n).map(function(e){var t=e.label,n=e.value;return(0,o.jsx)("option",{value:n,children:t},"".concat(n))})}))]})};try{c.displayName="Select",c.__docgenInfo={description:"",displayName:"Select",props:{searchable:{defaultValue:null,description:"Если `true`, то при клике на селект в нём появится текстовое поле для поиска по `options`. По умолчанию поиск\nпроизводится по `option.label`.",name:"searchable",required:!1,type:{name:"boolean"}},emptyText:{defaultValue:null,description:"Текст, который будет отображен, если приходит пустой `options`.",name:"emptyText",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"> ⚠️ В **v6** из возвращаемых типов будет удалён `CustomSelectOptionInterface[]`. Для кастомной фильтрации используйте\n> `filterFn`.",name:"onInputChange",required:!1,type:{name:"((e: ChangeEvent<Element>, options: CustomSelectOptionInterface[]) => void | CustomSelectOptionInterface[])"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CustomSelectOptionInterface[]"}},filterFn:{defaultValue:null,description:"Функция для кастомной фильтрации. По умолчанию поиск производится по `option.label`.",name:"filterFn",required:!1,type:{name:"false | ((value: string, option: CustomSelectOptionInterface, getOptionLabel?: ((option: Partial<CustomSelectOptionInterface>) => string)) => boolean)"}},popupDirection:{defaultValue:null,description:"",name:"popupDirection",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},renderOption:{defaultValue:null,description:"Рендер-проп для кастомного рендера опции.\nВ объекте аргумента приходят [свойства опции](https://vkcom.github.io/VKUI/#/CustomSelectOption?id=props)\n\n> ⚠️  Важно: cвойство опции `disabled` должно выставляться только через проп `options`.\n> Запрещается выставлять `disabled` проп опциям в обход `options`, иначе селект не будет знать об актуальном состоянии\nопции.",name:"renderOption",required:!1,type:{name:"((props: CustomSelectRenderOption) => ReactNode)"}},renderDropdown:{defaultValue:null,description:"Рендер-проп для кастомного рендера содержимого дропдауна.\nВ `defaultDropdownContent` содержится список опций в виде скроллящегося блока.",name:"renderDropdown",required:!1,type:{name:"(({ defaultDropdownContent, }: { defaultDropdownContent: ReactNode; }) => ReactNode)"}},fetching:{defaultValue:null,description:'Если `true`, то в дропдауне вместо списка опций рисуется спиннер. При переданных `renderDropdown` и `fetching: true`\n"победит" `renderDropdown`.',name:"fetching",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"VoidFunction"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"VoidFunction"}},icon:{defaultValue:null,description:"Иконка раскрывающегося списка",name:"icon",required:!1,type:{name:"ReactNode"}},ClearButton:{defaultValue:null,description:"Кастомная кнопка для очистки значения.\nДолжна принимать обязательное свойство `onClick`",name:"ClearButton",required:!1,type:{name:"ComponentType<CustomSelectClearButtonProps>"}},allowClearButton:{defaultValue:null,description:"Если `true`, то справа будет отображаться кнопка для очистки значения",name:"allowClearButton",required:!1,type:{name:"boolean"}},dropdownOffsetDistance:{defaultValue:null,description:"",name:"dropdownOffsetDistance",required:!1,type:{name:"number"}},fixDropdownWidth:{defaultValue:null,description:"",name:"fixDropdownWidth",required:!1,type:{name:"boolean"}},forceDropdownPortal:{defaultValue:null,description:"",name:"forceDropdownPortal",required:!1,type:{name:"boolean"}},selectType:{defaultValue:null,description:"",name:"selectType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"plain"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLSelectElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLLabelElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}},autoHideScrollbar:{defaultValue:null,description:"Скрывать ли ползунок скроллбара",name:"autoHideScrollbar",required:!1,type:{name:"boolean"}},autoHideScrollbarDelay:{defaultValue:null,description:"Через какое кол-во миллисекунд ползунок скроллбара скрывается",name:"autoHideScrollbarDelay",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:c.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(e){}},"./src/components/Spinner/Spinner.tsx":function(e,t,n){n.d(t,{$:function(){return m}});var o=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/react/index.js"),l=n("../../node_modules/@vkontakte/icons/dist/es6/16/spinner_16.js"),i=n("../../node_modules/@vkontakte/icons/dist/es6/24/spinner_24.js"),a=n("../../node_modules/@vkontakte/icons/dist/es6/32/spinner_32.js"),s=n("../../node_modules/@vkontakte/icons/dist/es6/44/spinner_44.js"),u=n("./src/lib/warnOnce.ts"),c=n("./src/components/RootComponent/RootComponent.tsx"),d=n("./src/components/VisuallyHidden/VisuallyHidden.tsx"),p=n("./src/components/Spinner/Spinner.module.css");(0,u.O)("Spinner");var m=r.memo(function(e){var t=e.size,n=void 0===t?"regular":t,r=e.children,u=void 0===r?"Загружается...":r,m=e["aria-label"],f=e.disableAnimation,y=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["size","children","aria-label","disableAnimation"]),b={small:l.P,regular:i.h,medium:a.X,large:s.C}[n],v={small:8,regular:12,medium:16,large:22}[n];return(0,o.jsxs)(c.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:"span",role:"status"},y),{baseClassName:p.Z.Spinner,children:[(0,o.jsx)(b,{children:!f&&(0,o.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 ".concat(v," ").concat(v),to:"360 ".concat(v," ").concat(v),dur:"0.7s",repeatCount:"indefinite"})}),(0,o.jsx)(d.T,{children:null!=u?u:void 0===m?"Загружается...":m})]}))});m.displayName="Spinner";try{m.displayName="Spinner",m.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'},{value:'"medium"'},{value:'"large"'}]}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:m.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch(e){}},"./src/components/Typography/Footnote/Footnote.tsx":function(e,t,n){n.d(t,{w:function(){return g}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),l=n("./src/components/Typography/Typography.tsx"),i=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=n.n(i),s=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=n.n(s),c=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=n.n(c),p=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=n.n(p),f=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=n.n(f),b=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),v={attributes:{class:"vkui-style"}};v.setAttributes=m(),v.insert=d().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=y(),a()(b.Z,v);var O=b.Z&&b.Z.locals?b.Z.locals:void 0,g=function(e){var t=e.className,n=e.caps,i=e.Component,a=e.normalize,s=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["className","caps","Component","normalize"]);return(0,o.jsx)(l.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===i?"span":i,normalize:void 0===a||a,className:(0,r.AK)(t,O.Footnote,n&&O["Footnote--caps"])},s))};try{g.displayName="Footnote",g.__docgenInfo={description:"Используется для основных подписей.",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:g.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(e){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":function(e,t,n){n.d(t,{T:function(){return O}});var o=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var r=n("./src/components/RootComponent/RootComponent.tsx"),l=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=n.n(l),a=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),s=n.n(a),u=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(u),d=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=n.n(d),m=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=n.n(m),y=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),b={attributes:{class:"vkui-style"}};b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=f(),i()(y.Z,b);var v=y.Z&&y.Z.locals?y.Z.locals:void 0,O=function(e){var t=e.Component,n=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["Component"]);return(0,o.jsx)(r.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===t?"span":t},n),{baseClassName:v.VisuallyHidden}))};try{O.displayName="VisuallyHidden",O.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:O.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(e){}},"./src/hooks/useEnsuredControl.ts":function(e,t,n){n.d(t,{V:function(){return i},q:function(){return a}});var o=n("../../node_modules/react/index.js");function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){var t=e.onChange,n=e.disabled,r=l(a(function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["onChange","disabled"])),2),i=r[0],s=r[1];return[i,o.useCallback(function(e){!n&&(s(e.target.value),t&&t(e))},[s,t,n])]}function a(e){var t=e.disabled,n=e.onChange,r=e.defaultValue,i=e.value,a=void 0!==i,s=l(o.useState(r),2),u=s[0],c=s[1],d=o.useCallback(function(e){!t&&(a||c(e),n&&n(e))},[t,a,n]);return[a?i:u,d]}},"./src/components/Spinner/Spinner.module.css":function(e,t,n){var o=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=n.n(o),l=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),i=n.n(l),a=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),s=n.n(a),u=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),c=n.n(u),d=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=n.n(d),m=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Spinner/Spinner.module.css"),f={attributes:{class:"vkui-style"}};f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),r()(m.Z,f),t.Z=m.Z&&m.Z.locals?m.Z.locals:void 0}}]);