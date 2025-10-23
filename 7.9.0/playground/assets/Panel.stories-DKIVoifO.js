import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-BdXaAE5r.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BDL6DiG7.js";import{C as t}from"./Cell-uDuhQw0X.js";import{G as l}from"./Group-D1elF4gT.js";import{P as s}from"./PanelHeaderBack-DZBOEvz9.js";import{S as f}from"./Search-rZKu8NJu.js";import{S as v}from"./Spinner-Dsao1b5l.js";import{I as x}from"./user_outline_28-DbnJgJeX.js";import{I as j}from"./users_outline_28-BawNEmqY.js";import{I as h}from"./music_outline_28-Dizlf1JK.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-B346ZL0P.js";import"./Clickable-0nFsuW3k.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DkEJCKUw.js";import"./useColorScheme-CR-44NGe.js";import"./InputUtils--HRLtXJo.js";import"./useFocusWithin-BFFjMCCU.js";import"./useIsClient-CdGSC0Is.js";import"./useConfigDirection-B4zlYhYT.js";import"./online_mobile_12-BX9R8xcr.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-CjePy1wL.js";import"./children-l5OU2f11.js";import"./IconButton-CXgqouLn.js";import"./Tappable-DfpzQKhB.js";import"./VisuallyHidden-DcQJc2es.js";import"./useGlobalEventListener-BXli_s0F.js";import"./useEventListener-C9KDACQG.js";import"./cancel_24-Cel532NE.js";import"./SimpleCell-D4GN_-pL.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ByXPLsYQ.js";import"./Headline-DW4C0RJJ.js";import"./Subhead-CM9E3HB6.js";import"./chevron_compact_right_24-DXvgvWyE.js";import"./chevron_16-CxZx8l_q.js";import"./AdaptiveIconRenderer-xeHgus70.js";import"./reorder_ios_24-BEN6KGLx.js";import"./check_box_on_24-BX5u79Qr.js";import"./check_circle_on_24-B4zt7gl-.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-CbMX-UYA.js";import"./Title-CkdPFRXw.js";import"./chevron_left_outline_28-BnWz5Pge.js";import"./chevron_left_outline_20-C5Eclvvd.js";import"./useBooleanState-6YMpJvg_.js";import"./useNativeFormResetListener-DJnR_8Ag.js";import"./Button-BXQ5RzYy.js";import"./clear_16-DeNybDuM.js";import"./search_outline_16-BOIhZYpv.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
