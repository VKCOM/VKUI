import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{n as r,t as i}from"./useLocale-CufzlJNs.js";import{n as a,t as o}from"./LocaleProvider-edgPdhSm.js";import{i as s,n as c,t as l}from"./constants-cjed6ZWB.js";var u,d,f,p,m;e((()=>{i(),s(),a(),u=t(n(),1),d={title:`Configuration/LocaleProvider`,component:o,argTypes:{value:{control:{type:`select`},options:[`ru`,`en`,`fr`,`ua`]}},parameters:{...l,...c},tags:[`Конфигурация`]},f=()=>(0,u.jsxs)(`div`,{style:{padding:5},children:[`Inner LocaleProvider: `,r()]}),p=e=>{let t=r();return(0,u.jsxs)(o,{...e,children:[(0,u.jsxs)(`div`,{style:{padding:5},children:[`Outer LocaleProvider: `,t]}),(0,u.jsx)(f,{})]})},p.parameters={liveCodeEditor:{scope:{DisplayLocaleProvider:f}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(props: LocaleProviderProps) => {
  const locale = useLocale();
  return <LocaleProvider {...props}>
      <div style={{
      padding: 5
    }}>
        Outer LocaleProvider: {locale}
      </div>
      <DisplayLocaleProvider />
    </LocaleProvider>;
}`,...p.parameters?.docs?.source}}},m=[`Playground`]}))();export{p as Playground,m as __namedExportsOrder,d as default};