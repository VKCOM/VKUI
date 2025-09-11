import{j as t,w as f,b as L,r as b}from"./iframe-DfeTZ_Fw.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-BwVXTCvf.js";import{G as C}from"./Group-ChVeS0N8.js";import{L as l}from"./List-Dw2L2Wc9.js";import{I as j}from"./user_outline_28-loEXZkTw.js";import{I as D}from"./settings_outline_28-2Q5EfLcj.js";import{I as P}from"./privacy_outline_28-Cha5xWzB.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-RvrdKJgI.js";import"./children-DctjNuEY.js";import"./IconButton-CE4ifGYW.js";import"./Tappable-BBWke1IE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Bpx6dgEO.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C-I8ensD.js";import"./VisuallyHidden-BuJles22.js";import"./useConfigDirection-CwjKsiym.js";import"./useGlobalEventListener-BDSHjBL9.js";import"./useEventListener-DdaI75sW.js";import"./cancel_24-XhVC2QBS.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BuvX657b.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ivEbNXOe.js";import"./Headline-BbT30PkZ.js";import"./Subhead-BkL8qoJh.js";import"./chevron_compact_right_24-zZ-JxscM.js";import"./chevron_16-w2grljdX.js";import"./AdaptiveIconRenderer-S9G6ZqOh.js";import"./reorder_ios_24-CyrNisjS.js";import"./check_box_on_24-C-Ehlzip.js";import"./check_circle_on_24-Bj8lnbOB.js";import"./constants-CtEIZ0Vq.js";const ct={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
