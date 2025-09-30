import{j as t,w as f,b as L,r as b}from"./iframe-qoTtUH8h.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-DHDSADlq.js";import{G as C}from"./Group-jWXxgMZf.js";import{L as l}from"./List-BvnM6gjs.js";import{I as j}from"./user_outline_28-aCuGnZzk.js";import{I as D}from"./settings_outline_28-D_Q2f8RX.js";import{I as P}from"./privacy_outline_28-CwDQ_YJd.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-CFszRLWh.js";import"./children-Tz7yKUE7.js";import"./IconButton-B17wjzUA.js";import"./Tappable-D-SlRlKJ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DCqC4s6H.js";import"./VisuallyHidden-BqFtMTWb.js";import"./useConfigDirection-DgRc04K6.js";import"./useGlobalEventListener-stOUD5xR.js";import"./useEventListener-Czd3Qf-C.js";import"./cancel_24-CLPDrLYl.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CHXFqUrO.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DrM4b0WC.js";import"./Headline-BOHGExn8.js";import"./Subhead-B5MAyB6Q.js";import"./chevron_compact_right_24-DwIrQ_dr.js";import"./chevron_16-BxL5QhO0.js";import"./AdaptiveIconRenderer-Cl69QEek.js";import"./reorder_ios_24-TYe4fChw.js";import"./check_box_on_24-Dx1FKYI7.js";import"./check_circle_on_24-ArRvPyrj.js";import"./constants-CtEIZ0Vq.js";const ct={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
