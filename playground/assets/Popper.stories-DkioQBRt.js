import{r as e,j as t}from"./iframe-C4ttrVUJ.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-BdBXuQJY.js";import{D as f}from"./Div-Bv2x7FHc.js";import{P as a}from"./Popper-DFY7QZ5U.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CeIULbGb.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-XgvirjGY.js";import"./Tappable-CL0fK4DO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B80alsah.js";import"./useState-DqLBjAbD.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./InputUtils-CD1Rp_t7.js";import"./useReferenceHiddenChangeCallback-BPKnqOos.js";import"./AppRootPortal-DfuF7Oqt.js";import"./useColorScheme-CRY_65bE.js";import"./createPortal-BzUu3Hjp.js";import"./ColorSchemeProvider-DP16CCB3.js";import"./ConfigProviderOverride-BQtFiUwD.js";import"./FloatingArrow-DI1_-YRL.js";import"./usePlacementChangeCallback-DDIzKEgz.js";import"./floating-ui.react-dom-D2r8uzGZ.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
