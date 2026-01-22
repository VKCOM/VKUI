import{b as m,f as o,r as c,j as e,V as u,P as n}from"./iframe-CJSxyW9U.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-DDG2Aeft.js";import{C as t}from"./Cell-Ylz3rDRA.js";import{G as l}from"./Group-Bl9QB3Zd.js";import{P as s}from"./PanelHeaderBack-BNRsSIKM.js";import{S as f}from"./Search-DRQJ5z_d.js";import{S as v}from"./Spinner-BlbUmBeW.js";import{I as x}from"./user_outline_28-DYiSNlZ5.js";import{I as j}from"./users_outline_28-D-qa_Aq7.js";import{I as h}from"./music_outline_28-TtXluGPc.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-EkuBMVhQ.js";import"./Clickable-C7Hv1Vzv.js";import"./useState-Cf9zElDT.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./ImageBaseBadge-BCPwu5M0.js";import"./useColorScheme-cIrBBNZn.js";import"./InputUtils-CQXgm4mM.js";import"./useFocusWithin-B6ZQto83.js";import"./useIsClient-CYCYCyLi.js";import"./useConfigDirection-C3cHGESc.js";import"./online_mobile_12-BmLoPU5y.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-Cn8iqEd1.js";import"./children-B_vv-93P.js";import"./IconButton-DlIx3m79.js";import"./Tappable-B_lgqKnQ.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./cancel_24-DiZsY-MY.js";import"./SimpleCell-BHTnRhyN.js";import"./Footnote-PeEhUyBm.js";import"./Headline-B-NKRtjP.js";import"./Subhead-B39S2HHi.js";import"./chevron_compact_right_24-DIVGPtpa.js";import"./chevron_16-BZCG5KUX.js";import"./AdaptiveIconRenderer-CCNgnGet.js";import"./reorder_ios_24-DiMTFw9o.js";import"./check_box_on_24-DgOwFitz.js";import"./check_circle_on_24-D3K6OCvg.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-CufZDOjk.js";import"./Title-BHBezTAx.js";import"./chevron_left_outline_28-BA0NDnx8.js";import"./chevron_left_outline_20-Nu9zVYtc.js";import"./useBooleanState-CkcwTMgJ.js";import"./useNativeFormResetListener-NR3Y3xa7.js";import"./Button-BC2c2Xtj.js";import"./clear_16-BNhH-lhb.js";import"./search_outline_16-Dtcgk4Lm.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";const He={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
