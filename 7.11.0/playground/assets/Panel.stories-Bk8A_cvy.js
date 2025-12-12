import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-Db0SwwYs.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CWFchgG9.js";import{C as t}from"./Cell-Besd3YGk.js";import{G as l}from"./Group-DSFCK6DA.js";import{P as s}from"./PanelHeaderBack-DWgV3PnX.js";import{S as f}from"./Search-DxAHvLiF.js";import{S as v}from"./Spinner-Dy7IzRwA.js";import{I as x}from"./user_outline_28-BN-kIex5.js";import{I as j}from"./users_outline_28-BXtFOZvQ.js";import{I as h}from"./music_outline_28-DZpuSUmV.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-BKEGahLF.js";import"./Clickable-QJYjPwzV.js";import"./useState-_pDIeHd1.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./ImageBaseBadge-C9gdXUUv.js";import"./useColorScheme-BTSYlb-o.js";import"./InputUtils-DU65P5CC.js";import"./useFocusWithin-CRR7Gu3h.js";import"./useIsClient-CvbikZ8J.js";import"./useConfigDirection-BSBBgTCk.js";import"./online_mobile_12-70oY16eZ.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-DLHJRszG.js";import"./children-BEQ7OHl7.js";import"./IconButton-f4wUPwMX.js";import"./Tappable-DPDNr6uV.js";import"./VisuallyHidden-CZDmCAU7.js";import"./useGlobalEventListener-MEUpvqsm.js";import"./useEventListener-DVPMElTJ.js";import"./cancel_24-D88fKsYf.js";import"./SimpleCell-D8uMGlub.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CJOdhFdd.js";import"./Headline-BS3jMLtX.js";import"./Subhead-C2LPCYB7.js";import"./chevron_compact_right_24-DfrVw4fn.js";import"./chevron_16-DFxn-1ZI.js";import"./AdaptiveIconRenderer-BhTVyLiV.js";import"./reorder_ios_24-BmJKAww3.js";import"./check_box_on_24-DeHtilBI.js";import"./check_circle_on_24-CVkCaerG.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-OvzbCTKU.js";import"./Title-DrCXdOfJ.js";import"./chevron_left_outline_28-DXr2h4eW.js";import"./chevron_left_outline_20-Bm5ycyz6.js";import"./useBooleanState-CpWdKk8s.js";import"./useNativeFormResetListener-DGcdrBcB.js";import"./Button-DKPWjiCT.js";import"./clear_16-QrPZ1Hqn.js";import"./search_outline_16-DRqCcMYS.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
