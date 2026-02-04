import{j as r}from"./iframe-CDzsgUJ6.js";import{g as s}from"./getValueByKey-D-251Osc.js";import{D as d,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{G as e}from"./Gallery-CPys1ADt.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusWithin-UKmiu0Co.js";import"./useIsClient-CDj3wCHu.js";import"./callMultiple-ChqatQlo.js";import"./useConfigDirection-BVbAx_rU.js";import"./useMutationObserver-BHxydzuf.js";import"./useResizeObserver-HbA0siNX.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./mergeCalls-Bc-HqyI0.js";import"./useState-QDdZr02K.js";import"./type_checkers-CVMjkZjG.js";import"./ScrollArrow-LiGxBkQ4.js";import"./VisuallyHidden-hrbUbT1W.js";import"./chevron_24-CXLTjO71.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BoVPvRqg.js";import"./fx-D-5xmdri.js";import"./useBooleanState-CnmcT8ct.js";const S={title:"Data Display/Gallery",component:e,parameters:p("Gallery",m,d),tags:["Отображение данных"]},a={render:t=>r.jsxs(e,{...t,style:{width:800,height:400,maxWidth:"100%",maxHeight:"100%",border:"1px solid black",...t.style},slideWidth:"90%","aria-label":"Галерея с картинкой",slideLabel:(o,i)=>{const l=s(o,{0:"Картинка с двумя медведями",1:"Красный цвет фона",2:"Акцентный цвет фона"});return`${o+1} из ${i} ${l}`},children:[r.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"},alt:"Два медведя"}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const V=["Playground"];export{a as Playground,V as __namedExportsOrder,S as default};
