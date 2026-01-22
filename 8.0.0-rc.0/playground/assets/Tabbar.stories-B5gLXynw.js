import{b as l,r as d,j as e}from"./iframe-CJSxyW9U.js";import{D as m,C as p}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{B as y}from"./Badge-IncQ-bYt.js";import{C as u}from"./Counter-ivcx2FDG.js";import{T as s,a}from"./TabbarItem-CHUPk8b5.js";import{a as C,b as g,I,c as S,d as f}from"./user_circle_outline_28-CIqbnX3K.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./Caption-DJRq5DSE.js";import"./Headline-B-NKRtjP.js";import"./useState-Cf9zElDT.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./Tappable-B_lgqKnQ.js";import"./Clickable-C7Hv1Vzv.js";import"./InputUtils-CQXgm4mM.js";import"./Footnote-PeEhUyBm.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";const V={title:"Navigation/Epic/Tabbar",component:s,parameters:b("Tabbar",p,m),decorators:[l]},o={render:function(i){const[t,n]=d.useState("profile"),r=c=>n(c.currentTarget.dataset.story);return e.jsxs(s,{...i,children:[e.jsx(a,{onClick:r,selected:t==="feed","data-story":"feed",label:"Новости",children:e.jsx(C,{})}),e.jsx(a,{onClick:r,selected:t==="services","data-story":"services",label:"Сервисы",children:e.jsx(g,{})}),e.jsx(a,{onClick:r,selected:t==="messages","data-story":"messages",indicator:e.jsx(u,{size:"s",mode:"primary",appearance:"accent-red",children:"12"}),label:"Сообщения",children:e.jsx(I,{})}),e.jsx(a,{onClick:r,selected:t==="clips","data-story":"clips",label:"Клипы",children:e.jsx(S,{})}),e.jsx(a,{onClick:r,selected:t==="profile","data-story":"profile",indicator:e.jsx(y,{mode:"prominent",children:"Есть обновления"}),label:"Профиль",children:e.jsx(f,{})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Playground"];export{o as Playground,q as __namedExportsOrder,V as default};
