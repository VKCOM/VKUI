"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2753,9495],{"./src/components/CellButton/CellButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}let __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/CellButton",component:__webpack_require__("./src/components/CellButton/CellButton.tsx").S,parameters:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.tW,_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.nB)};var Playground={args:{children:"Создать беседу",before:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_3__.P,null)}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Создать беседу',\n    before: <Icon28AddOutline />\n  }\n}",...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./src/components/CellButton/CellButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>CellButton});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),SimpleCell=__webpack_require__("./src/components/SimpleCell/SimpleCell.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),CellButton_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/CellButton/CellButton.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(CellButton_module.Z,options);let CellButton_CellButton_module=CellButton_module.Z&&CellButton_module.Z.locals?CellButton_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CellButton=function(_param){var _param_centered=_param.centered,_param_mode=_param.mode,className=_param.className,restProps=_object_without_properties(_param,["centered","mode","className"]);return react.createElement(SimpleCell.q,_object_spread_props(_object_spread({},restProps),{className:(0,es6.AK)(CellButton_CellButton_module.CellButton,"danger"===(void 0===_param_mode?"primary":_param_mode)&&CellButton_CellButton_module["CellButton--mode-danger"],void 0!==_param_centered&&_param_centered&&CellButton_CellButton_module["CellButton--centered"],className)}))};try{CellButton.displayName="CellButton",CellButton.__docgenInfo={description:"",displayName:"CellButton",props:{mode:{defaultValue:{value:"primary"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'}]}},centered:{defaultValue:{value:"false"},description:"",name:"centered",required:!1,type:{name:"boolean"}},before:{defaultValue:null,description:"Иконка 28 или `<Avatar size={28|32|40|48|72} />`",name:"before",required:!1,type:{name:"ReactNode"}},badgeBeforeTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится слева от текста `children`.",name:"badgeBeforeTitle",required:!1,type:{name:"ReactNode"}},badgeAfterTitle:{defaultValue:null,description:"Иконка 12 или `<Badge />`. Добавится справа от текста `children`.",name:"badgeAfterTitle",required:!1,type:{name:"ReactNode"}},badgeBeforeSubtitle:{defaultValue:null,description:"Иконка 12. Добавится слева от текста `subtitle`.",name:"badgeBeforeSubtitle",required:!1,type:{name:"ReactNode"}},badgeAfterSubtitle:{defaultValue:null,description:"Иконка 12. Добавится справа от текста `subtitle`.",name:"badgeAfterSubtitle",required:!1,type:{name:"ReactNode"}},indicator:{defaultValue:null,description:"Контейнер для текста справа от `children`.",name:"indicator",required:!1,type:{name:"ReactNode"}},subhead:{defaultValue:null,description:"Дополнительная строка текста над `children`.",name:"subhead",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"Дополнительная строка текста под `children`.",name:"subtitle",required:!1,type:{name:"ReactNode"}},extraSubtitle:{defaultValue:null,description:"Дополнительная строка текста под `children` и `subtitle`.",name:"extraSubtitle",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.",name:"after",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Убирает анимацию нажатия",name:"disabled",required:!1,type:{name:"boolean"}},expandable:{defaultValue:null,description:"В режиме `auto` в iOS добавляет chevron справа.\nПередавать `always`, если предполагается переход при клике по ячейке.",name:"expandable",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"always"'}]}},chevronSize:{defaultValue:null,description:"Размер chevron",name:"chevronSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},multiline:{defaultValue:null,description:"Включает многострочный режим для отображения текста",name:"multiline",required:!1,type:{name:"boolean"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CellButton/CellButton.tsx#CellButton"]={docgenInfo:CellButton.__docgenInfo,name:"CellButton",path:"src/components/CellButton/CellButton.tsx#CellButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Footnote/Footnote.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Footnote});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Footnote_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Footnote_module.Z,options);let Footnote_Footnote_module=Footnote_module.Z&&Footnote_module.Z.locals?Footnote_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Footnote=function(_param){var className=_param.className,caps=_param.caps,_param_Component=_param.Component,_param_normalize=_param.normalize,restProps=_object_without_properties(_param,["className","caps","Component","normalize"]);return react.createElement(Typography.Z,_object_spread({Component:void 0===_param_Component?"span":_param_Component,normalize:void 0===_param_normalize||_param_normalize,className:(0,es6.AK)(className,Footnote_Footnote_module.Footnote,caps&&Footnote_Footnote_module["Footnote--caps"])},restProps))};try{Footnote.displayName="Footnote",Footnote.__docgenInfo={description:"Используется для основных подписей.",displayName:"Footnote",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Footnote/Footnote.tsx#Footnote"]={docgenInfo:Footnote.__docgenInfo,name:"Footnote",path:"src/components/Typography/Footnote/Footnote.tsx#Footnote"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{_:()=>_object_without_properties})},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{De:()=>makeIcon});var browserSprite,_object_spread=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_spread.js"),_object_spread_props=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),_object_without_properties=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),react=__webpack_require__("../../node_modules/react/index.js"),_class_call_check=__webpack_require__("../../node_modules/@swc/helpers/esm/_class_call_check.js"),_create_class=__webpack_require__("../../node_modules/@swc/helpers/esm/_create_class.js"),_define_property=__webpack_require__("../../node_modules/@swc/helpers/esm/_define_property.js");function parse(content){var hasImportNode=!!document.importNode,el=new DOMParser().parseFromString(content,"image/svg+xml").documentElement;return hasImportNode?document.importNode(el,!0):el}var BrowserSymbol=function(){function BrowserSymbol(param){var content=param.content;(0,_class_call_check._)(this,BrowserSymbol),(0,_define_property._)(this,"isMounted",!1),(0,_define_property._)(this,"node",void 0),this.node=parse(content)}return(0,_create_class._)(BrowserSymbol,[{key:"id",get:function get(){return this.node.id}},{key:"mount",value:function mount(target){return this.isMounted||(this.isMounted=!0,target.appendChild(this.node)),this.node}},{key:"unmount",value:function unmount(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function createFromExistingNode(node){var symbol=new BrowserSymbol({content:""});return symbol.node=node,symbol}}]),BrowserSymbol}(),namespaceURI="http://www.w3.org/2000/svg",BrowserSprite=function(){function BrowserSprite(){var config=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,_class_call_check._)(this,BrowserSprite),(0,_define_property._)(this,"symbols",new Map),(0,_define_property._)(this,"config",{attrs:{xmlns:namespaceURI,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,_define_property._)(this,"node",null),Object.assign(this.config.attrs,config.attrs)}return(0,_create_class._)(BrowserSprite,[{key:"push",value:function push(symbol){var symbols=this.symbols,existing=symbols.has(symbol.id);return symbols.set(symbol.id,symbol),!existing}},{key:"add",value:function add(symbol){var isNewSymbol=this.push(symbol);return this.node&&isNewSymbol&&symbol.mount(this.node),isNewSymbol}},{key:"attach",value:function attach(target){var _this=this;this.node||(this.node=target,this.symbols.forEach(function(symbol){symbol.mount(target)}),target.querySelectorAll("symbol").forEach(function(symbolNode){var symbol=BrowserSymbol.createFromExistingNode(symbolNode);_this.add(symbol)}))}},{key:"mount",value:function mount(target){var prepend=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),prepend&&target.childNodes[0]?target.insertBefore(this.node,target.firstChild):target.appendChild(this.node)),this.node}},{key:"render",value:function render(){var el=document.createElementNS(namespaceURI,"svg");return Object.entries(this.config.attrs).forEach(function(entry){return el.setAttribute(entry[0],entry[1])}),this.symbols.forEach(function(symbol){return el.appendChild(symbol.node)}),el}},{key:"unmount",value:function unmount(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),BrowserSprite}(),canUseDOM=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(canUseDOM){var spriteId="__SVG_SPRITE_NODE__";browserSprite=new BrowserSprite({attrs:{id:spriteId}});var mount=function(){var spriteNode=document.getElementById(spriteId);spriteNode?browserSprite.attach(spriteNode):browserSprite.mount(document.body),document.removeEventListener("DOMContentLoaded",mount)};document.querySelector("body")?mount():document.addEventListener("DOMContentLoaded",mount)}else browserSprite=null;function addSpriteSymbol(symbol){browserSprite&&browserSprite.add(symbol)}var useIsomorphicLayoutEffect=canUseDOM?react.useLayoutEffect:react.useEffect;function warnOnce(componentName){var didWarn={};return function(message){var type=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";didWarn[message]||(console[type]("[@vkontakte/icons][".concat(componentName,"] ").concat(message)),didWarn[message]=!0)}}var SvgIcon=function(_param){var _param_width=_param.width,width=void 0===_param_width?0:_param_width,_param_height=_param.height,height=void 0===_param_height?0:_param_height,viewBox=_param.viewBox,id=_param.id,_param_className=_param.className,fill=_param.fill,getRootRef=_param.getRootRef,tmp=_param.style,title=_param.title,children=_param.children,restProps=(0,_object_without_properties._)(_param,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),size=Math.max(width,height),style=(0,_object_spread._)({width:width,height:height},void 0===tmp?{}:tmp);return react.createElement("svg",(0,_object_spread_props._)((0,_object_spread._)({"aria-hidden":"true",display:"block"},restProps),{className:["vkuiIcon","vkuiIcon--".concat(size),"vkuiIcon--w-".concat(width),"vkuiIcon--h-".concat(height),"vkuiIcon--".concat(id),void 0===_param_className?"":_param_className].join(" ").trim(),viewBox:viewBox,width:width,height:height,style:style,ref:getRootRef}),title&&react.createElement("title",null,title),react.createElement("use",{xlinkHref:"#".concat(id),style:{fill:"currentColor",color:fill}},children))};function makeIcon(componentName,id,viewBox,content,width,height,deprecated,replacement){var mountIcon=function(){isMounted||(addSpriteSymbol(new BrowserSymbol({content:content})),isMounted=!0)},isMounted=!1,warn=warnOnce(componentName),Icon=function(props){return useIsomorphicLayoutEffect(mountIcon,[]),deprecated&&warn("Иконка устарела"+(replacement?". Замените на ".concat(replacement):"")),react.createElement(SvgIcon,(0,_object_spread_props._)((0,_object_spread._)({},props),{viewBox:viewBox,id:id,width:void 0===props.width||isNaN(props.width)?width:+props.width,height:void 0===props.height||isNaN(props.height)?height:+props.height}))};return Icon.mountIcon=mountIcon,Icon.displayName=componentName,Icon}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Icon16Chevron});var Icon16Chevron=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Icon24ChevronCompactRight});var Icon24ChevronCompactRight=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/add_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Icon28AddOutline});var Icon28AddOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28AddOutline","add_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 4a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H5a1 1 0 0 1 0-2h8V5a1 1 0 0 1 1-1" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/CellButton/CellButton.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CellButton--CQtgU{background:transparent;border:0;box-sizing:border-box;margin:0;padding-bottom:0;padding-top:0;text-align:left;text-decoration:none;width:100%}.vkuiInternalFormItem .CellButton--CQtgU{box-sizing:initial;margin-bottom:0;margin-left:calc(-1 * var(--vkui--size_base_padding_horizontal--regular));margin-right:calc(-1 * var(--vkui--size_base_padding_horizontal--regular));margin-top:0;width:100%}.CellButton--CQtgU[disabled]{opacity:.4}.CellButton--centered--D3Sgc{justify-content:center;text-align:center}.CellButton--centered--D3Sgc>*{flex-grow:0;max-width:none}.CellButton--centered--D3Sgc .vkuiIcon{padding-right:8px}.CellButton--CQtgU{--vkui_internal--icon_color:var(--vkui--color_icon_accent);color:var(--vkui--color_text_accent)}.CellButton--mode-danger--lHkB0{--vkui_internal--icon_color:var(--vkui--color_text_negative);color:var(--vkui--color_text_negative)}","",{version:3,sources:["webpack://./src/components/CellButton/CellButton.module.css"],names:[],mappings:"AAAA,mBAME,sBAAuB,CAFvB,QAAS,CAHT,qBAAsB,CAEtB,QAAS,CAKT,gBAAgB,CAAhB,aAAgB,CADhB,eAAiB,CALjB,oBAAqB,CAGrB,UAIF,CAOA,yCAEE,kBAAuB,CACvB,eAAe,CACf,yEAA4E,CAA5E,0EAA4E,CAD5E,YAAe,CAFf,UAIF,CAEA,6BACE,UACF,CAEA,6BACE,sBAAuB,CACvB,iBACF,CAGA,+BACE,WAAkB,CAClB,cACF,CAGA,uCACE,iBACF,CAEA,mBACE,0DAA2D,CAE3D,oCACF,CAEA,gCACE,4DAA6D,CAE7D,sCACF",sourcesContent:[".CellButton {\n  box-sizing: border-box;\n  text-decoration: none;\n  margin: 0;\n  border: 0;\n  inline-size: 100%;\n  background: transparent;\n  text-align: start;\n  padding-block: 0;\n}\n\n/**\n * CMP:\n * FormItem\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem) .CellButton {\n  inline-size: 100%;\n  box-sizing: content-box;\n  margin-block: 0;\n  margin-inline: calc(-1 * var(--vkui--size_base_padding_horizontal--regular));\n}\n\n.CellButton[disabled] {\n  opacity: 0.4;\n}\n\n.CellButton--centered {\n  justify-content: center;\n  text-align: center;\n}\n\n/* stylelint-disable-next-line selector-max-universal -- отключаем растягивание элементов внутри */\n.CellButton--centered > * {\n  flex-grow: initial;\n  max-inline-size: initial;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.CellButton--centered :global(.vkuiIcon) {\n  padding-inline-end: 8px;\n}\n\n.CellButton {\n  --vkui_internal--icon_color: var(--vkui--color_icon_accent);\n\n  color: var(--vkui--color_text_accent);\n}\n\n.CellButton--mode-danger {\n  --vkui_internal--icon_color: var(--vkui--color_text_negative);\n\n  color: var(--vkui--color_text_negative);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={CellButton:"CellButton--CQtgU","CellButton--centered":"CellButton--centered--D3Sgc","CellButton--mode-danger":"CellButton--mode-danger--lHkB0"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Footnote/Footnote.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Footnote--TsLLT{font-family:var(--vkui--font_footnote--font_family--regular);font-size:var(--vkui--font_footnote--font_size--regular);font-weight:var(--vkui--font_footnote--font_weight--regular);line-height:var(--vkui--font_footnote--line_height--regular)}.Footnote--caps--rHreA{font-family:var(--vkui--font_footnote_caps--font_family--regular);font-size:var(--vkui--font_footnote_caps--font_size--regular);font-weight:var(--vkui--font_footnote_caps--font_weight--regular);line-height:var(--vkui--font_footnote_caps--line_height--regular);text-transform:uppercase}","",{version:3,sources:["webpack://./src/components/Typography/Footnote/Footnote.module.css"],names:[],mappings:"AAAA,iBAIE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CAEA,uBAIE,iEAAkE,CAHlE,6DAA8D,CAE9D,iEAAkE,CADlE,iEAAkE,CAGlE,wBACF",sourcesContent:[".Footnote {\n  font-size: var(--vkui--font_footnote--font_size--regular);\n  line-height: var(--vkui--font_footnote--line_height--regular);\n  font-weight: var(--vkui--font_footnote--font_weight--regular);\n  font-family: var(--vkui--font_footnote--font_family--regular);\n}\n\n.Footnote--caps {\n  font-size: var(--vkui--font_footnote_caps--font_size--regular);\n  line-height: var(--vkui--font_footnote_caps--line_height--regular);\n  font-weight: var(--vkui--font_footnote_caps--font_weight--regular);\n  font-family: var(--vkui--font_footnote_caps--font_family--regular);\n  text-transform: uppercase;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Footnote:"Footnote--TsLLT","Footnote--caps":"Footnote--caps--rHreA"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);