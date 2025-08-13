import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-CNYWi-tv.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DzugrAQG.js";import{D}from"./Div-Dsel7-va.js";import{P as h}from"./PanelHeaderBack-w2E1cxVJ.js";import{P as _}from"./PanelHeaderButton-DQxaVwVs.js";import{P as b}from"./PanelHeaderContent-BzYY_S0H.js";import{P as C}from"./PanelHeaderContext-TkMwuXtR.js";import{I as y}from"./dropdown_16-AByBMP5u.js";import{I as S}from"./add_outline_28-xTZQ_rWN.js";import{I as d}from"./done_24-BHiJnHFH.js";import{I as M}from"./users_outline_28-D80K7E_S.js";import{I as w}from"./settings_outline_28-BsBAnAkE.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-DXEozIKZ.js";import"./children-D9VTJ2FF.js";import"./IconButton-1hwVmaZf.js";import"./Tappable-Bt2S1yMc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-PPkKMUDS.js";import"./useFocusVisibleClassName-CrxrpfB8.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bfhccirq.js";import"./VisuallyHidden-CIbqknZb.js";import"./useConfigDirection-C_6xjTM7.js";import"./useGlobalEventListener-JcQvOfhM.js";import"./useEventListener-DZQbwQUn.js";import"./cancel_24-CquaKNSW.js";import"./SvgIconRootV2-gYxZaoy5.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-DUb12Fwu.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BYeJ88ZB.js";import"./Headline-DsqdPKjD.js";import"./Subhead-BeVsNNt7.js";import"./chevron_compact_right_24-DunAwNUB.js";import"./chevron_16-CN_guPgl.js";import"./AdaptiveIconRenderer-B0gv9O0k.js";import"./reorder_ios_24-CNqJgXj_.js";import"./check_box_on_24-DW3URTdi.js";import"./check_circle_on_24-CSfj3dp4.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-AJCnQtWu.js";import"./chevron_left_outline_20-LPpqaviN.js";import"./Title-BvqIwHMA.js";import"./useGlobalOnClickOutside-DtFsO1r0.js";import"./useCSSKeyframesAnimationController-KN_KJv1J.js";const ye={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
