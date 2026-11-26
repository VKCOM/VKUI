import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./usePlatform-y1UWuT6C.js";import{i,n as a,t as o}from"./constants-BWBR8eWE.js";import{n as s,t as c}from"./PlatformProvider-B12Mym1M.js";var l,u,d,f,p;function m(){return(m=e((()=>{r(),i(),s(),l=t(),u={title:`Configuration/PlatformProvider`,component:c,argTypes:{value:{control:{type:`select`},options:[`android`,`ios`,`vkcom`]}},parameters:{...o,...a},tags:[`Конфигурация`]},d=()=>{let e=n();return(0,l.jsxs)(`div`,{style:{padding:5},children:[`Inner LocaleProvider: `,e]})},f=e=>{let t=n();return(0,l.jsxs)(c,{...e,children:[(0,l.jsxs)(`div`,{style:{padding:5},children:[`Outer LocaleProvider: `,t]}),(0,l.jsx)(d,{})]})},f.parameters={liveCodeEditor:{scope:{DisplayPlatformProvider:d}}},p=[`Playground`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(props: PlatformProviderProps) => {
  const outerPlatform = usePlatform();
  return <PlatformProvider {...props}>
      <div style={{
      padding: 5
    }}>
        Outer LocaleProvider: {outerPlatform}
      </div>
      <DisplayPlatformProvider />
    </PlatformProvider>;
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Playground,p as __namedExportsOrder,u as default};