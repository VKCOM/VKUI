import{w as u,b as g,j as a}from"./iframe-7s0T-F6L.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-CWOZQlv8.js";import{playgroundArgs as S}from"./Card.stories-B59q8x3b.js";import{G as h}from"./Group-CH_sa7ue.js";import{C as d}from"./CardScroll-DDrRZLH0.js";import"./preload-helper-Dp1pzeXC.js";import"./VisuallyHidden-CNF1CStS.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BCofusdy.js";import"./useConfigDirection--PDr40UE.js";import"./HorizontalScroll-iTbFcBbr.js";import"./fx-DN2Vj22E.js";import"./InputUtils-CP-PNx6u.js";import"./useIsClient-SmbH6kX8.js";import"./useFocusVisible-BTUcwPxj.js";import"./useFocusVisibleClassName-CMVp5o9Y.js";import"./ScrollArrow-C1YFujIW.js";import"./chevron_24-BvnjMiP-.js";import"./SvgIconRootV2-Wzzl8e4S.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-1M6O6SWX.js";const N={title:"Layout/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Q=["Playground","InsideGroup"];export{o as InsideGroup,r as Playground,Q as __namedExportsOrder,N as default};
