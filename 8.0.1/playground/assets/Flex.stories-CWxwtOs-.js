import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Mr as n,On as r,co as i,no as a,yo as o}from"./iframe-DYi3TMGx.js";import{n as s,t as c}from"./Button-YAibZjS6.js";import{n as l,t as u}from"./Flex-CSWTxpSL.js";import{n as d,t as f}from"./Image-B4DJL569.js";import{n as p,t as m}from"./Banner-C0l6pvWq.js";import{i as h,n as g,t as _}from"./constants-DdtDghDm.js";import{n as v,t as y}from"./createStoryParameters-cWWuDqBQ.js";var b=t({Playground:()=>C,__namedExportsOrder:()=>w,default:()=>S}),x,S,C,w,T=e((()=>{r(),a(),h(),v(),p(),s(),d(),l(),x=o(),S={title:`Layout/Flex`,component:u,parameters:y(`Flex`,_,g),argTypes:{rowGap:{control:`number`},columnGap:{control:`number`},itemsCount:{control:`number`}},tags:[`Раскладка`]},C={args:{gap:`m`,itemsCount:2},render:({itemsCount:e=2,rowGap:t,columnGap:r,gap:a,...o})=>(0,x.jsx)(u,{gap:t!==void 0||r!==void 0?[t||0,r||0]:a,...o,children:Array.from({length:e},(e,t)=>(0,x.jsx)(m,{before:(0,x.jsx)(f,{size:96,src:`https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg`}),title:`Для Вас`,subtitle:`Обновлено сегодня`,actions:(0,x.jsx)(c,{before:(0,x.jsx)(n,{}),onClick:i,children:`Слушать`})},t))}),decorators:[e=>(0,x.jsx)(`div`,{style:{width:`80%`,height:500,border:`1px dotted red`},children:(0,x.jsx)(e,{})})]},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 'm',
    itemsCount: 2
  },
  render: ({
    itemsCount = 2,
    rowGap,
    columnGap,
    gap,
    ...args
  }) => <Flex gap={rowGap !== undefined || columnGap !== undefined ? [rowGap || 0, columnGap || 0] : gap} {...args}>
      {Array.from({
      length: itemsCount
    }, (_, index) => {
      return <Banner key={index} before={<Image size={96} src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />} title="Для Вас" subtitle="Обновлено сегодня" actions={<Button before={<Icon24Play />} onClick={noop}>
                Слушать
              </Button>} />;
    })}
    </Flex>,
  decorators: [Component => <div style={{
    width: '80%',
    height: 500,
    border: '1px dotted red'
  }}>
        <Component />
      </div>]
}`,...C.parameters?.docs?.source}}},w=[`Playground`]}));export{C as n,T as r,b as t};