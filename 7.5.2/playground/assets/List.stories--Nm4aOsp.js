import{j as t,w as f,b as L,r as b}from"./iframe-BzXYREd1.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-CIK6qelj.js";import{G as C}from"./Group-BiC9EI5C.js";import{L as l}from"./List-BRVNvrQj.js";import{I as j}from"./user_outline_28-BYBK7aN_.js";import{I as D}from"./settings_outline_28-bgrX0d23.js";import{I as P}from"./privacy_outline_28-xQWNJmy5.js";import"./Removable-CqorhSR_.js";import"./children-Cg6pG0uN.js";import"./IconButton-DmYSjyYz.js";import"./Tappable-CEn82fQ0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DoSI9phS.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DULFm0M2.js";import"./VisuallyHidden-CGoUHCA9.js";import"./useConfigDirection-EqB_hZQh.js";import"./useGlobalEventListener-B6vpDla7.js";import"./useEventListener-BVPfg_EC.js";import"./cancel_24-CYr0_4vC.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-B6ey8g7O.js";import"./SimpleCell-5Dhw212S.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ChYIirVi.js";import"./Headline-CvUEvu-v.js";import"./Subhead-fVUucS5M.js";import"./chevron_compact_right_24-D2odf8KU.js";import"./chevron_16-BAw61TxE.js";import"./AdaptiveIconRenderer-DQJoMb-5.js";import"./reorder_ios_24-ClVg3dp1.js";import"./check_box_on_24-N2P4yWce.js";import"./check_circle_on_24-DGqsU1xy.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},e={render:function({items:i,...g}){const[o,c]=b.useState(i),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(C,{children:t.jsx(s,{...i.args})}),f,L]};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
