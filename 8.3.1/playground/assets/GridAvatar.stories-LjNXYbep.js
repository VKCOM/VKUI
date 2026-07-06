import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{a as i,i as a,r as o,t as s}from"./icons-Cq7NMKAp.js";import{n as c,t as l}from"./GridAvatar-tmLPkDDs.js";import{i as u,t as d}from"./constants-cjed6ZWB.js";import{n as f,t as p}from"./createStoryParameters-CMHckkzt.js";import{r as m,t as h}from"./src-Baqpfbsn.js";import{n as g,o as _}from"./mock-K9LjXOLX.js";var v=e({Playground:()=>x,__namedExportsOrder:()=>S,default:()=>b}),y,b,x,S,C=t((()=>{h(),u(),o(),_(),f(),i(),c(),y=n(r(),1),b={title:`Data Display/GridAvatar`,component:l,parameters:p(`GridAvatar`,d),argTypes:{badged:{control:`boolean`},size:{control:{type:`select`},options:[...a]}},decorators:[m],tags:[`Отображение данных`]},x=({badged:e,size:t=48,...n})=>{let r=t>=24&&e?(0,y.jsx)(l.Badge,{children:(0,y.jsx)(s,{})}):void 0;return(0,y.jsx)(l,{...n,size:t,children:r})},x.args={src:[g(),g(),g(),g()],badged:!1},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`({
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
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}));export{x as n,C as r,v as t};