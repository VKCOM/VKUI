import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ct as n,J as r,St as i,a,o,ps as s,q as c,yo as l}from"./iframe-lhb8_BzR.js";import{n as u,t as d}from"./ConfigProviderOverride-DL2HTTHt.js";import{n as f,t as p}from"./HorizontalScroll-DbzA3x5N.js";import{n as m,t as h}from"./Alert-D34MvGWU.js";import{n as g,t as _}from"./Header-Blv-iyHe.js";import{n as v,t as y}from"./Group-BJ5gURe8.js";import{n as b,t as x}from"./CellButton-Cs0gHUJF.js";import{n as S,t as C}from"./Avatar--LLTvRd4.js";import{n as w,t as T}from"./HorizontalCell-Bc0hHhtP.js";import{n as E,t as D}from"./Gallery-BPCtXldT.js";import{n as ee,t as O}from"./Placeholder-4w7vcExv.js";import{n as k,t as A}from"./WriteBar-CNsragUy.js";import{n as j,t as M}from"./FormItem-DeuuMO6w.js";import{n as N,t as P}from"./Input-BEYJfrbb.js";import{n as F,t as I}from"./Div-Cc9R1fc6.js";import{n as L,t as R}from"./PanelHeaderBack-1Tbr6x47.js";import{i as z,n as B,t as V}from"./constants-CXYaXe_q.js";import{n as H,t as U}from"./createStoryParameters-CbXzS3a6.js";import{a as W,o as G}from"./mock-CFHZcj-X.js";var K,q,J,Y,X,Z,Q,$;t((()=>{K=e(s(),1),z(),G(),H(),m(),S(),b(),u(),F(),j(),E(),v(),g(),w(),f(),N(),n(),r(),L(),ee(),k(),o(),q=l(),J={title:`Navigation/View`,component:a,parameters:U(`View`,V,B),tags:[`Навигация`]},Y=({onProfileClick:e})=>(0,q.jsxs)(K.Fragment,{children:[(0,q.jsx)(c,{children:`Main`}),(0,q.jsx)(y,{children:(0,q.jsx)(x,{onClick:e,children:`Профиль`})})]}),X=({onSettingsClick:e,onBack:t})=>(0,q.jsxs)(K.Fragment,{children:[(0,q.jsx)(c,{before:(0,q.jsx)(R,{onClick:t}),children:`Профиль`}),(0,q.jsxs)(y,{children:[(0,q.jsx)(O,{children:`Теперь свайпните от левого края направо, чтобы вернуться`}),(0,q.jsx)(I,{style:{height:50,background:`#eee`},"data-vkui-swipe-back":!1,children:`Здесь свайпбек отключен`})]}),(0,q.jsx)(y,{children:(0,q.jsx)(x,{onClick:e,children:`Настройки`})}),(0,q.jsx)(y,{header:(0,q.jsx)(_,{children:`Gallery`}),description:`Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)`,children:(0,q.jsxs)(D,{slideWidth:`90%`,bullets:`dark`,children:[(0,q.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_negative)`}}),(0,q.jsx)(`img`,{src:`https://placebear.com/1024/640`,style:{display:`block`}}),(0,q.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_accent)`}})]})}),(0,q.jsx)(y,{header:(0,q.jsx)(_,{children:`HorizontalScroll`}),description:`Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю`,children:(0,q.jsx)(p,{children:W(15).map(e=>(0,q.jsx)(T,{size:`s`,title:e.first_name,children:(0,q.jsx)(C,{size:56,src:e.photo_100})},e.id))})}),(0,q.jsx)(y,{header:(0,q.jsx)(_,{children:`WriteBar`}),description:`Свайпбэк не мешает фокусироваться на элементах форм`,children:(0,q.jsx)(A,{})})]}),Z=({name:e,onChangeName:t,onBack:n})=>{let r=K.useCallback(e=>{t(e.target.value.trim())},[t]);return(0,q.jsxs)(K.Fragment,{children:[(0,q.jsx)(c,{before:(0,q.jsx)(R,{onClick:n}),children:`Настройки`}),(0,q.jsxs)(y,{children:[(0,q.jsx)(O,{children:`Пример с блокированием свайпбека пока не будет выполнено условие`}),(0,q.jsx)(M,{htmlFor:`name`,top:`Имя`,children:(0,q.jsx)(P,{id:`name`,value:e,onChange:r})})]})]})},Q={render:function(){let[e,t]=K.useState([`main`]),n=e[e.length-1],r=K.useCallback(e=>{t(t=>[...t,e])},[]),o=K.useCallback(()=>{t(e=>e.slice(0,-1))},[]),s=K.useCallback(()=>r(`profile`),[r]),c=K.useCallback(()=>r(`settings`),[r]),[l,u]=K.useState(``),[f,p]=K.useState(null),m=K.useCallback(()=>l===``?(p((0,q.jsx)(h,{title:`Поле Имя не заполнено`,description:`Пожалуйста, заполните его.`,onClosed:()=>p(null)})),!1):!0,[l]),g=K.useCallback(e=>{if(e===`settings`)return m()?void 0:`prevent`},[m]),_=K.useCallback(()=>{m()&&o()},[m,o]);return(0,q.jsxs)(d,{platform:`ios`,isWebView:!0,children:[(0,q.jsxs)(a,{history:e,activePanel:n,onSwipeBackStart:g,onSwipeBack:o,children:[(0,q.jsx)(i,{id:`main`,children:(0,q.jsx)(Y,{onProfileClick:s})}),(0,q.jsx)(i,{id:`profile`,children:(0,q.jsx)(X,{onSettingsClick:c,onBack:o})}),(0,q.jsx)(i,{id:`settings`,children:(0,q.jsx)(Z,{name:l,onChangeName:u,onBack:_})})]}),f]})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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