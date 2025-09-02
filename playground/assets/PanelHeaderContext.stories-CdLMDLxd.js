import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-WscSQxk_.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DqhTK0pF.js";import{D}from"./Div-CNEoUZ-D.js";import{P as h}from"./PanelHeaderBack-AeK7ZT_w.js";import{P as _}from"./PanelHeaderButton-Bcby9WCn.js";import{P as b}from"./PanelHeaderContent-CUiG5cg3.js";import{P as C}from"./PanelHeaderContext-CUSufSbF.js";import{I as y}from"./dropdown_16-e-7eA5kw.js";import{I as S}from"./add_outline_28-DF9oD9N2.js";import{I as d}from"./done_24-CIHlLbnE.js";import{I as M}from"./users_outline_28-B97KE-cg.js";import{I as w}from"./settings_outline_28-CQJSWAGL.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-BJhZzne5.js";import"./children-PV0P3fmv.js";import"./IconButton-D66RFa5n.js";import"./Tappable-4pvQI-9h.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7ilqGtf.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-JLBJXs47.js";import"./VisuallyHidden-uW7N7P-s.js";import"./useConfigDirection-f8qxYIIC.js";import"./useGlobalEventListener-g9jun4JN.js";import"./useEventListener-DRRpeHIY.js";import"./cancel_24-DRq5Gwy2.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-tB9EhAU6.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DadQ2vZ3.js";import"./Headline-Cv7evErM.js";import"./Subhead-Dng_N-gz.js";import"./chevron_compact_right_24-CjLRRqgU.js";import"./chevron_16-BY28eTD3.js";import"./AdaptiveIconRenderer-Dik8tLCs.js";import"./reorder_ios_24-BnJVoGF4.js";import"./check_box_on_24-CC2KZ1K-.js";import"./check_circle_on_24-Bku_e_js.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-NONp-6CY.js";import"./chevron_left_outline_20-BU3TJ2Cl.js";import"./Title-C_Gav_p7.js";import"./useGlobalOnClickOutside-H0DNbCq_.js";import"./useCSSKeyframesAnimationController-DMXLtvSZ.js";const ye={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Se=["Playground"];export{t as Playground,Se as __namedExportsOrder,ye as default};
