import{j as t,w as c,b as u,r as d}from"./iframe-CmkY54f5.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-DFHdhUIa.js";import{G as h}from"./Group-6J2U7NrK.js";import{L as a}from"./List-By_0DIbe.js";import{I}from"./user_outline_28-CzN3UFvG.js";import{I as y}from"./settings_outline_28-B3oKLMlC.js";import{I as C}from"./privacy_outline_28-CsWjk7tb.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-N-h_aW0x.js";import"./children-nFeoBYDx.js";import"./IconButton-hyZ4L0bk.js";import"./Tappable-DW-ilhli.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./InputUtils-UNO81DKX.js";import"./VisuallyHidden-Da3ud9kw.js";import"./useConfigDirection-Duqs0EiT.js";import"./useGlobalEventListener-D4VlZRSO.js";import"./useEventListener-CsQVQesK.js";import"./cancel_24-D5GJv2PT.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CINcSEmj.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dh1koNQe.js";import"./Headline-DsYeFntm.js";import"./Subhead-BS8ES9bw.js";import"./chevron_compact_right_24-CcDOCtXp.js";import"./chevron_16-CCLojpkC.js";import"./AdaptiveIconRenderer-DFYIDbB7.js";import"./reorder_ios_24-CwsIQqDe.js";import"./check_box_on_24-BBPM5bmg.js";import"./check_circle_on_24-C1CPyBlE.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
