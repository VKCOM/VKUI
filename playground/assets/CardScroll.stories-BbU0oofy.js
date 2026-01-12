import{w as i,b as m,j as a}from"./iframe-BqdgnJE0.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-CCd_sLO7.js";import{playgroundArgs as g}from"./Card.stories-C8JQC2Q2.js";import{G as y}from"./Group-ONOG8oyY.js";import{C as e}from"./CardScroll-a5Nq8zVC.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-B5KO6Y_w.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Bj-28HDg.js";import"./useConfigDirection-D5bRs-MF.js";import"./HorizontalScroll-x2bQiCuP.js";import"./useState-CWGeE8jE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-BYIyycRq.js";import"./chevron_24-BwJAZVOu.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-DLrfULAr.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
