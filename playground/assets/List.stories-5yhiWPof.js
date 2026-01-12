import{j as t,w as c,b as u,r as d}from"./iframe-BqdgnJE0.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-Bcr1t-wG.js";import{G as h}from"./Group-ONOG8oyY.js";import{L as a}from"./List-B31IOVk-.js";import{I}from"./user_outline_28-DK3DeiyQ.js";import{I as y}from"./settings_outline_28-8xR12Yhy.js";import{I as C}from"./privacy_outline_28-BioZj1Nw.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CQjuFWD6.js";import"./children-rmDURaUl.js";import"./IconButton-C7jcJUXx.js";import"./Tappable-C0ES09y8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-_lommW0d.js";import"./useState-CWGeE8jE.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./InputUtils-ESzsNRN2.js";import"./VisuallyHidden-B5KO6Y_w.js";import"./useConfigDirection-D5bRs-MF.js";import"./useGlobalEventListener-BJBa7VdU.js";import"./useEventListener-C8S8CDSH.js";import"./cancel_24-DLsb6enM.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-_uNqJntM.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Bj-28HDg.js";import"./Headline-ByN4fZVg.js";import"./Subhead-ubP323Lg.js";import"./chevron_compact_right_24-BvUpUGT6.js";import"./chevron_16-DLrfULAr.js";import"./AdaptiveIconRenderer-CDzx7HHu.js";import"./reorder_ios_24-Basz8dwa.js";import"./check_box_on_24-DR_37w56.js";import"./check_circle_on_24-B7hJoFmH.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},i={render:function({items:o,...m}){const[e,p]=d.useState(o),l=({from:r,to:g})=>{const n=[...e];n.splice(r,1),n.splice(g,0,e[r]),p(n)};return t.jsx(a,{...m,children:e.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(h,{children:t.jsx(s,{...o.args})}),c,u]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
