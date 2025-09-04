import{w as u,b as g,j as a}from"./iframe-DvsMcRqO.js";import{i as y}from"./type_checkers-CVMjkZjG.js";import{D as C,C as x}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./Card-CWfcCtaI.js";import{playgroundArgs as S}from"./Card.stories-D4qCbK7G.js";import{G as h}from"./Group-CqteXIEy.js";import{C as d}from"./CardScroll-DLEzAmb9.js";import"./preload-helper-Dp1pzeXC.js";import"./VisuallyHidden-BGLO0lAS.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BnZcEJ_G.js";import"./useConfigDirection-CN1nmZoK.js";import"./HorizontalScroll-B4fO0qXL.js";import"./fx-BhW_pGN3.js";import"./InputUtils-D1AbCbBE.js";import"./useIsClient-BccSIQM3.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./ScrollArrow-YwojDmBh.js";import"./chevron_24-Bk-HTKuC.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BxodZLo_.js";const M={title:"Layout/CardScroll",component:d,parameters:f("CardScroll",x,C),argTypes:{count:{control:{type:"number"}}},tags:["Раскладка"]},r={render:({count:t,...s})=>a.jsx(d,{...s,children:Array(t).fill(null).map((j,l)=>a.jsx(P,{...S},l))}),args:{count:3},decorators:[u,g]},o={...r,decorators:[(t,s)=>a.jsx(h,{children:a.jsx(t,{...s.args})}),...y(r.decorators)?r.decorators:[]]};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
