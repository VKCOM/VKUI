import{j as t,w as c,b as u,r as d}from"./iframe-DxxZLxeI.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-C9lzdJDz.js";import{G as h}from"./Group-DDJytldN.js";import{L as a}from"./List-Be7Sut7a.js";import{I}from"./user_outline_28-CukHuPaA.js";import{I as y}from"./settings_outline_28-BuGv2HYB.js";import{I as C}from"./privacy_outline_28-D2f2zmWc.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DPTeUPkV.js";import"./children-CeKSHNky.js";import"./IconButton-CgpvmjLz.js";import"./Tappable-C82LyDNp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-iBjUcv74.js";import"./useState-CSsh5GFH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./InputUtils-CuOtTanw.js";import"./VisuallyHidden-DujZCwJ6.js";import"./useConfigDirection-Cl-SHqVT.js";import"./useGlobalEventListener-BlIjoW0G.js";import"./useEventListener-DLWBolfY.js";import"./cancel_24-BuXDWULC.js";import"./SvgIconRootV2-BBTF5ye2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-Dd4jE0le.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-C3-8h3B5.js";import"./Headline-WANZoqA8.js";import"./Subhead-BP7ZzX_Z.js";import"./chevron_compact_right_24-nPyqWDNh.js";import"./chevron_16-CGve78DZ.js";import"./AdaptiveIconRenderer-3rDf-OfV.js";import"./reorder_ios_24-Co8695lz.js";import"./check_box_on_24-DfMQbV1N.js";import"./check_circle_on_24-ulkn_pXb.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
