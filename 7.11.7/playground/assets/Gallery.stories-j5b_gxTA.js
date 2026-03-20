import{j as r}from"./iframe-CmkY54f5.js";import{g as s}from"./getValueByKey-D-251Osc.js";import{D as d,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{G as o}from"./Gallery-B2vR9JNT.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusWithin-BymUKlkD.js";import"./useIsClient-B2WktGOw.js";import"./callMultiple-ChqatQlo.js";import"./useConfigDirection-Duqs0EiT.js";import"./useMutationObserver-BMEHBXHy.js";import"./mergeCalls-Bc-HqyI0.js";import"./useState-D-QVJqbH.js";import"./type_checkers-CVMjkZjG.js";import"./ScrollArrow-C3WUb0SW.js";import"./VisuallyHidden-Da3ud9kw.js";import"./chevron_24-BlOtmXlj.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CCLojpkC.js";import"./fx-D-5xmdri.js";const B={title:"Data Display/Gallery",component:o,parameters:c("Gallery",m,d),tags:["Отображение данных"]},a={render:t=>r.jsxs(o,{...t,style:{width:800,height:400,maxWidth:"100%",maxHeight:"100%",border:"1px solid black",...t.style},slideWidth:"90%","aria-label":"Галерея с картинкой",slideLabel:(e,i)=>{const l=s(e,{0:"Картинка с двумя медведями",1:"Красный цвет фона",2:"Акцентный цвет фона"});return`${e+1} из ${i} ${l}`},children:[r.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"},alt:"Два медведя"}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const E=["Playground"];export{a as Playground,E as __namedExportsOrder,B as default};
