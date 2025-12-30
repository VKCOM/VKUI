import{j as t,w as c,b as u,r as d}from"./iframe-D-vjmezP.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-D2NiT4dU.js";import{G as h}from"./Group-knjA_28m.js";import{L as a}from"./List-DSA99M7r.js";import{I}from"./user_outline_28-DXCeKL-p.js";import{I as y}from"./settings_outline_28-DvQlLXQg.js";import{I as C}from"./privacy_outline_28-B6rHbQzC.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-Db8Ui--t.js";import"./children-DmJGU09q.js";import"./IconButton-DrzcArVi.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./useConfigDirection-BUJREPxm.js";import"./cancel_24-B55ygFBW.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CsYR4Aza.js";import"./Footnote-DApQXU2r.js";import"./Headline-Dq88a-b4.js";import"./Subhead-DCgRz-zo.js";import"./chevron_compact_right_24-qWPDpI7y.js";import"./chevron_16-Bb1SKLei.js";import"./AdaptiveIconRenderer-CKo_rySp.js";import"./reorder_ios_24-gO4PPlxx.js";import"./check_box_on_24-CgV3p_bd.js";import"./check_circle_on_24-Xof2lI9f.js";import"./constants-CtEIZ0Vq.js";const st={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
