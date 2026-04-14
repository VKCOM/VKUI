import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{Jn as r,On as i,Vn as a,Zn as o,i as s,n as c,ps as l,r as u,yo as d}from"./iframe-lhb8_BzR.js";import{n as f,t as p}from"./Group-BJ5gURe8.js";import{n as m,t as h}from"./List-MtNwY5XQ.js";import{n as g,t as _}from"./Cell-CKCO5g_m.js";import{i as v,n as y,t as b}from"./constants-CXYaXe_q.js";import{n as x,t as S}from"./createStoryParameters-CbXzS3a6.js";var C=n({Playground:()=>D,__namedExportsOrder:()=>O,default:()=>E}),w,T,E,D,O,k=t((()=>{w=e(l(),1),i(),c(),v(),x(),g(),f(),m(),T=d(),E={title:`Buttons/Cell/List`,component:h,parameters:S(`List`,b,y)},D={render:function({items:e,...t}){let[n,r]=w.useState(e),i=({from:e,to:t})=>{let i=[...n];i.splice(e,1),i.splice(t,0,n[e]),r(i)};return(0,T.jsx)(h,{...t,children:n.map(e=>(0,T.jsx)(_,{before:e.before,draggable:!0,onDragFinish:i,children:e.title},e.title))})},args:{items:[{before:(0,T.jsx)(a,{}),title:`Учетная запись`},{before:(0,T.jsx)(r,{}),title:`Основные`},{before:(0,T.jsx)(o,{}),title:`Приватность`}]},decorators:[(e,t)=>(0,T.jsx)(p,{children:(0,T.jsx)(e,{...t.args})}),u,s]},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render({
    items,
    ...args
  }) {
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
    return <List {...args}>
        {draggingList.map(item => <Cell key={item.title} before={item.before} draggable onDragFinish={onDragFinish}>
            {item.title}
          </Cell>)}
      </List>;
  },
  args: {
    items: [{
      before: <Icon28UserOutline />,
      title: 'Учетная запись'
    }, {
      before: <Icon28SettingsOutline />,
      title: 'Основные'
    }, {
      before: <Icon28PrivacyOutline />,
      title: 'Приватность'
    }]
  },
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, withSinglePanel, withVKUILayout]
}`,...D.parameters?.docs?.source}}},O=[`Playground`]}));export{D as n,k as r,C as t};