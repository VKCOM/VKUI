import{j as r}from"./iframe-F_0bvJrc.js";import{g as s}from"./getValueByKey-D-251Osc.js";import{D as d,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{G as o}from"./Gallery-BVezUbmx.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusWithin-CDt5X1od.js";import"./useIsClient-CSY1-Ql9.js";import"./callMultiple-ChqatQlo.js";import"./fx-BGp5lg0h.js";import"./InputUtils-CneTbOko.js";import"./useConfigDirection-poWhsvcV.js";import"./useMutationObserver-BmpmDaTi.js";import"./useFocusVisible-B9UG_RNv.js";import"./ScrollArrow-BisCq_QF.js";import"./VisuallyHidden-CRrL_L2y.js";import"./chevron_24-B5BZQg8T.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16--5zekb9K.js";const w={title:"Data Display/Gallery",component:o,parameters:c("Gallery",m,d),tags:["Отображение данных"]},a={render:e=>r.jsxs(o,{...e,style:{width:800,height:400,maxWidth:"100%",maxHeight:"100%",border:"1px solid black",...e.style},slideWidth:"90%","aria-label":"Галерея с картинкой",slideLabel:(t,i)=>{const l=s(t,{0:"Картинка с двумя медведями",1:"Красный цвет фона",2:"Акцентный цвет фона"});return`${t+1} из ${i} ${l}`},children:[r.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"},alt:"Два медведя"}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const B=["Playground"];export{a as Playground,B as __namedExportsOrder,w as default};
