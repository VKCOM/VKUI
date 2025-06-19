import{r as e,j as t}from"./iframe-k6odcVfq.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-BOH5rx1N.js";import{D as d}from"./Div-D-XRRz9f.js";import{P as m}from"./Popper-Cymo0deb.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-COoI1Hcx.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-D-1P4bzL.js";import"./Tappable-CLnVjIR_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D_pv1CFG.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1ugcw4m.js";import"./useReferenceHiddenChangeCallback-5rOssyve.js";import"./AppRootPortal-ide7xEku.js";import"./useColorScheme-DOgN8xDN.js";import"./createPortal-CP-_6ERR.js";import"./ColorSchemeProvider-Br_CwDQ8.js";import"./ConfigProviderOverride-ChT6I2Rd.js";import"./FloatingArrow-DaP7ccM2.js";import"./_object_spread_props-DRD4qu7p.js";import"./usePlacementChangeCallback-BTz75stv.js";const J={title:"Poppers/Popper",component:m,parameters:l("Popper",f,u)},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
