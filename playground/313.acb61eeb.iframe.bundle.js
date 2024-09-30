"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[313],{"./src/components/ModalPage/ModalPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>ModalPage});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivityWithJSMediaQueries=__webpack_require__("./src/hooks/useAdaptivityWithJSMediaQueries.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),dom=__webpack_require__("./src/lib/dom.tsx"),useGlobalEventListener=__webpack_require__("./src/hooks/useGlobalEventListener.ts");function getOrientation(window){if(!window)return"portrait";return 90===Math.abs(window.screen?.orientation?.angle??Number(window.orientation))?"landscape":"portrait"}var usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),getNavId=__webpack_require__("./src/lib/getNavId.ts"),utils=__webpack_require__("./src/lib/utils.ts"),warnOnce=__webpack_require__("./src/lib/warnOnce.ts"),ModalDismissButton=__webpack_require__("./src/components/ModalDismissButton/ModalDismissButton.tsx"),ModalRootContext=__webpack_require__("./src/components/ModalRoot/ModalRootContext.tsx"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),ModalPageContext=__webpack_require__("./src/components/ModalPage/ModalPageContext.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ModalPage_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ModalPage/ModalPage.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ModalPage_module.A,options);const ModalPage_ModalPage_module=ModalPage_module.A&&ModalPage_module.A.locals?ModalPage_module.A.locals:void 0,sizeClassName={s:ModalPage_ModalPage_module["ModalPage--size-s"],m:ModalPage_ModalPage_module["ModalPage--size-m"],l:ModalPage_ModalPage_module["ModalPage--size-l"]},warn=(0,warnOnce.m)("ModalPage"),ModalPage=({children,header,size:sizeProp="s",onOpen,onOpened,onClose,onClosed,settlingHeight,dynamicContentHeight,getModalContentRef,nav,id:idProp,hideCloseButton=!1,height,modalContentTestId,modalDismissButtonTestId,getRootRef,preventClose,...restProps})=>{const generatingId=react.useId(),id=idProp||generatingId,{updateModalHeight}=react.useContext(ModalRootContext.f),platform=(0,usePlatform.V)(),orientation=function useOrientationChange(){const{window}=(0,dom.a4)(),[orientation,setOrientation]=react.useState((()=>getOrientation(window)));return(0,useGlobalEventListener.l)(window,"orientationchange",(()=>setOrientation(getOrientation(window)))),orientation}(),{sizeX,isDesktop}=(0,useAdaptivityWithJSMediaQueries.w)();react.useEffect((()=>{dynamicContentHeight&&updateModalHeight()}),[children,dynamicContentHeight,orientation,updateModalHeight]);const isCloseButtonShown=!hideCloseButton&&isDesktop,size=isDesktop?sizeProp:"s",modalContext=react.useContext(ModalRootContext.f),{refs}=(0,ModalRootContext.o)((0,getNavId.p)({nav,id},warn),"page"),rootRef=(0,useExternRef.Z)(getRootRef,refs.modalElement),contextValue=react.useMemo((()=>({labelId:`${id}-label`})),[id]);return(0,jsx_runtime.jsx)(ModalPageContext.s.Provider,{value:contextValue,children:(0,jsx_runtime.jsx)(RootComponent.I,{...restProps,getRootRef:rootRef,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":contextValue.labelId,id,baseClassName:(0,es6.xW)(ModalPage_ModalPage_module.ModalPage,"ios"===platform&&ModalPage_ModalPage_module["ModalPage--ios"],isDesktop&&ModalPage_ModalPage_module["ModalPage--desktop"],"regular"===sizeX&&"vkuiInternalModalPage--sizeX-regular","string"==typeof size&&sizeClassName[size]),children:(0,jsx_runtime.jsx)("div",{className:ModalPage_ModalPage_module["ModalPage__in-wrap"],style:{maxWidth:"number"==typeof size?size:void 0,height},ref:refs.innerElement,children:(0,jsx_runtime.jsxs)("div",{className:ModalPage_ModalPage_module.ModalPage__in,children:[(0,jsx_runtime.jsx)("div",{className:ModalPage_ModalPage_module.ModalPage__header,ref:refs.headerElement,children:header}),(0,jsx_runtime.jsxs)("div",{className:ModalPage_ModalPage_module["ModalPage__content-wrap"],children:[(0,jsx_runtime.jsx)("div",{className:ModalPage_ModalPage_module.ModalPage__content,ref:(0,utils.NV)(refs.contentElement,getModalContentRef),...modalContentTestId&&{"data-testid":modalContentTestId},children:(0,jsx_runtime.jsx)("div",{className:ModalPage_ModalPage_module["ModalPage__content-in"],children})}),(0,jsx_runtime.jsx)("div",{ref:refs.bottomInset,className:ModalPage_ModalPage_module["ModalPage__bottom-inset"]})]}),isCloseButtonShown&&(0,jsx_runtime.jsx)(ModalDismissButton.w,{"data-testid":modalDismissButtonTestId,onClick:onClose||modalContext.onClose})]})})})})};try{ModalPage.displayName="ModalPage",ModalPage.__docgenInfo={description:"",displayName:"ModalPage",props:{header:{defaultValue:null,description:"Шапка модальной страницы, `<ModalPageHeader />`",name:"header",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Задаёт контенту максимальную ширину для десктопной версии.",name:"size",required:!1,type:{name:'number | "s" | "m" | "l"'}},height:{defaultValue:null,description:"Задаёт модальному окну фиксированную высоту.\nМожно передать числовое значение в пикселях, а можно строкой, в том числе и в процентах \"50%\".\nВ мобильной версии 'settlingHeight' будет считаться относительно заданного height.",name:"height",required:!1,type:{name:"string | number"}},onOpen:{defaultValue:null,description:"Будет вызвано при начале открытия модалки.",name:"onOpen",required:!1,type:{name:"VoidFunction"}},onOpened:{defaultValue:null,description:"Будет вызвано при окончательном открытии модалки.",name:"onOpened",required:!1,type:{name:"VoidFunction"}},onClose:{defaultValue:null,description:"Будет вызвано при начале закрытия модалки.",name:"onClose",required:!1,type:{name:"VoidFunction"}},onClosed:{defaultValue:null,description:"Будет вызвано при окончательном закрытии модалки.",name:"onClosed",required:!1,type:{name:"VoidFunction"}},settlingHeight:{defaultValue:null,description:"Процент, на который изначально будет открыта модальная страница. При `settlingHeight={100}` модальная страница раскрывается на всю высоту.",name:"settlingHeight",required:!1,type:{name:"number"}},dynamicContentHeight:{defaultValue:null,description:"Если высота контента в модальной странице может поменяться, нужно установить это свойство",name:"dynamicContentHeight",required:!1,type:{name:"boolean"}},getModalContentRef:{defaultValue:null,description:"",name:"getModalContentRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},hideCloseButton:{defaultValue:{value:"false"},description:"Скрывает кнопку закрытия (актуально для iOS, т.к. можно отрисовать кнопку закрытия внутри модалки)",name:"hideCloseButton",required:!1,type:{name:"boolean"}},modalContentTestId:{defaultValue:null,description:"",name:"modalContentTestId",required:!1,type:{name:"string"}},modalDismissButtonTestId:{defaultValue:null,description:"`data-testid` для кнопки закрытия",name:"modalDismissButtonTestId",required:!1,type:{name:"string"}},preventClose:{defaultValue:null,description:"Позволяет отключить возможность закрытия модальной страницы (смахивание, клавиша `ESC`, клик по подложке)\n\n⚠️ ВНИМАНИЕ: использование этой опции негативно сказывается на пользовательском опыте",name:"preventClose",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},nav:{defaultValue:null,description:"Уникальный идентификатор навигационного элемента (вместо id)",name:"nav",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalPage/ModalPage.tsx#ModalPage"]={docgenInfo:ModalPage.__docgenInfo,name:"ModalPage",path:"src/components/ModalPage/ModalPage.tsx#ModalPage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ModalPage/ModalPageContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>ModalPageContext});const ModalPageContext=__webpack_require__("../../node_modules/react/index.js").createContext({})},"./src/components/ModalPageHeader/ModalPageHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>ModalPageHeader});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivityWithJSMediaQueries=__webpack_require__("./src/hooks/useAdaptivityWithJSMediaQueries.ts"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),ModalPageContext=__webpack_require__("./src/components/ModalPage/ModalPageContext.tsx"),PanelHeader=__webpack_require__("./src/components/PanelHeader/PanelHeader.tsx"),Separator=__webpack_require__("./src/components/Separator/Separator.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ModalPageHeader_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ModalPageHeader/ModalPageHeader.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ModalPageHeader_module.A,options);const ModalPageHeader_ModalPageHeader_module=ModalPageHeader_module.A&&ModalPageHeader_module.A.locals?ModalPageHeader_module.A.locals:void 0,ModalPageHeader=({children,noSeparator=!1,getRootRef,className,typographyProps,...restProps})=>{const platform=(0,usePlatform.V)(),{isDesktop,sizeX}=(0,useAdaptivityWithJSMediaQueries.w)(),{labelId}=react.useContext(ModalPageContext.s);return(0,jsx_runtime.jsxs)("div",{className:(0,es6.xW)(ModalPageHeader_ModalPageHeader_module.ModalPageHeader,"vkcom"!==platform&&ModalPageHeader_ModalPageHeader_module["ModalPageHeader--withGaps"],isDesktop&&ModalPageHeader_ModalPageHeader_module["ModalPageHeader--desktop"]),ref:getRootRef,children:[(0,jsx_runtime.jsx)(PanelHeader.a,{className:(0,es6.xW)("vkuiInternalModalPageHeader__in",className),typographyProps:{Component:"h2",id:labelId,...typographyProps},...restProps,fixed:!1,delimiter:"none",transparent:!0,children}),!noSeparator&&(0,jsx_runtime.jsx)(Separator.w,{wide:"regular"===sizeX})]})};try{ModalPageHeader.displayName="ModalPageHeader",ModalPageHeader.__docgenInfo={description:"",displayName:"ModalPageHeader",props:{noSeparator:{defaultValue:{value:"false"},description:"",name:"noSeparator",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},before:{defaultValue:null,description:"",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет элемент справа.\n\nПри передаче нескольких элементов, расставляет отступы между ними.",name:"after",required:!1,type:{name:"ReactNode"}},float:{defaultValue:null,description:"Высота шапки будет игнорироваться контентом панели",name:"float",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},typographyProps:{defaultValue:null,description:"По умолчанию как `Component` используется `span`.",name:"typographyProps",required:!1,type:{name:"(HasComponent & HTMLAttributes<HTMLElement> & HasDataAttribute)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalPageHeader/ModalPageHeader.tsx#ModalPageHeader"]={docgenInfo:ModalPageHeader.__docgenInfo,name:"ModalPageHeader",path:"src/components/ModalPageHeader/ModalPageHeader.tsx#ModalPageHeader"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ModalPage/ModalPage.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ModalPage--uFqKh{block-size:100%;box-sizing:border-box;inline-size:100%;overflow:hidden;pointer-events:none;position:absolute}.ModalPage--uFqKh:focus{outline:none}.ModalPage--desktop--k1jTS{align-items:center;display:flex;justify-content:center}.ModalPage__in-wrap--vjzW1{align-items:flex-end;block-size:100%;display:flex;inline-size:100%;inset-block-end:0;inset-inline:0;margin-inline:auto;pointer-events:auto;position:absolute;transform:translateY(100%);transition:transform .32s var(--vkui--animation_easing_platform)}.ModalPage--ios--LFiCc .ModalPage__in-wrap--vjzW1{transition:transform .4s var(--vkui--animation_easing_platform)}.ModalPage--desktop--k1jTS .ModalPage__in-wrap--vjzW1{align-items:normal;block-size:auto;margin-block:32px;margin-inline:56px;max-block-size:640px;opacity:0;position:relative;transform:none;transition:opacity .34s var(--vkui--animation_easing_platform)}@media (max-height:672px){.ModalPage--desktop--k1jTS .ModalPage__in-wrap--vjzW1{max-block-size:calc(100% - 32px * 2)}}.ModalPage--size-s--iYW99 .ModalPage__in-wrap--vjzW1{max-inline-size:var(--vkui--size_popup_small--regular)}.ModalPage--size-m--CpzvY .ModalPage__in-wrap--vjzW1{max-inline-size:var(--vkui--size_popup_medium--regular)}.ModalPage--size-l--GurGV .ModalPage__in-wrap--vjzW1{max-inline-size:var(--vkui--size_popup_large--regular)}.ModalPage__in--Lbnqd{background-color:var(--vkui--color_background_modal);block-size:100%;border-start-end-radius:var(--vkui--size_border_radius_paper--regular);border-start-start-radius:var(--vkui--size_border_radius_paper--regular);box-sizing:border-box;display:flex;flex-direction:column;inline-size:100%;overflow:visible;position:relative;--vkui_internal--background:var(--vkui--color_background_modal)}.ModalPage--desktop--k1jTS .ModalPage__in--Lbnqd{block-size:auto;border-end-end-radius:var(--vkui--size_border_radius_paper--regular);border-end-start-radius:var(--vkui--size_border_radius_paper--regular);box-shadow:var(--vkui--elevation3)}.ModalPage__header--tGGIV{inline-size:100%}.ModalPage__content-wrap--FokUu{block-size:100%;border-end-end-radius:inherit;border-end-start-radius:inherit;display:flex;flex-direction:column;overflow:hidden;position:relative}.ModalPage__header--tGGIV:empty+.ModalPage__content-wrap--FokUu{border-radius:inherit}.ModalPage__content--_XTcI{block-size:100%;box-sizing:border-box;overflow-x:hidden;overflow-y:hidden}.ModalPage--desktop--k1jTS .ModalPage__content--_XTcI,.vkuiInternalModalRoot__modal--expandable .ModalPage__content--_XTcI{overflow-y:auto;-webkit-overflow-scrolling:touch}.ModalPage--desktop--k1jTS .ModalPage__content-in--UHMSz,.vkuiInternalModalRoot__modal--expandable .ModalPage__content-in--UHMSz{block-size:100%}.ModalPage__bottom-inset--F7P2T{block-size:var(--vkui_internal--safe_area_inset_bottom);flex-shrink:0}.vkuiInternalModalRoot--touched .ModalPage__in-wrap--vjzW1{transition:none}.vkuiInternalModalRoot--switching .ModalPage__in-wrap--vjzW1{pointer-events:none}.vkuiInternalModalRoot__modal--collapsed .ModalPage__content--_XTcI,.vkuiInternalModalRoot__modal--dragging .ModalPage__content--_XTcI{overflow:hidden;touch-action:pan-y}","",{version:3,sources:["webpack://./src/components/ModalPage/ModalPage.module.css"],names:[],mappings:"AAAA,kBAEE,eAAgB,CAGhB,qBAAsB,CAJtB,gBAAiB,CAEjB,eAAgB,CAGhB,mBAAoB,CAFpB,iBAGF,CAEA,wBACE,YACF,CAEA,2BAGE,kBAAmB,CAFnB,YAAa,CACb,sBAEF,CAEA,2BAQE,oBAAqB,CANrB,eAAgB,CAKhB,YAAa,CANb,gBAAiB,CAIjB,iBAAkB,CADlB,cAAe,CAEf,kBAAmB,CAGnB,mBAAuB,CANvB,iBAAkB,CAOlB,0BAA2B,CAC3B,gEACF,CAEA,kDACE,+DACF,CAEA,sDAEE,kBAAoB,CAGpB,eAAgB,CAFhB,iBAAkB,CAClB,kBAAmB,CAEnB,oBAAqB,CACrB,SAAU,CANV,iBAAkB,CAOlB,cAAe,CACf,8DACF,CAEA,0BACE,sDACE,oCACF,CACF,CAEA,qDACE,sDACF,CAEA,qDACE,uDACF,CAEA,qDACE,sDACF,CAEA,sBACE,oDAAqD,CAKrD,eAAgB,CAGhB,sEAAuE,CACvE,wEAAyE,CANzE,qBAAsB,CAGtB,YAAa,CACb,qBAAsB,CAHtB,gBAAiB,CAHjB,gBAAiB,CACjB,iBAAkB,CASlB,+DACF,CAEA,iDACE,eAAgB,CAEhB,oEAAqE,CACrE,sEAAuE,CAFvE,kCAGF,CAEA,0BACE,gBACF,CAEA,gCAGE,eAAgB,CAIhB,6BAA8B,CAD9B,+BAAgC,CAJhC,YAAa,CAEb,qBAAsB,CACtB,eAAgB,CAJhB,iBAOF,CAEA,gEACE,qBACF,CAEA,2BACE,eAAgB,CAGhB,qBAAsB,CADtB,iBAAkB,CADlB,iBAGF,CAGA,2HAEE,eAAgB,CAChB,gCACF,CAGA,iIAEE,eACF,CAMA,gCACE,uDAAwD,CACxD,aACF,CASA,2DACE,eACF,CAGA,6DACE,mBACF,CAGA,uIAEE,eAAgB,CAChB,kBACF",sourcesContent:[".ModalPage {\n  inline-size: 100%;\n  block-size: 100%;\n  overflow: hidden;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n.ModalPage:focus {\n  outline: none;\n}\n\n.ModalPage--desktop {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ModalPage__in-wrap {\n  inline-size: 100%;\n  block-size: 100%;\n  position: absolute;\n  inset-inline: 0;\n  inset-block-end: 0;\n  margin-inline: auto;\n  display: flex;\n  align-items: flex-end;\n  pointer-events: initial;\n  transform: translateY(100%);\n  transition: transform 320ms var(--vkui--animation_easing_platform);\n}\n\n.ModalPage--ios .ModalPage__in-wrap {\n  transition: transform 400ms var(--vkui--animation_easing_platform);\n}\n\n.ModalPage--desktop .ModalPage__in-wrap {\n  position: relative;\n  align-items: initial;\n  margin-block: 32px;\n  margin-inline: 56px;\n  block-size: auto;\n  max-block-size: 640px;\n  opacity: 0;\n  transform: none;\n  transition: opacity 340ms var(--vkui--animation_easing_platform);\n}\n\n@media (max-height: 672px) {\n  .ModalPage--desktop .ModalPage__in-wrap {\n    max-block-size: calc(100% - 32px * 2);\n  }\n}\n\n.ModalPage--size-s .ModalPage__in-wrap {\n  max-inline-size: var(--vkui--size_popup_small--regular);\n}\n\n.ModalPage--size-m .ModalPage__in-wrap {\n  max-inline-size: var(--vkui--size_popup_medium--regular);\n}\n\n.ModalPage--size-l .ModalPage__in-wrap {\n  max-inline-size: var(--vkui--size_popup_large--regular);\n}\n\n.ModalPage__in {\n  background-color: var(--vkui--color_background_modal);\n  overflow: visible;\n  position: relative;\n  box-sizing: border-box;\n  inline-size: 100%;\n  block-size: 100%;\n  display: flex;\n  flex-direction: column;\n  border-start-end-radius: var(--vkui--size_border_radius_paper--regular);\n  border-start-start-radius: var(--vkui--size_border_radius_paper--regular);\n\n  --vkui_internal--background: var(--vkui--color_background_modal);\n}\n\n.ModalPage--desktop .ModalPage__in {\n  block-size: auto;\n  box-shadow: var(--vkui--elevation3);\n  border-end-end-radius: var(--vkui--size_border_radius_paper--regular);\n  border-end-start-radius: var(--vkui--size_border_radius_paper--regular);\n}\n\n.ModalPage__header {\n  inline-size: 100%;\n}\n\n.ModalPage__content-wrap {\n  position: relative;\n  display: flex;\n  block-size: 100%;\n  flex-direction: column;\n  overflow: hidden;\n  border-end-start-radius: inherit;\n  border-end-end-radius: inherit;\n}\n\n.ModalPage__header:empty + .ModalPage__content-wrap {\n  border-radius: inherit;\n}\n\n.ModalPage__content {\n  block-size: 100%;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  box-sizing: border-box;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.ModalPage--desktop .ModalPage__content,\n:global(.vkuiInternalModalRoot__modal--expandable) .ModalPage__content {\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.ModalPage--desktop .ModalPage__content-in,\n:global(.vkuiInternalModalRoot__modal--expandable) .ModalPage__content-in {\n  block-size: 100%;\n}\n\n/* существует для того, чтобы использовать в расчёте translateY\n * чтобы поднять ModalPage не только на высоту контента, но и на высоту bottom-inset\n * особенно важно для ModalPage c динамической высотой\n */\n.ModalPage__bottom-inset {\n  block-size: var(--vkui_internal--safe_area_inset_bottom);\n  flex-shrink: 0;\n}\n\n/**\n * CMP:\n * ModalRoot\n *\n * [дополнительно] также ищи в файле `ModalRoot__modal--expandable`\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalModalRoot--touched) .ModalPage__in-wrap {\n  transition: none;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalModalRoot--switching) .ModalPage__in-wrap {\n  pointer-events: none;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalModalRoot__modal--collapsed) .ModalPage__content,\n:global(.vkuiInternalModalRoot__modal--dragging) .ModalPage__content {\n  overflow: hidden;\n  touch-action: pan-y;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ModalPage:"ModalPage--uFqKh","ModalPage--desktop":"ModalPage--desktop--k1jTS","ModalPage__in-wrap":"ModalPage__in-wrap--vjzW1","ModalPage--ios":"ModalPage--ios--LFiCc","ModalPage--size-s":"ModalPage--size-s--iYW99","ModalPage--size-m":"ModalPage--size-m--CpzvY","ModalPage--size-l":"ModalPage--size-l--GurGV",ModalPage__in:"ModalPage__in--Lbnqd",ModalPage__header:"ModalPage__header--tGGIV","ModalPage__content-wrap":"ModalPage__content-wrap--FokUu",ModalPage__content:"ModalPage__content--_XTcI","ModalPage__content-in":"ModalPage__content-in--UHMSz","ModalPage__bottom-inset":"ModalPage__bottom-inset--F7P2T"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ModalPageHeader/ModalPageHeader.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ModalPageHeader--d4RCC{--vkui_internal--safe_area_inset_top:0}.ModalPageHeader--withGaps--NvLqG{padding-inline:4px}.ModalPageHeader--desktop--B5Ab6.ModalPageHeader--withGaps--NvLqG{padding-inline:8px}.ModalPageHeader--d4RCC .vkuiIcon--cancel_24,.ModalPageHeader--d4RCC .vkuiIcon--dismiss_24{color:var(--vkui--color_icon_secondary)}","",{version:3,sources:["webpack://./src/components/ModalPageHeader/ModalPageHeader.module.css"],names:[],mappings:"AAAA,wBACE,sCACF,CAEA,kCACE,kBACF,CAEA,kEACE,kBACF,CAGA,2FAEE,uCACF",sourcesContent:[".ModalPageHeader {\n  --vkui_internal--safe_area_inset_top: 0;\n}\n\n.ModalPageHeader--withGaps {\n  padding-inline: 4px;\n}\n\n.ModalPageHeader--desktop.ModalPageHeader--withGaps {\n  padding-inline: 8px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.ModalPageHeader :global(.vkuiIcon--dismiss_24), /* Note: <Icon24Dismiss /> по документации используется только для iOS  */\n.ModalPageHeader :global(.vkuiIcon--cancel_24) {\n  color: var(--vkui--color_icon_secondary);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ModalPageHeader:"ModalPageHeader--d4RCC","ModalPageHeader--withGaps":"ModalPageHeader--withGaps--NvLqG","ModalPageHeader--desktop":"ModalPageHeader--desktop--B5Ab6"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);