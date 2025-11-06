import{j as r}from"./iframe-CdtcRMP-.js";import{w as j}from"./withCartesian-Ct1LVHr9.js";import{C as A}from"./constants-DdkjnEgz.js";import{i as b,I as n,a as B}from"./icons-D_wIVV1L.js";import{g as I}from"./mock-BznupqUM.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BXKCkIBT.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-BuKB8O3U.js";import"./Clickable-nnjkiOyK.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-ClYqcA4W.js";import"./useColorScheme-Bqwp8l3s.js";import"./InputUtils-4kqGTgL9.js";import"./useFocusWithin-CnBAXQ2U.js";import"./useIsClient-B7bjAOfN.js";import"./add_outline_24-DiWj4Bcx.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./add_outline_28-DRuVVd39.js";import"./useConfigDirection-I0bRjt3K.js";import"./online_mobile_12--qRJFinP.js";const Z={title:"Data Display/Avatar",component:a,parameters:f("Avatar",A),argTypes:{size:{control:{type:"select"},options:[...b]},badge:{description:"Использовать Badge",table:{type:{summary:"string"}},options:["None","BadgeOnline","BadgeOnlineMobile","Icon"],mapping:{None:null,BadgeOnline:r.jsx(a.BadgeWithPreset,{preset:"online"}),BadgeOnlineMobile:r.jsx(a.BadgeWithPreset,{preset:"online-mobile"}),Icon:r.jsx(a.Badge,{children:r.jsx(B,{})})},control:{type:"inline-radio"}},overlay:{description:"Использовать Overlay",table:{type:{summary:"string"}},options:["None","OnHover","Always"],mapping:{None:null,OnHover:r.jsx(a.Overlay,{children:r.jsx(n,{})}),Always:r.jsx(a.Overlay,{visibility:"always",children:r.jsx(n,{})})},control:{type:"inline-radio"}}},decorators:[j],tags:["Отображение данных"]},e={args:{alt:"Фотография Татьяны Плуталовой"},render:({badge:x,overlay:O,children:h,size:i=48,...t})=>r.jsxs(a,{src:t.initials?void 0:I("user_id34"),...t,size:i,children:[i>=24&&x,O,h]})},s={...e,args:{...e.args,children:r.jsx(a.Badge,{children:r.jsx(B,{})})}},o={...e,args:{...e.args,children:r.jsx(a.Overlay,{"aria-label":"Кнопка для изображения",children:r.jsx(n,{})})}};var l,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,c,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    children: <Avatar.Badge>
        <IconExampleForBadgeBasedOnImageBaseSize />
      </Avatar.Badge>
  }
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var y,v,u;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    children: <Avatar.Overlay aria-label="Кнопка для изображения">
        <IconExampleForOverlayBasedOnImageBaseSize />
      </Avatar.Overlay>
  }
}`,...(u=(v=o.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const $=["Playground","WithBadge","WithOverlay"];export{e as Playground,s as WithBadge,o as WithOverlay,$ as __namedExportsOrder,Z as default};
