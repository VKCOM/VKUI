import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-CGpIZMk8.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BGcMNrSH.js";import{D as h}from"./Div-cCW-yehp.js";import{P as D}from"./PanelHeaderBack-Dfx8nVVp.js";import{P as _}from"./PanelHeaderButton-HTx-07Vp.js";import{P as b}from"./PanelHeaderContent-CiaDKYeX.js";import{P as C}from"./PanelHeaderContext-7uUHFrcC.js";import{I as y}from"./dropdown_16-DkWJvpKL.js";import{I as S}from"./add_outline_28-BZqDD9Mf.js";import{I as d}from"./done_24-LllbmcZ6.js";import{I as M}from"./users_outline_28-D1q3t6OL.js";import{I as w}from"./settings_outline_28-CZXlhNFw.js";import"./Removable-v2sol_eW.js";import"./children-BbEaAOxK.js";import"./IconButton-R-pBWVQH.js";import"./Tappable-BEdABn7b.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D9pe1RI2.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Z7In03iI.js";import"./VisuallyHidden-CdBh7Iry.js";import"./useConfigDirection-Dz_AGVHb.js";import"./useGlobalEventListener-CwAATl2v.js";import"./useEventListener-OpwGLEa0.js";import"./cancel_24-X3lt1W_w.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./SimpleCell-BUqMdJ_G.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DPd01TxJ.js";import"./Headline-ZBoX0yvc.js";import"./Subhead-D_tBif6E.js";import"./chevron_compact_right_24-BC9MCbgO.js";import"./chevron_16-C7AVBXEj.js";import"./AdaptiveIconRenderer-bgOpWVtv.js";import"./reorder_ios_24-DYQT-ClO.js";import"./check_box_on_24-DmUu7cw7.js";import"./check_circle_on_24-DYgOR3Wd.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-CCfp3LtF.js";import"./chevron_left_outline_20-anyUvaXU.js";import"./Title-Bh0cFv1G.js";import"./useGlobalOnClickOutside-DtS-d3OY.js";import"./useCSSKeyframesAnimationController-CCyEmZht.js";const be={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
