import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Mt as i,Nt as a,jt as o}from"./iframe-CsHaVY-5.js";import{n as s,t as c}from"./VisuallyHidden-GaCP6QeD.js";import{n as l,t as u}from"./Card-0RSdUeaq.js";import{n as d,t as f}from"./CardGrid-C9RWYQd_.js";import{n as p,t as m}from"./Group-LwNPJiLD.js";import{i as h,n as g,t as _}from"./constants-cjed6ZWB.js";import{n as v,t as y}from"./createStoryParameters-CMHckkzt.js";var b=e({InsideGroup:()=>w,Playground:()=>C,__namedExportsOrder:()=>T,default:()=>S}),x,S,C,w,T,E=t((()=>{o(),h(),v(),l(),p(),s(),d(),x=n(r(),1),S={title:`Layout/CardGrid`,component:f,parameters:y(`CardGrid`,_,g),argTypes:{count:{control:{type:`number`}}},tags:[`Раскладка`]},C=({count:e,...t})=>(0,x.jsx)(f,{...t,children:Array(e).fill(null).map((e,t)=>(0,x.jsx)(u,{children:(0,x.jsx)(`div`,{style:{height:96},children:(0,x.jsx)(c,{children:`Контент для вашей карточки (визуальный компонент-обертка)`})})},t))}),C.args={count:3},C.decorators=[i,a],w=({count:e,...t})=>(0,x.jsx)(m,{children:(0,x.jsx)(f,{...t,children:Array(e).fill(null).map((e,t)=>(0,x.jsx)(u,{children:(0,x.jsx)(`div`,{style:{height:96},children:(0,x.jsx)(c,{children:`Контент для вашей карточки (визуальный компонент-обертка)`})})},t))})}),w.args={count:3},w.decorators=[i,a],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
  count,
  ...args
}: StoryCardGridProps) => <CardGrid {...args}>
    {Array(count).fill(null).map((_, index) => <Card key={index}>
          <div style={{
      height: 96
    }}>
            <VisuallyHidden>
              Контент для вашей карточки (визуальный компонент-обертка)
            </VisuallyHidden>
          </div>
        </Card>)}
  </CardGrid>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
  count,
  ...args
}: StoryCardGridProps) => <Group>
    <CardGrid {...args}>
      {Array(count).fill(null).map((_, index) => <Card key={index}>
            <div style={{
        height: 96
      }}>
              <VisuallyHidden>
                Контент для вашей карточки (визуальный компонент-обертка)
              </VisuallyHidden>
            </div>
          </Card>)}
    </CardGrid>
  </Group>`,...w.parameters?.docs?.source}}},T=[`Playground`,`InsideGroup`]}));export{C as n,E as r,b as t};