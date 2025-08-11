import{w as u,b as g,j as a}from"./iframe-BdL7Qu3-.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-B8yX0JBt.js";import{playgroundArgs as S}from"./Card.stories-C3EEwu-1.js";import{G as h}from"./Group-1bWIf9u2.js";import{C as d}from"./CardScroll-CjUGxJ5P.js";import"./VisuallyHidden-DMev6gKF.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Cejbc8FV.js";import"./useConfigDirection-D_GPblpw.js";import"./HorizontalScroll-B4P0RS3A.js";import"./fx-B6HrcG_P.js";import"./InputUtils-DfOLgQuD.js";import"./useIsClient-C0Y1oVh7.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./ScrollArrow-CC4axyoT.js";import"./chevron_24-Cmnibbi9.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./chevron_16-Dq6TqX7-.js";const J={title:"Layout/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Playground,
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, ...(isArray(Playground.decorators) ? Playground.decorators : [])]
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const M=["Playground","InsideGroup"];export{o as InsideGroup,r as Playground,M as __namedExportsOrder,J as default};
