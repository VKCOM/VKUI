import{n as e,r as t}from"./chunk-BneVvdWh.js";import{yo as n}from"./iframe-DYi3TMGx.js";import{n as r,t as i}from"./Tooltip-D3TfWGTj.js";import{n as a,t as o}from"./UsersStack-BV-kmCFq.js";import{i as s,t as c}from"./constants-DdtDghDm.js";import{n as l,t as u}from"./createStoryParameters-cWWuDqBQ.js";import{n as d,t as f}from"./src-CCfyPkEG.js";import{i as p,n as m,o as h}from"./mock-B_w95Aq1.js";var g=t({Playground:()=>y,WithCustomWrapper:()=>x,__namedExportsOrder:()=>S,default:()=>v}),_,v,y,b,x,S,C=e((()=>{f(),s(),h(),l(),r(),a(),_=n(),v={title:`Data Display/UsersStack`,component:o,parameters:u(`UsersStack`,c),decorators:[d],tags:[`Отображение данных`]},y={args:{children:`Алексей, Илья, Михаил и ещё 1 человек`,photos:[m(),m(),m(),m()],avatarsPosition:`inline-start`}},b=e=>{let t=p();return(0,_.jsx)(i,{description:`${t.first_name} ${t.last_name}`,children:(0,_.jsx)(`div`,{style:{cursor:`pointer`},onClick:()=>console.log(`click to avatar with url `+e[`data-src`]),children:e.children})})},x={...y,args:{...y.args,photos:[m(),m(),m(),m()].map(e=>({src:e,renderWrapper:b}))}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Алексей, Илья, Михаил и ещё 1 человек',
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    avatarsPosition: 'inline-start'
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()].map((photoUrl): UsersStackPhoto => ({
      src: photoUrl,
      renderWrapper: AvatarWrapper
    }))
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`WithCustomWrapper`]}));export{g as n,C as r,y as t};