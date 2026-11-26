import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,t as a}from"./constants-BWBR8eWE.js";import{n as o,t as s}from"./createStoryParameters-D_aKMzVl.js";import{n as c,r as l}from"./getValueByKey-BfIevG41.js";import{n as u,t as d}from"./Gallery-6af1izFZ.js";var f=t({Playground:()=>h,__namedExportsOrder:()=>g,default:()=>m}),p,m,h,g;function _(){return(_=e((()=>{l(),r(),o(),u(),p=n(),m={title:`Data Display/Gallery`,component:d,parameters:s(`Gallery`,a,i,{liveCodeEditor:{scope:{getValueByKey:c}}}),tags:[`Отображение данных`]},h=e=>(0,p.jsxs)(d,{...e,style:{width:800,height:400,maxWidth:`100%`,maxHeight:`100%`,border:`1px solid black`,...e.style},slideWidth:`90%`,"aria-label":`Галерея с картинкой`,slideLabel:(e,t)=>{let n=c(e,{0:`Картинка с двумя медведями`,1:`Красный цвет фона`,2:`Акцентный цвет фона`},``);return`${e+1} из ${t} ${n}`},children:[(0,p.jsx)(`img`,{src:`https://placebear.com/1024/640`,style:{display:`block`},alt:`Два медведя`}),(0,p.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_negative)`}}),(0,p.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_accent)`}})]}),g=[`Playground`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: GalleryProps) => <Gallery {...args} style={{
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
  </Gallery>`,...h.parameters?.docs?.source}}}})))()}export{h as n,_ as r,f as t};