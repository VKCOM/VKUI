import{j as t,w as f,b as L,r as b}from"./iframe-B4SbMwac.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-pnWZseGv.js";import{G as C}from"./Group-BdqZOTIB.js";import{L as l}from"./List-yC5Ui9Pf.js";import{I as j}from"./user_outline_28-ND-YQYvw.js";import{I as D}from"./settings_outline_28-BAL-8hGB.js";import{I as P}from"./privacy_outline_28-DlBgXJAT.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-BMbXMjJQ.js";import"./children-hJQIY4yI.js";import"./IconButton-BrekU4vj.js";import"./Tappable-DlzKIRC8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-LHka_ZWc.js";import"./useFocusVisible-CA0gmOpw.js";import"./useFocusVisibleClassName-CYMT8ouX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C948cbKc.js";import"./VisuallyHidden-B_fMC41X.js";import"./useConfigDirection-D94ZyAhW.js";import"./useGlobalEventListener-CEYAu_n8.js";import"./useEventListener-D7G2gz9_.js";import"./cancel_24-BiaNkhfM.js";import"./SvgIconRootV2-CSlzNDT1.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-B3xHvs3D.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-PzIaqeP1.js";import"./Headline-DyfFpR9w.js";import"./Subhead-BszjoIm7.js";import"./chevron_compact_right_24-Bbxtve_V.js";import"./chevron_16-DNg3QADm.js";import"./AdaptiveIconRenderer-CR9XwE1z.js";import"./reorder_ios_24-BRQYG2yD.js";import"./check_box_on_24-DYECzjEP.js";import"./check_circle_on_24-C-1w6mRA.js";import"./constants-CtEIZ0Vq.js";const ct={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
