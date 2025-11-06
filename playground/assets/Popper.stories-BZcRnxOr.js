import{r as e,j as t}from"./iframe-DcUCz3Gq.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-BU_mp-AO.js";import{D as f}from"./Div-DK6pA_dL.js";import{P as a}from"./Popper-C4EFCWA9.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DB1TcyOv.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-IsgabQ9w.js";import"./Tappable-CGnYgxpx.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dt7ctke5.js";import"./useReferenceHiddenChangeCallback-CSFFsN8n.js";import"./AppRootPortal-Uj7JA9BA.js";import"./useColorScheme-DrgIsgMO.js";import"./createPortal-DltXdHJc.js";import"./ColorSchemeProvider-CpsSWhwy.js";import"./ConfigProviderOverride-BiHuZVLC.js";import"./FloatingArrow-AZDnUaK5.js";import"./usePlacementChangeCallback-qGx5x2BN.js";import"./floating-ui.react-dom-BD4t0KnS.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
