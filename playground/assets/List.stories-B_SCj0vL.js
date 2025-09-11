import{j as t,w as f,b as L,r as b}from"./iframe-D9ctG7Ns.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-DfjQ-TK4.js";import{G as C}from"./Group-BG1uXLvs.js";import{L as l}from"./List-A9uMrjtX.js";import{I as j}from"./user_outline_28-CEPd-byl.js";import{I as D}from"./settings_outline_28-LBeGy4YE.js";import{I as P}from"./privacy_outline_28-BJWxGDNJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-D8OEYYHJ.js";import"./children-O1ZDhWOu.js";import"./IconButton-Cu6N9yzq.js";import"./Tappable-DOmAnzcN.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-4xEXwBeB.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-dk1yVFOH.js";import"./VisuallyHidden-XRinxkJw.js";import"./useConfigDirection-BepSmh67.js";import"./useGlobalEventListener-DwhKth4J.js";import"./useEventListener-UbYuQ7Ip.js";import"./cancel_24-oGe7O0m1.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CeGD-K3T.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BcHikxS0.js";import"./Headline-4n2ELzS2.js";import"./Subhead-DjvqikOr.js";import"./chevron_compact_right_24-DAU9zP3f.js";import"./chevron_16-BEyzHrJY.js";import"./AdaptiveIconRenderer-Bl0Wq8MO.js";import"./reorder_ios_24-DcS2iC4M.js";import"./check_box_on_24-t6dgJu0A.js";import"./check_circle_on_24-CAovDgBP.js";import"./constants-CtEIZ0Vq.js";const gt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
