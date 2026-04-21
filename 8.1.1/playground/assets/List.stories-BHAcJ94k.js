import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{S as i,T as a,h as o,n as s}from"./dist-JE-Gteso.js";import{n as c,r as l,t as u}from"./VKUIDecorators-BYQp_QSp.js";import{n as d,t as f}from"./Group-iqbU7m06.js";import{n as p,t as m}from"./List-BmiAJYoy.js";import{n as h,t as g}from"./Cell-Ch2blc8F.js";import{i as _,n as v,t as y}from"./constants-Dj6vOzIh.js";import{n as b,t as x}from"./createStoryParameters-pz1UrWMe.js";var S,C,w,T,E,D=t((()=>{S=e(n(),1),s(),u(),_(),b(),h(),d(),p(),C=r(),w={title:`Buttons/Cell/List`,component:m,parameters:x(`List`,y,v)},T={render:function({items:e,...t}){let[n,r]=S.useState(e),i=({from:e,to:t})=>{let i=[...n];i.splice(e,1),i.splice(t,0,n[e]),r(i)};return(0,C.jsx)(m,{...t,children:n.map(e=>(0,C.jsx)(g,{before:e.before,draggable:!0,onDragFinish:i,children:e.title},e.title))})},args:{items:[{before:(0,C.jsx)(o,{}),title:`Учетная запись`},{before:(0,C.jsx)(i,{}),title:`Основные`},{before:(0,C.jsx)(a,{}),title:`Приватность`}]},decorators:[(e,t)=>(0,C.jsx)(f,{children:(0,C.jsx)(e,{...t.args})}),c,l]},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Playground`]}));export{w as i,E as n,D as r,T as t};