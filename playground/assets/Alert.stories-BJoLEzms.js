import{r as o,j as t}from"./iframe-DxxZLxeI.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-BpqQfiA7.js";import{P as c}from"./Placeholder-DYKSYtMX.js";import{A as i}from"./Alert-TClKil4R.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BmfPEekg.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DujZCwJ6.js";import"./Tappable-C82LyDNp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-iBjUcv74.js";import"./useState-CSsh5GFH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./InputUtils-CuOtTanw.js";import"./Headline-WANZoqA8.js";import"./Title-BaiQADO8.js";import"./AppRootPortal-BC3JV3T9.js";import"./useColorScheme-CToT-7qP.js";import"./createPortal-DlraoZsb.js";import"./ColorSchemeProvider-DtExgQxR.js";import"./ConfigProviderOverride-CeDxwPUE.js";import"./PopoutWrapper-CDphHH9-.js";import"./useAdaptivityWithJSMediaQueries-DX7WZGU5.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-B9SWnrCQ.js";import"./useFocusTrap-CR-pyJwh.js";import"./useMutationObserver-DAoxHxKK.js";import"./IconButton-CgpvmjLz.js";import"./ModalDismissButton-D0iQSs0X.js";import"./ModalOutsideButton-BP6butgH.js";import"./cancel_20-CHo4-sJA.js";import"./SvgIconRootV2-BBTF5ye2.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-BaO_eCgt.js";import"./Footnote-C3-8h3B5.js";import"./useCSSKeyframesAnimationController-BDDf6Nj3.js";const tt={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
