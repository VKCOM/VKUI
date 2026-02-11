import{r as o,j as t}from"./iframe-DIYy3-CH.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-D7qQMSR2.js";import{P as c}from"./Placeholder-V3zPWSw4.js";import{A as i}from"./Alert-CZBxAcUT.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-D5ck6QgF.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B6N7VZPM.js";import"./Tappable-sYAEqFlc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BAIHKsz8.js";import"./useState-p4Iaaoae.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DBCai8uF.js";import"./InputUtils-MuCAFNzU.js";import"./Headline-BoZGv-xv.js";import"./Title-DDAtng5G.js";import"./AppRootPortal-B6-nwskM.js";import"./useColorScheme-BPR6ME_0.js";import"./createPortal-w5gOwCV_.js";import"./ColorSchemeProvider-Ncvd_GBc.js";import"./ConfigProviderOverride-C79xSzNm.js";import"./PopoutWrapper-d0bapOZP.js";import"./useAdaptivityWithJSMediaQueries-DH6mhxFX.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-Da2C75l5.js";import"./useFocusTrap-CtitvsGk.js";import"./useMutationObserver-CRE9L4FZ.js";import"./IconButton-DhekZgUs.js";import"./ModalDismissButton-20DFhfkT.js";import"./ModalOutsideButton-C7wYs0O_.js";import"./cancel_20-B_G_0Nq3.js";import"./SvgIconRootV2-DBT-DabK.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-CaOppkeD.js";import"./Footnote-CRCyeFbn.js";import"./useCSSKeyframesAnimationController-C5hLYm-m.js";const tt={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const rt=["Playground"];export{r as Playground,rt as __namedExportsOrder,tt as default};
