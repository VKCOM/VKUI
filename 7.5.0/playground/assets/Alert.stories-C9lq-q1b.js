import{r as o,j as t}from"./iframe-A37C1jR-.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-DupvSECF.js";import{P as b}from"./Placeholder-igZHmR7O.js";import{A as a}from"./Alert-C_Pyw8sK.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CS7OnS2c.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DX4ud0qi.js";import"./Tappable-bphv_Btw.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-yIrZH96-.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1lt5OkO.js";import"./Headline-CWoDuoSH.js";import"./Title-CFAhKLGN.js";import"./AppRootPortal-DBF1tBzb.js";import"./useColorScheme-AJAxISWR.js";import"./createPortal-CMKk957J.js";import"./ColorSchemeProvider-DrI_6v3H.js";import"./ConfigProviderOverride-Bu8U2Yft.js";import"./PopoutWrapper-DXwGNxh-.js";import"./useAdaptivityWithJSMediaQueries-BVTDvUs3.js";import"./FocusTrap-BYqeWfp-.js";import"./useFocusTrap-dFkQ6BrA.js";import"./useMutationObserver-DrADQeuc.js";import"./IconButton-DbMMimp0.js";import"./ModalDismissButton-DdJmKehO.js";import"./ModalOutsideButton-D7LkLx6B.js";import"./cancel_20-BjLxzpyN.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-qP_PfTnQ.js";import"./Caption-C53AGAFT.js";import"./Footnote-DEEoTBIm.js";import"./useCSSKeyframesAnimationController-am5UefGp.js";const $={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p),tags:["Обратная связь"]},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render(args) {
    const [visible, setVisible] = React.useState(true);
    return <React.Fragment>
        <Placeholder stretched>
          <Button onClick={() => setVisible(true)}>Открыть</Button>
        </Placeholder>
        {visible ? <Alert {...args} onClose={() => setVisible(false)} /> : null}
      </React.Fragment>;
  },
  args: {
    actions: [{
      title: 'Отмена',
      mode: 'cancel'
    }, {
      title: 'Удалить',
      mode: 'destructive'
    }],
    actionsLayout: 'horizontal',
    dismissLabel: 'Отмена',
    title: 'Удаление документа',
    description: 'Вы уверены, что хотите удалить этот документ?'
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const tt=["Playground"];export{r as Playground,tt as __namedExportsOrder,$ as default};
