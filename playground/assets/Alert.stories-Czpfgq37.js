import{r as o,j as t}from"./iframe-CdM-7Hfu.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-Wq0du0BJ.js";import{P as c}from"./Placeholder-BRzo_dRO.js";import{A as i}from"./Alert-D_QqSm09.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CsDvRUz2.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DydpD7lG.js";import"./Tappable-DK6ahodC.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B55EaeOQ.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BMsEEBIJ.js";import"./Headline-CJlcsWlt.js";import"./Title-CJmHdlPE.js";import"./AppRootPortal-CwmZylQ9.js";import"./useColorScheme-Bgl1tdyG.js";import"./createPortal-DwlYohy5.js";import"./ColorSchemeProvider-BOMlpu1V.js";import"./ConfigProviderOverride-BX__wZpg.js";import"./PopoutWrapper-CS-0klJK.js";import"./useAdaptivityWithJSMediaQueries-DzjKYfSn.js";import"./FocusTrap-D-qlby6a.js";import"./useFocusTrap-Ba3RToQi.js";import"./useMutationObserver-CoczCU8j.js";import"./IconButton-CDyvGU-p.js";import"./ModalDismissButton-DYIM6E0s.js";import"./ModalOutsideButton-d-BeF6vR.js";import"./cancel_20-TQSW85LI.js";import"./SvgIconRootV2-uNBcUV_S.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-DWx61OOh.js";import"./Footnote-NEMh_4A6.js";import"./useCSSKeyframesAnimationController-Pub-yvLw.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
