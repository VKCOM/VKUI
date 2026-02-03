import{w as i,b as m,j as a}from"./iframe-C4ttrVUJ.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-Ei7Oi9nI.js";import{playgroundArgs as g}from"./Card.stories-Q5mcW1Ny.js";import{G as y}from"./Group-CRpAXhsk.js";import{C as e}from"./CardScroll-BT_Booi4.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-XgvirjGY.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-D7DVMFfP.js";import"./useConfigDirection-DvmYVNBa.js";import"./HorizontalScroll-QFMQsry7.js";import"./useState-DqLBjAbD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-DR5r8_HC.js";import"./chevron_24-C04J8X2C.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CHg4wDrn.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Playground,
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]
}`,...o.parameters?.docs?.source}}};const q=["Playground","InsideGroup"];export{o as InsideGroup,r as Playground,q as __namedExportsOrder,T as default};
