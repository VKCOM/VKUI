(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({15:"components-Popover-Popover-stories",20:"components-Snackbar-subcomponents-Basic-Basic-stories",83:"components-DateInput-DateInput-stories",289:"components-Gradient-Gradient-stories",291:"components-Badge-Badge-stories",341:"components-PanelHeaderContext-PanelHeaderContext-stories",543:"components-ModalCard-ModalCard-stories",547:"components-Radio-Radio-stories",795:"components-AppearanceProvider-AppearanceProvider-stories",803:"components-Clickable-Clickable-stories",925:"components-UnstyledTextField-UnstyledTextField-mdx",943:"components-ScrollArrow-ScrollArrow-stories",1041:"components-Search-Search-stories",1109:"components-UsersStack-UsersStack-stories",1171:"components-MiniInfoCell-MiniInfoCell-stories",1195:"components-PanelHeader-PanelHeader-stories",1243:"components-ContentCard-ContentCard-stories",1244:"components-ImageBase-ImageBaseBadge-ImageBaseBadge-stories",1405:"components-Typography-Headline-Headline-stories",1447:"components-NativeSelect-NativeSelect-stories",1455:"components-SubnavigationButton-SubnavigationButton-stories",1519:"components-PullToRefresh-PullToRefresh-stories",1583:"components-Typography-Caption-Caption-stories",1631:"components-FixedLayout-FixedLayout-stories",1759:"components-IconButton-IconButton-stories",1791:"components-Image-Image-stories",1807:"components-Mark-Mark-stories",1907:"components-Gallery-Gallery-stories",1935:"components-View-View-stories",2123:"components-SelectMimicry-SelectMimicry-stories",2130:"components-Typography-EllipsisText-EllipsisText-stories",2175:"components-Skeleton-Skeleton-stories",2461:"components-AppRoot-AppRoot-mdx",2513:"components-Card-Card-stories",2573:"components-DatePicker-DatePicker-stories",2585:"components-ContentBadge-ContentBadge-stories",2735:"components-Counter-Counter-stories",2827:"components-ModalDismissButton-ModalDismissButton-stories",2851:"components-Accordion-Accordion-stories",2857:"components-Switch-Switch-stories",2883:"components-CustomScrollView-CustomScrollView-stories",2925:"components-Select-Select-stories",2959:"components-Typography-Title-Title-stories",3035:"components-Touch-Touch-stories",3049:"components-Root-Root-stories",3113:"components-Popper-Popper-stories",3131:"components-DropZone-DropZone-stories",3151:"components-Footer-Footer-stories",3185:"components-WriteBar-WriteBar-stories",3193:"components-SplitCol-SplitCol-stories",3253:"components-File-File-stories",3339:"components-VisuallyHidden-VisuallyHidden-stories",3375:"components-Slider-Slider-stories",3575:"components-ModalRoot-ModalRoot-stories",3667:"components-ConfigProvider-ConfigProvider-stories",3815:"components-Progress-Progress-stories",3983:"components-SegmentedControl-SegmentedControl-stories",4105:"components-Tabs-Tabs-stories",4287:"components-Alert-Alert-stories",4413:"components-Typography-Footnote-Footnote-stories",4447:"components-WriteBarIcon-WriteBarIcon-stories",4489:"components-SimpleCell-SimpleCell-stories",4619:"components-Tappable-Tappable-stories",4725:"components-CustomSelectOption-CustomSelectOption-stories",4879:"components-Placeholder-Placeholder-stories",5017:"components-HorizontalScroll-HorizontalCellShowMore-HorizontalCellShowMore-stories",5103:"components-ModalPageHeader-ModalPageHeader-stories",5147:"components-Separator-Separator-stories",5439:"components-Typography-Subhead-Subhead-stories",5457:"components-Link-Link-stories",5477:"components-CardGrid-CardGrid-stories",5511:"components-GridAvatar-GridAvatar-stories",5599:"components-Typography-Text-Text-stories",5633:"components-Banner-Banner-stories",5659:"components-FormField-FormField-stories",5773:"components-FormStatus-FormStatus-stories",5821:"components-FormItem-FormItemTop-FormItemTop-mdx",5966:"components-ImageBase-ImageBaseOverlay-ImageBaseOverlay-stories",6063:"components-Spacing-Spacing-stories",6115:"components-Input-Input-stories",6151:"components-Checkbox-Checkbox-stories",6235:"components-InfoRow-InfoRow-stories",6245:"components-RadioGroup-RadioGroup-stories",6255:"components-SubnavigationBar-SubnavigationBar-stories",6323:"components-Panel-Panel-stories",6343:"components-Snackbar-Snackbar-stories",6383:"components-Group-Group-stories",6443:"components-OnboardingTooltip-OnboardingTooltip-stories",6591:"components-FormItem-FormItem-stories",6657:"components-Textarea-Textarea-stories",6807:"components-Avatar-Avatar-stories",6859:"components-CalendarRange-CalendarRange-stories",6891:"components-AspectRatio-AspectRatio-stories",7031:"components-HorizontalScroll-HorizontalScroll-stories",7279:"components-Header-Header-stories",7317:"components-RichCell-RichCell-stories",7477:"components-Tabbar-Tabbar-stories",7521:"components-AdaptivityProvider-AdaptivityProvider-stories",7539:"components-ChipsSelect-ChipsSelect-stories",7549:"components-Typography-DisplayTitle-DisplayTitle-stories",7615:"components-DateRangeInput-DateRangeInput-stories",7639:"components-ActionSheetItem-ActionSheetItem-stories",7647:"components-Typography-Typography-stories",7721:"components-Button-Button-stories",7751:"components-Div-Div-stories",7831:"components-PanelHeaderButton-PanelHeaderButton-stories",7863:"components-TabsItem-TabsItem-stories",7867:"components-CustomSelect-CustomSelect-stories",7926:"components-ChipsInputBase-Chip-Chip-stories",7971:"components-PopoutWrapper-PopoutWrapper-stories",7981:"components-Cell-Cell-stories",7983:"components-Typography-Paragraph-Paragraph-stories",8059:"components-PanelSpinner-PanelSpinner-stories",8079:"components-ActionSheet-ActionSheet-stories",8175:"components-LocaleProvider-LocaleProvider-stories",8593:"components-CellButton-CellButton-stories",8619:"components-Flex-Flex-stories",8667:"components-TabbarItem-TabbarItem-stories",8727:"components-ModalPage-ModalPage-stories",8875:"components-ButtonGroup-ButtonGroup-stories",8879:"components-Spinner-Spinner-stories",8967:"components-FormLayoutGroup-FormLayoutGroup-stories",8975:"components-Epic-Epic-stories",9009:"components-SimpleGrid-SimpleGrid-stories",9085:"components-PlatformProvider-PlatformProvider-stories",9327:"components-ChipsInput-ChipsInput-stories",9407:"components-CardScroll-CardScroll-stories",9416:"components-Cell-CellCheckbox-CellCheckbox-stories",9445:"components-HorizontalCell-HorizontalCell-stories",9459:"components-Tooltip-Tooltip-stories",9487:"components-ScreenSpinner-ScreenSpinner-stories",9503:"components-ModalCardBase-ModalCardBase-stories",9709:"components-PanelHeaderContent-PanelHeaderContent-stories",9749:"components-List-List-stories",9853:"components-AdaptiveIconRenderer-AdaptiveIconRenderer-stories",9869:"components-ToolButton-ToolButton-stories",9889:"components-Pagination-Pagination-stories",9905:"components-Calendar-Calendar-stories",9996:"components-SplitLayout-SplitLayout-stories"}[chunkId]||chunkId)+"."+{15:"70886b08",20:"d05914bd",83:"050659dd",168:"8639678b",289:"270a5f23",291:"8dad8b08",301:"1b0dbc12",341:"b77d787f",446:"3bb11d86",543:"5724f656",547:"3669b1e4",552:"25dc71cc",603:"17f0056a",795:"23125b5e",803:"c3d26cc0",925:"747b4ee9",943:"16d0dee7",958:"b86d3103",1008:"5d5114c5",1041:"5021087c",1109:"67fd12c5",1171:"bf65f9e2",1195:"96214cea",1243:"828d89f5",1244:"2c1e8298",1356:"93352a8e",1405:"56139eab",1447:"92943230",1455:"169c5903",1519:"d8f2de63",1535:"7623dd56",1583:"828c4496",1593:"739ec833",1631:"cddbc142",1759:"dd19cc6d",1791:"3215d038",1807:"ef57e1ce",1907:"87c0b004",1935:"7f5c954b",2123:"bc004744",2130:"84e27d54",2175:"823bbc1b",2336:"c0b82300",2411:"be12391a",2461:"c728735d",2513:"dd47d00d",2573:"71c4a724",2585:"656dcff3",2735:"45c8d71b",2752:"e0d68770",2808:"65f8aa7b",2812:"262b7eea",2827:"c2015749",2851:"6eefdc85",2857:"88721223",2883:"e5d24fec",2893:"362fede5",2925:"f1d1237f",2959:"f98a7da1",3035:"1c68c5a9",3049:"a8a0125b",3096:"9ce82bb0",3113:"c59fbe27",3131:"079088c3",3151:"12643989",3185:"236784ce",3193:"166dac06",3253:"be2a2169",3339:"a2afdf0a",3362:"9f7dac79",3375:"26fedb50",3379:"23550a76",3575:"7cc38ee2",3667:"94461844",3780:"6ec9eef5",3815:"8e20c213",3837:"c2536b57",3900:"8b492982",3983:"57a159b9",4046:"c01d1c2d",4105:"b064ff15",4160:"faab01fe",4287:"69b92b07",4413:"d53057a6",4447:"41aa0cc5",4489:"8fce7354",4585:"83b73e96",4619:"bf6cb7db",4725:"fce1aa4f",4851:"eed389bf",4876:"1c9381cb",4879:"1e054a17",5017:"b13656c3",5023:"375892fa",5103:"5d7c9523",5147:"bef05028",5231:"24b63206",5298:"b525b5eb",5355:"8c046076",5377:"3b9aed56",5419:"bf691a67",5439:"e699865b",5457:"d9b66ab2",5458:"68344a47",5477:"8c2331e5",5511:"746624fe",5553:"6384dc43",5599:"d6203e57",5633:"8d06a65b",5659:"40300d76",5773:"e5dff910",5812:"9db74738",5821:"da09d1ea",5854:"9fabcf23",5966:"aceb37a3",6063:"ec8bd32c",6115:"3ee73977",6151:"00e611ca",6225:"0e612480",6235:"a76a5bae",6245:"5f6d5af8",6255:"f3e8ba39",6293:"8dbef778",6323:"e89c6ac4",6343:"cd25150d",6352:"8b53db2e",6356:"44b87da9",6383:"fd908bae",6406:"09b4aada",6443:"e84a7fff",6591:"1fb13ede",6657:"28f61338",6807:"8f0ed704",6859:"e7850981",6891:"4840b6e5",6952:"bb092381",7009:"7e00820b",7031:"b3bd8cb8",7050:"78ca893c",7279:"0a922d1a",7317:"47a66022",7477:"1bafefd3",7521:"e13d2889",7539:"8eb06b0c",7549:"120ea00d",7615:"9a236d03",7639:"1b535eae",7647:"720b0ae3",7721:"d6151d3a",7751:"875bdb72",7831:"43660306",7863:"0134bdb1",7867:"6e9191e3",7926:"bc67edab",7971:"1ea811a5",7981:"46a96cdb",7983:"700103cd",8059:"1ca1e6b8",8079:"1a842289",8175:"e847f62a",8196:"9643e99f",8315:"b97211ec",8320:"33480e78",8593:"dc2bde46",8619:"309218b8",8667:"f85e9375",8727:"9493363e",8805:"b4b02010",8843:"0d22076c",8873:"e27eb488",8875:"6188fa46",8879:"dccb80ca",8967:"e62dd59b",8975:"a86c8f8d",8977:"4444e05e",9009:"0f59cfbf",9039:"8be08963",9085:"ccc82878",9086:"154cc069",9108:"f92af186",9146:"b5fe88ac",9268:"5fe0905c",9327:"0c78d476",9407:"bcb20725",9416:"aca5dc9a",9445:"15515922",9459:"2b1571a3",9487:"1b255f60",9503:"50faeb3e",9545:"3beece8d",9709:"6d7ad42d",9749:"477883c0",9791:"64acc108",9812:"fa5472db",9853:"c8decba3",9869:"865c5d99",9889:"51656a7f",9905:"6224e6e7",9942:"edce1afa",9996:"ff7e6949"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@vkontakte/vkui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@vkontakte/vkui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();