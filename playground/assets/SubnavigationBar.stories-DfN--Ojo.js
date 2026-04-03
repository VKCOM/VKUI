import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lr as n,On as r,i,n as a,r as o,yo as s}from"./iframe-DYi3TMGx.js";import{n as c,t as l}from"./Group-DXMPjBg1.js";import{n as u,t as d}from"./Counter-CnDGvYM2.js";import{n as f,t as p}from"./SubnavigationBar-B-DwcsRn.js";import{n as m,t as h}from"./SubnavigationButton-Pj_MgwQE.js";import{i as g,n as _,t as v}from"./constants-DdtDghDm.js";import{n as y,t as b}from"./createStoryParameters-cWWuDqBQ.js";import{n as x,t as S}from"./useCustomArgs-yGqPt3fG.js";import{a as C,i as w,r as T,t as E}from"./SubnavigationButton.stories-BqtjWnT9.js";var D=t({Playground:()=>A,__namedExportsOrder:()=>j,default:()=>k}),O,k,A,j,M=e((()=>{r(),a(),g(),y(),S(),u(),c(),m(),C(),f(),O=s(),k={title:`Navigation/SubnavigationBar`,component:p,parameters:b(`SubnavigationBar`,v,_),argTypes:{selected:{control:`select`,options:[`size`,`favorite`,`filters`]}},tags:[`Навигация`]},A={render:function({selected:e,...t}){let[,r]=x();return(0,O.jsxs)(p,{...t,children:[(0,O.jsx)(h,{...E.args,selected:e===`size`,onClick:()=>r({selected:`size`})}),(0,O.jsx)(h,{...w.args,before:(0,O.jsx)(n,{}),selected:e===`favorite`,onClick:()=>r({selected:`favorite`})}),(0,O.jsx)(h,{...T.args,after:(0,O.jsx)(d,{size:`s`,children:`3`}),selected:e===`filters`,onClick:()=>r({selected:`filters`})})]})},args:{selected:`size`},decorators:[(e,t)=>(0,O.jsx)(l,{children:(0,O.jsx)(e,{...t.args})}),o,i]},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Playground`]}));export{D as n,M as r,A as t};