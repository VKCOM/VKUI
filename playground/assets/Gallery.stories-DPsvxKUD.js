import{j as r}from"./iframe-CEhhJuIi.js";import{g as s}from"./getValueByKey-BAqjffOg.js";import{D as d,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{G as e}from"./Gallery-cIWSy0Vc.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusWithin-D7grZ9Rv.js";import"./useIsClient-BaeDlb2D.js";import"./callMultiple-ChqatQlo.js";import"./useConfigDirection-K0H5l3FT.js";import"./useMutationObserver-L83qy9tM.js";import"./mergeCalls-Bc-HqyI0.js";import"./useState-BlpMLPZb.js";import"./type_checkers-CVMjkZjG.js";import"./ScrollArrow-CyU4THCa.js";import"./VisuallyHidden-BYulTkKK.js";import"./chevron_24-DfAwRUfu.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CMhnb1X0.js";import"./fx-D-5xmdri.js";import"./useBooleanState-C3dujkKO.js";const E={title:"Data Display/Gallery",component:e,parameters:c("Gallery",m,d),tags:["Отображение данных"]},a={render:t=>r.jsxs(e,{...t,style:{width:800,height:400,maxWidth:"100%",maxHeight:"100%",border:"1px solid black",...t.style},slideWidth:"90%","aria-label":"Галерея с картинкой",slideLabel:(o,i)=>{const l=s(o,{0:"Картинка с двумя медведями",1:"Красный цвет фона",2:"Акцентный цвет фона"});return`${o+1} из ${i} ${l}`},children:[r.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"},alt:"Два медведя"}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const H=["Playground"];export{a as Playground,H as __namedExportsOrder,E as default};
