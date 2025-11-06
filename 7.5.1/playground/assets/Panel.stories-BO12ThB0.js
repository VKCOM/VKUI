import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-DZFG_ML5.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-Bncgf6u6.js";import{C as t}from"./Cell-W5CGL-Ez.js";import{G as l}from"./Group-DczfUVmx.js";import{P as s}from"./PanelHeaderBack-CQ9JzTv-.js";import{S as h}from"./Search-BbL-YxcC.js";import{S as j}from"./Spinner-Ds0i1YsX.js";import{I as b}from"./user_outline_28-CD_6Srdh.js";import{I as k}from"./users_outline_28-DJNRFR1V.js";import{I as A}from"./music_outline_28-jgi-0nQD.js";import"./ImageBase-B4zbJdM-.js";import"./Clickable-O0RRum4C.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-CL1M-Dxe.js";import"./useColorScheme-u4Oy3KJr.js";import"./InputUtils-rnqmQ_3Q.js";import"./useFocusWithin-DEb1HL1x.js";import"./useIsClient-CJjj9dyk.js";import"./useConfigDirection-BbxI4kck.js";import"./online_mobile_12-BHmKeFNg.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CKNjcJVv.js";import"./helpers-QklJbEbU.js";import"./Removable-BniJd5-v.js";import"./children-CbwhlWKb.js";import"./IconButton-C3HahQsG.js";import"./Tappable-DivmMzZn.js";import"./VisuallyHidden-DUSQwRyI.js";import"./useGlobalEventListener-is3gW8hR.js";import"./useEventListener-eXbAXU7E.js";import"./cancel_24-So4WKeZo.js";import"./SimpleCell-ebMZoKON.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CYznJAmV.js";import"./Headline-DDLNTO9r.js";import"./Subhead-D8223A8i.js";import"./chevron_compact_right_24-BccQ5rMW.js";import"./chevron_16-d4AUnQXG.js";import"./AdaptiveIconRenderer-DSX7hy_W.js";import"./reorder_ios_24-DJ_NLoiV.js";import"./check_box_on_24-3mUefpWG.js";import"./check_circle_on_24-BwzIIkyf.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DO3sTpY2.js";import"./Title-Yt5D65iS.js";import"./chevron_left_outline_28-B3rY2OIb.js";import"./chevron_left_outline_20-D4rkUcSq.js";import"./useBooleanState-CdIoqYcW.js";import"./useNativeFormResetListener-C03LfaNp.js";import"./Button-W48RXyAv.js";import"./clear_16-DQdWPUh1.js";import"./search_outline_16-SxaceGgI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const Ie={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d],tags:["Навигация"]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ye=["Playground"];export{i as Playground,ye as __namedExportsOrder,Ie as default};
