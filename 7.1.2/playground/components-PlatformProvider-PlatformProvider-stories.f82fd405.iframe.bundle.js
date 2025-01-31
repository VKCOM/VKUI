"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9085],{"./src/components/PlatformProvider/PlatformProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PlatformProvider_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),constants=__webpack_require__("./src/storybook/constants.ts"),ConfigProviderContext=__webpack_require__("./src/components/ConfigProvider/ConfigProviderContext.tsx"),TokensClassProvider=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/lib/tokens/TokensClassProvider.tsx")),ConfigProviderOverride=__webpack_require__("./src/components/ConfigProvider/ConfigProviderOverride.tsx");function PlatformProvider({value,children}){return(0,jsx_runtime.jsx)(ConfigProviderOverride.A,{platform:value,children:(0,jsx_runtime.jsx)(TokensClassProvider.A,{children})})}try{PlatformProvider.displayName="PlatformProvider",PlatformProvider.__docgenInfo={description:"Компонент, позволяющий переопределить платформу для части приложения",displayName:"PlatformProvider",props:{value:{defaultValue:null,description:"Платформа",name:"value",required:!0,type:{name:"enum",value:[{value:'"android"'},{value:'"ios"'},{value:'"vkcom"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PlatformProvider/PlatformProvider.tsx#PlatformProvider"]={docgenInfo:PlatformProvider.__docgenInfo,name:"PlatformProvider",path:"src/components/PlatformProvider/PlatformProvider.tsx#PlatformProvider"})}catch(__react_docgen_typescript_loader_error){}const PlatformProvider_stories={title:"Service/PlatformProvider",component:PlatformProvider,argTypes:{value:{control:{type:"select"},options:["android","ios","vkcom"]}},parameters:{...constants.eb,...constants.eC}},DisplayPlatformProvider=()=>{const{platform}=(0,ConfigProviderContext.h5)();return(0,jsx_runtime.jsxs)("div",{style:{padding:5},children:["Inner LocaleProvider: ",platform]})},Playground={render:function Render({value}){const{platform}=(0,ConfigProviderContext.h5)();return(0,jsx_runtime.jsxs)(PlatformProvider,{value:value??platform,children:[(0,jsx_runtime.jsxs)("div",{style:{padding:5},children:["Outer LocaleProvider: ",platform]}),(0,jsx_runtime.jsx)(DisplayPlatformProvider,{})]})}},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render({\n    value\n  }) {\n    const {\n      platform\n    } = useConfigProvider();\n    return <PlatformProvider value={value ?? platform}>\n        <div style={{\n        padding: 5\n      }}>Outer LocaleProvider: {platform}</div>\n        <DisplayPlatformProvider />\n      </PlatformProvider>;\n  }\n}",...Playground.parameters?.docs?.source}}}},"./src/components/ConfigProvider/ConfigProviderOverride.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ConfigProviderOverride});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_ConfigProviderContext__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/ConfigProvider/ConfigProviderContext.tsx"));function ConfigProviderOverride({children,...contextValue}){const parentConfig=(0,_ConfigProviderContext__WEBPACK_IMPORTED_MODULE_2__.h5)(),configContext=(0,_ConfigProviderContext__WEBPACK_IMPORTED_MODULE_2__.wb)({...parentConfig,...contextValue});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConfigProviderContext__WEBPACK_IMPORTED_MODULE_2__.TX.Provider,{value:configContext,children})}try{ConfigProviderOverride.displayName="ConfigProviderOverride",ConfigProviderOverride.__docgenInfo={description:"Компонент предназначен для перебивания одного из значений контекста",displayName:"ConfigProviderOverride",props:{isWebView:{defaultValue:null,description:'Подсказывает приложению, обёрнутому в `ConfigProvider`, где открыто приложение: внутри webview или в мобильном браузере.\n\nВ условиях когда:\n- `isWebView={true}`\n- platform="ios"\n\nдля компонента `View` включается возможность навигации через смахивание.',name:"isWebView",required:!1,type:{name:"boolean"}},hasCustomPanelHeaderAfter:{defaultValue:null,description:'При `true` слот `after` у `PanelHeader` игнорируется под размещение пользовательского\n"плавающего" элемента (например, панель управления webview).\n\n> Note: Правило не распространяется на `PanelHeader` внутри модальных окон, предоставляемых\n> библиотекой.',name:"hasCustomPanelHeaderAfter",required:!1,type:{name:"boolean"}},customPanelHeaderAfterMinWidth:{defaultValue:{value:"90"},description:'Задаёт необходимый минимальную ширину слота `after` в `PanelHeader` под пользовательский\n"плавающий" элемент (например, ширина панели управления webview).\n\nУчитывается только при `hasCustomPanelHeaderAfter={true}` (см. документацию `hasCustomPanelHeaderAfter`).',name:"customPanelHeaderAfterMinWidth",required:!1,type:{name:"string | number"}},colorScheme:{defaultValue:null,description:"Тип цветовой схемы – `light` или `dark`",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},transitionMotionEnabled:{defaultValue:null,description:"Включена ли анимация переходов между экранами в `Root` и `View`",name:"transitionMotionEnabled",required:!1,type:{name:"boolean"}},platform:{defaultValue:null,description:"Платформа",name:"platform",required:!1,type:{name:"enum",value:[{value:'"android"'},{value:'"ios"'},{value:'"vkcom"'}]}},tokensClassNames:{defaultValue:{value:"{\n  android: {\n    light: 'vkui--vkBase--light',\n    dark: 'vkui--vkBase--dark',\n  },\n  ios: {\n    light: 'vkui--vkIOS--light',\n    dark: 'vkui--vkIOS--dark',\n  },\n  vkcom: {\n    light: 'vkui--vkCom--light',\n    dark: 'vkui--vkCom--dark',\n  }\n}"},description:"CSS классы, определяющие набор токенов.\n\n- Используйте `{ light?: '<css_class>', dark?: '<css_class>' }`, чтобы задать для всех платформ одинаковый набор токенов для светлой и/или тёмной тем.\n- Используйте `{ [key in 'android' | 'ios' | 'vkcom']?: '<css_class>' }`, чтобы задать для одной или нескольких платформ свой набор токенов.",name:"tokensClassNames",required:!1,type:{name:"TokensClassNames"}},locale:{defaultValue:null,description:"Строка с языковой меткой BCP 47",name:"locale",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConfigProvider/ConfigProviderOverride.tsx#ConfigProviderOverride"]={docgenInfo:ConfigProviderOverride.__docgenInfo,name:"ConfigProviderOverride",path:"src/components/ConfigProvider/ConfigProviderOverride.tsx#ConfigProviderOverride"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}}}]);