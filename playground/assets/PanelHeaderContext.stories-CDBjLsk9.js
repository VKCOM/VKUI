import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-D2wkiYbA.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-C46aOp-5.js";import{D as h}from"./Div-BSw-xTjx.js";import{P as D}from"./PanelHeaderBack-_bFRmiy6.js";import{P as _}from"./PanelHeaderButton-vD2nOHV6.js";import{P as b}from"./PanelHeaderContent-B6D3aZ4X.js";import{P as C}from"./PanelHeaderContext-BqrOEKOi.js";import{I as y}from"./dropdown_16-BV_8pn8b.js";import{I as S}from"./add_outline_28-CSmAM8u9.js";import{I as d}from"./done_24-D0SbtkPz.js";import{I as M}from"./users_outline_28-BVLKgcUE.js";import{I as w}from"./settings_outline_28-DaCva5cH.js";import"./Removable-DRvNecvI.js";import"./children-Cn4G3p10.js";import"./IconButton-DhTwf-xi.js";import"./Tappable-D1Sdra8V.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BU3u--9M.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-QU0WrbnN.js";import"./VisuallyHidden-ChTSElWV.js";import"./useConfigDirection-DrnKoeri.js";import"./useGlobalEventListener-dinbl7W7.js";import"./useEventListener-CNPrbSFG.js";import"./cancel_24-D23uiKG2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CJ3PYzhx.js";import"./SimpleCell-C3wjlPOp.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-4HzFQCBl.js";import"./Headline-kcgU3LAO.js";import"./Subhead-UUuxM49Y.js";import"./chevron_compact_right_24-4HH2VG6u.js";import"./chevron_16-DD_QuTl2.js";import"./AdaptiveIconRenderer-DEY8O_lK.js";import"./reorder_ios_24-DnNILWgv.js";import"./check_box_on_24-DTKmagV1.js";import"./check_circle_on_24-7347Up76.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-9Ez7mO0R.js";import"./chevron_left_outline_20-CFkuEpie.js";import"./Title-CKYO1nSQ.js";import"./useGlobalOnClickOutside-BLCE7OKW.js";import"./useCSSKeyframesAnimationController-ioo9M73o.js";const _e={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
