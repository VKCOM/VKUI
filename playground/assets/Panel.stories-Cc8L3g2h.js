import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-CdM-7Hfu.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-DUoUH2IJ.js";import{C as t}from"./Cell-Cgd_OY4C.js";import{G as l}from"./Group-c52jERCh.js";import{P as s}from"./PanelHeaderBack-CNhGxq-I.js";import{S as f}from"./Search-CfxeV0HW.js";import{S as v}from"./Spinner-CsDvRUz2.js";import{I as x}from"./user_outline_28-COQjU6vi.js";import{I as j}from"./users_outline_28-B9di1sJc.js";import{I as h}from"./music_outline_28-BjWhIvUW.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Bi1QdrTS.js";import"./Clickable-B55EaeOQ.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DED5NeG1.js";import"./useColorScheme-Bgl1tdyG.js";import"./InputUtils-BMsEEBIJ.js";import"./useFocusWithin-2TkfLAdf.js";import"./useIsClient-CBFXtO1_.js";import"./useConfigDirection-BPbTAtL3.js";import"./online_mobile_12-DEl3ibRG.js";import"./SvgIconRootV2-uNBcUV_S.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-Dspz5xzQ.js";import"./children-CDGrqL8f.js";import"./IconButton-CDyvGU-p.js";import"./Tappable-DK6ahodC.js";import"./VisuallyHidden-DydpD7lG.js";import"./useGlobalEventListener-BRj5_zmB.js";import"./useEventListener-qAbsiM6S.js";import"./cancel_24-CxY6nUNi.js";import"./SimpleCell-DKZAY0dR.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-NEMh_4A6.js";import"./Headline-CJlcsWlt.js";import"./Subhead-BqjD9mjg.js";import"./chevron_compact_right_24-DAtZN61J.js";import"./chevron_16-DFcNvUVK.js";import"./AdaptiveIconRenderer-0K7qOuZd.js";import"./reorder_ios_24-BCpMSmYI.js";import"./check_box_on_24-66Pb9T_w.js";import"./check_circle_on_24-UT35uVdv.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-D_OLy9yd.js";import"./Title-CJmHdlPE.js";import"./chevron_left_outline_28-B37LzXQb.js";import"./chevron_left_outline_20-YQi-5BrD.js";import"./useBooleanState-CoGSncbs.js";import"./useNativeFormResetListener-B2poAlMn.js";import"./Button-Wq0du0BJ.js";import"./clear_16-B7cR-aCe.js";import"./search_outline_16-E6w6gZSp.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
