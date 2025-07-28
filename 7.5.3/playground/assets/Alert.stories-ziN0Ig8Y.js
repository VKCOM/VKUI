import{r as o,j as t}from"./iframe-CGpIZMk8.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-7GGfFD7v.js";import{P as b}from"./Placeholder-DhFwRguk.js";import{A as a}from"./Alert-B1NAlxRH.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DVykHsGf.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CdBh7Iry.js";import"./Tappable-BEdABn7b.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D9pe1RI2.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Z7In03iI.js";import"./Headline-ZBoX0yvc.js";import"./Title-Bh0cFv1G.js";import"./AppRootPortal-DYl1v_5E.js";import"./useColorScheme-B2GHpbyp.js";import"./createPortal-1frpuduZ.js";import"./ColorSchemeProvider-6omxxyDL.js";import"./ConfigProviderOverride-CIbbMeWE.js";import"./PopoutWrapper-BzXexzED.js";import"./useAdaptivityWithJSMediaQueries-Cs0A3l0p.js";import"./FocusTrap-DHMaFiMs.js";import"./useFocusTrap-BKkUzoSR.js";import"./useMutationObserver-Q739XKZZ.js";import"./IconButton-R-pBWVQH.js";import"./ModalDismissButton-xGmMjryh.js";import"./ModalOutsideButton-BJqCBygL.js";import"./cancel_20-D13xvjyJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./Caption-J3zu-s3t.js";import"./Footnote-DPd01TxJ.js";import"./useCSSKeyframesAnimationController-CCyEmZht.js";const tt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p),tags:["Обратная связь"]},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
