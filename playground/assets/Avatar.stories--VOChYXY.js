import{j as r}from"./iframe-DDos8QSD.js";import{w as j}from"./withCartesian-CMfOc2kK.js";import{C as A}from"./constants-DdkjnEgz.js";import{i as b,I as o,a as B}from"./icons-u9MyvewS.js";import{g as I}from"./mock-BznupqUM.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{A as e}from"./Avatar-D7U-bWyu.js";import"./ImageBase-DfIHrg5j.js";import"./Clickable-CWxsm2KA.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-duB4zrMc.js";import"./useColorScheme-DqjxLW2f.js";import"./InputUtils-Dyyzogrc.js";import"./useFocusWithin-Cy7ZAR8z.js";import"./useIsClient-CKD-xsUI.js";import"./add_outline_24-VDZqAqer.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-D7q7mL8J.js";import"./helpers-QklJbEbU.js";import"./add_outline_28-BvTIrZhD.js";import"./useConfigDirection-BVLc7CyO.js";import"./online_mobile_12-Ct9KWEFO.js";const X={title:"Blocks/Avatar",component:e,parameters:f("Avatar",A),argTypes:{size:{control:{type:"select"},options:[...b]},badge:{description:"Использовать Badge",table:{type:{summary:"string"}},options:["None","BadgeOnline","BadgeOnlineMobile","Icon"],mapping:{None:null,BadgeOnline:r.jsx(e.BadgeWithPreset,{preset:"online"}),BadgeOnlineMobile:r.jsx(e.BadgeWithPreset,{preset:"online-mobile"}),Icon:r.jsx(e.Badge,{children:r.jsx(B,{})})},control:{type:"inline-radio"}},overlay:{description:"Использовать Overlay",table:{type:{summary:"string"}},options:["None","OnHover","Always"],mapping:{None:null,OnHover:r.jsx(e.Overlay,{children:r.jsx(o,{})}),Always:r.jsx(e.Overlay,{visibility:"always",children:r.jsx(o,{})})},control:{type:"inline-radio"}}},decorators:[j]},a={args:{alt:"Фотография Татьяны Плуталовой"},render:({badge:x,overlay:O,children:h,size:i=48,...t})=>r.jsxs(e,{src:t.initials?void 0:I("user_id34"),...t,size:i,children:[i>=24&&x,O,h]})},s={...a,args:{...a.args,children:r.jsx(e.Badge,{children:r.jsx(B,{})})}},n={...a,args:{...a.args,children:r.jsx(e.Overlay,{"aria-label":"Кнопка для изображения",children:r.jsx(o,{})})}};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,c,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const Y=["Playground","WithBadge","WithOverlay"];export{a as Playground,s as WithBadge,n as WithOverlay,Y as __namedExportsOrder,X as default};
