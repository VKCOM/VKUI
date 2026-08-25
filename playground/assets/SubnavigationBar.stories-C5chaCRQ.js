import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,yn as i}from"./dist-BrTYZxJF.js";import{At as a,Mt as o,jt as s}from"./iframe-33ykgUxE.js";import{n as c,t as l}from"./Group-Bp-h8t_O.js";import{n as u,t as d}from"./Counter-CIF6WVn6.js";import{n as f,t as p}from"./SubnavigationBar-LRf2kD6g.js";import{n as m,t as h}from"./SubnavigationButton-DH9HeSYn.js";import{i as g,n as _,t as v}from"./constants-DBkyy3CT.js";import{n as y,t as b}from"./createStoryParameters-DBkK1CfQ.js";var x=t({Playground:()=>w,__namedExportsOrder:()=>T,default:()=>C}),S,C,w,T;function E(){return(E=e((()=>{r(),a(),g(),y(),u(),c(),m(),f(),S=n(),C={title:`Navigation/SubnavigationBar`,component:p,parameters:b(`SubnavigationBar`,v,_),argTypes:{selected:{control:`select`,options:[`size`,`favorite`,`filters`]}},tags:[`Навигация`]},w=e=>{let t=e.selected;return(0,S.jsx)(l,{children:(0,S.jsxs)(p,{...e,children:[(0,S.jsx)(h,{selected:t===`size`,children:`Размер`}),(0,S.jsx)(h,{before:(0,S.jsx)(i,{}),selected:t===`favorite`,children:`Избранное`}),(0,S.jsx)(h,{after:(0,S.jsx)(d,{size:`s`,children:`3`}),selected:t===`filters`,children:`Фильтры`})]})})},w.args={selected:`size`},w.decorators=[s,o],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(args: StorySubnavigationBarProps) => {
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
}`,...w.parameters?.docs?.source}}},T=[`Playground`]})))()}export{x as n,E as r,w as t};