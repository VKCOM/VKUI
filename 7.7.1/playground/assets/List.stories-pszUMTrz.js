import{j as t,w as f,b as L,r as b}from"./iframe-dTlwAXGa.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-GJHfCsHL.js";import{G as C}from"./Group-CrremWw-.js";import{L as l}from"./List-CvoF5p1b.js";import{I as j}from"./user_outline_28-Bgy3oXo9.js";import{I as D}from"./settings_outline_28-CGqV9djQ.js";import{I as P}from"./privacy_outline_28-C6pYBlyh.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-BvBDqmqD.js";import"./children-D0xCpVZl.js";import"./IconButton-MYG7es_8.js";import"./Tappable-qMfTC7Pz.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dl5F7aV_.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CtGJ0DI4.js";import"./VisuallyHidden-JumwXwcS.js";import"./useConfigDirection-BIk700TM.js";import"./useGlobalEventListener-DR7m9Uut.js";import"./useEventListener-CM8ERZU-.js";import"./cancel_24-sfpNhjae.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-pVFSTIJK.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DJb5ZlwN.js";import"./Headline-nnEuybdp.js";import"./Subhead-BlOKXAAl.js";import"./chevron_compact_right_24-C3ktCmz2.js";import"./chevron_16-DHR9v_Z1.js";import"./AdaptiveIconRenderer-ESMEwK9d.js";import"./reorder_ios_24-CYpPEkSN.js";import"./check_box_on_24-Be72trti.js";import"./check_circle_on_24-QthlvxfI.js";import"./constants-CtEIZ0Vq.js";const ct={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ut=["Playground"];export{i as Playground,ut as __namedExportsOrder,ct as default};
