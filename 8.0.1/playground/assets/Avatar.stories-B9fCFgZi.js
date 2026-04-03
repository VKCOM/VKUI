import{n as e,r as t}from"./chunk-BneVvdWh.js";import{yo as n}from"./iframe-DYi3TMGx.js";import{a as r,i,n as a,r as o,t as s}from"./icons-DqgoJDac.js";import{n as c,t as l}from"./Avatar-BmBkrJji.js";import{i as u,t as d}from"./constants-DdtDghDm.js";import{n as f,t as p}from"./createStoryParameters-cWWuDqBQ.js";import{n as m,t as h}from"./src-CCfyPkEG.js";import{n as g,o as _}from"./mock-B_w95Aq1.js";var v=t({Playground:()=>x,WithBadge:()=>S,WithOverlay:()=>C,__namedExportsOrder:()=>w,default:()=>b}),y,b,x,S,C,w,T=e((()=>{h(),u(),o(),_(),f(),r(),c(),y=n(),b={title:`Data Display/Avatar`,component:l,parameters:p(`Avatar`,d),argTypes:{size:{control:{type:`select`},options:[...i]},badge:{description:`Использовать Badge`,table:{type:{summary:`string`}},options:[`None`,`BadgeOnline`,`BadgeOnlineMobile`,`Icon`],mapping:{None:null,BadgeOnline:(0,y.jsx)(l.BadgeWithPreset,{preset:`online`}),BadgeOnlineMobile:(0,y.jsx)(l.BadgeWithPreset,{preset:`online-mobile`}),Icon:(0,y.jsx)(l.Badge,{children:(0,y.jsx)(s,{})})},control:{type:`inline-radio`}},overlay:{description:`Использовать Overlay`,table:{type:{summary:`string`}},options:[`None`,`OnHover`,`Always`],mapping:{None:null,OnHover:(0,y.jsx)(l.Overlay,{children:(0,y.jsx)(a,{})}),Always:(0,y.jsx)(l.Overlay,{visibility:`always`,children:(0,y.jsx)(a,{})})},control:{type:`inline-radio`}}},decorators:[m],tags:[`Отображение данных`]},x={args:{alt:`Фотография Татьяны Плуталовой`},render:({badge:e,overlay:t,children:n,size:r=48,...i})=>(0,y.jsxs)(l,{src:i.initials?void 0:g(`user_id34`),...i,size:r,children:[r>=24&&e,t,n]})},S={...x,args:{...x.args,children:(0,y.jsx)(l.Badge,{children:(0,y.jsx)(s,{})})}},C={...x,args:{...x.args,children:(0,y.jsx)(l.Overlay,{"aria-label":`Кнопка для изображения`,children:(0,y.jsx)(a,{})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    alt: 'Фотография Татьяны Плуталовой'
  },
  render: ({
    badge,
    overlay,
    children,
    size = 48,
    ...args
  }) => <Avatar src={args.initials ? undefined : getAvatarUrl('user_id34')} {...args} size={size}>
      {size >= 24 && badge}
      {overlay}
      {children}
    </Avatar>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    children: <Avatar.Badge>
        <IconExampleForBadgeBasedOnImageBaseSize />
      </Avatar.Badge>
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    children: <Avatar.Overlay aria-label="Кнопка для изображения">
        <IconExampleForOverlayBasedOnImageBaseSize />
      </Avatar.Overlay>
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`WithBadge`,`WithOverlay`]}));export{x as n,T as r,v as t};