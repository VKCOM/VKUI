import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./useLocale-BYPACD-G.js";import{n as i,t as a}from"./LocaleProvider-CDxSV_li.js";import{i as o,n as s,t as c}from"./constants-BWBR8eWE.js";var l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),i(),l=t(),u={title:`Configuration/LocaleProvider`,component:a,argTypes:{value:{control:{type:`select`},options:[`ru`,`en`,`fr`,`ua`]}},parameters:{...c,...s},tags:[`Конфигурация`]},d=()=>{let e=n();return(0,l.jsxs)(`div`,{style:{padding:5},children:[`Inner LocaleProvider: `,e]})},f=e=>{let t=n();return(0,l.jsxs)(a,{...e,children:[(0,l.jsxs)(`div`,{style:{padding:5},children:[`Outer LocaleProvider: `,t]}),(0,l.jsx)(d,{})]})},f.parameters={liveCodeEditor:{scope:{DisplayLocaleProvider:d}}},p=[`Playground`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(props: LocaleProviderProps) => {
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