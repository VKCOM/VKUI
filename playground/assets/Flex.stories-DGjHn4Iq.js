import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{p as i,t as a}from"./lib-DJkKow_A.js";import{ln as o,n as s}from"./dist-Ddx9HyIL.js";import{n as c,t as l}from"./Button-DxjiUwvt.js";import{n as u,t as d}from"./Flex-B8Cr5qNM.js";import{n as f,t as p}from"./Image-DpfkL_Sn.js";import{n as m,t as h}from"./Banner-BH7y1Z10.js";import{i as g,n as _,t as v}from"./constants-cjed6ZWB.js";import{n as y,t as b}from"./createStoryParameters-CMHckkzt.js";var x=e({Playground:()=>w,__namedExportsOrder:()=>T,default:()=>C}),S,C,w,T,E=t((()=>{s(),a(),g(),y(),m(),c(),f(),u(),S=n(r(),1),C={title:`Layout/Flex`,component:d,parameters:b(`Flex`,v,_),argTypes:{rowGap:{control:`number`},columnGap:{control:`number`},itemsCount:{control:`number`}},tags:[`Раскладка`]},w=({itemsCount:e=2,rowGap:t,columnGap:n,gap:r,...a})=>(0,S.jsx)(d,{gap:t!==void 0||n!==void 0?[t||0,n||0]:r,...a,children:Array.from({length:e},(e,t)=>(0,S.jsx)(h,{before:(0,S.jsx)(p,{size:96,src:`https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg`}),title:`Для Вас`,subtitle:`Обновлено сегодня`,actions:(0,S.jsx)(l,{before:(0,S.jsx)(o,{}),onClick:i,children:`Слушать`})},t))}),w.args={gap:`m`,itemsCount:2},w.decorators=[e=>(0,S.jsx)(`div`,{style:{width:`80%`,height:500,border:`1px dotted red`},children:(0,S.jsx)(e,{})})],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
  itemsCount = 2,
  rowGap,
  columnGap,
  gap,
  ...args
}: StoryProps) => <Flex gap={rowGap !== undefined || columnGap !== undefined ? [rowGap || 0, columnGap || 0] : gap} {...args}>
    {Array.from({
    length: itemsCount
  }, (_, index) => {
    return <Banner key={index} before={<Image size={96} src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />} title="Для Вас" subtitle="Обновлено сегодня" actions={<Button before={<Icon24Play />} onClick={noop}>
              Слушать
            </Button>} />;
  })}
  </Flex>`,...w.parameters?.docs?.source}}},T=[`Playground`]}));export{w as n,E as r,x as t};