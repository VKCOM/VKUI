import{r as e,j as t}from"./iframe-DhuutAfC.js";import{D as p,C as m}from"./constants-DdkjnEgz.js";import{c}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-Id7-fKaz.js";import{D as f}from"./Div-BKcZLB21.js";import{P as a}from"./Popper--oSez6Jy.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-gmUVON3e.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BkhWnsJf.js";import"./Tappable-tvWVp5xX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./InputUtils-BcFat9xH.js";import"./useReferenceHiddenChangeCallback-C54G18M-.js";import"./AppRootPortal-BhnEIrq-.js";import"./useColorScheme-BGUvzePH.js";import"./createPortal-BLvM0w_F.js";import"./ColorSchemeProvider-DdceUlQQ.js";import"./ConfigProviderOverride-CpU6P7F6.js";import"./FloatingArrow-Cnm_pG-Z.js";import"./usePlacementChangeCallback-Dqqe6zNt.js";import"./floating-ui.react-dom-D_ZuLwN8.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:a,parameters:c("Popper",m,p),tags:["Модальные окна"]},o={render:function(n){const[r,i]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(u,{getRootRef:s,onClick:()=>i(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(a,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(f,{children:"Привет"})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
