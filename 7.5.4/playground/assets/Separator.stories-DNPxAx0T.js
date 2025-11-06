import{S as g,j as r}from"./iframe-DQDZnzQe.js";import{D as j,C as y}from"./constants-DdkjnEgz.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{D as h}from"./Div-B9g--vaV.js";import{G as v}from"./Group-qnf_xRXF.js";import{L as i}from"./Link-BZlfc8AZ.js";import{S as n}from"./SimpleCell-CmzfnJ0J.js";import{I as D}from"./notifications_28-Bt5aXV57.js";import{I as L}from"./sliders_outline_28-D38Bd3JZ.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-y02Efo06.js";import"./Tappable-GGjjvyZD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CKZOM7f4.js";import"./Headline-DFYCKKj3.js";import"./Subhead-CV6mVfj0.js";import"./chevron_compact_right_24-BJHNvhLk.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./chevron_16-D6ldfjxj.js";const W={title:"Layout/Separator",component:g,parameters:C("Separator",y,j),tags:["Раскладка"]},o={args:{size:"xl"},decorators:[(e,t)=>r.jsxs("div",{style:t.args.direction==="vertical"?{display:"flex",alignItems:"center",height:50}:void 0,children:["Before Separator",r.jsx(e,{...t}),"After Separator"]})]},s={...o,decorators:[e=>r.jsxs(v,{children:[r.jsx(n,{before:r.jsx(D,{}),children:"Уведомления"}),r.jsx(e,{}),r.jsx(n,{before:r.jsx(L,{}),children:"Основные"})]})]},a={...o,args:{direction:"vertical",size:"2xl"},decorators:[(e,t)=>r.jsxs(h,{style:{display:"flex"},children:[r.jsx(i,{children:"Новости"}),r.jsx(e,{...t}),r.jsx(i,{children:"Звонки"}),r.jsx(e,{...t}),r.jsx(i,{children:"Друзья"})]})]};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Playground,
  decorators: [Component => <Group>
        <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
        <Component />
        <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
      </Group>]
}`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var f,u,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const X=["Playground","DefaultDirectionExample","BlockDirectionExample"];export{a as BlockDirectionExample,s as DefaultDirectionExample,o as Playground,X as __namedExportsOrder,W as default};
