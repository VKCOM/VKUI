import{j as t,w as f,b as L,r as b}from"./iframe-D2wkiYbA.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-C46aOp-5.js";import{G as C}from"./Group-Caj3mZPX.js";import{L as l}from"./List-CN4HvpKt.js";import{I as j}from"./user_outline_28-q66iRbM-.js";import{I as D}from"./settings_outline_28-DaCva5cH.js";import{I as P}from"./privacy_outline_28-CzfwvSPa.js";import"./Removable-DRvNecvI.js";import"./children-Cn4G3p10.js";import"./IconButton-DhTwf-xi.js";import"./Tappable-D1Sdra8V.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BU3u--9M.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-QU0WrbnN.js";import"./VisuallyHidden-ChTSElWV.js";import"./useConfigDirection-DrnKoeri.js";import"./useGlobalEventListener-dinbl7W7.js";import"./useEventListener-CNPrbSFG.js";import"./cancel_24-D23uiKG2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CJ3PYzhx.js";import"./SimpleCell-C3wjlPOp.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-4HzFQCBl.js";import"./Headline-kcgU3LAO.js";import"./Subhead-UUuxM49Y.js";import"./chevron_compact_right_24-4HH2VG6u.js";import"./chevron_16-DD_QuTl2.js";import"./AdaptiveIconRenderer-DEY8O_lK.js";import"./reorder_ios_24-DnNILWgv.js";import"./check_box_on_24-DTKmagV1.js";import"./check_circle_on_24-7347Up76.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},e={render:function({items:i,...g}){const[o,c]=b.useState(i),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(C,{children:t.jsx(s,{...i.args})}),f,L]};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
