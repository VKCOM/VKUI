import{r as o,j as t}from"./iframe-7s0T-F6L.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-DBxYkQfv.js";import{P as b}from"./Placeholder-DR-B7Mof.js";import{A as a}from"./Alert-Gm9zT2uJ.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DyPdKfog.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CNF1CStS.js";import"./Tappable-BPO49mNS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-LGVh7luH.js";import"./useFocusVisible-BTUcwPxj.js";import"./useFocusVisibleClassName-CMVp5o9Y.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CP-PNx6u.js";import"./Headline-CfLwurX4.js";import"./Title-C8ooGZRF.js";import"./AppRootPortal-8JJCRvIt.js";import"./useColorScheme-BL2QEz1W.js";import"./createPortal-BLAX00_m.js";import"./ColorSchemeProvider-ftW5T2o8.js";import"./ConfigProviderOverride-CXr_UxnZ.js";import"./PopoutWrapper-QsjOTTi2.js";import"./useAdaptivityWithJSMediaQueries-C9RFncFj.js";import"./FocusTrap-tuo3qFhz.js";import"./useFocusTrap-Bvlj6nMe.js";import"./useMutationObserver-DXsv7L38.js";import"./IconButton-CH48s9Wj.js";import"./ModalDismissButton-D9GmBerD.js";import"./ModalOutsideButton-Bxtc2k3B.js";import"./cancel_20-CC8GAHyk.js";import"./SvgIconRootV2-Wzzl8e4S.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-COQCwN-F.js";import"./Footnote-BCofusdy.js";import"./useCSSKeyframesAnimationController-zx_Vo2k5.js";const et={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ot=["Playground"];export{r as Playground,ot as __namedExportsOrder,et as default};
