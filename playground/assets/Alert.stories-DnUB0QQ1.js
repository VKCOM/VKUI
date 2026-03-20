import{r as o,j as t}from"./iframe-CmkY54f5.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-TSeYhrGZ.js";import{P as c}from"./Placeholder-f5w5sw3F.js";import{A as i}from"./Alert-DxxL63UB.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-C6TWv4c6.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Da3ud9kw.js";import"./Tappable-DW-ilhli.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./InputUtils-UNO81DKX.js";import"./Headline-DsYeFntm.js";import"./Title-DSkwAgcq.js";import"./AppRootPortal-DhIktMNn.js";import"./useColorScheme-BCWY6G93.js";import"./createPortal-CzK3IUGW.js";import"./ColorSchemeProvider-BA0ymiYZ.js";import"./ConfigProviderOverride-DzFZq6HF.js";import"./PopoutWrapper-D5BnofhJ.js";import"./useAdaptivityWithJSMediaQueries-DAWlYeoQ.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-B80AiANX.js";import"./useFocusTrap-BoB1d5Y9.js";import"./useMutationObserver-BMEHBXHy.js";import"./IconButton-hyZ4L0bk.js";import"./ModalDismissButton-B5nGVmJ1.js";import"./ModalOutsideButton-CdGHcCVj.js";import"./cancel_20-B9i0p-m7.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-CsrSECTC.js";import"./Footnote-Dh1koNQe.js";import"./useCSSKeyframesAnimationController-BVUaD1V0.js";const tt={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
