import{w as i,b as m,j as a}from"./iframe-DdZr-4mP.js";import{i as p}from"./type_checkers-CVMjkZjG.js";import{D as c,C as d}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{C as u}from"./Card-CbBQSfye.js";import{playgroundArgs as g}from"./Card.stories-BNYhsD35.js";import{G as y}from"./Group-DlK5kh75.js";import{C as e}from"./CardScroll-BhmuxZLT.js";import"./preload-helper-PPVm8Dsz.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-1KqsUf4m.js";import"./useConfigDirection-BdfXEpUn.js";import"./HorizontalScroll-B4iaVhEi.js";import"./fx-nICPG9Wo.js";import"./InputUtils-CcKtkKuI.js";import"./useIsClient-q3rRlZlM.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./ScrollArrow-DVrUjEkR.js";import"./chevron_24-CZhvaAmE.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-qALKhhss.js";const T={title:"Layout/CardScroll",component:e,parameters:l("CardScroll",d,c),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(e,{...s,children:Array(t).fill(null).map((C,n)=>a.jsx(u,{...g},n))}),args:{count:3},decorators:[i,m]},o={...r,decorators:[(t,s)=>a.jsx(y,{children:a.jsx(t,{...s.args})}),...p(r.decorators)?r.decorators:[]]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
