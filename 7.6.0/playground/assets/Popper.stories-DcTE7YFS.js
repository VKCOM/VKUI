import{r as e,j as t}from"./iframe-CNYWi-tv.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-CRnRhdN6.js";import{D as d}from"./Div-Dsel7-va.js";import{P as m}from"./Popper-D5E7M93E.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CLko12L1.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CIbqknZb.js";import"./Tappable-Bt2S1yMc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-PPkKMUDS.js";import"./useFocusVisibleClassName-CrxrpfB8.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bfhccirq.js";import"./useReferenceHiddenChangeCallback-DrJqA32s.js";import"./AppRootPortal-DIw5dSpY.js";import"./useColorScheme-Cfkm4fLV.js";import"./createPortal-Rj5gNAak.js";import"./ColorSchemeProvider-CnyWnc2N.js";import"./ConfigProviderOverride-HCjSxczU.js";import"./FloatingArrow-D53bG7gO.js";import"./usePlacementChangeCallback-Cojz57y6.js";import"./floating-ui.react-dom-B41PFPvr.js";import"./_object_spread_props-DRD4qu7p.js";const Q={title:"Modals/Popper",component:m,parameters:l("Popper",f,u),tags:["Модальные окна"]},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const T=["Playground"];export{o as Playground,T as __namedExportsOrder,Q as default};
