import{j as t,w as c,b as u,r as d}from"./iframe-BdXaAE5r.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-uDuhQw0X.js";import{G as h}from"./Group-D1elF4gT.js";import{L as a}from"./List-Cf6CT1Sm.js";import{I}from"./user_outline_28-DbnJgJeX.js";import{I as y}from"./settings_outline_28-1AFw2Niw.js";import{I as C}from"./privacy_outline_28-CNAGeFxq.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CjePy1wL.js";import"./children-l5OU2f11.js";import"./IconButton-CXgqouLn.js";import"./Tappable-DfpzQKhB.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0nFsuW3k.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils--HRLtXJo.js";import"./VisuallyHidden-DcQJc2es.js";import"./useConfigDirection-B4zlYhYT.js";import"./useGlobalEventListener-BXli_s0F.js";import"./useEventListener-C9KDACQG.js";import"./cancel_24-Cel532NE.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-D4GN_-pL.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ByXPLsYQ.js";import"./Headline-DW4C0RJJ.js";import"./Subhead-CM9E3HB6.js";import"./chevron_compact_right_24-DXvgvWyE.js";import"./chevron_16-CxZx8l_q.js";import"./AdaptiveIconRenderer-xeHgus70.js";import"./reorder_ios_24-BEN6KGLx.js";import"./check_box_on_24-BX5u79Qr.js";import"./check_circle_on_24-B4zt7gl-.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
