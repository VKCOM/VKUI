import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{L as r,n as i,tt as a}from"./dist-BnR0TT6p.js";import{n as o,t as s}from"./Separator-DRzuf3UL.js";import{n as c,t as l}from"./Group-BgnaPBo3.js";import{n as u,t as d}from"./SimpleCell-CXEks6TX.js";import{n as f,t as p}from"./Box-B0qdiZm1.js";import{n as m,t as h}from"./Link-Bp5B41Uo.js";import{i as g,n as _,t as v}from"./constants-BWBR8eWE.js";import{n as y,t as b}from"./createStoryParameters-D_aKMzVl.js";var x=t({BlockDirectionExample:()=>E,DefaultDirectionExample:()=>T,Playground:()=>w,__namedExportsOrder:()=>D,default:()=>C}),S,C,w,T,E,D;function O(){return(O=e((()=>{i(),g(),y(),f(),c(),m(),u(),o(),S=n(),C={title:`Layout/Separator`,component:s,parameters:b(`Separator`,v,_),tags:[`Раскладка`]},w=e=>(0,S.jsxs)(`div`,{style:e.direction===`vertical`?{display:`flex`,alignItems:`center`,height:50}:void 0,children:[`Before Separator`,(0,S.jsx)(s,{...e}),`After Separator`]}),w.args={size:`xl`},T=e=>(0,S.jsxs)(l,{children:[(0,S.jsx)(d,{before:(0,S.jsx)(a,{}),children:`Уведомления`}),(0,S.jsx)(s,{...e}),(0,S.jsx)(d,{before:(0,S.jsx)(r,{}),children:`Основные`})]}),T.args={size:`xl`},E=e=>(0,S.jsxs)(p,{padding:`system`,style:{display:`flex`},children:[(0,S.jsx)(h,{children:`Новости`}),(0,S.jsx)(s,{...e}),(0,S.jsx)(h,{children:`Звонки`}),(0,S.jsx)(s,{...e}),(0,S.jsx)(h,{children:`Друзья`})]}),E.args={direction:`vertical`,size:`2xl`},D=[`Playground`,`DefaultDirectionExample`,`BlockDirectionExample`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(props: SeparatorProps) => <div style={props.direction === 'vertical' ? {
  display: 'flex',
  alignItems: 'center',
  height: 50
} : undefined}>
    Before Separator
    <Separator {...props} />
    After Separator
  </div>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(props: SeparatorProps) => <Group>
    <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
    <Separator {...props} />
    <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
  </Group>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(props: SeparatorProps) => <Box padding="system" style={{
  display: 'flex'
}}>
    <Link>Новости</Link>
    <Separator {...props} />
    <Link>Звонки</Link>
    <Separator {...props} />
    <Link>Друзья</Link>
  </Box>`,...E.parameters?.docs?.source}}}})))()}export{x as n,O as r,w as t};