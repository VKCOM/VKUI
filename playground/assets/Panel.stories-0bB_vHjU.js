import{w as m,P as o,r as c,j as e,V as u,a as n}from"./iframe-Cn0klKvz.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CT-zlOwi.js";import{C as t}from"./Cell-CddNJcfs.js";import{G as l}from"./Group-CNhzxREQ.js";import{P as s}from"./PanelHeaderBack-BupP6OB1.js";import{S as f}from"./Search-DSM4Auia.js";import{S as v}from"./Spinner-Dez3qxwZ.js";import{I as x}from"./user_outline_28-CqikZDro.js";import{I as j}from"./users_outline_28-CmM5LSVt.js";import{I as h}from"./music_outline_28-S4X4ATWc.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-BDlDuAlq.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./ImageBaseBadge-CMNLexKF.js";import"./useColorScheme-C7zCwRzY.js";import"./InputUtils-B6qCikuW.js";import"./useFocusWithin-GdWsk7hi.js";import"./useIsClient-CY4E_kP3.js";import"./useConfigDirection-DuEYXWS_.js";import"./online_mobile_12-BKRTJpWf.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./helpers-QklJbEbU.js";import"./Removable-DJHs5oKA.js";import"./children-IiL0uSHX.js";import"./IconButton-DSEgeqcd.js";import"./Tappable-CVh4vgq8.js";import"./VisuallyHidden-C9tNf48m.js";import"./cancel_24-C8myLtmO.js";import"./SimpleCell-FhAfTR8Z.js";import"./Footnote-BwZkqEqY.js";import"./Headline-DgEMhIVy.js";import"./Subhead-BQyoBjlR.js";import"./chevron_compact_right_24-BkZuF5w8.js";import"./chevron_16-5H5JBddQ.js";import"./AdaptiveIconRenderer-BkROPn6l.js";import"./reorder_ios_24-C_2PjSLX.js";import"./check_box_on_24-DFXb0s76.js";import"./check_circle_on_24-D20_x5sk.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-BYqA14CU.js";import"./Title-C-xuvkmu.js";import"./chevron_left_outline_28-DMU6b4wv.js";import"./chevron_left_outline_20-9God32SQ.js";import"./useBooleanState-CzvJFu2k.js";import"./useNativeFormResetListener-BsKljoWK.js";import"./Button-D37nVvnc.js";import"./clear_16-AUqteKiH.js";import"./search_outline_16-BlvOSkKn.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";const Oe={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const He=["Playground"];export{i as Playground,He as __namedExportsOrder,Oe as default};
