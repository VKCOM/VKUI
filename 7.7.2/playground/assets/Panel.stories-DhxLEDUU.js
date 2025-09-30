import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-qoTtUH8h.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CkZgodeV.js";import{C as t}from"./Cell-DHDSADlq.js";import{G as l}from"./Group-jWXxgMZf.js";import{P as s}from"./PanelHeaderBack-C6s2F5vC.js";import{S as j}from"./Search-DXbEmWkx.js";import{S as h}from"./Spinner-C8UkQVmM.js";import{I as b}from"./user_outline_28-aCuGnZzk.js";import{I as k}from"./users_outline_28-Bd6R49Hr.js";import{I as A}from"./music_outline_28-DX2E4kpz.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-DjQ3psw2.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-taKiFPaz.js";import"./useColorScheme-xLZC0aKi.js";import"./InputUtils-DCqC4s6H.js";import"./useFocusWithin-E39X-WYV.js";import"./useIsClient-BcbdMWH_.js";import"./useConfigDirection-DgRc04K6.js";import"./online_mobile_12-ucwY04eZ.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-CFszRLWh.js";import"./children-Tz7yKUE7.js";import"./IconButton-B17wjzUA.js";import"./Tappable-D-SlRlKJ.js";import"./VisuallyHidden-BqFtMTWb.js";import"./useGlobalEventListener-stOUD5xR.js";import"./useEventListener-Czd3Qf-C.js";import"./cancel_24-CLPDrLYl.js";import"./SimpleCell-CHXFqUrO.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DrM4b0WC.js";import"./Headline-BOHGExn8.js";import"./Subhead-B5MAyB6Q.js";import"./chevron_compact_right_24-DwIrQ_dr.js";import"./chevron_16-BxL5QhO0.js";import"./AdaptiveIconRenderer-Cl69QEek.js";import"./reorder_ios_24-TYe4fChw.js";import"./check_box_on_24-Dx1FKYI7.js";import"./check_circle_on_24-ArRvPyrj.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-B6XPCehY.js";import"./Title-ksxyfi6H.js";import"./chevron_left_outline_28-BXcJtMzX.js";import"./chevron_left_outline_20-ujKCL-Pw.js";import"./useBooleanState-CHQ6a7fI.js";import"./useNativeFormResetListener-By3eV_PD.js";import"./Button-qb2UxdVt.js";import"./clear_16-BHhch7lE.js";import"./search_outline_16-mQju_dqq.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Re={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
