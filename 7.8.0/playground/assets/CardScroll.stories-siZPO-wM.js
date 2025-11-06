import{w as i,b as m,j as a}from"./iframe-F_0bvJrc.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-BKoEUEIk.js";import{playgroundArgs as g}from"./Card.stories-C5k6D_xT.js";import{G as y}from"./Group-DWRY0NV1.js";import{C as e}from"./CardScroll-BRUkqKPN.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-CRrL_L2y.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DfPFidfa.js";import"./useConfigDirection-poWhsvcV.js";import"./HorizontalScroll-lefGwdwW.js";import"./fx-BGp5lg0h.js";import"./InputUtils-CneTbOko.js";import"./useIsClient-CSY1-Ql9.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./ScrollArrow-BisCq_QF.js";import"./chevron_24-B5BZQg8T.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16--5zekb9K.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
