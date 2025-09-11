import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-DfeTZ_Fw.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BtGg7nD-.js";import{C as t}from"./Cell-BwVXTCvf.js";import{G as l}from"./Group-ChVeS0N8.js";import{P as s}from"./PanelHeaderBack-CqhtIpSs.js";import{S as j}from"./Search-C1AmTBAW.js";import{S as h}from"./Spinner-Crblzylq.js";import{I as b}from"./user_outline_28-loEXZkTw.js";import{I as k}from"./users_outline_28-Rch3cMkD.js";import{I as A}from"./music_outline_28-DKSodWQs.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-DEZsD6YW.js";import"./Clickable-Bpx6dgEO.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-CFGlxEKL.js";import"./useColorScheme-BGgcYhBu.js";import"./InputUtils-C-I8ensD.js";import"./useFocusWithin-UgE2lzew.js";import"./useIsClient-D3QWm6mk.js";import"./useConfigDirection-CwjKsiym.js";import"./online_mobile_12-B0vcMB8K.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-RvrdKJgI.js";import"./children-DctjNuEY.js";import"./IconButton-CE4ifGYW.js";import"./Tappable-BBWke1IE.js";import"./VisuallyHidden-BuJles22.js";import"./useGlobalEventListener-BDSHjBL9.js";import"./useEventListener-DdaI75sW.js";import"./cancel_24-XhVC2QBS.js";import"./SimpleCell-BuvX657b.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ivEbNXOe.js";import"./Headline-BbT30PkZ.js";import"./Subhead-BkL8qoJh.js";import"./chevron_compact_right_24-zZ-JxscM.js";import"./chevron_16-w2grljdX.js";import"./AdaptiveIconRenderer-S9G6ZqOh.js";import"./reorder_ios_24-CyrNisjS.js";import"./check_box_on_24-C-Ehlzip.js";import"./check_circle_on_24-Bj8lnbOB.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-CcY6eXfT.js";import"./Title-BA2sPfYi.js";import"./chevron_left_outline_28-bGj1lNJw.js";import"./chevron_left_outline_20-BH5O8FRo.js";import"./useBooleanState-BOHvdNZv.js";import"./useNativeFormResetListener-DWH5lNmR.js";import"./Button-CYtH28qE.js";import"./clear_16-D-xwHOGc.js";import"./search_outline_16-CCHfu2df.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Re={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
