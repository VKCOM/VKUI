import{j as t,w as c,b as u,r as d}from"./iframe-DvQ0hW0I.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-BAZKofZQ.js";import{G as h}from"./Group-DlJj6tsg.js";import{L as a}from"./List-egVs-sRx.js";import{I}from"./user_outline_28-DAsUJaP_.js";import{I as y}from"./settings_outline_28-Doh0D72a.js";import{I as C}from"./privacy_outline_28-DEpqbk9W.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-B6FxApdQ.js";import"./children-BdLlg6DR.js";import"./IconButton-Dmx4oOAb.js";import"./Tappable-CzBKs2NQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBovrC6X.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BSmatczf.js";import"./VisuallyHidden-CGlAvVNH.js";import"./useConfigDirection-DmTY1Se6.js";import"./useGlobalEventListener-Cq3tChGi.js";import"./useEventListener-BWoYhQmZ.js";import"./cancel_24-BcD8qa0A.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-B1KXyTvt.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DYSqrBFj.js";import"./Headline-U_eDzwn1.js";import"./Subhead-DE0FovKO.js";import"./chevron_compact_right_24-CrJLC7s5.js";import"./chevron_16-m8pRWD8o.js";import"./AdaptiveIconRenderer-Co7qE9ki.js";import"./reorder_ios_24-BZR57aXa.js";import"./check_box_on_24-DzSBkyrV.js";import"./check_circle_on_24-DystyaVO.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
