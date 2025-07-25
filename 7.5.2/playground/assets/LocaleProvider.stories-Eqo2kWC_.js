import{j as e,c as l}from"./iframe-D2wkiYbA.js";import{D as d,C as c}from"./constants-DdkjnEgz.js";import{C as p}from"./ConfigProviderOverride-llMEn7P1.js";function a({value:u,children:o}){return e.jsx(p,{locale:u,children:o})}try{a.displayName="LocaleProvider",a.__docgenInfo={description:`Компонент, прокидывающий локаль. Список можно найти в
[реестре языковых подметок IANA](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).`,displayName:"LocaleProvider",props:{value:{defaultValue:null,description:"Строка с языковой меткой BCP 47.",name:"value",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const E={title:"Configuration/LocaleProvider",component:a,argTypes:{value:{control:{type:"select"},options:["ru","en","fr","ua"]}},parameters:{...c,...d},tags:["Конфигурация"]},v=()=>{const{locale:u}=l();return e.jsxs("div",{style:{padding:5},children:["Inner LocaleProvider: ",u]})},r={render:function({value:o}){const{locale:n}=l();return e.jsxs(a,{value:o??n,children:[e.jsxs("div",{style:{padding:5},children:["Outer LocaleProvider: ",n]}),e.jsx(v,{})]})}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const P=["Playground"];export{r as Playground,P as __namedExportsOrder,E as default};
