import{r as e,j as t}from"./iframe-DP0c1f9Y.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-DYe3R3CT.js";import{D as f}from"./Div-BlHtRliV.js";import{P as a}from"./Popper-BFtfb9wE.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-Bk4bS91d.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CsBByQHJ.js";import"./Tappable-B2ZLiGfg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./InputUtils-DpvhaK12.js";import"./useReferenceHiddenChangeCallback-btJOraww.js";import"./AppRootPortal-DtFYcz06.js";import"./useColorScheme-DuZucal0.js";import"./createPortal-DvBpJvds.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-BsiYmjTD.js";import"./ConfigProviderOverride-Dv9z0Xug.js";import"./FloatingArrow-CAd55EkA.js";import"./usePlacementChangeCallback-DsJnrfKn.js";import"./floating-ui.react-dom-C28MpNR-.js";import"./customResizeObserver-CzwDpNji.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
