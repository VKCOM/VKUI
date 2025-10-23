import{j as u,G as i,m as t}from"./iframe-BdXaAE5r.js";import{D as s,C as d}from"./constants-DdkjnEgz.js";import{C as l}from"./ConfigProviderOverride-BDqJysYU.js";import"./preload-helper-PPVm8Dsz.js";function o({value:r,children:a}){return u.jsx(l,{platform:r,children:u.jsx(i,{children:a})})}try{o.displayName="PlatformProvider",o.__docgenInfo={description:"Компонент, позволяющий переопределить платформу для части приложения.",displayName:"PlatformProvider",props:{value:{defaultValue:null,description:"Платформа.",name:"value",required:!0,type:{name:"enum",value:[{value:'"android"'},{value:'"ios"'},{value:'"vkcom"'}]}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const P={title:"Configuration/PlatformProvider",component:o,argTypes:{value:{control:{type:"select"},options:["android","ios","vkcom"]}},parameters:{...d,...s},tags:["Конфигурация"]},c=()=>{const{platform:r}=t();return u.jsxs("div",{style:{padding:5},children:["Inner LocaleProvider: ",r]})},e={render:function({value:a}){const{platform:n}=t();return u.jsxs(o,{value:a??n,children:[u.jsxs("div",{style:{padding:5},children:["Outer LocaleProvider: ",n]}),u.jsx(c,{})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const y=["Playground"];export{e as Playground,y as __namedExportsOrder,P as default};
