import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,n as a,p as o,t as s}from"./View-CAtYcsFm.js";import{n as c,t as l}from"./PanelHeader-CBJJ63b-.js";import{n as u,t as d}from"./ConfigProviderOverride-CTUCzsdD.js";import{n as f,t as p}from"./HorizontalScroll-m10mX-rT.js";import{n as m,t as h}from"./Alert-DEDEMxdH.js";import{n as g,t as _}from"./Header-DqIdfGka.js";import{n as v,t as y}from"./Group-Bp-h8t_O.js";import{n as ee,t as b}from"./CellButton-5wPnY1kh.js";import{n as x,t as S}from"./Avatar-DoiR7xFu.js";import{n as C,t as w}from"./HorizontalCell-DX3tFRcf.js";import{n as T,t as E}from"./Gallery-DCJF-Srn.js";import{n as D,t as O}from"./Placeholder-DKdoE8bM.js";import{n as te,t as k}from"./WriteBar-B12mwi7z.js";import{n as A,t as j}from"./FormItem-B7byku12.js";import{n as M,t as N}from"./Input-BD5Vf9yq.js";import{n as P,t as F}from"./Div-BflkzbsU.js";import{n as I,t as L}from"./PanelHeaderBack-Rqc2UBNz.js";import{i as R,n as z,t as B}from"./constants-DBkyy3CT.js";import{n as V,t as H}from"./createStoryParameters-DBkK1CfQ.js";import{a as U,o as W}from"./mock-CkzEkxhs.js";function G({onProfileClick:e}){return(0,Y.jsxs)(J.Fragment,{children:[(0,Y.jsx)(l,{children:`Main`}),(0,Y.jsx)(y,{children:(0,Y.jsx)(b,{onClick:e,children:`Профиль`})})]})}function K({onSettingsClick:e,onBack:t}){return(0,Y.jsxs)(J.Fragment,{children:[(0,Y.jsx)(l,{before:(0,Y.jsx)(L,{onClick:t}),children:`Профиль`}),(0,Y.jsxs)(y,{children:[(0,Y.jsx)(O,{children:`Теперь свайпните от левого края направо, чтобы вернуться`}),(0,Y.jsx)(F,{style:{height:50,background:`#eee`},"data-vkui-swipe-back":!1,children:`Здесь свайпбек отключен`})]}),(0,Y.jsx)(y,{children:(0,Y.jsx)(b,{onClick:e,children:`Настройки`})}),(0,Y.jsx)(y,{header:(0,Y.jsx)(_,{children:`Gallery`}),description:`Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)`,children:(0,Y.jsxs)(E,{slideWidth:`90%`,bullets:`dark`,children:[(0,Y.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_negative)`}}),(0,Y.jsx)(`img`,{src:`https://placebear.com/1024/640`,style:{display:`block`}}),(0,Y.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_accent)`}})]})}),(0,Y.jsx)(y,{header:(0,Y.jsx)(_,{children:`HorizontalScroll`}),description:`Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю`,children:(0,Y.jsx)(p,{children:U(15).map(e=>(0,Y.jsx)(w,{size:`s`,title:e.first_name,children:(0,Y.jsx)(S,{size:56,src:e.photo_100})},e.id))})}),(0,Y.jsx)(y,{header:(0,Y.jsx)(_,{children:`WriteBar`}),description:`Свайпбэк не мешает фокусироваться на элементах форм`,children:(0,Y.jsx)(k,{})})]})}function q({name:e,onChangeName:t,onBack:n}){let r=J.useCallback(e=>{t(e.target.value.trim())},[t]);return(0,Y.jsxs)(J.Fragment,{children:[(0,Y.jsx)(l,{before:(0,Y.jsx)(L,{onClick:n}),children:`Настройки`}),(0,Y.jsxs)(y,{children:[(0,Y.jsx)(O,{children:`Пример с блокированием свайпбека пока не будет выполнено условие`}),(0,Y.jsx)(j,{htmlFor:`name`,top:`Имя`,children:(0,Y.jsx)(N,{id:`name`,value:e,onChange:r})})]})]})}var J,Y,X,Z,Q;function $(){return($=t((()=>{J=e(n(),1),R(),W(),V(),m(),x(),ee(),u(),P(),A(),T(),v(),g(),C(),f(),M(),o(),c(),I(),D(),te(),a(),Y=r(),X={title:`Navigation/View`,component:s,parameters:H(`View`,B,z,{liveCodeEditor:{scope:{MainPanelContent:G,ProfilePanelContent:K,SettingsPanelContent:q,ConfigProviderOverride:d}}}),tags:[`Навигация`]},Z=()=>{let[e,t]=J.useState([`main`]),n=e[e.length-1],r=J.useCallback(e=>{t(t=>[...t,e])},[]),a=J.useCallback(()=>{t(e=>e.slice(0,-1))},[]),o=J.useCallback(()=>r(`profile`),[r]),c=J.useCallback(()=>r(`settings`),[r]),[l,u]=J.useState(``),[f,p]=J.useState(null),m=J.useCallback(()=>l!==``||(p((0,Y.jsx)(h,{title:`Поле Имя не заполнено`,description:`Пожалуйста, заполните его.`,onClosed:()=>p(null)})),!1),[l]),g=J.useCallback(e=>{if(e===`settings`)return m()?void 0:`prevent`},[m]),_=J.useCallback(()=>{m()&&a()},[m,a]);return(0,Y.jsxs)(d,{platform:`ios`,isWebView:!0,children:[(0,Y.jsxs)(s,{history:e,activePanel:n,onSwipeBackStart:g,onSwipeBack:a,children:[(0,Y.jsx)(i,{id:`main`,children:(0,Y.jsx)(G,{onProfileClick:o})}),(0,Y.jsx)(i,{id:`profile`,children:(0,Y.jsx)(K,{onSettingsClick:c,onBack:a})}),(0,Y.jsx)(i,{id:`settings`,children:(0,Y.jsx)(q,{name:l,onChangeName:u,onBack:_})})]}),f]})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
    setPopoutWithRestriction(<Alert title="Поле Имя не заполнено" description="Пожалуйста, заполните его." onClosed={() => setPopoutWithRestriction(null)} />);
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
}`,...Z.parameters?.docs?.source}}},Q=[`SwipeBlockExample`]})))()}$();export{Z as SwipeBlockExample,Q as __namedExportsOrder,X as default};