import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-CdtcRMP-.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BXKCkIBT.js";import{C as t}from"./Cell-DAf-bAQq.js";import{G as l}from"./Group-BPDDF8j8.js";import{P as s}from"./PanelHeaderBack-BtyMJa2D.js";import{S as j}from"./Search-Bjf2L0T7.js";import{S as h}from"./Spinner-C-2OzDn_.js";import{I as b}from"./user_outline_28-BIZCNLtx.js";import{I as k}from"./users_outline_28-Bv9oZl4u.js";import{I as A}from"./music_outline_28-xGKBlHrq.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-BuKB8O3U.js";import"./Clickable-nnjkiOyK.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-ClYqcA4W.js";import"./useColorScheme-Bqwp8l3s.js";import"./InputUtils-4kqGTgL9.js";import"./useFocusWithin-CnBAXQ2U.js";import"./useIsClient-B7bjAOfN.js";import"./useConfigDirection-I0bRjt3K.js";import"./online_mobile_12--qRJFinP.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-nQuC3wCX.js";import"./children-BpYEnGqU.js";import"./IconButton-rnOj30v2.js";import"./Tappable-znRvcKvt.js";import"./VisuallyHidden-CtlI0uOO.js";import"./useGlobalEventListener-enXvR1yE.js";import"./useEventListener-CidaaUBr.js";import"./cancel_24-DMLedojc.js";import"./SimpleCell-DSOj1jKk.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-UnTPOYYT.js";import"./Headline-BNe6tvfn.js";import"./Subhead-DKX6pZDk.js";import"./chevron_compact_right_24-lHFnU4Rs.js";import"./chevron_16-cxMQw6Cg.js";import"./AdaptiveIconRenderer-By43qae_.js";import"./reorder_ios_24-srCtDSQP.js";import"./check_box_on_24-BiPwgksd.js";import"./check_circle_on_24-CS4lhGzB.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DVCywEd1.js";import"./Title-DQC5nBPj.js";import"./chevron_left_outline_28-758ERfSQ.js";import"./chevron_left_outline_20-BMCptxgE.js";import"./useBooleanState-DSmP0yRA.js";import"./useNativeFormResetListener-BdVdTviF.js";import"./Button-BpUWCXRP.js";import"./clear_16-B2C3Rrhp.js";import"./search_outline_16-CMJkNsWZ.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Me={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
