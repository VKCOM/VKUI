"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3815],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Progress/Progress.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Progress__host--_l0Uq{background:var(--vkui--color_track_background);block-size:2px;border-radius:1px;--vkui_internal_Progress_background_color:var(--vkui--color_stroke_accent);--vkui_internal_Progress_progress:0}.Progress__trackDisable--gZaYx{background:transparent}.Progress__host--_l0Uq:after{background:var(--vkui_internal_Progress_background_color);block-size:100%;border-radius:inherit;content:"";display:block;inline-size:calc(var(--vkui_internal_Progress_progress) * 1%);transition:width .2s ease}.Progress__appearanceAccent--QS0kL{--vkui_internal_Progress_background_color:var(--vkui--color_stroke_accent)}.Progress__appearancePositive--lyGTg{--vkui_internal_Progress_background_color:var(--vkui--color_stroke_positive)}.Progress__appearanceNegative--owmRD{--vkui_internal_Progress_background_color:var(--vkui--color_stroke_negative)}',"",{version:3,sources:["webpack://./src/components/Progress/Progress.module.css"],names:[],mappings:"AAAA,uBAEE,8CAA+C,CAD/C,cAAe,CAEf,iBAAkB,CAElB,0EAA2E,CAC3E,mCACF,CAEA,+BACE,sBACF,CAEA,6BAKE,yDAA0D,CAF1D,eAAgB,CAGhB,qBAAsB,CAFtB,UAAW,CAHX,aAAc,CACd,6DAA8D,CAK9D,yBACF,CAEA,mCACE,0EACF,CAEA,qCACE,4EACF,CAEA,qCACE,4EACF",sourcesContent:[".host {\n  block-size: 2px;\n  background: var(--vkui--color_track_background);\n  border-radius: 1px;\n\n  --vkui_internal_Progress_background_color: var(--vkui--color_stroke_accent);\n  --vkui_internal_Progress_progress: 0;\n}\n\n.trackDisable {\n  background: transparent;\n}\n\n.host::after {\n  display: block;\n  inline-size: calc(var(--vkui_internal_Progress_progress) * 1%);\n  block-size: 100%;\n  content: '';\n  background: var(--vkui_internal_Progress_background_color);\n  border-radius: inherit;\n  transition: width 0.2s ease;\n}\n\n.appearanceAccent {\n  --vkui_internal_Progress_background_color: var(--vkui--color_stroke_accent);\n}\n\n.appearancePositive {\n  --vkui_internal_Progress_background_color: var(--vkui--color_stroke_positive);\n}\n\n.appearanceNegative {\n  --vkui_internal_Progress_background_color: var(--vkui--color_stroke_negative);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Progress__host--_l0Uq",trackDisable:"Progress__trackDisable--gZaYx",appearanceAccent:"Progress__appearanceAccent--QS0kL",appearancePositive:"Progress__appearancePositive--lyGTg",appearanceNegative:"Progress__appearanceNegative--owmRD"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Progress/Progress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_testing_storybook_createStoryParameters__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/testing/storybook/createStoryParameters.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Progress",component:__webpack_require__("./src/components/Progress/Progress.tsx").k,parameters:(0,_testing_storybook_createStoryParameters__WEBPACK_IMPORTED_MODULE_2__.E)("Progress",_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eb,_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eC),argTypes:{value:{control:{type:"range",min:0,max:100,step:1}}}},Playground={decorators:[Component=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"100%",padding:"16px",boxSizing:"border-box"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{})})]},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  decorators: [Component => <div style={{\n    width: '100%',\n    padding: '16px',\n    boxSizing: 'border-box'\n  }}>\n        <Component />\n      </div>]\n}",...Playground.parameters?.docs?.source}}}},"./src/components/Progress/Progress.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Progress});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js")),math=__webpack_require__("./src/helpers/math.ts"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Progress_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Progress/Progress.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Progress_module.A,options);const Progress_Progress_module=Progress_module.A&&Progress_module.A.locals?Progress_module.A.locals:void 0,stylesAppearance={accent:Progress_Progress_module.appearanceAccent,positive:Progress_Progress_module.appearancePositive,negative:Progress_Progress_module.appearanceNegative};const Progress=({value=0,height,trackDisable=!1,appearance="accent",...restProps})=>{const progress=(0,math.qE)(value,0,100),title=`${progress} / 100`,styleHeight=function progressCustomHeightStyle(height){return height?{height,borderRadius:height/2}:void 0}(height),[appearanceStyles,appearanceClassName]=(appearance=>{switch(appearance){case"accent":case"positive":case"negative":return[void 0,stylesAppearance[appearance]];default:return[{"--vkui_internal_Progress_background_color":appearance},void 0]}})(appearance),style={...styleHeight,...appearanceStyles,"--vkui_internal_Progress_progress":progress};return(0,jsx_runtime.jsx)(RootComponent.I,{"aria-valuenow":value,title,...restProps,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,baseClassName:(0,lib.xW)(Progress_Progress_module.host,trackDisable&&Progress_Progress_module.trackDisable,appearanceClassName),baseStyle:style})};try{Progress.displayName="Progress",Progress.__docgenInfo={description:"",displayName:"Progress",props:{appearance:{defaultValue:{value:"accent"},description:"Стиль отображения прогрессбара",name:"appearance",required:!1,type:{name:'`--${string}` | "accent" | "positive" | "negative" | `#${string}`'}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Высота элемента.",name:"height",required:!1,type:{name:"number"}},trackDisable:{defaultValue:{value:"false"},description:"Сделать прогрессбар прозрачным",name:"trackDisable",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Progress/Progress.tsx#Progress"]={docgenInfo:Progress.__docgenInfo,name:"Progress",path:"src/components/Progress/Progress.tsx#Progress"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"./src/testing/storybook/createStoryParameters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>createStoryParameters});const COMPONENTS_TO_FIGMA_COMMON_DESIGN_URL={ActionSheet:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=24799-204331",ActionSheetItem:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=24477-202231",Alert:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-0",Avatar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=16776-66998",Image:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=19718-127678",Button:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=17380-81012",ButtonGroup:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=26852-212384",Banner:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=896-0",CellButton:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-1",Calendar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=21893-168556",CalendarRange:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=21910-174978",Card:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=8920-64087",CardGrid:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=21611-159029",CardScroll:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=21611-159105",ContentCard:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=26950-217134",Cell:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=27-2",Counter:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=17363-76319",Badge:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=11187-7535",Epic:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=9374-63616",FormItem:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=19141-111940",Slider:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18562-104232",FormStatus:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18562-104579",Input:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211639",ChipsInput:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211639",Select:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211640",CustomSelect:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211640",ChipsSelect:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211640",DateInput:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211641",DateRangeInput:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211641",Textarea:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23364-211642",Gradient:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=1365-65563",Group:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=3362-140",Header:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23978-210701",Footer:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23671-181627",HorizontalCell:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=2121-114693",HorizontalScroll:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=2121-114693",MiniInfoCell:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=5513-0",ModalCard:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-4",ModalPage:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-5",Pagination:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=22596-199246",PanelHeader:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=27-0",Placeholder:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=23166-193544",Spinner:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=11194-4905",ScreenSpinner:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=11195-64195",PanelSpinner:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=8855-62589",Progress:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=179-5",RichCell:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-9",Search:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=34-12533",SegmentedControl:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=22164-174288",Checkbox:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=19548-128313",Radio:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=20378-129222",Switch:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=17404-92880",RadioGroup:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=20390-129014",Skeleton:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=34571-282616",Snackbar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-10",SubnavigationBar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=27545-219646",SubnavigationButton:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=24011-185205",Tabbar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=27137-216928",TabbarItem:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=27137-216096",Tabs:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=17312-69733",TabsItem:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=25061-207232",Tooltip:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=77-1765",UsersStack:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=146-11",Typography:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Caption:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",DisplayTitle:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",EllipsisText:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Footnote:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Headline:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Paragraph:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Subhead:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Text:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",Title:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=18802-108351",ScrollArrows:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=26757-213067",WriteBar:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=28392-239347",Separator:"https://www.figma.com/design/AdjYPPaNtrl0ZitenZgO0h/VKUI-Common-Library-%5BBeta%5D-(Community)?node-id=21342-144690"},COMPONENTS_TO_FIGMA_IOS_DESIGN_URL={ActionSheet:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1902",ActionSheetItem:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1902",Alert:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7714",Avatar:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=31295-53578",Button:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=3-130",Banner:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=1856-0",CellButton:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1901",Card:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7732",CardGrid:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7732",CardScroll:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7732",ContentCard:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7732",Cell:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=538-0",Counter:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=2-205",Epic:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=17311-457",Slider:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",FormStatus:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",Input:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",Select:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",CustomSelect:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",Gradient:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=3298-8484",Group:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=540-2",Header:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=14853-51608",Footer:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=20499-51286",HorizontalCell:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=3458-50352",HorizontalScroll:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=3458-50352",MiniInfoCell:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=10844-101626",ModalCard:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7715",ModalPage:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7716",PanelHeader:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1903",Placeholder:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=540-0",Spinner:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=20501-240",ScreenSpinner:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=20501-241",PanelSpinner:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=16561-49951",Progress:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=3-83",RichCell:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=1070-21070",Search:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1905",SegmentedControl:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=41435-63938",Checkbox:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",Radio:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=22-12",Snackbar:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=552-7713",SubnavigationBar:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=28766-53402",SubnavigationButton:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=28766-53402",Tabbar:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1904",TabbarItem:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=117-1904",Tabs:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=4-132",TabsItem:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=4-132",Tooltip:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=4-133",UsersStack:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=540-1",Typography:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Caption:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",DisplayTitle:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",EllipsisText:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Footnote:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Headline:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Paragraph:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Subhead:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Text:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34",Title:"https://www.figma.com/design/XT2NqNsU3WxdAB5EmXfpgu/VKUI-iOS-Library-(Community)?node-id=69-34"},createStoryParameters=(componentName,...additionalParameters)=>{const parameters=additionalParameters.reduce(((result,parameters)=>Object.assign(result,parameters)),{}),commonDesignUrl=COMPONENTS_TO_FIGMA_COMMON_DESIGN_URL[componentName],iosDesignUrl=COMPONENTS_TO_FIGMA_IOS_DESIGN_URL[componentName];return(commonDesignUrl||iosDesignUrl)&&(parameters.design=[commonDesignUrl&&{name:"Web/Android",type:"figma",url:commonDesignUrl},iosDesignUrl&&{name:"IOS",type:"figma",url:iosDesignUrl}].filter(Boolean)),parameters}}}]);