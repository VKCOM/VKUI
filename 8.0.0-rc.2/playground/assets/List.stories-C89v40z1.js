import{j as t,b as c,w as u,r as d}from"./iframe-C4bTyPBQ.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-DxOvdLcw.js";import{G as h}from"./Group-B0qSQvWx.js";import{L as a}from"./List-C9nNKkDx.js";import{I}from"./user_outline_28-D-g9bq5I.js";import{I as y}from"./settings_outline_28-DwjkmSNJ.js";import{I as C}from"./privacy_outline_28-PWhkjBvT.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CbiJXY2P.js";import"./children-DNxvoAyX.js";import"./IconButton-BXe704ZF.js";import"./Tappable-BZW__-HP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./InputUtils-Ns7QNyDT.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./useConfigDirection-OBrCdmzr.js";import"./cancel_24-BKCyLyjW.js";import"./SvgIconRootV2-DbftVVP5.js";import"./SimpleCell-3wWwuzOF.js";import"./Footnote-wW_hecXF.js";import"./Headline-B4T2ew9V.js";import"./Subhead-CGMBr7DJ.js";import"./chevron_compact_right_24-9Y_UhAEg.js";import"./chevron_16-D1zTg27u.js";import"./AdaptiveIconRenderer-COrX8BE5.js";import"./reorder_ios_24-Cx33pzZY.js";import"./check_box_on_24-C22hmiDf.js";import"./check_circle_on_24-BRHOjbxr.js";import"./constants-CtEIZ0Vq.js";const nt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const st=["Playground"];export{e as Playground,st as __namedExportsOrder,nt as default};
