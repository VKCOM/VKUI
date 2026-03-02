import{r as e,j as t}from"./iframe-DxxZLxeI.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-BpqQfiA7.js";import{D as f}from"./Div-Cmsoo6vK.js";import{P as a}from"./Popper-BqSSJ4b-.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BmfPEekg.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DujZCwJ6.js";import"./Tappable-C82LyDNp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-iBjUcv74.js";import"./useState-CSsh5GFH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./InputUtils-CuOtTanw.js";import"./useReferenceHiddenChangeCallback-Bdeh3c_U.js";import"./AppRootPortal-BC3JV3T9.js";import"./useColorScheme-CToT-7qP.js";import"./createPortal-DlraoZsb.js";import"./ColorSchemeProvider-DtExgQxR.js";import"./ConfigProviderOverride-CeDxwPUE.js";import"./FloatingArrow-2W0GhyuX.js";import"./usePlacementChangeCallback-BQqykK7j.js";import"./floating-ui.react-dom-DLojga1i.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
