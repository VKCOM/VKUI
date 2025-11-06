import{r as o,j as t}from"./iframe-VQuwIBim.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-DX8vp4-B.js";import{P as b}from"./Placeholder-Ch9PweN9.js";import{A as a}from"./Alert-CNwTXyXg.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-D45v6N1-.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Bn9barOE.js";import"./Tappable-DJKRXU4j.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-GKvDpg7c.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-esLGIMz7.js";import"./Headline-DlMci9v_.js";import"./Title-kPzeN8_R.js";import"./AppRootPortal-Cj8kaYA6.js";import"./useColorScheme-3PoJfbUB.js";import"./createPortal-CagxG8Ef.js";import"./ColorSchemeProvider-CD6Xwm8-.js";import"./ConfigProviderOverride-CgHQ0Bf4.js";import"./PopoutWrapper-xJ_0P7DK.js";import"./useAdaptivityWithJSMediaQueries-BjOFSdMl.js";import"./FocusTrap-C7Qtn-Or.js";import"./useFocusTrap-CDU-PFFW.js";import"./useMutationObserver-BvI-8POZ.js";import"./IconButton-CsO6Fs2D.js";import"./ModalDismissButton-BFAZ0cbh.js";import"./ModalOutsideButton-Cymq4YE1.js";import"./cancel_20-Bn882zle.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./Caption-C4GZRvva.js";import"./Footnote-CFr_RCRn.js";import"./useCSSKeyframesAnimationController-HtBdBNNP.js";const tt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p),tags:["Обратная связь"]},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const rt=["Playground"];export{r as Playground,rt as __namedExportsOrder,tt as default};
