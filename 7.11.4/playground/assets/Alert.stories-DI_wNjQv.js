import{r as o,j as t}from"./iframe-ChnjXsIu.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-B4NYHs9P.js";import{P as c}from"./Placeholder-DDNxKddy.js";import{A as i}from"./Alert-tvEkhWk1.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-D882qXq5.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-C0GQz0ke.js";import"./Tappable-BDf7UE95.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zj2UWImj.js";import"./useState-ZDhvxYGh.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-n-WG2EJN.js";import"./InputUtils-D67zZ2HF.js";import"./Headline-jnvlDnhz.js";import"./Title-ufKZcuLl.js";import"./AppRootPortal-wSVjQS-M.js";import"./useColorScheme-BoHVEH1Y.js";import"./createPortal-psqf4yVg.js";import"./ColorSchemeProvider-DwB0ecjh.js";import"./ConfigProviderOverride-0ZAKsyIC.js";import"./PopoutWrapper-ts28B9Qd.js";import"./useAdaptivityWithJSMediaQueries-pvEwxSJa.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-BrlPUpeO.js";import"./useFocusTrap-C5ZGD2Mm.js";import"./useMutationObserver-BPadd9uE.js";import"./IconButton-DcISWAYH.js";import"./ModalDismissButton-BiMObdcr.js";import"./ModalOutsideButton-B7vQwnd8.js";import"./cancel_20-mMWPNy2b.js";import"./SvgIconRootV2-DXKzfcIX.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-DTswF5wb.js";import"./Footnote-a8vRHGoF.js";import"./useCSSKeyframesAnimationController-1KBRF7Rv.js";const tt={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const rt=["Playground"];export{r as Playground,rt as __namedExportsOrder,tt as default};
