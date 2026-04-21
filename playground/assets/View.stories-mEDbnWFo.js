import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{c as i,l as a,n as o,t as s}from"./View-VcM79w8r.js";import{n as c,t as l}from"./PanelHeader-BqxNg2Wv.js";import{n as u,t as d}from"./ConfigProviderOverride-FfAeFOxF.js";import{n as f,t as p}from"./HorizontalScroll-DatKoPXJ.js";import{n as m,t as h}from"./Alert-CKJ8rCWX.js";import{n as g,t as _}from"./Header-Cxx7JD2_.js";import{n as v,t as y}from"./Group-iqbU7m06.js";import{n as b,t as x}from"./CellButton-DrOFE0--.js";import{n as S,t as C}from"./Avatar-BPQNL3ed.js";import{n as w,t as T}from"./HorizontalCell-BZ4kBQyp.js";import{n as E,t as D}from"./Gallery-wiF0q4Ua.js";import{n as ee,t as O}from"./Placeholder-L7aC_pzR.js";import{n as k,t as A}from"./WriteBar-CzRT2bWI.js";import{n as j,t as M}from"./FormItem-sbT2gAR3.js";import{n as N,t as P}from"./Input-D0DJqmeY.js";import{n as F,t as I}from"./Div-DkSA0ZW5.js";import{n as L,t as R}from"./PanelHeaderBack-Bsrc_h4O.js";import{i as z,n as B,t as V}from"./constants-Dj6vOzIh.js";import{n as H,t as U}from"./createStoryParameters-pz1UrWMe.js";import{a as W,o as G}from"./mock-D9mwry-3.js";var K,q,J,Y,X,Z,Q,$;t((()=>{K=e(n(),1),z(),G(),H(),m(),S(),b(),u(),F(),j(),E(),v(),g(),w(),f(),N(),a(),c(),L(),ee(),k(),o(),q=r(),J={title:`Navigation/View`,component:s,parameters:U(`View`,V,B),tags:[`Навигация`]},Y=({onProfileClick:e})=>(0,q.jsxs)(K.Fragment,{children:[(0,q.jsx)(l,{children:`Main`}),(0,q.jsx)(y,{children:(0,q.jsx)(x,{onClick:e,children:`Профиль`})})]}),X=({onSettingsClick:e,onBack:t})=>(0,q.jsxs)(K.Fragment,{children:[(0,q.jsx)(l,{before:(0,q.jsx)(R,{onClick:t}),children:`Профиль`}),(0,q.jsxs)(y,{children:[(0,q.jsx)(O,{children:`Теперь свайпните от левого края направо, чтобы вернуться`}),(0,q.jsx)(I,{style:{height:50,background:`#eee`},"data-vkui-swipe-back":!1,children:`Здесь свайпбек отключен`})]}),(0,q.jsx)(y,{children:(0,q.jsx)(x,{onClick:e,children:`Настройки`})}),(0,q.jsx)(y,{header:(0,q.jsx)(_,{children:`Gallery`}),description:`Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)`,children:(0,q.jsxs)(D,{slideWidth:`90%`,bullets:`dark`,children:[(0,q.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_negative)`}}),(0,q.jsx)(`img`,{src:`https://placebear.com/1024/640`,style:{display:`block`}}),(0,q.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_accent)`}})]})}),(0,q.jsx)(y,{header:(0,q.jsx)(_,{children:`HorizontalScroll`}),description:`Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю`,children:(0,q.jsx)(p,{children:W(15).map(e=>(0,q.jsx)(T,{size:`s`,title:e.first_name,children:(0,q.jsx)(C,{size:56,src:e.photo_100})},e.id))})}),(0,q.jsx)(y,{header:(0,q.jsx)(_,{children:`WriteBar`}),description:`Свайпбэк не мешает фокусироваться на элементах форм`,children:(0,q.jsx)(A,{})})]}),Z=({name:e,onChangeName:t,onBack:n})=>{let r=K.useCallback(e=>{t(e.target.value.trim())},[t]);return(0,q.jsxs)(K.Fragment,{children:[(0,q.jsx)(l,{before:(0,q.jsx)(R,{onClick:n}),children:`Настройки`}),(0,q.jsxs)(y,{children:[(0,q.jsx)(O,{children:`Пример с блокированием свайпбека пока не будет выполнено условие`}),(0,q.jsx)(M,{htmlFor:`name`,top:`Имя`,children:(0,q.jsx)(P,{id:`name`,value:e,onChange:r})})]})]})},Q={render:function(){let[e,t]=K.useState([`main`]),n=e[e.length-1],r=K.useCallback(e=>{t(t=>[...t,e])},[]),a=K.useCallback(()=>{t(e=>e.slice(0,-1))},[]),o=K.useCallback(()=>r(`profile`),[r]),c=K.useCallback(()=>r(`settings`),[r]),[l,u]=K.useState(``),[f,p]=K.useState(null),m=K.useCallback(()=>l===``?(p((0,q.jsx)(h,{title:`Поле Имя не заполнено`,description:`Пожалуйста, заполните его.`,onClosed:()=>p(null)})),!1):!0,[l]),g=K.useCallback(e=>{if(e===`settings`)return m()?void 0:`prevent`},[m]),_=K.useCallback(()=>{m()&&a()},[m,a]);return(0,q.jsxs)(d,{platform:`ios`,isWebView:!0,children:[(0,q.jsxs)(s,{history:e,activePanel:n,onSwipeBackStart:g,onSwipeBack:a,children:[(0,q.jsx)(i,{id:`main`,children:(0,q.jsx)(Y,{onProfileClick:o})}),(0,q.jsx)(i,{id:`profile`,children:(0,q.jsx)(X,{onSettingsClick:c,onBack:a})}),(0,q.jsx)(i,{id:`settings`,children:(0,q.jsx)(Z,{name:l,onChangeName:u,onBack:_})})]}),f]})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
  }
}`,...Q.parameters?.docs?.source}}},$=[`SwipeBlockExample`]}))();export{Q as SwipeBlockExample,$ as __namedExportsOrder,J as default};