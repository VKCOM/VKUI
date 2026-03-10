import{w as x,r as l,j as e,V as f,P,a as g,n as s}from"./iframe-OAvG3iJ-.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DuZuXofC.js";import{D as I}from"./Div-B-UZ3w6w.js";import{P as k}from"./PanelHeaderBack-v8MvBtxb.js";import{P as O}from"./PanelHeaderButton-hsXPaBRD.js";import{P as D}from"./PanelHeaderContent-9h1gZ1fl.js";import{P as c}from"./PanelHeaderContext-DJuxFsgN.js";import{I as h}from"./dropdown_16-Cpi-KV1z.js";import{I as _}from"./add_outline_28-BvPtuqfS.js";import{I as d}from"./done_24-DRhCYrBB.js";import{I as y}from"./users_outline_28-BX0EKMwC.js";import{I as S}from"./settings_outline_28-Yxy0cCCY.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-rqcSgsVP.js";import"./children-jmMlROp9.js";import"./IconButton-B0ADo2bb.js";import"./Tappable-hYlNxVzd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./InputUtils-D-RvHd2H.js";import"./VisuallyHidden-W5VCXPiv.js";import"./useConfigDirection-EOrqXudq.js";import"./cancel_24-CjsEvKIV.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DUlLPGhw.js";import"./Footnote-Fnz7EDP7.js";import"./Headline-7nMwixf1.js";import"./Subhead-Bec_-0uq.js";import"./chevron_compact_right_24-_NSNPn6R.js";import"./chevron_16-BS2dVy5C.js";import"./AdaptiveIconRenderer-Dg4c0pLA.js";import"./reorder_ios_24-DarQ-ukl.js";import"./check_box_on_24-BSVcQ9Iw.js";import"./check_circle_on_24-BdyPhlE2.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-CZwKdYcl.js";import"./chevron_left_outline_20-BgIlB_0R.js";import"./Title-AFjtFc-5.js";import"./useGlobalOnClickOutside-BeiE0_bp.js";import"./FixedLayout-DVjTZC8R.js";import"./useResizeObserver-DJRlueoO.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-DnCAMIpr.js";const ye={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(y,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(S,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const Se=["Playground"];export{t as Playground,Se as __namedExportsOrder,ye as default};
