import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{a as n,t as r}from"./lib-BRrbp21U.js";import{n as i,r as a,t as o}from"./VKUIDecorators-BYQp_QSp.js";import{n as s,t as c}from"./Card-BmNGag6h.js";import{n as l,t as u}from"./CardScroll-CKjTvq3b.js";import{n as d,t as f}from"./Group-iqbU7m06.js";import{i as p,n as m,t as h}from"./constants-Dj6vOzIh.js";import{n as g,t as _}from"./createStoryParameters-pz1UrWMe.js";import{i as v,r as y}from"./Card.stories-DCHDQU_S.js";var b,x,S,C,w,T=e((()=>{r(),o(),p(),g(),s(),y(),d(),l(),b=t(),x={title:`Layout/CardScroll`,component:u,parameters:_(`CardScroll`,h,m),argTypes:{count:{control:{type:`number`}}},tags:[`Раскладка`]},S={render:({count:e,...t})=>(0,b.jsx)(u,{...t,children:Array(e).fill(null).map((e,t)=>(0,b.jsx)(c,{...v},t))}),args:{count:3},decorators:[i,a]},C={...S,decorators:[(e,t)=>(0,b.jsx)(f,{children:(0,b.jsx)(e,{...t.args})}),...n(S.decorators)?S.decorators:[]]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...Playground,
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`InsideGroup`]}));export{x as a,T as i,S as n,w as r,C as t};