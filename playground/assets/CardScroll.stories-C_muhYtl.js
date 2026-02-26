import{b as i,w as m,j as a}from"./iframe-C4bTyPBQ.js";import{i as p}from"./type_checkers-B4iEhslY.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-D4PQ6bvR.js";import{playgroundArgs as g}from"./Card.stories-BQ-9q6fI.js";import{G as y}from"./Group-B0qSQvWx.js";import{C as e}from"./CardScroll-DLyvZ9r6.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./Footnote-wW_hecXF.js";import"./useConfigDirection-OBrCdmzr.js";import"./HorizontalScroll-C_Lfba6L.js";import"./useState-CmJkrVlf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-R-x82-Ne.js";import"./chevron_24-DAtZ7tdt.js";import"./SvgIconRootV2-DbftVVP5.js";import"./chevron_16-D1zTg27u.js";const O={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const R=["Playground","InsideGroup"];export{o as InsideGroup,r as Playground,R as __namedExportsOrder,O as default};
