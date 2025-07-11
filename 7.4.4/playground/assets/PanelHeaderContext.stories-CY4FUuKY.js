import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-DDos8QSD.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BSHLTF6a.js";import{D as h}from"./Div-Cmg8g6jV.js";import{P as D}from"./PanelHeaderBack-Bk_5Z1wj.js";import{P as _}from"./PanelHeaderButton-DNA82Xqx.js";import{P as y}from"./PanelHeaderContent-irXHAOn_.js";import{P as C}from"./PanelHeaderContext-DVYKiA5m.js";import{I as b}from"./dropdown_16-CIILYvxb.js";import{I as S}from"./add_outline_28-BvTIrZhD.js";import{I as d}from"./done_24-BpiDHxHm.js";import{I as M}from"./users_outline_28-DE0wlIY7.js";import{I as w}from"./settings_outline_28-Bzucn4GR.js";import"./Removable-BkLTzKdK.js";import"./children-DM03Xori.js";import"./IconButton-C3mRDxD7.js";import"./Tappable-B0kWxOOO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CWxsm2KA.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dyyzogrc.js";import"./VisuallyHidden-Bn0ixRRD.js";import"./useConfigDirection-BVLc7CyO.js";import"./useGlobalEventListener-Cf-K_pnj.js";import"./useEventListener-B5lUY6Nx.js";import"./cancel_24-Cjk92GYx.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-D7q7mL8J.js";import"./SimpleCell-Cm4X46Km.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DolN14Rp.js";import"./Headline-A5M31mJl.js";import"./Subhead-94kqPIfE.js";import"./chevron_compact_right_24-D96aA4-p.js";import"./chevron_16-B5_cuzjH.js";import"./AdaptiveIconRenderer-5tHQMFAk.js";import"./reorder_ios_24-DnZbFoSd.js";import"./check_box_on_24-Wmpe4q9b.js";import"./check_circle_on_24-BFTGWo1k.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-nrUKiKB0.js";import"./chevron_left_outline_20-C-_aw8Re.js";import"./Title-Ble1sAc3.js";import"./useGlobalOnClickOutside-CiSE1t3Q.js";import"./useCSSKeyframesAnimationController-Cm_k_RHc.js";const _e={title:"Layout/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(y,{aside:e.jsx(b,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
