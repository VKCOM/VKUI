import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-Bz8JpgqB.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-Djz9XYEE.js";import{C as t}from"./Cell-49yG8G3y.js";import{G as l}from"./Group-DTDZzv4b.js";import{P as s}from"./PanelHeaderBack-BDRvyIaB.js";import{S as j}from"./Search-Dp18wGKG.js";import{S as h}from"./Spinner-BdNNxg7b.js";import{I as b}from"./user_outline_28-BmxMrxaC.js";import{I as k}from"./users_outline_28-62uDnqmu.js";import{I as A}from"./music_outline_28-Dl5uoUYS.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-ClmHHqwk.js";import"./Clickable-C8sAptP9.js";import"./useFocusVisible-DI7o-w5D.js";import"./useFocusVisibleClassName-DeYZ6Bju.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-UmCFkqsi.js";import"./useColorScheme-DVyOIIkN.js";import"./InputUtils-C36z3TAr.js";import"./useFocusWithin-DoazkeVF.js";import"./useIsClient-BRGUFVjE.js";import"./useConfigDirection-1j4RIbQo.js";import"./online_mobile_12-BjrG8SuA.js";import"./SvgIconRootV2-PiPT7FW9.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-BGzPp3kl.js";import"./children-CZEp9rCJ.js";import"./IconButton-SCSZUFVl.js";import"./Tappable-DGSycWIS.js";import"./VisuallyHidden-Civmtkn4.js";import"./useGlobalEventListener-CHrHveT6.js";import"./useEventListener-D6V4uhmf.js";import"./cancel_24-RdK71gIA.js";import"./SimpleCell-BZ1hDoNl.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CXG5ZQyY.js";import"./Headline-DOUR4p3R.js";import"./Subhead-CQ9JxnC_.js";import"./chevron_compact_right_24-DCACY6v7.js";import"./chevron_16-r7AvM1qe.js";import"./AdaptiveIconRenderer-Dqx16JeB.js";import"./reorder_ios_24-C1cTNx6s.js";import"./check_box_on_24-CqvgWjWx.js";import"./check_circle_on_24-DEFiirW7.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-wyBE9soL.js";import"./Title-D2iv6BIz.js";import"./chevron_left_outline_28-DOBdgFtc.js";import"./chevron_left_outline_20-Dck12Yqu.js";import"./useBooleanState-B7Vw-Pot.js";import"./useNativeFormResetListener-BS-zCEtF.js";import"./Button-BGNgkvlW.js";import"./clear_16-ReAA29Eo.js";import"./search_outline_16-DBfTOQtv.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Re={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
