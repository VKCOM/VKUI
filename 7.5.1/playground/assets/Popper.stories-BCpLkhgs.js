import{r as e,j as t}from"./iframe-DZFG_ML5.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-W48RXyAv.js";import{D as d}from"./Div-B0AzuXhX.js";import{P as m}from"./Popper-4fH1RKvH.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Ds0i1YsX.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DUSQwRyI.js";import"./Tappable-DivmMzZn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-O0RRum4C.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-rnqmQ_3Q.js";import"./useReferenceHiddenChangeCallback-0wn49evO.js";import"./AppRootPortal-DTIQQrr5.js";import"./useColorScheme-u4Oy3KJr.js";import"./createPortal-Cb1hOk6l.js";import"./ColorSchemeProvider-CduwPPyw.js";import"./ConfigProviderOverride-BPkye6ZO.js";import"./FloatingArrow-C_-fnQXD.js";import"./usePlacementChangeCallback-BMP1j3H_.js";import"./floating-ui.react-dom-BHf189t_.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:m,parameters:l("Popper",f,u),tags:["Модальные окна"]},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const N=["Playground"];export{o as Playground,N as __namedExportsOrder,K as default};
