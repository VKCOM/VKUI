import{r as e,j as t}from"./iframe-KtxhC7Vu.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-Md1sLJHS.js";import{D as f}from"./Div-Cl3VjR5_.js";import{P as a}from"./Popper-Bi9VpZic.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-kWF4Wnla.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-8TqRJKxj.js";import"./Tappable-BHKu77gD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zoSQNYwS.js";import"./useState-D1V9wQJY.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./InputUtils-BueJ8J_Y.js";import"./useReferenceHiddenChangeCallback-D2CAbs8d.js";import"./AppRootPortal-CebRltsZ.js";import"./useColorScheme-Ujmv4Cvg.js";import"./createPortal-Tz19WZo6.js";import"./ColorSchemeProvider-B2dHDCmM.js";import"./ConfigProviderOverride-ieUFn-Fm.js";import"./FloatingArrow-x9VSrLhI.js";import"./usePlacementChangeCallback-D7f72DhY.js";import"./floating-ui.react-dom-aiJhAjls.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
