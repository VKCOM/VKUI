import{r as o,j as t}from"./iframe-BdXaAE5r.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-BXQ5RzYy.js";import{P as c}from"./Placeholder-Cz220zUj.js";import{A as i}from"./Alert-Cgn4ujop.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Dsao1b5l.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DcQJc2es.js";import"./Tappable-DfpzQKhB.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0nFsuW3k.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils--HRLtXJo.js";import"./Headline-DW4C0RJJ.js";import"./Title-CkdPFRXw.js";import"./AppRootPortal-CUn3WEk3.js";import"./useColorScheme-CR-44NGe.js";import"./createPortal-twf3JG26.js";import"./ColorSchemeProvider-BFJTPUcN.js";import"./ConfigProviderOverride-BDqJysYU.js";import"./PopoutWrapper-DeZVkTbS.js";import"./useAdaptivityWithJSMediaQueries-GfnUu_-K.js";import"./FocusTrap-CbZlzKqw.js";import"./useFocusTrap-D-fzHl7s.js";import"./useMutationObserver-epbeXk19.js";import"./IconButton-CXgqouLn.js";import"./ModalDismissButton-TLgPMV03.js";import"./ModalOutsideButton-J9q69uCk.js";import"./cancel_20-skegj2Uy.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-B8hxH2dQ.js";import"./Footnote-ByXPLsYQ.js";import"./useCSSKeyframesAnimationController-DT0CppSw.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
