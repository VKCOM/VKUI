import{w as i,b as m,j as a}from"./iframe-DcUCz3Gq.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-B4F5eM2n.js";import{playgroundArgs as g}from"./Card.stories-DOCDrayx.js";import{G as y}from"./Group-qWIgZiP3.js";import{C as e}from"./CardScroll-BU9HkVFj.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-IsgabQ9w.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-lAEBSvha.js";import"./useConfigDirection-BglQDqbm.js";import"./HorizontalScroll-DT90z3ay.js";import"./fx-rqoYlJcV.js";import"./InputUtils-Dt7ctke5.js";import"./useIsClient-blsjwI61.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./ScrollArrow-nRkgntFA.js";import"./chevron_24-DorGB4Sq.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BE6lGA5Q.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
