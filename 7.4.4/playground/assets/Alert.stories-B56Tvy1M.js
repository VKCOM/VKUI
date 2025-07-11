import{r as o,j as t}from"./iframe-DDos8QSD.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-Ky5QsFrC.js";import{P as f}from"./Placeholder-BN8e1k5G.js";import{A as a}from"./Alert-Dqv157-W.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DXID7UE1.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Bn0ixRRD.js";import"./Tappable-B0kWxOOO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CWxsm2KA.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dyyzogrc.js";import"./Headline-A5M31mJl.js";import"./Title-Ble1sAc3.js";import"./AppRootPortal-Ba3z6brt.js";import"./useColorScheme-DqjxLW2f.js";import"./createPortal-pZ_xEb8D.js";import"./ColorSchemeProvider-DlGS5IA_.js";import"./ConfigProviderOverride-CyArhSE9.js";import"./PopoutWrapper-CBOR9DGR.js";import"./useAdaptivityWithJSMediaQueries-C-suFO47.js";import"./FocusTrap-kPWSjsD0.js";import"./useFocusTrap-CjwjAyWA.js";import"./useMutationObserver-CUQEMQVw.js";import"./IconButton-C3mRDxD7.js";import"./ModalDismissButton-CnzjEjCt.js";import"./ModalOutsideButton-B0LdG4Nz.js";import"./cancel_20-BjfQMxop.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-D7q7mL8J.js";import"./Caption-C8aMWNCU.js";import"./Footnote-DolN14Rp.js";import"./useCSSKeyframesAnimationController-Cm_k_RHc.js";const $={title:"Popouts/Alert",component:a,parameters:d("Alert",c,p)},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(f,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
