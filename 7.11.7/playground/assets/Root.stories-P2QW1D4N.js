import{r as s,aN as O,c as G,p as q,m as L,aO as M,l as y,j as e,ad as J,R as X,h as B,aP as g,aQ as K,aR as Q,b as U,V as E,g as k,P}from"./iframe-CmkY54f5.js";import{D as z,C as W}from"./constants-DdkjnEgz.js";import{c as Y}from"./createStoryParameters-CcwS40kl.js";import{C as j}from"./CellButton-BN6UbE9a.js";import{G as R}from"./Group-6J2U7NrK.js";import"./preload-helper-PPVm8Dsz.js";import"./SimpleCell-CINcSEmj.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-DW-ilhli.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./InputUtils-UNO81DKX.js";import"./Footnote-Dh1koNQe.js";import"./Headline-DsYeFntm.js";import"./Subhead-BS8ES9bw.js";import"./VisuallyHidden-Da3ud9kw.js";import"./chevron_compact_right_24-CcDOCtXp.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CCLojpkC.js";const Z="_host_17b7y_1",$="_ios_17b7y_11",ee="_transition_17b7y_17",ie="_view_17b7y_21",te="_viewShowForward_17b7y_27",oe="_viewHideBack_17b7y_32",ne="_scrollCompensation_17b7y_44",ae="_viewShowBack_17b7y_53",re="_viewHideForward_17b7y_54",u={host:Z,ios:$,transition:ee,view:ie,viewShowForward:te,viewHideBack:oe,scrollCompensation:ne,viewShowBack:ae,viewHideForward:re},p=({children:m,activeView:l,onTransition:c,nav:ue,...S})=>{const x=s.useContext(O),b=G(),{document:D}=q(),w=s.useRef({}).current,A=s.useRef({}).current,{transitionMotionEnabled:F=!0}=L(),{animate:H}=s.useContext(M),v=!F||!H,C=s.Children.toArray(m),[{prevView:a,activeView:t,transition:o,isBack:n},_]=s.useState({activeView:l,transition:!1}),N=r=>{if(r!==t){const i=C.map(V=>g(V.props)),f=i.indexOf(r)<i.indexOf(t);w[t]=x.getScroll().y,_({activeView:r,prevView:t,transition:!v,isBack:f})}},h=s.useCallback(()=>_({activeView:t,prevView:a,isBack:n,transition:!1}),[t,n,a]);y(()=>{D.activeElement.blur()},[t]),y(()=>N(l),[l]),y(()=>{!o&&a&&(x.scrollTo(0,n?w[t]:0),c&&c({isBack:!!n,from:a,to:t}))},[o,a]),s.useEffect(function(){o&&v&&h()},[o,v,h]);const T=r=>{r.target===r.currentTarget&&h()};return e.jsx(J.Provider,{value:o,children:e.jsx(X,{...S,baseClassName:B(u.host,b==="ios"&&u.ios,o&&u.transition),children:C.map(r=>{const i=g(r.props);if(i!==t&&!(o&&i===a))return null;const f=o&&i===(n?a:t),V=o&&(i===a||n&&i===t);return e.jsx("div",{ref:I=>{i&&(A[i]=I)},onAnimationEnd:f?T:void 0,className:B(u.view,o&&i===a&&n&&u.viewHideBack,o&&i===a&&!n&&u.viewHideForward,o&&i===t&&n&&u.viewShowBack,o&&i===t&&!n&&u.viewShowForward),children:e.jsx(K,{isBack:n,children:e.jsx(Q,{entering:o&&i===t,children:e.jsx("div",{className:u.scrollCompensation,style:{marginTop:V?i&&-(w[i]??0):void 0},children:r})})})},i)})})})};try{p.displayName="Root",p.__docgenInfo={description:"",displayName:"Root",props:{activeView:{defaultValue:null,description:"`id` активной `View`.",name:"activeView",required:!0,type:{name:"string"}},onTransition:{defaultValue:null,description:"Обработчик, который вызывается при завершении анимации смены активной `View`.",name:"onTransition",required:!1,type:{name:"((params: { isBack: boolean; from: string; to: string; }) => void)"}},children:{defaultValue:null,description:"Коллекция `View`. У каждой `View` должен быть `id`.",name:"children",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactElement<unknown, string | JSXElementConstructor<any>>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},nav:{defaultValue:null,description:"Уникальный идентификатор навигационного элемента (вместо id)",name:"nav",required:!1,type:{name:"string"}}}}}catch{}const De={title:"Navigation/Root",component:p,parameters:Y("Root",W,z),decorators:[U],tags:["Навигация"]},d={render:function(){const[l,c]=s.useState("view1");return e.jsxs(p,{activeView:l,children:[e.jsx(E,{activePanel:"panel1.1",id:"view1",children:e.jsxs(k,{id:"panel1.1",children:[e.jsx(P,{children:"View 1"}),e.jsxs(R,{children:[e.jsx("div",{style:{height:200}}),e.jsx(j,{onClick:()=>c("view2"),children:"Open View 2"}),e.jsx("div",{style:{height:600}})]})]})}),e.jsx(E,{activePanel:"panel2.1",id:"view2",children:e.jsxs(k,{id:"panel2.1",children:[e.jsx(P,{children:"View 2"}),e.jsxs(R,{children:[e.jsx("div",{style:{height:200}}),e.jsx(j,{onClick:()=>c("view1"),children:"Back to View 1"}),e.jsx("div",{style:{height:600}})]})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ae=["Example"];export{d as Example,Ae as __namedExportsOrder,De as default};
