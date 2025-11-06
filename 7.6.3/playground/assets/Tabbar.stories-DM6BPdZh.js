import{b as p,r as b,j as e}from"./iframe-OJ1C6fMc.js";import{D as y,C as u}from"./constants-DdkjnEgz.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{B as g}from"./Badge-CmcyuXv_.js";import{C as I}from"./Counter-DOauC5OQ.js";import{T as c,a}from"./TabbarItem-Cxik88-F.js";import{a as S,b as f,I as T,c as v,d as x}from"./user_circle_outline_28-CdLJaoYE.js";import"./preload-helper-Dp1pzeXC.js";import"./VisuallyHidden-BNf-15JI.js";import"./Caption-eNcQJads.js";import"./Headline-BAyAnA5C.js";import"./react_utils-CSZjvU4X.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BvI9Mb-u.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-DKzQKlVj.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CNd9WeYt.js";import"./Footnote-JF6_a0Sk.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";const J={title:"Navigation/Epic/Tabbar",component:c,parameters:C("Tabbar",u,y),decorators:[p]},o={render:function(l){const[t,d]=b.useState("profile"),r=m=>d(m.currentTarget.dataset.story);return e.jsxs(c,{...l,children:[e.jsx(a,{onClick:r,selected:t==="feed","data-story":"feed",label:"Новости",children:e.jsx(S,{})}),e.jsx(a,{onClick:r,selected:t==="services","data-story":"services",label:"Сервисы",children:e.jsx(f,{})}),e.jsx(a,{onClick:r,selected:t==="messages","data-story":"messages",indicator:e.jsx(I,{size:"s",mode:"primary",appearance:"accent-red",children:"12"}),label:"Сообщения",children:e.jsx(T,{})}),e.jsx(a,{onClick:r,selected:t==="clips","data-story":"clips",label:"Клипы",children:e.jsx(v,{})}),e.jsx(a,{onClick:r,selected:t==="profile","data-story":"profile",indicator:e.jsx(g,{mode:"prominent",children:"Есть обновления"}),label:"Профиль",children:e.jsx(x,{})})]})}};var s,i,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const Q=["Playground"];export{o as Playground,Q as __namedExportsOrder,J as default};
