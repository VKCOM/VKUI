import{r as e,j as t}from"./iframe-A37C1jR-.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-DupvSECF.js";import{D as d}from"./Div-DXQgKS_4.js";import{P as m}from"./Popper-DhT02TVN.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CS7OnS2c.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DX4ud0qi.js";import"./Tappable-bphv_Btw.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-yIrZH96-.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1lt5OkO.js";import"./useReferenceHiddenChangeCallback-DYfWerJO.js";import"./AppRootPortal-DBF1tBzb.js";import"./useColorScheme-AJAxISWR.js";import"./createPortal-CMKk957J.js";import"./ColorSchemeProvider-DrI_6v3H.js";import"./ConfigProviderOverride-Bu8U2Yft.js";import"./FloatingArrow-CKKoyZ-4.js";import"./usePlacementChangeCallback-CIqLvTp3.js";import"./floating-ui.react-dom-O8fuuV_i.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:m,parameters:l("Popper",f,u),tags:["Модальные окна"]},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
