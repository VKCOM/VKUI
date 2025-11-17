import{S as p,j as r}from"./iframe-DhuutAfC.js";import{D as m,C as l}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{D as d}from"./Div-BKcZLB21.js";import{G as x}from"./Group-BZNrT2Zp.js";import{L as a}from"./Link-BWWYw9fq.js";import{S as n}from"./SimpleCell-Ik9ZceqB.js";import{I as f}from"./notifications_28-CogFriO4.js";import{I as u}from"./sliders_outline_28-CIZHeGkm.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BE0sRU6f.js";import"./Tappable-tvWVp5xX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./InputUtils-BcFat9xH.js";import"./Headline-CY9tv16R.js";import"./Subhead-N3Y6Abab.js";import"./VisuallyHidden-BkhWnsJf.js";import"./chevron_compact_right_24-e5As_rIW.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-B8RroCu2.js";const K={title:"Layout/Separator",component:p,parameters:c("Separator",l,m),tags:["Раскладка"]},o={args:{size:"xl"},decorators:[(e,t)=>r.jsxs("div",{style:t.args.direction==="vertical"?{display:"flex",alignItems:"center",height:50}:void 0,children:["Before Separator",r.jsx(e,{...t}),"After Separator"]})]},i={...o,decorators:[e=>r.jsxs(x,{children:[r.jsx(n,{before:r.jsx(f,{}),children:"Уведомления"}),r.jsx(e,{}),r.jsx(n,{before:r.jsx(u,{}),children:"Основные"})]})]},s={...o,args:{direction:"vertical",size:"2xl"},decorators:[(e,t)=>r.jsxs(d,{style:{display:"flex"},children:[r.jsx(a,{children:"Новости"}),r.jsx(e,{...t}),r.jsx(a,{children:"Звонки"}),r.jsx(e,{...t}),r.jsx(a,{children:"Друзья"})]})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const M=["Playground","DefaultDirectionExample","BlockDirectionExample"];export{s as BlockDirectionExample,i as DefaultDirectionExample,o as Playground,M as __namedExportsOrder,K as default};
