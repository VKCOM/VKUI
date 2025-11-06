import{j as t,w as f,b as L,r as b}from"./iframe-DQDZnzQe.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-BjdPWmPW.js";import{G as C}from"./Group-qnf_xRXF.js";import{L as l}from"./List-Blr1gN47.js";import{I as j}from"./user_outline_28-rSAT209W.js";import{I as D}from"./settings_outline_28-BHFYVCRb.js";import{I as P}from"./privacy_outline_28-W-fVRSDf.js";import"./Removable-CJah0S-4.js";import"./children-JmIZewKa.js";import"./IconButton-fW78sGQ1.js";import"./Tappable-GGjjvyZD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CKZOM7f4.js";import"./VisuallyHidden-vRsYbH_6.js";import"./useConfigDirection-CFM_wEcG.js";import"./useGlobalEventListener-DbjjJxwk.js";import"./useEventListener-DcXFqQoy.js";import"./cancel_24-DxEHhXTK.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./SimpleCell-CmzfnJ0J.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-y02Efo06.js";import"./Headline-DFYCKKj3.js";import"./Subhead-CV6mVfj0.js";import"./chevron_compact_right_24-BJHNvhLk.js";import"./chevron_16-D6ldfjxj.js";import"./AdaptiveIconRenderer-3HMdVtOM.js";import"./reorder_ios_24-CfEKpcri.js";import"./check_box_on_24-CE0mzBhH.js";import"./check_circle_on_24-Cwe4JKfo.js";import"./constants-CtEIZ0Vq.js";const lt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:e,...g}){const[o,c]=b.useState(e),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,e)=>t.jsx(C,{children:t.jsx(s,{...e.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
