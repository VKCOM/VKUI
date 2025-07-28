import{j as t,w as f,b as L,r as b}from"./iframe-CGpIZMk8.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-BGcMNrSH.js";import{G as C}from"./Group-CoQ5RzN5.js";import{L as l}from"./List-DJoq3p54.js";import{I as j}from"./user_outline_28-D8jNnpjM.js";import{I as D}from"./settings_outline_28-CZXlhNFw.js";import{I as P}from"./privacy_outline_28-BPtJ01n7.js";import"./Removable-v2sol_eW.js";import"./children-BbEaAOxK.js";import"./IconButton-R-pBWVQH.js";import"./Tappable-BEdABn7b.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D9pe1RI2.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Z7In03iI.js";import"./VisuallyHidden-CdBh7Iry.js";import"./useConfigDirection-Dz_AGVHb.js";import"./useGlobalEventListener-CwAATl2v.js";import"./useEventListener-OpwGLEa0.js";import"./cancel_24-X3lt1W_w.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./SimpleCell-BUqMdJ_G.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DPd01TxJ.js";import"./Headline-ZBoX0yvc.js";import"./Subhead-D_tBif6E.js";import"./chevron_compact_right_24-BC9MCbgO.js";import"./chevron_16-C7AVBXEj.js";import"./AdaptiveIconRenderer-bgOpWVtv.js";import"./reorder_ios_24-DYQT-ClO.js";import"./check_box_on_24-DmUu7cw7.js";import"./check_circle_on_24-DYgOR3Wd.js";import"./constants-CtEIZ0Vq.js";const lt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:e,...g}){const[o,c]=b.useState(e),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,e)=>t.jsx(C,{children:t.jsx(s,{...e.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
