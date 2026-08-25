import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{At as r,Mt as i,jt as a}from"./iframe-33ykgUxE.js";import{n as o,t as s}from"./VisuallyHidden-a-QXl37q.js";import{n as c,t as l}from"./Card-Baad-K4K.js";import{n as u,t as d}from"./CardScroll-CLGIw1oZ.js";import{n as f,t as p}from"./Group-Bp-h8t_O.js";import{i as m,n as h,t as g}from"./constants-DBkyy3CT.js";import{n as _,t as v}from"./createStoryParameters-DBkK1CfQ.js";var y=t({InsideGroup:()=>C,Playground:()=>S,__namedExportsOrder:()=>w,default:()=>x}),b,x,S,C,w;function T(){return(T=e((()=>{r(),m(),_(),c(),f(),o(),u(),b=n(),x={title:`Layout/CardScroll`,component:d,parameters:v(`CardScroll`,g,h),argTypes:{count:{control:{type:`number`}}},tags:[`Раскладка`]},S=({count:e,...t})=>(0,b.jsx)(d,{...t,children:Array(e).fill(null).map((e,t)=>(0,b.jsx)(l,{children:(0,b.jsx)(`div`,{style:{height:96},children:(0,b.jsx)(s,{children:`Контент для вашей карточки (визуальный компонент-обертка)`})})},t))}),S.args={count:3},S.decorators=[a,i],C=({count:e,...t})=>(0,b.jsx)(p,{children:(0,b.jsx)(d,{...t,children:Array(e).fill(null).map((e,t)=>(0,b.jsx)(l,{children:(0,b.jsx)(`div`,{style:{height:96},children:(0,b.jsx)(s,{children:`Контент для вашей карточки (визуальный компонент-обертка)`})})},t))})}),C.args={count:3},C.decorators=[a,i],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`({
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
  </Group>`,...C.parameters?.docs?.source}}},w=[`Playground`,`InsideGroup`]})))()}export{S as n,T as r,y as t};