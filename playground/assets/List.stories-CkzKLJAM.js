import{j as t,w as f,b as L,r as b}from"./iframe-DTUKIQpa.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-CfSSn24T.js";import{G as j}from"./Group-CZGORHer.js";import{L as l}from"./List-N3AbHvpH.js";import{I as C}from"./user_outline_28-BYCjKU0n.js";import{I as D}from"./settings_outline_28-CeeikySN.js";import{I as P}from"./privacy_outline_28-0WnbmYGW.js";import"./Removable-Cld3TR36.js";import"./children-B8YsjXFx.js";import"./IconButton-Dy9SRYqV.js";import"./Tappable-Br6ZM5HO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DRtJbe2S.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Db1DLuWS.js";import"./VisuallyHidden-B0Nb8Auz.js";import"./useConfigDirection-Cb5ryD04.js";import"./useGlobalEventListener-D8BL8vid.js";import"./useEventListener-DzYdBFwg.js";import"./cancel_24-BG0iu8qf.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-UH6uLjn4.js";import"./SimpleCell-CDk2kNxF.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-rQhC0WQs.js";import"./Headline-DPZ9LHy_.js";import"./Subhead-C7vbIoTq.js";import"./chevron_compact_right_24-DIcKAlfH.js";import"./chevron_16-BuSYZLHG.js";import"./AdaptiveIconRenderer-BIF-AAH3.js";import"./reorder_ios_24-CsfHOuR7.js";import"./check_box_on_24-C3zzNqq8.js";import"./check_circle_on_24-DGwl3f4B.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Blocks/List",component:l,parameters:I("List",h,x)},i={render:function({items:e,...g}){const[o,c]=b.useState(e),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(C,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,e)=>t.jsx(j,{children:t.jsx(s,{...e.args})}),f,L]};var a,m,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const lt=["Playground"];export{i as Playground,lt as __namedExportsOrder,pt as default};
