import{r as o,j as t}from"./iframe-BKqRoeRO.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-U9s7wDQC.js";import{P as c}from"./Placeholder-CTu_f0lE.js";import{A as i}from"./Alert-sNVM1Ss2.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-DWSu6VQp.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-B-uFrHKw.js";import"./Tappable-EPRrmr_0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CadgeLyo.js";import"./useState-Db1sLetb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./InputUtils-CQaATz1N.js";import"./Headline-CPNK2PuC.js";import"./Title-j8cVZj0a.js";import"./AppRootPortal-Bl-mYqRi.js";import"./useColorScheme-CV37oJpw.js";import"./createPortal-DVslbEs3.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DzGMXO52.js";import"./ConfigProviderOverride-AuipdI0T.js";import"./PopoutWrapper-B57J5bjX.js";import"./useAdaptivityWithJSMediaQueries-BxosUUYi.js";import"./useGlobalEscKeyDown-B6CseJM6.js";import"./FocusTrap-BrNSy_VJ.js";import"./useMutationObserver-D2T9tvmZ.js";import"./IconButton-CDypKmxT.js";import"./ModalDismissButton-BicDl4M4.js";import"./ModalOutsideButton-5uUDAI0w.js";import"./cancel_20-BK7RGKwT.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-BlAl9F9i.js";import"./Footnote-BAb4Skv3.js";import"./useCSSKeyframesAnimationController-C-fvdGBI.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
