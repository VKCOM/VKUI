import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-CRMqfscQ.js";import{dt as n,n as r}from"./dist-BOHPH9lW.js";import{i,n as a,r as o}from"./iframe-CMWvQvt2.js";import{n as s,t as c}from"./Group-DLQ4QDyF.js";import{n as l,t as u}from"./Counter-BBP1vP2B.js";import{n as d,t as f}from"./SubnavigationBar-ClHA6vd9.js";import{n as p,t as m}from"./SubnavigationButton-BvPRlFIF.js";import{i as h,n as g,t as _}from"./constants-BYo4AJCv.js";import{n as v,t as y}from"./createStoryParameters-Dbf8epgV.js";import{n as b,t as x}from"./useCustomArgs-DQKmcsGU.js";import{a as S,n as C,r as w,t as T}from"./SubnavigationButton.stories-DBrM_CzE.js";var E,D,O,k,A=e((()=>{r(),a(),h(),v(),x(),l(),s(),p(),S(),d(),E=t(),D={title:`Navigation/SubnavigationBar`,component:f,parameters:y(`SubnavigationBar`,_,g),argTypes:{selected:{control:`select`,options:[`size`,`favorite`,`filters`]}},tags:[`Навигация`]},O={render:function({selected:e,...t}){let[,r]=b();return(0,E.jsxs)(f,{...t,children:[(0,E.jsx)(m,{...T.args,selected:e===`size`,onClick:()=>r({selected:`size`})}),(0,E.jsx)(m,{...w.args,before:(0,E.jsx)(n,{}),selected:e===`favorite`,onClick:()=>r({selected:`favorite`})}),(0,E.jsx)(m,{...C.args,after:(0,E.jsx)(u,{size:`s`,children:`3`}),selected:e===`filters`,onClick:()=>r({selected:`filters`})})]})},args:{selected:`size`},decorators:[(e,t)=>(0,E.jsx)(c,{children:(0,E.jsx)(e,{...t.args})}),o,i]},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render({
    selected,
    ...args
  }) {
    const [, updateArg] = useCustomArgs();
    return <SubnavigationBar {...args}>
        <SubnavigationButton {...BasicSubnavigationButtonStory.args} selected={selected === 'size'} onClick={() => updateArg({
        selected: 'size'
      })} />
        <SubnavigationButton {...IconSubnavigationButtonStory.args} before={<Icon24FavoriteOutline />} selected={selected === 'favorite'} onClick={() => updateArg({
        selected: 'favorite'
      })} />
        <SubnavigationButton {...CounterSubnavigationButtonStory.args} after={<Counter size="s">3</Counter>} selected={selected === 'filters'} onClick={() => updateArg({
        selected: 'filters'
      })} />
      </SubnavigationBar>;
  },
  args: {
    selected: 'size'
  },
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, withSinglePanel, withVKUILayout]
}`,...O.parameters?.docs?.source}}},k=[`Playground`]}));export{D as i,k as n,A as r,O as t};