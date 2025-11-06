import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-gnG2DlPI.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DOsZTVQv.js";import{D}from"./Div-DhknKQKb.js";import{P as h}from"./PanelHeaderBack-B5HArLiC.js";import{P as _}from"./PanelHeaderButton-DE1FFYyv.js";import{P as b}from"./PanelHeaderContent-DKHHaBoZ.js";import{P as C}from"./PanelHeaderContext-D90ge-C2.js";import{I as y}from"./dropdown_16-DYi3Y-Bu.js";import{I as S}from"./add_outline_28-B4RXPYek.js";import{I as d}from"./done_24-zHG1wouH.js";import{I as M}from"./users_outline_28-BdsQn2mA.js";import{I as w}from"./settings_outline_28-C5M_9m_D.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-DDpdMjUf.js";import"./children-f2sIKLUn.js";import"./IconButton-Cf4dAO-u.js";import"./Tappable-03YLyRIn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CEzYBb4W.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bge3OIaY.js";import"./VisuallyHidden-CKM3u7Sn.js";import"./useConfigDirection-Dd3ud1i-.js";import"./useGlobalEventListener-BrlIfad1.js";import"./useEventListener-BZo6MitC.js";import"./cancel_24-D159N_1T.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-BCPsJbDr.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CONk622S.js";import"./Headline-K5SxFgY1.js";import"./Subhead-CTHKnpeS.js";import"./chevron_compact_right_24-DzsR3cYI.js";import"./chevron_16-UahDaYU4.js";import"./AdaptiveIconRenderer-QV1MdQeO.js";import"./reorder_ios_24-CXYouv79.js";import"./check_box_on_24-qoQEq3lL.js";import"./check_circle_on_24-B7QwB07X.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-C60arpqC.js";import"./chevron_left_outline_20-S4du1SZv.js";import"./Title-B3iIrqRR.js";import"./useGlobalOnClickOutside-DUaMRA_1.js";import"./useCSSKeyframesAnimationController-DLx7JZ4K.js";const ye={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
