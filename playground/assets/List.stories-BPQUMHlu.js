import{b as c,w as u,j as t,r as d}from"./iframe-OAvG3iJ-.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-DuZuXofC.js";import{G as h}from"./Group-DBjl1Ywq.js";import{L as a}from"./List-DUmivmqA.js";import{I}from"./user_outline_28-Bd8gtqko.js";import{I as y}from"./settings_outline_28-Yxy0cCCY.js";import{I as C}from"./privacy_outline_28-CXG21oJE.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-rqcSgsVP.js";import"./children-jmMlROp9.js";import"./IconButton-B0ADo2bb.js";import"./Tappable-hYlNxVzd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./InputUtils-D-RvHd2H.js";import"./VisuallyHidden-W5VCXPiv.js";import"./useConfigDirection-EOrqXudq.js";import"./cancel_24-CjsEvKIV.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DUlLPGhw.js";import"./Footnote-Fnz7EDP7.js";import"./Headline-7nMwixf1.js";import"./Subhead-Bec_-0uq.js";import"./chevron_compact_right_24-_NSNPn6R.js";import"./chevron_16-BS2dVy5C.js";import"./AdaptiveIconRenderer-Dg4c0pLA.js";import"./reorder_ios_24-DarQ-ukl.js";import"./check_box_on_24-BSVcQ9Iw.js";import"./check_circle_on_24-BdyPhlE2.js";import"./constants-CtEIZ0Vq.js";const st={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
