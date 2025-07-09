import{r as o,j as t}from"./iframe-C2_PECK0.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-DnPEcOt6.js";import{P as f}from"./Placeholder-D1pWzgbm.js";import{A as a}from"./Alert-CztaL_tf.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DOBIwFGK.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DSMrBIlo.js";import"./Tappable-DLQDSygG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Ctz6ZMd9.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BDpjj3t6.js";import"./Headline-DKR4TEkK.js";import"./Title-DA9pXnZ8.js";import"./AppRootPortal-Q7WzAGvZ.js";import"./useColorScheme-5WrknPov.js";import"./createPortal-yC0ym91a.js";import"./ColorSchemeProvider-DdoBpxie.js";import"./ConfigProviderOverride-6qFI0Cam.js";import"./PopoutWrapper-Dlecq6yh.js";import"./useAdaptivityWithJSMediaQueries-C4sXBOxk.js";import"./FocusTrap--JsurIAg.js";import"./useFocusTrap-CBS2lFwN.js";import"./useMutationObserver-DIp9x6RD.js";import"./IconButton-ht7j3HPv.js";import"./ModalDismissButton-DdY11hOF.js";import"./ModalOutsideButton-DGRFjtib.js";import"./cancel_20-XkSmObOO.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./Caption-D3QJC-zO.js";import"./Footnote-B_H7tDpo.js";import"./useCSSKeyframesAnimationController-Cim7AI2v.js";const $={title:"Popouts/Alert",component:a,parameters:d("Alert",c,p)},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(f,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
