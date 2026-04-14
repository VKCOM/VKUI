import{n as e}from"./chunk-BneVvdWh.js";import{Da as t,Ea as n,Ta as r,wa as i,yo as a}from"./iframe-lhb8_BzR.js";function o({children:e,...r}){let a=t({...n(),...r});return(0,s.jsx)(i.Provider,{value:a,children:e})}var s,c=e((()=>{r(),s=a();try{o.displayName=`ConfigProviderOverride`,o.__docgenInfo={description:`Компонент предназначен для перебивания одного из значений контекста.`,displayName:`ConfigProviderOverride`,props:{children:{defaultValue:null,description:`Содержимое.`,name:`children`,required:!0,type:{name:`ReactNode`}},isWebView:{defaultValue:null,description:`Подсказывает приложению, обёрнутому в \`ConfigProvider\`, где открыто приложение: внутри webview или в мобильном браузере.

В условиях когда:
- \`isWebView={true}\`
- platform="ios".

Для компонента \`View\` включается возможность навигации через смахивание.`,name:`isWebView`,required:!1,type:{name:`boolean`}},hasCustomPanelHeaderAfter:{defaultValue:null,description:'При `true` слот `after` у `PanelHeader` игнорируется под размещение пользовательского\n"плавающего" элемента (например, панель управления webview).\n\n> Note: Правило не распространяется на `PanelHeader` внутри модальных окон, предоставляемых\n> библиотекой.',name:`hasCustomPanelHeaderAfter`,required:!1,type:{name:`boolean`}},customPanelHeaderAfterMinWidth:{defaultValue:{value:`90`},description:'Задаёт необходимый минимальную ширину слота `after` в `PanelHeader` под пользовательский\n"плавающий" элемент (например, ширина панели управления webview).\n\nУчитывается только при `hasCustomPanelHeaderAfter={true}` (см документацию `hasCustomPanelHeaderAfter`).',name:`customPanelHeaderAfterMinWidth`,required:!1,type:{name:`string | number`}},colorScheme:{defaultValue:null,description:"Тип цветовой схемы – `light` или `dark`.",name:`colorScheme`,required:!1,type:{name:`ColorSchemeType`}},transitionMotionEnabled:{defaultValue:null,description:"Включена ли анимация переходов между экранами в `Root` и `View`.",name:`transitionMotionEnabled`,required:!1,type:{name:`boolean`}},platform:{defaultValue:null,description:`Платформа.`,name:`platform`,required:!1,type:{name:`PlatformType`}},tokensClassNames:{defaultValue:{value:`{
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
}`},description:"CSS классы, определяющие набор токенов.\n\n- Используйте `{ light?: '<css_class>', dark?: '<css_class>' }`, чтобы задать для всех платформ одинаковый набор токенов для светлой и/или тёмной тем.\n- Используйте `{ [key in 'android' | 'ios' | 'vkcom']?: '<css_class>' }`, чтобы задать для одной или нескольких платформ свой набор токенов.",name:`tokensClassNames`,required:!1,type:{name:`TokensClassNames`}},locale:{defaultValue:null,description:`Строка с языковой меткой BCP 47.`,name:`locale`,required:!1,type:{name:`string`}},direction:{defaultValue:{value:"Определяется автоматически в зависимости от значения атрибута `dir` установленного на `body` страницы"},description:`Направление контента.

При использовании определенного значения, важно установить атрибут \`dir\` с таким же значением либо на дочерний элемент,
либо на все страницу в целом.`,name:`direction`,required:!1,type:{name:`Direction`}}}}}catch{}}));export{c as n,o as t};