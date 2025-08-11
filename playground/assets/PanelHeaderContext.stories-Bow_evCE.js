import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-BdL7Qu3-.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-GFBGULyk.js";import{D as h}from"./Div-Q36WEfaW.js";import{P as D}from"./PanelHeaderBack-bH9gkTGG.js";import{P as _}from"./PanelHeaderButton-DEHQmu78.js";import{P as b}from"./PanelHeaderContent-DmDiuaQ0.js";import{P as C}from"./PanelHeaderContext-7CvZnuxi.js";import{I as y}from"./dropdown_16-D8sLG3Bz.js";import{I as S}from"./add_outline_28-aXR9m20b.js";import{I as d}from"./done_24-BFuKXACM.js";import{I as M}from"./users_outline_28-Myc8YHJ0.js";import{I as w}from"./settings_outline_28-DfGFlQlY.js";import"./Removable-kBBzHwjh.js";import"./children-D33S37xY.js";import"./IconButton-oiQnZbSh.js";import"./Tappable-DH_64QBQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zgtvQHiz.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DfOLgQuD.js";import"./VisuallyHidden-DMev6gKF.js";import"./useConfigDirection-D_GPblpw.js";import"./useGlobalEventListener-CWI65JCy.js";import"./useEventListener-COxWOe_W.js";import"./cancel_24-DYZXSV6w.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./SimpleCell-DtSFoJ-l.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Cejbc8FV.js";import"./Headline-IzZ5JXBy.js";import"./Subhead-CEr4zt5A.js";import"./chevron_compact_right_24-AP5wuFgI.js";import"./chevron_16-Dq6TqX7-.js";import"./AdaptiveIconRenderer-QlRoKo4f.js";import"./reorder_ios_24-7wcSxEed.js";import"./check_box_on_24-Bm5iZahs.js";import"./check_circle_on_24-B-NXeGAt.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-Fd_7gajD.js";import"./chevron_left_outline_20-B13X4oR-.js";import"./Title-D-2PMsHx.js";import"./useGlobalOnClickOutside-zdYBw3AP.js";import"./useCSSKeyframesAnimationController-BJmom0_1.js";const be={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g],tags:["Навигация"]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const ye=["Playground"];export{t as Playground,ye as __namedExportsOrder,be as default};
