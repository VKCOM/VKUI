import{w as i,b as m,j as a}from"./iframe-DJZLDe2v.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-BMJyrHcj.js";import{playgroundArgs as g}from"./Card.stories-C657Luch.js";import{G as y}from"./Group-ZTDDYGb3.js";import{C as e}from"./CardScroll-B7S6awPJ.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-D0jMNSCO.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-D8Ch1fTG.js";import"./useConfigDirection-Codxpgcm.js";import"./HorizontalScroll-Rn_o9Hsp.js";import"./fx-CfL2LSu1.js";import"./InputUtils-CYWMeBJ6.js";import"./useIsClient-BfxQDn7W.js";import"./useFocusVisible-B_h8gO-N.js";import"./useFocusVisibleClassName-CRC2ipiX.js";import"./ScrollArrow-BAjCFB8s.js";import"./chevron_24-6kv9nE44.js";import"./SvgIconRootV2-DyTPJ3EC.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-Dn3k9T89.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
