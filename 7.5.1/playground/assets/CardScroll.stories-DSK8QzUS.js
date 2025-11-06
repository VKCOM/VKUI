import{w as u,b as g,j as a}from"./iframe-DZFG_ML5.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-BGlXGz3K.js";import{playgroundArgs as S}from"./Card.stories-4Ccscx55.js";import{G as h}from"./Group-DczfUVmx.js";import{C as d}from"./CardScroll-D2zFZ6zw.js";import"./VisuallyHidden-DUSQwRyI.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CYznJAmV.js";import"./useConfigDirection-BbxI4kck.js";import"./HorizontalScroll-KzwpVGHF.js";import"./fx-6r2gRpIk.js";import"./InputUtils-rnqmQ_3Q.js";import"./useIsClient-CJjj9dyk.js";import"./ScrollArrow-BUe2H3n2.js";import"./chevron_24-DosOPE9o.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CKNjcJVv.js";import"./chevron_16-d4AUnQXG.js";const H={title:"Layout/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
