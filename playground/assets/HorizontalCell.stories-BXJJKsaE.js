import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./usePlatform-BcYLlEra.js";import{At as a,Mt as o,jt as s}from"./iframe-33ykgUxE.js";import{n as c,t as l}from"./Flex-BFq13joc.js";import{n as u,t as d}from"./Group-Bp-h8t_O.js";import{n as f,t as p}from"./HorizontalCell-DX3tFRcf.js";import{n as m,t as h}from"./Image-DtmBlPSV.js";import{i as g,n as _,r as v,t as y}from"./constants-DBkyy3CT.js";import{n as b,t as x}from"./createStoryParameters-DBkK1CfQ.js";import{n as S,o as C}from"./mock-CkzEkxhs.js";var w=t({Playground:()=>D,__namedExportsOrder:()=>O,default:()=>E}),T,E,D,O;function k(){return(k=e((()=>{i(),a(),g(),C(),b(),c(),u(),m(),f(),T=n(),E={title:`Data Display/HorizontalCell`,component:p,parameters:x(`HorizontalCell`,y,_),argTypes:{subtitle:v,extraSubtitle:v},tags:[`Отображение данных`]},D=({values:e,...t})=>{let n=r();return(0,T.jsx)(d,{children:(0,T.jsx)(l,{children:e.map(e=>(0,T.jsx)(p,{title:e.title,...t,children:(0,T.jsx)(h,{size:n===`ios`?64:56,borderRadius:`l`,src:e.icon})},e.id))})})},D.args={values:[{id:1,title:`Промокот`,icon:S(`app_promokot`)},{id:2,title:`Разделите счёт`,icon:S(`app_split_bill`)},{id:3,title:`Рассылки`,icon:S(`app_emails`)},{id:4,title:`Тексты песен`,icon:S(`app_lyrics`)}]},D.decorators=[s,o],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
  values,
  ...args
}: HorizontalCellStoryProps) => {
  const platform = usePlatform();
  return <Group>
      <Flex>
        {values.map(value => {
        return <HorizontalCell key={value.id} title={value.title} {...args}>
              <Image size={platform === 'ios' ? 64 : 56} borderRadius="l" src={value.icon} />
            </HorizontalCell>;
      })}
      </Flex>
    </Group>;
}`,...D.parameters?.docs?.source}}},O=[`Playground`]})))()}export{D as n,k as r,w as t};