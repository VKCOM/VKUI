import{r as o,j as t}from"./iframe-BdL7Qu3-.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-Bf-yaCMi.js";import{P as b}from"./Placeholder-C5DRH5iz.js";import{A as a}from"./Alert--IXIijf4.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CchhrSOA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DMev6gKF.js";import"./Tappable-DH_64QBQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zgtvQHiz.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DfOLgQuD.js";import"./Headline-IzZ5JXBy.js";import"./Title-D-2PMsHx.js";import"./AppRootPortal-Lr0ibmIo.js";import"./useColorScheme-BFusLRUe.js";import"./createPortal-B4xhqo8S.js";import"./ColorSchemeProvider-B2wMfrSB.js";import"./ConfigProviderOverride-KE2AAYgd.js";import"./PopoutWrapper-Czkf4BmB.js";import"./useAdaptivityWithJSMediaQueries-DnKIEibd.js";import"./FocusTrap-QcsSwy0c.js";import"./useFocusTrap-BZvdIrk4.js";import"./useMutationObserver-BqGBX4ZS.js";import"./IconButton-oiQnZbSh.js";import"./ModalDismissButton-TIbsAXMV.js";import"./ModalOutsideButton-D-Xrt2SC.js";import"./cancel_20-CRZLconA.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./Caption-A9YdzU-r.js";import"./Footnote-Cejbc8FV.js";import"./useCSSKeyframesAnimationController-BJmom0_1.js";const tt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p),tags:["Обратная связь"]},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
