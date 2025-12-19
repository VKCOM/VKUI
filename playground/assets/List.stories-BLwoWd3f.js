import{j as t,w as c,b as u,r as d}from"./iframe-CGSrC79H.js";import{D as f,C as L}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{C as x}from"./Cell-CNqxogX7.js";import{G as h}from"./Group-DH0PWTW1.js";import{L as a}from"./List-dPGu5bye.js";import{I}from"./user_outline_28-CMyujfQ8.js";import{I as y}from"./settings_outline_28-CoZ7LHO8.js";import{I as C}from"./privacy_outline_28-B08kJKRr.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-D5hMMeds.js";import"./children-C-hCqQRI.js";import"./IconButton-Bq_FXaCp.js";import"./Tappable-HtqfSGDW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DvGk0QGJ.js";import"./useState-DzaGsmJ4.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./InputUtils-AL_dRhAR.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./useConfigDirection-BDt5-3HT.js";import"./cancel_24-CsoSQ93Z.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DfFeOU4d.js";import"./Footnote-9-fttdTG.js";import"./Headline-DOU82LYx.js";import"./Subhead-BDUGOuQB.js";import"./chevron_compact_right_24-BeoeYfvX.js";import"./chevron_16-IEGQRb6X.js";import"./AdaptiveIconRenderer-CSGInP8-.js";import"./reorder_ios_24-BjFEO8Vc.js";import"./check_box_on_24-C-ecraaY.js";import"./check_circle_on_24-e1d1quHA.js";import"./constants-CtEIZ0Vq.js";const st={title:"Buttons/Cell/List",component:a,parameters:b("List",L,f)},e={render:function({items:i,...m}){const[o,p]=d.useState(i),l=({from:r,to:g})=>{const n=[...o];n.splice(r,1),n.splice(g,0,o[r]),p(n)};return t.jsx(a,{...m,children:o.map(r=>t.jsx(x,{before:r.before,draggable:!0,onDragFinish:l,children:r.title},r.title))})},args:{items:[{before:t.jsx(I,{}),title:"Учетная запись"},{before:t.jsx(y,{}),title:"Основные"},{before:t.jsx(C,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(h,{children:t.jsx(s,{...i.args})}),c,u]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
