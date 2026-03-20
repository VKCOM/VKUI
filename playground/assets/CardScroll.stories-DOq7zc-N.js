import{w as i,b as m,j as a}from"./iframe-CmkY54f5.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-CpmS2bj4.js";import{playgroundArgs as g}from"./Card.stories-CWXHUNtf.js";import{G as y}from"./Group-6J2U7NrK.js";import{C as e}from"./CardScroll-DNVZq0qU.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-Da3ud9kw.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dh1koNQe.js";import"./useConfigDirection-Duqs0EiT.js";import"./HorizontalScroll-BKAWN1OV.js";import"./useState-D-QVJqbH.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-C3WUb0SW.js";import"./chevron_24-BlOtmXlj.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CCLojpkC.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
