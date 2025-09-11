import{V as x,r as t,j as e,g as u,P as h}from"./iframe-DfeTZ_Fw.js";import{D as F,C as V}from"./constants-DdkjnEgz.js";import{b as U}from"./mock-BznupqUM.js";import{c as W}from"./createStoryParameters-CcwS40kl.js";import{A as I}from"./Alert-DJQcY-Ae.js";import{A as _}from"./Avatar-BtGg7nD-.js";import{C as j}from"./CellButton-CbR1aba2.js";import{C as z}from"./ConfigProviderOverride-BwkUJRE0.js";import{D as A}from"./Div-DWHB9CiA.js";import{F as E}from"./FormItem-D-N8Ap2g.js";import{G}from"./Gallery-DLuxhYHZ.js";import{G as s}from"./Group-ChVeS0N8.js";import{H as g}from"./Header-Bn3EvT51.js";import{H as D}from"./HorizontalCell-Dc340nWk.js";import{H as O}from"./HorizontalScroll-CanoaL7R.js";import{I as M}from"./Input-DtG3W5cE.js";import{P as S}from"./PanelHeaderBack-CqhtIpSs.js";import{P as b}from"./Placeholder-DqIiFZ2t.js";import"./preload-helper-Dp1pzeXC.js";import"./AppRootPortal-Cf-1kRil.js";import"./useColorScheme-BGgcYhBu.js";import"./createPortal-B5-CgryZ.js";import"./ColorSchemeProvider-Ct7XlnnY.js";import"./PopoutWrapper-CvNJO4aD.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-Bgm0pOnu.js";import"./InputUtils-C-I8ensD.js";import"./FocusTrap-8k_1peoT.js";import"./useFocusTrap-MVv2Y8kh.js";import"./useMutationObserver-CEGwROLs.js";import"./IconButton-CE4ifGYW.js";import"./Tappable-BBWke1IE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Bpx6dgEO.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-BuJles22.js";import"./ModalDismissButton-BymBUXrE.js";import"./ModalOutsideButton--rRhEehI.js";import"./cancel_20-Cahc_esy.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./Button-CYtH28qE.js";import"./Spinner-Crblzylq.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Caption-hDjGO988.js";import"./Footnote-ivEbNXOe.js";import"./Title-BA2sPfYi.js";import"./useCSSKeyframesAnimationController-Cm7x44xW.js";import"./ImageBase-DEZsD6YW.js";import"./ImageBaseBadge-CFGlxEKL.js";import"./useFocusWithin-UgE2lzew.js";import"./useIsClient-D3QWm6mk.js";import"./useConfigDirection-CwjKsiym.js";import"./online_mobile_12-B0vcMB8K.js";import"./helpers-QklJbEbU.js";import"./SimpleCell-BuvX657b.js";import"./Headline-BbT30PkZ.js";import"./Subhead-BkL8qoJh.js";import"./chevron_compact_right_24-zZ-JxscM.js";import"./chevron_16-w2grljdX.js";import"./Removable-RvrdKJgI.js";import"./children-DctjNuEY.js";import"./useGlobalEventListener-BDSHjBL9.js";import"./useEventListener-DdaI75sW.js";import"./cancel_24-XhVC2QBS.js";import"./FormItemTopLabel-C8r0gTQK.js";import"./fx-6NXl3I1U.js";import"./ScrollArrow-DLZN2wVh.js";import"./chevron_24-k76nBf5R.js";import"./getValueByKey-D-251Osc.js";import"./Paragraph-B0joEyCz.js";import"./FormField-BLz8UzFa.js";import"./UnstyledTextField-BfAYEUe9.js";import"./AdaptiveIconRenderer-S9G6ZqOh.js";import"./PanelHeaderButton-CcY6eXfT.js";import"./chevron_left_outline_28-bGj1lNJw.js";import"./chevron_left_outline_20-BH5O8FRo.js";const Pt={title:"Navigation/View",component:x,parameters:W("View",V,F),tags:["Навигация"]},L=({onProfileClick:o})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{children:"Main"}),e.jsx(s,{children:e.jsx(j,{onClick:o,children:"Профиль"})})]}),T=({onSettingsClick:o,onBack:r})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(S,{onClick:r}),children:"Профиль"}),e.jsxs(s,{children:[e.jsx(b,{children:"Теперь свайпните от левого края направо, чтобы вернуться"}),e.jsx(A,{style:{height:50,background:"#eee"},"data-vkui-swipe-back":!1,children:"Здесь свайпбек отключен"})]}),e.jsx(s,{children:e.jsx(j,{onClick:o,children:"Настройки"})}),e.jsx(s,{header:e.jsx(g,{children:"Gallery"}),description:"Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)",children:e.jsxs(G,{slideWidth:"90%",bullets:"dark",children:[e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),e.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"}}),e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})}),e.jsx(s,{header:e.jsx(g,{children:"HorizontalScroll"}),description:"Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю",children:e.jsx(O,{children:U(15).map(i=>e.jsx(D,{size:"s",title:i.first_name,children:e.jsx(_,{size:56,src:i.photo_100})},i.id))})})]}),X=({name:o,onChangeName:r,onBack:i})=>{const p=t.useCallback(a=>{r(a.target.value.trim())},[r]);return e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(S,{onClick:i}),children:"Настройки"}),e.jsxs(s,{children:[e.jsx(b,{children:"Пример с блокированием свайпбека пока не будет выполнено условие"}),e.jsx(E,{htmlFor:"name",top:"Имя",children:e.jsx(M,{id:"name",value:o,onChange:p})})]})]})},m={render:function(){const[r,i]=t.useState(["main"]),p=r[r.length-1],a=t.useCallback(n=>{i(f=>[...f,n])},[]),l=t.useCallback(()=>{i(n=>n.slice(0,-1))},[]),y=t.useCallback(()=>a("profile"),[a]),B=t.useCallback(()=>a("settings"),[a]),[d,N]=t.useState(""),[R,k]=t.useState(null),c=t.useCallback(()=>d!==""?!0:(k(e.jsx(I,{title:"Поле Имя не заполнено",description:"Пожалуйста, заполните его.",onClose:()=>k(null)})),!1),[d]),w=t.useCallback(n=>{if(n==="settings")return c()?void 0:"prevent"},[c]),H=t.useCallback(()=>{c()&&l()},[c,l]);return e.jsxs(z,{platform:"ios",isWebView:!0,children:[e.jsxs(x,{history:r,activePanel:p,onSwipeBackStart:w,onSwipeBack:l,children:[e.jsx(u,{id:"main",children:e.jsx(L,{onProfileClick:y})}),e.jsx(u,{id:"profile",children:e.jsx(T,{onSettingsClick:B,onBack:l})}),e.jsx(u,{id:"settings",children:e.jsx(X,{name:d,onChangeName:N,onBack:H})})]}),R]})}};var C,P,v;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(P=m.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};const vt=["SwipeBlockExample"];export{m as SwipeBlockExample,vt as __namedExportsOrder,Pt as default};
