import{V as x,r as t,j as e,g as u,P as h}from"./iframe-Bz8JpgqB.js";import{D as F,C as V}from"./constants-DdkjnEgz.js";import{b as U}from"./mock-BznupqUM.js";import{c as W}from"./createStoryParameters-CcwS40kl.js";import{A as I}from"./Alert-uwW9S9_Q.js";import{A as _}from"./Avatar-Djz9XYEE.js";import{C as j}from"./CellButton-oehxjG6R.js";import{C as z}from"./ConfigProviderOverride-iG9hzCRC.js";import{D as A}from"./Div-1ywPeYj4.js";import{F as E}from"./FormItem-DRxlcz22.js";import{G}from"./Gallery-BGMrQLsM.js";import{G as s}from"./Group-DTDZzv4b.js";import{H as g}from"./Header-C4lsCBoI.js";import{H as D}from"./HorizontalCell-Bjn7uI4r.js";import{H as O}from"./HorizontalScroll-9uf4ffgA.js";import{I as M}from"./Input-CrKAm0Yy.js";import{P as S}from"./PanelHeaderBack-BDRvyIaB.js";import{P as b}from"./Placeholder-DlD4On3o.js";import"./preload-helper-Dp1pzeXC.js";import"./AppRootPortal-BfEQGkF-.js";import"./useColorScheme-DVyOIIkN.js";import"./createPortal-5lj2qVdy.js";import"./ColorSchemeProvider-CDk5uzXv.js";import"./PopoutWrapper-B19rbjAy.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-DIShpTb8.js";import"./InputUtils-C36z3TAr.js";import"./FocusTrap-Bu8gLkMP.js";import"./useFocusTrap-D3h3c3Xu.js";import"./useMutationObserver-DIWA9g1F.js";import"./IconButton-SCSZUFVl.js";import"./Tappable-DGSycWIS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C8sAptP9.js";import"./useFocusVisible-DI7o-w5D.js";import"./useFocusVisibleClassName-DeYZ6Bju.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-Civmtkn4.js";import"./ModalDismissButton-FOJDk1Uc.js";import"./ModalOutsideButton-DBYapytr.js";import"./cancel_20-D-A17ZjK.js";import"./SvgIconRootV2-PiPT7FW9.js";import"./_object_spread_props-DRD4qu7p.js";import"./Button-BGNgkvlW.js";import"./Spinner-BdNNxg7b.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Caption-DWsz_D6l.js";import"./Footnote-CXG5ZQyY.js";import"./Title-D2iv6BIz.js";import"./useCSSKeyframesAnimationController-Ca15N8Ef.js";import"./ImageBase-ClmHHqwk.js";import"./ImageBaseBadge-UmCFkqsi.js";import"./useFocusWithin-DoazkeVF.js";import"./useIsClient-BRGUFVjE.js";import"./useConfigDirection-1j4RIbQo.js";import"./online_mobile_12-BjrG8SuA.js";import"./helpers-QklJbEbU.js";import"./SimpleCell-BZ1hDoNl.js";import"./Headline-DOUR4p3R.js";import"./Subhead-CQ9JxnC_.js";import"./chevron_compact_right_24-DCACY6v7.js";import"./chevron_16-r7AvM1qe.js";import"./Removable-BGzPp3kl.js";import"./children-CZEp9rCJ.js";import"./useGlobalEventListener-CHrHveT6.js";import"./useEventListener-D6V4uhmf.js";import"./cancel_24-RdK71gIA.js";import"./FormItemTopLabel-CUhRpH8p.js";import"./fx-kodWYGM0.js";import"./ScrollArrow-DFGwcOys.js";import"./chevron_24-BadJq5fS.js";import"./getValueByKey-D-251Osc.js";import"./Paragraph-COWk_h1U.js";import"./FormField-DdIob4n7.js";import"./UnstyledTextField-59KMAKqC.js";import"./AdaptiveIconRenderer-Dqx16JeB.js";import"./PanelHeaderButton-wyBE9soL.js";import"./chevron_left_outline_28-DOBdgFtc.js";import"./chevron_left_outline_20-Dck12Yqu.js";const Pt={title:"Navigation/View",component:x,parameters:W("View",V,F),tags:["Навигация"]},L=({onProfileClick:o})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{children:"Main"}),e.jsx(s,{children:e.jsx(j,{onClick:o,children:"Профиль"})})]}),T=({onSettingsClick:o,onBack:r})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(S,{onClick:r}),children:"Профиль"}),e.jsxs(s,{children:[e.jsx(b,{children:"Теперь свайпните от левого края направо, чтобы вернуться"}),e.jsx(A,{style:{height:50,background:"#eee"},"data-vkui-swipe-back":!1,children:"Здесь свайпбек отключен"})]}),e.jsx(s,{children:e.jsx(j,{onClick:o,children:"Настройки"})}),e.jsx(s,{header:e.jsx(g,{children:"Gallery"}),description:"Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)",children:e.jsxs(G,{slideWidth:"90%",bullets:"dark",children:[e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),e.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"}}),e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})}),e.jsx(s,{header:e.jsx(g,{children:"HorizontalScroll"}),description:"Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю",children:e.jsx(O,{children:U(15).map(i=>e.jsx(D,{size:"s",title:i.first_name,children:e.jsx(_,{size:56,src:i.photo_100})},i.id))})})]}),X=({name:o,onChangeName:r,onBack:i})=>{const p=t.useCallback(a=>{r(a.target.value.trim())},[r]);return e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(S,{onClick:i}),children:"Настройки"}),e.jsxs(s,{children:[e.jsx(b,{children:"Пример с блокированием свайпбека пока не будет выполнено условие"}),e.jsx(E,{htmlFor:"name",top:"Имя",children:e.jsx(M,{id:"name",value:o,onChange:p})})]})]})},m={render:function(){const[r,i]=t.useState(["main"]),p=r[r.length-1],a=t.useCallback(n=>{i(f=>[...f,n])},[]),l=t.useCallback(()=>{i(n=>n.slice(0,-1))},[]),y=t.useCallback(()=>a("profile"),[a]),B=t.useCallback(()=>a("settings"),[a]),[d,N]=t.useState(""),[R,k]=t.useState(null),c=t.useCallback(()=>d!==""?!0:(k(e.jsx(I,{title:"Поле Имя не заполнено",description:"Пожалуйста, заполните его.",onClose:()=>k(null)})),!1),[d]),w=t.useCallback(n=>{if(n==="settings")return c()?void 0:"prevent"},[c]),H=t.useCallback(()=>{c()&&l()},[c,l]);return e.jsxs(z,{platform:"ios",isWebView:!0,children:[e.jsxs(x,{history:r,activePanel:p,onSwipeBackStart:w,onSwipeBack:l,children:[e.jsx(u,{id:"main",children:e.jsx(L,{onProfileClick:y})}),e.jsx(u,{id:"profile",children:e.jsx(T,{onSettingsClick:B,onBack:l})}),e.jsx(u,{id:"settings",children:e.jsx(X,{name:d,onChangeName:N,onBack:H})})]}),R]})}};var C,P,v;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
