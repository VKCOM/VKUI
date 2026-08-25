import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./getValueByKey-Z_3AHYfi.js";import{n as a,t as o}from"./Gallery-DCJF-Srn.js";import{i as s,n as c,t as l}from"./constants-DBkyy3CT.js";import{n as u,t as d}from"./createStoryParameters-DBkK1CfQ.js";var f=t({Playground:()=>h,__namedExportsOrder:()=>g,default:()=>m}),p,m,h,g;function _(){return(_=e((()=>{i(),s(),u(),a(),p=n(),m={title:`Data Display/Gallery`,component:o,parameters:d(`Gallery`,l,c,{liveCodeEditor:{scope:{getValueByKey:r}}}),tags:[`Отображение данных`]},h=e=>(0,p.jsxs)(o,{...e,style:{width:800,height:400,maxWidth:`100%`,maxHeight:`100%`,border:`1px solid black`,...e.style},slideWidth:`90%`,"aria-label":`Галерея с картинкой`,slideLabel:(e,t)=>{let n=r(e,{0:`Картинка с двумя медведями`,1:`Красный цвет фона`,2:`Акцентный цвет фона`},``);return`${e+1} из ${t} ${n}`},children:[(0,p.jsx)(`img`,{src:`https://placebear.com/1024/640`,style:{display:`block`},alt:`Два медведя`}),(0,p.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_negative)`}}),(0,p.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_accent)`}})]}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: GalleryProps) => <Gallery {...args} style={{
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
  </Gallery>`,...h.parameters?.docs?.source}}},g=[`Playground`]})))()}export{h as n,_ as r,f as t};