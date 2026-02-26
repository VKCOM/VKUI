import{w as l,r as d,j as e}from"./iframe-C4bTyPBQ.js";import{D as m,C as p}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{B as y}from"./Badge-C0ar7XDd.js";import{C as u}from"./Counter-BZj4DH8P.js";import{T as s,a}from"./TabbarItem-Ciln7Alj.js";import{a as C,b as g,I,c as S,d as f}from"./user_circle_outline_28-B3E45tbw.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./Caption-D_3C1Hvb.js";import"./Headline-B4T2ew9V.js";import"./useState-CmJkrVlf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./Tappable-BZW__-HP.js";import"./Clickable-BhDfuptR.js";import"./InputUtils-Ns7QNyDT.js";import"./Footnote-wW_hecXF.js";import"./SvgIconRootV2-DbftVVP5.js";const K={title:"Navigation/Epic/Tabbar",component:s,parameters:b("Tabbar",p,m),decorators:[l]},o={render:function(i){const[t,n]=d.useState("profile"),r=c=>n(c.currentTarget.dataset.story);return e.jsxs(s,{...i,children:[e.jsx(a,{onClick:r,selected:t==="feed","data-story":"feed",label:"Новости",children:e.jsx(C,{})}),e.jsx(a,{onClick:r,selected:t==="services","data-story":"services",label:"Сервисы",children:e.jsx(g,{})}),e.jsx(a,{onClick:r,selected:t==="messages","data-story":"messages",indicator:e.jsx(u,{size:"s",mode:"primary",appearance:"accent-red",children:"12"}),label:"Сообщения",children:e.jsx(I,{})}),e.jsx(a,{onClick:r,selected:t==="clips","data-story":"clips",label:"Клипы",children:e.jsx(S,{})}),e.jsx(a,{onClick:r,selected:t==="profile","data-story":"profile",indicator:e.jsx(y,{mode:"prominent",children:"Есть обновления"}),label:"Профиль",children:e.jsx(f,{})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["Playground"];export{o as Playground,V as __namedExportsOrder,K as default};
