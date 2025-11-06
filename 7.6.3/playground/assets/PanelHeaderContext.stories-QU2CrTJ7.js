import{b as g,r as l,j as e,V as H,g as j,P as v,n as s}from"./iframe-OJ1C6fMc.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-Dzm8oIkw.js";import{D}from"./Div-BrHsqYW3.js";import{P as h}from"./PanelHeaderBack-B54KzHKT.js";import{P as _}from"./PanelHeaderButton-CxCCV7w2.js";import{P as b}from"./PanelHeaderContent-Db2uerLK.js";import{P as C}from"./PanelHeaderContext-BLKIQIWK.js";import{I as y}from"./dropdown_16-BcHnFD5w.js";import{I as S}from"./add_outline_28-D7vAs7vs.js";import{I as d}from"./done_24-Clxnm_z2.js";import{I as M}from"./users_outline_28-CHldXFSc.js";import{I as w}from"./settings_outline_28-uVK7IUPG.js";import"./preload-helper-Dp1pzeXC.js";import"./Removable-XkV2WchN.js";import"./children-BFlZwmuK.js";import"./IconButton-Bt_Y57sB.js";import"./Tappable-BvI9Mb-u.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DKzQKlVj.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CNd9WeYt.js";import"./VisuallyHidden-BNf-15JI.js";import"./useConfigDirection-jCjot1AW.js";import"./useGlobalEventListener-D2antHno.js";import"./useEventListener-5I8DZFbr.js";import"./cancel_24-DkgWneF3.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./SimpleCell-D--1IUdV.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-JF6_a0Sk.js";import"./Headline-BAyAnA5C.js";import"./Subhead-DtXruDSo.js";import"./chevron_compact_right_24-FepVsEG1.js";import"./chevron_16-Bphhpetu.js";import"./AdaptiveIconRenderer-87jEr__2.js";import"./reorder_ios_24-C-dH2Zh-.js";import"./check_box_on_24-DEIThGh8.js";import"./check_circle_on_24-D21GxUqE.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-DAKscJ9e.js";import"./chevron_left_outline_20-aYVHemST.js";import"./Title-DVdp6jeh.js";import"./useGlobalOnClickOutside-B60ruIgq.js";import"./useCSSKeyframesAnimationController-BxSmB1JQ.js";const ye={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(h,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(D,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
