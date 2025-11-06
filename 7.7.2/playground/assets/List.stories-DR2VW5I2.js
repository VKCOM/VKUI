import{j as t,w as f,b as L,r as b}from"./iframe-7s0T-F6L.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-uOEslU3v.js";import{G as C}from"./Group-CH_sa7ue.js";import{L as l}from"./List-DqZJxub2.js";import{I as j}from"./user_outline_28-DUWoQLsH.js";import{I as D}from"./settings_outline_28-BkFE_8M9.js";import{I as P}from"./privacy_outline_28-DcaWCTe6.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-D4HLOQNr.js";import"./children-DpgARscT.js";import"./IconButton-CH48s9Wj.js";import"./Tappable-BPO49mNS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-LGVh7luH.js";import"./useFocusVisible-BTUcwPxj.js";import"./useFocusVisibleClassName-CMVp5o9Y.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CP-PNx6u.js";import"./VisuallyHidden-CNF1CStS.js";import"./useConfigDirection--PDr40UE.js";import"./useGlobalEventListener-D2m4XbLr.js";import"./useEventListener-6ORcdIAV.js";import"./cancel_24-CXDD7VnX.js";import"./SvgIconRootV2-Wzzl8e4S.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-B2IgO3S2.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BCofusdy.js";import"./Headline-CfLwurX4.js";import"./Subhead-D1_aWRaG.js";import"./chevron_compact_right_24-JevFX-l5.js";import"./chevron_16-1M6O6SWX.js";import"./AdaptiveIconRenderer-CngEuoSF.js";import"./reorder_ios_24-m7_uc1ot.js";import"./check_box_on_24-Ch3Mzeh3.js";import"./check_circle_on_24-TttDJ7xG.js";import"./constants-CtEIZ0Vq.js";const ct={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
