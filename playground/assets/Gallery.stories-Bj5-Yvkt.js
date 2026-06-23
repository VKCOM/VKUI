import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{n as i,r as a}from"./getValueByKey-xWZYdzDE.js";import{n as o,t as s}from"./Gallery-68xNf38T.js";import{i as c,n as l,t as u}from"./constants-cjed6ZWB.js";import{n as d,t as f}from"./createStoryParameters-CMHckkzt.js";var p=e({Playground:()=>g,__namedExportsOrder:()=>_,default:()=>h}),m,h,g,_,v=t((()=>{a(),c(),d(),o(),m=n(r(),1),h={title:`Data Display/Gallery`,component:s,parameters:f(`Gallery`,u,l,{liveCodeEditor:{scope:{getValueByKey:i}}}),tags:[`Отображение данных`]},g=e=>(0,m.jsxs)(s,{...e,style:{width:800,height:400,maxWidth:`100%`,maxHeight:`100%`,border:`1px solid black`,...e.style},slideWidth:`90%`,"aria-label":`Галерея с картинкой`,slideLabel:(e,t)=>{let n=i(e,{0:`Картинка с двумя медведями`,1:`Красный цвет фона`,2:`Акцентный цвет фона`},``);return`${e+1} из ${t} ${n}`},children:[(0,m.jsx)(`img`,{src:`https://placebear.com/1024/640`,style:{display:`block`},alt:`Два медведя`}),(0,m.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_negative)`}}),(0,m.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_accent)`}})]}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: GalleryProps) => <Gallery {...args} style={{
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
  </Gallery>`,...g.parameters?.docs?.source}}},_=[`Playground`]}));export{g as n,v as r,p as t};