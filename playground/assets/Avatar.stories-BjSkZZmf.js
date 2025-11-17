import{j as r}from"./iframe-DhuutAfC.js";import{w as c}from"./withCartesian-DlJDWAE1.js";import{C as g}from"./constants-DdkjnEgz.js";import{i as y,I as n,a as l}from"./icons-DP5wmzFw.js";import{g as v}from"./mock-CiudtyON.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CfoX7h1q.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DRHnsmF9.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./ImageBaseBadge-C-TjMgFh.js";import"./useColorScheme-BGUvzePH.js";import"./InputUtils-BcFat9xH.js";import"./useFocusWithin-TQRavq7I.js";import"./useIsClient-C6EQizwd.js";import"./add_outline_24-9ec0Aefj.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./add_outline_28-Bf6vMcIp.js";import"./useConfigDirection-BKOpe2-3.js";import"./online_mobile_12-B0P5OQgy.js";const q={title:"Data Display/Avatar",component:a,parameters:u("Avatar",g),argTypes:{size:{control:{type:"select"},options:[...y]},badge:{description:"Использовать Badge",table:{type:{summary:"string"}},options:["None","BadgeOnline","BadgeOnlineMobile","Icon"],mapping:{None:null,BadgeOnline:r.jsx(a.BadgeWithPreset,{preset:"online"}),BadgeOnlineMobile:r.jsx(a.BadgeWithPreset,{preset:"online-mobile"}),Icon:r.jsx(a.Badge,{children:r.jsx(l,{})})},control:{type:"inline-radio"}},overlay:{description:"Использовать Overlay",table:{type:{summary:"string"}},options:["None","OnHover","Always"],mapping:{None:null,OnHover:r.jsx(a.Overlay,{children:r.jsx(n,{})}),Always:r.jsx(a.Overlay,{visibility:"always",children:r.jsx(n,{})})},control:{type:"inline-radio"}}},decorators:[c],tags:["Отображение данных"]},e={args:{alt:"Фотография Татьяны Плуталовой"},render:({badge:m,overlay:p,children:d,size:i=48,...t})=>r.jsxs(a,{src:t.initials?void 0:v("user_id34"),...t,size:i,children:[i>=24&&m,p,d]})},s={...e,args:{...e.args,children:r.jsx(a.Badge,{children:r.jsx(l,{})})}},o={...e,args:{...e.args,children:r.jsx(a.Overlay,{"aria-label":"Кнопка для изображения",children:r.jsx(n,{})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    children: <Avatar.Badge>
        <IconExampleForBadgeBasedOnImageBaseSize />
      </Avatar.Badge>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    children: <Avatar.Overlay aria-label="Кнопка для изображения">
        <IconExampleForOverlayBasedOnImageBaseSize />
      </Avatar.Overlay>
  }
}`,...o.parameters?.docs?.source}}};const G=["Playground","WithBadge","WithOverlay"];export{e as Playground,s as WithBadge,o as WithOverlay,G as __namedExportsOrder,q as default};
