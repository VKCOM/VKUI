import{j as t,w as c,b as u,r as d}from"./iframe-DdZr-4mP.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-DUdnijE9.js";import{G as h}from"./Group-DlK5kh75.js";import{L as a}from"./List-ClT4LxLG.js";import{I}from"./user_outline_28-BA3x9gVN.js";import{I as y}from"./settings_outline_28-C2PSoBH5.js";import{I as C}from"./privacy_outline_28-qSnwxKvl.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-sBXdy_3O.js";import"./children-oqymHkiK.js";import"./IconButton-C7aWXmKO.js";import"./Tappable-CovdKVQt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-J2yyQqq6.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CcKtkKuI.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./useConfigDirection-BdfXEpUn.js";import"./useGlobalEventListener-VexK5DUQ.js";import"./useEventListener-EHs5705p.js";import"./cancel_24-SB-_Mfon.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CIBNVGZX.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-1KqsUf4m.js";import"./Headline-BSoQthvj.js";import"./Subhead-xzDyxoRX.js";import"./chevron_compact_right_24-kk3EfcLj.js";import"./chevron_16-qALKhhss.js";import"./AdaptiveIconRenderer-BjiXmkQi.js";import"./reorder_ios_24-CkN9Xqz2.js";import"./check_box_on_24-Dqh-fiAD.js";import"./check_circle_on_24-Bo96Gt5Z.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const lt=["Playground"];export{i as Playground,lt as __namedExportsOrder,pt as default};
