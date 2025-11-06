import{j as t,w as f,b as L,r as b}from"./iframe-gnG2DlPI.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-DOsZTVQv.js";import{G as C}from"./Group-CrrFHIS0.js";import{L as l}from"./List-Buoe4EFG.js";import{I as j}from"./user_outline_28-QpD8DRE3.js";import{I as D}from"./settings_outline_28-C5M_9m_D.js";import{I as P}from"./privacy_outline_28-D3DZXcNn.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-DDpdMjUf.js";import"./children-f2sIKLUn.js";import"./IconButton-Cf4dAO-u.js";import"./Tappable-03YLyRIn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CEzYBb4W.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bge3OIaY.js";import"./VisuallyHidden-CKM3u7Sn.js";import"./useConfigDirection-Dd3ud1i-.js";import"./useGlobalEventListener-BrlIfad1.js";import"./useEventListener-BZo6MitC.js";import"./cancel_24-D159N_1T.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BCPsJbDr.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CONk622S.js";import"./Headline-K5SxFgY1.js";import"./Subhead-CTHKnpeS.js";import"./chevron_compact_right_24-DzsR3cYI.js";import"./chevron_16-UahDaYU4.js";import"./AdaptiveIconRenderer-QV1MdQeO.js";import"./reorder_ios_24-CXYouv79.js";import"./check_box_on_24-qoQEq3lL.js";import"./check_circle_on_24-B7QwB07X.js";import"./constants-CtEIZ0Vq.js";const gt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
