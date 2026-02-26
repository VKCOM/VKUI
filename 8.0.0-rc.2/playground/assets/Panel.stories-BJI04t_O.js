import{w as m,P as o,r as c,j as e,V as u,a as n}from"./iframe-C4bTyPBQ.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-Bsyc_Tpa.js";import{C as t}from"./Cell-DxOvdLcw.js";import{G as l}from"./Group-B0qSQvWx.js";import{P as s}from"./PanelHeaderBack-BocdhXFD.js";import{S as f}from"./Search-MDkss7r9.js";import{S as v}from"./Spinner-CnNDPfa2.js";import{I as x}from"./user_outline_28-D-g9bq5I.js";import{I as j}from"./users_outline_28-DvfqGnGm.js";import{I as h}from"./music_outline_28-CFdJJc8T.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DM5ndQnB.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./ImageBaseBadge-oFfOfujq.js";import"./useColorScheme-B5qdSLTx.js";import"./InputUtils-Ns7QNyDT.js";import"./useFocusWithin-CWJCpHmP.js";import"./useIsClient-B8qKshG4.js";import"./useConfigDirection-OBrCdmzr.js";import"./online_mobile_12-CQS8ULfi.js";import"./SvgIconRootV2-DbftVVP5.js";import"./helpers-QklJbEbU.js";import"./Removable-CbiJXY2P.js";import"./children-DNxvoAyX.js";import"./IconButton-BXe704ZF.js";import"./Tappable-BZW__-HP.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./cancel_24-BKCyLyjW.js";import"./SimpleCell-3wWwuzOF.js";import"./Footnote-wW_hecXF.js";import"./Headline-B4T2ew9V.js";import"./Subhead-CGMBr7DJ.js";import"./chevron_compact_right_24-9Y_UhAEg.js";import"./chevron_16-D1zTg27u.js";import"./AdaptiveIconRenderer-COrX8BE5.js";import"./reorder_ios_24-Cx33pzZY.js";import"./check_box_on_24-C22hmiDf.js";import"./check_circle_on_24-BRHOjbxr.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DYb8XRuL.js";import"./Title-CK3YofNd.js";import"./chevron_left_outline_28-BV6EmSCB.js";import"./chevron_left_outline_20-DN1jhhy8.js";import"./useBooleanState-CoNuuFWh.js";import"./useNativeFormResetListener-DMXKL-7v.js";import"./Button-D-zltIHu.js";import"./clear_16-BwcQWqpd.js";import"./search_outline_16-CP5ErGpy.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";const Oe={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const He=["Playground"];export{i as Playground,He as __namedExportsOrder,Oe as default};
