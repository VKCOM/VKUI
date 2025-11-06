import{r as o,j as t}from"./iframe-CdtcRMP-.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-BpUWCXRP.js";import{P as b}from"./Placeholder-CILwtpEp.js";import{A as a}from"./Alert-Cq9I1W0j.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-C-2OzDn_.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CtlI0uOO.js";import"./Tappable-znRvcKvt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-nnjkiOyK.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-4kqGTgL9.js";import"./Headline-BNe6tvfn.js";import"./Title-DQC5nBPj.js";import"./AppRootPortal-BFk_fNEt.js";import"./useColorScheme-Bqwp8l3s.js";import"./createPortal-DFnZY35-.js";import"./ColorSchemeProvider-DeJkjfVG.js";import"./ConfigProviderOverride--tQEj98o.js";import"./PopoutWrapper-4IVY29CR.js";import"./useAdaptivityWithJSMediaQueries-KFSEoBZu.js";import"./FocusTrap-RDi_VQaF.js";import"./useFocusTrap-CvctiW_B.js";import"./useMutationObserver-BRkrCep6.js";import"./IconButton-rnOj30v2.js";import"./ModalDismissButton-DCpmU2EK.js";import"./ModalOutsideButton-BjLsvLZJ.js";import"./cancel_20-CzWJ7gWe.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-DOhalbqy.js";import"./Footnote-UnTPOYYT.js";import"./useCSSKeyframesAnimationController-BU1gjHex.js";const rt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
