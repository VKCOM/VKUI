import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,t as r}from"./Tooltip-NvdYiicF.js";import{n as i,t as a}from"./UsersStack-C8PnOIkp.js";import{i as o,t as s}from"./constants-Dj6vOzIh.js";import{n as c,t as l}from"./createStoryParameters-pz1UrWMe.js";import{n as u,t as d}from"./src-13y77QG6.js";import{i as f,n as p,o as m}from"./mock-D9mwry-3.js";var h,g,_,v,y,b,x=e((()=>{d(),o(),m(),c(),n(),i(),h=t(),g={title:`Data Display/UsersStack`,component:a,parameters:l(`UsersStack`,s),decorators:[u],tags:[`Отображение данных`]},_={args:{children:`Алексей, Илья, Михаил и ещё 1 человек`,photos:[p(),p(),p(),p()],avatarsPosition:`inline-start`}},v=e=>{let t=f();return(0,h.jsx)(r,{description:`${t.first_name} ${t.last_name}`,children:(0,h.jsx)(`div`,{style:{cursor:`pointer`},onClick:()=>console.log(`click to avatar with url `+e[`data-src`]),children:e.children})})},y={..._,args:{..._.args,photos:[p(),p(),p(),p()].map(e=>({src:e,renderWrapper:v}))}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Алексей, Илья, Михаил и ещё 1 человек',
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    avatarsPosition: 'inline-start'
  }
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()].map((photoUrl): UsersStackPhoto => ({
      src: photoUrl,
      renderWrapper: AvatarWrapper
    }))
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`WithCustomWrapper`]}));export{g as a,x as i,y as n,b as r,_ as t};