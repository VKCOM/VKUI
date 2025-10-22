import{r as s,aB as q,c as G,q as O,m as L,aC as M,l as C,j as e,R as J,h as E,aD as g,aE as X,aF as K,b as U,V as y,g as k,P as j}from"./iframe-DvQ0hW0I.js";import{D as z,C as Q}from"./constants-DdkjnEgz.js";import{c as W}from"./createStoryParameters-CcwS40kl.js";import{C as R}from"./CellButton-DY1Kto_C.js";import{G as P}from"./Group-DlJj6tsg.js";import"./preload-helper-PPVm8Dsz.js";import"./SimpleCell-B1KXyTvt.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-CzBKs2NQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBovrC6X.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BSmatczf.js";import"./Footnote-DYSqrBFj.js";import"./Headline-U_eDzwn1.js";import"./Subhead-DE0FovKO.js";import"./VisuallyHidden-CGlAvVNH.js";import"./chevron_compact_right_24-CrJLC7s5.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-m8pRWD8o.js";const Y="_host_1e804_1",Z="_ios_1e804_11",$="_transition_1e804_17",ee="_view_1e804_21",ie="_viewShowForward_1e804_27",te="_viewHideBack_1e804_32",oe="_scrollCompensation_1e804_44",ne="_viewShowBack_1e804_53",ae="_viewHideForward_1e804_54",u={host:Y,ios:Z,transition:$,view:ee,viewShowForward:ie,viewHideBack:te,scrollCompensation:oe,viewShowBack:ne,viewHideForward:ae},p=({children:m,activeView:l,onTransition:c,nav:ue,...D})=>{const _=s.useContext(q),S=G(),{document:A}=O(),w=s.useRef({}).current,F=s.useRef({}).current,{transitionMotionEnabled:H=!0}=L(),{animate:b}=s.useContext(M),v=!H||!b,x=s.Children.toArray(m),[{prevView:a,activeView:t,transition:o,isBack:n},B]=s.useState({activeView:l,transition:!1}),N=r=>{if(r!==t){const i=x.map(V=>g(V.props)),f=i.indexOf(r)<i.indexOf(t);w[t]=_.getScroll().y,B({activeView:r,prevView:t,transition:!v,isBack:f})}},h=s.useCallback(()=>B({activeView:t,prevView:a,isBack:n,transition:!1}),[t,n,a]);C(()=>{A.activeElement.blur()},[t]),C(()=>N(l),[l]),C(()=>{!o&&a&&(_.scrollTo(0,n?w[t]:0),c&&c({isBack:!!n,from:a,to:t}))},[o,a]),s.useEffect(function(){o&&v&&h()},[o,v,h]);const T=()=>{h()};return e.jsx(J,{...D,baseClassName:E(u.host,S==="ios"&&u.ios,o&&u.transition),children:x.map(r=>{const i=g(r.props);if(i!==t&&!(o&&i===a))return null;const f=o&&i===(n?a:t),V=o&&(i===a||n&&i===t);return e.jsx("div",{ref:I=>{i&&(F[i]=I)},onAnimationEnd:f?T:void 0,className:E(u.view,o&&i===a&&n&&u.viewHideBack,o&&i===a&&!n&&u.viewHideForward,o&&i===t&&n&&u.viewShowBack,o&&i===t&&!n&&u.viewShowForward),children:e.jsx(X,{isBack:n,children:e.jsx(K,{entering:o&&i===t,children:e.jsx("div",{className:u.scrollCompensation,style:{marginTop:V?i&&-(w[i]??0):void 0},children:r})})})},i)})})};try{p.displayName="Root",p.__docgenInfo={description:"",displayName:"Root",props:{activeView:{defaultValue:null,description:"`id` активной `View`.",name:"activeView",required:!0,type:{name:"string"}},onTransition:{defaultValue:null,description:"Обработчик, который вызывается при завершении анимации смены активной `View`.",name:"onTransition",required:!1,type:{name:"((params: { isBack: boolean; from: string; to: string; }) => void)"}},children:{defaultValue:null,description:"Коллекция `View`. У каждой `View` должен быть `id`.",name:"children",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactElement<unknown, string | JSXElementConstructor<any>>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},nav:{defaultValue:null,description:"Уникальный идентификатор навигационного элемента (вместо id)",name:"nav",required:!1,type:{name:"string"}}}}}catch{}const Se={title:"Navigation/Root",component:p,parameters:W("Root",Q,z),decorators:[U],tags:["Навигация"]},d={render:function(){const[l,c]=s.useState("view1");return e.jsxs(p,{activeView:l,children:[e.jsx(y,{activePanel:"panel1.1",id:"view1",children:e.jsxs(k,{id:"panel1.1",children:[e.jsx(j,{children:"View 1"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(R,{onClick:()=>c("view2"),children:"Open View 2"}),e.jsx("div",{style:{height:600}})]})]})}),e.jsx(y,{activePanel:"panel2.1",id:"view2",children:e.jsxs(k,{id:"panel2.1",children:[e.jsx(j,{children:"View 2"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(R,{onClick:()=>c("view1"),children:"Back to View 1"}),e.jsx("div",{style:{height:600}})]})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ae=["Example"];export{d as Example,Ae as __namedExportsOrder,Se as default};
