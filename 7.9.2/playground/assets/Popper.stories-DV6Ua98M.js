import{r as e,j as t}from"./iframe-CjlHPZNU.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-eWkGETfu.js";import{D as f}from"./Div-BZ1YOreV.js";import{P as a}from"./Popper-BxTlfMRp.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BqL1JLHM.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BhHQTREx.js";import"./Tappable-B5zgJODm.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CtpofEGa.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DGnaA_Jg.js";import"./useReferenceHiddenChangeCallback-BYBOPzRw.js";import"./AppRootPortal-D2B8wiWM.js";import"./useColorScheme-BIeu6EL3.js";import"./createPortal-CZhxf4lQ.js";import"./ColorSchemeProvider-DgPkTADU.js";import"./ConfigProviderOverride-BAEtQBTT.js";import"./FloatingArrow-CXk5BXWM.js";import"./usePlacementChangeCallback-BUGqU92G.js";import"./floating-ui.react-dom-BOvPne9Z.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [shown, setShown] = React.useState(args.shown || false);
    const buttonRef = React.useRef(null);
    return <React.Fragment>
        <Button getRootRef={buttonRef} onClick={() => setShown(!shown)}>
          {shown ? 'Закрыть' : 'Открыть'}
        </Button>
        {shown && <Popper usePortal={false} offsetByMainAxis={8} {...args} targetRef={buttonRef}>
            <Div>Привет</Div>
          </Popper>}
      </React.Fragment>;
  }
}`,...o.parameters?.docs?.source}}};const N=["Playground"];export{o as Playground,N as __namedExportsOrder,K as default};
