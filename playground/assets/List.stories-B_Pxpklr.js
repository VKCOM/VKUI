import{j as t,w as f,b as L,r as b}from"./iframe-CNYWi-tv.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-DzugrAQG.js";import{G as C}from"./Group-DYQ1okdd.js";import{L as l}from"./List-CEsFO5pL.js";import{I as j}from"./user_outline_28-DPECVqTe.js";import{I as D}from"./settings_outline_28-BsBAnAkE.js";import{I as P}from"./privacy_outline_28-BTughQDt.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-DXEozIKZ.js";import"./children-D9VTJ2FF.js";import"./IconButton-1hwVmaZf.js";import"./Tappable-Bt2S1yMc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-PPkKMUDS.js";import"./useFocusVisibleClassName-CrxrpfB8.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bfhccirq.js";import"./VisuallyHidden-CIbqknZb.js";import"./useConfigDirection-C_6xjTM7.js";import"./useGlobalEventListener-JcQvOfhM.js";import"./useEventListener-DZQbwQUn.js";import"./cancel_24-CquaKNSW.js";import"./SvgIconRootV2-gYxZaoy5.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DUb12Fwu.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BYeJ88ZB.js";import"./Headline-DsqdPKjD.js";import"./Subhead-BeVsNNt7.js";import"./chevron_compact_right_24-DunAwNUB.js";import"./chevron_16-CN_guPgl.js";import"./AdaptiveIconRenderer-B0gv9O0k.js";import"./reorder_ios_24-CNqJgXj_.js";import"./check_box_on_24-DW3URTdi.js";import"./check_circle_on_24-CSfj3dp4.js";import"./constants-CtEIZ0Vq.js";const gt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
