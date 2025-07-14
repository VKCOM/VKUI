import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-A37C1jR-.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-Ci22DGdt.js";import{D as h}from"./Div-DXQgKS_4.js";import{P as D}from"./PanelHeaderBack-GRk06dO8.js";import{P as _}from"./PanelHeaderButton-DbPVlTUR.js";import{P as b}from"./PanelHeaderContent-z7CJwdtl.js";import{P as C}from"./PanelHeaderContext-y6KlIa9G.js";import{I as y}from"./dropdown_16-Bjv5BQCV.js";import{I as S}from"./add_outline_28-DZPHvY5Z.js";import{I as d}from"./done_24-cDxC1rP0.js";import{I as M}from"./users_outline_28-Cx_wO4RT.js";import{I as w}from"./settings_outline_28-PlJl46af.js";import"./Removable-YvJNJGGv.js";import"./children-CHwlOS0u.js";import"./IconButton-DbMMimp0.js";import"./Tappable-bphv_Btw.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-yIrZH96-.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1lt5OkO.js";import"./VisuallyHidden-DX4ud0qi.js";import"./useConfigDirection-EbyEgXYN.js";import"./useGlobalEventListener-Cm_NgAlW.js";import"./useEventListener-YcbCw0KM.js";import"./cancel_24-Cwv97N5Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-qP_PfTnQ.js";import"./SimpleCell-DQPKEDPo.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DEEoTBIm.js";import"./Headline-CWoDuoSH.js";import"./Subhead-BEeAaWS4.js";import"./chevron_compact_right_24-B5zmhySD.js";import"./chevron_16-DOWOaZPd.js";import"./AdaptiveIconRenderer-BiY9YK_m.js";import"./reorder_ios_24-DFJ54ZcX.js";import"./check_box_on_24-DAmXux97.js";import"./check_circle_on_24-DzAT-CYG.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-1djEvebm.js";import"./chevron_left_outline_20-DgMNq689.js";import"./Title-CFAhKLGN.js";import"./useGlobalOnClickOutside-CkQ5LrVl.js";import"./useCSSKeyframesAnimationController-am5UefGp.js";const _e={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
