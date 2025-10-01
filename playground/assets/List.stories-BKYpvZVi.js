import{j as t,w as c,b as u,r as d}from"./iframe-DJZLDe2v.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-CebbIM9i.js";import{G as h}from"./Group-ZTDDYGb3.js";import{L as a}from"./List-B8UFeZCX.js";import{I}from"./user_outline_28-C1x_CV24.js";import{I as y}from"./settings_outline_28-CY3bt6hH.js";import{I as C}from"./privacy_outline_28-Cqd-WQlD.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-q5QE-8nA.js";import"./children-Dhk2DcjP.js";import"./IconButton-CMOFK_Ua.js";import"./Tappable-CY0nsltg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DJi6sM1Y.js";import"./useFocusVisible-B_h8gO-N.js";import"./useFocusVisibleClassName-CRC2ipiX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CYWMeBJ6.js";import"./VisuallyHidden-D0jMNSCO.js";import"./useConfigDirection-Codxpgcm.js";import"./useGlobalEventListener-BxOtw4jo.js";import"./useEventListener-Ghw_nxPQ.js";import"./cancel_24-rN7d2YWh.js";import"./SvgIconRootV2-DyTPJ3EC.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DyfECqPx.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-D8Ch1fTG.js";import"./Headline-BcxcoLKm.js";import"./Subhead-DeeiPlYW.js";import"./chevron_compact_right_24-BQ1Pic7C.js";import"./chevron_16-Dn3k9T89.js";import"./AdaptiveIconRenderer-B5fGDjcg.js";import"./reorder_ios_24-C-lGXIMb.js";import"./check_box_on_24-BYmefbAu.js";import"./check_circle_on_24-CqRyHPBP.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
