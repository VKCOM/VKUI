import{j as t,w as f,b as L,r as b}from"./iframe-DSAhScPT.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-CO3a19JY.js";import{G as C}from"./Group-B7gcv2RN.js";import{L as l}from"./List-C9LSrx1j.js";import{I as j}from"./user_outline_28-BqTsr7Bf.js";import{I as D}from"./settings_outline_28-CVOGBsQ4.js";import{I as P}from"./privacy_outline_28-CiduCdvy.js";import"./Removable-D5ZrDV4g.js";import"./children-Dz6__HWn.js";import"./IconButton-CDVak2Pm.js";import"./Tappable-41du4Si_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-6oth1gD7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CLCgtllv.js";import"./VisuallyHidden-DIyQgeho.js";import"./useConfigDirection-Dm4173QE.js";import"./useGlobalEventListener-CiW_WKtR.js";import"./useEventListener-DJyKCYx1.js";import"./cancel_24-5SKzeyoh.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CIYgEGRf.js";import"./SimpleCell-CyR_YWOH.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BKhvF0_1.js";import"./Headline-CdViHbNM.js";import"./Subhead-CkgCAX-J.js";import"./chevron_compact_right_24-CbW-PUYO.js";import"./chevron_16-NGFInKyj.js";import"./AdaptiveIconRenderer-Cj0grb3P.js";import"./reorder_ios_24-C7_Asgli.js";import"./check_box_on_24-DwZfeea6.js";import"./check_circle_on_24-padOJU7B.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},e={render:function({items:i,...g}){const[o,c]=b.useState(i),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(C,{children:t.jsx(s,{...i.args})}),f,L]};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
