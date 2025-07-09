import{r as e,j as t}from"./iframe-C2_PECK0.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-DnPEcOt6.js";import{D as d}from"./Div-DrMWkE3k.js";import{P as m}from"./Popper-Bo2p_PrY.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DOBIwFGK.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DSMrBIlo.js";import"./Tappable-DLQDSygG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Ctz6ZMd9.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BDpjj3t6.js";import"./useReferenceHiddenChangeCallback-2ArwOqZN.js";import"./AppRootPortal-Q7WzAGvZ.js";import"./useColorScheme-5WrknPov.js";import"./createPortal-yC0ym91a.js";import"./ColorSchemeProvider-DdoBpxie.js";import"./ConfigProviderOverride-6qFI0Cam.js";import"./FloatingArrow-_eZKd9-i.js";import"./_object_spread_props-DRD4qu7p.js";import"./usePlacementChangeCallback-DeYYV3Z9.js";const J={title:"Poppers/Popper",component:m,parameters:l("Popper",f,u)},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
