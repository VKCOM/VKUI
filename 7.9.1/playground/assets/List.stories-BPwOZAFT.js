import{j as t,w as c,b as u,r as d}from"./iframe-DC59t_7s.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-D1-zqLEr.js";import{G as h}from"./Group-BjjfSX7O.js";import{L as a}from"./List-Ccw7bx-r.js";import{I}from"./user_outline_28-BRn-sl_Y.js";import{I as y}from"./settings_outline_28-CZBnngC0.js";import{I as C}from"./privacy_outline_28-nDgvguQo.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-qNhpNz2M.js";import"./children-DYOU-AGd.js";import"./IconButton-DlcUkq3s.js";import"./Tappable-CRrpYa-n.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-k0omQ8uW.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C5RWily7.js";import"./VisuallyHidden-dUOLTySp.js";import"./useConfigDirection-6hDi4KID.js";import"./useGlobalEventListener-C_qxnlQL.js";import"./useEventListener-D94pK2uE.js";import"./cancel_24-pw3fX9Xb.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BLFw8LVq.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-B_mvNSI1.js";import"./Headline-bNrKkYhC.js";import"./Subhead-CcQWHNvG.js";import"./chevron_compact_right_24-oTms1QP_.js";import"./chevron_16-DtWL8gcK.js";import"./AdaptiveIconRenderer-DnHspDix.js";import"./reorder_ios_24-D9YjfHpX.js";import"./check_box_on_24-B4x-cDuo.js";import"./check_circle_on_24-QLmxxhyq.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
