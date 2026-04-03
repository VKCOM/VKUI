import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{Hn as r,On as i,Yn as a,i as o,ir as s,mr as c,n as l,nr as u,ps as d,yo as f}from"./iframe-DYi3TMGx.js";import{i as p,n as m,r as h,t as g}from"./TabbarItem-KB8TThM2.js";import{n as _,t as v}from"./Badge-HRbSkA4t.js";import{n as y,t as b}from"./Counter-CnDGvYM2.js";import{i as x,n as S,t as C}from"./constants-DdtDghDm.js";import{n as w,t as T}from"./createStoryParameters-cWWuDqBQ.js";var E=n({Playground:()=>A,__namedExportsOrder:()=>j,default:()=>k}),D,O,k,A,j,M=t((()=>{D=e(d(),1),i(),l(),x(),w(),_(),y(),m(),p(),O=f(),k={title:`Navigation/Epic/Tabbar`,component:h,parameters:T(`Tabbar`,C,S),decorators:[o]},A={render:function(e){let[t,n]=D.useState(`profile`),i=e=>n(e.currentTarget.dataset.story);return(0,O.jsxs)(h,{...e,children:[(0,O.jsx)(g,{onClick:i,selected:t===`feed`,"data-story":`feed`,label:`Новости`,children:(0,O.jsx)(u,{})}),(0,O.jsx)(g,{onClick:i,selected:t===`services`,"data-story":`services`,label:`Сервисы`,children:(0,O.jsx)(a,{})}),(0,O.jsx)(g,{onClick:i,selected:t===`messages`,"data-story":`messages`,indicator:(0,O.jsx)(b,{size:`s`,mode:`primary`,appearance:`accent-red`,children:`12`}),label:`Сообщения`,children:(0,O.jsx)(s,{})}),(0,O.jsx)(g,{onClick:i,selected:t===`clips`,"data-story":`clips`,label:`Клипы`,children:(0,O.jsx)(c,{})}),(0,O.jsx)(g,{onClick:i,selected:t===`profile`,"data-story":`profile`,indicator:(0,O.jsx)(v,{mode:`prominent`,children:`Есть обновления`}),label:`Профиль`,children:(0,O.jsx)(r,{})})]})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Playground`]}));export{E as n,M as r,A as t};