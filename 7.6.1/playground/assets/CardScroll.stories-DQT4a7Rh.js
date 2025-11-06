import{w as u,b as g,j as a}from"./iframe-CdtcRMP-.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-m4peLOJW.js";import{playgroundArgs as S}from"./Card.stories-DsYf58BC.js";import{G as h}from"./Group-BPDDF8j8.js";import{C as d}from"./CardScroll-CJosLQtJ.js";import"./preload-helper-Dp1pzeXC.js";import"./VisuallyHidden-CtlI0uOO.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-UnTPOYYT.js";import"./useConfigDirection-I0bRjt3K.js";import"./HorizontalScroll-DhTxiIqL.js";import"./fx-CmWMz_fC.js";import"./InputUtils-4kqGTgL9.js";import"./useIsClient-B7bjAOfN.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./ScrollArrow-C_1Hgc1i.js";import"./chevron_24-HuO4S7Qi.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-cxMQw6Cg.js";const M={title:"Layout/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
