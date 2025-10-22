import{w as i,b as m,j as a}from"./iframe-DvQ0hW0I.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-Cok0-9S3.js";import{playgroundArgs as g}from"./Card.stories-CaH7g5tL.js";import{G as y}from"./Group-DlJj6tsg.js";import{C as e}from"./CardScroll-z9sFOng3.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-CGlAvVNH.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DYSqrBFj.js";import"./useConfigDirection-DmTY1Se6.js";import"./HorizontalScroll-C5Z6sTbD.js";import"./fx-SyZDdfTZ.js";import"./InputUtils-BSmatczf.js";import"./useIsClient-DWoS3R9Q.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./ScrollArrow-xW1rSDlZ.js";import"./chevron_24-fKzT9kSW.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-m8pRWD8o.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
