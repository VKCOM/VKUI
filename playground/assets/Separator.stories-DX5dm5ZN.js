import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Kn as n,On as r,et as i,tr as a,tt as o,yo as s}from"./iframe-lhb8_BzR.js";import{n as c,t as l}from"./Group-BJ5gURe8.js";import{n as u,t as d}from"./SimpleCell-M4-6NF60.js";import{n as f,t as p}from"./Link-BWbzgOWW.js";import{n as m,t as h}from"./Div-Cc9R1fc6.js";import{i as g,n as _,t as v}from"./constants-CXYaXe_q.js";import{n as y,t as b}from"./createStoryParameters-CbXzS3a6.js";var x=t({BlockDirectionExample:()=>E,DefaultDirectionExample:()=>T,Playground:()=>w,__namedExportsOrder:()=>D,default:()=>C}),S,C,w,T,E,D,O=e((()=>{r(),g(),y(),m(),c(),f(),u(),o(),S=s(),C={title:`Layout/Separator`,component:i,parameters:b(`Separator`,v,_),tags:[`Раскладка`]},w={args:{size:`xl`},decorators:[(e,t)=>(0,S.jsxs)(`div`,{style:t.args.direction===`vertical`?{display:`flex`,alignItems:`center`,height:50}:void 0,children:[`Before Separator`,(0,S.jsx)(e,{...t}),`After Separator`]})]},T={...w,decorators:[e=>(0,S.jsxs)(l,{children:[(0,S.jsx)(d,{before:(0,S.jsx)(a,{}),children:`Уведомления`}),(0,S.jsx)(e,{}),(0,S.jsx)(d,{before:(0,S.jsx)(n,{}),children:`Основные`})]})]},E={...w,args:{direction:`vertical`,size:`2xl`},decorators:[(e,t)=>(0,S.jsxs)(h,{style:{display:`flex`},children:[(0,S.jsx)(p,{children:`Новости`}),(0,S.jsx)(e,{...t}),(0,S.jsx)(p,{children:`Звонки`}),(0,S.jsx)(e,{...t}),(0,S.jsx)(p,{children:`Друзья`})]})]},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Playground,
  decorators: [Component => <Group>
        <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
        <Component />
        <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
      </Group>]
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`DefaultDirectionExample`,`BlockDirectionExample`]}));export{x as n,O as r,w as t};