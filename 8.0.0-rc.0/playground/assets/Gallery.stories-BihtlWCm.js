import{j as r}from"./iframe-CJSxyW9U.js";import{g as s}from"./getValueByKey-D-251Osc.js";import{D as d,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{G as e}from"./Gallery-CecN-vVc.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusWithin-B6ZQto83.js";import"./useIsClient-CYCYCyLi.js";import"./callMultiple-ChqatQlo.js";import"./useConfigDirection-C3cHGESc.js";import"./useMutationObserver-BVn6sRWr.js";import"./useResizeObserver-Biiqpwp-.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./mergeCalls-Bc-HqyI0.js";import"./useState-Cf9zElDT.js";import"./type_checkers-CVMjkZjG.js";import"./ScrollArrow-CnCcgob2.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./chevron_24-BPHQ9yUO.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BZCG5KUX.js";import"./fx-D-5xmdri.js";import"./useBooleanState-CkcwTMgJ.js";const S={title:"Data Display/Gallery",component:e,parameters:p("Gallery",m,d),tags:["Отображение данных"]},a={render:t=>r.jsxs(e,{...t,style:{width:800,height:400,maxWidth:"100%",maxHeight:"100%",border:"1px solid black",...t.style},slideWidth:"90%","aria-label":"Галерея с картинкой",slideLabel:(o,i)=>{const l=s(o,{0:"Картинка с двумя медведями",1:"Красный цвет фона",2:"Акцентный цвет фона"});return`${o+1} из ${i} ${l}`},children:[r.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"},alt:"Два медведя"}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
