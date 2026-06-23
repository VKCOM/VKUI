import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{n as i,t as a}from"./usePlatform-BjjJ-ijZ.js";import{Mt as o,Nt as s,jt as c}from"./iframe-CsHaVY-5.js";import{n as l,t as u}from"./Flex-B8Cr5qNM.js";import{n as d,t as f}from"./Group-LwNPJiLD.js";import{n as p,t as m}from"./HorizontalCell-B1dTww-t.js";import{n as h,t as g}from"./Image-DpfkL_Sn.js";import{i as _,n as v,r as y,t as b}from"./constants-cjed6ZWB.js";import{n as x,t as S}from"./createStoryParameters-CMHckkzt.js";import{n as C,o as w}from"./mock-K9LjXOLX.js";var T=e({Playground:()=>O,__namedExportsOrder:()=>k,default:()=>D}),E,D,O,k,A=t((()=>{a(),c(),_(),w(),x(),l(),d(),h(),p(),E=n(r(),1),D={title:`Data Display/HorizontalCell`,component:m,parameters:S(`HorizontalCell`,b,v),argTypes:{subtitle:y,extraSubtitle:y},tags:[`Отображение данных`]},O=({values:e,...t})=>{let n=i();return(0,E.jsx)(f,{children:(0,E.jsx)(u,{children:e.map(e=>(0,E.jsx)(m,{title:e.title,...t,children:(0,E.jsx)(g,{size:n===`ios`?64:56,borderRadius:`l`,src:e.icon})},e.id))})})},O.args={values:[{id:1,title:`Промокот`,icon:C(`app_promokot`)},{id:2,title:`Разделите счёт`,icon:C(`app_split_bill`)},{id:3,title:`Рассылки`,icon:C(`app_emails`)},{id:4,title:`Тексты песен`,icon:C(`app_lyrics`)}]},O.decorators=[o,s],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`({
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
}`,...O.parameters?.docs?.source}}},k=[`Playground`]}));export{O as n,A as r,T as t};