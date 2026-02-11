import{j as t,w as c,b as u,r as d}from"./iframe-DIYy3-CH.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-CLUedPlD.js";import{G as h}from"./Group-DWQl9gu3.js";import{L as a}from"./List-rUP9hieg.js";import{I}from"./user_outline_28-C5lBRe-C.js";import{I as y}from"./settings_outline_28-BXAlAAaf.js";import{I as C}from"./privacy_outline_28-DQe438UQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CEZaH-IR.js";import"./children-BgxIS89X.js";import"./IconButton-DhekZgUs.js";import"./Tappable-sYAEqFlc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BAIHKsz8.js";import"./useState-p4Iaaoae.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DBCai8uF.js";import"./InputUtils-MuCAFNzU.js";import"./VisuallyHidden-B6N7VZPM.js";import"./useConfigDirection-5JvPOI0y.js";import"./useGlobalEventListener-CiGQPE82.js";import"./useEventListener-By1FPFXl.js";import"./cancel_24-BLCbiPJn.js";import"./SvgIconRootV2-DBT-DabK.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DX9ZWYs4.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CRCyeFbn.js";import"./Headline-BoZGv-xv.js";import"./Subhead-CZ6Imw4B.js";import"./chevron_compact_right_24-FrB_a812.js";import"./chevron_16-CyTHsyh4.js";import"./AdaptiveIconRenderer-BY2ynJbv.js";import"./reorder_ios_24-C5u_Xhhd.js";import"./check_box_on_24-CWnfDqTp.js";import"./check_circle_on_24-B5f_vVfh.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
