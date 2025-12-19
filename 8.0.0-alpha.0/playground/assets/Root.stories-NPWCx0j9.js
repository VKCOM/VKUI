import{r as u,aL as O,c as q,o as G,p as M,ax as L,q as y,j as e,R as J,g as B,aM as E,aN as X,aO as K,b as U,V as g,f as k,P as j}from"./iframe-CGSrC79H.js";import{D as z,C as Q}from"./constants-DdkjnEgz.js";import{c as W}from"./createStoryParameters-CcwS40kl.js";import{C as S}from"./CellButton-D2bt4WeO.js";import{G as P}from"./Group-DH0PWTW1.js";import"./preload-helper-PPVm8Dsz.js";import"./SimpleCell-DfFeOU4d.js";import"./Tappable-HtqfSGDW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DvGk0QGJ.js";import"./useState-DzaGsmJ4.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./InputUtils-AL_dRhAR.js";import"./Footnote-9-fttdTG.js";import"./Headline-DOU82LYx.js";import"./Subhead-BDUGOuQB.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./chevron_compact_right_24-BeoeYfvX.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-IEGQRb6X.js";const Y="_host_17b7y_1",Z="_ios_17b7y_11",$="_transition_17b7y_17",ee="_view_17b7y_21",ie="_viewShowForward_17b7y_27",te="_viewHideBack_17b7y_32",oe="_scrollCompensation_17b7y_44",ne="_viewShowBack_17b7y_53",ae="_viewHideForward_17b7y_54",s={host:Y,ios:Z,transition:$,view:ee,viewShowForward:ie,viewHideBack:te,scrollCompensation:oe,viewShowBack:ne,viewHideForward:ae},p=({children:w,activeView:l,onTransition:c,nav:se,...R})=>{const _=u.useContext(O),b=q(),{document:D}=G(),[m]=u.useState(()=>new Map),[A]=u.useState(()=>new Map),{transitionMotionEnabled:H=!0}=M(),{animate:F}=u.useContext(L),v=!H||!F,x=u.Children.toArray(w),[{prevView:a,activeView:t,transition:o,isBack:n},C]=u.useState({activeView:l,transition:!1}),N=r=>{if(r!==t){const i=x.map(V=>E(V.props)),f=i.indexOf(r)<i.indexOf(t);m.set(t,_.getScroll().y),C({activeView:r,prevView:t,transition:!v,isBack:f})}},h=u.useCallback(()=>C({activeView:t,prevView:a,isBack:n,transition:!1}),[t,n,a]);y(()=>{D.activeElement.blur()},[t]),y(()=>N(l),[l]),y(()=>{!o&&a&&(_.scrollTo(0,n?m.get(t):0),c&&c({isBack:!!n,from:a,to:t}))},[o,a]),u.useEffect(function(){o&&v&&h()},[o,v,h]);const T=()=>{h()};return e.jsx(J,{...R,baseClassName:B(s.host,b==="ios"&&s.ios,o&&s.transition),children:x.map(r=>{const i=E(r.props);if(i!==t&&!(o&&i===a))return null;const f=o&&i===(n?a:t),V=o&&(i===a||n&&i===t);return e.jsx("div",{ref:I=>{i&&A.set(i,I)},onAnimationEnd:f?T:void 0,className:B(s.view,o&&i===a&&n&&s.viewHideBack,o&&i===a&&!n&&s.viewHideForward,o&&i===t&&n&&s.viewShowBack,o&&i===t&&!n&&s.viewShowForward),children:e.jsx(X,{isBack:n,children:e.jsx(K,{entering:o&&i===t,children:e.jsx("div",{className:s.scrollCompensation,style:{marginTop:V?i&&-(m.get(i)??0):void 0},children:r})})})},i)})})};try{p.displayName="Root",p.__docgenInfo={description:"",displayName:"Root",props:{activeView:{defaultValue:null,description:"`id` активной `View`.",name:"activeView",required:!0,type:{name:"string"}},onTransition:{defaultValue:null,description:"Обработчик, который вызывается при завершении анимации смены активной `View`.",name:"onTransition",required:!1,type:{name:"((params: { isBack: boolean; from: string; to: string; }) => void)"}},children:{defaultValue:null,description:"Коллекция `View`. У каждой `View` должен быть `id`.",name:"children",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactElement<unknown, string | JSXElementConstructor<any>>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},nav:{defaultValue:null,description:"Уникальный идентификатор навигационного элемента (вместо id)",name:"nav",required:!1,type:{name:"string"}}}}}catch{}const Re={title:"Navigation/Root",component:p,parameters:W("Root",Q,z),decorators:[U],tags:["Навигация"]},d={render:function(){const[l,c]=u.useState("view1");return e.jsxs(p,{activeView:l,children:[e.jsx(g,{activePanel:"panel1.1",id:"view1",children:e.jsxs(k,{id:"panel1.1",children:[e.jsx(j,{children:"View 1"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(S,{onClick:()=>c("view2"),children:"Open View 2"}),e.jsx("div",{style:{height:600}})]})]})}),e.jsx(g,{activePanel:"panel2.1",id:"view2",children:e.jsxs(k,{id:"panel2.1",children:[e.jsx(j,{children:"View 2"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(S,{onClick:()=>c("view1"),children:"Back to View 1"}),e.jsx("div",{style:{height:600}})]})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const be=["Example"];export{d as Example,be as __namedExportsOrder,Re as default};
