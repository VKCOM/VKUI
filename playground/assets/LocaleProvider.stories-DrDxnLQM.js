import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,n as r,t as i}from"./constants-BWBR8eWE.js";import{n as a,t as o}from"./useLocale-iM8G1v7-.js";import{n as s,t as c}from"./LocaleProvider-DXGWHBlj.js";var l,u,d,f,p;function m(){return(m=e((()=>{o(),n(),s(),l=t(),u={title:`Configuration/LocaleProvider`,component:c,argTypes:{value:{control:{type:`select`},options:[`ru`,`en`,`fr`,`ua`]}},parameters:{...i,...r},tags:[`Конфигурация`]},d=()=>{let e=a();return(0,l.jsxs)(`div`,{style:{padding:5},children:[`Inner LocaleProvider: `,e]})},f=e=>{let t=a();return(0,l.jsxs)(c,{...e,children:[(0,l.jsxs)(`div`,{style:{padding:5},children:[`Outer LocaleProvider: `,t]}),(0,l.jsx)(d,{})]})},f.parameters={liveCodeEditor:{scope:{DisplayLocaleProvider:d}}},p=[`Playground`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(props: LocaleProviderProps) => {
  const locale = useLocale();
  return <LocaleProvider {...props}>
      <div style={{
      padding: 5
    }}>
        Outer LocaleProvider: {locale}
      </div>
      <DisplayLocaleProvider />
    </LocaleProvider>;
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Playground,p as __namedExportsOrder,u as default};