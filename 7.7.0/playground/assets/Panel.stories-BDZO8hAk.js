import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-B4SbMwac.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CoSV9blQ.js";import{C as t}from"./Cell-pnWZseGv.js";import{G as l}from"./Group-BdqZOTIB.js";import{P as s}from"./PanelHeaderBack-CkOODDj2.js";import{S as j}from"./Search-SlBY6xRt.js";import{S as h}from"./Spinner-CVJ-p2Lm.js";import{I as b}from"./user_outline_28-ND-YQYvw.js";import{I as k}from"./users_outline_28-CLU1gUvr.js";import{I as A}from"./music_outline_28-CYJspOcJ.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-JYJo2bcq.js";import"./Clickable-LHka_ZWc.js";import"./useFocusVisible-CA0gmOpw.js";import"./useFocusVisibleClassName-CYMT8ouX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Bgt2c9nz.js";import"./useColorScheme-D4AzIlWD.js";import"./InputUtils-C948cbKc.js";import"./useFocusWithin-to_rIq53.js";import"./useIsClient-BLqc0TVE.js";import"./useConfigDirection-D94ZyAhW.js";import"./online_mobile_12-CG4amDzl.js";import"./SvgIconRootV2-CSlzNDT1.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-BMbXMjJQ.js";import"./children-hJQIY4yI.js";import"./IconButton-BrekU4vj.js";import"./Tappable-DlzKIRC8.js";import"./VisuallyHidden-B_fMC41X.js";import"./useGlobalEventListener-CEYAu_n8.js";import"./useEventListener-D7G2gz9_.js";import"./cancel_24-BiaNkhfM.js";import"./SimpleCell-B3xHvs3D.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-PzIaqeP1.js";import"./Headline-DyfFpR9w.js";import"./Subhead-BszjoIm7.js";import"./chevron_compact_right_24-Bbxtve_V.js";import"./chevron_16-DNg3QADm.js";import"./AdaptiveIconRenderer-CR9XwE1z.js";import"./reorder_ios_24-BRQYG2yD.js";import"./check_box_on_24-DYECzjEP.js";import"./check_circle_on_24-C-1w6mRA.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-QyaDVEWX.js";import"./Title-BLmuK8KQ.js";import"./chevron_left_outline_28-RkgIptks.js";import"./chevron_left_outline_20-B7gtEROt.js";import"./useBooleanState-bhPTuEjF.js";import"./useNativeFormResetListener-CZf2q7UK.js";import"./Button-CqwGeWDr.js";import"./clear_16-BqDvWJPT.js";import"./search_outline_16-BROvcPim.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Re={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
