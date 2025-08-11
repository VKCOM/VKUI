import{r as e,j as t}from"./iframe-BdL7Qu3-.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-Bf-yaCMi.js";import{D as d}from"./Div-Q36WEfaW.js";import{P as m}from"./Popper-DSd7JoP9.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CchhrSOA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DMev6gKF.js";import"./Tappable-DH_64QBQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zgtvQHiz.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DfOLgQuD.js";import"./useReferenceHiddenChangeCallback-BDB-jZS9.js";import"./AppRootPortal-Lr0ibmIo.js";import"./useColorScheme-BFusLRUe.js";import"./createPortal-B4xhqo8S.js";import"./ColorSchemeProvider-B2wMfrSB.js";import"./ConfigProviderOverride-KE2AAYgd.js";import"./FloatingArrow-C9usf79d.js";import"./usePlacementChangeCallback-TMZyVZQg.js";import"./floating-ui.react-dom-B1ZkUPW4.js";import"./_object_spread_props-DRD4qu7p.js";const N={title:"Modals/Popper",component:m,parameters:l("Popper",f,u),tags:["Модальные окна"]},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
