import{j as t,w as f,b as L,r as b}from"./iframe-Bz8JpgqB.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-49yG8G3y.js";import{G as C}from"./Group-DTDZzv4b.js";import{L as l}from"./List-C-AzMsof.js";import{I as j}from"./user_outline_28-BmxMrxaC.js";import{I as D}from"./settings_outline_28-D2kG_oUq.js";import{I as P}from"./privacy_outline_28-2EhGfb4T.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-BGzPp3kl.js";import"./children-CZEp9rCJ.js";import"./IconButton-SCSZUFVl.js";import"./Tappable-DGSycWIS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C8sAptP9.js";import"./useFocusVisible-DI7o-w5D.js";import"./useFocusVisibleClassName-DeYZ6Bju.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C36z3TAr.js";import"./VisuallyHidden-Civmtkn4.js";import"./useConfigDirection-1j4RIbQo.js";import"./useGlobalEventListener-CHrHveT6.js";import"./useEventListener-D6V4uhmf.js";import"./cancel_24-RdK71gIA.js";import"./SvgIconRootV2-PiPT7FW9.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BZ1hDoNl.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CXG5ZQyY.js";import"./Headline-DOUR4p3R.js";import"./Subhead-CQ9JxnC_.js";import"./chevron_compact_right_24-DCACY6v7.js";import"./chevron_16-r7AvM1qe.js";import"./AdaptiveIconRenderer-Dqx16JeB.js";import"./reorder_ios_24-C1cTNx6s.js";import"./check_box_on_24-CqvgWjWx.js";import"./check_circle_on_24-DEFiirW7.js";import"./constants-CtEIZ0Vq.js";const ct={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ut=["Playground"];export{i as Playground,ut as __namedExportsOrder,ct as default};
