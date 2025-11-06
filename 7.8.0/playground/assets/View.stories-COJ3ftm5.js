import{V as C,r as t,j as e,g as u,P as h}from"./iframe-F_0bvJrc.js";import{D as R,C as w}from"./constants-DdkjnEgz.js";import{b as H}from"./mock-CiudtyON.js";import{c as F}from"./createStoryParameters-CcwS40kl.js";import{A as V}from"./Alert-BDjWR03I.js";import{A as U}from"./Avatar-Bsv1rUL7.js";import{C as P}from"./CellButton-BxP4Yvnz.js";import{C as W}from"./ConfigProviderOverride-DP-FN5VZ.js";import{D as I}from"./Div-DUAnEDrF.js";import{F as _}from"./FormItem-CR1ltdco.js";import{G as z}from"./Gallery-BVezUbmx.js";import{G as s}from"./Group-DWRY0NV1.js";import{H as g}from"./Header-sBoK2CfE.js";import{H as A}from"./HorizontalCell-MLUZT0V4.js";import{H as E}from"./HorizontalScroll-lefGwdwW.js";import{I as G}from"./Input-C5xpv7RL.js";import{P as v}from"./PanelHeaderBack-X1X-pFnY.js";import{P as x}from"./Placeholder-DnYwtbnt.js";import"./preload-helper-PPVm8Dsz.js";import"./AppRootPortal-C5ZjlUn-.js";import"./useColorScheme-CMuS3Rce.js";import"./createPortal-3kBuG0xS.js";import"./ColorSchemeProvider-CBhvh-QL.js";import"./PopoutWrapper-CG7Xclrq.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-Dagdftr6.js";import"./InputUtils-CneTbOko.js";import"./FocusTrap-CatbEh5x.js";import"./useFocusTrap-D3fDlwS6.js";import"./useMutationObserver-BmpmDaTi.js";import"./IconButton-BHFFi_8a.js";import"./Tappable-DJ3rCQkY.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B4aTO_qb.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-CRrL_L2y.js";import"./ModalDismissButton-Dge0cwCb.js";import"./ModalOutsideButton-BLPa73gQ.js";import"./cancel_20-DmJt3fLl.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./Button-OQORbYpv.js";import"./Spinner-D7kEFt-1.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Caption-DLbzsWHi.js";import"./Footnote-DfPFidfa.js";import"./Title-BNzhyC_D.js";import"./useCSSKeyframesAnimationController-DgQ7t2tU.js";import"./ImageBase-NzuhIIti.js";import"./ImageBaseBadge-Dx1ll0L6.js";import"./useFocusWithin-CDt5X1od.js";import"./useIsClient-CSY1-Ql9.js";import"./useConfigDirection-poWhsvcV.js";import"./online_mobile_12-DoUW3apm.js";import"./helpers-QklJbEbU.js";import"./SimpleCell-DW3d0xtM.js";import"./Headline-B-xJiW6B.js";import"./Subhead-CtWFTcAD.js";import"./chevron_compact_right_24-CTggJSQ-.js";import"./chevron_16--5zekb9K.js";import"./Removable-CQf4vu_q.js";import"./children-CfV6Kr3n.js";import"./useGlobalEventListener-Y3RIl-_k.js";import"./useEventListener-DlnjWBsX.js";import"./cancel_24-CEwNt985.js";import"./FormItemTopLabel-DG5nnJu-.js";import"./fx-BGp5lg0h.js";import"./ScrollArrow-BisCq_QF.js";import"./chevron_24-B5BZQg8T.js";import"./getValueByKey-D-251Osc.js";import"./Paragraph-DpqDuxuA.js";import"./FormField-Dkyvpq47.js";import"./UnstyledTextField-odxkRx3q.js";import"./AdaptiveIconRenderer-B_n2KyC-.js";import"./PanelHeaderButton-CH8QzJHV.js";import"./chevron_left_outline_28-Cihnbsno.js";import"./chevron_left_outline_20-DWHaa5vd.js";const ft={title:"Navigation/View",component:C,parameters:F("View",w,R),tags:["Навигация"]},D=({onProfileClick:o})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{children:"Main"}),e.jsx(s,{children:e.jsx(P,{onClick:o,children:"Профиль"})})]}),O=({onSettingsClick:o,onBack:r})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(v,{onClick:r}),children:"Профиль"}),e.jsxs(s,{children:[e.jsx(x,{children:"Теперь свайпните от левого края направо, чтобы вернуться"}),e.jsx(I,{style:{height:50,background:"#eee"},"data-vkui-swipe-back":!1,children:"Здесь свайпбек отключен"})]}),e.jsx(s,{children:e.jsx(P,{onClick:o,children:"Настройки"})}),e.jsx(s,{header:e.jsx(g,{children:"Gallery"}),description:"Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)",children:e.jsxs(z,{slideWidth:"90%",bullets:"dark",children:[e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),e.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"}}),e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})}),e.jsx(s,{header:e.jsx(g,{children:"HorizontalScroll"}),description:"Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю",children:e.jsx(E,{children:H(15).map(i=>e.jsx(A,{size:"s",title:i.first_name,children:e.jsx(U,{size:56,src:i.photo_100})},i.id))})})]}),M=({name:o,onChangeName:r,onBack:i})=>{const p=t.useCallback(a=>{r(a.target.value.trim())},[r]);return e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(v,{onClick:i}),children:"Настройки"}),e.jsxs(s,{children:[e.jsx(x,{children:"Пример с блокированием свайпбека пока не будет выполнено условие"}),e.jsx(_,{htmlFor:"name",top:"Имя",children:e.jsx(G,{id:"name",value:o,onChange:p})})]})]})},m={render:function(){const[r,i]=t.useState(["main"]),p=r[r.length-1],a=t.useCallback(n=>{i(f=>[...f,n])},[]),l=t.useCallback(()=>{i(n=>n.slice(0,-1))},[]),j=t.useCallback(()=>a("profile"),[a]),S=t.useCallback(()=>a("settings"),[a]),[d,b]=t.useState(""),[y,k]=t.useState(null),c=t.useCallback(()=>d!==""?!0:(k(e.jsx(V,{title:"Поле Имя не заполнено",description:"Пожалуйста, заполните его.",onClose:()=>k(null)})),!1),[d]),B=t.useCallback(n=>{if(n==="settings")return c()?void 0:"prevent"},[c]),N=t.useCallback(()=>{c()&&l()},[c,l]);return e.jsxs(W,{platform:"ios",isWebView:!0,children:[e.jsxs(C,{history:r,activePanel:p,onSwipeBackStart:B,onSwipeBack:l,children:[e.jsx(u,{id:"main",children:e.jsx(D,{onProfileClick:j})}),e.jsx(u,{id:"profile",children:e.jsx(O,{onSettingsClick:S,onBack:l})}),e.jsx(u,{id:"settings",children:e.jsx(M,{name:d,onChangeName:b,onBack:N})})]}),y]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [history, setHistory] = React.useState(['main']);
    const activePanel = history[history.length - 1];
    const go = React.useCallback((panel: string) => {
      setHistory(prevHistory => [...prevHistory, panel]);
    }, []);
    const goBack = React.useCallback(() => {
      setHistory(prevHistory => prevHistory.slice(0, -1));
    }, []);
    const handleProfileClick = React.useCallback(() => go('profile'), [go]);
    const handleSettingsClick = React.useCallback(() => go('settings'), [go]);
    const [userName, setUserName] = React.useState('');
    const [popoutWithRestriction, setPopoutWithRestriction] = React.useState<React.ReactNode | null>(null);
    const validateUserName = React.useCallback(() => {
      if (userName !== '') {
        return true;
      }
      setPopoutWithRestriction(<Alert title="Поле Имя не заполнено" description="Пожалуйста, заполните его." onClose={() => setPopoutWithRestriction(null)} />);
      return false;
    }, [userName]);
    const handleSwipeBackStartForPreventIfNeeded = React.useCallback((activePanel: string | null) => {
      if (activePanel === 'settings') {
        const isValid = validateUserName();
        return isValid ? undefined : 'prevent';
      }
      return;
    }, [validateUserName]);
    const handleBackForPreventIfNeeded = React.useCallback(() => {
      if (validateUserName()) {
        goBack();
      }
    }, [validateUserName, goBack]);
    return <ConfigProviderOverride platform="ios" isWebView>
        <View history={history} activePanel={activePanel} onSwipeBackStart={handleSwipeBackStartForPreventIfNeeded} onSwipeBack={goBack}>
          <Panel id="main">
            <MainPanelContent onProfileClick={handleProfileClick} />
          </Panel>
          <Panel id="profile">
            <ProfilePanelContent onSettingsClick={handleSettingsClick} onBack={goBack} />
          </Panel>
          <Panel id="settings">
            <SettingsPanelContent name={userName} onChangeName={setUserName} onBack={handleBackForPreventIfNeeded} />
          </Panel>
        </View>
        {popoutWithRestriction}
      </ConfigProviderOverride>;
  }
}`,...m.parameters?.docs?.source}}};const gt=["SwipeBlockExample"];export{m as SwipeBlockExample,gt as __namedExportsOrder,ft as default};
