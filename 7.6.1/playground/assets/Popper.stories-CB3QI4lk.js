import{r as e,j as t}from"./iframe-CkliH7Ym.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-CDpcJNjy.js";import{D as d}from"./Div-BB7vEP3B.js";import{P as m}from"./Popper-EuLCrfqJ.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-UdAHfoPk.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Dn7EkmGE.js";import"./Tappable-fZc2zE5Y.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D0QQafOF.js";import"./useFocusVisibleClassName-Bnsyl2mE.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BZxXqLFf.js";import"./useReferenceHiddenChangeCallback-CrbKL3K8.js";import"./AppRootPortal-_qkzjwpD.js";import"./useColorScheme-D8FQD_Wa.js";import"./createPortal-DdOejS3g.js";import"./ColorSchemeProvider-B9rX6vOp.js";import"./ConfigProviderOverride-Btyq71wt.js";import"./FloatingArrow-B53s4wIh.js";import"./usePlacementChangeCallback-DQYCmAMk.js";import"./floating-ui.react-dom-DQc45krP.js";import"./_object_spread_props-DRD4qu7p.js";const Q={title:"Modals/Popper",component:m,parameters:l("Popper",f,u),tags:["Модальные окна"]},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
