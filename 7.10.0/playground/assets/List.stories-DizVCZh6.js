import{j as t,w as c,b as u,r as d}from"./iframe-CdM-7Hfu.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-Cgd_OY4C.js";import{G as h}from"./Group-c52jERCh.js";import{L as a}from"./List-CXHmjQIR.js";import{I}from"./user_outline_28-COQjU6vi.js";import{I as y}from"./settings_outline_28-ByAYsxxK.js";import{I as C}from"./privacy_outline_28-DsEkCEVa.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-Dspz5xzQ.js";import"./children-CDGrqL8f.js";import"./IconButton-CDyvGU-p.js";import"./Tappable-DK6ahodC.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B55EaeOQ.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BMsEEBIJ.js";import"./VisuallyHidden-DydpD7lG.js";import"./useConfigDirection-BPbTAtL3.js";import"./useGlobalEventListener-BRj5_zmB.js";import"./useEventListener-qAbsiM6S.js";import"./cancel_24-CxY6nUNi.js";import"./SvgIconRootV2-uNBcUV_S.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DKZAY0dR.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-NEMh_4A6.js";import"./Headline-CJlcsWlt.js";import"./Subhead-BqjD9mjg.js";import"./chevron_compact_right_24-DAtZN61J.js";import"./chevron_16-DFcNvUVK.js";import"./AdaptiveIconRenderer-0K7qOuZd.js";import"./reorder_ios_24-BCpMSmYI.js";import"./check_box_on_24-66Pb9T_w.js";import"./check_circle_on_24-UT35uVdv.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
