import{j as t,w as f,b as L,r as b}from"./iframe-k6odcVfq.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-PL4IxNDy.js";import{G as j}from"./Group-O3l4QVPu.js";import{L as l}from"./List-DQh5RduL.js";import{I as C}from"./user_outline_28-BTGCbugu.js";import{I as D}from"./settings_outline_28-BrR49s3x.js";import{I as P}from"./privacy_outline_28-AIo6rjw9.js";import"./Removable-DCOjXm07.js";import"./children-CYWK7spH.js";import"./IconButton-dHj7AK-z.js";import"./Tappable-CLnVjIR_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D_pv1CFG.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1ugcw4m.js";import"./VisuallyHidden-D-1P4bzL.js";import"./useConfigDirection-CxnUW9rE.js";import"./useGlobalEventListener-szCziyIJ.js";import"./useEventListener-ongRIzns.js";import"./cancel_24-fcxuZKq0.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./SimpleCell-LorozRfg.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DHnfr3c7.js";import"./Headline-BdgiMIb0.js";import"./Subhead-CfBOCg31.js";import"./chevron_compact_right_24-Baa4ZBCF.js";import"./chevron_16-C9RD0OpX.js";import"./AdaptiveIconRenderer-gQn7di2U.js";import"./reorder_ios_24-BFpJaCA4.js";import"./check_box_on_24-EC5CB3Pr.js";import"./check_circle_on_24-C1ooPDFD.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Blocks/List",component:l,parameters:I("List",h,x)},i={render:function({items:e,...g}){const[o,c]=b.useState(e),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(C,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,e)=>t.jsx(j,{children:t.jsx(s,{...e.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
