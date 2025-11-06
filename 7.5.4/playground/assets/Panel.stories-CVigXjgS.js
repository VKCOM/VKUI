import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-DQDZnzQe.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-4IjQEWlF.js";import{C as t}from"./Cell-BjdPWmPW.js";import{G as l}from"./Group-qnf_xRXF.js";import{P as s}from"./PanelHeaderBack-DR7aYIB3.js";import{S as h}from"./Search-CGa8d8vT.js";import{S as j}from"./Spinner-BbRcECA7.js";import{I as b}from"./user_outline_28-rSAT209W.js";import{I as k}from"./users_outline_28-DHi84qx0.js";import{I as A}from"./music_outline_28-LqHBrHfO.js";import"./ImageBase-VWSBvzf0.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-BUi6r-Q8.js";import"./useColorScheme-alZiR8qg.js";import"./InputUtils-CKZOM7f4.js";import"./useFocusWithin-DP8QP68V.js";import"./useIsClient-w_GYH5P_.js";import"./useConfigDirection-CFM_wEcG.js";import"./online_mobile_12-BObMLxiO.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./helpers-QklJbEbU.js";import"./Removable-CJah0S-4.js";import"./children-JmIZewKa.js";import"./IconButton-fW78sGQ1.js";import"./Tappable-GGjjvyZD.js";import"./VisuallyHidden-vRsYbH_6.js";import"./useGlobalEventListener-DbjjJxwk.js";import"./useEventListener-DcXFqQoy.js";import"./cancel_24-DxEHhXTK.js";import"./SimpleCell-CmzfnJ0J.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-y02Efo06.js";import"./Headline-DFYCKKj3.js";import"./Subhead-CV6mVfj0.js";import"./chevron_compact_right_24-BJHNvhLk.js";import"./chevron_16-D6ldfjxj.js";import"./AdaptiveIconRenderer-3HMdVtOM.js";import"./reorder_ios_24-CfEKpcri.js";import"./check_box_on_24-CE0mzBhH.js";import"./check_circle_on_24-Cwe4JKfo.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-Ch6v3yZ-.js";import"./Title-DVgoNOIF.js";import"./chevron_left_outline_28-DOJpc35Y.js";import"./chevron_left_outline_20-BYQNaDdt.js";import"./useBooleanState-C2N0g_Go.js";import"./useNativeFormResetListener-DUKV3zVp.js";import"./Button-CP79mmtk.js";import"./clear_16-DRE5Sk31.js";import"./search_outline_16-CcAlrV2J.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const ye={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Me=["Playground"];export{i as Playground,Me as __namedExportsOrder,ye as default};
