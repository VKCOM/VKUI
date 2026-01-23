import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-KtxhC7Vu.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-CUXYg48g.js";import{D as I}from"./Div-Cl3VjR5_.js";import{P as k}from"./PanelHeaderBack-BRWQvPNW.js";import{P as O}from"./PanelHeaderButton-C5TbqC5W.js";import{P as D}from"./PanelHeaderContent-DPUsIeVO.js";import{P as c}from"./PanelHeaderContext-BPBqX-K_.js";import{I as h}from"./dropdown_16-nmYQcQ7C.js";import{I as _}from"./add_outline_28-B-I21paA.js";import{I as d}from"./done_24-CHGucVJd.js";import{I as b}from"./users_outline_28-bvlWRBv0.js";import{I as y}from"./settings_outline_28-OSVaXR-H.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CpxKd1Q1.js";import"./children-BMwCSNmp.js";import"./IconButton-DubnwX4y.js";import"./Tappable-BHKu77gD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zoSQNYwS.js";import"./useState-D1V9wQJY.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./InputUtils-BueJ8J_Y.js";import"./VisuallyHidden-8TqRJKxj.js";import"./useConfigDirection-CX53j0Ve.js";import"./useGlobalEventListener-CospsVY6.js";import"./useEventListener-DNTY0hjA.js";import"./cancel_24-B2bpUHqP.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-D5ovT9LX.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-lwK0vUsu.js";import"./Headline-DXbYuoNY.js";import"./Subhead-AWezZjK6.js";import"./chevron_compact_right_24-BiCeP8Qk.js";import"./chevron_16-DnFY0g9o.js";import"./AdaptiveIconRenderer-QcQ1TbWH.js";import"./reorder_ios_24-D-IURhsp.js";import"./check_box_on_24-8HdQZOQP.js";import"./check_circle_on_24-BWXad4v9.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-oaPpT6j3.js";import"./chevron_left_outline_20-DwzXMy22.js";import"./Title-Cl0PGkVH.js";import"./useGlobalOnClickOutside-fF6T54Dc.js";import"./useCSSKeyframesAnimationController-ZdoDVZt_.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [contextOpened, setContextOpened] = React.useState(true);
    const [mode, setMode] = React.useState<string | undefined>('all');
    const toggleContext = () => {
      setContextOpened(prev => !prev);
    };
    const select = (e: React.MouseEvent<HTMLElement>) => {
      const mode = e.currentTarget.dataset.mode;
      setMode(mode);
      requestAnimationFrame(toggleContext);
    };
    return <View id="main" activePanel="panel1">
        <Panel id="panel1">
          <PanelHeader before={<PanelHeaderBack onClick={noop} />} after={<PanelHeaderButton onClick={noop}>
                <Icon28AddOutline />
              </PanelHeaderButton>}>
            <PanelHeaderContent aside={<Icon16Dropdown style={{
            transform: \`rotate(\${contextOpened ? '180deg' : '0'})\`
          }} />} onClick={toggleContext}>
              Communities
            </PanelHeaderContent>
          </PanelHeader>
          <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>
            <Cell before={<Icon28UsersOutline />} after={mode === 'all' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="all">
              Communities
            </Cell>
            <Cell before={<Icon28SettingsOutline />} after={mode === 'managed' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="managed">
              Managed Communities
            </Cell>
          </PanelHeaderContext>
          <Div>PanelHeaderContext</Div>
        </Panel>
      </View>;
  }
}`,...t.parameters?.docs?.source}}};const be=["Playground"];export{t as Playground,be as __namedExportsOrder,_e as default};
