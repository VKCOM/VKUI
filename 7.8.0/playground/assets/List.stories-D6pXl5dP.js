import{j as t,w as c,b as u,r as d}from"./iframe-F_0bvJrc.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-Ch7_0cLP.js";import{G as h}from"./Group-DWRY0NV1.js";import{L as a}from"./List-BVUDW2NY.js";import{I}from"./user_outline_28-OTXZx1Fx.js";import{I as y}from"./settings_outline_28-C00W6rp5.js";import{I as C}from"./privacy_outline_28-CshbImN5.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CQf4vu_q.js";import"./children-CfV6Kr3n.js";import"./IconButton-BHFFi_8a.js";import"./Tappable-DJ3rCQkY.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B4aTO_qb.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CneTbOko.js";import"./VisuallyHidden-CRrL_L2y.js";import"./useConfigDirection-poWhsvcV.js";import"./useGlobalEventListener-Y3RIl-_k.js";import"./useEventListener-DlnjWBsX.js";import"./cancel_24-CEwNt985.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DW3d0xtM.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DfPFidfa.js";import"./Headline-B-xJiW6B.js";import"./Subhead-CtWFTcAD.js";import"./chevron_compact_right_24-CTggJSQ-.js";import"./chevron_16--5zekb9K.js";import"./AdaptiveIconRenderer-B_n2KyC-.js";import"./reorder_ios_24-GAWcheSo.js";import"./check_box_on_24-B9qcgNo6.js";import"./check_circle_on_24-DOlEs5el.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
