import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-CRvvLw_c.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BdPBvmSn.js";import{D as h}from"./Div-4qjXZgjv.js";import{P as D}from"./PanelHeaderBack-qPB6GelT.js";import{P as _}from"./PanelHeaderButton-J2vwpHg5.js";import{P as b}from"./PanelHeaderContent-hTEe9HfK.js";import{P as C}from"./PanelHeaderContext-BkjG2tI7.js";import{I as y}from"./dropdown_16-COZ7phJ0.js";import{I as S}from"./add_outline_28-CFSahiX2.js";import{I as d}from"./done_24-BWPtfbXs.js";import{I as M}from"./users_outline_28-BcNsYvw8.js";import{I as w}from"./settings_outline_28-Bwz66_hS.js";import"./Removable-D6hUbfb3.js";import"./children-B6ZvQs6l.js";import"./IconButton-BfjgaeOF.js";import"./Tappable-BL_Dp9-M.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C5yyRKxt.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-jCwC7LNS.js";import"./VisuallyHidden-ExmaeT5t.js";import"./useConfigDirection-B3mnQ7qq.js";import"./useGlobalEventListener-Dcqm9qtj.js";import"./useEventListener-CJcuEL8k.js";import"./cancel_24-Bj5mGOBW.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./SimpleCell-CNXhz4ds.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dyjj_lEj.js";import"./Headline-D6S1r3dC.js";import"./Subhead-BYsNdrqQ.js";import"./chevron_compact_right_24-BKdl5aVs.js";import"./chevron_16-DKMjO9ca.js";import"./AdaptiveIconRenderer-CuUFm8UV.js";import"./reorder_ios_24-ceaOoDnu.js";import"./check_box_on_24-BaAuTipL.js";import"./check_circle_on_24-IW363EmW.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DsVDtZnQ.js";import"./chevron_left_outline_20-CfqmpdCV.js";import"./Title-CR_Ip4zZ.js";import"./useGlobalOnClickOutside-CxR8ftxE.js";import"./useCSSKeyframesAnimationController-CdF6tcG0.js";const _e={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
