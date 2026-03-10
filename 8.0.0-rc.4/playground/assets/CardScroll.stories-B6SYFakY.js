import{b as i,w as m,j as a}from"./iframe-OAvG3iJ-.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-2qjXKNbh.js";import{playgroundArgs as g}from"./Card.stories-FFPHN78m.js";import{G as y}from"./Group-DBjl1Ywq.js";import{C as e}from"./CardScroll-DPpvrs5S.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-W5VCXPiv.js";import"./Footnote-Fnz7EDP7.js";import"./useConfigDirection-EOrqXudq.js";import"./HorizontalScroll-M2qg7Fp5.js";import"./useState-Dux8RiNa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-avZN-Hx5.js";import"./chevron_24-CR2v9LFD.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BS2dVy5C.js";const R={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const T=["Playground","InsideGroup"];export{o as InsideGroup,r as Playground,T as __namedExportsOrder,R as default};
