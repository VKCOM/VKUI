import{r as e,j as t}from"./iframe-BJ9555aC.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-BbA_I1es.js";import{D as f}from"./Div-BelP9K-l.js";import{P as a}from"./Popper-BhaeA0Qs.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CsAXLMyU.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BpRJPd7L.js";import"./Tappable-Bz7LtOMO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./InputUtils-8LhFcqKY.js";import"./useReferenceHiddenChangeCallback-DY7Th_c3.js";import"./AppRootPortal-Du-f4Doj.js";import"./useColorScheme-DvMUZASe.js";import"./createPortal-DbDswA2g.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-QatNCALS.js";import"./ConfigProviderOverride-TDUswttQ.js";import"./FloatingArrow-C4JFmSBi.js";import"./usePlacementChangeCallback-BKmBlkkK.js";import"./floating-ui.react-dom-DIn9Ikqa.js";import"./_object_spread_props-DRD4qu7p.js";import"./customResizeObserver-CzwDpNji.js";const N={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Q=["Playground"];export{o as Playground,Q as __namedExportsOrder,N as default};
