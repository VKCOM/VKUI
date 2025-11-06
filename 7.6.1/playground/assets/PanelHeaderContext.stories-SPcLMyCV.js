import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-CdtcRMP-.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DAf-bAQq.js";import{D}from"./Div-D8ye_oIP.js";import{P as h}from"./PanelHeaderBack-BtyMJa2D.js";import{P as _}from"./PanelHeaderButton-DVCywEd1.js";import{P as b}from"./PanelHeaderContent-BCgkiCk5.js";import{P as C}from"./PanelHeaderContext-BIsFyoOL.js";import{I as y}from"./dropdown_16-kf5Szos6.js";import{I as S}from"./add_outline_28-DRuVVd39.js";import{I as d}from"./done_24-Dsnn94h2.js";import{I as M}from"./users_outline_28-Bv9oZl4u.js";import{I as w}from"./settings_outline_28-D1UsfSKa.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-nQuC3wCX.js";import"./children-BpYEnGqU.js";import"./IconButton-rnOj30v2.js";import"./Tappable-znRvcKvt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-nnjkiOyK.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-4kqGTgL9.js";import"./VisuallyHidden-CtlI0uOO.js";import"./useConfigDirection-I0bRjt3K.js";import"./useGlobalEventListener-enXvR1yE.js";import"./useEventListener-CidaaUBr.js";import"./cancel_24-DMLedojc.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DSOj1jKk.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-UnTPOYYT.js";import"./Headline-BNe6tvfn.js";import"./Subhead-DKX6pZDk.js";import"./chevron_compact_right_24-lHFnU4Rs.js";import"./chevron_16-cxMQw6Cg.js";import"./AdaptiveIconRenderer-By43qae_.js";import"./reorder_ios_24-srCtDSQP.js";import"./check_box_on_24-BiPwgksd.js";import"./check_circle_on_24-CS4lhGzB.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-758ERfSQ.js";import"./chevron_left_outline_20-BMCptxgE.js";import"./Title-DQC5nBPj.js";import"./useGlobalOnClickOutside-CDT8utyH.js";import"./useCSSKeyframesAnimationController-BU1gjHex.js";const ye={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
