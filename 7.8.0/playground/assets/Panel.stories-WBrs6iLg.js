import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-F_0bvJrc.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-Bsv1rUL7.js";import{C as t}from"./Cell-Ch7_0cLP.js";import{G as l}from"./Group-DWRY0NV1.js";import{P as s}from"./PanelHeaderBack-X1X-pFnY.js";import{S as f}from"./Search-BzlKkZAF.js";import{S as v}from"./Spinner-D7kEFt-1.js";import{I as x}from"./user_outline_28-OTXZx1Fx.js";import{I as j}from"./users_outline_28-rly6SMde.js";import{I as h}from"./music_outline_28-4zzjwlNV.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-NzuhIIti.js";import"./Clickable-B4aTO_qb.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Dx1ll0L6.js";import"./useColorScheme-CMuS3Rce.js";import"./InputUtils-CneTbOko.js";import"./useFocusWithin-CDt5X1od.js";import"./useIsClient-CSY1-Ql9.js";import"./useConfigDirection-poWhsvcV.js";import"./online_mobile_12-DoUW3apm.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-CQf4vu_q.js";import"./children-CfV6Kr3n.js";import"./IconButton-BHFFi_8a.js";import"./Tappable-DJ3rCQkY.js";import"./VisuallyHidden-CRrL_L2y.js";import"./useGlobalEventListener-Y3RIl-_k.js";import"./useEventListener-DlnjWBsX.js";import"./cancel_24-CEwNt985.js";import"./SimpleCell-DW3d0xtM.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DfPFidfa.js";import"./Headline-B-xJiW6B.js";import"./Subhead-CtWFTcAD.js";import"./chevron_compact_right_24-CTggJSQ-.js";import"./chevron_16--5zekb9K.js";import"./AdaptiveIconRenderer-B_n2KyC-.js";import"./reorder_ios_24-GAWcheSo.js";import"./check_box_on_24-B9qcgNo6.js";import"./check_circle_on_24-DOlEs5el.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-CH8QzJHV.js";import"./Title-BNzhyC_D.js";import"./chevron_left_outline_28-Cihnbsno.js";import"./chevron_left_outline_20-DWHaa5vd.js";import"./useBooleanState-Bze2nNFK.js";import"./useNativeFormResetListener-C11ImeZp.js";import"./Button-OQORbYpv.js";import"./clear_16-BPlmX8ts.js";import"./search_outline_16-4WqwHCSi.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
