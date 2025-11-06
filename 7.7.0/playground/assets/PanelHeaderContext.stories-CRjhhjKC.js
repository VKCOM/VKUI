import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-B4SbMwac.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-pnWZseGv.js";import{D}from"./Div-BYUBXKL5.js";import{P as h}from"./PanelHeaderBack-CkOODDj2.js";import{P as _}from"./PanelHeaderButton-QyaDVEWX.js";import{P as b}from"./PanelHeaderContent-Bx49aN6t.js";import{P as C}from"./PanelHeaderContext-Sexo07Vr.js";import{I as y}from"./dropdown_16-UoKs_Udz.js";import{I as S}from"./add_outline_28-DMaInsdu.js";import{I as d}from"./done_24-CEJ1Be1I.js";import{I as M}from"./users_outline_28-CLU1gUvr.js";import{I as w}from"./settings_outline_28-BAL-8hGB.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-BMbXMjJQ.js";import"./children-hJQIY4yI.js";import"./IconButton-BrekU4vj.js";import"./Tappable-DlzKIRC8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-LHka_ZWc.js";import"./useFocusVisible-CA0gmOpw.js";import"./useFocusVisibleClassName-CYMT8ouX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C948cbKc.js";import"./VisuallyHidden-B_fMC41X.js";import"./useConfigDirection-D94ZyAhW.js";import"./useGlobalEventListener-CEYAu_n8.js";import"./useEventListener-D7G2gz9_.js";import"./cancel_24-BiaNkhfM.js";import"./SvgIconRootV2-CSlzNDT1.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-B3xHvs3D.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-PzIaqeP1.js";import"./Headline-DyfFpR9w.js";import"./Subhead-BszjoIm7.js";import"./chevron_compact_right_24-Bbxtve_V.js";import"./chevron_16-DNg3QADm.js";import"./AdaptiveIconRenderer-CR9XwE1z.js";import"./reorder_ios_24-BRQYG2yD.js";import"./check_box_on_24-DYECzjEP.js";import"./check_circle_on_24-C-1w6mRA.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-RkgIptks.js";import"./chevron_left_outline_20-B7gtEROt.js";import"./Title-BLmuK8KQ.js";import"./useGlobalOnClickOutside-CiWqRuxg.js";import"./useCSSKeyframesAnimationController-CFw2zgDY.js";const Se={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Me=["Playground"];export{t as Playground,Me as __namedExportsOrder,Se as default};
