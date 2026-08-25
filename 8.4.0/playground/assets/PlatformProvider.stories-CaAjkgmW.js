import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./usePlatform-BcYLlEra.js";import{n as i,t as a}from"./PlatformProvider-BYiWV5KY.js";import{i as o,n as s,t as c}from"./constants-DBkyy3CT.js";var l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),i(),l=t(),u={title:`Configuration/PlatformProvider`,component:a,argTypes:{value:{control:{type:`select`},options:[`android`,`ios`,`vkcom`]}},parameters:{...c,...s},tags:[`Конфигурация`]},d=()=>{let e=n();return(0,l.jsxs)(`div`,{style:{padding:5},children:[`Inner LocaleProvider: `,e]})},f=e=>{let t=n();return(0,l.jsxs)(a,{...e,children:[(0,l.jsxs)(`div`,{style:{padding:5},children:[`Outer LocaleProvider: `,t]}),(0,l.jsx)(d,{})]})},f.parameters={liveCodeEditor:{scope:{DisplayPlatformProvider:d}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(props: PlatformProviderProps) => {
  const outerPlatform = usePlatform();
  return <PlatformProvider {...props}>
      <div style={{
      padding: 5
    }}>
        Outer LocaleProvider: {outerPlatform}
      </div>
      <DisplayPlatformProvider />
    </PlatformProvider>;
}`,...f.parameters?.docs?.source}}},p=[`Playground`]})))()}m();export{f as Playground,p as __namedExportsOrder,u as default};