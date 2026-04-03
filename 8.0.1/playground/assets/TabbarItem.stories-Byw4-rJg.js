import{n as e,r as t}from"./chunk-BneVvdWh.js";import{i as n,n as r,yo as i}from"./iframe-DYi3TMGx.js";import{i as a,n as o,r as s,t as c}from"./TabbarItem-KB8TThM2.js";import{n as l,t as u}from"./Badge-HRbSkA4t.js";import{n as d,t as f}from"./Counter-CnDGvYM2.js";import{i as p,n as m,t as h}from"./constants-DdtDghDm.js";import{n as g,t as _}from"./createStoryParameters-cWWuDqBQ.js";import{r as v}from"./getFormFieldIconsPresets-BgIOvu4r.js";import{t as y}from"./presets-bFIDTl1z.js";var b=t({InHorizontalTabbar:()=>T,InVerticalTabbar:()=>w,Playground:()=>C,__namedExportsOrder:()=>E,default:()=>S}),x,S,C,w,T,E,D=e((()=>{r(),p(),y(),g(),l(),d(),a(),o(),x=i(),S={title:`Navigation/Epic/Tabbar/TabbarItem`,component:c,parameters:_(`TabbarItem`,h,m),argTypes:{children:v({iconSizes:[`28`],requiredIcons:[`Icon28MessageOutline`],sizeIconsCount:15}),indicator:v({additionalPresets:{Badge:(0,x.jsx)(u,{mode:`prominent`,children:`Есть обновления`}),Counter:(0,x.jsx)(f,{size:`s`,mode:`primary`,appearance:`accent-red`,children:`3`})}})},decorators:[n]},C={render:({...e})=>(0,x.jsx)(c,{...e}),args:{children:`Icon28MessageOutline`,label:`Messages`}},w={...C,args:{children:`Icon28MessageOutline`,label:`Messages`},decorators:[(e,t)=>(0,x.jsx)(s,{mode:`vertical`,children:(0,x.jsx)(e,{args:t.args})})]},T={...C,args:{...w.args},decorators:[(e,t)=>(0,x.jsx)(s,{mode:`horizontal`,children:(0,x.jsx)(e,{args:t.args})})]},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <TabbarItem {...args} />;
  },
  args: {
    children: 'Icon28MessageOutline',
    label: 'Messages'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    children: 'Icon28MessageOutline',
    label: 'Messages'
  },
  decorators: [(Component, context) => <Tabbar mode="vertical">
        <Component args={context.args} />
      </Tabbar>]
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...InVerticalTabbar.args
  },
  decorators: [(Component, context) => <Tabbar mode="horizontal">
        <Component args={context.args} />
      </Tabbar>]
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`InVerticalTabbar`,`InHorizontalTabbar`]}));export{b as n,D as r,C as t};