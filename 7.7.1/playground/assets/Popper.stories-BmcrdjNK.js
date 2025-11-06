import{r as e,j as t}from"./iframe-dTlwAXGa.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-Bf3MOszz.js";import{D as d}from"./Div-PC6x0Grm.js";import{P as m}from"./Popper-9kOPaZ6u.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Ct1kmwhu.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-JumwXwcS.js";import"./Tappable-qMfTC7Pz.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dl5F7aV_.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CtGJ0DI4.js";import"./useReferenceHiddenChangeCallback-Igx7JX9x.js";import"./AppRootPortal-DvsIiuGf.js";import"./useColorScheme-BL3jX5yR.js";import"./createPortal-HGqhkvd7.js";import"./ColorSchemeProvider-DYm1IVe2.js";import"./ConfigProviderOverride-xMCWz3c3.js";import"./FloatingArrow-VZsTDbup.js";import"./usePlacementChangeCallback-dDt_8z3X.js";import"./floating-ui.react-dom-BpBaiSJG.js";import"./_object_spread_props-DRD4qu7p.js";const T={title:"Modals/Popper",component:m,parameters:l("Popper",f,u),tags:["Модальные окна"]},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const U=["Playground"];export{o as Playground,U as __namedExportsOrder,T as default};
