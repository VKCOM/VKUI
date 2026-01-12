import{r as o,j as t}from"./iframe-BqdgnJE0.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-BBUIsY6v.js";import{P as c}from"./Placeholder-Cf1tveA6.js";import{A as i}from"./Alert-NOcdEp20.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CHRizUnE.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B5KO6Y_w.js";import"./Tappable-C0ES09y8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-_lommW0d.js";import"./useState-CWGeE8jE.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./InputUtils-ESzsNRN2.js";import"./Headline-ByN4fZVg.js";import"./Title-C5m838CH.js";import"./AppRootPortal-DRaDzdXH.js";import"./useColorScheme-B3VXvXnZ.js";import"./createPortal-CfJRRh6m.js";import"./ColorSchemeProvider-BPL5atgs.js";import"./ConfigProviderOverride-BYZnQAAH.js";import"./PopoutWrapper-CEP4Z10r.js";import"./useAdaptivityWithJSMediaQueries-WhfyAMD8.js";import"./FocusTrap-D8HWFNvo.js";import"./useFocusTrap-DDyVh1XH.js";import"./useMutationObserver-lKnFJcNz.js";import"./IconButton-C7jcJUXx.js";import"./ModalDismissButton-ClMcm7PF.js";import"./ModalOutsideButton-CbzB4wjf.js";import"./cancel_20-DDyQUZ9P.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-DQ3GIvfa.js";import"./Footnote-Bj-28HDg.js";import"./useCSSKeyframesAnimationController-zfEdbc1w.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
