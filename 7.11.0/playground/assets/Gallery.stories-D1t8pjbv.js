import{j as r}from"./iframe-Db0SwwYs.js";import{g as s}from"./getValueByKey-D-251Osc.js";import{D as d,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{G as o}from"./Gallery-CCaqyghR.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusWithin-CRR7Gu3h.js";import"./useIsClient-CvbikZ8J.js";import"./callMultiple-ChqatQlo.js";import"./useConfigDirection-BSBBgTCk.js";import"./useMutationObserver-B_vgSH7b.js";import"./mergeCalls-Bc-HqyI0.js";import"./useState-_pDIeHd1.js";import"./type_checkers-CVMjkZjG.js";import"./ScrollArrow-CYWft9k3.js";import"./VisuallyHidden-CZDmCAU7.js";import"./chevron_24-dshfyEIO.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-DFxn-1ZI.js";import"./fx-D-5xmdri.js";const B={title:"Data Display/Gallery",component:o,parameters:c("Gallery",m,d),tags:["Отображение данных"]},a={render:t=>r.jsxs(o,{...t,style:{width:800,height:400,maxWidth:"100%",maxHeight:"100%",border:"1px solid black",...t.style},slideWidth:"90%","aria-label":"Галерея с картинкой",slideLabel:(e,i)=>{const l=s(e,{0:"Картинка с двумя медведями",1:"Красный цвет фона",2:"Акцентный цвет фона"});return`${e+1} из ${i} ${l}`},children:[r.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"},alt:"Два медведя"}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
