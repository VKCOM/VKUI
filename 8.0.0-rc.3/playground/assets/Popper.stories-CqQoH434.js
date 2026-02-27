import{r as e,j as t}from"./iframe-Cn0klKvz.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-D37nVvnc.js";import{D as f}from"./Div-C6CxOCne.js";import{P as a}from"./Popper-CJSXFplp.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-Dez3qxwZ.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-C9tNf48m.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./useReferenceHiddenChangeCallback-C__GEFDu.js";import"./AppRootPortal-DrN2viSO.js";import"./useColorScheme-C7zCwRzY.js";import"./createPortal-CeijUj_q.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-Blw8FFCv.js";import"./ConfigProviderOverride-CSeOrjpg.js";import"./FloatingArrow-rIv3MFV8.js";import"./usePlacementChangeCallback-BcR5bXER.js";import"./floating-ui.react-dom-DkSLRTT4.js";import"./customResizeObserver-CzwDpNji.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const N=["Playground"];export{o as Playground,N as __namedExportsOrder,K as default};
