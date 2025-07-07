import{r as e,j as t}from"./iframe-DTUKIQpa.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-BCF43kbr.js";import{D as d}from"./Div-B72Y_Vxp.js";import{P as m}from"./Popper-BSgRPBX2.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BjJTDPz-.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B0Nb8Auz.js";import"./Tappable-Br6ZM5HO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DRtJbe2S.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Db1DLuWS.js";import"./useReferenceHiddenChangeCallback-ojQ1DOCE.js";import"./AppRootPortal-DxIJvWMm.js";import"./useColorScheme-BGAH8gMd.js";import"./createPortal-88uciayh.js";import"./ColorSchemeProvider-BX-9CWxv.js";import"./ConfigProviderOverride-CgvCCF7D.js";import"./FloatingArrow-k99_XB05.js";import"./_object_spread_props-DRD4qu7p.js";import"./usePlacementChangeCallback-XITFD2B3.js";const J={title:"Poppers/Popper",component:m,parameters:l("Popper",f,u)},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const K=["Playground"];export{o as Playground,K as __namedExportsOrder,J as default};
