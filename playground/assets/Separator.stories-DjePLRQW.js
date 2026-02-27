import{S as p,j as r}from"./iframe-Cn0klKvz.js";import{D as l,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{D as d}from"./Div-C6CxOCne.js";import{G as x}from"./Group-CNhzxREQ.js";import{L as a}from"./Link-Bz2d_U4_.js";import{S as n}from"./SimpleCell-FhAfTR8Z.js";import{I as f}from"./notifications_28-Cz5SMidV.js";import{I as u}from"./sliders_outline_28-ZIkVDePi.js";import"./preload-helper-PPVm8Dsz.js";import"./Footnote-BwZkqEqY.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./Headline-DgEMhIVy.js";import"./Subhead-BQyoBjlR.js";import"./VisuallyHidden-C9tNf48m.js";import"./chevron_compact_right_24-BkZuF5w8.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./chevron_16-5H5JBddQ.js";const H={title:"Layout/Separator",component:p,parameters:c("Separator",m,l),tags:["Раскладка"]},o={args:{size:"xl"},decorators:[(e,t)=>r.jsxs("div",{style:t.args.direction==="vertical"?{display:"flex",alignItems:"center",height:50}:void 0,children:["Before Separator",r.jsx(e,{...t}),"After Separator"]})]},i={...o,decorators:[e=>r.jsxs(x,{children:[r.jsx(n,{before:r.jsx(f,{}),children:"Уведомления"}),r.jsx(e,{}),r.jsx(n,{before:r.jsx(u,{}),children:"Основные"})]})]},s={...o,args:{direction:"vertical",size:"2xl"},decorators:[(e,t)=>r.jsxs(d,{style:{display:"flex"},children:[r.jsx(a,{children:"Новости"}),r.jsx(e,{...t}),r.jsx(a,{children:"Звонки"}),r.jsx(e,{...t}),r.jsx(a,{children:"Друзья"})]})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
