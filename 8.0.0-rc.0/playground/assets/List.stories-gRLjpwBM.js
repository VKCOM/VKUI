import{j as t,w as c,b as u,r as d}from"./iframe-CWLi0Dwx.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-BaKeF3zh.js";import{G as h}from"./Group-vgwGhKNH.js";import{L as a}from"./List-C5-P6zxF.js";import{I}from"./user_outline_28-BPlt0ykA.js";import{I as y}from"./settings_outline_28-CSczw9OG.js";import{I as C}from"./privacy_outline_28-CeIzePjK.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DbtKpkoR.js";import"./children-o7IWS_m7.js";import"./IconButton-DltQDU2z.js";import"./Tappable-BfbUNvge.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-qvNFYhPA.js";import"./useState-B6GpLt4z.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C_mTcJQY.js";import"./InputUtils-y46vV6Lq.js";import"./VisuallyHidden-DcnlEFVn.js";import"./useConfigDirection-EPKxpKX2.js";import"./cancel_24-k8gLLgTE.js";import"./SvgIconRootV2-BTF9teUl.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DMUbLJWk.js";import"./Footnote-uuGEAWzo.js";import"./Headline-BBfhp0Vp.js";import"./Subhead-BNTLgiWX.js";import"./chevron_compact_right_24-Dab3JeUv.js";import"./chevron_16-SZNMdhZS.js";import"./AdaptiveIconRenderer-hRcm_dd1.js";import"./reorder_ios_24-hj8b2gpk.js";import"./check_box_on_24-UkSxJzoK.js";import"./check_circle_on_24-CeocUogp.js";import"./constants-CtEIZ0Vq.js";const st={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const at=["Playground"];export{e as Playground,at as __namedExportsOrder,st as default};
