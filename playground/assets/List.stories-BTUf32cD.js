import{j as t,w as c,b as u,r as d}from"./iframe-C4ttrVUJ.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-Cp71uhqk.js";import{G as h}from"./Group-CRpAXhsk.js";import{L as a}from"./List-BgIQJAZi.js";import{I}from"./user_outline_28-K1uJTPeh.js";import{I as y}from"./settings_outline_28-B5GiXpvl.js";import{I as C}from"./privacy_outline_28-BKlJYJ-J.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-tI4hkoIu.js";import"./children-DylyViM5.js";import"./IconButton-B4UJc4kp.js";import"./Tappable-CL0fK4DO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B80alsah.js";import"./useState-DqLBjAbD.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./InputUtils-CD1Rp_t7.js";import"./VisuallyHidden-XgvirjGY.js";import"./useConfigDirection-DvmYVNBa.js";import"./useGlobalEventListener-2nmt2YdY.js";import"./useEventListener-BQB6QAnN.js";import"./cancel_24-DD0i1EtC.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BhfeHX5L.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-D7DVMFfP.js";import"./Headline-B3vZWFvi.js";import"./Subhead-ChzeQqTJ.js";import"./chevron_compact_right_24-DG2tnjTt.js";import"./chevron_16-CHg4wDrn.js";import"./AdaptiveIconRenderer-DYHxirpm.js";import"./reorder_ios_24-Beh1KLTa.js";import"./check_box_on_24-CrCnysAK.js";import"./check_circle_on_24-BEYLR_Vs.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
