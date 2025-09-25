import{r as o,j as t}from"./iframe-Bz8JpgqB.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-BGNgkvlW.js";import{P as b}from"./Placeholder-DlD4On3o.js";import{A as a}from"./Alert-uwW9S9_Q.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BdNNxg7b.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Civmtkn4.js";import"./Tappable-DGSycWIS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C8sAptP9.js";import"./useFocusVisible-DI7o-w5D.js";import"./useFocusVisibleClassName-DeYZ6Bju.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C36z3TAr.js";import"./Headline-DOUR4p3R.js";import"./Title-D2iv6BIz.js";import"./AppRootPortal-BfEQGkF-.js";import"./useColorScheme-DVyOIIkN.js";import"./createPortal-5lj2qVdy.js";import"./ColorSchemeProvider-CDk5uzXv.js";import"./ConfigProviderOverride-iG9hzCRC.js";import"./PopoutWrapper-B19rbjAy.js";import"./useAdaptivityWithJSMediaQueries-DIShpTb8.js";import"./FocusTrap-Bu8gLkMP.js";import"./useFocusTrap-D3h3c3Xu.js";import"./useMutationObserver-DIWA9g1F.js";import"./IconButton-SCSZUFVl.js";import"./ModalDismissButton-FOJDk1Uc.js";import"./ModalOutsideButton-DBYapytr.js";import"./cancel_20-D-A17ZjK.js";import"./SvgIconRootV2-PiPT7FW9.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-DWsz_D6l.js";import"./Footnote-CXG5ZQyY.js";import"./useCSSKeyframesAnimationController-Ca15N8Ef.js";const et={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
