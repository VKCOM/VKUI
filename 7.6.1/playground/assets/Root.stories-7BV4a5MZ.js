import{r as s,av as L,c as M,p as J,m as X,aw as z,l as _,j as e,R as K,h as E,ax as y,ay as U,az as Q,b as W,V as g,g as k,P as j}from"./iframe-CkliH7Ym.js";import{D as Y,C as Z}from"./constants-DdkjnEgz.js";import{c as $}from"./createStoryParameters-CcwS40kl.js";import{C as R}from"./CellButton-nj8ZCN_A.js";import{G as P}from"./Group-CJ2H9PHw.js";import"./preload-helper-Dp1pzeXC.js";import"./SimpleCell-JD8osR6E.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-fZc2zE5Y.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D0QQafOF.js";import"./useFocusVisibleClassName-Bnsyl2mE.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BZxXqLFf.js";import"./Footnote-CVpuTKzI.js";import"./Headline-BEImhDVB.js";import"./Subhead-DmZ-gnSD.js";import"./VisuallyHidden-Dn7EkmGE.js";import"./chevron_compact_right_24-IyXI54Ns.js";import"./SvgIconRootV2-DWb7sWtR.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-DP-Hpqqm.js";const ee="_host_1e804_1",ie="_ios_1e804_11",te="_transition_1e804_17",oe="_view_1e804_21",ne="_viewShowForward_1e804_27",ae="_viewHideBack_1e804_32",ue="_scrollCompensation_1e804_44",se="_viewShowBack_1e804_53",re="_viewHideForward_1e804_54",u={host:ee,ios:ie,transition:te,view:oe,viewShowForward:ne,viewHideBack:ae,scrollCompensation:ue,viewShowBack:se,viewHideForward:re},p=({children:w,activeView:l,onTransition:c,nav:le,...H})=>{const x=s.useContext(L),F=M(),{document:b}=J(),m=s.useRef({}).current,N=s.useRef({}).current,{transitionMotionEnabled:T=!0}=X(),{animate:I}=s.useContext(z),v=!T||!I,C=s.Children.toArray(w),[{prevView:a,activeView:t,transition:o,isBack:n},B]=s.useState({activeView:l,transition:!1}),G=r=>{if(r!==t){const i=C.map(V=>y(V.props)),f=i.indexOf(r)<i.indexOf(t);m[t]=x.getScroll().y,B({activeView:r,prevView:t,transition:!v,isBack:f})}},h=s.useCallback(()=>B({activeView:t,prevView:a,isBack:n,transition:!1}),[t,n,a]);_(()=>{b.activeElement.blur()},[t]),_(()=>G(l),[l]),_(()=>{!o&&a&&(x.scrollTo(0,n?m[t]:0),c&&c({isBack:!!n,from:a,to:t}))},[o,a]),s.useEffect(function(){o&&v&&h()},[o,v,h]);const O=()=>{h()};return e.jsx(K,{...H,baseClassName:E(u.host,F==="ios"&&u.ios,o&&u.transition),children:C.map(r=>{const i=y(r.props);if(i!==t&&!(o&&i===a))return null;const f=o&&i===(n?a:t),V=o&&(i===a||n&&i===t);return e.jsx("div",{ref:q=>{i&&(N[i]=q)},onAnimationEnd:f?O:void 0,className:E(u.view,o&&i===a&&n&&u.viewHideBack,o&&i===a&&!n&&u.viewHideForward,o&&i===t&&n&&u.viewShowBack,o&&i===t&&!n&&u.viewShowForward),children:e.jsx(U,{isBack:n,children:e.jsx(Q,{entering:o&&i===t,children:e.jsx("div",{className:u.scrollCompensation,style:{marginTop:V?i&&-(m[i]??0):void 0},children:r})})})},i)})})};try{p.displayName="Root",p.__docgenInfo={description:"",displayName:"Root",props:{activeView:{defaultValue:null,description:"`id` активной `View`.",name:"activeView",required:!0,type:{name:"string"}},onTransition:{defaultValue:null,description:"Обработчик, который вызывается при завершении анимации смены активной `View`.",name:"onTransition",required:!1,type:{name:"((params: { isBack: boolean; from: string; to: string; }) => void)"}},children:{defaultValue:null,description:"Коллекция `View`. У каждой `View` должен быть `id`.",name:"children",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactElement<unknown, string | JSXElementConstructor<any>>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},nav:{defaultValue:null,description:"Уникальный идентификатор навигационного элемента (вместо id)",name:"nav",required:!1,type:{name:"string"}}}}}catch{}const He={title:"Navigation/Root",component:p,parameters:$("Root",Z,Y),decorators:[W],tags:["Навигация"]},d={render:function(){const[l,c]=s.useState("view1");return e.jsxs(p,{activeView:l,children:[e.jsx(g,{activePanel:"panel1.1",id:"view1",children:e.jsxs(k,{id:"panel1.1",children:[e.jsx(j,{children:"View 1"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(R,{onClick:()=>c("view2"),children:"Open View 2"}),e.jsx("div",{style:{height:600}})]})]})}),e.jsx(g,{activePanel:"panel2.1",id:"view2",children:e.jsxs(k,{id:"panel2.1",children:[e.jsx(j,{children:"View 2"}),e.jsxs(P,{children:[e.jsx("div",{style:{height:200}}),e.jsx(R,{onClick:()=>c("view1"),children:"Back to View 1"}),e.jsx("div",{style:{height:600}})]})]})})]})}};var S,D,A;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Fe=["Example"];export{d as Example,Fe as __namedExportsOrder,He as default};
