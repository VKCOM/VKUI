import{j as t,w as f,b as L,r as b}from"./iframe-DDos8QSD.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-BSHLTF6a.js";import{G as j}from"./Group-BdSAzhLh.js";import{L as l}from"./List-BABrwban.js";import{I as C}from"./user_outline_28-ARON33zI.js";import{I as D}from"./settings_outline_28-Bzucn4GR.js";import{I as P}from"./privacy_outline_28-BoOXJ3A4.js";import"./Removable-BkLTzKdK.js";import"./children-DM03Xori.js";import"./IconButton-C3mRDxD7.js";import"./Tappable-B0kWxOOO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CWxsm2KA.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dyyzogrc.js";import"./VisuallyHidden-Bn0ixRRD.js";import"./useConfigDirection-BVLc7CyO.js";import"./useGlobalEventListener-Cf-K_pnj.js";import"./useEventListener-B5lUY6Nx.js";import"./cancel_24-Cjk92GYx.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-D7q7mL8J.js";import"./SimpleCell-Cm4X46Km.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DolN14Rp.js";import"./Headline-A5M31mJl.js";import"./Subhead-94kqPIfE.js";import"./chevron_compact_right_24-D96aA4-p.js";import"./chevron_16-B5_cuzjH.js";import"./AdaptiveIconRenderer-5tHQMFAk.js";import"./reorder_ios_24-DnZbFoSd.js";import"./check_box_on_24-Wmpe4q9b.js";import"./check_circle_on_24-BFTGWo1k.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Blocks/List",component:l,parameters:I("List",h,x)},i={render:function({items:e,...g}){const[o,c]=b.useState(e),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(C,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,e)=>t.jsx(j,{children:t.jsx(s,{...e.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
