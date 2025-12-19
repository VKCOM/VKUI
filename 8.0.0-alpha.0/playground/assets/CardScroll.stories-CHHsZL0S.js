import{w as i,b as m,j as a}from"./iframe-CGSrC79H.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-DMWR9vLW.js";import{playgroundArgs as g}from"./Card.stories-CnsRcK8u.js";import{G as y}from"./Group-DH0PWTW1.js";import{C as e}from"./CardScroll-dkpReNji.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./Footnote-9-fttdTG.js";import"./useConfigDirection-BDt5-3HT.js";import"./HorizontalScroll-CLG6ETB5.js";import"./useState-DzaGsmJ4.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-BvupeBe5.js";import"./chevron_24-DILgtZHa.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-IEGQRb6X.js";const R={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
