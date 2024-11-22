"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2130],{"./src/components/Typography/EllipsisText/EllipsisText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EllipsisText_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),src=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),constants=__webpack_require__("./src/storybook/constants.ts"),react=__webpack_require__("../../node_modules/react/index.js"),lib=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/index.js"),lib_children=__webpack_require__("./src/lib/children.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),EllipsisText_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/EllipsisText/EllipsisText.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(EllipsisText_module.A,options);const EllipsisText_EllipsisText_module=EllipsisText_module.A&&EllipsisText_module.A.locals?EllipsisText_module.A.locals:void 0,EllipsisText=({Component="span",className,children,maxWidth,maxLines=1,disableNativeTitle=!1,...restProps})=>{const contentRef=(0,react.useRef)(null);return(0,useIsomorphicLayoutEffect.E)((()=>{contentRef&&contentRef.current&&contentRef.current.style.setProperty("-webkit-line-clamp",maxLines>1?`${maxLines}`:"")}),[contentRef,maxLines]),(0,jsx_runtime.jsx)(RootComponent.I,{Component,className:(0,lib.xW)(EllipsisText_EllipsisText_module.host,disableNativeTitle&&EllipsisText_EllipsisText_module.disableNativeTitle,className),title:disableNativeTitle?void 0:(0,lib_children.D)(children),...restProps,children:(0,jsx_runtime.jsx)("span",{style:{maxWidth},ref:contentRef,className:(0,lib.xW)(EllipsisText_EllipsisText_module.content,maxLines>1&&EllipsisText_EllipsisText_module.contentMultiline),children})})};try{EllipsisText.displayName="EllipsisText",EllipsisText.__docgenInfo={description:"Компонент ограничивает текстовый контент, убирая его в многоточие.",displayName:"EllipsisText",props:{maxWidth:{defaultValue:null,description:"Пользовательская маскимальная ширина.\n\nИспользуйте в случаях, когда у контейнера ширина зависит от размера контента,\nдругими словами, когда ширина не ограничена.",name:"maxWidth",required:!1,type:{name:"number"}},maxLines:{defaultValue:{value:"1"},description:"Максимальное количество видимых строк\n\n> При `maxLines > 1` используется свойство line-clamp, которое поддерживается не всеми версиями браузеров. Используйте с осторожностью\n>\n@see [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)",name:"maxLines",required:!1,type:{name:"number"}},disableNativeTitle:{defaultValue:{value:"false"},description:"Отключает отображение нативного тултипа с полным текстом",name:"disableNativeTitle",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/EllipsisText/EllipsisText.tsx#EllipsisText"]={docgenInfo:EllipsisText.__docgenInfo,name:"EllipsisText",path:"src/components/Typography/EllipsisText/EllipsisText.tsx#EllipsisText"})}catch(__react_docgen_typescript_loader_error){}const EllipsisText_stories={title:"Typography/EllipsisText",component:EllipsisText,parameters:constants.eb,decorators:[src.L1]},ellipsisText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",Playground={render:args=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{style:{width:200},children:(0,jsx_runtime.jsx)(EllipsisText,{...args,children:ellipsisText})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(EllipsisText,{maxWidth:100,...args,children:ellipsisText})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(EllipsisText,{maxWidth:150,...args,children:ellipsisText})})]})},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: args => <>\n      <div style={{\n      width: 200\n    }}>\n        <EllipsisText {...args}>{ellipsisText}</EllipsisText>\n      </div>\n      <div>\n        <EllipsisText maxWidth={100} {...args}>\n          {ellipsisText}\n        </EllipsisText>\n      </div>\n      <div>\n        <EllipsisText maxWidth={150} {...args}>\n          {ellipsisText}\n        </EllipsisText>\n      </div>\n    </>\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/EllipsisText/EllipsisText.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.EllipsisText__host--tAykm{display:inline-flex;max-inline-size:100%;min-inline-size:0}.EllipsisText__host--tAykm.EllipsisText__disableNativeTitle--XR_0X .EllipsisText__content--mblJq:after,.EllipsisText__host--tAykm.EllipsisText__disableNativeTitle--XR_0X:after{content:"";display:block}.EllipsisText__content--mblJq{flex:0 0 auto;max-inline-size:inherit;min-inline-size:1em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.EllipsisText__contentMultiline--Kt3qb{display:-webkit-box;-webkit-box-orient:vertical;-ms-box-orient:vertical;white-space:normal}',"",{version:3,sources:["webpack://./src/components/Typography/EllipsisText/EllipsisText.module.css"],names:[],mappings:"AAAA,2BACE,mBAAoB,CAEpB,oBAAqB,CADrB,iBAEF,CAGA,gLAEE,UAAW,CACX,aACF,CAEA,8BAKE,aAAc,CACd,uBAAwB,CALxB,mBAAoB,CACpB,eAAgB,CAChB,sBAAuB,CACvB,kBAGF,CAEA,uCACE,mBAAoB,CACpB,2BAA4B,CAC5B,uBAAwB,CAExB,kBACF",sourcesContent:[".host {\n  display: inline-flex;\n  min-inline-size: 0;\n  max-inline-size: 100%;\n}\n\n/* Хак для того, чтобы убрать системный тултип в Safari */\n.host.disableNativeTitle::after,\n.host.disableNativeTitle .content::after {\n  content: '';\n  display: block;\n}\n\n.content {\n  min-inline-size: 1em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  max-inline-size: inherit;\n}\n\n.contentMultiline {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -ms-box-orient: vertical;\n  -moz-box-orient: vertical;\n  white-space: normal;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"EllipsisText__host--tAykm",disableNativeTitle:"EllipsisText__disableNativeTitle--XR_0X",content:"EllipsisText__content--mblJq",contentMultiline:"EllipsisText__contentMultiline--Kt3qb"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/lib/children.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>getTextFromChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const childToString=child=>null==child||"boolean"==typeof child||"{}"===JSON.stringify(child)?"":child.toString(),getTextFromChildren=children=>children instanceof Array||(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce(((text,child)=>{let newText="";const isValidElementResult=(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child),hasChildren=isValidElementResult&&"children"in child.props;return newText=isValidElementResult&&hasChildren?getTextFromChildren(child.props.children):isValidElementResult&&!hasChildren?"":childToString(child),text.concat(newText)}),""):childToString(children)},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"../../tools/storybook-addon-cartesian/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L1:()=>withCartesian});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");const CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"};const withCartesian=(StoryFn,context)=>{const{argTypes,args:{cartesian,...restArgs}}=context;if(cartesian){const variants=function cartesianFunc(propDesc=[],argTypes){return Object.entries(propDesc).reduce(((acc,[prop,values])=>{const res=[];return acc.forEach((props=>{values.forEach((value=>{const mapping=argTypes[prop].mapping;res.push({...props,[prop]:mapping?mapping[value]:value})}))})),res}),[{}])}(cartesian,argTypes);return(0,jsx_runtime.jsx)("div",{style:CartesianContainerStyle,children:variants.map(((ops,index)=>(0,jsx_runtime.jsx)(StoryFn,{args:{...restArgs,...ops}},index)))})}return(0,jsx_runtime.jsx)(StoryFn,{args:restArgs})}}}]);