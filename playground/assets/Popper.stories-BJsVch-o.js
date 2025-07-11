import{r as e,j as t}from"./iframe-DDos8QSD.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-Ky5QsFrC.js";import{D as d}from"./Div-Cmg8g6jV.js";import{P as m}from"./Popper-BfobY8S-.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DXID7UE1.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Bn0ixRRD.js";import"./Tappable-B0kWxOOO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CWxsm2KA.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dyyzogrc.js";import"./useReferenceHiddenChangeCallback-BNMZQcE1.js";import"./AppRootPortal-Ba3z6brt.js";import"./useColorScheme-DqjxLW2f.js";import"./createPortal-pZ_xEb8D.js";import"./ColorSchemeProvider-DlGS5IA_.js";import"./ConfigProviderOverride-CyArhSE9.js";import"./FloatingArrow-AYA0w7FM.js";import"./_object_spread_props-DRD4qu7p.js";import"./usePlacementChangeCallback-iLcROg5y.js";const J={title:"Poppers/Popper",component:m,parameters:l("Popper",f,u)},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
