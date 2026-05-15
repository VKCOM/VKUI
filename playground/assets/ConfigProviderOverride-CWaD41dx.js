import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,o as r}from"./ConfigProviderSubContexts-BmPpmebz.js";import{i,n as a,r as o,t as s}from"./ConfigProviderContext-CZmYv0wa.js";function c({children:e,...t}){let r=i({...o(),...t});return(0,l.jsx)(s.Provider,{value:r,children:(0,l.jsx)(n,{value:r,children:e})})}var l,u=e((()=>{a(),r(),l=t();try{c.displayName=`ConfigProviderOverride`,c.__docgenInfo={description:`Компонент предназначен для перебивания одного из значений контекста.`,displayName:`ConfigProviderOverride`,filePath:`/Users/i.mirdzhamolov/projects/github-VKCOM/VKUI/packages/vkui/src/components/ConfigProvider/ConfigProviderOverride.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`vkui/src/components/ConfigProvider/ConfigProviderOverride.tsx`,name:`ConfigProviderOverrideProps`}],description:`Содержимое.`,name:`children`,parent:{fileName:`vkui/src/components/ConfigProvider/ConfigProviderOverride.tsx`,name:`ConfigProviderOverrideProps`},required:!0,tags:{},type:{name:`ReactNode`}},isWebView:{defaultValue:null,declarations:[{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`}],description:`Подсказывает приложению, обёрнутому в \`ConfigProvider\`, где открыто приложение: внутри webview или в мобильном браузере.

В условиях когда:
- \`isWebView={true}\`
- platform="ios".

Для компонента \`View\` включается возможность навигации через смахивание.`,name:`isWebView`,parent:{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`},required:!1,tags:{},type:{name:`boolean`}},hasCustomPanelHeaderAfter:{defaultValue:null,declarations:[{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`}],description:'При `true` слот `after` у `PanelHeader` игнорируется под размещение пользовательского\n"плавающего" элемента (например, панель управления webview).\n\n> Note: Правило не распространяется на `PanelHeader` внутри модальных окон, предоставляемых\n> библиотекой.',name:`hasCustomPanelHeaderAfter`,parent:{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`},required:!1,tags:{},type:{name:`boolean`}},customPanelHeaderAfterMinWidth:{defaultValue:{value:`90`},declarations:[{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`}],description:'Задаёт необходимый минимальную ширину слота `after` в `PanelHeader` под пользовательский\n"плавающий" элемент (например, ширина панели управления webview).\n\nУчитывается только при `hasCustomPanelHeaderAfter={true}` (см документацию `hasCustomPanelHeaderAfter`).',name:`customPanelHeaderAfterMinWidth`,parent:{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`},required:!1,tags:{default:`90`},type:{name:`string | number`}},colorScheme:{defaultValue:null,declarations:[{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`}],description:"Тип цветовой схемы – `light` или `dark`.",name:`colorScheme`,parent:{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`},required:!1,tags:{},type:{name:`enum`,raw:`ColorSchemeType`,value:[{value:`"dark"`},{value:`"light"`}]}},transitionMotionEnabled:{defaultValue:null,declarations:[{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`}],description:"Включена ли анимация переходов между экранами в `Root` и `View`.",name:`transitionMotionEnabled`,parent:{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`},required:!1,tags:{},type:{name:`boolean`}},platform:{defaultValue:null,declarations:[{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`}],description:`Платформа.`,name:`platform`,parent:{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`},required:!1,tags:{},type:{name:`enum`,raw:`PlatformType`,value:[{value:`"android"`},{value:`"ios"`},{value:`"vkcom"`}]}},tokensClassNames:{defaultValue:{value:`{
  android: {
    light: 'vkui--vkBase--light',
    dark: 'vkui--vkBase--dark',
  },
  ios: {
    light: 'vkui--vkIOS--light',
    dark: 'vkui--vkIOS--dark',
  },
  vkcom: {
    light: 'vkui--vkCom--light',
    dark: 'vkui--vkCom--dark',
  }
}`},declarations:[{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`}],description:"CSS классы, определяющие набор токенов.\n\n- Используйте `{ light?: '<css_class>', dark?: '<css_class>' }`, чтобы задать для всех платформ одинаковый набор токенов для светлой и/или тёмной тем.\n- Используйте `{ [key in 'android' | 'ios' | 'vkcom']?: '<css_class>' }`, чтобы задать для одной или нескольких платформ свой набор токенов.",name:`tokensClassNames`,parent:{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`},required:!1,tags:{default:`{
  android: {
    light: 'vkui--vkBase--light',
    dark: 'vkui--vkBase--dark',
  },
  ios: {
    light: 'vkui--vkIOS--light',
    dark: 'vkui--vkIOS--dark',
  },
  vkcom: {
    light: 'vkui--vkCom--light',
    dark: 'vkui--vkCom--dark',
  }
}`},type:{name:`TokensClassNames`}},locale:{defaultValue:null,declarations:[{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`}],description:`Строка с языковой меткой BCP 47.`,name:`locale`,parent:{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`},required:!1,tags:{},type:{name:`string`}},direction:{defaultValue:{value:"Определяется автоматически в зависимости от значения атрибута `dir` установленного на `body` страницы"},declarations:[{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`}],description:`Направление контента.

При использовании определенного значения, важно установить атрибут \`dir\` с таким же значением либо на дочерний элемент,
либо на все страницу в целом.`,name:`direction`,parent:{fileName:`vkui/src/components/ConfigProvider/ConfigProviderContext.tsx`,name:`ConfigProviderContextInterface`},required:!1,tags:{default:"Определяется автоматически в зависимости от значения атрибута `dir` установленного на `body` страницы"},type:{name:`enum`,raw:`Direction`,value:[{value:`"ltr"`},{value:`"rtl"`}]}}},tags:{}}}catch{}}));export{u as n,c as t};