import{r as o,j as t}from"./iframe-Db0SwwYs.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-DKPWjiCT.js";import{P as c}from"./Placeholder-DkKPRbZj.js";import{A as i}from"./Alert-etwm9jN3.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Dy7IzRwA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CZDmCAU7.js";import"./Tappable-DPDNr6uV.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-QJYjPwzV.js";import"./useState-_pDIeHd1.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./InputUtils-DU65P5CC.js";import"./Headline-BS3jMLtX.js";import"./Title-DrCXdOfJ.js";import"./AppRootPortal-D20gzpUj.js";import"./useColorScheme-BTSYlb-o.js";import"./createPortal-BhjAg26d.js";import"./ColorSchemeProvider-DZTdfkVT.js";import"./ConfigProviderOverride-CKegTf3s.js";import"./PopoutWrapper-CBUe7Pbf.js";import"./useAdaptivityWithJSMediaQueries-O7L1hfju.js";import"./FocusTrap-CJOJYnOF.js";import"./useFocusTrap-BD2Piuw5.js";import"./useMutationObserver-B_vgSH7b.js";import"./IconButton-f4wUPwMX.js";import"./ModalDismissButton-LFEDUB7s.js";import"./ModalOutsideButton-RnVoLh2f.js";import"./cancel_20-DGSQsFaz.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-02ZtUboh.js";import"./Footnote-CJOdhFdd.js";import"./useCSSKeyframesAnimationController-D-R-i32P.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const tt=["Playground"];export{r as Playground,tt as __namedExportsOrder,$ as default};
