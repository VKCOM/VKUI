import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-qoTtUH8h.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DHDSADlq.js";import{D}from"./Div-FGZmgREe.js";import{P as h}from"./PanelHeaderBack-C6s2F5vC.js";import{P as _}from"./PanelHeaderButton-B6XPCehY.js";import{P as b}from"./PanelHeaderContent-BOG0Ju34.js";import{P as C}from"./PanelHeaderContext-CJi6zgli.js";import{I as y}from"./dropdown_16-9912gJ9O.js";import{I as S}from"./add_outline_28-C9YDbCWy.js";import{I as d}from"./done_24-CMtQKGdL.js";import{I as M}from"./users_outline_28-Bd6R49Hr.js";import{I as w}from"./settings_outline_28-D_Q2f8RX.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-CFszRLWh.js";import"./children-Tz7yKUE7.js";import"./IconButton-B17wjzUA.js";import"./Tappable-D-SlRlKJ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DCqC4s6H.js";import"./VisuallyHidden-BqFtMTWb.js";import"./useConfigDirection-DgRc04K6.js";import"./useGlobalEventListener-stOUD5xR.js";import"./useEventListener-Czd3Qf-C.js";import"./cancel_24-CLPDrLYl.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-CHXFqUrO.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DrM4b0WC.js";import"./Headline-BOHGExn8.js";import"./Subhead-B5MAyB6Q.js";import"./chevron_compact_right_24-DwIrQ_dr.js";import"./chevron_16-BxL5QhO0.js";import"./AdaptiveIconRenderer-Cl69QEek.js";import"./reorder_ios_24-TYe4fChw.js";import"./check_box_on_24-Dx1FKYI7.js";import"./check_circle_on_24-ArRvPyrj.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-BXcJtMzX.js";import"./chevron_left_outline_20-ujKCL-Pw.js";import"./Title-ksxyfi6H.js";import"./useGlobalOnClickOutside-BwI1vE8o.js";import"./useCSSKeyframesAnimationController-B5Q5uN6l.js";const Se={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
