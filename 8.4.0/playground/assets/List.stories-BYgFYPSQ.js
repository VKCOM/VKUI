import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-BZJXY1be.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{D as a,V as o,n as s,q as c}from"./dist-BrTYZxJF.js";import{At as l,Mt as u,jt as d}from"./iframe-33ykgUxE.js";import{n as f,t as p}from"./Group-Bp-h8t_O.js";import{n as m,t as h}from"./Cell-CJkDvTSg.js";import{n as g,t as _}from"./List-BTJrev8M.js";import{i as v,n as y,t as b}from"./constants-DBkyy3CT.js";import{n as x,t as S}from"./createStoryParameters-DBkK1CfQ.js";var C=n({Playground:()=>D,__namedExportsOrder:()=>O,default:()=>E}),w,T,E,D,O;function k(){return(k=t((()=>{w=e(r(),1),s(),l(),v(),x(),m(),f(),g(),T=i(),E={title:`Buttons/Cell/List`,component:_,parameters:S(`List`,b,y)},D=({items:e,...t})=>{let[n,r]=w.useState(e),i=({from:e,to:t})=>{let i=[...n];i.splice(e,1),i.splice(t,0,n[e]),r(i)};return(0,T.jsx)(p,{children:(0,T.jsx)(_,{...t,children:n.map(e=>(0,T.jsx)(h,{before:e.before,draggable:!0,onDragFinish:i,children:e.title},e.title))})})},D.args={items:[{before:(0,T.jsx)(a,{}),title:`Учетная запись`},{before:(0,T.jsx)(o,{}),title:`Основные`},{before:(0,T.jsx)(c,{}),title:`Приватность`}]},D.decorators=[d,u],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
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
}`,...D.parameters?.docs?.source}}},O=[`Playground`]})))()}export{D as n,k as r,C as t};