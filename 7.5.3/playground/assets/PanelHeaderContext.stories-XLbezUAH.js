import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-VQuwIBim.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-SlhzKCcn.js";import{D as h}from"./Div-D-5DCfD7.js";import{P as D}from"./PanelHeaderBack-BCacLBn1.js";import{P as _}from"./PanelHeaderButton-DJT3S1vC.js";import{P as b}from"./PanelHeaderContent-DMRgPH_b.js";import{P as C}from"./PanelHeaderContext-m5fAkHN7.js";import{I as y}from"./dropdown_16-DljcB67S.js";import{I as S}from"./add_outline_28-DRKeCzVb.js";import{I as d}from"./done_24-DgS-t7MA.js";import{I as M}from"./users_outline_28-CXN3-JYF.js";import{I as w}from"./settings_outline_28-DxvniYwj.js";import"./Removable-B69Ae71z.js";import"./children-DbSAwzjm.js";import"./IconButton-CsO6Fs2D.js";import"./Tappable-DJKRXU4j.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-GKvDpg7c.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-esLGIMz7.js";import"./VisuallyHidden-Bn9barOE.js";import"./useConfigDirection-BhKWnP92.js";import"./useGlobalEventListener-Dg2G1Bu3.js";import"./useEventListener-buG494Se.js";import"./cancel_24-76PwI_pT.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./SimpleCell-Bx23Z_Ak.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CFr_RCRn.js";import"./Headline-DlMci9v_.js";import"./Subhead-BovRsuwk.js";import"./chevron_compact_right_24-NA_iCiSP.js";import"./chevron_16-CrLMruU6.js";import"./AdaptiveIconRenderer-BncaVmUu.js";import"./reorder_ios_24-CgAqhjsg.js";import"./check_box_on_24-Dr4fiKV4.js";import"./check_circle_on_24-BhaJOotW.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-BNUSJPAR.js";import"./chevron_left_outline_20-DULcAu75.js";import"./Title-kPzeN8_R.js";import"./useGlobalOnClickOutside-CjPG_8Vr.js";import"./useCSSKeyframesAnimationController-HtBdBNNP.js";const be={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const ye=["Playground"];export{t as Playground,ye as __namedExportsOrder,be as default};
