import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Ft as i,In as a,Ln as o,On as s,Pt as c,kn as l}from"./iframe-Cn6jcl_x.js";import{n as u,t as d}from"./ConfigProviderOverride-C3HyryCS.js";import{n as f,t as p}from"./HorizontalScroll-Dsi5KtLS.js";import{n as m,t as ee}from"./Alert-eBY_SVmz.js";import{n as h,t as g}from"./Header-CQj031La.js";import{n as _,t as v}from"./Group-LwNPJiLD.js";import{n as y,t as b}from"./CellButton-BG1bO8HB.js";import{n as x,t as S}from"./Avatar-Doxxlovk.js";import{n as C,t as w}from"./HorizontalCell-IKay06Nt.js";import{n as T,t as E}from"./Gallery-CY1gvGNj.js";import{n as D,t as O}from"./Placeholder-B3WCn6mG.js";import{n as k,t as A}from"./WriteBar-CwLCFSZA.js";import{n as j,t as M}from"./FormItem-BBILDAKY.js";import{n as N,t as P}from"./Input-COdKLu4z.js";import{n as F,t as I}from"./Div-Cd0q8MDi.js";import{n as L,t as R}from"./PanelHeaderBack-CQd0osZo.js";import{i as z,n as B,t as V}from"./constants-cjed6ZWB.js";import{n as H,t as U}from"./createStoryParameters-CMHckkzt.js";import{a as W,o as G}from"./mock-K9LjXOLX.js";function K({onProfileClick:e}){return(0,X.jsxs)(Y.Fragment,{children:[(0,X.jsx)(s,{children:`Main`}),(0,X.jsx)(v,{children:(0,X.jsx)(b,{onClick:e,children:`Профиль`})})]})}function q({onSettingsClick:e,onBack:t}){return(0,X.jsxs)(Y.Fragment,{children:[(0,X.jsx)(s,{before:(0,X.jsx)(R,{onClick:t}),children:`Профиль`}),(0,X.jsxs)(v,{children:[(0,X.jsx)(O,{children:`Теперь свайпните от левого края направо, чтобы вернуться`}),(0,X.jsx)(I,{style:{height:50,background:`#eee`},"data-vkui-swipe-back":!1,children:`Здесь свайпбек отключен`})]}),(0,X.jsx)(v,{children:(0,X.jsx)(b,{onClick:e,children:`Настройки`})}),(0,X.jsx)(v,{header:(0,X.jsx)(g,{children:`Gallery`}),description:`Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)`,children:(0,X.jsxs)(E,{slideWidth:`90%`,bullets:`dark`,children:[(0,X.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_negative)`}}),(0,X.jsx)(`img`,{src:`https://placebear.com/1024/640`,style:{display:`block`}}),(0,X.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_accent)`}})]})}),(0,X.jsx)(v,{header:(0,X.jsx)(g,{children:`HorizontalScroll`}),description:`Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю`,children:(0,X.jsx)(p,{children:W(15).map(e=>(0,X.jsx)(w,{size:`s`,title:e.first_name,children:(0,X.jsx)(S,{size:56,src:e.photo_100})},e.id))})}),(0,X.jsx)(v,{header:(0,X.jsx)(g,{children:`WriteBar`}),description:`Свайпбэк не мешает фокусироваться на элементах форм`,children:(0,X.jsx)(A,{})})]})}function J({name:e,onChangeName:t,onBack:n}){let r=Y.useCallback(e=>{t(e.target.value.trim())},[t]);return(0,X.jsxs)(Y.Fragment,{children:[(0,X.jsx)(s,{before:(0,X.jsx)(R,{onClick:n}),children:`Настройки`}),(0,X.jsxs)(v,{children:[(0,X.jsx)(O,{children:`Пример с блокированием свайпбека пока не будет выполнено условие`}),(0,X.jsx)(M,{htmlFor:`name`,top:`Имя`,children:(0,X.jsx)(P,{id:`name`,value:e,onChange:r})})]})]})}var Y,X,Z,Q,$;e((()=>{Y=t(n(),1),z(),G(),H(),m(),x(),y(),u(),F(),j(),T(),_(),h(),C(),f(),N(),o(),l(),L(),D(),k(),i(),X=t(r(),1),Z={title:`Navigation/View`,component:c,parameters:U(`View`,V,B,{liveCodeEditor:{scope:{MainPanelContent:K,ProfilePanelContent:q,SettingsPanelContent:J,ConfigProviderOverride:d}}}),tags:[`Навигация`]},Q=()=>{let[e,t]=Y.useState([`main`]),n=e[e.length-1],r=Y.useCallback(e=>{t(t=>[...t,e])},[]),i=Y.useCallback(()=>{t(e=>e.slice(0,-1))},[]),o=Y.useCallback(()=>r(`profile`),[r]),s=Y.useCallback(()=>r(`settings`),[r]),[l,u]=Y.useState(``),[f,p]=Y.useState(null),m=Y.useCallback(()=>l===``?(p((0,X.jsx)(ee,{title:`Поле Имя не заполнено`,description:`Пожалуйста, заполните его.`,onClosed:()=>p(null)})),!1):!0,[l]),h=Y.useCallback(e=>{if(e===`settings`)return m()?void 0:`prevent`},[m]),g=Y.useCallback(()=>{m()&&i()},[m,i]);return(0,X.jsxs)(d,{platform:`ios`,isWebView:!0,children:[(0,X.jsxs)(c,{history:e,activePanel:n,onSwipeBackStart:h,onSwipeBack:i,children:[(0,X.jsx)(a,{id:`main`,children:(0,X.jsx)(K,{onProfileClick:o})}),(0,X.jsx)(a,{id:`profile`,children:(0,X.jsx)(q,{onSettingsClick:s,onBack:i})}),(0,X.jsx)(a,{id:`settings`,children:(0,X.jsx)(J,{name:l,onChangeName:u,onBack:g})})]}),f]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$=[`SwipeBlockExample`]}))();export{Q as SwipeBlockExample,$ as __namedExportsOrder,Z as default};