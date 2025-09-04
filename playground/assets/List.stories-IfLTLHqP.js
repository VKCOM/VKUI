import{j as t,w as f,b as L,r as b}from"./iframe-DvsMcRqO.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-8cassXI6.js";import{G as C}from"./Group-CqteXIEy.js";import{L as l}from"./List-CY8t9F1L.js";import{I as j}from"./user_outline_28-Bi8eTBEI.js";import{I as D}from"./settings_outline_28-DTnJ_lK_.js";import{I as P}from"./privacy_outline_28-B_6UBLfn.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-B20LGpmh.js";import"./children-lVZQ7uKR.js";import"./IconButton-B-myA0wM.js";import"./Tappable-Dogw4jpa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DquLH6Yl.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-D1AbCbBE.js";import"./VisuallyHidden-BGLO0lAS.js";import"./useConfigDirection-CN1nmZoK.js";import"./useGlobalEventListener-BdJfJj1z.js";import"./useEventListener-BkrsSu0A.js";import"./cancel_24-CxtMKOmC.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-Cc4B-ydZ.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BnZcEJ_G.js";import"./Headline-CDYdreGb.js";import"./Subhead-Bc3iAQV-.js";import"./chevron_compact_right_24-B3rJ9RFm.js";import"./chevron_16-BxodZLo_.js";import"./AdaptiveIconRenderer-BgTnNLug.js";import"./reorder_ios_24-Bjz4Yiy0.js";import"./check_box_on_24-gtYbFFHx.js";import"./check_circle_on_24-D_xf0Bvx.js";import"./constants-CtEIZ0Vq.js";const gt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ct=["Playground"];export{i as Playground,ct as __namedExportsOrder,gt as default};
