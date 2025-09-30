import{w as u,b as g,j as a}from"./iframe-qoTtUH8h.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-C-g6Lwkl.js";import{playgroundArgs as S}from"./Card.stories-Dj1P4osz.js";import{G as h}from"./Group-jWXxgMZf.js";import{C as d}from"./CardScroll-bxCjjc85.js";import"./preload-helper-Dp1pzeXC.js";import"./VisuallyHidden-BqFtMTWb.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DrM4b0WC.js";import"./useConfigDirection-DgRc04K6.js";import"./HorizontalScroll-B4sPAPY3.js";import"./fx-DxBmE9UA.js";import"./InputUtils-DCqC4s6H.js";import"./useIsClient-BcbdMWH_.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./ScrollArrow-DSf-gZAM.js";import"./chevron_24-Bbrz8tmk.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BxL5QhO0.js";const N={title:"Layout/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
