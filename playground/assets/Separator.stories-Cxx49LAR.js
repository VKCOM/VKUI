import{S as g,j as r}from"./iframe-BdL7Qu3-.js";import{D as j,C as y}from"./constants-DdkjnEgz.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{D as h}from"./Div-Q36WEfaW.js";import{G as v}from"./Group-1bWIf9u2.js";import{L as i}from"./Link-8VBCKWew.js";import{S as n}from"./SimpleCell-DtSFoJ-l.js";import{I as D}from"./notifications_28-DoOsMz39.js";import{I as L}from"./sliders_outline_28-BBvuTQVC.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Cejbc8FV.js";import"./Tappable-DH_64QBQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zgtvQHiz.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DfOLgQuD.js";import"./Headline-IzZ5JXBy.js";import"./Subhead-CEr4zt5A.js";import"./chevron_compact_right_24-AP5wuFgI.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./chevron_16-Dq6TqX7-.js";const W={title:"Layout/Separator",component:g,parameters:C("Separator",y,j),tags:["Раскладка"]},o={args:{size:"xl"},decorators:[(e,t)=>r.jsxs("div",{style:t.args.direction==="vertical"?{display:"flex",alignItems:"center",height:50}:void 0,children:["Before Separator",r.jsx(e,{...t}),"After Separator"]})]},s={...o,decorators:[e=>r.jsxs(v,{children:[r.jsx(n,{before:r.jsx(D,{}),children:"Уведомления"}),r.jsx(e,{}),r.jsx(n,{before:r.jsx(L,{}),children:"Основные"})]})]},a={...o,args:{direction:"vertical",size:"2xl"},decorators:[(e,t)=>r.jsxs(h,{style:{display:"flex"},children:[r.jsx(i,{children:"Новости"}),r.jsx(e,{...t}),r.jsx(i,{children:"Звонки"}),r.jsx(e,{...t}),r.jsx(i,{children:"Друзья"})]})]};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
