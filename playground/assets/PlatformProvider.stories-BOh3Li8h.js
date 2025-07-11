import{j as u,G as l,c as d}from"./iframe-DDos8QSD.js";import{D as c,C as m}from"./constants-DdkjnEgz.js";import{C as p}from"./ConfigProviderOverride-CyArhSE9.js";function o({value:r,children:a}){return u.jsx(p,{platform:r,children:u.jsx(l,{children:a})})}try{o.displayName="PlatformProvider",o.__docgenInfo={description:"Компонент, позволяющий переопределить платформу для части приложения.",displayName:"PlatformProvider",props:{value:{defaultValue:null,description:"Платформа.",name:"value",required:!0,type:{name:"enum",value:[{value:'"android"'},{value:'"ios"'},{value:'"vkcom"'}]}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const C={title:"Service/PlatformProvider",component:o,argTypes:{value:{control:{type:"select"},options:["android","ios","vkcom"]}},parameters:{...m,...c}},v=()=>{const{platform:r}=d();return u.jsxs("div",{style:{padding:5},children:["Inner LocaleProvider: ",r]})},e={render:function({value:a}){const{platform:n}=d();return u.jsxs(o,{value:a??n,children:[u.jsxs("div",{style:{padding:5},children:["Outer LocaleProvider: ",n]}),u.jsx(v,{})]})}};var t,i,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const E=["Playground"];export{e as Playground,E as __namedExportsOrder,C as default};
