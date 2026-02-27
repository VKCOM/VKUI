import{j as r}from"./iframe-Cn0klKvz.js";import{w as c}from"./withCartesian-pzStfd1W.js";import{C as g}from"./constants-DdkjnEgz.js";import{i as y,I as l,a as n}from"./icons-Ap29yqZU.js";import{g as v}from"./mock-KFM_xxXO.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CT-zlOwi.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-BDlDuAlq.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./ImageBaseBadge-CMNLexKF.js";import"./useColorScheme-C7zCwRzY.js";import"./InputUtils-B6qCikuW.js";import"./useFocusWithin-GdWsk7hi.js";import"./useIsClient-CY4E_kP3.js";import"./add_outline_24-DXdOm7we.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./add_outline_28-2ouzDw8O.js";import"./helpers-QklJbEbU.js";import"./useConfigDirection-DuEYXWS_.js";import"./online_mobile_12-BKRTJpWf.js";const k={title:"Data Display/Avatar",component:a,parameters:u("Avatar",g),argTypes:{size:{control:{type:"select"},options:[...y]},badge:{description:"Использовать Badge",table:{type:{summary:"string"}},options:["None","BadgeOnline","BadgeOnlineMobile","Icon"],mapping:{None:null,BadgeOnline:r.jsx(a.BadgeWithPreset,{preset:"online"}),BadgeOnlineMobile:r.jsx(a.BadgeWithPreset,{preset:"online-mobile"}),Icon:r.jsx(a.Badge,{children:r.jsx(l,{})})},control:{type:"inline-radio"}},overlay:{description:"Использовать Overlay",table:{type:{summary:"string"}},options:["None","OnHover","Always"],mapping:{None:null,OnHover:r.jsx(a.Overlay,{children:r.jsx(n,{})}),Always:r.jsx(a.Overlay,{visibility:"always",children:r.jsx(n,{})})},control:{type:"inline-radio"}}},decorators:[c],tags:["Отображение данных"]},e={args:{alt:"Фотография Татьяны Плуталовой"},render:({badge:m,overlay:p,children:d,size:i=48,...t})=>r.jsxs(a,{src:t.initials?void 0:v("user_id34"),...t,size:i,children:[i>=24&&m,p,d]})},s={...e,args:{...e.args,children:r.jsx(a.Badge,{children:r.jsx(l,{})})}},o={...e,args:{...e.args,children:r.jsx(a.Overlay,{"aria-label":"Кнопка для изображения",children:r.jsx(n,{})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Playground","WithBadge","WithOverlay"];export{e as Playground,s as WithBadge,o as WithOverlay,q as __namedExportsOrder,k as default};
