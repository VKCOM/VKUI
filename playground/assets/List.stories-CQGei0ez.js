import{j as t,w as c,b as u,r as d}from"./iframe-ChnjXsIu.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-3-gm7wf4.js";import{G as h}from"./Group-CYWOltlY.js";import{L as a}from"./List-Dw2cxzpZ.js";import{I}from"./user_outline_28-FYopKbmt.js";import{I as y}from"./settings_outline_28-C95KJZkS.js";import{I as C}from"./privacy_outline_28-CmaWLfh2.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DWZ-UCU_.js";import"./children-CZfmS9px.js";import"./IconButton-DcISWAYH.js";import"./Tappable-BDf7UE95.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zj2UWImj.js";import"./useState-ZDhvxYGh.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-n-WG2EJN.js";import"./InputUtils-D67zZ2HF.js";import"./VisuallyHidden-C0GQz0ke.js";import"./useConfigDirection-Cu4tNejP.js";import"./useGlobalEventListener-D4SgjmKz.js";import"./useEventListener-BRTI2b5J.js";import"./cancel_24-Du4R4GHJ.js";import"./SvgIconRootV2-DXKzfcIX.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-Crqp4U-W.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-a8vRHGoF.js";import"./Headline-jnvlDnhz.js";import"./Subhead-4jBJxz3c.js";import"./chevron_compact_right_24-BmFJ2T-y.js";import"./chevron_16-BBzBgMAq.js";import"./AdaptiveIconRenderer-BsUJOOVb.js";import"./reorder_ios_24-BEsdD0Oy.js";import"./check_box_on_24-DmnzlGW9.js";import"./check_circle_on_24-DYFQbA8z.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
