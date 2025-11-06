import{j as t,w as f,b as L,r as b}from"./iframe-OJ1C6fMc.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-Dzm8oIkw.js";import{G as C}from"./Group-MuPGSLP-.js";import{L as l}from"./List-BrhyUujP.js";import{I as j}from"./user_outline_28-CsfF-ibY.js";import{I as D}from"./settings_outline_28-uVK7IUPG.js";import{I as P}from"./privacy_outline_28-BEonAO-0.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-XkV2WchN.js";import"./children-BFlZwmuK.js";import"./IconButton-Bt_Y57sB.js";import"./Tappable-BvI9Mb-u.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DKzQKlVj.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CNd9WeYt.js";import"./VisuallyHidden-BNf-15JI.js";import"./useConfigDirection-jCjot1AW.js";import"./useGlobalEventListener-D2antHno.js";import"./useEventListener-5I8DZFbr.js";import"./cancel_24-DkgWneF3.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-D--1IUdV.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-JF6_a0Sk.js";import"./Headline-BAyAnA5C.js";import"./Subhead-DtXruDSo.js";import"./chevron_compact_right_24-FepVsEG1.js";import"./chevron_16-Bphhpetu.js";import"./AdaptiveIconRenderer-87jEr__2.js";import"./reorder_ios_24-C-dH2Zh-.js";import"./check_box_on_24-DEIThGh8.js";import"./check_circle_on_24-D21GxUqE.js";import"./constants-CtEIZ0Vq.js";const gt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},i={render:function({items:o,...g}){const[e,c]=b.useState(o),u=({from:r,to:d})=>{const n=[...e];n.splice(r,1),n.splice(d,0,e[r]),c(n)};return t.jsx(l,{...g,children:e.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,o)=>t.jsx(C,{children:t.jsx(s,{...o.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ct=["Playground"];export{i as Playground,ct as __namedExportsOrder,gt as default};
