import{b as d,g as o,r as C,j as e,V as P,P as n}from"./iframe-DdjuqQRP.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-jq-jNAjW.js";import{C as t}from"./Cell-B4v7oRym.js";import{G as l}from"./Group-En8sMpzv.js";import{P as s}from"./PanelHeaderBack-D35PyA_G.js";import{S as j}from"./Search-zeoyl2KH.js";import{S as h}from"./Spinner-CywFefQr.js";import{I as b}from"./user_outline_28-CmjSHsNo.js";import{I as k}from"./users_outline_28-BW5AmRRb.js";import{I as A}from"./music_outline_28-dsIC2gHG.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-DW1D2uag.js";import"./Clickable-CMjmakJq.js";import"./useFocusVisibleClassName-DIZrWJUe.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DbSUYPlc.js";import"./useColorScheme-CYrptSaC.js";import"./InputUtils-DQHFk4OZ.js";import"./useFocusWithin-BBPiXwue.js";import"./useIsClient-D4GCM_VE.js";import"./useConfigDirection-DvOEXyz7.js";import"./online_mobile_12-CcEC3FB8.js";import"./SvgIconRootV2-BHNoZcvi.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-DGD-GK2i.js";import"./children-C7QEwmfw.js";import"./IconButton-B3vqP3ir.js";import"./Tappable-BrYIPFio.js";import"./VisuallyHidden-DYNTcNls.js";import"./useGlobalEventListener-DUEl-XhX.js";import"./useEventListener-CEBYRcj_.js";import"./cancel_24-BfZOhllk.js";import"./SimpleCell-UVEHW4WY.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BRLGHUUX.js";import"./Headline-nhn3N_7L.js";import"./Subhead-BeRrVUPj.js";import"./chevron_compact_right_24-Clgo9SPj.js";import"./chevron_16-XmJ4kBUZ.js";import"./AdaptiveIconRenderer-jHp-aCDa.js";import"./reorder_ios_24-Bdidmjbb.js";import"./check_box_on_24-b-kayTTI.js";import"./check_circle_on_24-vl9yPXRK.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-BFOlH-MZ.js";import"./Title-SR3J6img.js";import"./chevron_left_outline_28-BiZqV95z.js";import"./chevron_left_outline_20-BFaOXy4j.js";import"./useBooleanState-Cr2Fa3Eh.js";import"./useNativeFormResetListener-Di-ssM6A.js";import"./Button-h87Efeih.js";import"./clear_16-BlkSNVbY.js";import"./search_outline_16-DZzrRfJv.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Me={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(j,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(h,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Re=["Playground"];export{i as Playground,Re as __namedExportsOrder,Me as default};
