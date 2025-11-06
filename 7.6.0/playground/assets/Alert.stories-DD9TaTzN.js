import{r as o,j as t}from"./iframe-DveaDHpJ.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-Be-a6C2x.js";import{P as b}from"./Placeholder-xKQCa2dS.js";import{A as a}from"./Alert-BTq3qsqe.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-kmrkwAxt.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-C4fiFLiw.js";import"./Tappable-B6M0Cj2d.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Qd8MhpMK.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DB2utYDB.js";import"./Headline-D2z7orvN.js";import"./Title-DhgmrscL.js";import"./AppRootPortal-CrDvtA-l.js";import"./useColorScheme-Ca6Q1evu.js";import"./createPortal-DGpWZUDM.js";import"./ColorSchemeProvider-CxCT7c0Q.js";import"./ConfigProviderOverride-BzdBugdn.js";import"./PopoutWrapper-Cjq8ZUFG.js";import"./useAdaptivityWithJSMediaQueries-C3ZL7FSW.js";import"./FocusTrap-BlYjcIfF.js";import"./useFocusTrap-B6jSfMpx.js";import"./useMutationObserver-DsBH9-0i.js";import"./IconButton-B6-RVMvP.js";import"./ModalDismissButton-CPJZpvpt.js";import"./ModalOutsideButton-C3co1NnJ.js";import"./cancel_20-CWK-eBz_.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-xmt4HAL3.js";import"./Footnote-DMEVDgek.js";import"./useCSSKeyframesAnimationController-mBSEUSJJ.js";const rt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
