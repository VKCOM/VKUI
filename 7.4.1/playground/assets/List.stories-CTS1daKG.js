import{j as t,w as f,b as L,r as b}from"./iframe-BW2_2Sqh.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-BqO-SDMq.js";import{G as j}from"./Group-CUaPdFZ2.js";import{L as l}from"./List-BlsleDkr.js";import{I as C}from"./user_outline_28-V-tm3DyX.js";import{I as D}from"./settings_outline_28-B5kf67Go.js";import{I as P}from"./privacy_outline_28-CuIDBDHa.js";import"./Removable-C1txKSic.js";import"./children-Dc0ieD8_.js";import"./IconButton-DMIGpMdh.js";import"./Tappable-D_Pc41Ky.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSLKIgEW.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DYuPlK4j.js";import"./VisuallyHidden-0_L4g8bM.js";import"./useConfigDirection-DNUhHzMQ.js";import"./useGlobalEventListener-DBCEN9bj.js";import"./useEventListener-DphI_omp.js";import"./cancel_24-CE2mq3tL.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./SimpleCell-NHhZP55Q.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DqSrPGSc.js";import"./Headline-C7EO-C2p.js";import"./Subhead-BlMIzlRi.js";import"./chevron_compact_right_24-BkmrZnBH.js";import"./chevron_16-DYHt4ET-.js";import"./AdaptiveIconRenderer-BVAAaM_Y.js";import"./reorder_ios_24-vcJ3KWWO.js";import"./check_box_on_24-B3y-v9UY.js";import"./check_circle_on_24-dcl-AXNG.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Blocks/List",component:l,parameters:I("List",h,x)},i={render:function({items:e,...g}){const[o,c]=b.useState(e),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(C,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,e)=>t.jsx(j,{children:t.jsx(s,{...e.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const lt=["Playground"];export{i as Playground,lt as __namedExportsOrder,pt as default};
