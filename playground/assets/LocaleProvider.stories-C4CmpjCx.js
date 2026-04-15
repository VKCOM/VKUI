import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,r}from"./ConfigProviderContext-ALjDaJwv.js";import{n as i,t as a}from"./LocaleProvider-DfVv9ZU-.js";import{i as o,n as s,t as c}from"./constants-Dj6vOzIh.js";var l,u,d,f,p;e((()=>{o(),n(),i(),l=t(),u={title:`Configuration/LocaleProvider`,component:a,argTypes:{value:{control:{type:`select`},options:[`ru`,`en`,`fr`,`ua`]}},parameters:{...c,...s},tags:[`Конфигурация`]},d=()=>{let{locale:e}=r();return(0,l.jsxs)(`div`,{style:{padding:5},children:[`Inner LocaleProvider: `,e]})},f={render:function({value:e}){let{locale:t}=r();return(0,l.jsxs)(a,{value:e??t,children:[(0,l.jsxs)(`div`,{style:{padding:5},children:[`Outer LocaleProvider: `,t]}),(0,l.jsx)(d,{})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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