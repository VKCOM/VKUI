import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,t as i}from"./constants-BWBR8eWE.js";import{n as a,t as o}from"./createStoryParameters-D_aKMzVl.js";import{r as s,t as c}from"./src-CNP_L1Hg.js";import{a as l,i as u,r as d,t as f}from"./icons-CbyEOSn1.js";import{n as p,o as m}from"./mock-gn_3WRVn.js";import{n as h,t as g}from"./GridAvatar-q3XIEl0q.js";var _=t({Playground:()=>b,__namedExportsOrder:()=>x,default:()=>y}),v,y,b,x;function S(){return(S=e((()=>{c(),r(),d(),m(),a(),l(),h(),v=n(),y={title:`Data Display/GridAvatar`,component:g,parameters:o(`GridAvatar`,i),argTypes:{badged:{control:`boolean`},size:{control:{type:`select`},options:[...u]}},decorators:[s],tags:[`Отображение данных`]},b=({badged:e,size:t=48,...n})=>{let r=t>=24&&e?(0,v.jsx)(g.Badge,{children:(0,v.jsx)(f,{})}):void 0;return(0,v.jsx)(g,{...n,size:t,children:r})},b.args={src:[p(),p(),p(),p()],badged:!1},x=[`Playground`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`({
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