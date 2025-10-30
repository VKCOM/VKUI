import{w as i,b as m,j as a}from"./iframe-CjlHPZNU.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-D_6wxz3P.js";import{playgroundArgs as g}from"./Card.stories-DucZE_hH.js";import{G as y}from"./Group-Bb5VOzgg.js";import{C as e}from"./CardScroll-D2-ifQ5x.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-BhHQTREx.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-OilvUFbZ.js";import"./useConfigDirection-CtCMtXRC.js";import"./HorizontalScroll-CqNH4i_-.js";import"./fx-B3L81n1x.js";import"./InputUtils-DGnaA_Jg.js";import"./useIsClient-DEeP5e_N.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./ScrollArrow-DrPyosY7.js";import"./chevron_24-Bo5p7nmg.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CdgPvfwT.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
