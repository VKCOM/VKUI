import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CRMqfscQ.js";import{a as n,i as r,r as i,t as a}from"./icons-uYnXgQjG.js";import{n as o,t as s}from"./GridAvatar-C5s5mmUz.js";import{i as c,t as l}from"./constants-BYo4AJCv.js";import{n as u,t as d}from"./createStoryParameters-Dbf8epgV.js";import{n as f,t as p}from"./src-DDA0jMIq.js";import{n as m,o as h}from"./mock-Da5716d-.js";var g,_,v,y,b=e((()=>{p(),c(),i(),h(),u(),n(),o(),g=t(),_={title:`Data Display/GridAvatar`,component:s,parameters:d(`GridAvatar`,l),argTypes:{badged:{control:`boolean`},size:{control:{type:`select`},options:[...r]}},decorators:[f],tags:[`Отображение данных`]},v={render:({badged:e,size:t=48,...n})=>{let r=t>=24&&e?(0,g.jsx)(s.Badge,{children:(0,g.jsx)(a,{})}):void 0;return(0,g.jsx)(s,{...n,size:t,children:r})},args:{src:[m(),m(),m(),m()],badged:!1}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: ({
    badged,
    size = 48,
    ...args
  }) => {
    const badge = size >= 24 && badged ? <GridAvatar.Badge>
          <IconExampleForBadgeBasedOnImageBaseSize />
        </GridAvatar.Badge> : undefined;
    return <GridAvatar {...args} size={size}>
        {badge}
      </GridAvatar>;
  },
  args: {
    src: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    badged: false
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}));export{_ as i,y as n,b as r,v as t};