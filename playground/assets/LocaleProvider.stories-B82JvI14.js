import{j as e,m as t}from"./iframe-DvQ0hW0I.js";import{D as s,C as i}from"./constants-DdkjnEgz.js";import{C as l}from"./ConfigProviderOverride-5F9Q0adn.js";import"./preload-helper-PPVm8Dsz.js";function a({value:u,children:o}){return e.jsx(l,{locale:u,children:o})}try{a.displayName="LocaleProvider",a.__docgenInfo={description:`Компонент, прокидывающий локаль. Список можно найти в
[реестре языковых подметок IANA](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).`,displayName:"LocaleProvider",props:{value:{defaultValue:null,description:"Строка с языковой меткой BCP 47.",name:"value",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const m={title:"Configuration/LocaleProvider",component:a,argTypes:{value:{control:{type:"select"},options:["ru","en","fr","ua"]}},parameters:{...i,...s},tags:["Конфигурация"]},d=()=>{const{locale:u}=t();return e.jsxs("div",{style:{padding:5},children:["Inner LocaleProvider: ",u]})},r={render:function({value:o}){const{locale:n}=t();return e.jsxs(a,{value:o??n,children:[e.jsxs("div",{style:{padding:5},children:["Outer LocaleProvider: ",n]}),e.jsx(d,{})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const y=["Playground"];export{r as Playground,y as __namedExportsOrder,m as default};
