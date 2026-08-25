import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{$t as i,ht as a,n as o}from"./dist-BrTYZxJF.js";import{n as s,t as c}from"./Snackbar-DhOsUveI.js";import{n as l,t as u}from"./Avatar-DoiR7xFu.js";import{n as d,t as f}from"./Image-DtmBlPSV.js";import{i as p,n as m,r as h,t as g}from"./constants-DBkyy3CT.js";import{n as _,t as v}from"./createStoryParameters-DBkK1CfQ.js";import{n as y,t as b}from"./createFieldWithPresets-8nzub44p.js";import{n as x,o as S}from"./mock-CkzEkxhs.js";var C,w,T,E,D,O,k;function A(){return(A=t((()=>{C=e(n(),1),o(),p(),S(),y(),_(),l(),d(),s(),w=r(),T={title:`Feedback/Snackbar`,component:c,parameters:v(`Snackbar`,g,m),argTypes:{before:b({iconSizes:[`24`,`28`],additionalPresets:{Icon24ThumbsUpOutline:(0,w.jsx)(i,{fill:`var(--vkui--color_icon_accent)`}),Icon28ErrorCircleOutline:(0,w.jsx)(a,{fill:`var(--vkui--color_icon_negative)`}),Avatar:(0,w.jsx)(u,{size:32,src:x()}),Image:(0,w.jsx)(f,{size:40,src:x(`app_shorm_online`)})}}),after:b({iconSizes:[`24`],sizeIconsCount:10,additionalPresets:{Avatar:(0,w.jsx)(u,{size:32,src:x()})}}),subtitle:h,offsetY:h,action:{control:`text`}},tags:[`Обратная связь`]},E=e=>{let[t,n]=C.useState(!0),r=()=>{n(!1),e.onClosed?.()};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`button`,{onClick:()=>n(!0),children:`Открыть`}),t?(0,w.jsx)(c,{...e,onClosed:r}):null]})},E.args={before:`Icon24ThumbsUpOutline`,action:`Поделиться`,children:`Этот сервис рекомендует один друг`},D=E.bind({}),D.args={...E.args,action:void 0,subtitle:`Вы можете порекомендовать сервис в дополнительном меню`},O=E.bind({}),O.args={...E.args,action:void 0,offsetY:`48px`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(args: SnackbarProps) => {
  const [open, setOpen] = React.useState(true);
  const handleClosed = () => {
    setOpen(false);
    args.onClosed?.();
  };
  return <>
      <button onClick={() => setOpen(true)}>Открыть</button>
      {open ? <Snackbar {...args} onClosed={handleClosed} /> : null}
    </>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(args: SnackbarProps) => {
  const [open, setOpen] = React.useState(true);
  const handleClosed = () => {
    setOpen(false);
    args.onClosed?.();
  };
  return <>
      <button onClick={() => setOpen(true)}>Открыть</button>
      {open ? <Snackbar {...args} onClosed={handleClosed} /> : null}
    </>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(args: SnackbarProps) => {
  const [open, setOpen] = React.useState(true);
  const handleClosed = () => {
    setOpen(false);
    args.onClosed?.();
  };
  return <>
      <button onClick={() => setOpen(true)}>Открыть</button>
      {open ? <Snackbar {...args} onClosed={handleClosed} /> : null}
    </>;
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`WithSubtitle`,`WithBottomOffset`]})))()}A();export{E as Playground,O as WithBottomOffset,D as WithSubtitle,k as __namedExportsOrder,T as default};