import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-7s0T-F6L.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-1hD9vHBL.js";import{C as t}from"./Cell-uOEslU3v.js";import{G as l}from"./Group-CH_sa7ue.js";import{P as s}from"./PanelHeaderBack-wBfNbUSw.js";import{S as j}from"./Search-Fzy6vxZK.js";import{S as h}from"./Spinner-DyPdKfog.js";import{I as b}from"./user_outline_28-DUWoQLsH.js";import{I as k}from"./users_outline_28-Ctk-ULX_.js";import{I as A}from"./music_outline_28-WSGE2Gqt.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-7R9OqT4P.js";import"./Clickable-LGVh7luH.js";import"./useFocusVisible-BTUcwPxj.js";import"./useFocusVisibleClassName-CMVp5o9Y.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-C13UJOhu.js";import"./useColorScheme-BL2QEz1W.js";import"./InputUtils-CP-PNx6u.js";import"./useFocusWithin-DluxB-SI.js";import"./useIsClient-SmbH6kX8.js";import"./useConfigDirection--PDr40UE.js";import"./online_mobile_12-BtP8zEC7.js";import"./SvgIconRootV2-Wzzl8e4S.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-D4HLOQNr.js";import"./children-DpgARscT.js";import"./IconButton-CH48s9Wj.js";import"./Tappable-BPO49mNS.js";import"./VisuallyHidden-CNF1CStS.js";import"./useGlobalEventListener-D2m4XbLr.js";import"./useEventListener-6ORcdIAV.js";import"./cancel_24-CXDD7VnX.js";import"./SimpleCell-B2IgO3S2.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BCofusdy.js";import"./Headline-CfLwurX4.js";import"./Subhead-D1_aWRaG.js";import"./chevron_compact_right_24-JevFX-l5.js";import"./chevron_16-1M6O6SWX.js";import"./AdaptiveIconRenderer-CngEuoSF.js";import"./reorder_ios_24-m7_uc1ot.js";import"./check_box_on_24-Ch3Mzeh3.js";import"./check_circle_on_24-TttDJ7xG.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DnGYfCID.js";import"./Title-C8ooGZRF.js";import"./chevron_left_outline_28-B3NBgJ58.js";import"./chevron_left_outline_20-BuU6DaOs.js";import"./useBooleanState-C_W_4yV-.js";import"./useNativeFormResetListener-DGrR4Sdq.js";import"./Button-DBxYkQfv.js";import"./clear_16-CoWSYRea.js";import"./search_outline_16-DhNfuD8a.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Re={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const we=["Playground"];export{i as Playground,we as __namedExportsOrder,Re as default};
