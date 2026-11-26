import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{At as r,Mt as i,jt as a}from"./iframe-kY6v1YfM.js";import{i as o,n as s,t as c}from"./constants-BWBR8eWE.js";import{n as l,t as u}from"./createStoryParameters-D_aKMzVl.js";import{n as d,t as f}from"./Group-BYaqcOTu.js";import{n as p,t as m}from"./VisuallyHidden-B8gDKlvD.js";import{n as h,t as g}from"./Card-B5gmI3Z3.js";import{n as _,t as v}from"./CardScroll-DB_rALvB.js";var y=t({InsideGroup:()=>C,Playground:()=>S,__namedExportsOrder:()=>w,default:()=>x}),b,x,S,C,w;function T(){return(T=e((()=>{r(),o(),l(),h(),d(),p(),_(),b=n(),x={title:`Layout/CardScroll`,component:v,parameters:u(`CardScroll`,c,s),argTypes:{count:{control:{type:`number`}}},tags:[`Раскладка`]},S=({count:e,...t})=>(0,b.jsx)(v,{...t,children:Array(e).fill(null).map((e,t)=>(0,b.jsx)(g,{children:(0,b.jsx)(`div`,{style:{height:96},children:(0,b.jsx)(m,{children:`Контент для вашей карточки (визуальный компонент-обертка)`})})},t))}),S.args={count:3},S.decorators=[a,i],C=({count:e,...t})=>(0,b.jsx)(f,{children:(0,b.jsx)(v,{...t,children:Array(e).fill(null).map((e,t)=>(0,b.jsx)(g,{children:(0,b.jsx)(`div`,{style:{height:96},children:(0,b.jsx)(m,{children:`Контент для вашей карточки (визуальный компонент-обертка)`})})},t))})}),C.args={count:3},C.decorators=[a,i],w=[`Playground`,`InsideGroup`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`({
  count,
  ...args
}: StoryCardScrollProps) => <CardScroll {...args}>
    {Array(count).fill(null).map((_, index) => <Card key={index}>
          <div style={{
      height: 96
    }}>
            <VisuallyHidden>
              Контент для вашей карточки (визуальный компонент-обертка)
            </VisuallyHidden>
          </div>
        </Card>)}
  </CardScroll>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
  count,
  ...args
}: StoryCardScrollProps) => <Group>
    <CardScroll {...args}>
      {Array(count).fill(null).map((_, index) => <Card key={index}>
            <div style={{
        height: 96
      }}>
              <VisuallyHidden>
                Контент для вашей карточки (визуальный компонент-обертка)
              </VisuallyHidden>
            </div>
          </Card>)}
    </CardScroll>
  </Group>`,...C.parameters?.docs?.source}}}})))()}export{S as n,T as r,y as t};