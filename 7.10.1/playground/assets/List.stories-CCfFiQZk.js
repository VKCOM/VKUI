import{j as t,w as c,b as u,r as d}from"./iframe-DhuutAfC.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-CN0QgLTh.js";import{G as h}from"./Group-BZNrT2Zp.js";import{L as a}from"./List-auoUSjLG.js";import{I}from"./user_outline_28--6C-Wafb.js";import{I as y}from"./settings_outline_28-Lk4H22so.js";import{I as C}from"./privacy_outline_28-Bjijm0rw.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-WF0wvkrR.js";import"./children-f71tIclX.js";import"./IconButton-CS1h91J8.js";import"./Tappable-tvWVp5xX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./InputUtils-BcFat9xH.js";import"./VisuallyHidden-BkhWnsJf.js";import"./useConfigDirection-BKOpe2-3.js";import"./useGlobalEventListener-B3NjbVmX.js";import"./useEventListener-BINAhqZ-.js";import"./cancel_24-DOIBb5nA.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-Ik9ZceqB.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BE0sRU6f.js";import"./Headline-CY9tv16R.js";import"./Subhead-N3Y6Abab.js";import"./chevron_compact_right_24-e5As_rIW.js";import"./chevron_16-B8RroCu2.js";import"./AdaptiveIconRenderer-C_lOOdXP.js";import"./reorder_ios_24-5ExYPhZY.js";import"./check_box_on_24-DrP2BaSr.js";import"./check_circle_on_24-DIO2EvKW.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
