import{V as x,r as t,j as e,h as u,P as h}from"./iframe-BzXYREd1.js";import{D as F,C as V}from"./constants-DdkjnEgz.js";import{b as U}from"./mock-BznupqUM.js";import{c as W}from"./createStoryParameters-CcwS40kl.js";import{A as I}from"./Alert-CaLwWHTq.js";import{A as _}from"./Avatar-oYUglsPx.js";import{C as j}from"./CellButton-CoApcaAk.js";import{C as z}from"./ConfigProviderOverride-Cadcpf05.js";import{D as A}from"./Div-_rflgTc6.js";import{F as E}from"./FormItem-CYWBjSDx.js";import{G}from"./Gallery-B1QKcErA.js";import{G as s}from"./Group-BiC9EI5C.js";import{H as g}from"./Header-d9lL2f8w.js";import{H as D}from"./HorizontalCell-8fpKmUQd.js";import{H as O}from"./HorizontalScroll-DlJP8Vm-.js";import{I as M}from"./Input-Vc2MweMx.js";import{P as S}from"./PanelHeaderBack-D2vaAK4v.js";import{P as b}from"./Placeholder-BF-TXYeJ.js";import"./AppRootPortal-DalSlULG.js";import"./useColorScheme-BFL8-8ar.js";import"./createPortal-udDNqKIg.js";import"./ColorSchemeProvider-CpCL9cxM.js";import"./PopoutWrapper-eGA89PZg.js";import"./react_utils-CSZjvU4X.js";import"./useAdaptivityWithJSMediaQueries-BW0q6kd1.js";import"./InputUtils-DULFm0M2.js";import"./FocusTrap-BL9uWNnt.js";import"./useFocusTrap-Orx0aYnt.js";import"./useMutationObserver-DPiiTATP.js";import"./IconButton-DmYSjyYz.js";import"./Tappable-CEn82fQ0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DoSI9phS.js";import"./type_checkers-CVMjkZjG.js";import"./VisuallyHidden-CGoUHCA9.js";import"./ModalDismissButton-CirPmPZt.js";import"./ModalOutsideButton-Ck2y5LRp.js";import"./cancel_20-BJMQ5Fmt.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-B6ey8g7O.js";import"./Button-C3UHKLcX.js";import"./Spinner-CKaqwWiI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./Caption-DQdafhaO.js";import"./Footnote-ChYIirVi.js";import"./Title-2928E8uu.js";import"./useCSSKeyframesAnimationController-B7txIYU8.js";import"./ImageBase-D7jndpfS.js";import"./ImageBaseBadge-Ltyfjkpt.js";import"./useFocusWithin-vRJD8Q-q.js";import"./useIsClient-DE0-CiwS.js";import"./useConfigDirection-EqB_hZQh.js";import"./online_mobile_12-DqIkEPCy.js";import"./helpers-QklJbEbU.js";import"./SimpleCell-5Dhw212S.js";import"./Headline-CvUEvu-v.js";import"./Subhead-fVUucS5M.js";import"./chevron_compact_right_24-D2odf8KU.js";import"./chevron_16-BAw61TxE.js";import"./Removable-CqorhSR_.js";import"./children-Cg6pG0uN.js";import"./useGlobalEventListener-B6vpDla7.js";import"./useEventListener-BVPfg_EC.js";import"./cancel_24-CYr0_4vC.js";import"./FormItemTopLabel-DYmFh4Lc.js";import"./fx-DSeHZW6C.js";import"./ScrollArrow-CQId_Kqy.js";import"./chevron_24-BlfWBDw8.js";import"./Paragraph-IO_n1Dux.js";import"./FormField-DMycdJEz.js";import"./UnstyledTextField-CI6zCtHO.js";import"./AdaptiveIconRenderer-DQJoMb-5.js";import"./PanelHeaderButton-Tdeqy5UO.js";import"./chevron_left_outline_28-DRpK4OSC.js";import"./chevron_left_outline_20-DVvIs5zx.js";const kt={title:"Navigation/View",component:x,parameters:W("View",V,F),tags:["Навигация"]},L=({onProfileClick:o})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{children:"Main"}),e.jsx(s,{children:e.jsx(j,{onClick:o,children:"Профиль"})})]}),T=({onSettingsClick:o,onBack:r})=>e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(S,{onClick:r}),children:"Профиль"}),e.jsxs(s,{children:[e.jsx(b,{children:"Теперь свайпните от левого края направо, чтобы вернуться"}),e.jsx(A,{style:{height:50,background:"#eee"},"data-vkui-swipe-back":!1,children:"Здесь свайпбек отключен"})]}),e.jsx(s,{children:e.jsx(j,{onClick:o,children:"Настройки"})}),e.jsx(s,{header:e.jsx(g,{children:"Gallery"}),description:"Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)",children:e.jsxs(G,{slideWidth:"90%",bullets:"dark",children:[e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),e.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"}}),e.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})}),e.jsx(s,{header:e.jsx(g,{children:"HorizontalScroll"}),description:"Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю",children:e.jsx(O,{children:U(15).map(i=>e.jsx(D,{size:"s",title:i.first_name,children:e.jsx(_,{size:56,src:i.photo_100})},i.id))})})]}),X=({name:o,onChangeName:r,onBack:i})=>{const p=t.useCallback(a=>{r(a.target.value.trim())},[r]);return e.jsxs(t.Fragment,{children:[e.jsx(h,{before:e.jsx(S,{onClick:i}),children:"Настройки"}),e.jsxs(s,{children:[e.jsx(b,{children:"Пример с блокированием свайпбека пока не будет выполнено условие"}),e.jsx(E,{htmlFor:"name",top:"Имя",children:e.jsx(M,{id:"name",value:o,onChange:p})})]})]})},m={render:function(){const[r,i]=t.useState(["main"]),p=r[r.length-1],a=t.useCallback(n=>{i(f=>[...f,n])},[]),l=t.useCallback(()=>{i(n=>n.slice(0,-1))},[]),y=t.useCallback(()=>a("profile"),[a]),B=t.useCallback(()=>a("settings"),[a]),[d,N]=t.useState(""),[R,k]=t.useState(null),c=t.useCallback(()=>d!==""?!0:(k(e.jsx(I,{title:"Поле Имя не заполнено",description:"Пожалуйста, заполните его.",onClose:()=>k(null)})),!1),[d]),w=t.useCallback(n=>{if(n==="settings")return c()?void 0:"prevent"},[c]),H=t.useCallback(()=>{c()&&l()},[c,l]);return e.jsxs(z,{platform:"ios",isWebView:!0,children:[e.jsxs(x,{history:r,activePanel:p,onSwipeBackStart:w,onSwipeBack:l,children:[e.jsx(u,{id:"main",children:e.jsx(L,{onProfileClick:y})}),e.jsx(u,{id:"profile",children:e.jsx(T,{onSettingsClick:B,onBack:l})}),e.jsx(u,{id:"settings",children:e.jsx(X,{name:d,onChangeName:N,onBack:H})})]}),R]})}};var C,P,v;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(P=m.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};const ft=["SwipeBlockExample"];export{m as SwipeBlockExample,ft as __namedExportsOrder,kt as default};
