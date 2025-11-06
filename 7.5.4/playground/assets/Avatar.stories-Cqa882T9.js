import{j as r}from"./iframe-DQDZnzQe.js";import{w as j}from"./withCartesian-Cd5XUTsF.js";import{C as A}from"./constants-DdkjnEgz.js";import{i as b,I as o,a as B}from"./icons-BkLrYjOV.js";import{g as I}from"./mock-BznupqUM.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-4IjQEWlF.js";import"./ImageBase-VWSBvzf0.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-BUi6r-Q8.js";import"./useColorScheme-alZiR8qg.js";import"./InputUtils-CKZOM7f4.js";import"./useFocusWithin-DP8QP68V.js";import"./useIsClient-w_GYH5P_.js";import"./add_outline_24-SkBRbG9n.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./helpers-QklJbEbU.js";import"./add_outline_28-DZ7mORHt.js";import"./useConfigDirection-CFM_wEcG.js";import"./online_mobile_12-BObMLxiO.js";const Y={title:"Data Display/Avatar",component:a,parameters:f("Avatar",A),argTypes:{size:{control:{type:"select"},options:[...b]},badge:{description:"Использовать Badge",table:{type:{summary:"string"}},options:["None","BadgeOnline","BadgeOnlineMobile","Icon"],mapping:{None:null,BadgeOnline:r.jsx(a.BadgeWithPreset,{preset:"online"}),BadgeOnlineMobile:r.jsx(a.BadgeWithPreset,{preset:"online-mobile"}),Icon:r.jsx(a.Badge,{children:r.jsx(B,{})})},control:{type:"inline-radio"}},overlay:{description:"Использовать Overlay",table:{type:{summary:"string"}},options:["None","OnHover","Always"],mapping:{None:null,OnHover:r.jsx(a.Overlay,{children:r.jsx(o,{})}),Always:r.jsx(a.Overlay,{visibility:"always",children:r.jsx(o,{})})},control:{type:"inline-radio"}}},decorators:[j],tags:["Отображение данных"]},e={args:{alt:"Фотография Татьяны Плуталовой"},render:({badge:x,overlay:O,children:h,size:i=48,...t})=>r.jsxs(a,{src:t.initials?void 0:I("user_id34"),...t,size:i,children:[i>=24&&x,O,h]})},s={...e,args:{...e.args,children:r.jsx(a.Badge,{children:r.jsx(B,{})})}},n={...e,args:{...e.args,children:r.jsx(a.Overlay,{"aria-label":"Кнопка для изображения",children:r.jsx(o,{})})}};var l,m,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,c,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    children: <Avatar.Badge>
        <IconExampleForBadgeBasedOnImageBaseSize />
      </Avatar.Badge>
  }
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var y,v,u;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    children: <Avatar.Overlay aria-label="Кнопка для изображения">
        <IconExampleForOverlayBasedOnImageBaseSize />
      </Avatar.Overlay>
  }
}`,...(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const Z=["Playground","WithBadge","WithOverlay"];export{e as Playground,s as WithBadge,n as WithOverlay,Z as __namedExportsOrder,Y as default};
