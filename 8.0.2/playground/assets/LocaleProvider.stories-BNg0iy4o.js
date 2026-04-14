import{n as e}from"./chunk-BneVvdWh.js";import{Ea as t,Ta as n,yo as r}from"./iframe-lhb8_BzR.js";import{n as i,t as a}from"./LocaleProvider-Bzb_RT0U.js";import{i as o,n as s,t as c}from"./constants-CXYaXe_q.js";var l,u,d,f,p;e((()=>{o(),n(),i(),l=r(),u={title:`Configuration/LocaleProvider`,component:a,argTypes:{value:{control:{type:`select`},options:[`ru`,`en`,`fr`,`ua`]}},parameters:{...c,...s},tags:[`Конфигурация`]},d=()=>{let{locale:e}=t();return(0,l.jsxs)(`div`,{style:{padding:5},children:[`Inner LocaleProvider: `,e]})},f={render:function({value:e}){let{locale:n}=t();return(0,l.jsxs)(a,{value:e??n,children:[(0,l.jsxs)(`div`,{style:{padding:5},children:[`Outer LocaleProvider: `,n]}),(0,l.jsx)(d,{})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render({
    value
  }) {
    const {
      locale
    } = useConfigProvider();
    return <LocaleProvider value={value ?? locale}>
        <div style={{
        padding: 5
      }}>Outer LocaleProvider: {locale}</div>
        <DisplayLocaleProvider />
      </LocaleProvider>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`]}))();export{f as Playground,p as __namedExportsOrder,u as default};