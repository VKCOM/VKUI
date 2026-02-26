import{S as p,j as r}from"./iframe-C4bTyPBQ.js";import{D as l,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{D as d}from"./Div-Be1bc1Az.js";import{G as x}from"./Group-B0qSQvWx.js";import{L as a}from"./Link-D4FH9G2C.js";import{S as n}from"./SimpleCell-3wWwuzOF.js";import{I as f}from"./notifications_28-BmCY6set.js";import{I as u}from"./sliders_outline_28-Bgzo5teL.js";import"./preload-helper-PPVm8Dsz.js";import"./Footnote-wW_hecXF.js";import"./Tappable-BZW__-HP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./InputUtils-Ns7QNyDT.js";import"./Headline-B4T2ew9V.js";import"./Subhead-CGMBr7DJ.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./chevron_compact_right_24-9Y_UhAEg.js";import"./SvgIconRootV2-DbftVVP5.js";import"./chevron_16-D1zTg27u.js";const H={title:"Layout/Separator",component:p,parameters:c("Separator",m,l),tags:["Раскладка"]},o={args:{size:"xl"},decorators:[(e,t)=>r.jsxs("div",{style:t.args.direction==="vertical"?{display:"flex",alignItems:"center",height:50}:void 0,children:["Before Separator",r.jsx(e,{...t}),"After Separator"]})]},i={...o,decorators:[e=>r.jsxs(x,{children:[r.jsx(n,{before:r.jsx(f,{}),children:"Уведомления"}),r.jsx(e,{}),r.jsx(n,{before:r.jsx(u,{}),children:"Основные"})]})]},s={...o,args:{direction:"vertical",size:"2xl"},decorators:[(e,t)=>r.jsxs(d,{style:{display:"flex"},children:[r.jsx(a,{children:"Новости"}),r.jsx(e,{...t}),r.jsx(a,{children:"Звонки"}),r.jsx(e,{...t}),r.jsx(a,{children:"Друзья"})]})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  },
  decorators: [(Component, props) => <div style={props.args.direction === 'vertical' ? {
    display: 'flex',
    alignItems: 'center',
    height: 50
  } : undefined}>
        Before Separator
        <Component {...props} />
        After Separator
      </div>]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Playground,
  decorators: [Component => <Group>
        <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
        <Component />
        <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
      </Group>]
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    direction: 'vertical',
    size: '2xl'
  },
  decorators: [(Component, props) => <Div style={{
    display: 'flex'
  }}>
        <Link>Новости</Link>
        <Component {...props} />
        <Link>Звонки</Link>
        <Component {...props} />
        <Link>Друзья</Link>
      </Div>]
}`,...s.parameters?.docs?.source}}};const J=["Playground","DefaultDirectionExample","BlockDirectionExample"];export{s as BlockDirectionExample,i as DefaultDirectionExample,o as Playground,J as __namedExportsOrder,H as default};
