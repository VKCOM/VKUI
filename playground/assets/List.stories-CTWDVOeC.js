import{j as t,w as c,b as u,r as d}from"./iframe-CJSxyW9U.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-Ylz3rDRA.js";import{G as h}from"./Group-Bl9QB3Zd.js";import{L as a}from"./List-B9x3i7bw.js";import{I}from"./user_outline_28-DYiSNlZ5.js";import{I as y}from"./settings_outline_28-Ci6vM46a.js";import{I as C}from"./privacy_outline_28-CUrUpjts.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-Cn8iqEd1.js";import"./children-B_vv-93P.js";import"./IconButton-DlIx3m79.js";import"./Tappable-B_lgqKnQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7Hv1Vzv.js";import"./useState-Cf9zElDT.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./InputUtils-CQXgm4mM.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./useConfigDirection-C3cHGESc.js";import"./cancel_24-DiZsY-MY.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BHTnRhyN.js";import"./Footnote-PeEhUyBm.js";import"./Headline-B-NKRtjP.js";import"./Subhead-B39S2HHi.js";import"./chevron_compact_right_24-DIVGPtpa.js";import"./chevron_16-BZCG5KUX.js";import"./AdaptiveIconRenderer-CCNgnGet.js";import"./reorder_ios_24-DiMTFw9o.js";import"./check_box_on_24-DgOwFitz.js";import"./check_circle_on_24-D3K6OCvg.js";import"./constants-CtEIZ0Vq.js";const st={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const at=["Playground"];export{e as Playground,at as __namedExportsOrder,st as default};
