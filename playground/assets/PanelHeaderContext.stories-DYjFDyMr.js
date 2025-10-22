import{b as x,r as l,j as e,V as f,g as P,P as g,n as s}from"./iframe-DvQ0hW0I.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BAZKofZQ.js";import{D as I}from"./Div-C63Bwut4.js";import{P as k}from"./PanelHeaderBack-Bbb9W8rb.js";import{P as O}from"./PanelHeaderButton-oRj9KwEP.js";import{P as D}from"./PanelHeaderContent-RQE2Ottm.js";import{P as c}from"./PanelHeaderContext-DvOqmxiB.js";import{I as h}from"./dropdown_16-03QlJoYL.js";import{I as _}from"./add_outline_28-CGRaaIlx.js";import{I as d}from"./done_24-CYDuq9NP.js";import{I as b}from"./users_outline_28-CZYI52Y8.js";import{I as y}from"./settings_outline_28-Doh0D72a.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-B6FxApdQ.js";import"./children-BdLlg6DR.js";import"./IconButton-Dmx4oOAb.js";import"./Tappable-CzBKs2NQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBovrC6X.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BSmatczf.js";import"./VisuallyHidden-CGlAvVNH.js";import"./useConfigDirection-DmTY1Se6.js";import"./useGlobalEventListener-Cq3tChGi.js";import"./useEventListener-BWoYhQmZ.js";import"./cancel_24-BcD8qa0A.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-B1KXyTvt.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DYSqrBFj.js";import"./Headline-U_eDzwn1.js";import"./Subhead-DE0FovKO.js";import"./chevron_compact_right_24-CrJLC7s5.js";import"./chevron_16-m8pRWD8o.js";import"./AdaptiveIconRenderer-Co7qE9ki.js";import"./reorder_ios_24-BZR57aXa.js";import"./check_box_on_24-DzSBkyrV.js";import"./check_circle_on_24-DystyaVO.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DKDEsGE2.js";import"./chevron_left_outline_20-BP5SLsjC.js";import"./Title-CHQ24GsB.js";import"./useGlobalOnClickOutside-ChBy2EZ_.js";import"./useCSSKeyframesAnimationController-B-asaqHF.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(b,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(y,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const be=["Playground"];export{t as Playground,be as __namedExportsOrder,_e as default};
