import{j as t,w as c,b as u,r as d}from"./iframe-DP0c1f9Y.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-BMthsHY3.js";import{G as h}from"./Group-uVVNnULv.js";import{L as a}from"./List-ZXOMscga.js";import{I}from"./user_outline_28-BktbLBkd.js";import{I as y}from"./settings_outline_28-CtMQ461e.js";import{I as C}from"./privacy_outline_28-B6K1ZF61.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-BE-e-wqK.js";import"./children-Bag1sNQQ.js";import"./IconButton-DX6zaS9g.js";import"./Tappable-B2ZLiGfg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./InputUtils-DpvhaK12.js";import"./VisuallyHidden-CsBByQHJ.js";import"./useConfigDirection-BNkwGAZM.js";import"./cancel_24-Cb6nnPMq.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./SimpleCell-BUlM7B6J.js";import"./Footnote-DJoQQEv9.js";import"./Headline-D5yVS7YY.js";import"./Subhead-CZ6CT0II.js";import"./chevron_compact_right_24-DRgaqZzi.js";import"./chevron_16-CM-SIi30.js";import"./AdaptiveIconRenderer-C6EgprXt.js";import"./reorder_ios_24-Wjb1gd-Q.js";import"./check_box_on_24-D_JjkFdP.js";import"./check_circle_on_24-Bf67vp3K.js";import"./constants-CtEIZ0Vq.js";const nt={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
