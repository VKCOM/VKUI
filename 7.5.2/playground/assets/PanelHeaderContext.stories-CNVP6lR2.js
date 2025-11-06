import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-BzXYREd1.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-CIK6qelj.js";import{D as h}from"./Div-_rflgTc6.js";import{P as D}from"./PanelHeaderBack-D2vaAK4v.js";import{P as _}from"./PanelHeaderButton-Tdeqy5UO.js";import{P as b}from"./PanelHeaderContent-COSa5fVS.js";import{P as C}from"./PanelHeaderContext-Du2-SHXU.js";import{I as y}from"./dropdown_16-ClwHZ__q.js";import{I as S}from"./add_outline_28-D11tHD7y.js";import{I as d}from"./done_24-BODqotcw.js";import{I as M}from"./users_outline_28-C5RObMhS.js";import{I as w}from"./settings_outline_28-bgrX0d23.js";import"./Removable-CqorhSR_.js";import"./children-Cg6pG0uN.js";import"./IconButton-DmYSjyYz.js";import"./Tappable-CEn82fQ0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DoSI9phS.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DULFm0M2.js";import"./VisuallyHidden-CGoUHCA9.js";import"./useConfigDirection-EqB_hZQh.js";import"./useGlobalEventListener-B6vpDla7.js";import"./useEventListener-BVPfg_EC.js";import"./cancel_24-CYr0_4vC.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-B6ey8g7O.js";import"./SimpleCell-5Dhw212S.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ChYIirVi.js";import"./Headline-CvUEvu-v.js";import"./Subhead-fVUucS5M.js";import"./chevron_compact_right_24-D2odf8KU.js";import"./chevron_16-BAw61TxE.js";import"./AdaptiveIconRenderer-DQJoMb-5.js";import"./reorder_ios_24-ClVg3dp1.js";import"./check_box_on_24-N2P4yWce.js";import"./check_circle_on_24-DGqsU1xy.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DRpK4OSC.js";import"./chevron_left_outline_20-DVvIs5zx.js";import"./Title-2928E8uu.js";import"./useGlobalOnClickOutside-BP-sLOZL.js";import"./useCSSKeyframesAnimationController-B7txIYU8.js";const _e={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const be=["Playground"];export{t as Playground,be as __namedExportsOrder,_e as default};
