import{r as o,j as t}from"./iframe-Cn0klKvz.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-D37nVvnc.js";import{P as c}from"./Placeholder-5svb3Wh1.js";import{A as i}from"./Alert-D2dW7_s3.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-Dez3qxwZ.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-C9tNf48m.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./Headline-DgEMhIVy.js";import"./Title-C-xuvkmu.js";import"./AppRootPortal-DrN2viSO.js";import"./useColorScheme-C7zCwRzY.js";import"./createPortal-CeijUj_q.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-Blw8FFCv.js";import"./ConfigProviderOverride-CSeOrjpg.js";import"./PopoutWrapper-C-yh_4Ul.js";import"./useAdaptivityWithJSMediaQueries-DDw_TnXg.js";import"./warnOnce-BsOPdcXO.js";import"./useGlobalEscKeyDown-CspiQrnP.js";import"./FocusTrap-DkOYwnnY.js";import"./useMutationObserver-COKUuFT-.js";import"./IconButton-DSEgeqcd.js";import"./ModalDismissButton-Dmtpceyb.js";import"./ModalOutsideButton-B0-Dn9gH.js";import"./cancel_20-7x4VuNbl.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./Caption-Bj6KpxiH.js";import"./Footnote-BwZkqEqY.js";import"./useCSSKeyframesAnimationController-BfW96VM9.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
