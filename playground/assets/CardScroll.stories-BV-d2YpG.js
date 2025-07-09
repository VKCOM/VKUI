import{w as u,b as g,j as a}from"./iframe-C2_PECK0.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-C3v1lNsQ.js";import{playgroundArgs as S}from"./Card.stories-CfPC3lwx.js";import{G as h}from"./Group-lIrBg-Y8.js";import{C as d}from"./CardScroll-BwxHF1-c.js";import"./VisuallyHidden-DSMrBIlo.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-B_H7tDpo.js";import"./useConfigDirection-CkTav0j8.js";import"./HorizontalScroll-y6HxAIkS.js";import"./fx-oG50EwDv.js";import"./InputUtils-BDpjj3t6.js";import"./useIsClient-BIt4BhuW.js";import"./ScrollArrow-BTooiCCv.js";import"./chevron_24-DO4JAey0.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./chevron_16-Da1nGRlC.js";const H={title:"Blocks/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}}},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const J=["Playground","InsideGroup"];export{o as InsideGroup,r as Playground,J as __namedExportsOrder,H as default};
