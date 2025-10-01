import{b as l,r as m,j as e}from"./iframe-DJZLDe2v.js";import{D as d,C as p}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{B as y}from"./Badge-DMFQ-jLc.js";import{C as u}from"./Counter-CFpW7C1b.js";import{T as s,a}from"./TabbarItem-bg0DSlzN.js";import{a as C,b as g,I,c as S,d as f}from"./user_circle_outline_28-8lZKjRIn.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-D0jMNSCO.js";import"./Caption-B1NS-klr.js";import"./Headline-BcxcoLKm.js";import"./react_utils-CSZjvU4X.js";import"./useFocusVisible-B_h8gO-N.js";import"./useFocusVisibleClassName-CRC2ipiX.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CY0nsltg.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-DJi6sM1Y.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CYWMeBJ6.js";import"./Footnote-D8Ch1fTG.js";import"./SvgIconRootV2-DyTPJ3EC.js";import"./_object_spread_props-DRD4qu7p.js";const q={title:"Navigation/Epic/Tabbar",component:s,parameters:b("Tabbar",p,d),decorators:[l]},o={render:function(i){const[t,n]=m.useState("profile"),r=c=>n(c.currentTarget.dataset.story);return e.jsxs(s,{...i,children:[e.jsx(a,{onClick:r,selected:t==="feed","data-story":"feed",label:"Новости",children:e.jsx(C,{})}),e.jsx(a,{onClick:r,selected:t==="services","data-story":"services",label:"Сервисы",children:e.jsx(g,{})}),e.jsx(a,{onClick:r,selected:t==="messages","data-story":"messages",indicator:e.jsx(u,{size:"s",mode:"primary",appearance:"accent-red",children:"12"}),label:"Сообщения",children:e.jsx(I,{})}),e.jsx(a,{onClick:r,selected:t==="clips","data-story":"clips",label:"Клипы",children:e.jsx(S,{})}),e.jsx(a,{onClick:r,selected:t==="profile","data-story":"profile",indicator:e.jsx(y,{mode:"prominent",children:"Есть обновления"}),label:"Профиль",children:e.jsx(f,{})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const G=["Playground"];export{o as Playground,G as __namedExportsOrder,q as default};
