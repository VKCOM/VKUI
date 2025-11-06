import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-dTlwAXGa.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-GJHfCsHL.js";import{D}from"./Div-PC6x0Grm.js";import{P as h}from"./PanelHeaderBack-B5vV009E.js";import{P as _}from"./PanelHeaderButton-CaRI3iQC.js";import{P as b}from"./PanelHeaderContent-iu6vhWGu.js";import{P as C}from"./PanelHeaderContext-BnmOQLrp.js";import{I as y}from"./dropdown_16-BCfuXZxx.js";import{I as S}from"./add_outline_28-BQLZbiVD.js";import{I as d}from"./done_24-BguKirHZ.js";import{I as M}from"./users_outline_28-D44ITTDr.js";import{I as w}from"./settings_outline_28-CGqV9djQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-BvBDqmqD.js";import"./children-D0xCpVZl.js";import"./IconButton-MYG7es_8.js";import"./Tappable-qMfTC7Pz.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dl5F7aV_.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CtGJ0DI4.js";import"./VisuallyHidden-JumwXwcS.js";import"./useConfigDirection-BIk700TM.js";import"./useGlobalEventListener-DR7m9Uut.js";import"./useEventListener-CM8ERZU-.js";import"./cancel_24-sfpNhjae.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-pVFSTIJK.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DJb5ZlwN.js";import"./Headline-nnEuybdp.js";import"./Subhead-BlOKXAAl.js";import"./chevron_compact_right_24-C3ktCmz2.js";import"./chevron_16-DHR9v_Z1.js";import"./AdaptiveIconRenderer-ESMEwK9d.js";import"./reorder_ios_24-CYpPEkSN.js";import"./check_box_on_24-Be72trti.js";import"./check_circle_on_24-QthlvxfI.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-B_MPMCfI.js";import"./chevron_left_outline_20-BbvxQo3n.js";import"./Title-ShBYOT9p.js";import"./useGlobalOnClickOutside-Ibw0LsG6.js";import"./useCSSKeyframesAnimationController-B8NOVYjS.js";const Se={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
