import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{s as n,t as r}from"./lib-BRrbp21U.js";import{n as i,ot as a}from"./dist-JE-Gteso.js";import{n as o,t as s}from"./Button-DkR7tdUq.js";import{n as c,t as l}from"./Flex-d_Ls15u9.js";import{n as u,t as d}from"./Image-Cde3v1B4.js";import{n as f,t as p}from"./Banner-BCVWXA5Y.js";import{i as m,n as h,t as g}from"./constants-Dj6vOzIh.js";import{n as _,t as v}from"./createStoryParameters-pz1UrWMe.js";var y,b,x,S,C=e((()=>{i(),r(),m(),_(),f(),o(),u(),c(),y=t(),b={title:`Layout/Flex`,component:l,parameters:v(`Flex`,g,h),argTypes:{rowGap:{control:`number`},columnGap:{control:`number`},itemsCount:{control:`number`}},tags:[`Раскладка`]},x={args:{gap:`m`,itemsCount:2},render:({itemsCount:e=2,rowGap:t,columnGap:r,gap:i,...o})=>(0,y.jsx)(l,{gap:t!==void 0||r!==void 0?[t||0,r||0]:i,...o,children:Array.from({length:e},(e,t)=>(0,y.jsx)(p,{before:(0,y.jsx)(d,{size:96,src:`https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg`}),title:`Для Вас`,subtitle:`Обновлено сегодня`,actions:(0,y.jsx)(s,{before:(0,y.jsx)(a,{}),onClick:n,children:`Слушать`})},t))}),decorators:[e=>(0,y.jsx)(`div`,{style:{width:`80%`,height:500,border:`1px dotted red`},children:(0,y.jsx)(e,{})})]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}));export{b as i,S as n,C as r,x as t};