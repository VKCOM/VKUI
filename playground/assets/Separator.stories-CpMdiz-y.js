import{S as p,j as r}from"./iframe-CmkY54f5.js";import{D as m,C as l}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{D as d}from"./Div-CypHjQr-.js";import{G as x}from"./Group-6J2U7NrK.js";import{L as a}from"./Link-X4EUMVjW.js";import{S as n}from"./SimpleCell-CINcSEmj.js";import{I as f}from"./notifications_28-DSiGujmb.js";import{I as u}from"./sliders_outline_28-RYRZkoL2.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dh1koNQe.js";import"./Tappable-DW-ilhli.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./InputUtils-UNO81DKX.js";import"./Headline-DsYeFntm.js";import"./Subhead-BS8ES9bw.js";import"./VisuallyHidden-Da3ud9kw.js";import"./chevron_compact_right_24-CcDOCtXp.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CCLojpkC.js";const K={title:"Layout/Separator",component:p,parameters:c("Separator",l,m),tags:["Раскладка"]},o={args:{size:"xl"},decorators:[(e,t)=>r.jsxs("div",{style:t.args.direction==="vertical"?{display:"flex",alignItems:"center",height:50}:void 0,children:["Before Separator",r.jsx(e,{...t}),"After Separator"]})]},i={...o,decorators:[e=>r.jsxs(x,{children:[r.jsx(n,{before:r.jsx(f,{}),children:"Уведомления"}),r.jsx(e,{}),r.jsx(n,{before:r.jsx(u,{}),children:"Основные"})]})]},s={...o,args:{direction:"vertical",size:"2xl"},decorators:[(e,t)=>r.jsxs(d,{style:{display:"flex"},children:[r.jsx(a,{children:"Новости"}),r.jsx(e,{...t}),r.jsx(a,{children:"Звонки"}),r.jsx(e,{...t}),r.jsx(a,{children:"Друзья"})]})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
