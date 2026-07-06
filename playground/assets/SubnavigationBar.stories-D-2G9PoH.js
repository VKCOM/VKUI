import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{n as i,yn as a}from"./dist-Ddx9HyIL.js";import{Mt as o,Nt as s,jt as c}from"./iframe-CgMGh-8q.js";import{n as l,t as u}from"./Group-LwNPJiLD.js";import{n as d,t as f}from"./Counter-kIq69qM_.js";import{n as p,t as m}from"./SubnavigationBar-BwVh7zzP.js";import{n as h,t as g}from"./SubnavigationButton-BUeUe6KB.js";import{i as _,n as v,t as y}from"./constants-cjed6ZWB.js";import{n as b,t as x}from"./createStoryParameters-CMHckkzt.js";var S=e({Playground:()=>T,__namedExportsOrder:()=>E,default:()=>w}),C,w,T,E,D=t((()=>{i(),c(),_(),b(),d(),l(),h(),p(),C=n(r(),1),w={title:`Navigation/SubnavigationBar`,component:m,parameters:x(`SubnavigationBar`,y,v),argTypes:{selected:{control:`select`,options:[`size`,`favorite`,`filters`]}},tags:[`Навигация`]},T=e=>{let t=e.selected;return(0,C.jsx)(u,{children:(0,C.jsxs)(m,{...e,children:[(0,C.jsx)(g,{selected:t===`size`,children:`Размер`}),(0,C.jsx)(g,{before:(0,C.jsx)(a,{}),selected:t===`favorite`,children:`Избранное`}),(0,C.jsx)(g,{after:(0,C.jsx)(f,{size:`s`,children:`3`}),selected:t===`filters`,children:`Фильтры`})]})})},T.args={selected:`size`},T.decorators=[o,s],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args: StorySubnavigationBarProps) => {
  const selected = args.selected;
  return <Group>
      <SubnavigationBar {...args}>
        <SubnavigationButton selected={selected === 'size'}>Размер</SubnavigationButton>
        <SubnavigationButton before={<Icon24FavoriteOutline />} selected={selected === 'favorite'}>
          Избранное
        </SubnavigationButton>
        <SubnavigationButton after={<Counter size="s">3</Counter>} selected={selected === 'filters'}>
          Фильтры
        </SubnavigationButton>
      </SubnavigationBar>
    </Group>;
}`,...T.parameters?.docs?.source}}},E=[`Playground`]}));export{S as n,D as r,T as t};