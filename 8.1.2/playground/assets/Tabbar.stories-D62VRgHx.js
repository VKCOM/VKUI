import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{A as i,C as a,H as o,M as s,g as c,n as l}from"./dist-JE-Gteso.js";import{r as u,t as d}from"./VKUIDecorators-BYQp_QSp.js";import{i as f,n as p,r as m,t as h}from"./TabbarItem-DDeVYJyg.js";import{n as g,t as _}from"./Badge-gJ_1Gn34.js";import{n as v,t as y}from"./Counter-By-PeeB4.js";import{i as b,n as x,t as S}from"./constants-Dj6vOzIh.js";import{n as C,t as w}from"./createStoryParameters-pz1UrWMe.js";var T,E,D,O,k,A=t((()=>{T=e(n(),1),l(),d(),b(),C(),g(),v(),p(),f(),E=r(),D={title:`Navigation/Epic/Tabbar`,component:m,parameters:w(`Tabbar`,S,x),decorators:[u]},O={render:function(e){let[t,n]=T.useState(`profile`),r=e=>n(e.currentTarget.dataset.story);return(0,E.jsxs)(m,{...e,children:[(0,E.jsx)(h,{onClick:r,selected:t===`feed`,"data-story":`feed`,label:`Новости`,children:(0,E.jsx)(i,{})}),(0,E.jsx)(h,{onClick:r,selected:t===`services`,"data-story":`services`,label:`Сервисы`,children:(0,E.jsx)(a,{})}),(0,E.jsx)(h,{onClick:r,selected:t===`messages`,"data-story":`messages`,indicator:(0,E.jsx)(y,{size:`s`,mode:`primary`,appearance:`accent-red`,children:`12`}),label:`Сообщения`,children:(0,E.jsx)(s,{})}),(0,E.jsx)(h,{onClick:r,selected:t===`clips`,"data-story":`clips`,label:`Клипы`,children:(0,E.jsx)(o,{})}),(0,E.jsx)(h,{onClick:r,selected:t===`profile`,"data-story":`profile`,indicator:(0,E.jsx)(_,{mode:`prominent`,children:`Есть обновления`}),label:`Профиль`,children:(0,E.jsx)(c,{})})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [activeStory, setActiveStory] = React.useState<string>('profile');
    const onStoryChange = (e: React.MouseEvent<HTMLElement>) => setActiveStory(e.currentTarget.dataset.story!);
    return <Tabbar {...args}>
        <TabbarItem onClick={onStoryChange} selected={activeStory === 'feed'} data-story="feed" label="Новости">
          <Icon28NewsfeedOutline />
        </TabbarItem>
        <TabbarItem onClick={onStoryChange} selected={activeStory === 'services'} data-story="services" label="Сервисы">
          <Icon28ServicesOutline />
        </TabbarItem>
        <TabbarItem onClick={onStoryChange} selected={activeStory === 'messages'} data-story="messages" indicator={<Counter size="s" mode="primary" appearance="accent-red">
              12
            </Counter>} label="Сообщения">
          <Icon28MessageOutline />
        </TabbarItem>
        <TabbarItem onClick={onStoryChange} selected={activeStory === 'clips'} data-story="clips" label="Клипы">
          <Icon28ClipOutline />
        </TabbarItem>
        <TabbarItem onClick={onStoryChange} selected={activeStory === 'profile'} data-story="profile" indicator={<Badge mode="prominent">Есть обновления</Badge>} label="Профиль">
          <Icon28UserCircleOutline />
        </TabbarItem>
      </Tabbar>;
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`]}));export{D as i,k as n,A as r,O as t};