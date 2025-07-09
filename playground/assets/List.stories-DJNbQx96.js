import{j as t,w as f,b as L,r as b}from"./iframe-C2_PECK0.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-BSQapRvA.js";import{G as j}from"./Group-lIrBg-Y8.js";import{L as l}from"./List-CFyJ1l7m.js";import{I as C}from"./user_outline_28-0NYFXnCB.js";import{I as D}from"./settings_outline_28-OTJEUG1f.js";import{I as P}from"./privacy_outline_28-Co_DhA7-.js";import"./Removable-DDOYN81Z.js";import"./children-n2srhEVv.js";import"./IconButton-ht7j3HPv.js";import"./Tappable-DLQDSygG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Ctz6ZMd9.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BDpjj3t6.js";import"./VisuallyHidden-DSMrBIlo.js";import"./useConfigDirection-CkTav0j8.js";import"./useGlobalEventListener-C0NjmmOV.js";import"./useEventListener-BmXoCYOx.js";import"./cancel_24-CulXt8M_.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./SimpleCell-DNa3I5n_.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-B_H7tDpo.js";import"./Headline-DKR4TEkK.js";import"./Subhead-tEP5dl-0.js";import"./chevron_compact_right_24-DnaIo2yl.js";import"./chevron_16-Da1nGRlC.js";import"./AdaptiveIconRenderer-BmXCsCLU.js";import"./reorder_ios_24-C3f2Xao8.js";import"./check_box_on_24-BPQ1lh6t.js";import"./check_circle_on_24-DnKnhx43.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Blocks/List",component:l,parameters:I("List",h,x)},i={render:function({items:e,...g}){const[o,c]=b.useState(e),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(C,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,e)=>t.jsx(j,{children:t.jsx(s,{...e.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const lt=["Playground"];export{i as Playground,lt as __namedExportsOrder,pt as default};
