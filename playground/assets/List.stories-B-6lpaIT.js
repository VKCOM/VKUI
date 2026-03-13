import{b as c,w as u,j as t,r as d}from"./iframe-CEhhJuIi.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-Fksr_7Qm.js";import{G as h}from"./Group-B7hVT_g-.js";import{L as a}from"./List-Bc-UpJbZ.js";import{I}from"./user_outline_28-Dkw3Tpuy.js";import{I as y}from"./settings_outline_28--__Ytq4-.js";import{I as C}from"./privacy_outline_28-Ax5X5cj6.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-BCfQmLaJ.js";import"./children-fYKiCF6j.js";import"./IconButton-D0BsKVg5.js";import"./Tappable-CTSOdpDd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSDkuBjh.js";import"./useState-BlpMLPZb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./InputUtils-CN8Bpeve.js";import"./VisuallyHidden-BYulTkKK.js";import"./useConfigDirection-K0H5l3FT.js";import"./cancel_24-CHfH8s1a.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CJqdGzsk.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-wldoNL-p.js";import"./Headline-C97-pQ4K.js";import"./Subhead-4zP8hIFm.js";import"./chevron_compact_right_24-DmTjrohB.js";import"./chevron_16-CMhnb1X0.js";import"./AdaptiveIconRenderer-B1bnvO5R.js";import"./reorder_ios_24-CH4-Ar_A.js";import"./check_box_on_24-tz3ud1kS.js";import"./check_circle_on_24-Bfyxjxww.js";import"./constants-CtEIZ0Vq.js";const at={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:e,...m}){const[o,p]=d.useState(e),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,e)=>t.jsx(h,{children:t.jsx(s,{...e.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const mt=["Playground"];export{i as Playground,mt as __namedExportsOrder,at as default};
