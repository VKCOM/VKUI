import{r as o,j as t}from"./iframe-CkliH7Ym.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-CDpcJNjy.js";import{P as b}from"./Placeholder-BsAxz8ak.js";import{A as a}from"./Alert-B4KVxtSj.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-UdAHfoPk.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Dn7EkmGE.js";import"./Tappable-fZc2zE5Y.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D0QQafOF.js";import"./useFocusVisibleClassName-Bnsyl2mE.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BZxXqLFf.js";import"./Headline-BEImhDVB.js";import"./Title-Bna-x3U_.js";import"./AppRootPortal-_qkzjwpD.js";import"./useColorScheme-D8FQD_Wa.js";import"./createPortal-DdOejS3g.js";import"./ColorSchemeProvider-B9rX6vOp.js";import"./ConfigProviderOverride-Btyq71wt.js";import"./PopoutWrapper-C9XtL28G.js";import"./useAdaptivityWithJSMediaQueries-DPjs0Srb.js";import"./FocusTrap-BEq0j9Ee.js";import"./useFocusTrap-BAV3lIvK.js";import"./useMutationObserver-DLhY5Avj.js";import"./IconButton-CSrcIMnc.js";import"./ModalDismissButton-B8qo1mVk.js";import"./ModalOutsideButton-UHRTVMYt.js";import"./cancel_20-DK6j5TAa.js";import"./SvgIconRootV2-DWb7sWtR.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-XD0QEt-A.js";import"./Footnote-CVpuTKzI.js";import"./useCSSKeyframesAnimationController-CaNCQZL7.js";const rt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const et=["Playground"];export{r as Playground,et as __namedExportsOrder,rt as default};
