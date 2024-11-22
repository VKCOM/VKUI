(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({15:"components-Popover-Popover-stories",20:"components-Snackbar-subcomponents-Basic-Basic-stories",83:"components-DateInput-DateInput-stories",289:"components-Gradient-Gradient-stories",291:"components-Badge-Badge-stories",341:"components-PanelHeaderContext-PanelHeaderContext-stories",543:"components-ModalCard-ModalCard-stories",547:"components-Radio-Radio-stories",803:"components-Clickable-Clickable-stories",925:"components-UnstyledTextField-UnstyledTextField-mdx",943:"components-ScrollArrow-ScrollArrow-stories",1041:"components-Search-Search-stories",1109:"components-UsersStack-UsersStack-stories",1171:"components-MiniInfoCell-MiniInfoCell-stories",1195:"components-PanelHeader-PanelHeader-stories",1243:"components-ContentCard-ContentCard-stories",1244:"components-ImageBase-ImageBaseBadge-ImageBaseBadge-stories",1405:"components-Typography-Headline-Headline-stories",1447:"components-NativeSelect-NativeSelect-stories",1455:"components-SubnavigationButton-SubnavigationButton-stories",1519:"components-PullToRefresh-PullToRefresh-stories",1583:"components-Typography-Caption-Caption-stories",1631:"components-FixedLayout-FixedLayout-stories",1759:"components-IconButton-IconButton-stories",1791:"components-Image-Image-stories",1807:"components-Mark-Mark-stories",1907:"components-Gallery-Gallery-stories",1935:"components-View-View-stories",2123:"components-SelectMimicry-SelectMimicry-stories",2130:"components-Typography-EllipsisText-EllipsisText-stories",2175:"components-Skeleton-Skeleton-stories",2461:"components-AppRoot-AppRoot-mdx",2513:"components-Card-Card-stories",2585:"components-ContentBadge-ContentBadge-stories",2735:"components-Counter-Counter-stories",2827:"components-ModalDismissButton-ModalDismissButton-stories",2851:"components-Accordion-Accordion-stories",2857:"components-Switch-Switch-stories",2883:"components-CustomScrollView-CustomScrollView-stories",2925:"components-Select-Select-stories",2959:"components-Typography-Title-Title-stories",3035:"components-Touch-Touch-stories",3049:"components-Root-Root-stories",3113:"components-Popper-Popper-stories",3131:"components-DropZone-DropZone-stories",3151:"components-Footer-Footer-stories",3185:"components-WriteBar-WriteBar-stories",3193:"components-SplitCol-SplitCol-stories",3253:"components-File-File-stories",3339:"components-VisuallyHidden-VisuallyHidden-stories",3375:"components-Slider-Slider-stories",3575:"components-ModalRoot-ModalRoot-stories",3667:"components-ConfigProvider-ConfigProvider-stories",3815:"components-Progress-Progress-stories",3983:"components-SegmentedControl-SegmentedControl-stories",4105:"components-Tabs-Tabs-stories",4287:"components-Alert-Alert-stories",4413:"components-Typography-Footnote-Footnote-stories",4447:"components-WriteBarIcon-WriteBarIcon-stories",4489:"components-SimpleCell-SimpleCell-stories",4619:"components-Tappable-Tappable-stories",4725:"components-CustomSelectOption-CustomSelectOption-stories",4879:"components-Placeholder-Placeholder-stories",5017:"components-HorizontalScroll-HorizontalCellShowMore-HorizontalCellShowMore-stories",5103:"components-ModalPageHeader-ModalPageHeader-stories",5147:"components-Separator-Separator-stories",5311:"components-ColorSchemeProvider-ColorSchemeProvider-stories",5439:"components-Typography-Subhead-Subhead-stories",5457:"components-Link-Link-stories",5477:"components-CardGrid-CardGrid-stories",5511:"components-GridAvatar-GridAvatar-stories",5599:"components-Typography-Text-Text-stories",5633:"components-Banner-Banner-stories",5659:"components-FormField-FormField-stories",5773:"components-FormStatus-FormStatus-stories",5821:"components-FormItem-FormItemTop-FormItemTop-mdx",5966:"components-ImageBase-ImageBaseOverlay-ImageBaseOverlay-stories",6063:"components-Spacing-Spacing-stories",6115:"components-Input-Input-stories",6151:"components-Checkbox-Checkbox-stories",6235:"components-InfoRow-InfoRow-stories",6245:"components-RadioGroup-RadioGroup-stories",6255:"components-SubnavigationBar-SubnavigationBar-stories",6323:"components-Panel-Panel-stories",6343:"components-Snackbar-Snackbar-stories",6383:"components-Group-Group-stories",6443:"components-OnboardingTooltip-OnboardingTooltip-stories",6591:"components-FormItem-FormItem-stories",6657:"components-Textarea-Textarea-stories",6807:"components-Avatar-Avatar-stories",6859:"components-CalendarRange-CalendarRange-stories",6891:"components-AspectRatio-AspectRatio-stories",7031:"components-HorizontalScroll-HorizontalScroll-stories",7279:"components-Header-Header-stories",7317:"components-RichCell-RichCell-stories",7477:"components-Tabbar-Tabbar-stories",7521:"components-AdaptivityProvider-AdaptivityProvider-stories",7539:"components-ChipsSelect-ChipsSelect-stories",7549:"components-Typography-DisplayTitle-DisplayTitle-stories",7615:"components-DateRangeInput-DateRangeInput-stories",7639:"components-ActionSheetItem-ActionSheetItem-stories",7647:"components-Typography-Typography-stories",7721:"components-Button-Button-stories",7751:"components-Div-Div-stories",7831:"components-PanelHeaderButton-PanelHeaderButton-stories",7863:"components-TabsItem-TabsItem-stories",7867:"components-CustomSelect-CustomSelect-stories",7926:"components-ChipsInputBase-Chip-Chip-stories",7957:"lib-animation-useCSSTransition-stories",7971:"components-PopoutWrapper-PopoutWrapper-stories",7981:"components-Cell-Cell-stories",7983:"components-Typography-Paragraph-Paragraph-stories",8059:"components-PanelSpinner-PanelSpinner-stories",8079:"components-ActionSheet-ActionSheet-stories",8175:"components-LocaleProvider-LocaleProvider-stories",8619:"components-Flex-Flex-stories",8667:"components-TabbarItem-TabbarItem-stories",8727:"components-ModalPage-ModalPage-stories",8875:"components-ButtonGroup-ButtonGroup-stories",8879:"components-Spinner-Spinner-stories",8967:"components-FormLayoutGroup-FormLayoutGroup-stories",8975:"components-Epic-Epic-stories",9009:"components-SimpleGrid-SimpleGrid-stories",9085:"components-PlatformProvider-PlatformProvider-stories",9327:"components-ChipsInput-ChipsInput-stories",9407:"components-CardScroll-CardScroll-stories",9416:"components-Cell-CellCheckbox-CellCheckbox-stories",9445:"components-HorizontalCell-HorizontalCell-stories",9459:"components-Tooltip-Tooltip-stories",9487:"components-ScreenSpinner-ScreenSpinner-stories",9503:"components-ModalCardBase-ModalCardBase-stories",9709:"components-PanelHeaderContent-PanelHeaderContent-stories",9749:"components-List-List-stories",9853:"components-AdaptiveIconRenderer-AdaptiveIconRenderer-stories",9869:"components-ToolButton-ToolButton-stories",9889:"components-Pagination-Pagination-stories",9905:"components-Calendar-Calendar-stories",9996:"components-SplitLayout-SplitLayout-stories"}[chunkId]||chunkId)+"."+{15:"15bab283",20:"d05914bd",83:"c2ff6ef1",168:"8639678b",289:"ab9a6cf8",291:"e0f0dd29",301:"70c797d4",341:"8208df56",436:"e321cb81",446:"6e285ca5",452:"5a99bb94",543:"54426ff3",547:"36613889",803:"aeb0269d",849:"804155e4",925:"7658f000",943:"199f50ca",961:"d902a96c",1008:"08f21196",1041:"c8688177",1109:"5b85ab85",1171:"e889cb18",1195:"95412172",1243:"cbf32f6f",1244:"0a2e5fe1",1260:"dd89b23f",1336:"caf5b61c",1356:"9976adfe",1405:"bc6f900d",1447:"26fb403b",1455:"34d0000a",1519:"3cf9c7a5",1583:"828c4496",1631:"4c7d2013",1759:"f2482d85",1791:"afea5311",1807:"38122584",1907:"e048b082",1935:"08faaa00",1953:"ef5d5d26",2123:"050ada3b",2130:"0bc07430",2140:"484a714a",2175:"efdf6cc2",2194:"dcb256c9",2336:"9bfade0c",2411:"571fdc42",2461:"989a930e",2513:"062857d9",2585:"aa758ddc",2735:"d71209aa",2744:"5b878b94",2808:"67475139",2827:"6d5ec576",2851:"1969d8de",2857:"b81e547c",2883:"040199e0",2893:"d3545322",2925:"3906dd92",2959:"4af249a1",3035:"86aababf",3049:"2590d4b1",3096:"1abc3ade",3113:"c5dcccfd",3131:"8eca9a5e",3151:"ef8a8733",3185:"462abadb",3193:"7b73d745",3253:"f402a9ec",3339:"69f05c7c",3362:"f0c449f2",3375:"762f4c2b",3379:"06c24876",3575:"df3f1f9a",3667:"94461844",3681:"3cb92a7c",3815:"27c1ea51",3837:"5f5c4fea",3838:"a5547456",3876:"4b8f4a6e",3983:"15cb68b9",4046:"e5e299c9",4105:"9d30b6d3",4160:"faab01fe",4287:"7b482385",4413:"6e38c025",4447:"74612bf2",4489:"5803c515",4585:"c599b521",4607:"4c98798c",4619:"52ec4ef4",4725:"91be1cb5",4851:"6602886a",4876:"3bc34d59",4879:"e5215013",5017:"15d406d0",5103:"c1a53620",5147:"fd6609a6",5231:"24b63206",5311:"a6e48df6",5439:"d8e4b1e8",5457:"2475f4c1",5477:"13824da0",5511:"67fd36be",5553:"3d0b219e",5599:"d6203e57",5633:"819bbb98",5659:"7379c5a5",5773:"bf5d1218",5812:"41c1f0a7",5821:"191db0cd",5854:"5d143a59",5966:"54434d14",6063:"b48f57d5",6115:"c2f2c47c",6151:"292201d4",6235:"faca1229",6245:"238484d7",6255:"9459dcff",6301:"c20f3cb9",6323:"eeb4f7df",6343:"cd25150d",6352:"70bf20d6",6357:"fe33d275",6383:"25b2c128",6443:"78861b8a",6591:"28a1b4e1",6657:"1f7b5f05",6807:"daa1ded2",6818:"ffdfaea4",6859:"8fa1081d",6891:"37de9962",6952:"05799383",6984:"539a851c",7009:"6f58b9b1",7031:"89b2b6cd",7106:"346df43c",7272:"2db429a6",7279:"00dfd458",7317:"812c45d4",7372:"b09e3bc4",7477:"d2577190",7521:"e13d2889",7539:"1af353bf",7549:"0b40f513",7615:"9695e725",7634:"977f1878",7639:"1b535eae",7647:"579ca5cc",7721:"0729439f",7735:"9de983c2",7751:"f8adbcef",7831:"c12c89c0",7863:"8e0fdb63",7867:"76224bc9",7926:"18d874c7",7957:"63d5fa24",7971:"796ec4d1",7981:"b10b5367",7983:"c454e0a0",8059:"2dc4f292",8079:"fc630b30",8175:"d76ac267",8315:"421f86dd",8394:"a5a36049",8560:"9fff4d85",8605:"98d69d55",8619:"3da0d289",8667:"62b798aa",8727:"40cb7b21",8805:"9f70cc85",8873:"2aa73f7c",8875:"15c7321a",8879:"daaa7394",8967:"7eac14a4",8975:"1dda665e",8977:"4444e05e",9009:"9a9a2ed1",9039:"5a1b18d7",9085:"36327a1f",9086:"0d7266b7",9162:"b0f4315e",9268:"324c868e",9327:"0c78d476",9407:"d795188f",9416:"335d5137",9445:"2894ae18",9459:"5080c58a",9487:"9bdc1cd3",9503:"4ed24c2f",9545:"72ced0c1",9709:"8e3917aa",9749:"73685473",9841:"004e52af",9853:"c8decba3",9869:"d385d723",9889:"b0b25f89",9905:"702da3ac",9996:"2956a094"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@vkontakte/vkui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@vkontakte/vkui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();