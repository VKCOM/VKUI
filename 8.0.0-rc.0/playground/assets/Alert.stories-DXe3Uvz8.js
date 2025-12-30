import{r as o,j as t}from"./iframe-D-vjmezP.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-iOPheJU3.js";import{P as c}from"./Placeholder-DLp1pcyI.js";import{A as i}from"./Alert-so0X2rTx.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CGq4yNx9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./Headline-Dq88a-b4.js";import"./Title-5rqdnq6p.js";import"./AppRootPortal-CyZtHULY.js";import"./useColorScheme-B_PTVyib.js";import"./createPortal-Dv77p3HH.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-n4W2EG.js";import"./ConfigProviderOverride-BVw-qRt5.js";import"./PopoutWrapper-BUF5FlTh.js";import"./useAdaptivityWithJSMediaQueries-DevrISR8.js";import"./useGlobalEscKeyDown-CJjuXJTQ.js";import"./FocusTrap-bmUu0BLP.js";import"./useMutationObserver-Dd7ppQ1q.js";import"./IconButton-DrzcArVi.js";import"./ModalDismissButton-DKgqJCs-.js";import"./ModalOutsideButton-XfLqINuu.js";import"./cancel_20-iVWticgh.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-Cdq4IzHJ.js";import"./Footnote-DApQXU2r.js";import"./useCSSKeyframesAnimationController-BPrxArYG.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [visible, setVisible] = React.useState(true);
    return <React.Fragment>
        <Placeholder stretched>
          <Button onClick={() => setVisible(true)}>Открыть</Button>
        </Placeholder>
        {visible ? <Alert {...args} onClosed={() => setVisible(false)} /> : null}
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
