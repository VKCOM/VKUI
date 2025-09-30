import{j as r}from"./iframe-qoTtUH8h.js";import{g as c}from"./getValueByKey-D-251Osc.js";import{D as n,C as p}from"./constants-DdkjnEgz.js";import{c as u}from"./createStoryParameters-CcwS40kl.js";import{G as s}from"./Gallery-DDKRBLgj.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusWithin-E39X-WYV.js";import"./useIsClient-BcbdMWH_.js";import"./callMultiple-ChqatQlo.js";import"./fx-DxBmE9UA.js";import"./InputUtils-DCqC4s6H.js";import"./useConfigDirection-DgRc04K6.js";import"./useMutationObserver-CpTcJWWe.js";import"./useFocusVisible-3VTd4LAB.js";import"./ScrollArrow-DSf-gZAM.js";import"./VisuallyHidden-BqFtMTWb.js";import"./chevron_24-Bbrz8tmk.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BxL5QhO0.js";const H={title:"Data Display/Gallery",component:s,parameters:u("Gallery",p,n),tags:["Отображение данных"]},a={render:e=>r.jsxs(s,{...e,style:{width:800,height:400,maxWidth:"100%",maxHeight:"100%",border:"1px solid black",...e.style},slideWidth:"90%","aria-label":"Галерея с картинкой",slideLabel:(t,d)=>{const m=c(t,{0:"Картинка с двумя медведями",1:"Красный цвет фона",2:"Акцентный цвет фона"});return`${t+1} из ${d} ${m}`},children:[r.jsx("img",{src:"https://placebear.com/1024/640",style:{display:"block"},alt:"Два медведя"}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_negative)"}}),r.jsx("div",{style:{backgroundColor:"var(--vkui--color_background_accent)"}})]})};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
