import{n as e}from"./chunk-BneVvdWh.js";import{Ea as t,Ta as n,yo as r}from"./iframe-lhb8_BzR.js";import{n as i,t as a}from"./PlatformProvider-Dy09rZcV.js";import{i as o,n as s,t as c}from"./constants-CXYaXe_q.js";var l,u,d,f,p;e((()=>{o(),n(),i(),l=r(),u={title:`Configuration/PlatformProvider`,component:a,argTypes:{value:{control:{type:`select`},options:[`android`,`ios`,`vkcom`]}},parameters:{...c,...s},tags:[`Конфигурация`]},d=()=>{let{platform:e}=t();return(0,l.jsxs)(`div`,{style:{padding:5},children:[`Inner LocaleProvider: `,e]})},f={render:function({value:e}){let{platform:n}=t();return(0,l.jsxs)(a,{value:e??n,children:[(0,l.jsxs)(`div`,{style:{padding:5},children:[`Outer LocaleProvider: `,n]}),(0,l.jsx)(d,{})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render({
    value
  }) {
    const {
      platform
    } = useConfigProvider();
    return <PlatformProvider value={value ?? platform}>
        <div style={{
        padding: 5
      }}>Outer LocaleProvider: {platform}</div>
        <DisplayPlatformProvider />
      </PlatformProvider>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`]}))();export{f as Playground,p as __namedExportsOrder,u as default};