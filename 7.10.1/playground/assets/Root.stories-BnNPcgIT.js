import{r as s,aL as O,c as G,p as q,m as L,aM as M,l as y,j as e,R as J,h as B,aN as E,aO as X,aP as K,b as U,V as g,g as k,P as j}from"./iframe-DhuutAfC.js";import{D as z,C as Q}from"./constants-DdkjnEgz.js";import{c as W}from"./createStoryParameters-CcwS40kl.js";import{C as P}from"./CellButton-DfZXUZx4.js";import{G as R}from"./Group-BZNrT2Zp.js";import"./preload-helper-PPVm8Dsz.js";import"./SimpleCell-Ik9ZceqB.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-tvWVp5xX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./InputUtils-BcFat9xH.js";import"./Footnote-BE0sRU6f.js";import"./Headline-CY9tv16R.js";import"./Subhead-N3Y6Abab.js";import"./VisuallyHidden-BkhWnsJf.js";import"./chevron_compact_right_24-e5As_rIW.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-B8RroCu2.js";const Y="_host_17b7y_1",Z="_ios_17b7y_11",$="_transition_17b7y_17",ee="_view_17b7y_21",ie="_viewShowForward_17b7y_27",te="_viewHideBack_17b7y_32",oe="_scrollCompensation_17b7y_44",ne="_viewShowBack_17b7y_53",ae="_viewHideForward_17b7y_54",u={host:Y,ios:Z,transition:$,view:ee,viewShowForward:ie,viewHideBack:te,scrollCompensation:oe,viewShowBack:ne,viewHideForward:ae},p=({children:m,activeView:l,onTransition:c,nav:ue,...S})=>{const _=s.useContext(O),b=G(),{document:D}=q(),w=s.useRef({}).current,A=s.useRef({}).current,{transitionMotionEnabled:H=!0}=L(),{animate:F}=s.useContext(M),v=!H||!F,C=s.Children.toArray(m),[{prevView:a,activeView:t,transition:o,isBack:n},x]=s.useState({activeView:l,transition:!1}),N=r=>{if(r!==t){const i=C.map(V=>E(V.props)),f=i.indexOf(r)<i.indexOf(t);w[t]=_.getScroll().y,x({activeView:r,prevView:t,transition:!v,isBack:f})}},h=s.useCallback(()=>x({activeView:t,prevView:a,isBack:n,transition:!1}),[t,n,a]);y(()=>{D.activeElement.blur()},[t]),y(()=>N(l),[l]),y(()=>{!o&&a&&(_.scrollTo(0,n?w[t]:0),c&&c({isBack:!!n,from:a,to:t}))},[o,a]),s.useEffect(function(){o&&v&&h()},[o,v,h]);const T=()=>{h()};return e.jsx(J,{...S,baseClassName:B(u.host,b==="ios"&&u.ios,o&&u.transition),children:C.map(r=>{const i=E(r.props);if(i!==t&&!(o&&i===a))return null;const f=o&&i===(n?a:t),V=o&&(i===a||n&&i===t);return e.jsx("div",{ref:I=>{i&&(A[i]=I)},onAnimationEnd:f?T:void 0,className:B(u.view,o&&i===a&&n&&u.viewHideBack,o&&i===a&&!n&&u.viewHideForward,o&&i===t&&n&&u.viewShowBack,o&&i===t&&!n&&u.viewShowForward),children:e.jsx(X,{isBack:n,children:e.jsx(K,{entering:o&&i===t,children:e.jsx("div",{className:u.scrollCompensation,style:{marginTop:V?i&&-(w[i]??0):void 0},children:r})})})},i)})})};try{p.displayName="Root",p.__docgenInfo={description:"",displayName:"Root",props:{activeView:{defaultValue:null,description:"`id` активной `View`.",name:"activeView",required:!0,type:{name:"string"}},onTransition:{defaultValue:null,description:"Обработчик, который вызывается при завершении анимации смены активной `View`.",name:"onTransition",required:!1,type:{name:"((params: { isBack: boolean; from: string; to: string; }) => void)"}},children:{defaultValue:null,description:"Коллекция `View`. У каждой `View` должен быть `id`.",name:"children",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactElement<unknown, string | JSXElementConstructor<any>>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},nav:{defaultValue:null,description:"Уникальный идентификатор навигационного элемента (вместо id)",name:"nav",required:!1,type:{name:"string"}}}}}catch{}const be={title:"Navigation/Root",component:p,parameters:W("Root",Q,z),decorators:[U],tags:["Навигация"]},d={render:function(){const[l,c]=s.useState("view1");return e.jsxs(p,{activeView:l,children:[e.jsx(g,{activePanel:"panel1.1",id:"view1",children:e.jsxs(k,{id:"panel1.1",children:[e.jsx(j,{children:"View 1"}),e.jsxs(R,{children:[e.jsx("div",{style:{height:200}}),e.jsx(P,{onClick:()=>c("view2"),children:"Open View 2"}),e.jsx("div",{style:{height:600}})]})]})}),e.jsx(g,{activePanel:"panel2.1",id:"view2",children:e.jsxs(k,{id:"panel2.1",children:[e.jsx(j,{children:"View 2"}),e.jsxs(R,{children:[e.jsx("div",{style:{height:200}}),e.jsx(P,{onClick:()=>c("view1"),children:"Back to View 1"}),e.jsx("div",{style:{height:600}})]})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const De=["Example"];export{d as Example,De as __namedExportsOrder,be as default};
