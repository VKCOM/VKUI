import{b as m,f as o,r as c,j as e,V as u,P as n}from"./iframe-BKqRoeRO.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CrqBO804.js";import{C as t}from"./Cell-wI4yBQPC.js";import{G as l}from"./Group-CgxNLM1q.js";import{P as s}from"./PanelHeaderBack-EIv56Mfc.js";import{S as f}from"./Search-D98IEJ_6.js";import{S as v}from"./Spinner-DWSu6VQp.js";import{I as x}from"./user_outline_28-CvC0IyxL.js";import{I as j}from"./users_outline_28-DwdTmEt0.js";import{I as h}from"./music_outline_28-BYdo-nAR.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-y9FR1LVQ.js";import"./Clickable-CadgeLyo.js";import"./useState-Db1sLetb.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./ImageBaseBadge-DvIHUtUv.js";import"./useColorScheme-CV37oJpw.js";import"./InputUtils-CQaATz1N.js";import"./useFocusWithin-cA-uu2zg.js";import"./useIsClient-DJKMF84F.js";import"./useConfigDirection-BH9mMD5y.js";import"./online_mobile_12-C3-ykd7K.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-BbK5TlWA.js";import"./children-Bm1QhBGC.js";import"./IconButton-CDypKmxT.js";import"./Tappable-EPRrmr_0.js";import"./VisuallyHidden-B-uFrHKw.js";import"./cancel_24-C2B5W1bI.js";import"./SimpleCell-SUBlx-6Z.js";import"./Footnote-BAb4Skv3.js";import"./Headline-CPNK2PuC.js";import"./Subhead-B3U-hqtC.js";import"./chevron_compact_right_24-C8sV5QGI.js";import"./chevron_16-o7PR2C3U.js";import"./AdaptiveIconRenderer-BhgbmtGf.js";import"./reorder_ios_24-DRf9w8zq.js";import"./check_box_on_24-7AEumDVf.js";import"./check_circle_on_24-DLZ-Vi44.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-D-iZ99bJ.js";import"./Title-j8cVZj0a.js";import"./chevron_left_outline_28-j_6lWvz0.js";import"./chevron_left_outline_20-e81f18Y3.js";import"./useBooleanState-D0nDf7gZ.js";import"./useNativeFormResetListener-_UQoO7ME.js";import"./Button-U9s7wDQC.js";import"./clear_16-Bo-gSsNk.js";import"./search_outline_16-DKUjtsJ_.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";const He={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["Playground"];export{i as Playground,Se as __namedExportsOrder,He as default};
