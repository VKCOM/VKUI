import{V as x,r as t,j as e,g as u,P as h}from"./iframe-D9ctG7Ns.js";import{D as F,C as V}from"./constants-DdkjnEgz.js";import{b as U}from"./mock-BznupqUM.js";import{c as W}from"./createStoryParameters-CcwS40kl.js";import{A as I}from"./Alert-DZNYnW8P.js";import{A as _}from"./Avatar-DKm75c9w.js";import{C as j}from"./CellButton-gL_L0Ag8.js";import{C as z}from"./ConfigProviderOverride-BJZJ1bpA.js";import{D as A}from"./Div-BHUjwCTp.js";import{F as E}from"./FormItem-WqX-ap_M.js";import{G}from"./Gallery-Co2VcJhP.js";import{G as s}from"./Group-BG1uXLvs.js";import{H as g}from"./Header-DSbXuSQf.js";import{H as D}from"./HorizontalCell-DSKfQSOt.js";import{H as O}from"./HorizontalScroll-B9UZRner.js";import{I as M}from"./Input-BFLTV-Rt.js";import{P as S}from"./PanelHeaderBack-DstNbd00.js";import{P as b}from"./Placeholder-BxtPHBZC.js";import"./preload-helper-Dp1pzeXC.js";import"./AppRootPortal-DZcFVsJe.js";import"./useColorScheme-D5oaSQC0.js";import"./createPortal-DiDQqqFD.js";import"./ColorSchemeProvider-42MwyphL.js";import"./PopoutWrapper-BPeJiLH3.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-CVLN_kqX.js";import"./InputUtils-dk1yVFOH.js";import"./FocusTrap-CXlwguwW.js";import"./useFocusTrap-DgL23sHD.js";import"./useMutationObserver-qTqSTRf6.js";import"./IconButton-Cu6N9yzq.js";import"./Tappable-DOmAnzcN.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-4xEXwBeB.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-XRinxkJw.js";import"./ModalDismissButton-CYnt-Som.js";import"./ModalOutsideButton-DcUelrrc.js";import"./cancel_20-DqL2mIPO.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./Button-ClDISrDv.js";import"./Spinner-CdhXnMLF.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Caption-6ObnKwfL.js";import"./Footnote-BcHikxS0.js";import"./Title-BxTWQERW.js";import"./useCSSKeyframesAnimationController-CR4p02q0.js";import"./ImageBase-qcCzGQe1.js";import"./ImageBaseBadge-C5xgoBYA.js";import"./useFocusWithin-C5Vdk2dl.js";import"./useIsClient-C6WLQkbf.js";import"./useConfigDirection-BepSmh67.js";import"./online_mobile_12-Bfp1yxmz.js";import"./helpers-QklJbEbU.js";import"./SimpleCell-CeGD-K3T.js";import"./Headline-4n2ELzS2.js";import"./Subhead-DjvqikOr.js";import"./chevron_compact_right_24-DAU9zP3f.js";import"./chevron_16-BEyzHrJY.js";import"./Removable-D8OEYYHJ.js";import"./children-O1ZDhWOu.js";import"./useGlobalEventListener-DwhKth4J.js";import"./useEventListener-UbYuQ7Ip.js";import"./cancel_24-oGe7O0m1.js";import"./FormItemTopLabel-BNFanwkm.js";import"./fx-BKsF0vYk.js";import"./ScrollArrow-DO7xq66D.js";import"./chevron_24-25kh6H2z.js";import"./getValueByKey-D_Dt--9h.js";import"./Paragraph-CL2gUbo0.js";import"./FormField-DArlX69i.js";import"./UnstyledTextField-DcT-C0zT.js";import"./AdaptiveIconRenderer-Bl0Wq8MO.js";import"./PanelHeaderButton-BFVrtQgO.js";import"./chevron_left_outline_28-DgHIucOg.js";import"./chevron_left_outline_20-C2tebWfr.js";const Ct={title:"Navigation/View",component:x,parameters:W("View",V,F),tags:["Навигация"]},L=({onProfileClick:o})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{children:"Main"}),e.jsx(s,{children:e.jsx(j,{onClick:o,children:"Профиль"})})]}),T=({onSettingsClick:o,onBack:r})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(S,{onClick:r}),children:"Профиль"}),e.jsxs(s,{children:[e.jsx(b,{children:"Теперь свайпните от левого края направо, чтобы вернуться"}),e.jsx(A,{style:{height:50,background:"#eee"},"data-vkui-swipe-back":!1,children:"Здесь свайпбек отключен"})]}),e.jsx(s,{children:e.jsx(j,{onClick:o,children:"Настройки"})}),e.jsx(s,{header:e.jsx(g,{children:"Gallery"}),description:"Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)",children:e.jsxs(G,{slideWidth:"90%",bullets:"dark",children:[e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),e.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"}}),e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})}),e.jsx(s,{header:e.jsx(g,{children:"HorizontalScroll"}),description:"Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю",children:e.jsx(O,{children:U(15).map(i=>e.jsx(D,{size:"s",title:i.first_name,children:e.jsx(_,{size:56,src:i.photo_100})},i.id))})})]}),X=({name:o,onChangeName:r,onBack:i})=>{const p=t.useCallback(a=>{r(a.target.value.trim())},[r]);return e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(S,{onClick:i}),children:"Настройки"}),e.jsxs(s,{children:[e.jsx(b,{children:"Пример с блокированием свайпбека пока не будет выполнено условие"}),e.jsx(E,{htmlFor:"name",top:"Имя",children:e.jsx(M,{id:"name",value:o,onChange:p})})]})]})},m={render:function(){const[r,i]=t.useState(["main"]),p=r[r.length-1],a=t.useCallback(n=>{i(f=>[...f,n])},[]),l=t.useCallback(()=>{i(n=>n.slice(0,-1))},[]),y=t.useCallback(()=>a("profile"),[a]),B=t.useCallback(()=>a("settings"),[a]),[d,N]=t.useState(""),[R,k]=t.useState(null),c=t.useCallback(()=>d!==""?!0:(k(e.jsx(I,{title:"Поле Имя не заполнено",description:"Пожалуйста, заполните его.",onClose:()=>k(null)})),!1),[d]),w=t.useCallback(n=>{if(n==="settings")return c()?void 0:"prevent"},[c]),H=t.useCallback(()=>{c()&&l()},[c,l]);return e.jsxs(z,{platform:"ios",isWebView:!0,children:[e.jsxs(x,{history:r,activePanel:p,onSwipeBackStart:w,onSwipeBack:l,children:[e.jsx(u,{id:"main",children:e.jsx(L,{onProfileClick:y})}),e.jsx(u,{id:"profile",children:e.jsx(T,{onSettingsClick:B,onBack:l})}),e.jsx(u,{id:"settings",children:e.jsx(X,{name:d,onChangeName:N,onBack:H})})]}),R]})}};var C,P,v;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
