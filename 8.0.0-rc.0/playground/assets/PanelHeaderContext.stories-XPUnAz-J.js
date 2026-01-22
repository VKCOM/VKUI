import{b as x,r as l,j as e,V as f,f as P,P as g,n as s}from"./iframe-CWLi0Dwx.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BaKeF3zh.js";import{D as I}from"./Div-62HEDd-e.js";import{P as k}from"./PanelHeaderBack-Br4v5JbH.js";import{P as O}from"./PanelHeaderButton-DmnQ5iiZ.js";import{P as D}from"./PanelHeaderContent-_GnXVL1Y.js";import{P as c}from"./PanelHeaderContext-DKfQhmuy.js";import{I as h}from"./dropdown_16-aPeO9u78.js";import{I as _}from"./add_outline_28-rFkK6lvC.js";import{I as d}from"./done_24-Dq-XOX4V.js";import{I as b}from"./users_outline_28-D_TNTN8u.js";import{I as y}from"./settings_outline_28-CSczw9OG.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-DbtKpkoR.js";import"./children-o7IWS_m7.js";import"./IconButton-DltQDU2z.js";import"./Tappable-BfbUNvge.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-qvNFYhPA.js";import"./useState-B6GpLt4z.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C_mTcJQY.js";import"./InputUtils-y46vV6Lq.js";import"./VisuallyHidden-DcnlEFVn.js";import"./useConfigDirection-EPKxpKX2.js";import"./cancel_24-k8gLLgTE.js";import"./SvgIconRootV2-BTF9teUl.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DMUbLJWk.js";import"./Footnote-uuGEAWzo.js";import"./Headline-BBfhp0Vp.js";import"./Subhead-BNTLgiWX.js";import"./chevron_compact_right_24-Dab3JeUv.js";import"./chevron_16-SZNMdhZS.js";import"./AdaptiveIconRenderer-hRcm_dd1.js";import"./reorder_ios_24-hj8b2gpk.js";import"./check_box_on_24-UkSxJzoK.js";import"./check_circle_on_24-CeocUogp.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-BWjXhAwp.js";import"./chevron_left_outline_20-C0ihW9l8.js";import"./Title-B966ALEh.js";import"./useGlobalOnClickOutside-0BTdwTMT.js";import"./FixedLayout-D-fbeQsv.js";import"./useResizeObserver-dudkZJs-.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-CK97G-K-.js";const be={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ye=["Playground"];export{t as Playground,ye as __namedExportsOrder,be as default};
