import{r as s,ao as L,d as M,p as J,c as X,ap as K,m as _,j as e,R as U,i as E,aq as y,ar as z,as as Q,b as W,V as g,h as k,P as j}from"./iframe-C2_PECK0.js";import{D as Y,C as Z}from"./constants-DdkjnEgz.js";import{c as $}from"./createStoryParameters-CcwS40kl.js";import{C as R}from"./CellButton-DgaWpa-5.js";import{G as P}from"./Group-lIrBg-Y8.js";import"./SimpleCell-DNa3I5n_.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-DLQDSygG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Ctz6ZMd9.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BDpjj3t6.js";import"./Footnote-B_H7tDpo.js";import"./Headline-DKR4TEkK.js";import"./Subhead-tEP5dl-0.js";import"./chevron_compact_right_24-DnaIo2yl.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./chevron_16-Da1nGRlC.js";const ee="_host_1e804_1",ie="_ios_1e804_11",te="_transition_1e804_17",oe="_view_1e804_21",ne="_viewShowForward_1e804_27",ue="_viewHideBack_1e804_32",ae="_scrollCompensation_1e804_44",se="_viewShowBack_1e804_53",re="_viewHideForward_1e804_54",a={host:ee,ios:ie,transition:te,view:oe,viewShowForward:ne,viewHideBack:ue,scrollCompensation:ae,viewShowBack:se,viewHideForward:re},p=({children:w,activeView:l,onTransition:c,nav:le,...H})=>{const C=s.useContext(L),F=M(),{document:b}=J(),m=s.useRef({}).current,T=s.useRef({}).current,{transitionMotionEnabled:N=!0}=X(),{animate:I}=s.useContext(K),v=!N||!I,x=s.Children.toArray(w),[{prevView:u,activeView:t,transition:o,isBack:n},B]=s.useState({activeView:l,transition:!1}),q=r=>{if(r!==t){const i=x.map(V=>y(V.props)),f=i.indexOf(r)<i.indexOf(t);m[t]=C.getScroll().y,B({activeView:r,prevView:t,transition:!v,isBack:f})}},h=s.useCallback(()=>B({activeView:t,prevView:u,isBack:n,transition:!1}),[t,n,u]);_(()=>{b.activeElement.blur()},[t]),_(()=>q(l),[l]),_(()=>{!o&&u&&(C.scrollTo(0,n?m[t]:0),c&&c({isBack:!!n,from:u,to:t}))},[o,u]),s.useEffect(function(){o&&v&&h()},[o,v,h]);const G=()=>{h()};return e.jsx(U,{...H,baseClassName:E(a.host,F==="ios"&&a.ios,o&&a.transition),children:x.map(r=>{const i=y(r.props);if(i!==t&&!(o&&i===u))return null;const f=o&&i===(n?u:t),V=o&&(i===u||n&&i===t);return e.jsx("div",{ref:O=>{i&&(T[i]=O)},onAnimationEnd:f?G:void 0,className:E(a.view,o&&i===u&&n&&a.viewHideBack,o&&i===u&&!n&&a.viewHideForward,o&&i===t&&n&&a.viewShowBack,o&&i===t&&!n&&a.viewShowForward),children:e.jsx(z,{isBack:n,children:e.jsx(Q,{entering:o&&i===t,children:e.jsx("div",{className:a.scrollCompensation,style:{marginTop:V?i&&-(m[i]??0):void 0},children:r})})})},i)})})};try{p.displayName="Root",p.__docgenInfo={description:"",displayName:"Root",props:{activeView:{defaultValue:null,description:"`id` активной `View`.",name:"activeView",required:!0,type:{name:"string"}},onTransition:{defaultValue:null,description:"Обработчик, который вызывается при завершении анимации смены активной `View`.",name:"onTransition",required:!1,type:{name:"((params: { isBack: boolean; from: string; to: string; }) => void)"}},children:{defaultValue:null,description:"Коллекция `View`. У каждой `View` должен быть `id`.",name:"children",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactElement<unknown, string | JSXElementConstructor<any>>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},nav:{defaultValue:null,description:"Уникальный идентификатор навигационного элемента (вместо id)",name:"nav",required:!1,type:{name:"string"}}}}}catch{}const Se={title:"Layout/Root",component:p,parameters:$("Root",Z,Y),decorators:[W]},d={render:function(){const[l,c]=s.useState("view1");return e.jsxs(p,{activeView:l,children:[e.jsx(g,{activePanel:"panel1.1",id:"view1",children:e.jsxs(k,{id:"panel1.1",children:[e.jsx(j,{children:"View 1"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(R,{onClick:()=>c("view2"),children:"Open View 2"}),e.jsx("div",{style:{height:600}})]})]})}),e.jsx(g,{activePanel:"panel2.1",id:"view2",children:e.jsxs(k,{id:"panel2.1",children:[e.jsx(j,{children:"View 2"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(R,{onClick:()=>c("view1"),children:"Back to View 1"}),e.jsx("div",{style:{height:600}})]})]})})]})}};var S,D,A;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const De=["Example"];export{d as Example,De as __namedExportsOrder,Se as default};
