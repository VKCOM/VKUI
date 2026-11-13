import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./usePlatform-DuWHheGr.js";import{At as a,Mt as o,jt as s}from"./iframe-BMXBcsBZ.js";import{n as c,t as l}from"./Flex-B29UgIjp.js";import{n as u,t as d}from"./Group-B3kYj9H6.js";import{n as f,t as p}from"./HorizontalCell-CtVSI_KZ.js";import{n as m,t as h}from"./Image-B1C0BYU6.js";import{i as g,n as _,r as v,t as y}from"./constants-BWBR8eWE.js";import{n as b,t as x}from"./createStoryParameters-D_aKMzVl.js";import{n as S,o as C}from"./mock-gn_3WRVn.js";var w=t({Playground:()=>D,__namedExportsOrder:()=>O,default:()=>E}),T,E,D,O;function k(){return(k=e((()=>{i(),a(),g(),C(),b(),c(),u(),m(),f(),T=n(),E={title:`Data Display/HorizontalCell`,component:p,parameters:x(`HorizontalCell`,y,_),argTypes:{subtitle:v,extraSubtitle:v},tags:[`Отображение данных`]},D=({values:e,...t})=>{let n=r();return(0,T.jsx)(d,{children:(0,T.jsx)(l,{children:e.map(e=>(0,T.jsx)(p,{title:e.title,...t,children:(0,T.jsx)(h,{size:n===`ios`?64:56,borderRadius:`l`,src:e.icon})},e.id))})})},D.args={values:[{id:1,title:`Промокот`,icon:S(`app_promokot`)},{id:2,title:`Разделите счёт`,icon:S(`app_split_bill`)},{id:3,title:`Рассылки`,icon:S(`app_emails`)},{id:4,title:`Тексты песен`,icon:S(`app_lyrics`)}]},D.decorators=[s,o],O=[`Playground`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
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
}`,...D.parameters?.docs?.source}}}})))()}export{D as n,k as r,w as t};