import{r as o,j as t}from"./iframe-D9ctG7Ns.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-ClDISrDv.js";import{P as b}from"./Placeholder-BxtPHBZC.js";import{A as a}from"./Alert-DZNYnW8P.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CdhXnMLF.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-XRinxkJw.js";import"./Tappable-DOmAnzcN.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-4xEXwBeB.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-dk1yVFOH.js";import"./Headline-4n2ELzS2.js";import"./Title-BxTWQERW.js";import"./AppRootPortal-DZcFVsJe.js";import"./useColorScheme-D5oaSQC0.js";import"./createPortal-DiDQqqFD.js";import"./ColorSchemeProvider-42MwyphL.js";import"./ConfigProviderOverride-BJZJ1bpA.js";import"./PopoutWrapper-BPeJiLH3.js";import"./useAdaptivityWithJSMediaQueries-CVLN_kqX.js";import"./FocusTrap-CXlwguwW.js";import"./useFocusTrap-DgL23sHD.js";import"./useMutationObserver-qTqSTRf6.js";import"./IconButton-Cu6N9yzq.js";import"./ModalDismissButton-CYnt-Som.js";import"./ModalOutsideButton-DcUelrrc.js";import"./cancel_20-DqL2mIPO.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-6ObnKwfL.js";import"./Footnote-BcHikxS0.js";import"./useCSSKeyframesAnimationController-CR4p02q0.js";const rt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
