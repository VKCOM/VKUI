import{j as t,w as c,b as u,r as d}from"./iframe-BKqRoeRO.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-wI4yBQPC.js";import{G as h}from"./Group-CgxNLM1q.js";import{L as a}from"./List-BmBLj3Nc.js";import{I}from"./user_outline_28-CvC0IyxL.js";import{I as y}from"./settings_outline_28-Dtx9CAUs.js";import{I as C}from"./privacy_outline_28-C5zrfxru.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-BbK5TlWA.js";import"./children-Bm1QhBGC.js";import"./IconButton-CDypKmxT.js";import"./Tappable-EPRrmr_0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CadgeLyo.js";import"./useState-Db1sLetb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./InputUtils-CQaATz1N.js";import"./VisuallyHidden-B-uFrHKw.js";import"./useConfigDirection-BH9mMD5y.js";import"./cancel_24-C2B5W1bI.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-SUBlx-6Z.js";import"./Footnote-BAb4Skv3.js";import"./Headline-CPNK2PuC.js";import"./Subhead-B3U-hqtC.js";import"./chevron_compact_right_24-C8sV5QGI.js";import"./chevron_16-o7PR2C3U.js";import"./AdaptiveIconRenderer-BhgbmtGf.js";import"./reorder_ios_24-DRf9w8zq.js";import"./check_box_on_24-7AEumDVf.js";import"./check_circle_on_24-DLZ-Vi44.js";import"./constants-CtEIZ0Vq.js";const st={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
