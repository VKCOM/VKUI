import{r as u,aH as G,E as O,e as q,u as M,a7 as L,f as _,j as e,R as J,aI as E,aJ as K,aK as X,m as g,w as U,V as y,P as k,a as j}from"./iframe-Cn0klKvz.js";import{D as z,C as Q}from"./constants-DdkjnEgz.js";import{c as W}from"./createStoryParameters-CcwS40kl.js";import{C as S}from"./CellButton-CAbBHPkO.js";import{G as P}from"./Group-CNhzxREQ.js";import"./preload-helper-PPVm8Dsz.js";import"./SimpleCell-FhAfTR8Z.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./Footnote-BwZkqEqY.js";import"./Headline-DgEMhIVy.js";import"./Subhead-BQyoBjlR.js";import"./VisuallyHidden-C9tNf48m.js";import"./chevron_compact_right_24-BkZuF5w8.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./chevron_16-5H5JBddQ.js";const Y="_host_bt024_1",Z="_ios_bt024_11",$="_transition_bt024_17",ee="_view_bt024_21",te="_viewShowForward_bt024_27",ie="_viewHideBack_bt024_32",oe="_scrollCompensation_bt024_44",ne="_viewShowBack_bt024_53",ae="_viewHideForward_bt024_54",s={host:Y,ios:Z,transition:$,view:ee,viewShowForward:te,viewHideBack:ie,scrollCompensation:oe,viewShowBack:ne,viewHideForward:ae},w=({children:p,activeView:l,onTransition:c,nav:se,...R})=>{const C=u.useContext(G),D=O(),{document:b}=q(),[m]=u.useState(()=>new Map),[A]=u.useState(()=>new Map),{transitionMotionEnabled:H=!0}=M(),{animate:F}=u.useContext(L),v=!H||!F,x=u.Children.toArray(p),[{prevView:a,activeView:i,transition:o,isBack:n},B]=u.useState({activeView:l,transition:!1}),N=r=>{if(r!==i){const t=x.map(V=>E(V.props)),f=t.indexOf(r)<t.indexOf(i);m.set(i,C.getScroll().y),B({activeView:r,prevView:i,transition:!v,isBack:f})}},h=u.useCallback(()=>B({activeView:i,prevView:a,isBack:n,transition:!1}),[i,n,a]);_(()=>{b.activeElement.blur()},[i]),_(()=>N(l),[l]),_(()=>{!o&&a&&(C.scrollTo(0,n?m.get(i):0),c&&c({isBack:!!n,from:a,to:i}))},[o,a]),u.useEffect(function(){o&&v&&h()},[o,v,h]);const T=()=>{h()};return e.jsx(J,{...R,baseClassName:g(s.host,D==="ios"&&s.ios,o&&s.transition),children:x.map(r=>{const t=E(r.props);if(t!==i&&!(o&&t===a))return null;const f=o&&t===(n?a:i),V=o&&(t===a||n&&t===i);return e.jsx("div",{ref:I=>{t&&A.set(t,I)},onAnimationEnd:f?T:void 0,className:g(s.view,o&&t===a&&n&&s.viewHideBack,o&&t===a&&!n&&s.viewHideForward,o&&t===i&&n&&s.viewShowBack,o&&t===i&&!n&&s.viewShowForward),children:e.jsx(K,{isBack:n,children:e.jsx(X,{entering:o&&t===i,children:e.jsx("div",{className:s.scrollCompensation,style:{marginTop:V?t&&-(m.get(t)??0):void 0},children:r})})})},t)})})};try{w.displayName="Root",w.__docgenInfo={description:"",displayName:"Root",props:{activeView:{defaultValue:null,description:"`id` активной `View`.",name:"activeView",required:!0,type:{name:"string"}},onTransition:{defaultValue:null,description:"Обработчик, который вызывается при завершении анимации смены активной `View`.",name:"onTransition",required:!1,type:{name:"((params: { isBack: boolean; from: string; to: string; }) => void)"}},children:{defaultValue:null,description:"Коллекция `View`. У каждой `View` должен быть `id`.",name:"children",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactElement<unknown, string | JSXElementConstructor<any>>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},nav:{defaultValue:null,description:"Уникальный идентификатор навигационного элемента (вместо id)",name:"nav",required:!1,type:{name:"string"}}}}}catch{}const Pe={title:"Navigation/Root",component:w,parameters:W("Root",Q,z),decorators:[U],tags:["Навигация"]},d={render:function(){const[l,c]=u.useState("view1");return e.jsxs(w,{activeView:l,children:[e.jsx(y,{activePanel:"panel1.1",id:"view1",children:e.jsxs(k,{id:"panel1.1",children:[e.jsx(j,{children:"View 1"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(S,{onClick:()=>c("view2"),children:"Open View 2"}),e.jsx("div",{style:{height:600}})]})]})}),e.jsx(y,{activePanel:"panel2.1",id:"view2",children:e.jsxs(k,{id:"panel2.1",children:[e.jsx(j,{children:"View 2"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(S,{onClick:()=>c("view1"),children:"Back to View 1"}),e.jsx("div",{style:{height:600}})]})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Re=["Example"];export{d as Example,Re as __namedExportsOrder,Pe as default};
