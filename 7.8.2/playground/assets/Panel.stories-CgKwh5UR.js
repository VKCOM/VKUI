import{b as m,g as o,r as c,j as e,V as u,P as n}from"./iframe-DvQ0hW0I.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BTwGZh-N.js";import{C as t}from"./Cell-BAZKofZQ.js";import{G as l}from"./Group-DlJj6tsg.js";import{P as s}from"./PanelHeaderBack-Bbb9W8rb.js";import{S as f}from"./Search-BEntA8AQ.js";import{S as v}from"./Spinner-CAlwHhMu.js";import{I as x}from"./user_outline_28-DAsUJaP_.js";import{I as j}from"./users_outline_28-CZYI52Y8.js";import{I as h}from"./music_outline_28-eyiD4yUD.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-w-7-HB2A.js";import"./Clickable-CBovrC6X.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DWb_Z3tD.js";import"./useColorScheme-Du5ZuGtY.js";import"./InputUtils-BSmatczf.js";import"./useFocusWithin-C0XX_iqt.js";import"./useIsClient-DWoS3R9Q.js";import"./useConfigDirection-DmTY1Se6.js";import"./online_mobile_12-C81mBZXT.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-B6FxApdQ.js";import"./children-BdLlg6DR.js";import"./IconButton-Dmx4oOAb.js";import"./Tappable-CzBKs2NQ.js";import"./VisuallyHidden-CGlAvVNH.js";import"./useGlobalEventListener-Cq3tChGi.js";import"./useEventListener-BWoYhQmZ.js";import"./cancel_24-BcD8qa0A.js";import"./SimpleCell-B1KXyTvt.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DYSqrBFj.js";import"./Headline-U_eDzwn1.js";import"./Subhead-DE0FovKO.js";import"./chevron_compact_right_24-CrJLC7s5.js";import"./chevron_16-m8pRWD8o.js";import"./AdaptiveIconRenderer-Co7qE9ki.js";import"./reorder_ios_24-BZR57aXa.js";import"./check_box_on_24-DzSBkyrV.js";import"./check_circle_on_24-DystyaVO.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-oRj9KwEP.js";import"./Title-CHQ24GsB.js";import"./chevron_left_outline_28-DKDEsGE2.js";import"./chevron_left_outline_20-BP5SLsjC.js";import"./useBooleanState-Dgn4KllC.js";import"./useNativeFormResetListener-BSNOxUYz.js";import"./Button-DPGaTllJ.js";import"./clear_16-BOrkJtEo.js";import"./search_outline_16-Bh345Q9-.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
