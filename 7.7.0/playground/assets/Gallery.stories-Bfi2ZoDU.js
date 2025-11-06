import{j as r}from"./iframe-B4SbMwac.js";import{g as c}from"./getValueByKey-D-251Osc.js";import{D as n,C as p}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{G as s}from"./Gallery-CKW9H7-j.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusWithin-to_rIq53.js";import"./useIsClient-BLqc0TVE.js";import"./callMultiple-ChqatQlo.js";import"./fx-DgidOCzC.js";import"./InputUtils-C948cbKc.js";import"./useConfigDirection-D94ZyAhW.js";import"./useMutationObserver-CvVb8dg4.js";import"./useFocusVisible-CA0gmOpw.js";import"./ScrollArrow-DpEqgyg6.js";import"./VisuallyHidden-B_fMC41X.js";import"./chevron_24-BdFylkK-.js";import"./SvgIconRootV2-CSlzNDT1.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-DNg3QADm.js";const H={title:"Data Display/Gallery",component:s,parameters:u("Gallery",p,n),tags:["Отображение данных"]},a={render:e=>r.jsxs(s,{...e,style:{width:800,height:400,maxWidth:"100%",maxHeight:"100%",border:"1px solid black",...e.style},slideWidth:"90%","aria-label":"Галерея с картинкой",slideLabel:(t,d)=>{const m=c(t,{0:"Картинка с двумя медведями",1:"Красный цвет фона",2:"Акцентный цвет фона"});return`${t+1} из ${d} ${m}`},children:[r.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"},alt:"Два медведя"}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
