import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-BW2_2Sqh.js";import{D as f,C as x}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-C504pHwc.js";import{C as t}from"./Cell-BqO-SDMq.js";import{G as l}from"./Group-CUaPdFZ2.js";import{P as s}from"./PanelHeaderBack--fr88FXE.js";import{S as h}from"./Search-CF1b5vV0.js";import{S as j}from"./Spinner-Ck410QJW.js";import{I as b}from"./user_outline_28-V-tm3DyX.js";import{I as k}from"./users_outline_28-Cd2h6Be5.js";import{I as A}from"./music_outline_28-DNzgf0Mn.js";import"./ImageBase-CoAaMLqa.js";import"./Clickable-CSLKIgEW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DZQOp4mD.js";import"./useColorScheme-DfFLwB8B.js";import"./InputUtils-DYuPlK4j.js";import"./useFocusWithin-Cv8cds6L.js";import"./useIsClient-fZBb-eaz.js";import"./useConfigDirection-DNUhHzMQ.js";import"./online_mobile_12-Dt81a55b.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./helpers-QklJbEbU.js";import"./Removable-C1txKSic.js";import"./children-Dc0ieD8_.js";import"./IconButton-DMIGpMdh.js";import"./Tappable-D_Pc41Ky.js";import"./VisuallyHidden-0_L4g8bM.js";import"./useGlobalEventListener-DBCEN9bj.js";import"./useEventListener-DphI_omp.js";import"./cancel_24-CE2mq3tL.js";import"./SimpleCell-NHhZP55Q.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DqSrPGSc.js";import"./Headline-C7EO-C2p.js";import"./Subhead-BlMIzlRi.js";import"./chevron_compact_right_24-BkmrZnBH.js";import"./chevron_16-DYHt4ET-.js";import"./AdaptiveIconRenderer-BVAAaM_Y.js";import"./reorder_ios_24-vcJ3KWWO.js";import"./check_box_on_24-B3y-v9UY.js";import"./check_circle_on_24-dcl-AXNG.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-BB71vzOl.js";import"./Title-BsNL9OHU.js";import"./chevron_left_outline_28-BrdJhqHh.js";import"./chevron_left_outline_20-EU2jxazt.js";import"./useBooleanState-zh8E_smZ.js";import"./useNativeFormResetListener-ej0qCejW.js";import"./Button-B8UDwXDh.js";import"./clear_16-Blu4NwUm.js";import"./search_outline_16-B2d1qaT4.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const ge={title:"Layout/Panel",component:o,parameters:v("Panel",x,f),decorators:[d]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render() {
    const [activePanel, setActivePanel] = React.useState('panel1');
    return <View activePanel={activePanel}>
        <Panel id="panel1">
          <PanelHeader>More</PanelHeader>
          <Group>
            <Cell chevron="auto" before={<Icon28UserOutline />} onClick={() => setActivePanel('panel2')}>
              Friends
            </Cell>
            <Cell chevron="auto" before={<Icon28UsersOutline />} onClick={() => setActivePanel('panel2')}>
              Communities
            </Cell>
            <Cell chevron="auto" before={<Icon28MusicOutline />} onClick={() => setActivePanel('panel2')}>
              Music
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader delimiter="spacing" before={<PanelHeaderBack onClick={() => setActivePanel('panel1')} />}>
            Communities
          </PanelHeader>
          <Group>
            <Search />
            <Cell subtitle="Humor" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              Swipe Right
            </Cell>
            <Cell subtitle="Cultural Center" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              Out Cinema
            </Cell>
            <Cell subtitle="Movies" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              #ARTPOKAZ
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel3" centered>
          <PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('panel2')} />}>
            Out Cinema
          </PanelHeader>
          <Spinner />
          <div style={{
          marginTop: 10
        }}>Centered Content</div>
        </Panel>
      </View>;
  }
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ye=["Playground"];export{i as Playground,ye as __namedExportsOrder,ge as default};
