import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-DlPsW1c0.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{D as a,V as o,n as s,q as c}from"./dist-ffVrjb4g.js";import{At as l,Mt as u,jt as d}from"./iframe-kY6v1YfM.js";import{i as f,n as p,t as m}from"./constants-BWBR8eWE.js";import{n as h,t as g}from"./createStoryParameters-D_aKMzVl.js";import{n as _,t as v}from"./Group-BYaqcOTu.js";import{n as y,t as b}from"./Cell-BcnlaGy0.js";import{n as x,t as S}from"./List-DiuHbMTA.js";var C=n({Playground:()=>D,__namedExportsOrder:()=>O,default:()=>E}),w,T,E,D,O;function k(){return(k=t((()=>{w=e(r(),1),s(),l(),f(),h(),y(),_(),x(),T=i(),E={title:`Buttons/Cell/List`,component:S,parameters:g(`List`,m,p)},D=({items:e,...t})=>{let[n,r]=w.useState(e),i=({from:e,to:t})=>{let i=[...n];i.splice(e,1),i.splice(t,0,n[e]),r(i)};return(0,T.jsx)(v,{children:(0,T.jsx)(S,{...t,children:n.map(e=>(0,T.jsx)(b,{before:e.before,draggable:!0,onDragFinish:i,children:e.title},e.title))})})},D.args={items:[{before:(0,T.jsx)(a,{}),title:`Учетная запись`},{before:(0,T.jsx)(o,{}),title:`Основные`},{before:(0,T.jsx)(c,{}),title:`Приватность`}]},D.decorators=[d,u],O=[`Playground`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
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
}`,...D.parameters?.docs?.source}}}})))()}export{D as n,k as r,C as t};