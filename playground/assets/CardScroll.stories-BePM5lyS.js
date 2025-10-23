import{w as i,b as m,j as a}from"./iframe-BdXaAE5r.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-CbWNjfQ-.js";import{playgroundArgs as g}from"./Card.stories-Bllcb5cJ.js";import{G as y}from"./Group-D1elF4gT.js";import{C as e}from"./CardScroll-CsgpXo5B.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-DcQJc2es.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ByXPLsYQ.js";import"./useConfigDirection-B4zlYhYT.js";import"./HorizontalScroll-DCDnVkns.js";import"./fx-DC0vWq9f.js";import"./InputUtils--HRLtXJo.js";import"./useIsClient-CdGSC0Is.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./ScrollArrow-CEb8Mfjr.js";import"./chevron_24-BT9UqPJ5.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CxZx8l_q.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
