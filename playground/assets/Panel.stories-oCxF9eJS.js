import{b as m,f as o,r as c,j as e,V as u,P as n}from"./iframe-BJ9555aC.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-B5z-sg0O.js";import{C as t}from"./Cell-By-BPbxY.js";import{G as l}from"./Group-DpwBrIOF.js";import{P as s}from"./PanelHeaderBack-74qSBvx1.js";import{S as f}from"./Search-DrbYa6tb.js";import{S as v}from"./Spinner-CsAXLMyU.js";import{I as x}from"./user_outline_28-Bp__65iM.js";import{I as j}from"./users_outline_28-BA6fxZio.js";import{I as h}from"./music_outline_28-L7vaqRap.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DZszct4G.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./ImageBaseBadge-CeubzczD.js";import"./useColorScheme-DvMUZASe.js";import"./InputUtils-8LhFcqKY.js";import"./useFocusWithin-ClOWbdUU.js";import"./useIsClient-veih0UT_.js";import"./useConfigDirection-BeEtg5OO.js";import"./online_mobile_12-C_FfJS6S.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-wWHIROGY.js";import"./children-CFPqwV5J.js";import"./IconButton-DRWEpqxT.js";import"./Tappable-Bz7LtOMO.js";import"./VisuallyHidden-BpRJPd7L.js";import"./cancel_24-jJgAHgAr.js";import"./SimpleCell-DnYpeFDL.js";import"./Footnote-xxqNAETB.js";import"./Headline-Bb4b2JBA.js";import"./Subhead-ppzL9p3g.js";import"./chevron_compact_right_24-DrAMy2kd.js";import"./chevron_16-CJFbNzh_.js";import"./AdaptiveIconRenderer-DUioVxFm.js";import"./reorder_ios_24-CRqmbSYG.js";import"./check_box_on_24-Bzc3wPiJ.js";import"./check_circle_on_24-Cu0k_2dt.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-BUzE02Lo.js";import"./Title-BmBt_BL_.js";import"./chevron_left_outline_28-nio87lGi.js";import"./chevron_left_outline_20-CfdM4DXq.js";import"./useBooleanState-BYJEPe49.js";import"./useNativeFormResetListener-FD6Spq9S.js";import"./Button-BbA_I1es.js";import"./clear_16-C-_Bi6US.js";import"./search_outline_16-ZUz88-RF.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";const He={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["Playground"];export{i as Playground,Se as __namedExportsOrder,He as default};
