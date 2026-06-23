import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{L as i,n as a,tt as o}from"./dist-Ddx9HyIL.js";import{Mn as s,Nn as c}from"./iframe-CsHaVY-5.js";import{n as l,t as u}from"./Group-LwNPJiLD.js";import{n as d,t as f}from"./SimpleCell-BnYS7eov.js";import{n as p,t as m}from"./Box-xmPGKkNi.js";import{n as h,t as g}from"./Link-DZhIk-lv.js";import{i as _,n as v,t as y}from"./constants-cjed6ZWB.js";import{n as b,t as x}from"./createStoryParameters-CMHckkzt.js";var S=e({BlockDirectionExample:()=>D,DefaultDirectionExample:()=>E,Playground:()=>T,__namedExportsOrder:()=>O,default:()=>w}),C,w,T,E,D,O,k=t((()=>{a(),_(),b(),p(),l(),h(),d(),c(),C=n(r(),1),w={title:`Layout/Separator`,component:s,parameters:x(`Separator`,y,v),tags:[`Раскладка`]},T=e=>(0,C.jsxs)(`div`,{style:e.direction===`vertical`?{display:`flex`,alignItems:`center`,height:50}:void 0,children:[`Before Separator`,(0,C.jsx)(s,{...e}),`After Separator`]}),T.args={size:`xl`},E=e=>(0,C.jsxs)(u,{children:[(0,C.jsx)(f,{before:(0,C.jsx)(o,{}),children:`Уведомления`}),(0,C.jsx)(s,{...e}),(0,C.jsx)(f,{before:(0,C.jsx)(i,{}),children:`Основные`})]}),E.args={size:`xl`},D=e=>(0,C.jsxs)(m,{padding:`system`,style:{display:`flex`},children:[(0,C.jsx)(g,{children:`Новости`}),(0,C.jsx)(s,{...e}),(0,C.jsx)(g,{children:`Звонки`}),(0,C.jsx)(s,{...e}),(0,C.jsx)(g,{children:`Друзья`})]}),D.args={direction:`vertical`,size:`2xl`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(props: SeparatorProps) => <div style={props.direction === 'vertical' ? {
  display: 'flex',
  alignItems: 'center',
  height: 50
} : undefined}>
    Before Separator
    <Separator {...props} />
    After Separator
  </div>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`(props: SeparatorProps) => <Group>
    <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
    <Separator {...props} />
    <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
  </Group>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(props: SeparatorProps) => <Box padding="system" style={{
  display: 'flex'
}}>
    <Link>Новости</Link>
    <Separator {...props} />
    <Link>Звонки</Link>
    <Separator {...props} />
    <Link>Друзья</Link>
  </Box>`,...D.parameters?.docs?.source}}},O=[`Playground`,`DefaultDirectionExample`,`BlockDirectionExample`]}));export{S as n,k as r,T as t};