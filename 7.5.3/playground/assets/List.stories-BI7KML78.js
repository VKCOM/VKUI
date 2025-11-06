import{j as t,w as f,b as L,r as b}from"./iframe-VQuwIBim.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-SlhzKCcn.js";import{G as C}from"./Group-CM6wWYyu.js";import{L as l}from"./List-C7yip8N8.js";import{I as j}from"./user_outline_28-BoQqpMJI.js";import{I as D}from"./settings_outline_28-DxvniYwj.js";import{I as P}from"./privacy_outline_28-Bpr7EC8y.js";import"./Removable-B69Ae71z.js";import"./children-DbSAwzjm.js";import"./IconButton-CsO6Fs2D.js";import"./Tappable-DJKRXU4j.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-GKvDpg7c.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-esLGIMz7.js";import"./VisuallyHidden-Bn9barOE.js";import"./useConfigDirection-BhKWnP92.js";import"./useGlobalEventListener-Dg2G1Bu3.js";import"./useEventListener-buG494Se.js";import"./cancel_24-76PwI_pT.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./SimpleCell-Bx23Z_Ak.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CFr_RCRn.js";import"./Headline-DlMci9v_.js";import"./Subhead-BovRsuwk.js";import"./chevron_compact_right_24-NA_iCiSP.js";import"./chevron_16-CrLMruU6.js";import"./AdaptiveIconRenderer-BncaVmUu.js";import"./reorder_ios_24-CgAqhjsg.js";import"./check_box_on_24-Dr4fiKV4.js";import"./check_circle_on_24-BhaJOotW.js";import"./constants-CtEIZ0Vq.js";const lt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:e,...g}){const[o,c]=b.useState(e),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,e)=>t.jsx(C,{children:t.jsx(s,{...e.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
