import{j as t,w as f,b as L,r as b}from"./iframe-A37C1jR-.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-Ci22DGdt.js";import{G as C}from"./Group-CpVZcUzJ.js";import{L as l}from"./List-CUxIoDf0.js";import{I as j}from"./user_outline_28-N7CefwMv.js";import{I as D}from"./settings_outline_28-PlJl46af.js";import{I as P}from"./privacy_outline_28-CahP8UQM.js";import"./Removable-YvJNJGGv.js";import"./children-CHwlOS0u.js";import"./IconButton-DbMMimp0.js";import"./Tappable-bphv_Btw.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-yIrZH96-.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1lt5OkO.js";import"./VisuallyHidden-DX4ud0qi.js";import"./useConfigDirection-EbyEgXYN.js";import"./useGlobalEventListener-Cm_NgAlW.js";import"./useEventListener-YcbCw0KM.js";import"./cancel_24-Cwv97N5Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-qP_PfTnQ.js";import"./SimpleCell-DQPKEDPo.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DEEoTBIm.js";import"./Headline-CWoDuoSH.js";import"./Subhead-BEeAaWS4.js";import"./chevron_compact_right_24-B5zmhySD.js";import"./chevron_16-DOWOaZPd.js";import"./AdaptiveIconRenderer-BiY9YK_m.js";import"./reorder_ios_24-DFJ54ZcX.js";import"./check_box_on_24-DAmXux97.js";import"./check_circle_on_24-DzAT-CYG.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},e={render:function({items:i,...g}){const[o,c]=b.useState(i),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(C,{children:t.jsx(s,{...i.args})}),f,L]};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const lt=["Playground"];export{e as Playground,lt as __namedExportsOrder,pt as default};
