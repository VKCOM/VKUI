import{r as o,j as t}from"./iframe-BJ9555aC.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-BbA_I1es.js";import{P as c}from"./Placeholder-BWt6HcxE.js";import{A as i}from"./Alert-DuwjqYcM.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CsAXLMyU.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BpRJPd7L.js";import"./Tappable-Bz7LtOMO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./InputUtils-8LhFcqKY.js";import"./Headline-Bb4b2JBA.js";import"./Title-BmBt_BL_.js";import"./AppRootPortal-Du-f4Doj.js";import"./useColorScheme-DvMUZASe.js";import"./createPortal-DbDswA2g.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-QatNCALS.js";import"./ConfigProviderOverride-TDUswttQ.js";import"./PopoutWrapper-5vFndX2f.js";import"./useAdaptivityWithJSMediaQueries-CC96WuMD.js";import"./useGlobalEscKeyDown-CXkiU7ri.js";import"./FocusTrap-Qs6H907S.js";import"./useMutationObserver-B_zcWFq6.js";import"./IconButton-DRWEpqxT.js";import"./ModalDismissButton-C15pr1xf.js";import"./ModalOutsideButton-DBJy-eNx.js";import"./cancel_20-Bjnkubmw.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-BrB5DlXi.js";import"./Footnote-xxqNAETB.js";import"./useCSSKeyframesAnimationController-eOlaO98r.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
