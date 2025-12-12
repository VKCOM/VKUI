import{r as e,j as t}from"./iframe-Db0SwwYs.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-DKPWjiCT.js";import{D as f}from"./Div-L8zPO7Z0.js";import{P as a}from"./Popper-hRMVJDOY.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Dy7IzRwA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CZDmCAU7.js";import"./Tappable-DPDNr6uV.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-QJYjPwzV.js";import"./useState-_pDIeHd1.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./InputUtils-DU65P5CC.js";import"./useReferenceHiddenChangeCallback-BVfL_SN8.js";import"./AppRootPortal-D20gzpUj.js";import"./useColorScheme-BTSYlb-o.js";import"./createPortal-BhjAg26d.js";import"./ColorSchemeProvider-DZTdfkVT.js";import"./ConfigProviderOverride-CKegTf3s.js";import"./FloatingArrow-A8JFHQho.js";import"./usePlacementChangeCallback-Wr5lETKk.js";import"./floating-ui.react-dom-CXE2iVpv.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
