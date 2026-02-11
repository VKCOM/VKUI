import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-DIYy3-CH.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-Cr48lPZ5.js";import{C as t}from"./Cell-CLUedPlD.js";import{G as l}from"./Group-DWQl9gu3.js";import{P as s}from"./PanelHeaderBack-Bgt6NO2U.js";import{S as f}from"./Search-BLdVZoba.js";import{S as v}from"./Spinner-D5ck6QgF.js";import{I as x}from"./user_outline_28-C5lBRe-C.js";import{I as j}from"./users_outline_28-DMXFMGxi.js";import{I as h}from"./music_outline_28-BcYWqi7m.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CGi9okat.js";import"./Clickable-BAIHKsz8.js";import"./useState-p4Iaaoae.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DBCai8uF.js";import"./ImageBaseBadge-CkiqzLhV.js";import"./useColorScheme-BPR6ME_0.js";import"./InputUtils-MuCAFNzU.js";import"./useFocusWithin-De2BOk53.js";import"./useIsClient-C2239VAm.js";import"./useConfigDirection-5JvPOI0y.js";import"./online_mobile_12-DSFgnyH8.js";import"./SvgIconRootV2-DBT-DabK.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-CEZaH-IR.js";import"./children-BgxIS89X.js";import"./IconButton-DhekZgUs.js";import"./Tappable-sYAEqFlc.js";import"./VisuallyHidden-B6N7VZPM.js";import"./useGlobalEventListener-CiGQPE82.js";import"./useEventListener-By1FPFXl.js";import"./cancel_24-BLCbiPJn.js";import"./SimpleCell-DX9ZWYs4.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CRCyeFbn.js";import"./Headline-BoZGv-xv.js";import"./Subhead-CZ6Imw4B.js";import"./chevron_compact_right_24-FrB_a812.js";import"./chevron_16-CyTHsyh4.js";import"./AdaptiveIconRenderer-BY2ynJbv.js";import"./reorder_ios_24-C5u_Xhhd.js";import"./check_box_on_24-CWnfDqTp.js";import"./check_circle_on_24-B5f_vVfh.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-B0heqfNd.js";import"./Title-DDAtng5G.js";import"./chevron_left_outline_28-BUBezm3_.js";import"./chevron_left_outline_20-CwPtsqRK.js";import"./useBooleanState-2ZxQw8ru.js";import"./useNativeFormResetListener-CF7UWAZN.js";import"./Button-D7qQMSR2.js";import"./clear_16-B3g1XPOf.js";import"./search_outline_16-K_nrX7IW.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
