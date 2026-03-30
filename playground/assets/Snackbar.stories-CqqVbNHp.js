import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Dr as n,On as r,cr as i,ps as a,yo as o}from"./iframe-DYsbkMbM.js";import{n as s,t as c}from"./Snackbar-B7oo-VIj.js";import{n as l,t as u}from"./Avatar-B74GJaOW.js";import{n as d,t as f}from"./Image-Anb3V6hT.js";import{i as p,n as m,r as h,t as g}from"./constants-CXYaXe_q.js";import{n as _,t as v}from"./createStoryParameters-CbXzS3a6.js";import{r as y}from"./getFormFieldIconsPresets-CZ22RewF.js";import{t as b}from"./presets-BahE6g_I.js";import{n as x,o as S}from"./mock-CFHZcj-X.js";var C,w,T,E,D,O,k;t((()=>{C=e(a(),1),r(),p(),S(),b(),_(),l(),d(),s(),w=o(),T={title:`Feedback/Snackbar`,component:c,parameters:v(`Snackbar`,g,m),argTypes:{before:y({iconSizes:[`24`,`28`],additionalPresets:{Icon24ThumbsUpOutline:(0,w.jsx)(n,{fill:`var(--vkui--color_icon_accent)`}),Icon28ErrorCircleOutline:(0,w.jsx)(i,{fill:`var(--vkui--color_icon_negative)`}),Avatar:(0,w.jsx)(u,{size:32,src:x()}),Image:(0,w.jsx)(f,{size:40,src:x(`app_shorm_online`)})}}),after:y({iconSizes:[`24`],sizeIconsCount:10,additionalPresets:{Avatar:(0,w.jsx)(u,{size:32,src:x()})}}),subtitle:h,offsetY:h},tags:[`Обратная связь`]},E={render:function({onClosed:e,...t}){let[n,r]=C.useState(!0);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`button`,{onClick:()=>r(!0),children:`Открыть`}),n?(0,w.jsx)(c,{onClosed:()=>{r(!1),e?.()},...t}):null]})},args:{before:`Icon24ThumbsUpOutline`,action:`Поделиться`,children:`Этот сервис рекомендует один друг`},argTypes:{action:{control:`text`}}},D={...E,args:{...E.args,action:void 0,subtitle:`Вы можете порекомендовать сервис в дополнительном меню`}},O={...E,args:{...E.args,action:void 0,offsetY:`48px`}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render({
    onClosed,
    ...args
  }) {
    const [open, setOpen] = React.useState(true);
    const handleClosed = () => {
      setOpen(false);
      onClosed?.();
    };
    return <>
        <button onClick={() => setOpen(true)}>Открыть</button>
        {open ? <Snackbar onClosed={handleClosed} {...args} /> : null}
      </>;
  },
  args: {
    before: 'Icon24ThumbsUpOutline',
    action: 'Поделиться',
    children: 'Этот сервис рекомендует один друг'
  },
  argTypes: {
    action: {
      control: 'text'
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    action: undefined,
    subtitle: 'Вы можете порекомендовать сервис в дополнительном меню'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    action: undefined,
    offsetY: '48px'
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`WithSubtitle`,`WithBottomOffset`]}))();export{E as Playground,O as WithBottomOffset,D as WithSubtitle,k as __namedExportsOrder,T as default};