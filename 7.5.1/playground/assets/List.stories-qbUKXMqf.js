import{j as t,w as f,b as L,r as b}from"./iframe-DZFG_ML5.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-W5CGL-Ez.js";import{G as C}from"./Group-DczfUVmx.js";import{L as l}from"./List-BLtvnvoY.js";import{I as j}from"./user_outline_28-CD_6Srdh.js";import{I as D}from"./settings_outline_28-Boc1l6xI.js";import{I as P}from"./privacy_outline_28-C3gXGv3c.js";import"./Removable-BniJd5-v.js";import"./children-CbwhlWKb.js";import"./IconButton-C3HahQsG.js";import"./Tappable-DivmMzZn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-O0RRum4C.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-rnqmQ_3Q.js";import"./VisuallyHidden-DUSQwRyI.js";import"./useConfigDirection-BbxI4kck.js";import"./useGlobalEventListener-is3gW8hR.js";import"./useEventListener-eXbAXU7E.js";import"./cancel_24-So4WKeZo.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CKNjcJVv.js";import"./SimpleCell-ebMZoKON.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CYznJAmV.js";import"./Headline-DDLNTO9r.js";import"./Subhead-D8223A8i.js";import"./chevron_compact_right_24-BccQ5rMW.js";import"./chevron_16-d4AUnQXG.js";import"./AdaptiveIconRenderer-DSX7hy_W.js";import"./reorder_ios_24-DJ_NLoiV.js";import"./check_box_on_24-3mUefpWG.js";import"./check_circle_on_24-BwzIIkyf.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},e={render:function({items:i,...g}){const[o,c]=b.useState(i),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(C,{children:t.jsx(s,{...i.args})}),f,L]};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
