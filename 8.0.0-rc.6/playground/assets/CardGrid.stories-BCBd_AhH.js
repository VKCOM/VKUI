import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CRMqfscQ.js";import{a as n,t as r}from"./lib-B1PKsac9.js";import{i,n as a,r as o}from"./iframe-CMWvQvt2.js";import{n as s,t as c}from"./Card-Ch8fi65u.js";import{n as l,t as u}from"./CardGrid-BCtdz7aZ.js";import{n as d,t as f}from"./Group-DLQ4QDyF.js";import{i as p,n as m,t as h}from"./constants-BYo4AJCv.js";import{n as g,t as _}from"./createStoryParameters-Dbf8epgV.js";import{i as v,r as y}from"./Card.stories-CJ58MG4E.js";var b,x,S,C,w,T=e((()=>{r(),a(),p(),g(),s(),y(),d(),l(),b=t(),x={title:`Layout/CardGrid`,component:u,parameters:_(`CardGrid`,h,m),argTypes:{count:{control:{type:`number`}}},tags:[`Раскладка`]},S={render:({count:e,...t})=>(0,b.jsx)(u,{...t,children:Array(e).fill(null).map((e,t)=>(0,b.jsx)(c,{...v},t))}),args:{count:3},decorators:[o,i]},C={...S,decorators:[(e,t)=>(0,b.jsx)(f,{children:(0,b.jsx)(e,{...t.args})}),...n(S.decorators)?S.decorators:[]]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: ({
    count,
    ...args
  }) => <CardGrid {...args}>
      {Array(count).fill(null).map((_, index) => <BasicCard key={index} {...basicCardPlaygroundArgs} />)}
    </CardGrid>,
  args: {
    count: 3
  },
  decorators: [withSinglePanel, withVKUILayout]
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Playground,
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`InsideGroup`]}));export{x as a,T as i,S as n,w as r,C as t};