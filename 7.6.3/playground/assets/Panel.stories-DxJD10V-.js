import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-OJ1C6fMc.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-Cfzy4YhR.js";import{C as t}from"./Cell-Dzm8oIkw.js";import{G as l}from"./Group-MuPGSLP-.js";import{P as s}from"./PanelHeaderBack-B54KzHKT.js";import{S as j}from"./Search-DFauUsMy.js";import{S as h}from"./Spinner-B_HHBggy.js";import{I as b}from"./user_outline_28-CsfF-ibY.js";import{I as k}from"./users_outline_28-CHldXFSc.js";import{I as A}from"./music_outline_28-BoviOy5f.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-DWGPM8p5.js";import"./Clickable-DKzQKlVj.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-pi5uVPWv.js";import"./useColorScheme-Bl13B3Wz.js";import"./InputUtils-CNd9WeYt.js";import"./useFocusWithin-a-EzjXb7.js";import"./useIsClient-p1vmZH8b.js";import"./useConfigDirection-jCjot1AW.js";import"./online_mobile_12-BbwS-DbI.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-XkV2WchN.js";import"./children-BFlZwmuK.js";import"./IconButton-Bt_Y57sB.js";import"./Tappable-BvI9Mb-u.js";import"./VisuallyHidden-BNf-15JI.js";import"./useGlobalEventListener-D2antHno.js";import"./useEventListener-5I8DZFbr.js";import"./cancel_24-DkgWneF3.js";import"./SimpleCell-D--1IUdV.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-JF6_a0Sk.js";import"./Headline-BAyAnA5C.js";import"./Subhead-DtXruDSo.js";import"./chevron_compact_right_24-FepVsEG1.js";import"./chevron_16-Bphhpetu.js";import"./AdaptiveIconRenderer-87jEr__2.js";import"./reorder_ios_24-C-dH2Zh-.js";import"./check_box_on_24-DEIThGh8.js";import"./check_circle_on_24-D21GxUqE.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-CxCCV7w2.js";import"./Title-DVdp6jeh.js";import"./chevron_left_outline_28-DAKscJ9e.js";import"./chevron_left_outline_20-aYVHemST.js";import"./useBooleanState-4rhuh7F8.js";import"./useNativeFormResetListener-BDfrZymX.js";import"./Button-CRQbp7pl.js";import"./clear_16-DvL6wfKE.js";import"./search_outline_16-kwX4JfN7.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Me={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Re=["Playground"];export{i as Playground,Re as __namedExportsOrder,Me as default};
