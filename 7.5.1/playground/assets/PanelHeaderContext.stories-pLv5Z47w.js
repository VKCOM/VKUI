import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-DSAhScPT.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-CO3a19JY.js";import{D as h}from"./Div-sIjL3Q3w.js";import{P as D}from"./PanelHeaderBack-C-J2rQae.js";import{P as _}from"./PanelHeaderButton-DOn4fMzv.js";import{P as b}from"./PanelHeaderContent-CBxZyq1B.js";import{P as C}from"./PanelHeaderContext-BDBBAXbm.js";import{I as y}from"./dropdown_16-Crv4Zh1r.js";import{I as S}from"./add_outline_28-DaPyYI9w.js";import{I as d}from"./done_24-DK4ggY__.js";import{I as M}from"./users_outline_28-lW9xKrRU.js";import{I as w}from"./settings_outline_28-CVOGBsQ4.js";import"./Removable-D5ZrDV4g.js";import"./children-Dz6__HWn.js";import"./IconButton-CDVak2Pm.js";import"./Tappable-41du4Si_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-6oth1gD7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CLCgtllv.js";import"./VisuallyHidden-DIyQgeho.js";import"./useConfigDirection-Dm4173QE.js";import"./useGlobalEventListener-CiW_WKtR.js";import"./useEventListener-DJyKCYx1.js";import"./cancel_24-5SKzeyoh.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CIYgEGRf.js";import"./SimpleCell-CyR_YWOH.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BKhvF0_1.js";import"./Headline-CdViHbNM.js";import"./Subhead-CkgCAX-J.js";import"./chevron_compact_right_24-CbW-PUYO.js";import"./chevron_16-NGFInKyj.js";import"./AdaptiveIconRenderer-Cj0grb3P.js";import"./reorder_ios_24-C7_Asgli.js";import"./check_box_on_24-DwZfeea6.js";import"./check_circle_on_24-padOJU7B.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-CpTLzWYX.js";import"./chevron_left_outline_20-CkWRsy8s.js";import"./Title-CtXU7qo4.js";import"./useGlobalOnClickOutside-DPwfoaaT.js";import"./useCSSKeyframesAnimationController-Cratd2Qk.js";const _e={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
