import{r as o,j as t}from"./iframe-OJ1C6fMc.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-CRQbp7pl.js";import{P as b}from"./Placeholder-D_SPEGmT.js";import{A as a}from"./Alert-CqE4calb.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-B_HHBggy.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BNf-15JI.js";import"./Tappable-BvI9Mb-u.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DKzQKlVj.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CNd9WeYt.js";import"./Headline-BAyAnA5C.js";import"./Title-DVdp6jeh.js";import"./AppRootPortal-BQNLj1SY.js";import"./useColorScheme-Bl13B3Wz.js";import"./createPortal-BUdXaYYW.js";import"./ColorSchemeProvider-CI-3hzwt.js";import"./ConfigProviderOverride-iLzFNrjD.js";import"./PopoutWrapper-CCKSL8Mx.js";import"./useAdaptivityWithJSMediaQueries-DTGhZ3Dx.js";import"./FocusTrap-D7VNxV-L.js";import"./useFocusTrap-BOUMNou6.js";import"./useMutationObserver-bZJaBeyU.js";import"./IconButton-Bt_Y57sB.js";import"./ModalDismissButton-DT8OUAQu.js";import"./ModalOutsideButton-DmgwXJJf.js";import"./cancel_20-bc_bfQjG.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-eNcQJads.js";import"./Footnote-JF6_a0Sk.js";import"./useCSSKeyframesAnimationController-BxSmB1JQ.js";const rt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const et=["Playground"];export{r as Playground,et as __namedExportsOrder,rt as default};
