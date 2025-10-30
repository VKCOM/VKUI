import{j as t,w as c,b as u,r as d}from"./iframe-CjlHPZNU.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-DlH0uhGu.js";import{G as h}from"./Group-Bb5VOzgg.js";import{L as a}from"./List-8I4JXdiH.js";import{I}from"./user_outline_28-BgGBWVcZ.js";import{I as y}from"./settings_outline_28---3C1Ws7.js";import{I as C}from"./privacy_outline_28-DjpRduq5.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-8x1bU61T.js";import"./children-DXLPnz61.js";import"./IconButton-DL_Qecp_.js";import"./Tappable-B5zgJODm.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CtpofEGa.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DGnaA_Jg.js";import"./VisuallyHidden-BhHQTREx.js";import"./useConfigDirection-CtCMtXRC.js";import"./useGlobalEventListener-B-Bh84II.js";import"./useEventListener-B0Sz5sam.js";import"./cancel_24-DoQTGG5W.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-B9ylNtQr.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-OilvUFbZ.js";import"./Headline-5QXk0_9F.js";import"./Subhead-LlQLYw53.js";import"./chevron_compact_right_24-D4IlNfKx.js";import"./chevron_16-CdgPvfwT.js";import"./AdaptiveIconRenderer-Bf6_Ojz6.js";import"./reorder_ios_24-Bsdplb-r.js";import"./check_box_on_24-DQrHUw8r.js";import"./check_circle_on_24-DDCkNJvr.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
