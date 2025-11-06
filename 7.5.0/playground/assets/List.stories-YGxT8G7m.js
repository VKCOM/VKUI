import{j as t,w as f,b as L,r as b}from"./iframe-CRvvLw_c.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-BdPBvmSn.js";import{G as C}from"./Group-QBPXGokh.js";import{L as l}from"./List-DhDNAX5e.js";import{I as j}from"./user_outline_28-0-y2hG6T.js";import{I as D}from"./settings_outline_28-Bwz66_hS.js";import{I as P}from"./privacy_outline_28-CaiDKJgi.js";import"./Removable-D6hUbfb3.js";import"./children-B6ZvQs6l.js";import"./IconButton-BfjgaeOF.js";import"./Tappable-BL_Dp9-M.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C5yyRKxt.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-jCwC7LNS.js";import"./VisuallyHidden-ExmaeT5t.js";import"./useConfigDirection-B3mnQ7qq.js";import"./useGlobalEventListener-Dcqm9qtj.js";import"./useEventListener-CJcuEL8k.js";import"./cancel_24-Bj5mGOBW.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./SimpleCell-CNXhz4ds.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dyjj_lEj.js";import"./Headline-D6S1r3dC.js";import"./Subhead-BYsNdrqQ.js";import"./chevron_compact_right_24-BKdl5aVs.js";import"./chevron_16-DKMjO9ca.js";import"./AdaptiveIconRenderer-CuUFm8UV.js";import"./reorder_ios_24-ceaOoDnu.js";import"./check_box_on_24-BaAuTipL.js";import"./check_circle_on_24-IW363EmW.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},e={render:function({items:i,...g}){const[o,c]=b.useState(i),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(C,{children:t.jsx(s,{...i.args})}),f,L]};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const lt=["Playground"];export{e as Playground,lt as __namedExportsOrder,pt as default};
