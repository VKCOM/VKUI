import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-DcUCz3Gq.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CQC0Jca3.js";import{C as t}from"./Cell-DMi1jj6D.js";import{G as l}from"./Group-qWIgZiP3.js";import{P as s}from"./PanelHeaderBack-ScvfyrQ4.js";import{S as f}from"./Search-BGbrkzw0.js";import{S as v}from"./Spinner-DB1TcyOv.js";import{I as x}from"./user_outline_28-DcLQ6LMO.js";import{I as j}from"./users_outline_28-nGqj3M6b.js";import{I as h}from"./music_outline_28-B-6FVDWC.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DaoVSz36.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-FhxxxNM2.js";import"./useColorScheme-DrgIsgMO.js";import"./InputUtils-Dt7ctke5.js";import"./useFocusWithin-4tbXXtmK.js";import"./useIsClient-blsjwI61.js";import"./useConfigDirection-BglQDqbm.js";import"./online_mobile_12-DF9nx8OV.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-Bl3ntWOu.js";import"./children-DDwVHqk6.js";import"./IconButton-CGiS95Aa.js";import"./Tappable-CGnYgxpx.js";import"./VisuallyHidden-IsgabQ9w.js";import"./useGlobalEventListener-JEtPNfzN.js";import"./useEventListener-D25pA6Ua.js";import"./cancel_24-DyhNO7vT.js";import"./SimpleCell-D963dulm.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-lAEBSvha.js";import"./Headline-_bBT78y6.js";import"./Subhead-CcORohtB.js";import"./chevron_compact_right_24-C6YK1MYa.js";import"./chevron_16-BE6lGA5Q.js";import"./AdaptiveIconRenderer-D8fi58IV.js";import"./reorder_ios_24-B8zIQhue.js";import"./check_box_on_24-CBAEM01i.js";import"./check_circle_on_24-UsLiUqKd.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-CO3IJ1zl.js";import"./Title-Cb6EL7Un.js";import"./chevron_left_outline_28-Da2NQpZ9.js";import"./chevron_left_outline_20-BgodPbFJ.js";import"./useBooleanState-Bvgv4ud3.js";import"./useNativeFormResetListener-DyoNPmmo.js";import"./Button-BU_mp-AO.js";import"./clear_16-n-XV9p3X.js";import"./search_outline_16-CAJS9Xvo.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
