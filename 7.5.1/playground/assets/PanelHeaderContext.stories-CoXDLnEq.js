import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-DZFG_ML5.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-W5CGL-Ez.js";import{D as h}from"./Div-B0AzuXhX.js";import{P as D}from"./PanelHeaderBack-CQ9JzTv-.js";import{P as _}from"./PanelHeaderButton-DO3sTpY2.js";import{P as b}from"./PanelHeaderContent-YgHZsK5E.js";import{P as C}from"./PanelHeaderContext-DYOz52ro.js";import{I as y}from"./dropdown_16-BfkNkE3N.js";import{I as S}from"./add_outline_28-CNTbVoPs.js";import{I as d}from"./done_24-7OriJd61.js";import{I as M}from"./users_outline_28-DJNRFR1V.js";import{I as w}from"./settings_outline_28-Boc1l6xI.js";import"./Removable-BniJd5-v.js";import"./children-CbwhlWKb.js";import"./IconButton-C3HahQsG.js";import"./Tappable-DivmMzZn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-O0RRum4C.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-rnqmQ_3Q.js";import"./VisuallyHidden-DUSQwRyI.js";import"./useConfigDirection-BbxI4kck.js";import"./useGlobalEventListener-is3gW8hR.js";import"./useEventListener-eXbAXU7E.js";import"./cancel_24-So4WKeZo.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CKNjcJVv.js";import"./SimpleCell-ebMZoKON.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CYznJAmV.js";import"./Headline-DDLNTO9r.js";import"./Subhead-D8223A8i.js";import"./chevron_compact_right_24-BccQ5rMW.js";import"./chevron_16-d4AUnQXG.js";import"./AdaptiveIconRenderer-DSX7hy_W.js";import"./reorder_ios_24-DJ_NLoiV.js";import"./check_box_on_24-3mUefpWG.js";import"./check_circle_on_24-BwzIIkyf.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-B3rY2OIb.js";import"./chevron_left_outline_20-D4rkUcSq.js";import"./Title-Yt5D65iS.js";import"./useGlobalOnClickOutside-BrZpyugz.js";import"./useCSSKeyframesAnimationController-rgod1SNj.js";const _e={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
