import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{a as n,i as r,n as i,r as a,t as o}from"./icons-BRsuiIUI.js";import{n as s,t as c}from"./Avatar-DDrJjOMS.js";import{i as l,t as u}from"./constants-Dj6vOzIh.js";import{n as d,t as f}from"./createStoryParameters-pz1UrWMe.js";import{n as p,t as m}from"./src-13y77QG6.js";import{n as h,o as g}from"./mock-D9mwry-3.js";var _,v,y,b,x,S,C=e((()=>{m(),l(),a(),g(),d(),n(),s(),_=t(),v={title:`Data Display/Avatar`,component:c,parameters:f(`Avatar`,u),argTypes:{size:{control:{type:`select`},options:[...r]},badge:{description:`Использовать Badge`,table:{type:{summary:`string`}},options:[`None`,`BadgeOnline`,`BadgeOnlineMobile`,`Icon`],mapping:{None:null,BadgeOnline:(0,_.jsx)(c.BadgeWithPreset,{preset:`online`}),BadgeOnlineMobile:(0,_.jsx)(c.BadgeWithPreset,{preset:`online-mobile`}),Icon:(0,_.jsx)(c.Badge,{children:(0,_.jsx)(o,{})})},control:{type:`inline-radio`}},overlay:{description:`Использовать Overlay`,table:{type:{summary:`string`}},options:[`None`,`OnHover`,`Always`],mapping:{None:null,OnHover:(0,_.jsx)(c.Overlay,{children:(0,_.jsx)(i,{})}),Always:(0,_.jsx)(c.Overlay,{visibility:`always`,children:(0,_.jsx)(i,{})})},control:{type:`inline-radio`}}},decorators:[p],tags:[`Отображение данных`]},y={args:{alt:`Фотография Татьяны Плуталовой`},render:({badge:e,overlay:t,children:n,size:r=48,...i})=>(0,_.jsxs)(c,{src:i.initials?void 0:h(`user_id34`),...i,size:r,children:[r>=24&&e,t,n]})},b={...y,args:{...y.args,children:(0,_.jsx)(c.Badge,{children:(0,_.jsx)(o,{})})}},x={...y,args:{...y.args,children:(0,_.jsx)(c.Overlay,{"aria-label":`Кнопка для изображения`,children:(0,_.jsx)(i,{})})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    children: <Avatar.Badge>
        <IconExampleForBadgeBasedOnImageBaseSize />
      </Avatar.Badge>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    children: <Avatar.Overlay aria-label="Кнопка для изображения">
        <IconExampleForOverlayBasedOnImageBaseSize />
      </Avatar.Overlay>
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`WithBadge`,`WithOverlay`]}));export{C as a,S as i,b as n,v as o,x as r,y as t};