import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-BW2_2Sqh.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-BqO-SDMq.js";import{D as h}from"./Div-Cj5xJOFK.js";import{P as D}from"./PanelHeaderBack--fr88FXE.js";import{P as _}from"./PanelHeaderButton-BB71vzOl.js";import{P as y}from"./PanelHeaderContent-Be_bZY7M.js";import{P as C}from"./PanelHeaderContext-DYyDbKCy.js";import{I as b}from"./dropdown_16-N3B8VITK.js";import{I as S}from"./add_outline_28-ClvqZymo.js";import{I as d}from"./done_24-Cy2paShU.js";import{I as M}from"./users_outline_28-Cd2h6Be5.js";import{I as w}from"./settings_outline_28-B5kf67Go.js";import"./Removable-C1txKSic.js";import"./children-Dc0ieD8_.js";import"./IconButton-DMIGpMdh.js";import"./Tappable-D_Pc41Ky.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSLKIgEW.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DYuPlK4j.js";import"./VisuallyHidden-0_L4g8bM.js";import"./useConfigDirection-DNUhHzMQ.js";import"./useGlobalEventListener-DBCEN9bj.js";import"./useEventListener-DphI_omp.js";import"./cancel_24-CE2mq3tL.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./SimpleCell-NHhZP55Q.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DqSrPGSc.js";import"./Headline-C7EO-C2p.js";import"./Subhead-BlMIzlRi.js";import"./chevron_compact_right_24-BkmrZnBH.js";import"./chevron_16-DYHt4ET-.js";import"./AdaptiveIconRenderer-BVAAaM_Y.js";import"./reorder_ios_24-vcJ3KWWO.js";import"./check_box_on_24-B3y-v9UY.js";import"./check_circle_on_24-dcl-AXNG.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-BrdJhqHh.js";import"./chevron_left_outline_20-EU2jxazt.js";import"./Title-BsNL9OHU.js";import"./useGlobalOnClickOutside-Dt9YTwri.js";import"./useCSSKeyframesAnimationController-Bn4niQ1h.js";const _e={title:"Layout/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(y,{aside:e.jsx(b,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
