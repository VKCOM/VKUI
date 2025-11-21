import{r as o,j as t}from"./iframe-BnACcuaj.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-DZqU8iPb.js";import{P as c}from"./Placeholder-Bd3u8LE7.js";import{A as i}from"./Alert-C3Tm02UG.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-gYU1puQq.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-UrXKAcy6.js";import"./Tappable-Bp0BqfGQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BArC-ALh.js";import"./useState-Bfn4OdDS.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-l1LH_CPg.js";import"./InputUtils-Bef-cQxi.js";import"./Headline-B8WUXhnw.js";import"./Title-DyuwQvN-.js";import"./AppRootPortal-Cx_aCdV6.js";import"./useColorScheme-DVykw0fJ.js";import"./createPortal-BHYOSBDo.js";import"./ColorSchemeProvider-CDWwKyNi.js";import"./ConfigProviderOverride-BjbSWsz2.js";import"./PopoutWrapper-DuFpBpvm.js";import"./useAdaptivityWithJSMediaQueries-BTzB_P1g.js";import"./FocusTrap-DOaZc2yz.js";import"./useFocusTrap-DjOr2G5J.js";import"./useMutationObserver-BNoG0G4a.js";import"./IconButton-DJLKvWv6.js";import"./ModalDismissButton-BBlD0xSY.js";import"./ModalOutsideButton-Ba7yE7kX.js";import"./cancel_20-B3wvuGis.js";import"./SvgIconRootV2-jVzBhEqh.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-BCwlm_4N.js";import"./Footnote-DxEsaF8U.js";import"./useCSSKeyframesAnimationController-D6K2uhIw.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
