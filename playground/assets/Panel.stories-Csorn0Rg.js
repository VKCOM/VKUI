import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-CjlHPZNU.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-YfEV_zp7.js";import{C as t}from"./Cell-DlH0uhGu.js";import{G as l}from"./Group-Bb5VOzgg.js";import{P as s}from"./PanelHeaderBack-BsDTtlQJ.js";import{S as f}from"./Search-7ReJybcK.js";import{S as v}from"./Spinner-BqL1JLHM.js";import{I as x}from"./user_outline_28-BgGBWVcZ.js";import{I as j}from"./users_outline_28-BU1bSn8F.js";import{I as h}from"./music_outline_28-rHKDrBsU.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CwOR86Dk.js";import"./Clickable-CtpofEGa.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-BRgNofzo.js";import"./useColorScheme-BIeu6EL3.js";import"./InputUtils-DGnaA_Jg.js";import"./useFocusWithin-CtqEkwtt.js";import"./useIsClient-DEeP5e_N.js";import"./useConfigDirection-CtCMtXRC.js";import"./online_mobile_12-BNtKxVLF.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-8x1bU61T.js";import"./children-DXLPnz61.js";import"./IconButton-DL_Qecp_.js";import"./Tappable-B5zgJODm.js";import"./VisuallyHidden-BhHQTREx.js";import"./useGlobalEventListener-B-Bh84II.js";import"./useEventListener-B0Sz5sam.js";import"./cancel_24-DoQTGG5W.js";import"./SimpleCell-B9ylNtQr.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-OilvUFbZ.js";import"./Headline-5QXk0_9F.js";import"./Subhead-LlQLYw53.js";import"./chevron_compact_right_24-D4IlNfKx.js";import"./chevron_16-CdgPvfwT.js";import"./AdaptiveIconRenderer-Bf6_Ojz6.js";import"./reorder_ios_24-Bsdplb-r.js";import"./check_box_on_24-DQrHUw8r.js";import"./check_circle_on_24-DDCkNJvr.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-Xzu1VoMK.js";import"./Title-GMDilNWH.js";import"./chevron_left_outline_28-BXfJsUVJ.js";import"./chevron_left_outline_20-lPTczRg2.js";import"./useBooleanState-Byxj-TXc.js";import"./useNativeFormResetListener-CxFv_rpZ.js";import"./Button-eWkGETfu.js";import"./clear_16-CDlNe0mR.js";import"./search_outline_16-DizdXxPN.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ye=["Playground"];export{i as Playground,ye as __namedExportsOrder,Ie as default};
