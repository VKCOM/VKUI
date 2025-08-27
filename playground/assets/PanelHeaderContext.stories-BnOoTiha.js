import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-CkliH7Ym.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-Dg3hNNv8.js";import{D}from"./Div-BB7vEP3B.js";import{P as h}from"./PanelHeaderBack-Cp1_vp2i.js";import{P as _}from"./PanelHeaderButton-BAg_-1eR.js";import{P as b}from"./PanelHeaderContent-BN8rygBI.js";import{P as C}from"./PanelHeaderContext-BXnuLfXh.js";import{I as y}from"./dropdown_16-DHalVr4I.js";import{I as S}from"./add_outline_28-JTG5KKYJ.js";import{I as d}from"./done_24-agP2iBDv.js";import{I as M}from"./users_outline_28-CR6zdPdi.js";import{I as w}from"./settings_outline_28-DdlrCnf3.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-BiD1BBxW.js";import"./children-B0i547Ke.js";import"./IconButton-CSrcIMnc.js";import"./Tappable-fZc2zE5Y.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D0QQafOF.js";import"./useFocusVisibleClassName-Bnsyl2mE.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BZxXqLFf.js";import"./VisuallyHidden-Dn7EkmGE.js";import"./useConfigDirection-Cu9Dkwyc.js";import"./useGlobalEventListener-4U7JtIC8.js";import"./useEventListener-iURZQrFx.js";import"./cancel_24-DYiMxFG6.js";import"./SvgIconRootV2-DWb7sWtR.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-JD8osR6E.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CVpuTKzI.js";import"./Headline-BEImhDVB.js";import"./Subhead-DmZ-gnSD.js";import"./chevron_compact_right_24-IyXI54Ns.js";import"./chevron_16-DP-Hpqqm.js";import"./AdaptiveIconRenderer-tJvkXxLm.js";import"./reorder_ios_24-CEY4fUCg.js";import"./check_box_on_24-Dh3SQOCq.js";import"./check_circle_on_24-C_PLodX4.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-Y56I3fhV.js";import"./chevron_left_outline_20-BvT7hjfx.js";import"./Title-Bna-x3U_.js";import"./useGlobalOnClickOutside-By7I8TNY.js";import"./useCSSKeyframesAnimationController-CaNCQZL7.js";const ye={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Se=["Playground"];export{t as Playground,Se as __namedExportsOrder,ye as default};
