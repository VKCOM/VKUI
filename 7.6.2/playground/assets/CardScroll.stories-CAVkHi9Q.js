import{w as u,b as g,j as a}from"./iframe-WscSQxk_.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-DneglyLb.js";import{playgroundArgs as S}from"./Card.stories-BD1iRUju.js";import{G as h}from"./Group-qAlp-RAW.js";import{C as d}from"./CardScroll-DZo98joc.js";import"./preload-helper-Dp1pzeXC.js";import"./VisuallyHidden-uW7N7P-s.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DadQ2vZ3.js";import"./useConfigDirection-f8qxYIIC.js";import"./HorizontalScroll-C_wUgCeJ.js";import"./fx-B_Ce2UEi.js";import"./InputUtils-JLBJXs47.js";import"./useIsClient-d2y8ByAY.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./ScrollArrow-C5QKXXPz.js";import"./chevron_24-CIrr-ZVo.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BY28eTD3.js";const M={title:"Layout/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
