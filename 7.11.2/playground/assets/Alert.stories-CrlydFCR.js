import{r as o,j as t}from"./iframe-KtxhC7Vu.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-Md1sLJHS.js";import{P as c}from"./Placeholder-qtDVw2Ab.js";import{A as i}from"./Alert-DgR5l-So.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-kWF4Wnla.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-8TqRJKxj.js";import"./Tappable-BHKu77gD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zoSQNYwS.js";import"./useState-D1V9wQJY.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./InputUtils-BueJ8J_Y.js";import"./Headline-DXbYuoNY.js";import"./Title-Cl0PGkVH.js";import"./AppRootPortal-CebRltsZ.js";import"./useColorScheme-Ujmv4Cvg.js";import"./createPortal-Tz19WZo6.js";import"./ColorSchemeProvider-B2dHDCmM.js";import"./ConfigProviderOverride-ieUFn-Fm.js";import"./PopoutWrapper-DDh7gNea.js";import"./useAdaptivityWithJSMediaQueries-DB7vOVMe.js";import"./FocusTrap-D7WS1G7k.js";import"./useFocusTrap-C5b8ZMwl.js";import"./useMutationObserver-gH8v0RQA.js";import"./IconButton-DubnwX4y.js";import"./ModalDismissButton-BAlQc3wi.js";import"./ModalOutsideButton-D3a4iliN.js";import"./cancel_20-BDeSZaCv.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-Yrm4oGty.js";import"./Footnote-lwK0vUsu.js";import"./useCSSKeyframesAnimationController-ZdoDVZt_.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
