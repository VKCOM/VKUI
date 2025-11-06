import{j as t,w as c,b as u,r as d}from"./iframe-DcUCz3Gq.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-DMi1jj6D.js";import{G as h}from"./Group-qWIgZiP3.js";import{L as a}from"./List-CFv5gBTd.js";import{I}from"./user_outline_28-DcLQ6LMO.js";import{I as y}from"./settings_outline_28-C10jzg96.js";import{I as C}from"./privacy_outline_28-BGzMIePV.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-Bl3ntWOu.js";import"./children-DDwVHqk6.js";import"./IconButton-CGiS95Aa.js";import"./Tappable-CGnYgxpx.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dt7ctke5.js";import"./VisuallyHidden-IsgabQ9w.js";import"./useConfigDirection-BglQDqbm.js";import"./useGlobalEventListener-JEtPNfzN.js";import"./useEventListener-D25pA6Ua.js";import"./cancel_24-DyhNO7vT.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-D963dulm.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-lAEBSvha.js";import"./Headline-_bBT78y6.js";import"./Subhead-CcORohtB.js";import"./chevron_compact_right_24-C6YK1MYa.js";import"./chevron_16-BE6lGA5Q.js";import"./AdaptiveIconRenderer-D8fi58IV.js";import"./reorder_ios_24-B8zIQhue.js";import"./check_box_on_24-CBAEM01i.js";import"./check_circle_on_24-UsLiUqKd.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
