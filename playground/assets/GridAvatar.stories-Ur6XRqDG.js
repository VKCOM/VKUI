import{n as e,r as t}from"./chunk-BneVvdWh.js";import{yo as n}from"./iframe-DYi3TMGx.js";import{a as r,i,r as a,t as o}from"./icons-DqgoJDac.js";import{n as s,t as c}from"./GridAvatar-YJzRtmpA.js";import{i as l,t as u}from"./constants-DdtDghDm.js";import{n as d,t as f}from"./createStoryParameters-cWWuDqBQ.js";import{n as p,t as m}from"./src-CCfyPkEG.js";import{n as h,o as g}from"./mock-B_w95Aq1.js";var _=t({Playground:()=>b,__namedExportsOrder:()=>x,default:()=>y}),v,y,b,x,S=e((()=>{m(),l(),a(),g(),d(),r(),s(),v=n(),y={title:`Data Display/GridAvatar`,component:c,parameters:f(`GridAvatar`,u),argTypes:{badged:{control:`boolean`},size:{control:{type:`select`},options:[...i]}},decorators:[p],tags:[`Отображение данных`]},b={render:({badged:e,size:t=48,...n})=>{let r=t>=24&&e?(0,v.jsx)(c.Badge,{children:(0,v.jsx)(o,{})}):void 0;return(0,v.jsx)(c,{...n,size:t,children:r})},args:{src:[h(),h(),h(),h()],badged:!1}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}));export{b as n,S as r,_ as t};