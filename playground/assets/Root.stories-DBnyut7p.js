import{r as s,aB as L,c as M,q as J,m as X,aC as K,l as C,j as e,R as U,h as E,aD as g,aE as z,aF as Q,b as W,V as y,g as k,P as j}from"./iframe-DfeTZ_Fw.js";import{D as Y,C as Z}from"./constants-DdkjnEgz.js";import{c as $}from"./createStoryParameters-CcwS40kl.js";import{C as R}from"./CellButton-CbR1aba2.js";import{G as P}from"./Group-ChVeS0N8.js";import"./preload-helper-Dp1pzeXC.js";import"./SimpleCell-BuvX657b.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-BBWke1IE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Bpx6dgEO.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C-I8ensD.js";import"./Footnote-ivEbNXOe.js";import"./Headline-BbT30PkZ.js";import"./Subhead-BkL8qoJh.js";import"./VisuallyHidden-BuJles22.js";import"./chevron_compact_right_24-zZ-JxscM.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-w2grljdX.js";const ee="_host_1e804_1",ie="_ios_1e804_11",te="_transition_1e804_17",oe="_view_1e804_21",ne="_viewShowForward_1e804_27",ae="_viewHideBack_1e804_32",ue="_scrollCompensation_1e804_44",se="_viewShowBack_1e804_53",re="_viewHideForward_1e804_54",u={host:ee,ios:ie,transition:te,view:oe,viewShowForward:ne,viewHideBack:ae,scrollCompensation:ue,viewShowBack:se,viewHideForward:re},p=({children:m,activeView:l,onTransition:c,nav:le,...F})=>{const _=s.useContext(L),H=M(),{document:b}=J(),w=s.useRef({}).current,N=s.useRef({}).current,{transitionMotionEnabled:T=!0}=X(),{animate:I}=s.useContext(K),v=!T||!I,x=s.Children.toArray(m),[{prevView:a,activeView:t,transition:o,isBack:n},B]=s.useState({activeView:l,transition:!1}),q=r=>{if(r!==t){const i=x.map(V=>g(V.props)),f=i.indexOf(r)<i.indexOf(t);w[t]=_.getScroll().y,B({activeView:r,prevView:t,transition:!v,isBack:f})}},h=s.useCallback(()=>B({activeView:t,prevView:a,isBack:n,transition:!1}),[t,n,a]);C(()=>{b.activeElement.blur()},[t]),C(()=>q(l),[l]),C(()=>{!o&&a&&(_.scrollTo(0,n?w[t]:0),c&&c({isBack:!!n,from:a,to:t}))},[o,a]),s.useEffect(function(){o&&v&&h()},[o,v,h]);const G=()=>{h()};return e.jsx(U,{...F,baseClassName:E(u.host,H==="ios"&&u.ios,o&&u.transition),children:x.map(r=>{const i=g(r.props);if(i!==t&&!(o&&i===a))return null;const f=o&&i===(n?a:t),V=o&&(i===a||n&&i===t);return e.jsx("div",{ref:O=>{i&&(N[i]=O)},onAnimationEnd:f?G:void 0,className:E(u.view,o&&i===a&&n&&u.viewHideBack,o&&i===a&&!n&&u.viewHideForward,o&&i===t&&n&&u.viewShowBack,o&&i===t&&!n&&u.viewShowForward),children:e.jsx(z,{isBack:n,children:e.jsx(Q,{entering:o&&i===t,children:e.jsx("div",{className:u.scrollCompensation,style:{marginTop:V?i&&-(w[i]??0):void 0},children:r})})})},i)})})};try{p.displayName="Root",p.__docgenInfo={description:"",displayName:"Root",props:{activeView:{defaultValue:null,description:"`id` активной `View`.",name:"activeView",required:!0,type:{name:"string"}},onTransition:{defaultValue:null,description:"Обработчик, который вызывается при завершении анимации смены активной `View`.",name:"onTransition",required:!1,type:{name:"((params: { isBack: boolean; from: string; to: string; }) => void)"}},children:{defaultValue:null,description:"Коллекция `View`. У каждой `View` должен быть `id`.",name:"children",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactElement<unknown, string | JSXElementConstructor<any>>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},nav:{defaultValue:null,description:"Уникальный идентификатор навигационного элемента (вместо id)",name:"nav",required:!1,type:{name:"string"}}}}}catch{}const He={title:"Navigation/Root",component:p,parameters:$("Root",Z,Y),decorators:[W],tags:["Навигация"]},d={render:function(){const[l,c]=s.useState("view1");return e.jsxs(p,{activeView:l,children:[e.jsx(y,{activePanel:"panel1.1",id:"view1",children:e.jsxs(k,{id:"panel1.1",children:[e.jsx(j,{children:"View 1"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(R,{onClick:()=>c("view2"),children:"Open View 2"}),e.jsx("div",{style:{height:600}})]})]})}),e.jsx(y,{activePanel:"panel2.1",id:"view2",children:e.jsxs(k,{id:"panel2.1",children:[e.jsx(j,{children:"View 2"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(R,{onClick:()=>c("view1"),children:"Back to View 1"}),e.jsx("div",{style:{height:600}})]})]})})]})}};var D,S,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: function Render() {
    const [activeView, setActiveView] = React.useState('view1');
    return <Root activeView={activeView}>
        <View activePanel="panel1.1" id="view1">
          <Panel id="panel1.1">
            <PanelHeader>View 1</PanelHeader>
            <Group>
              <div style={{
              height: 200
            }} />
              <CellButton onClick={() => setActiveView('view2')}>Open View 2</CellButton>
              <div style={{
              height: 600
            }} />
            </Group>
          </Panel>
        </View>
        <View activePanel="panel2.1" id="view2">
          <Panel id="panel2.1">
            <PanelHeader>View 2</PanelHeader>
            <Group>
              <div style={{
              height: 200
            }} />
              <CellButton onClick={() => setActiveView('view1')}>Back to View 1</CellButton>
              <div style={{
              height: 600
            }} />
            </Group>
          </Panel>
        </View>
      </Root>;
  }
}`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const be=["Example"];export{d as Example,be as __namedExportsOrder,He as default};
