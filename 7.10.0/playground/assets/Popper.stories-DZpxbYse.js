import{r as e,j as t}from"./iframe-CdM-7Hfu.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-Wq0du0BJ.js";import{D as f}from"./Div-CoWZxFc9.js";import{P as a}from"./Popper-CTSbYgY-.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CsDvRUz2.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DydpD7lG.js";import"./Tappable-DK6ahodC.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B55EaeOQ.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BMsEEBIJ.js";import"./useReferenceHiddenChangeCallback-a5Ub5Z76.js";import"./AppRootPortal-CwmZylQ9.js";import"./useColorScheme-Bgl1tdyG.js";import"./createPortal-DwlYohy5.js";import"./ColorSchemeProvider-BOMlpu1V.js";import"./ConfigProviderOverride-BX__wZpg.js";import"./FloatingArrow-_HqT_hN_.js";import"./usePlacementChangeCallback-DnaDcZAl.js";import"./floating-ui.react-dom-BSROouZA.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
