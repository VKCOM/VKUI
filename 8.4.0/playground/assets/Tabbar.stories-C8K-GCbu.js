import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-BZJXY1be.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{Dt as a,U as o,k as s,n as c,rt as l,st as u}from"./dist-BrTYZxJF.js";import{At as d,Mt as f}from"./iframe-33ykgUxE.js";import{i as p,n as m,r as h,t as g}from"./TabbarItem-CtPpIK4g.js";import{n as _,t as v}from"./Badge-Dqv3nlF3.js";import{n as y,t as b}from"./Counter-CIF6WVn6.js";import{i as x,n as S,t as C}from"./constants-DBkyy3CT.js";import{n as w,t as T}from"./createStoryParameters-DBkK1CfQ.js";var E=n({Playground:()=>A,__namedExportsOrder:()=>j,default:()=>k}),D,O,k,A,j;function M(){return(M=t((()=>{D=e(r(),1),c(),d(),x(),w(),_(),y(),m(),p(),O=i(),k={title:`Navigation/Epic/Tabbar`,component:h,parameters:T(`Tabbar`,C,S),decorators:[f]},A=e=>{let[t,n]=D.useState(`profile`),r=e=>n(e.currentTarget.dataset.story);return(0,O.jsxs)(h,{...e,children:[(0,O.jsx)(g,{onClick:r,selected:t===`feed`,"data-story":`feed`,label:`Новости`,children:(0,O.jsx)(l,{})}),(0,O.jsx)(g,{onClick:r,selected:t===`services`,"data-story":`services`,label:`Сервисы`,children:(0,O.jsx)(o,{})}),(0,O.jsx)(g,{onClick:r,selected:t===`messages`,"data-story":`messages`,indicator:(0,O.jsx)(b,{size:`s`,mode:`primary`,appearance:`accent-red`,children:`12`}),label:`Сообщения`,children:(0,O.jsx)(u,{})}),(0,O.jsx)(g,{onClick:r,selected:t===`clips`,"data-story":`clips`,label:`Клипы`,children:(0,O.jsx)(a,{})}),(0,O.jsx)(g,{onClick:r,selected:t===`profile`,"data-story":`profile`,indicator:(0,O.jsx)(v,{mode:`prominent`,children:`Есть обновления`}),label:`Профиль`,children:(0,O.jsx)(s,{})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: TabbarProps) => {
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
}`,...A.parameters?.docs?.source}}},j=[`Playground`]})))()}export{E as n,M as r,A as t};