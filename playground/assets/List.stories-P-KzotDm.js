import{b as c,w as u,j as t,r as d}from"./iframe-Cn0klKvz.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-CddNJcfs.js";import{G as h}from"./Group-CNhzxREQ.js";import{L as a}from"./List-DmHaN1uO.js";import{I}from"./user_outline_28-CqikZDro.js";import{I as y}from"./settings_outline_28-BdcaCvcp.js";import{I as C}from"./privacy_outline_28-9rN6lIGs.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DJHs5oKA.js";import"./children-IiL0uSHX.js";import"./IconButton-DSEgeqcd.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./VisuallyHidden-C9tNf48m.js";import"./useConfigDirection-DuEYXWS_.js";import"./cancel_24-C8myLtmO.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./SimpleCell-FhAfTR8Z.js";import"./Footnote-BwZkqEqY.js";import"./Headline-DgEMhIVy.js";import"./Subhead-BQyoBjlR.js";import"./chevron_compact_right_24-BkZuF5w8.js";import"./chevron_16-5H5JBddQ.js";import"./AdaptiveIconRenderer-BkROPn6l.js";import"./reorder_ios_24-C_2PjSLX.js";import"./check_box_on_24-DFXb0s76.js";import"./check_circle_on_24-D20_x5sk.js";import"./constants-CtEIZ0Vq.js";const nt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const st=["Playground"];export{e as Playground,st as __namedExportsOrder,nt as default};
