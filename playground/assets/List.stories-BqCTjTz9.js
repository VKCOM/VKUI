import{j as t,w as c,b as u,r as d}from"./iframe-KtxhC7Vu.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-CUXYg48g.js";import{G as h}from"./Group-DDfvL9p6.js";import{L as a}from"./List-CBBNDgWX.js";import{I}from"./user_outline_28-J_ZUFvv3.js";import{I as y}from"./settings_outline_28-OSVaXR-H.js";import{I as C}from"./privacy_outline_28-CQem6-ev.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CpxKd1Q1.js";import"./children-BMwCSNmp.js";import"./IconButton-DubnwX4y.js";import"./Tappable-BHKu77gD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zoSQNYwS.js";import"./useState-D1V9wQJY.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./InputUtils-BueJ8J_Y.js";import"./VisuallyHidden-8TqRJKxj.js";import"./useConfigDirection-CX53j0Ve.js";import"./useGlobalEventListener-CospsVY6.js";import"./useEventListener-DNTY0hjA.js";import"./cancel_24-B2bpUHqP.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-D5ovT9LX.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-lwK0vUsu.js";import"./Headline-DXbYuoNY.js";import"./Subhead-AWezZjK6.js";import"./chevron_compact_right_24-BiCeP8Qk.js";import"./chevron_16-DnFY0g9o.js";import"./AdaptiveIconRenderer-QcQ1TbWH.js";import"./reorder_ios_24-D-IURhsp.js";import"./check_box_on_24-8HdQZOQP.js";import"./check_circle_on_24-BWXad4v9.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const lt=["Playground"];export{i as Playground,lt as __namedExportsOrder,pt as default};
