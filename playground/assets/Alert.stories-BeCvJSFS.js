import{r as o,j as t}from"./iframe-CjlHPZNU.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-eWkGETfu.js";import{P as c}from"./Placeholder-Cd0K4Q7a.js";import{A as i}from"./Alert-DS3Z-Q26.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BqL1JLHM.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BhHQTREx.js";import"./Tappable-B5zgJODm.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CtpofEGa.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DGnaA_Jg.js";import"./Headline-5QXk0_9F.js";import"./Title-GMDilNWH.js";import"./AppRootPortal-D2B8wiWM.js";import"./useColorScheme-BIeu6EL3.js";import"./createPortal-CZhxf4lQ.js";import"./ColorSchemeProvider-DgPkTADU.js";import"./ConfigProviderOverride-BAEtQBTT.js";import"./PopoutWrapper-Y9V6tyRj.js";import"./useAdaptivityWithJSMediaQueries-B1Mjiuqa.js";import"./FocusTrap-juMAmhQs.js";import"./useFocusTrap-Bi2qV_ik.js";import"./useMutationObserver-CeFU5bUT.js";import"./IconButton-DL_Qecp_.js";import"./ModalDismissButton-DwhAtFVH.js";import"./ModalOutsideButton-CWw8gd7_.js";import"./cancel_20-Dldf5zFa.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-BGNxLEI7.js";import"./Footnote-OilvUFbZ.js";import"./useCSSKeyframesAnimationController-DfKwHzsu.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
