import{w as m,P as o,r as c,j as e,V as u,a as n}from"./iframe-CDzsgUJ6.js";import{D as d,C}from"./constants-DdkjnEgz.js";import{c as P}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-P09vjEf9.js";import{C as t}from"./Cell-BwqG9bVQ.js";import{G as l}from"./Group-BHUvSep0.js";import{P as s}from"./PanelHeaderBack-IbbqPiHx.js";import{S as f}from"./Search-CDvxg50Q.js";import{S as v}from"./Spinner-D6Csl20o.js";import{I as x}from"./user_outline_28-DL7muCbc.js";import{I as j}from"./users_outline_28-BBpkewX8.js";import{I as h}from"./music_outline_28-B-vDWKFi.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Dib2k8_n.js";import"./Clickable-Dfoj99Ww.js";import"./useState-QDdZr02K.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./ImageBaseBadge-BJaRDGAe.js";import"./useColorScheme-BJ9q12Ap.js";import"./InputUtils-DkBsdccT.js";import"./useFocusWithin-UKmiu0Co.js";import"./useIsClient-CDj3wCHu.js";import"./useConfigDirection-BVbAx_rU.js";import"./online_mobile_12-D0RCPVny.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Removable-DwrvQD9J.js";import"./children-__GeZXUq.js";import"./IconButton-DmVT1v_5.js";import"./Tappable-BF8rCM_k.js";import"./VisuallyHidden-hrbUbT1W.js";import"./cancel_24-D42vZ9MX.js";import"./SimpleCell-BDHKWT_s.js";import"./Footnote-EhoXcm5o.js";import"./Headline-BViG_F4T.js";import"./Subhead-BNbydgjR.js";import"./chevron_compact_right_24-LzGagLF8.js";import"./chevron_16-BoVPvRqg.js";import"./AdaptiveIconRenderer-DYyXL8CC.js";import"./reorder_ios_24-pUC9VdWS.js";import"./check_box_on_24-CVoHOfkf.js";import"./check_circle_on_24-DAurImow.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-CXrOsb3Q.js";import"./Title-Q5c-cjF2.js";import"./chevron_left_outline_28-xeHM88FM.js";import"./chevron_left_outline_20-Bp5lQnXu.js";import"./useBooleanState-CnmcT8ct.js";import"./useNativeFormResetListener-DjcK7FVz.js";import"./Button-DrWhGNV0.js";import"./clear_16-QsHFcIy7.js";import"./search_outline_16-DOzVRN6B.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";const He={title:"Navigation/Panel",component:o,parameters:P("Panel",C,d),decorators:[m],tags:["Навигация"]},i={render:function(){const[p,r]=c.useState("panel1");return e.jsxs(u,{activePanel:p,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(x,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(j,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(h,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(f,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(v,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
