import{r as o,j as t}from"./iframe-C4ttrVUJ.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-BdBXuQJY.js";import{P as c}from"./Placeholder-BGTn6SOw.js";import{A as i}from"./Alert-BXdZkh2C.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CeIULbGb.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-XgvirjGY.js";import"./Tappable-CL0fK4DO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B80alsah.js";import"./useState-DqLBjAbD.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./InputUtils-CD1Rp_t7.js";import"./Headline-B3vZWFvi.js";import"./Title-DTItDJJC.js";import"./AppRootPortal-DfuF7Oqt.js";import"./useColorScheme-CRY_65bE.js";import"./createPortal-BzUu3Hjp.js";import"./ColorSchemeProvider-DP16CCB3.js";import"./ConfigProviderOverride-BQtFiUwD.js";import"./PopoutWrapper-CN-9myiy.js";import"./useAdaptivityWithJSMediaQueries-BgzpJkYx.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-fpJxHih1.js";import"./useFocusTrap-DST2pyLb.js";import"./useMutationObserver-Ds6OyfWj.js";import"./IconButton-B4UJc4kp.js";import"./ModalDismissButton-C44zPzSY.js";import"./ModalOutsideButton-BlUkfY7t.js";import"./cancel_20-D6DCplcb.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-Den-IMPb.js";import"./Footnote-D7DVMFfP.js";import"./useCSSKeyframesAnimationController-iUHQQwp7.js";const tt={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
