import{n as e,r as t}from"./chunk-BneVvdWh.js";import{i as n,n as r,no as i,oo as a,r as o,yo as s}from"./iframe-DYi3TMGx.js";import{n as c,t as l}from"./Card-DuYVoyyx.js";import{n as u,t as d}from"./CardScroll-BkT11Eu7.js";import{n as f,t as p}from"./Group-DXMPjBg1.js";import{i as m,n as h,t as g}from"./constants-DdtDghDm.js";import{n as _,t as v}from"./createStoryParameters-cWWuDqBQ.js";import{i as y,r as b}from"./Card.stories-D_-__OQn.js";var x=t({InsideGroup:()=>T,Playground:()=>w,__namedExportsOrder:()=>E,default:()=>C}),S,C,w,T,E,D=e((()=>{i(),r(),m(),_(),c(),b(),f(),u(),S=s(),C={title:`Layout/CardScroll`,component:d,parameters:v(`CardScroll`,g,h),argTypes:{count:{control:{type:`number`}}},tags:[`Раскладка`]},w={render:({count:e,...t})=>(0,S.jsx)(d,{...t,children:Array(e).fill(null).map((e,t)=>(0,S.jsx)(l,{...y},t))}),args:{count:3},decorators:[o,n]},T={...w,decorators:[(e,t)=>(0,S.jsx)(p,{children:(0,S.jsx)(e,{...t.args})}),...a(w.decorators)?w.decorators:[]]},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: ({
    count,
    ...args
  }) => <CardScroll {...args}>
      {Array(count).fill(null).map((_, index) => <BasicCard key={index} {...basicCardPlaygroundArgs} />)}
    </CardScroll>,
  args: {
    count: 3
  },
  decorators: [withSinglePanel, withVKUILayout]
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Playground,
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`InsideGroup`]}));export{w as n,D as r,x as t};