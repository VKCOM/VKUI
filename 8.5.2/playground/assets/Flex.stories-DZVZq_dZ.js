import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{d as r,t as i}from"./lib-C8oG2MKp.js";import{ln as a,n as o}from"./dist-ffVrjb4g.js";import{i as s,n as c,t as l}from"./constants-BWBR8eWE.js";import{n as u,t as d}from"./createStoryParameters-D_aKMzVl.js";import{n as f,t as p}from"./Button-UIWLqw4_.js";import{n as m,t as h}from"./Image-CsTyn_Gb.js";import{n as g,t as _}from"./Banner-HevWA35i.js";import{n as v,t as y}from"./Flex-C-g3JHZP.js";var b=t({Playground:()=>C,__namedExportsOrder:()=>w,default:()=>S}),x,S,C,w;function T(){return(T=e((()=>{o(),i(),s(),u(),g(),f(),m(),v(),x=n(),S={title:`Layout/Flex`,component:y,parameters:d(`Flex`,l,c),argTypes:{rowGap:{control:`number`},columnGap:{control:`number`},itemsCount:{control:`number`}},tags:[`Раскладка`]},C=({itemsCount:e=2,rowGap:t,columnGap:n,gap:i,...o})=>(0,x.jsx)(y,{gap:t!==void 0||n!==void 0?[t||0,n||0]:i,...o,children:Array.from({length:e},(e,t)=>(0,x.jsx)(_,{before:(0,x.jsx)(h,{size:96,src:`https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg`}),title:`Для Вас`,subtitle:`Обновлено сегодня`,actions:(0,x.jsx)(p,{before:(0,x.jsx)(a,{}),onClick:r,children:`Слушать`})},t))}),C.args={gap:`m`,itemsCount:2},C.decorators=[e=>(0,x.jsx)(`div`,{style:{width:`80%`,height:500,border:`1px dotted red`},children:(0,x.jsx)(e,{})})],w=[`Playground`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
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
  </Flex>`,...C.parameters?.docs?.source}}}})))()}export{C as n,T as r,b as t};