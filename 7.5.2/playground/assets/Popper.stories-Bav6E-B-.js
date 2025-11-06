import{r as e,j as t}from"./iframe-BzXYREd1.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-C3UHKLcX.js";import{D as d}from"./Div-_rflgTc6.js";import{P as m}from"./Popper-CRKef3MV.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CKaqwWiI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CGoUHCA9.js";import"./Tappable-CEn82fQ0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DoSI9phS.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DULFm0M2.js";import"./useReferenceHiddenChangeCallback-2xtRrg1t.js";import"./AppRootPortal-DalSlULG.js";import"./useColorScheme-BFL8-8ar.js";import"./createPortal-udDNqKIg.js";import"./ColorSchemeProvider-CpCL9cxM.js";import"./ConfigProviderOverride-Cadcpf05.js";import"./FloatingArrow-C9T5GfxJ.js";import"./usePlacementChangeCallback-Cr19q53p.js";import"./floating-ui.react-dom-gQYdXTBL.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:m,parameters:l("Popper",f,u),tags:["Модальные окна"]},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
