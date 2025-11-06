import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-DveaDHpJ.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DDnnBQ1r.js";import{D}from"./Div-aPbNskun.js";import{P as h}from"./PanelHeaderBack-JTPMjxza.js";import{P as _}from"./PanelHeaderButton-9ov5lTLg.js";import{P as b}from"./PanelHeaderContent-5Q8bADrS.js";import{P as C}from"./PanelHeaderContext-Dp-2dI_a.js";import{I as y}from"./dropdown_16-DNY0P-Au.js";import{I as S}from"./add_outline_28-DeRn5NL-.js";import{I as d}from"./done_24-B0aGcppl.js";import{I as M}from"./users_outline_28-DsNF_dxj.js";import{I as w}from"./settings_outline_28-BSH3gIt5.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-dXf4SeU2.js";import"./children-DIqfUSJp.js";import"./IconButton-B6-RVMvP.js";import"./Tappable-B6M0Cj2d.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Qd8MhpMK.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DB2utYDB.js";import"./VisuallyHidden-C4fiFLiw.js";import"./useConfigDirection-C-LxfHUm.js";import"./useGlobalEventListener-DxW3-2us.js";import"./useEventListener-BZXVGBW4.js";import"./cancel_24-v6kzA3DC.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-C5FLI9j_.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DMEVDgek.js";import"./Headline-D2z7orvN.js";import"./Subhead-CMDv2ZTP.js";import"./chevron_compact_right_24-_2yPNVIn.js";import"./chevron_16-8_wEssbM.js";import"./AdaptiveIconRenderer-D02Z7Vvb.js";import"./reorder_ios_24-B1myTCle.js";import"./check_box_on_24-BsHKmyz3.js";import"./check_circle_on_24-FNfqmYlu.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DwyM_VoL.js";import"./chevron_left_outline_20-AC1IUGj4.js";import"./Title-DhgmrscL.js";import"./useGlobalOnClickOutside-2PZpcNw8.js";import"./useCSSKeyframesAnimationController-mBSEUSJJ.js";const ye={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
