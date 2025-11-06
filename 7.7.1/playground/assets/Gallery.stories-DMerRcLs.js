import{j as r}from"./iframe-dTlwAXGa.js";import{g as c}from"./getValueByKey-D-251Osc.js";import{D as n,C as p}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{G as s}from"./Gallery-DCR_uQVO.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusWithin-kuId0kJs.js";import"./useIsClient-BVOBl7-A.js";import"./callMultiple-ChqatQlo.js";import"./fx-Coz6Cy_1.js";import"./InputUtils-CtGJ0DI4.js";import"./useConfigDirection-BIk700TM.js";import"./useMutationObserver-DdyjCLuO.js";import"./useFocusVisible-8SFeJi_q.js";import"./ScrollArrow-RGrjZN9s.js";import"./VisuallyHidden-JumwXwcS.js";import"./chevron_24-D2C7zIMP.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-DHR9v_Z1.js";const H={title:"Data Display/Gallery",component:s,parameters:u("Gallery",p,n),tags:["Отображение данных"]},a={render:e=>r.jsxs(s,{...e,style:{width:800,height:400,maxWidth:"100%",maxHeight:"100%",border:"1px solid black",...e.style},slideWidth:"90%","aria-label":"Галерея с картинкой",slideLabel:(t,d)=>{const m=c(t,{0:"Картинка с двумя медведями",1:"Красный цвет фона",2:"Акцентный цвет фона"});return`${t+1} из ${d} ${m}`},children:[r.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"},alt:"Два медведя"}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Gallery {...args} style={{
    width: 800,
    height: 400,
    maxWidth: '100%',
    maxHeight: '100%',
    border: '1px solid black',
    ...args.style
  }} slideWidth="90%" aria-label="Галерея с картинкой" slideLabel={(index, slidesCount) => {
    const additionLabel = getValueByKey(index, {
      0: 'Картинка с двумя медведями',
      1: 'Красный цвет фона',
      2: 'Акцентный цвет фона'
    }, '');
    return \`\${index + 1} из \${slidesCount} \${additionLabel}\`;
  }}>
      <img src="https://placebear.com/1024/640" style={{
      display: 'block'
    }} alt="Два медведя" />
      <div style={{
      backgroundColor: 'var(--vkui--color_background_negative)'
    }} />
      <div style={{
      backgroundColor: 'var(--vkui--color_background_accent)'
    }} />
    </Gallery>
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const K=["Playground"];export{a as Playground,K as __namedExportsOrder,H as default};
