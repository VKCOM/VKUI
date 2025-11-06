import{w as i,b as m,j as a}from"./iframe-CdM-7Hfu.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-8D0l5t-f.js";import{playgroundArgs as g}from"./Card.stories-DBpYg5w5.js";import{G as y}from"./Group-c52jERCh.js";import{C as e}from"./CardScroll-BCDZpIAN.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-DydpD7lG.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-NEMh_4A6.js";import"./useConfigDirection-BPbTAtL3.js";import"./HorizontalScroll-C7nWcRA6.js";import"./fx-Cz6Hdhb6.js";import"./InputUtils-BMsEEBIJ.js";import"./useIsClient-CBFXtO1_.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./ScrollArrow-BRg4ORiB.js";import"./chevron_24-qT7GlJd5.js";import"./SvgIconRootV2-uNBcUV_S.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-DFcNvUVK.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
