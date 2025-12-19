import{b as m,f as o,r as c,j as e,V as u,P as n}from"./iframe-CGSrC79H.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-Dl6s_n2w.js";import{C as t}from"./Cell-CNqxogX7.js";import{G as l}from"./Group-DH0PWTW1.js";import{P as s}from"./PanelHeaderBack-DCPoMRgZ.js";import{S as f}from"./Search-DGpu0J9m.js";import{S as v}from"./Spinner-CLlWSgUI.js";import{I as x}from"./user_outline_28-CMyujfQ8.js";import{I as j}from"./users_outline_28-irBRKqkL.js";import{I as h}from"./music_outline_28-CxUr5rBg.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Dr0L0DbE.js";import"./Clickable-DvGk0QGJ.js";import"./useState-DzaGsmJ4.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./ImageBaseBadge-DwqbY7Wq.js";import"./useColorScheme-DM7MWYfE.js";import"./InputUtils-AL_dRhAR.js";import"./useFocusWithin-Bqhwx3UJ.js";import"./useIsClient-DIauWYrF.js";import"./useConfigDirection-BDt5-3HT.js";import"./online_mobile_12-i8dixzXS.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-D5hMMeds.js";import"./children-C-hCqQRI.js";import"./IconButton-Bq_FXaCp.js";import"./Tappable-HtqfSGDW.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./cancel_24-CsoSQ93Z.js";import"./SimpleCell-DfFeOU4d.js";import"./Footnote-9-fttdTG.js";import"./Headline-DOU82LYx.js";import"./Subhead-BDUGOuQB.js";import"./chevron_compact_right_24-BeoeYfvX.js";import"./chevron_16-IEGQRb6X.js";import"./AdaptiveIconRenderer-CSGInP8-.js";import"./reorder_ios_24-BjFEO8Vc.js";import"./check_box_on_24-C-ecraaY.js";import"./check_circle_on_24-e1d1quHA.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-6uIRYiPQ.js";import"./Title-29M-U6si.js";import"./chevron_left_outline_28-DGJaAk12.js";import"./chevron_left_outline_20-CVNV5cAz.js";import"./useBooleanState-BkBFPaFP.js";import"./useNativeFormResetListener-DbeuhCJS.js";import"./Button-JZGl9x8f.js";import"./clear_16-BR3jMMf4.js";import"./search_outline_16-B2mMrplc.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const He={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
