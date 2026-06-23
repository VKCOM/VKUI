import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-a45N5K9M.js";import{t as i}from"./jsx-runtime-BqsN2jGA.js";import{D as a,V as o,n as s,q as c}from"./dist-Ddx9HyIL.js";import{Mt as l,Nt as u,jt as d}from"./iframe-CsHaVY-5.js";import{n as f,t as p}from"./Group-LwNPJiLD.js";import{n as m,t as h}from"./List-BsGWDSKo.js";import{n as g,t as _}from"./Cell-C4gdPLZP.js";import{i as v,n as y,t as b}from"./constants-cjed6ZWB.js";import{n as x,t as S}from"./createStoryParameters-CMHckkzt.js";var C=e({Playground:()=>D,__namedExportsOrder:()=>O,default:()=>E}),w,T,E,D,O,k=t((()=>{w=n(r(),1),s(),d(),v(),x(),g(),f(),m(),T=n(i(),1),E={title:`Buttons/Cell/List`,component:h,parameters:S(`List`,b,y)},D=({items:e,...t})=>{let[n,r]=w.useState(e),i=({from:e,to:t})=>{let i=[...n];i.splice(e,1),i.splice(t,0,n[e]),r(i)};return(0,T.jsx)(p,{children:(0,T.jsx)(h,{...t,children:n.map(e=>(0,T.jsx)(_,{before:e.before,draggable:!0,onDragFinish:i,children:e.title},e.title))})})},D.args={items:[{before:(0,T.jsx)(a,{}),title:`Учетная запись`},{before:(0,T.jsx)(o,{}),title:`Основные`},{before:(0,T.jsx)(c,{}),title:`Приватность`}]},D.decorators=[l,u],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
  items,
  ...args
}: ListStoryProps) => {
  const [draggingList, updateDraggingList] = React.useState(items);
  const onDragFinish = ({
    from,
    to
  }: {
    from: number;
    to: number;
  }) => {
    const _list = [...draggingList];
    _list.splice(from, 1);
    _list.splice(to, 0, draggingList[from]);
    updateDraggingList(_list);
  };
  return <Group>
      <List {...args}>
        {draggingList.map(item => <Cell key={item.title} before={item.before} draggable onDragFinish={onDragFinish}>
            {item.title}
          </Cell>)}
      </List>
    </Group>;
}`,...D.parameters?.docs?.source}}},O=[`Playground`]}));export{D as n,k as r,C as t};