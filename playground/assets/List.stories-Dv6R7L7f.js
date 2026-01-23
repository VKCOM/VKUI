import{j as t,w as c,b as u,r as d}from"./iframe-BJ9555aC.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-By-BPbxY.js";import{G as h}from"./Group-DpwBrIOF.js";import{L as a}from"./List-BaSU6O8G.js";import{I}from"./user_outline_28-Bp__65iM.js";import{I as y}from"./settings_outline_28-BPWaHLc-.js";import{I as C}from"./privacy_outline_28-DrIjfawQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-wWHIROGY.js";import"./children-CFPqwV5J.js";import"./IconButton-DRWEpqxT.js";import"./Tappable-Bz7LtOMO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./InputUtils-8LhFcqKY.js";import"./VisuallyHidden-BpRJPd7L.js";import"./useConfigDirection-BeEtg5OO.js";import"./cancel_24-jJgAHgAr.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DnYpeFDL.js";import"./Footnote-xxqNAETB.js";import"./Headline-Bb4b2JBA.js";import"./Subhead-ppzL9p3g.js";import"./chevron_compact_right_24-DrAMy2kd.js";import"./chevron_16-CJFbNzh_.js";import"./AdaptiveIconRenderer-DUioVxFm.js";import"./reorder_ios_24-CRqmbSYG.js";import"./check_box_on_24-Bzc3wPiJ.js";import"./check_circle_on_24-Cu0k_2dt.js";import"./constants-CtEIZ0Vq.js";const st={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
