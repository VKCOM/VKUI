import{b as p,r as b,j as e}from"./iframe-DveaDHpJ.js";import{D as y,C as u}from"./constants-DdkjnEgz.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{B as g}from"./Badge-w9bXKG22.js";import{C as I}from"./Counter-CnJZAIMU.js";import{T as c,a}from"./TabbarItem-Bw98-SF7.js";import{a as S,b as f,I as T,c as v,d as x}from"./user_circle_outline_28-B5F9_tkI.js";import"./preload-helper-Dp1pzeXC.js";import"./VisuallyHidden-C4fiFLiw.js";import"./Caption-xmt4HAL3.js";import"./Headline-D2z7orvN.js";import"./react_utils-CSZjvU4X.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-B6M0Cj2d.js";import"./mergeCalls-Bc-HqyI0.js";import"./Clickable-Qd8MhpMK.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DB2utYDB.js";import"./Footnote-DMEVDgek.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./_object_spread_props-DRD4qu7p.js";const J={title:"Navigation/Epic/Tabbar",component:c,parameters:C("Tabbar",u,y),decorators:[p]},o={render:function(l){const[t,d]=b.useState("profile"),r=m=>d(m.currentTarget.dataset.story);return e.jsxs(c,{...l,children:[e.jsx(a,{onClick:r,selected:t==="feed","data-story":"feed",label:"Новости",children:e.jsx(S,{})}),e.jsx(a,{onClick:r,selected:t==="services","data-story":"services",label:"Сервисы",children:e.jsx(f,{})}),e.jsx(a,{onClick:r,selected:t==="messages","data-story":"messages",indicator:e.jsx(I,{size:"s",mode:"primary",appearance:"accent-red",children:"12"}),label:"Сообщения",children:e.jsx(T,{})}),e.jsx(a,{onClick:r,selected:t==="clips","data-story":"clips",label:"Клипы",children:e.jsx(v,{})}),e.jsx(a,{onClick:r,selected:t==="profile","data-story":"profile",indicator:e.jsx(g,{mode:"prominent",children:"Есть обновления"}),label:"Профиль",children:e.jsx(x,{})})]})}};var s,i,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
