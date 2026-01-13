import{b as m,f as o,r as c,j as e,V as u,P as n}from"./iframe-DP0c1f9Y.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-CijdxBeh.js";import{C as t}from"./Cell-BMthsHY3.js";import{G as l}from"./Group-uVVNnULv.js";import{P as s}from"./PanelHeaderBack-CM9RQNai.js";import{S as f}from"./Search-CFREBVhq.js";import{S as v}from"./Spinner-Bk4bS91d.js";import{I as x}from"./user_outline_28-BktbLBkd.js";import{I as j}from"./users_outline_28-Bx1jgdtX.js";import{I as h}from"./music_outline_28-clFUDU82.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CQrk3-c4.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./ImageBaseBadge-D4hwrB2F.js";import"./useColorScheme-DuZucal0.js";import"./InputUtils-DpvhaK12.js";import"./useFocusWithin-CvS6Su5o.js";import"./useIsClient-RcRRrgRO.js";import"./useConfigDirection-BNkwGAZM.js";import"./online_mobile_12-Qc0twRcH.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./helpers-QklJbEbU.js";import"./Removable-BE-e-wqK.js";import"./children-Bag1sNQQ.js";import"./IconButton-DX6zaS9g.js";import"./Tappable-B2ZLiGfg.js";import"./VisuallyHidden-CsBByQHJ.js";import"./cancel_24-Cb6nnPMq.js";import"./SimpleCell-BUlM7B6J.js";import"./Footnote-DJoQQEv9.js";import"./Headline-D5yVS7YY.js";import"./Subhead-CZ6CT0II.js";import"./chevron_compact_right_24-DRgaqZzi.js";import"./chevron_16-CM-SIi30.js";import"./AdaptiveIconRenderer-C6EgprXt.js";import"./reorder_ios_24-Wjb1gd-Q.js";import"./check_box_on_24-D_JjkFdP.js";import"./check_circle_on_24-Bf67vp3K.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-Dmn8Tjst.js";import"./Title-S_74tDbu.js";import"./chevron_left_outline_28-BG7oXPG7.js";import"./chevron_left_outline_20-CUvTDHV1.js";import"./useBooleanState-CFH-Qq-E.js";import"./useNativeFormResetListener-s-K9-YPr.js";import"./Button-DYe3R3CT.js";import"./clear_16-p70laEFK.js";import"./search_outline_16-BBoezJaZ.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Oe={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
