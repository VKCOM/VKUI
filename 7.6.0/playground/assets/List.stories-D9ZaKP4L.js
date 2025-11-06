import{j as t,w as f,b as L,r as b}from"./iframe-DveaDHpJ.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-DDnnBQ1r.js";import{G as C}from"./Group-jSVFVrUQ.js";import{L as l}from"./List-oksPmtcH.js";import{I as j}from"./user_outline_28-CmXBy_2i.js";import{I as D}from"./settings_outline_28-BSH3gIt5.js";import{I as P}from"./privacy_outline_28-YwFYnW_w.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-dXf4SeU2.js";import"./children-DIqfUSJp.js";import"./IconButton-B6-RVMvP.js";import"./Tappable-B6M0Cj2d.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Qd8MhpMK.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DB2utYDB.js";import"./VisuallyHidden-C4fiFLiw.js";import"./useConfigDirection-C-LxfHUm.js";import"./useGlobalEventListener-DxW3-2us.js";import"./useEventListener-BZXVGBW4.js";import"./cancel_24-v6kzA3DC.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-C5FLI9j_.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DMEVDgek.js";import"./Headline-D2z7orvN.js";import"./Subhead-CMDv2ZTP.js";import"./chevron_compact_right_24-_2yPNVIn.js";import"./chevron_16-8_wEssbM.js";import"./AdaptiveIconRenderer-D02Z7Vvb.js";import"./reorder_ios_24-B1myTCle.js";import"./check_box_on_24-BsHKmyz3.js";import"./check_circle_on_24-FNfqmYlu.js";import"./constants-CtEIZ0Vq.js";const gt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
