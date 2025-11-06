import{w as u,b as g,j as a}from"./iframe-OJ1C6fMc.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-DP1YG216.js";import{playgroundArgs as S}from"./Card.stories-9Siy8ml6.js";import{G as h}from"./Group-MuPGSLP-.js";import{C as d}from"./CardScroll-BHxS3L9u.js";import"./preload-helper-Dp1pzeXC.js";import"./VisuallyHidden-BNf-15JI.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-JF6_a0Sk.js";import"./useConfigDirection-jCjot1AW.js";import"./HorizontalScroll-5WnXIJ4G.js";import"./fx-C3mcJv-n.js";import"./InputUtils-CNd9WeYt.js";import"./useIsClient-p1vmZH8b.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./ScrollArrow-CkUWwN7v.js";import"./chevron_24-uwXpkcAA.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-Bphhpetu.js";const M={title:"Layout/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const N=["Playground","InsideGroup"];export{o as InsideGroup,r as Playground,N as __namedExportsOrder,M as default};
