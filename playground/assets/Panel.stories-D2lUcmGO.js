import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-DhuutAfC.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CfoX7h1q.js";import{C as t}from"./Cell-CN0QgLTh.js";import{G as l}from"./Group-BZNrT2Zp.js";import{P as s}from"./PanelHeaderBack-CVSthn6w.js";import{S as f}from"./Search-DM7SpXnG.js";import{S as v}from"./Spinner-gmUVON3e.js";import{I as x}from"./user_outline_28--6C-Wafb.js";import{I as j}from"./users_outline_28-BwIqwd0U.js";import{I as h}from"./music_outline_28-Ckyg2Kr3.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DRHnsmF9.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./ImageBaseBadge-C-TjMgFh.js";import"./useColorScheme-BGUvzePH.js";import"./InputUtils-BcFat9xH.js";import"./useFocusWithin-TQRavq7I.js";import"./useIsClient-C6EQizwd.js";import"./useConfigDirection-BKOpe2-3.js";import"./online_mobile_12-B0P5OQgy.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-WF0wvkrR.js";import"./children-f71tIclX.js";import"./IconButton-CS1h91J8.js";import"./Tappable-tvWVp5xX.js";import"./VisuallyHidden-BkhWnsJf.js";import"./useGlobalEventListener-B3NjbVmX.js";import"./useEventListener-BINAhqZ-.js";import"./cancel_24-DOIBb5nA.js";import"./SimpleCell-Ik9ZceqB.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BE0sRU6f.js";import"./Headline-CY9tv16R.js";import"./Subhead-N3Y6Abab.js";import"./chevron_compact_right_24-e5As_rIW.js";import"./chevron_16-B8RroCu2.js";import"./AdaptiveIconRenderer-C_lOOdXP.js";import"./reorder_ios_24-5ExYPhZY.js";import"./check_box_on_24-DrP2BaSr.js";import"./check_circle_on_24-DIO2EvKW.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DP4D98Cl.js";import"./Title-BixyGD4w.js";import"./chevron_left_outline_28-DstL_OmN.js";import"./chevron_left_outline_20-BFW3SHD3.js";import"./useBooleanState-D-KuXqfN.js";import"./useNativeFormResetListener-BYpumOEf.js";import"./Button-Id7-fKaz.js";import"./clear_16-CKgm9LeN.js";import"./search_outline_16-aW4du7Sp.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
