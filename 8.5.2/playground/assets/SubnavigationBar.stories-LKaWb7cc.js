import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,yn as i}from"./dist-ffVrjb4g.js";import{At as a,Mt as o,jt as s}from"./iframe-kY6v1YfM.js";import{i as c,n as l,t as u}from"./constants-BWBR8eWE.js";import{n as d,t as f}from"./createStoryParameters-D_aKMzVl.js";import{n as p,t as m}from"./Group-BYaqcOTu.js";import{n as h,t as g}from"./Counter-QeQe1wgH.js";import{n as _,t as v}from"./SubnavigationButton-CQ9D0-uz.js";import{n as y,t as b}from"./SubnavigationBar-_MeB5Npu.js";var x=t({Playground:()=>w,__namedExportsOrder:()=>T,default:()=>C}),S,C,w,T;function E(){return(E=e((()=>{r(),a(),c(),d(),h(),p(),_(),y(),S=n(),C={title:`Navigation/SubnavigationBar`,component:b,parameters:f(`SubnavigationBar`,u,l),argTypes:{selected:{control:`select`,options:[`size`,`favorite`,`filters`]}},tags:[`Навигация`]},w=e=>{let t=e.selected;return(0,S.jsx)(m,{children:(0,S.jsxs)(b,{...e,children:[(0,S.jsx)(v,{selected:t===`size`,children:`Размер`}),(0,S.jsx)(v,{before:(0,S.jsx)(i,{}),selected:t===`favorite`,children:`Избранное`}),(0,S.jsx)(v,{after:(0,S.jsx)(g,{size:`s`,children:`3`}),selected:t===`filters`,children:`Фильтры`})]})})},w.args={selected:`size`},w.decorators=[s,o],T=[`Playground`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(args: StorySubnavigationBarProps) => {
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
}`,...w.parameters?.docs?.source}}}})))()}export{x as n,E as r,w as t};