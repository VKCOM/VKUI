import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./usePlatform-y1UWuT6C.js";import{At as a,Mt as o,jt as s}from"./iframe-kY6v1YfM.js";import{i as c,n as l,r as u,t as d}from"./constants-BWBR8eWE.js";import{n as f,t as p}from"./createStoryParameters-D_aKMzVl.js";import{n as m,t as h}from"./Group-BYaqcOTu.js";import{n as g,o as _}from"./mock-gn_3WRVn.js";import{n as v,t as y}from"./Image-CsTyn_Gb.js";import{n as b,t as x}from"./Flex-C-g3JHZP.js";import{n as S,t as C}from"./HorizontalCell-Cy2WpV9Q.js";var w=t({Playground:()=>D,__namedExportsOrder:()=>O,default:()=>E}),T,E,D,O;function k(){return(k=e((()=>{i(),a(),c(),_(),f(),b(),m(),v(),S(),T=n(),E={title:`Data Display/HorizontalCell`,component:C,parameters:p(`HorizontalCell`,d,l),argTypes:{subtitle:u,extraSubtitle:u},tags:[`Отображение данных`]},D=({values:e,...t})=>{let n=r();return(0,T.jsx)(h,{children:(0,T.jsx)(x,{children:e.map(e=>(0,T.jsx)(C,{title:e.title,...t,children:(0,T.jsx)(y,{size:n===`ios`?64:56,borderRadius:`l`,src:e.icon})},e.id))})})},D.args={values:[{id:1,title:`Промокот`,icon:g(`app_promokot`)},{id:2,title:`Разделите счёт`,icon:g(`app_split_bill`)},{id:3,title:`Рассылки`,icon:g(`app_emails`)},{id:4,title:`Тексты песен`,icon:g(`app_lyrics`)}]},D.decorators=[s,o],O=[`Playground`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
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