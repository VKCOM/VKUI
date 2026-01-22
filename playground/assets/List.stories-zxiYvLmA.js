import{j as t,w as c,b as u,r as d}from"./iframe-qlSEKL6e.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-CnqdBX5o.js";import{G as h}from"./Group-cIlrarQZ.js";import{L as a}from"./List-DcNAS45f.js";import{I}from"./user_outline_28-BpKr_xTN.js";import{I as y}from"./settings_outline_28-Cp2dslhO.js";import{I as C}from"./privacy_outline_28-ZGCqe6F7.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DOcraucr.js";import"./children-DNQ1k21b.js";import"./IconButton-BRmjKqzD.js";import"./Tappable-BHeAowlI.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D1c0nrMo.js";import"./useState-C_16qP2U.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BSdd-gmN.js";import"./InputUtils-vU1H8cid.js";import"./VisuallyHidden-Bk8azc-l.js";import"./useConfigDirection-DGAPn-Y-.js";import"./cancel_24-cnh7cOD_.js";import"./SvgIconRootV2-DNGE9nnc.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BaJRQNlP.js";import"./Footnote-BzLLEJCe.js";import"./Headline-CGptYocR.js";import"./Subhead-B_pgjgAK.js";import"./chevron_compact_right_24--z_9b7zM.js";import"./chevron_16-D16aHKlh.js";import"./AdaptiveIconRenderer-DHzGBzZV.js";import"./reorder_ios_24-Dy_QYZqO.js";import"./check_box_on_24-CDCz-Sz_.js";import"./check_circle_on_24-Cchrshrn.js";import"./constants-CtEIZ0Vq.js";const st={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
