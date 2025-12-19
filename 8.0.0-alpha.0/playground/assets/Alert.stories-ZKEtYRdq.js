import{r as o,j as t}from"./iframe-CGSrC79H.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-JZGl9x8f.js";import{P as c}from"./Placeholder-BwVEAOdl.js";import{A as i}from"./Alert-CwOBZ0Px.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CLlWSgUI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./Tappable-HtqfSGDW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DvGk0QGJ.js";import"./useState-DzaGsmJ4.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./InputUtils-AL_dRhAR.js";import"./Headline-DOU82LYx.js";import"./Title-29M-U6si.js";import"./AppRootPortal-D8fiuoF8.js";import"./useColorScheme-DM7MWYfE.js";import"./createPortal-CrUV0Jad.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-zZt_kTkY.js";import"./ConfigProviderOverride-DO-HeAeb.js";import"./PopoutWrapper-HBVGLeP7.js";import"./useAdaptivityWithJSMediaQueries-BUJvlqkO.js";import"./FocusTrap-CmZUL0KU.js";import"./useFocusTrap-DV1LSCZk.js";import"./useMutationObserver-DQTeLLG8.js";import"./IconButton-Bq_FXaCp.js";import"./ModalDismissButton-4uIZXzkR.js";import"./ModalOutsideButton-Bnx0YMbB.js";import"./cancel_20-DjKl2jbE.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-BHHO6d1x.js";import"./Footnote-9-fttdTG.js";import"./useCSSKeyframesAnimationController-3EPmQPbL.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
