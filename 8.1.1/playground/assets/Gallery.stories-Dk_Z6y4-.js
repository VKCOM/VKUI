import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,t as r}from"./Gallery-wiF0q4Ua.js";import{n as i,r as a}from"./getValueByKey-Bz9Iuv5S.js";import{i as o,n as s,t as c}from"./constants-Dj6vOzIh.js";import{n as l,t as u}from"./createStoryParameters-pz1UrWMe.js";var d,f,p,m,h=e((()=>{a(),o(),l(),n(),d=t(),f={title:`Data Display/Gallery`,component:r,parameters:u(`Gallery`,c,s),tags:[`Отображение данных`]},p={render:e=>(0,d.jsxs)(r,{...e,style:{width:800,height:400,maxWidth:`100%`,maxHeight:`100%`,border:`1px solid black`,...e.style},slideWidth:`90%`,"aria-label":`Галерея с картинкой`,slideLabel:(e,t)=>{let n=i(e,{0:`Картинка с двумя медведями`,1:`Красный цвет фона`,2:`Акцентный цвет фона`},``);return`${e+1} из ${t} ${n}`},children:[(0,d.jsx)(`img`,{src:`https://placebear.com/1024/640`,style:{display:`block`},alt:`Два медведя`}),(0,d.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_negative)`}}),(0,d.jsx)(`div`,{style:{backgroundColor:`var(--vkui--color_background_accent)`}})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`]}));export{f as i,m as n,h as r,p as t};