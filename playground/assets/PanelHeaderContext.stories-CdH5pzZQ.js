import{w as x,r as l,j as e,V as f,P,a as g,n as s}from"./iframe-C4bTyPBQ.js";import{D as H,C as j}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DxOvdLcw.js";import{D as I}from"./Div-Be1bc1Az.js";import{P as k}from"./PanelHeaderBack-BocdhXFD.js";import{P as O}from"./PanelHeaderButton-DYb8XRuL.js";import{P as D}from"./PanelHeaderContent-DdMdUxGa.js";import{P as c}from"./PanelHeaderContext-B8LMTe-m.js";import{I as h}from"./dropdown_16-JttlzX2f.js";import{I as _}from"./add_outline_28-DgaPFag8.js";import{I as d}from"./done_24-BtACfm-T.js";import{I as y}from"./users_outline_28-DvfqGnGm.js";import{I as S}from"./settings_outline_28-DwjkmSNJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Removable-CbiJXY2P.js";import"./children-DNxvoAyX.js";import"./IconButton-BXe704ZF.js";import"./Tappable-BZW__-HP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./InputUtils-Ns7QNyDT.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./useConfigDirection-OBrCdmzr.js";import"./cancel_24-BKCyLyjW.js";import"./SvgIconRootV2-DbftVVP5.js";import"./SimpleCell-3wWwuzOF.js";import"./Footnote-wW_hecXF.js";import"./Headline-B4T2ew9V.js";import"./Subhead-CGMBr7DJ.js";import"./chevron_compact_right_24-9Y_UhAEg.js";import"./chevron_16-D1zTg27u.js";import"./AdaptiveIconRenderer-COrX8BE5.js";import"./reorder_ios_24-Cx33pzZY.js";import"./check_box_on_24-C22hmiDf.js";import"./check_circle_on_24-BRHOjbxr.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-BV6EmSCB.js";import"./chevron_left_outline_20-DN1jhhy8.js";import"./Title-CK3YofNd.js";import"./useGlobalOnClickOutside-3C106353.js";import"./FixedLayout-BvfuL5DL.js";import"./useResizeObserver-BbI4-0lS.js";import"./customResizeObserver-CzwDpNji.js";import"./isRefObject-Dh5CqLqK.js";import"./useCSSKeyframesAnimationController-nG-tROJv.js";const _e={title:"Navigation/PanelHeaderContext",component:c,parameters:v("PanelHeaderContext",j,H),decorators:[x],tags:["Навигация"]},t={render:function(){const[r,p]=l.useState(!0),[a,u]=l.useState("all"),o=()=>{p(n=>!n)},i=n=>{const C=n.currentTarget.dataset.mode;u(C),requestAnimationFrame(o)};return e.jsx(f,{id:"main",activePanel:"panel1",children:e.jsxs(P,{id:"panel1",children:[e.jsx(g,{before:e.jsx(k,{onClick:s}),after:e.jsx(O,{onClick:s,children:e.jsx(_,{})}),children:e.jsx(D,{aside:e.jsx(h,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(c,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(y,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(S,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(I,{children:"PanelHeaderContext"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ye=["Playground"];export{t as Playground,ye as __namedExportsOrder,_e as default};
