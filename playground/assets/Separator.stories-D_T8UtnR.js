import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{b as n,k as r,n as i}from"./dist-JE-Gteso.js";import{n as a,t as o}from"./Separator-C3t_I-4K.js";import{n as s,t as c}from"./Group-BsDFq5nd.js";import{n as l,t as u}from"./SimpleCell-CovWfDD9.js";import{n as d,t as f}from"./Link-DbKbU27R.js";import{n as p,t as m}from"./Div-DkSA0ZW5.js";import{i as h,n as g,t as _}from"./constants-Dj6vOzIh.js";import{n as v,t as y}from"./createStoryParameters-pz1UrWMe.js";var b,x,S,C,w,T,E=e((()=>{i(),h(),v(),p(),s(),d(),l(),a(),b=t(),x={title:`Layout/Separator`,component:o,parameters:y(`Separator`,_,g),tags:[`Раскладка`]},S={args:{size:`xl`},decorators:[(e,t)=>(0,b.jsxs)(`div`,{style:t.args.direction===`vertical`?{display:`flex`,alignItems:`center`,height:50}:void 0,children:[`Before Separator`,(0,b.jsx)(e,{...t}),`After Separator`]})]},C={...S,decorators:[e=>(0,b.jsxs)(c,{children:[(0,b.jsx)(u,{before:(0,b.jsx)(r,{}),children:`Уведомления`}),(0,b.jsx)(e,{}),(0,b.jsx)(u,{before:(0,b.jsx)(n,{}),children:`Основные`})]})]},w={...S,args:{direction:`vertical`,size:`2xl`},decorators:[(e,t)=>(0,b.jsxs)(m,{style:{display:`flex`},children:[(0,b.jsx)(f,{children:`Новости`}),(0,b.jsx)(e,{...t}),(0,b.jsx)(f,{children:`Звонки`}),(0,b.jsx)(e,{...t}),(0,b.jsx)(f,{children:`Друзья`})]})]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Playground,
  decorators: [Component => <Group>
        <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
        <Component />
        <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
      </Group>]
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`DefaultDirectionExample`,`BlockDirectionExample`]}));export{E as a,T as i,C as n,x as o,S as r,w as t};