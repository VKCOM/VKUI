import{w as u,b as g,j as a}from"./iframe-k6odcVfq.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-CVc4HhVs.js";import{playgroundArgs as S}from"./Card.stories-B6-9PPTA.js";import{G as h}from"./Group-O3l4QVPu.js";import{C as d}from"./CardScroll-DRc8rvMF.js";import"./VisuallyHidden-D-1P4bzL.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DHnfr3c7.js";import"./useConfigDirection-CxnUW9rE.js";import"./HorizontalScroll-C5wOjsO3.js";import"./fx-CpkSQu6p.js";import"./InputUtils-C1ugcw4m.js";import"./useIsClient-C3_XghNw.js";import"./ScrollArrow-CQdXBPdy.js";import"./chevron_24-C1n-aqzu.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./chevron_16-C9RD0OpX.js";const H={title:"Blocks/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}}},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
