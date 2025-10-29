import{w as i,b as m,j as a}from"./iframe-DC59t_7s.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-LuC8g8Bc.js";import{playgroundArgs as g}from"./Card.stories-B3BMqH24.js";import{G as y}from"./Group-BjjfSX7O.js";import{C as e}from"./CardScroll-Bv-ba0QO.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-dUOLTySp.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-B_mvNSI1.js";import"./useConfigDirection-6hDi4KID.js";import"./HorizontalScroll-DiYo4r2g.js";import"./fx-CJRBS1eZ.js";import"./InputUtils-C5RWily7.js";import"./useIsClient-DeI2OSMJ.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./ScrollArrow-DPR8cpvb.js";import"./chevron_24-FdnyQ-I8.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-DtWL8gcK.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
