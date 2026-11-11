import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,i,r as a,t as o}from"./icons-CGJv9EKq.js";import{n as s,t as c}from"./GridAvatar-HCsuYApq.js";import{i as l,t as u}from"./constants-BWBR8eWE.js";import{n as d,t as f}from"./createStoryParameters-D_aKMzVl.js";import{r as p,t as m}from"./src-CNP_L1Hg.js";import{n as h,o as g}from"./mock-gn_3WRVn.js";var _=t({Playground:()=>b,__namedExportsOrder:()=>x,default:()=>y}),v,y,b,x;function S(){return(S=e((()=>{m(),l(),a(),g(),d(),r(),s(),v=n(),y={title:`Data Display/GridAvatar`,component:c,parameters:f(`GridAvatar`,u),argTypes:{badged:{control:`boolean`},size:{control:{type:`select`},options:[...i]}},decorators:[p],tags:[`Отображение данных`]},b=({badged:e,size:t=48,...n})=>{let r=t>=24&&e?(0,v.jsx)(c.Badge,{children:(0,v.jsx)(o,{})}):void 0;return(0,v.jsx)(c,{...n,size:t,children:r})},b.args={src:[h(),h(),h(),h()],badged:!1},x=[`Playground`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`({
  badged,
  size = 48,
  ...args
}: StoryGridAvatarProps) => {
  const badge = size >= 24 && badged ? <GridAvatar.Badge>
        <IconExampleForBadgeBasedOnImageBaseSize />
      </GridAvatar.Badge> : undefined;
  return <GridAvatar {...args} size={size}>
      {badge}
    </GridAvatar>;
}`,...b.parameters?.docs?.source}}}})))()}export{b as n,S as r,_ as t};