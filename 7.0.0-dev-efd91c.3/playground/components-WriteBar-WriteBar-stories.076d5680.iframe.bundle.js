"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3185],{"./src/components/Textarea/useResizeTextarea.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>useResizeTextarea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useResizeTextarea(onResize,grow){const elementRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),currentScrollHeight=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),resizeElement=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((el=>{grow&&el.offsetParent&&(el.style.height="",el.style.height=`${el.scrollHeight}px`,el.scrollHeight!==currentScrollHeight.current&&onResize&&(onResize(el),currentScrollHeight.current=el.scrollHeight))}),[grow,onResize]),resize=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const el=elementRef.current;el&&resizeElement(el)}),[elementRef,resizeElement]);return[elementRef,resize]}},"./src/components/Typography/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Title});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Title_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Title/Title.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Title_module.A,options);const Title_Title_module=Title_module.A&&Title_module.A.locals?Title_module.A.locals:void 0,stylesLevel={1:Title_Title_module.level1,2:Title_Title_module.level2,3:Title_Title_module.level3},sizeYClassNames={none:Title_Title_module.sizeYNone,compact:Title_Title_module.sizeYCompact},Title=({className,level="1",Component="span",normalize=!0,inline=!1,...restProps})=>{const{sizeY="none"}=(0,useAdaptivity.L)();return(0,jsx_runtime.jsx)(Typography.o,{Component,normalize,inline,className:(0,lib.xW)(className,"regular"!==sizeY&&sizeYClassNames[sizeY],stylesLevel[level]),...restProps})};try{Title.displayName="Title",Title.__docgenInfo={description:"Используется для заголовков.",displayName:"Title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},useAccentWeight:{defaultValue:null,description:"Включает акцентный тип начертания шрифта.\nИспользуются токены fontWeightAccent[1, 2, 3]\nИспользуется только вместе с `weight`",name:"useAccentWeight",required:!1,type:{name:"boolean"}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Title/Title.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/components/Typography/Title/Title.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/WriteBar/WriteBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>WriteBar_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),smile_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/smile_outline_28.js"),lib=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js"),constants=__webpack_require__("./src/storybook/constants.ts"),WriteBarIcon=__webpack_require__("./src/components/WriteBarIcon/WriteBarIcon.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),callMultiple=__webpack_require__("./src/lib/callMultiple.ts"),useResizeTextarea=__webpack_require__("./src/components/Textarea/useResizeTextarea.ts"),Headline=__webpack_require__("./src/components/Typography/Headline/Headline.tsx"),Title=__webpack_require__("./src/components/Typography/Title/Title.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),WriteBar_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/WriteBar/WriteBar.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(WriteBar_module.A,options);const WriteBar_WriteBar_module=WriteBar_module.A&&WriteBar_module.A.locals?WriteBar_module.A.locals:void 0,WriteBarTypography=props=>"ios"===(0,usePlatform.V)()?(0,jsx_runtime.jsx)(Title.h,{...props,level:"3",weight:"3"}):(0,jsx_runtime.jsx)(Headline.$,{weight:"3",...props}),WriteBar=({className,style,before,inlineAfter,after,getRootRef,getRef,onHeightChange,shadow=!1,onChange,...restProps})=>{const platform=(0,usePlatform.V)(),[refResizeTextarea,resize]=(0,useResizeTextarea.u)(onHeightChange,!0),textareaRef=(0,useExternRef.Z)(getRef,refResizeTextarea);return react.useEffect(resize,[resize,platform]),(0,jsx_runtime.jsx)("div",{ref:getRootRef,className:(0,lib.xW)(WriteBar_WriteBar_module.host,"ios"===platform&&WriteBar_WriteBar_module.ios,shadow&&WriteBar_WriteBar_module.shadow,className),style,children:(0,jsx_runtime.jsxs)("div",{className:WriteBar_WriteBar_module.form,children:[(0,lib.G1)(before)&&(0,jsx_runtime.jsx)("div",{className:WriteBar_WriteBar_module.before,children:before}),(0,jsx_runtime.jsxs)("div",{className:WriteBar_WriteBar_module.formIn,children:[(0,jsx_runtime.jsx)(WriteBarTypography,{...restProps,Component:"textarea",className:WriteBar_WriteBar_module.textarea,onChange:(0,callMultiple.j)(onChange,resize),getRootRef:textareaRef}),(0,lib.G1)(inlineAfter)&&(0,jsx_runtime.jsx)("div",{className:WriteBar_WriteBar_module.inlineAfter,children:inlineAfter})]}),(0,lib.G1)(after)&&(0,jsx_runtime.jsx)("div",{className:WriteBar_WriteBar_module.after,children:after})]})})};try{WriteBar.displayName="WriteBar",WriteBar.__docgenInfo={description:"",displayName:"WriteBar",props:{before:{defaultValue:null,description:"Содержимое, отображаемое слева от поля ввода.",name:"before",required:!1,type:{name:"ReactNode"}},inlineAfter:{defaultValue:null,description:"Содержимое, отображаемое поверх поля ввода (актуально для iOS)",name:"inlineAfter",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Содержимое, отображаемое справа от поля ввода",name:"after",required:!1,type:{name:"ReactNode"}},onHeightChange:{defaultValue:null,description:"Вызывается при смене высоты поля ввода",name:"onHeightChange",required:!1,type:{name:"VoidFunction"}},shadow:{defaultValue:{value:"false"},description:"Добавляет тень вокруг поля ввода",name:"shadow",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLTextAreaElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WriteBar/WriteBar.tsx#WriteBar"]={docgenInfo:WriteBar.__docgenInfo,name:"WriteBar",path:"src/components/WriteBar/WriteBar.tsx#WriteBar"})}catch(__react_docgen_typescript_loader_error){}const WriteBar_stories={title:"Blocks/WriteBar",component:WriteBar,parameters:{...constants.eb,...constants.eC},args:{onHeightChange:(0,dist.fn)()}},Playground={args:{before:(0,jsx_runtime.jsx)(WriteBarIcon.k,{count:10,mode:"attach",onClick:lib.lQ}),placeholder:"Сообщение",inlineAfter:(0,jsx_runtime.jsx)(WriteBarIcon.k,{label:"Смайлы и стикеры",onClick:lib.lQ,children:(0,jsx_runtime.jsx)(smile_outline_28.Y,{})}),after:(0,jsx_runtime.jsx)(WriteBarIcon.k,{mode:"send",onClick:lib.lQ})}},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  args: {\n    before: <WriteBarIcon count={10} mode="attach" onClick={noop} />,\n    placeholder: \'Сообщение\',\n    inlineAfter: <WriteBarIcon label="Смайлы и стикеры" onClick={noop}>\n        <Icon28SmileOutline />\n      </WriteBarIcon>,\n    after: <WriteBarIcon mode="send" onClick={noop} />\n  }\n}',...Playground.parameters?.docs?.source}}}},"../../node_modules/@vkontakte/icons/dist_es6/28/smile_outline_28.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Icon28SmileOutline});var Icon28SmileOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon28SmileOutline","smile_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="smile_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12m0-2c5.523 0 10-4.477 10-10S19.523 4 14 4 4 8.477 4 14s4.477 10 10 10m-4.388-5.909a1 1 0 1 1 1.463-1.364 4 4 0 0 0 5.85.001 1 1 0 1 1 1.46 1.367q-.14.15-.293.293a6 6 0 0 1-8.48-.297m7.763-4.841a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25m-6.75 0a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Title/Title.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Title__level1--F4Z_t{font-family:var(--vkui--font_title1--font_family--regular);font-size:var(--vkui--font_title1--font_size--regular);font-weight:var(--vkui--font_title1--font_weight--regular);line-height:var(--vkui--font_title1--line_height--regular)}.Title__sizeYCompact--xhmn6.Title__level1--F4Z_t{font-family:var(\n    --vkui--font_title1--font_family--compact,var(--vkui--font_title1--font_family--regular)\n  );font-size:var(\n    --vkui--font_title1--font_size--compact,var(--vkui--font_title1--font_size--regular)\n  );font-weight:var(\n    --vkui--font_title1--font_weight--compact,var(--vkui--font_title1--font_weight--regular)\n  );line-height:var(\n    --vkui--font_title1--line_height--compact,var(--vkui--font_title1--line_height--regular)\n  )}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Title__sizeYNone--H4MxD.Title__level1--F4Z_t{font-family:var(\n      --vkui--font_title1--font_family--compact,var(--vkui--font_title1--font_family--regular)\n    );font-size:var(\n      --vkui--font_title1--font_size--compact,var(--vkui--font_title1--font_size--regular)\n    );font-weight:var(\n      --vkui--font_title1--font_weight--compact,var(--vkui--font_title1--font_weight--regular)\n    );line-height:var(\n      --vkui--font_title1--line_height--compact,var(--vkui--font_title1--line_height--regular)\n    )}}.Title__level2--rTtRP{font-family:var(--vkui--font_title2--font_family--regular);font-size:var(--vkui--font_title2--font_size--regular);font-weight:var(--vkui--font_title2--font_weight--regular);line-height:var(--vkui--font_title2--line_height--regular)}.Title__sizeYCompact--xhmn6.Title__level2--rTtRP{font-family:var(\n    --vkui--font_title2--font_family--compact,var(--vkui--font_title2--font_family--regular)\n  );font-size:var(\n    --vkui--font_title2--font_size--compact,var(--vkui--font_title2--font_size--regular)\n  );font-weight:var(\n    --vkui--font_title2--font_weight--compact,var(--vkui--font_title2--font_weight--regular)\n  );line-height:var(\n    --vkui--font_title2--line_height--compact,var(--vkui--font_title2--line_height--regular)\n  )}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Title__sizeYNone--H4MxD.Title__level2--rTtRP{font-family:var(\n      --vkui--font_title2--font_family--compact,var(--vkui--font_title2--font_family--regular)\n    );font-size:var(\n      --vkui--font_title2--font_size--compact,var(--vkui--font_title2--font_size--regular)\n    );font-weight:var(\n      --vkui--font_title2--font_weight--compact,var(--vkui--font_title2--font_weight--regular)\n    );line-height:var(\n      --vkui--font_title2--line_height--compact,var(--vkui--font_title2--line_height--regular)\n    )}}.Title__level3--WsywM{font-family:var(--vkui--font_title3--font_family--regular);font-size:var(--vkui--font_title3--font_size--regular);font-weight:var(--vkui--font_title3--font_weight--regular);line-height:var(--vkui--font_title3--line_height--regular)}.Title__sizeYCompact--xhmn6.Title__level3--WsywM{font-family:var(\n    --vkui--font_title3--font_family--compact,var(--vkui--font_title3--font_family--regular)\n  );font-size:var(\n    --vkui--font_title3--font_size--compact,var(--vkui--font_title3--font_size--regular)\n  );font-weight:var(\n    --vkui--font_title3--font_weight--compact,var(--vkui--font_title3--font_weight--regular)\n  );line-height:var(\n    --vkui--font_title3--line_height--compact,var(--vkui--font_title3--line_height--regular)\n  )}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Title__sizeYNone--H4MxD.Title__level3--WsywM{font-family:var(\n      --vkui--font_title3--font_family--compact,var(--vkui--font_title3--font_family--regular)\n    );font-size:var(\n      --vkui--font_title3--font_size--compact,var(--vkui--font_title3--font_size--regular)\n    );font-weight:var(\n      --vkui--font_title3--font_weight--compact,var(--vkui--font_title3--font_weight--regular)\n    );line-height:var(\n      --vkui--font_title3--line_height--compact,var(--vkui--font_title3--line_height--regular)\n    )}}","",{version:3,sources:["webpack://./src/components/Typography/Title/Title.module.css"],names:[],mappings:"AAAA,sBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF,CAEA,iDAaE;;GAGC,CAfD;;GAGC,CAKD;;GAGC,CAPD;;GAYF,CAEA,iEACE,8CAaE;;KAGC,CAfD;;KAGC,CAKD;;KAGC,CAPD;;KAYF,CACF,CAEA,sBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF,CAEA,iDAaE;;GAGC,CAfD;;GAGC,CAKD;;GAGC,CAPD;;GAYF,CAEA,iEACE,8CAaE;;KAGC,CAfD;;KAGC,CAKD;;KAGC,CAPD;;KAYF,CACF,CAEA,sBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF,CAEA,iDAaE;;GAGC,CAfD;;GAGC,CAKD;;GAGC,CAPD;;GAYF,CAEA,iEACE,8CAaE;;KAGC,CAfD;;KAGC,CAKD;;KAGC,CAPD;;KAYF,CACF",sourcesContent:[".level1 {\n  font-size: var(--vkui--font_title1--font_size--regular);\n  line-height: var(--vkui--font_title1--line_height--regular);\n  font-weight: var(--vkui--font_title1--font_weight--regular);\n  font-family: var(--vkui--font_title1--font_family--regular);\n}\n\n.sizeYCompact.level1 {\n  font-size: var(\n    --vkui--font_title1--font_size--compact,\n    var(--vkui--font_title1--font_size--regular)\n  );\n  line-height: var(\n    --vkui--font_title1--line_height--compact,\n    var(--vkui--font_title1--line_height--regular)\n  );\n  font-weight: var(\n    --vkui--font_title1--font_weight--compact,\n    var(--vkui--font_title1--font_weight--regular)\n  );\n  font-family: var(\n    --vkui--font_title1--font_family--compact,\n    var(--vkui--font_title1--font_family--regular)\n  );\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone.level1 {\n    font-size: var(\n      --vkui--font_title1--font_size--compact,\n      var(--vkui--font_title1--font_size--regular)\n    );\n    line-height: var(\n      --vkui--font_title1--line_height--compact,\n      var(--vkui--font_title1--line_height--regular)\n    );\n    font-weight: var(\n      --vkui--font_title1--font_weight--compact,\n      var(--vkui--font_title1--font_weight--regular)\n    );\n    font-family: var(\n      --vkui--font_title1--font_family--compact,\n      var(--vkui--font_title1--font_family--regular)\n    );\n  }\n}\n\n.level2 {\n  font-size: var(--vkui--font_title2--font_size--regular);\n  line-height: var(--vkui--font_title2--line_height--regular);\n  font-weight: var(--vkui--font_title2--font_weight--regular);\n  font-family: var(--vkui--font_title2--font_family--regular);\n}\n\n.sizeYCompact.level2 {\n  font-size: var(\n    --vkui--font_title2--font_size--compact,\n    var(--vkui--font_title2--font_size--regular)\n  );\n  line-height: var(\n    --vkui--font_title2--line_height--compact,\n    var(--vkui--font_title2--line_height--regular)\n  );\n  font-weight: var(\n    --vkui--font_title2--font_weight--compact,\n    var(--vkui--font_title2--font_weight--regular)\n  );\n  font-family: var(\n    --vkui--font_title2--font_family--compact,\n    var(--vkui--font_title2--font_family--regular)\n  );\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone.level2 {\n    font-size: var(\n      --vkui--font_title2--font_size--compact,\n      var(--vkui--font_title2--font_size--regular)\n    );\n    line-height: var(\n      --vkui--font_title2--line_height--compact,\n      var(--vkui--font_title2--line_height--regular)\n    );\n    font-weight: var(\n      --vkui--font_title2--font_weight--compact,\n      var(--vkui--font_title2--font_weight--regular)\n    );\n    font-family: var(\n      --vkui--font_title2--font_family--compact,\n      var(--vkui--font_title2--font_family--regular)\n    );\n  }\n}\n\n.level3 {\n  font-size: var(--vkui--font_title3--font_size--regular);\n  line-height: var(--vkui--font_title3--line_height--regular);\n  font-weight: var(--vkui--font_title3--font_weight--regular);\n  font-family: var(--vkui--font_title3--font_family--regular);\n}\n\n.sizeYCompact.level3 {\n  font-size: var(\n    --vkui--font_title3--font_size--compact,\n    var(--vkui--font_title3--font_size--regular)\n  );\n  line-height: var(\n    --vkui--font_title3--line_height--compact,\n    var(--vkui--font_title3--line_height--regular)\n  );\n  font-weight: var(\n    --vkui--font_title3--font_weight--compact,\n    var(--vkui--font_title3--font_weight--regular)\n  );\n  font-family: var(\n    --vkui--font_title3--font_family--compact,\n    var(--vkui--font_title3--font_family--regular)\n  );\n}\n\n@media (--sizeY-compact) {\n  .sizeYNone.level3 {\n    font-size: var(\n      --vkui--font_title3--font_size--compact,\n      var(--vkui--font_title3--font_size--regular)\n    );\n    line-height: var(\n      --vkui--font_title3--line_height--compact,\n      var(--vkui--font_title3--line_height--regular)\n    );\n    font-weight: var(\n      --vkui--font_title3--font_weight--compact,\n      var(--vkui--font_title3--font_weight--regular)\n    );\n    font-family: var(\n      --vkui--font_title3--font_family--compact,\n      var(--vkui--font_title3--font_family--regular)\n    );\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={level1:"Title__level1--F4Z_t",sizeYCompact:"Title__sizeYCompact--xhmn6",sizeYNone:"Title__sizeYNone--H4MxD",level2:"Title__level2--rTtRP",level3:"Title__level3--WsywM"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/WriteBar/WriteBar.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".WriteBar__host--ed1r0{background:var(--vkui--color_background_contrast_themed)}.WriteBar__shadow--pt5A4{box-shadow:var(--vkui--elevation3)}.WriteBar__after--xwgSn,.WriteBar__before--w0406,.WriteBar__form--oDXoj{align-items:flex-end;display:flex}.WriteBar__form--oDXoj{min-block-size:52px}.WriteBar__formIn--O8D1o{display:flex;position:relative}.WriteBar__formIn--O8D1o,.WriteBar__textarea--Qo7yg{flex:1;min-inline-size:0}.WriteBar__textarea--Qo7yg{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;box-sizing:border-box;color:var(--vkui--color_text_primary);inline-size:100%;margin:0;max-block-size:120px;resize:none}.WriteBar__textarea--Qo7yg::placeholder{color:var(--vkui--color_text_subhead);opacity:1}.WriteBar__textarea--Qo7yg:focus{outline:var(--vkui_internal--outline-reset)}.WriteBar__inlineAfter--j5Vjf{align-items:flex-end;display:flex}.WriteBar__before--w0406{-webkit-padding-start:4px;padding-inline-start:4px}.WriteBar__after--xwgSn{-webkit-padding-end:4px;padding-inline-end:4px}.WriteBar__textarea--Qo7yg{block-size:52px;padding-block:16px;padding-inline:12px}.WriteBar__ios--tEMpJ{background:var(--vkui--color_background_content)}.WriteBar__ios--tEMpJ .WriteBar__after--xwgSn,.WriteBar__ios--tEMpJ .WriteBar__before--w0406{padding-block:0;padding-inline:4px}.WriteBar__ios--tEMpJ .WriteBar__formIn--O8D1o{background-color:var(--vkui--color_write_bar_input_background);border:var(--vkui--size_border--regular) solid var(--vkui--color_write_bar_input_border);border-radius:18px;box-sizing:border-box;margin-block:8px;margin-inline:0}.WriteBar__ios--tEMpJ .WriteBar__formIn--O8D1o:first-child{-webkit-margin-start:12px;margin-inline-start:12px}.WriteBar__ios--tEMpJ .WriteBar__inlineAfter--j5Vjf{--vkui_internal--writebar-right-gap:calc(-1 * var(--vkui--size_border--regular));--vkui_internal--writebar-vertical-gap:calc(var(--vkui_internal--writebar-right-gap) - 8px);-webkit-margin-end:var(--vkui_internal--writebar-right-gap);margin-block:var(--vkui_internal--writebar-vertical-gap);margin-inline-end:var(--vkui_internal--writebar-right-gap)}.WriteBar__ios--tEMpJ .WriteBar__textarea--Qo7yg{block-size:36px;padding-block:6px;padding-inline:12px 0}","",{version:3,sources:["webpack://./src/components/WriteBar/WriteBar.module.css"],names:[],mappings:"AAAA,uBACE,wDACF,CAEA,yBACE,kCACF,CAEA,wEAIE,oBAAqB,CADrB,YAEF,CAEA,uBACE,mBACF,CAEA,yBAGE,YAAa,CACb,iBACF,CAEA,oDANE,MAAO,CACP,iBAiBF,CAZA,2BAUE,uBAAgB,CAAhB,oBAAgB,CAAhB,eAAgB,CAJhB,sBAAuB,CACvB,QAAS,CANT,qBAAsB,CAQtB,qCAAsC,CAPtC,gBAAiB,CAGjB,QAAS,CAMT,oBAAqB,CAHrB,WAIF,CAEA,wCACE,qCAAsC,CAEtC,SACF,CAEA,iCACE,2CACF,CAEA,8BAEE,oBAAqB,CADrB,YAEF,CAEA,yBACE,yBAAyB,CAAzB,wBACF,CAEA,wBACE,uBAAuB,CAAvB,sBACF,CAEA,2BACE,eAAgB,CAChB,kBAAmB,CACnB,mBACF,CAKA,sBACE,gDACF,CAEA,6FAEE,eAAgB,CAChB,kBACF,CAEA,+CAEE,8DAA+D,CAC/D,wFAAyF,CACzF,kBAAmB,CAHnB,qBAAsB,CAItB,gBAAiB,CACjB,eACF,CAEA,2DACE,yBAAyB,CAAzB,wBACF,CAEA,oDAEE,gFAAiF,CACjF,2FAA4F,CAE5F,2DAA2D,CAC3D,wDAAyD,CADzD,0DAEF,CAEA,iDACE,eAAgB,CAChB,iBAAkB,CAClB,qBACF",sourcesContent:[".host {\n  background: var(--vkui--color_background_contrast_themed);\n}\n\n.shadow {\n  box-shadow: var(--vkui--elevation3);\n}\n\n.before,\n.form,\n.after {\n  display: flex;\n  align-items: flex-end;\n}\n\n.form {\n  min-block-size: 52px;\n}\n\n.formIn {\n  flex: 1;\n  min-inline-size: 0;\n  display: flex;\n  position: relative;\n}\n\n.textarea {\n  box-sizing: border-box;\n  inline-size: 100%;\n  flex: 1;\n  min-inline-size: 0;\n  margin: 0;\n  background: transparent;\n  border: 0;\n  resize: none;\n  color: var(--vkui--color_text_primary);\n  appearance: none;\n  max-block-size: 120px;\n}\n\n.textarea::placeholder {\n  color: var(--vkui--color_text_subhead);\n  /* Для Firefox */\n  opacity: 1;\n}\n\n.textarea:focus {\n  outline: var(--vkui_internal--outline-reset);\n}\n\n.inlineAfter {\n  display: flex;\n  align-items: flex-end;\n}\n\n.before {\n  padding-inline-start: 4px;\n}\n\n.after {\n  padding-inline-end: 4px;\n}\n\n.textarea {\n  block-size: 52px;\n  padding-block: 16px;\n  padding-inline: 12px;\n}\n\n/**\n * iOS\n */\n.ios {\n  background: var(--vkui--color_background_content);\n}\n\n.ios .before,\n.ios .after {\n  padding-block: 0;\n  padding-inline: 4px;\n}\n\n.ios .formIn {\n  box-sizing: border-box;\n  background-color: var(--vkui--color_write_bar_input_background);\n  border: var(--vkui--size_border--regular) solid var(--vkui--color_write_bar_input_border);\n  border-radius: 18px;\n  margin-block: 8px;\n  margin-inline: 0;\n}\n\n.ios .formIn:first-child {\n  margin-inline-start: 12px;\n}\n\n.ios .inlineAfter {\n  /* чтобы правильно выровнять иконку, нужно учитывать border */\n  --vkui_internal--writebar-right-gap: calc(-1 * var(--vkui--size_border--regular));\n  --vkui_internal--writebar-vertical-gap: calc(var(--vkui_internal--writebar-right-gap) - 8px);\n\n  margin-inline-end: var(--vkui_internal--writebar-right-gap);\n  margin-block: var(--vkui_internal--writebar-vertical-gap);\n}\n\n.ios .textarea {\n  block-size: 36px;\n  padding-block: 6px;\n  padding-inline: 12px 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"WriteBar__host--ed1r0",shadow:"WriteBar__shadow--pt5A4",after:"WriteBar__after--xwgSn",before:"WriteBar__before--w0406",form:"WriteBar__form--oDXoj",formIn:"WriteBar__formIn--O8D1o",textarea:"WriteBar__textarea--Qo7yg",inlineAfter:"WriteBar__inlineAfter--j5Vjf",ios:"WriteBar__ios--tEMpJ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);