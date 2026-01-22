import{r as e,j as t}from"./iframe-CJSxyW9U.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-BC2c2Xtj.js";import{D as f}from"./Div-Ct-3pUxM.js";import{P as a}from"./Popper-CILUD6SC.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-BlbUmBeW.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./Tappable-B_lgqKnQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7Hv1Vzv.js";import"./useState-Cf9zElDT.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./InputUtils-CQXgm4mM.js";import"./useReferenceHiddenChangeCallback-D1-xpaTE.js";import"./AppRootPortal-DnnFjexz.js";import"./useColorScheme-cIrBBNZn.js";import"./createPortal-BAw7aojS.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-COmjjYbo.js";import"./ConfigProviderOverride-CF8gkful.js";import"./FloatingArrow-D3RfVyEp.js";import"./usePlacementChangeCallback-CcbRo2C7.js";import"./floating-ui.react-dom-DgoDJi3n.js";import"./_object_spread_props-DRD4qu7p.js";import"./customResizeObserver-CzwDpNji.js";const N={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
