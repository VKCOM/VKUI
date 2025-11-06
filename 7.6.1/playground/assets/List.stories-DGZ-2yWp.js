import{j as t,w as f,b as L,r as b}from"./iframe-CdtcRMP-.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-DAf-bAQq.js";import{G as C}from"./Group-BPDDF8j8.js";import{L as l}from"./List-Snz0ksRp.js";import{I as j}from"./user_outline_28-BIZCNLtx.js";import{I as D}from"./settings_outline_28-D1UsfSKa.js";import{I as P}from"./privacy_outline_28-FKyhbreT.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-nQuC3wCX.js";import"./children-BpYEnGqU.js";import"./IconButton-rnOj30v2.js";import"./Tappable-znRvcKvt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-nnjkiOyK.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-4kqGTgL9.js";import"./VisuallyHidden-CtlI0uOO.js";import"./useConfigDirection-I0bRjt3K.js";import"./useGlobalEventListener-enXvR1yE.js";import"./useEventListener-CidaaUBr.js";import"./cancel_24-DMLedojc.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DSOj1jKk.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-UnTPOYYT.js";import"./Headline-BNe6tvfn.js";import"./Subhead-DKX6pZDk.js";import"./chevron_compact_right_24-lHFnU4Rs.js";import"./chevron_16-cxMQw6Cg.js";import"./AdaptiveIconRenderer-By43qae_.js";import"./reorder_ios_24-srCtDSQP.js";import"./check_box_on_24-BiPwgksd.js";import"./check_circle_on_24-CS4lhGzB.js";import"./constants-CtEIZ0Vq.js";const gt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
