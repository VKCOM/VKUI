import{w as m,P as o,r as c,j as e,V as u,a as n}from"./iframe-CEhhJuIi.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-BXbZ9iu_.js";import{C as t}from"./Cell-Fksr_7Qm.js";import{G as l}from"./Group-B7hVT_g-.js";import{P as s}from"./PanelHeaderBack-BVcGQYtQ.js";import{S as f}from"./Search-YeAs6opE.js";import{S as v}from"./Spinner-C8mKPATK.js";import{I as x}from"./user_outline_28-Dkw3Tpuy.js";import{I as j}from"./users_outline_28-CFW4vxQN.js";import{I as h}from"./music_outline_28-D7f2qzm4.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CQrAJ7MZ.js";import"./Clickable-CSDkuBjh.js";import"./useState-BlpMLPZb.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./ImageBaseBadge-DJqxK3o9.js";import"./useColorScheme-C52TR78y.js";import"./InputUtils-CN8Bpeve.js";import"./useFocusWithin-D7grZ9Rv.js";import"./useIsClient-BaeDlb2D.js";import"./useConfigDirection-K0H5l3FT.js";import"./online_mobile_12-ByVNEgc4.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-BCfQmLaJ.js";import"./children-fYKiCF6j.js";import"./IconButton-D0BsKVg5.js";import"./Tappable-CTSOdpDd.js";import"./VisuallyHidden-BYulTkKK.js";import"./cancel_24-CHfH8s1a.js";import"./SimpleCell-CJqdGzsk.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-wldoNL-p.js";import"./Headline-C97-pQ4K.js";import"./Subhead-4zP8hIFm.js";import"./chevron_compact_right_24-DmTjrohB.js";import"./chevron_16-CMhnb1X0.js";import"./AdaptiveIconRenderer-B1bnvO5R.js";import"./reorder_ios_24-CH4-Ar_A.js";import"./check_box_on_24-tz3ud1kS.js";import"./check_circle_on_24-Bfyxjxww.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-Td-2TVdV.js";import"./Title-gWx-KNT-.js";import"./chevron_left_outline_28-GWdINPcL.js";import"./chevron_left_outline_20-004eD-mk.js";import"./useBooleanState-C3dujkKO.js";import"./useNativeFormResetListener-BZ0dDzL6.js";import"./Button-VHcOoYjV.js";import"./clear_16-Cob-MU78.js";import"./search_outline_16-D2apn1NB.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";const Se={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ge=["Playground"];export{i as Playground,ge as __namedExportsOrder,Se as default};
