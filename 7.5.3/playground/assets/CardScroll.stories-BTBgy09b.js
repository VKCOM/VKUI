import{w as u,b as g,j as a}from"./iframe-VQuwIBim.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-Bf78k_ns.js";import{playgroundArgs as S}from"./Card.stories-BVXHAJC0.js";import{G as h}from"./Group-CM6wWYyu.js";import{C as d}from"./CardScroll-BJA8F2Mk.js";import"./VisuallyHidden-Bn9barOE.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CFr_RCRn.js";import"./useConfigDirection-BhKWnP92.js";import"./HorizontalScroll-f2oHEOp7.js";import"./fx-DFVEh5RD.js";import"./InputUtils-esLGIMz7.js";import"./useIsClient--20LXL4m.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./ScrollArrow-DBh2ZJvB.js";import"./chevron_24-Imo4hgKT.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./chevron_16-CrLMruU6.js";const J={title:"Layout/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
