import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{f as i,n as a,p as o,t as s}from"./View-C3co4ox4.js";import{n as c,t as l}from"./PanelHeader-CkV9nDr2.js";import{i as u,n as d,t as f}from"./constants-BWBR8eWE.js";import{n as p,t as m}from"./createStoryParameters-D_aKMzVl.js";import{n as h,t as g}from"./Group-BYaqcOTu.js";import{n as _,t as v}from"./Placeholder-CEGhmgMM.js";import{n as y,t as b}from"./ConfigProviderOverride-BKicXhJs.js";import{n as x,t as S}from"./Alert-BWMZ8Bj7.js";import{a as C,o as w}from"./mock-gn_3WRVn.js";import{n as T,t as E}from"./Avatar-D5eC2z7e.js";import{n as D,t as O}from"./Div-ByfmwV1U.js";import{n as ee,t as te}from"./Input-C0QwfGXJ.js";import{n as k,t as A}from"./HorizontalScroll-cOR9kCRx.js";import{n as j,t as M}from"./CellButton-BiLy7l3x.js";import{n as N,t as P}from"./FormItem--X1L6eoH.js";import{n as F,t as I}from"./PanelHeaderBack-DVzCy1F2.js";import{n as L,t as R}from"./Gallery-6af1izFZ.js";import{n as z,t as B}from"./Header-D_4bQeTM.js";import{n as V,t as H}from"./HorizontalCell-Cy2WpV9Q.js";import{n as U,t as W}from"./WriteBar-8JC01goI.js";function G({onProfileClick:e}){return(0,Y.jsxs)(J.Fragment,{children:[(0,Y.jsx)(l,{children:`Main`}),(0,Y.jsx)(g,{children:(0,Y.jsx)(M,{onClick:e,children:`Профиль`})})]})}function K({onSettingsClick:e,onBack:t}){return(0,Y.jsxs)(J.Fragment,{children:[(0,Y.jsx)(l,{before:(0,Y.jsx)(I,{onClick:t}),children:`Профиль`}),(0,Y.jsxs)(g,{children:[(0,Y.jsx)(v,{children:`Теперь свайпните от левого края направо, чтобы вернуться`}),(0,Y.jsx)(O,{style:{height:50,background:`#eee`},"data-vkui-swipe-back":!1,children:`Здесь свайпбек отключен`})]}),(0,Y.jsx)(g,{children:(0,Y.jsx)(M,{onClick:e,children:`Настройки`})}),(0,Y.jsx)(g,{header:(0,Y.jsx)(B,{children:`Gallery`}),description:`Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)`,children:(0,Y.jsxs)(R,{slideWidth:`90%`,bullets:`dark`,children:[(0,Y.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_negative)`}}),(0,Y.jsx)(`img`,{src:`https://placebear.com/1024/640`,style:{display:`block`}}),(0,Y.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_accent)`}})]})}),(0,Y.jsx)(g,{header:(0,Y.jsx)(B,{children:`HorizontalScroll`}),description:`Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю`,children:(0,Y.jsx)(A,{children:C(15).map(e=>(0,Y.jsx)(H,{size:`s`,title:e.first_name,children:(0,Y.jsx)(E,{size:56,src:e.photo_100})},e.id))})}),(0,Y.jsx)(g,{header:(0,Y.jsx)(B,{children:`WriteBar`}),description:`Свайпбэк не мешает фокусироваться на элементах форм`,children:(0,Y.jsx)(W,{})})]})}function q({name:e,onChangeName:t,onBack:n}){let r=J.useCallback(e=>{t(e.target.value.trim())},[t]);return(0,Y.jsxs)(J.Fragment,{children:[(0,Y.jsx)(l,{before:(0,Y.jsx)(I,{onClick:n}),children:`Настройки`}),(0,Y.jsxs)(g,{children:[(0,Y.jsx)(v,{children:`Пример с блокированием свайпбека пока не будет выполнено условие`}),(0,Y.jsx)(P,{htmlFor:`name`,top:`Имя`,children:(0,Y.jsx)(te,{id:`name`,value:e,onChange:r})})]})]})}var J,Y,X,Z,Q;function $(){return($=t((()=>{J=e(n(),1),u(),w(),p(),x(),T(),j(),y(),D(),N(),L(),h(),z(),V(),k(),ee(),o(),c(),F(),_(),U(),a(),Y=r(),X={title:`Navigation/View`,component:s,parameters:m(`View`,f,d,{liveCodeEditor:{scope:{MainPanelContent:G,ProfilePanelContent:K,SettingsPanelContent:q,ConfigProviderOverride:b}}}),tags:[`Навигация`]},Z=()=>{let[e,t]=J.useState([`main`]),n=e[e.length-1],r=J.useCallback(e=>{t(t=>[...t,e])},[]),a=J.useCallback(()=>{t(e=>e.slice(0,-1))},[]),o=J.useCallback(()=>r(`profile`),[r]),c=J.useCallback(()=>r(`settings`),[r]),[l,u]=J.useState(``),[d,f]=J.useState(null),p=J.useCallback(()=>l!==``||(f((0,Y.jsx)(S,{title:`Поле Имя не заполнено`,description:`Пожалуйста, заполните его.`,onClosed:()=>f(null)})),!1),[l]),m=J.useCallback(e=>{if(e===`settings`)return p()?void 0:`prevent`},[p]),h=J.useCallback(()=>{p()&&a()},[p,a]);return(0,Y.jsxs)(b,{platform:`ios`,isWebView:!0,children:[(0,Y.jsxs)(s,{history:e,activePanel:n,onSwipeBackStart:m,onSwipeBack:a,children:[(0,Y.jsx)(i,{id:`main`,children:(0,Y.jsx)(G,{onProfileClick:o})}),(0,Y.jsx)(i,{id:`profile`,children:(0,Y.jsx)(K,{onSettingsClick:c,onBack:a})}),(0,Y.jsx)(i,{id:`settings`,children:(0,Y.jsx)(q,{name:l,onChangeName:u,onBack:h})})]}),d]})},Q=[`SwipeBlockExample`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as SwipeBlockExample,Q as __namedExportsOrder,X as default};