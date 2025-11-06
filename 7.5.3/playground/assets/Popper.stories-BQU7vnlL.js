import{r as e,j as t}from"./iframe-VQuwIBim.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-DX8vp4-B.js";import{D as d}from"./Div-D-5DCfD7.js";import{P as m}from"./Popper-lAUSxP2k.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-D45v6N1-.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Bn9barOE.js";import"./Tappable-DJKRXU4j.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-GKvDpg7c.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-esLGIMz7.js";import"./useReferenceHiddenChangeCallback-Bmr5y_bS.js";import"./AppRootPortal-Cj8kaYA6.js";import"./useColorScheme-3PoJfbUB.js";import"./createPortal-CagxG8Ef.js";import"./ColorSchemeProvider-CD6Xwm8-.js";import"./ConfigProviderOverride-CgHQ0Bf4.js";import"./FloatingArrow-BBql9SkG.js";import"./usePlacementChangeCallback-DmGIfBmK.js";import"./floating-ui.react-dom-Pmp8ft10.js";import"./_object_spread_props-DRD4qu7p.js";const N={title:"Modals/Popper",component:m,parameters:l("Popper",f,u),tags:["Модальные окна"]},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const Q=["Playground"];export{o as Playground,Q as __namedExportsOrder,N as default};
