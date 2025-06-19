import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-k6odcVfq.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-PL4IxNDy.js";import{D as h}from"./Div-D-XRRz9f.js";import{P as D}from"./PanelHeaderBack-hdh0BKdZ.js";import{P as _}from"./PanelHeaderButton-GCQOmFAe.js";import{P as y}from"./PanelHeaderContent-CdoggLq0.js";import{P as C}from"./PanelHeaderContext-DdUQUE2t.js";import{I as b}from"./dropdown_16-Dvrh7n78.js";import{I as S}from"./add_outline_28-D6S9ITL8.js";import{I as d}from"./done_24-B1_MA00q.js";import{I as M}from"./users_outline_28-yEh1nkpA.js";import{I as w}from"./settings_outline_28-BrR49s3x.js";import"./Removable-DCOjXm07.js";import"./children-CYWK7spH.js";import"./IconButton-dHj7AK-z.js";import"./Tappable-CLnVjIR_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D_pv1CFG.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1ugcw4m.js";import"./VisuallyHidden-D-1P4bzL.js";import"./useConfigDirection-CxnUW9rE.js";import"./useGlobalEventListener-szCziyIJ.js";import"./useEventListener-ongRIzns.js";import"./cancel_24-fcxuZKq0.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./SimpleCell-LorozRfg.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DHnfr3c7.js";import"./Headline-BdgiMIb0.js";import"./Subhead-CfBOCg31.js";import"./chevron_compact_right_24-Baa4ZBCF.js";import"./chevron_16-C9RD0OpX.js";import"./AdaptiveIconRenderer-gQn7di2U.js";import"./reorder_ios_24-BFpJaCA4.js";import"./check_box_on_24-EC5CB3Pr.js";import"./check_circle_on_24-C1ooPDFD.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-D__XxM12.js";import"./chevron_left_outline_20-DzkmYzqa.js";import"./Title-DF65glat.js";import"./useGlobalOnClickOutside-B_MJjHYc.js";import"./useCSSKeyframesAnimationController-BROJHIFn.js";const _e={title:"Layout/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(y,{aside:e.jsx(b,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const ye=["Playground"];export{t as Playground,ye as __namedExportsOrder,_e as default};
