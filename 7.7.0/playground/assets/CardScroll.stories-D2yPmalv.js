import{w as u,b as g,j as a}from"./iframe-DfeTZ_Fw.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-0xero7S-.js";import{playgroundArgs as S}from"./Card.stories-A-0jM3Xw.js";import{G as h}from"./Group-ChVeS0N8.js";import{C as d}from"./CardScroll-BGNEkMfz.js";import"./preload-helper-Dp1pzeXC.js";import"./VisuallyHidden-BuJles22.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ivEbNXOe.js";import"./useConfigDirection-CwjKsiym.js";import"./HorizontalScroll-CanoaL7R.js";import"./fx-6NXl3I1U.js";import"./InputUtils-C-I8ensD.js";import"./useIsClient-D3QWm6mk.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./ScrollArrow-DLZN2wVh.js";import"./chevron_24-k76nBf5R.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-w2grljdX.js";const N={title:"Layout/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
