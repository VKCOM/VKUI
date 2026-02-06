import{r as e,j as t}from"./iframe-ChnjXsIu.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-B4NYHs9P.js";import{D as f}from"./Div-DBaJTjah.js";import{P as a}from"./Popper-Bf4yDOIo.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-D882qXq5.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-C0GQz0ke.js";import"./Tappable-BDf7UE95.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zj2UWImj.js";import"./useState-ZDhvxYGh.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-n-WG2EJN.js";import"./InputUtils-D67zZ2HF.js";import"./useReferenceHiddenChangeCallback-2W8QGwUV.js";import"./AppRootPortal-wSVjQS-M.js";import"./useColorScheme-BoHVEH1Y.js";import"./createPortal-psqf4yVg.js";import"./ColorSchemeProvider-DwB0ecjh.js";import"./ConfigProviderOverride-0ZAKsyIC.js";import"./FloatingArrow-BeHWd8nc.js";import"./usePlacementChangeCallback-Cm3J6Vod.js";import"./floating-ui.react-dom-Dvn3YOYt.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
