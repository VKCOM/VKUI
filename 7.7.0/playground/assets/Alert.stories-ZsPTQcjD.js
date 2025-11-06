import{r as o,j as t}from"./iframe-B4SbMwac.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-CqwGeWDr.js";import{P as b}from"./Placeholder-lUMd_sIi.js";import{A as a}from"./Alert-u0aSbLzD.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CVJ-p2Lm.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B_fMC41X.js";import"./Tappable-DlzKIRC8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-LHka_ZWc.js";import"./useFocusVisible-CA0gmOpw.js";import"./useFocusVisibleClassName-CYMT8ouX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C948cbKc.js";import"./Headline-DyfFpR9w.js";import"./Title-BLmuK8KQ.js";import"./AppRootPortal-BWPaNlwr.js";import"./useColorScheme-D4AzIlWD.js";import"./createPortal-BRXgEjGv.js";import"./ColorSchemeProvider-B6sJTJHQ.js";import"./ConfigProviderOverride-BEOiP_JX.js";import"./PopoutWrapper-D67BB_1g.js";import"./useAdaptivityWithJSMediaQueries-DRP0gLSP.js";import"./FocusTrap-CQ1U4q6g.js";import"./useFocusTrap-BNQU8TBX.js";import"./useMutationObserver-CvVb8dg4.js";import"./IconButton-BrekU4vj.js";import"./ModalDismissButton-DuztM3di.js";import"./ModalOutsideButton-C5pDyY6y.js";import"./cancel_20-BHyPBvu_.js";import"./SvgIconRootV2-CSlzNDT1.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-2zBCEySr.js";import"./Footnote-PzIaqeP1.js";import"./useCSSKeyframesAnimationController-CFw2zgDY.js";const et={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ot=["Playground"];export{r as Playground,ot as __namedExportsOrder,et as default};
