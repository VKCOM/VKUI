import{A as e,j as r,u as i}from"./iframe-CJSxyW9U.js";import{D as s,C as o}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Configuration/AdaptivityProvider",component:e,parameters:d("AdaptivityProvider",o,s),tags:["Конфигурация"]},n=()=>{const{density:t}=i();return r.jsxs(r.Fragment,{children:[t.compact&&r.jsx("div",{style:{padding:5},children:"Density: Compact"}),t.regular&&r.jsx("div",{style:{padding:5},children:"Density: Regular"})]})},a={render:t=>r.jsx(e,{...t,children:r.jsx(n,{})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <AdaptivityProvider {...args}>
      <DisplayAdaptivityProvider />
    </AdaptivityProvider>
}`,...a.parameters?.docs?.source}}};const v=["Playground"];export{a as Playground,v as __namedExportsOrder,l as default};
