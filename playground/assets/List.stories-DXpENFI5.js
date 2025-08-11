import{j as t,w as f,b as L,r as b}from"./iframe-BdL7Qu3-.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-GFBGULyk.js";import{G as C}from"./Group-1bWIf9u2.js";import{L as l}from"./List-e03n68oL.js";import{I as j}from"./user_outline_28-CHZJfQwo.js";import{I as D}from"./settings_outline_28-DfGFlQlY.js";import{I as P}from"./privacy_outline_28-BDYLAa91.js";import"./Removable-kBBzHwjh.js";import"./children-D33S37xY.js";import"./IconButton-oiQnZbSh.js";import"./Tappable-DH_64QBQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zgtvQHiz.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DfOLgQuD.js";import"./VisuallyHidden-DMev6gKF.js";import"./useConfigDirection-D_GPblpw.js";import"./useGlobalEventListener-CWI65JCy.js";import"./useEventListener-COxWOe_W.js";import"./cancel_24-DYZXSV6w.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./SimpleCell-DtSFoJ-l.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Cejbc8FV.js";import"./Headline-IzZ5JXBy.js";import"./Subhead-CEr4zt5A.js";import"./chevron_compact_right_24-AP5wuFgI.js";import"./chevron_16-Dq6TqX7-.js";import"./AdaptiveIconRenderer-QlRoKo4f.js";import"./reorder_ios_24-7wcSxEed.js";import"./check_box_on_24-Bm5iZahs.js";import"./check_circle_on_24-B-NXeGAt.js";import"./constants-CtEIZ0Vq.js";const lt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:e,...g}){const[o,c]=b.useState(e),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,e)=>t.jsx(C,{children:t.jsx(s,{...e.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const gt=["Playground"];export{i as Playground,gt as __namedExportsOrder,lt as default};
