import{V as x,r as t,j as e,g as u,P as h}from"./iframe-WscSQxk_.js";import{D as F,C as V}from"./constants-DdkjnEgz.js";import{b as U}from"./mock-BznupqUM.js";import{c as W}from"./createStoryParameters-CcwS40kl.js";import{A as I}from"./Alert-DuCFxdaD.js";import{A as _}from"./Avatar-0RoHI5K7.js";import{C as j}from"./CellButton-CQqEzk-T.js";import{C as z}from"./ConfigProviderOverride-CE2xRMO6.js";import{D as A}from"./Div-CNEoUZ-D.js";import{F as E}from"./FormItem-C5jU3y7N.js";import{G}from"./Gallery-DD740k1R.js";import{G as s}from"./Group-qAlp-RAW.js";import{H as g}from"./Header-Jd3F-6_A.js";import{H as D}from"./HorizontalCell-D4uEolzJ.js";import{H as O}from"./HorizontalScroll-C_wUgCeJ.js";import{I as M}from"./Input-COvS7SZC.js";import{P as S}from"./PanelHeaderBack-AeK7ZT_w.js";import{P as b}from"./Placeholder-BaszybZR.js";import"./preload-helper-Dp1pzeXC.js";import"./AppRootPortal-99J6OfwT.js";import"./useColorScheme-C09gZSyP.js";import"./createPortal-Dh4UeMek.js";import"./ColorSchemeProvider-BohugYos.js";import"./PopoutWrapper-DR_bGOWA.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-CMDI24UO.js";import"./InputUtils-JLBJXs47.js";import"./FocusTrap-DP1KUwEU.js";import"./useFocusTrap-aPtkck9v.js";import"./useMutationObserver-3DDsDNI6.js";import"./IconButton-D66RFa5n.js";import"./Tappable-4pvQI-9h.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7ilqGtf.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-uW7N7P-s.js";import"./ModalDismissButton-BEey1U2H.js";import"./ModalOutsideButton-CKQsRC6H.js";import"./cancel_20-BlpVebiS.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./Button-C7Wah6LB.js";import"./Spinner-BOd2c3oA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Caption-wyHxTwpV.js";import"./Footnote-DadQ2vZ3.js";import"./Title-C_Gav_p7.js";import"./useCSSKeyframesAnimationController-DMXLtvSZ.js";import"./ImageBase-3KL0flvN.js";import"./ImageBaseBadge-wA-vnNFa.js";import"./useFocusWithin-BHVkTq3i.js";import"./useIsClient-d2y8ByAY.js";import"./useConfigDirection-f8qxYIIC.js";import"./online_mobile_12-DJlNBlPs.js";import"./helpers-QklJbEbU.js";import"./SimpleCell-tB9EhAU6.js";import"./Headline-Cv7evErM.js";import"./Subhead-Dng_N-gz.js";import"./chevron_compact_right_24-CjLRRqgU.js";import"./chevron_16-BY28eTD3.js";import"./Removable-BJhZzne5.js";import"./children-PV0P3fmv.js";import"./useGlobalEventListener-g9jun4JN.js";import"./useEventListener-DRRpeHIY.js";import"./cancel_24-DRq5Gwy2.js";import"./FormItemTopLabel-Ak2SZP--.js";import"./fx-B_Ce2UEi.js";import"./ScrollArrow-C5QKXXPz.js";import"./chevron_24-CIrr-ZVo.js";import"./getValueByKey-D_Dt--9h.js";import"./Paragraph-DlgzzrFx.js";import"./FormField-B19rMsk1.js";import"./UnstyledTextField-BTqt-tQ0.js";import"./AdaptiveIconRenderer-Dik8tLCs.js";import"./PanelHeaderButton-Bcby9WCn.js";import"./chevron_left_outline_28-NONp-6CY.js";import"./chevron_left_outline_20-BU3TJ2Cl.js";const Ct={title:"Navigation/View",component:x,parameters:W("View",V,F),tags:["Навигация"]},L=({onProfileClick:o})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{children:"Main"}),e.jsx(s,{children:e.jsx(j,{onClick:o,children:"Профиль"})})]}),T=({onSettingsClick:o,onBack:r})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(S,{onClick:r}),children:"Профиль"}),e.jsxs(s,{children:[e.jsx(b,{children:"Теперь свайпните от левого края направо, чтобы вернуться"}),e.jsx(A,{style:{height:50,background:"#eee"},"data-vkui-swipe-back":!1,children:"Здесь свайпбек отключен"})]}),e.jsx(s,{children:e.jsx(j,{onClick:o,children:"Настройки"})}),e.jsx(s,{header:e.jsx(g,{children:"Gallery"}),description:"Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)",children:e.jsxs(G,{slideWidth:"90%",bullets:"dark",children:[e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),e.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"}}),e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})}),e.jsx(s,{header:e.jsx(g,{children:"HorizontalScroll"}),description:"Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю",children:e.jsx(O,{children:U(15).map(i=>e.jsx(D,{size:"s",title:i.first_name,children:e.jsx(_,{size:56,src:i.photo_100})},i.id))})})]}),X=({name:o,onChangeName:r,onBack:i})=>{const p=t.useCallback(a=>{r(a.target.value.trim())},[r]);return e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(S,{onClick:i}),children:"Настройки"}),e.jsxs(s,{children:[e.jsx(b,{children:"Пример с блокированием свайпбека пока не будет выполнено условие"}),e.jsx(E,{htmlFor:"name",top:"Имя",children:e.jsx(M,{id:"name",value:o,onChange:p})})]})]})},m={render:function(){const[r,i]=t.useState(["main"]),p=r[r.length-1],a=t.useCallback(n=>{i(f=>[...f,n])},[]),l=t.useCallback(()=>{i(n=>n.slice(0,-1))},[]),y=t.useCallback(()=>a("profile"),[a]),B=t.useCallback(()=>a("settings"),[a]),[d,N]=t.useState(""),[R,k]=t.useState(null),c=t.useCallback(()=>d!==""?!0:(k(e.jsx(I,{title:"Поле Имя не заполнено",description:"Пожалуйста, заполните его.",onClose:()=>k(null)})),!1),[d]),w=t.useCallback(n=>{if(n==="settings")return c()?void 0:"prevent"},[c]),H=t.useCallback(()=>{c()&&l()},[c,l]);return e.jsxs(z,{platform:"ios",isWebView:!0,children:[e.jsxs(x,{history:r,activePanel:p,onSwipeBackStart:w,onSwipeBack:l,children:[e.jsx(u,{id:"main",children:e.jsx(L,{onProfileClick:y})}),e.jsx(u,{id:"profile",children:e.jsx(T,{onSettingsClick:B,onBack:l})}),e.jsx(u,{id:"settings",children:e.jsx(X,{name:d,onChangeName:N,onBack:H})})]}),R]})}};var C,P,v;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(P=m.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};const Pt=["SwipeBlockExample"];export{m as SwipeBlockExample,Pt as __namedExportsOrder,Ct as default};
