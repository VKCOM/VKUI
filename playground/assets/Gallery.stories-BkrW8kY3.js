import{j as r}from"./iframe-DvQ0hW0I.js";import{g as s}from"./getValueByKey-D-251Osc.js";import{D as d,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{G as o}from"./Gallery-CyP_uAfv.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusWithin-C0XX_iqt.js";import"./useIsClient-DWoS3R9Q.js";import"./callMultiple-ChqatQlo.js";import"./fx-SyZDdfTZ.js";import"./InputUtils-BSmatczf.js";import"./useConfigDirection-DmTY1Se6.js";import"./useMutationObserver-6Z5Jiq8c.js";import"./useFocusVisible-B22Xi0Zg.js";import"./ScrollArrow-xW1rSDlZ.js";import"./VisuallyHidden-CGlAvVNH.js";import"./chevron_24-fKzT9kSW.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-m8pRWD8o.js";const w={title:"Data Display/Gallery",component:o,parameters:c("Gallery",m,d),tags:["Отображение данных"]},a={render:e=>r.jsxs(o,{...e,style:{width:800,height:400,maxWidth:"100%",maxHeight:"100%",border:"1px solid black",...e.style},slideWidth:"90%","aria-label":"Галерея с картинкой",slideLabel:(t,i)=>{const l=s(t,{0:"Картинка с двумя медведями",1:"Красный цвет фона",2:"Акцентный цвет фона"});return`${t+1} из ${i} ${l}`},children:[r.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"},alt:"Два медведя"}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
