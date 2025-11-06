import{r as o,j as t}from"./iframe-DZFG_ML5.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-W48RXyAv.js";import{P as b}from"./Placeholder-CSbEVJlx.js";import{A as a}from"./Alert-CJGtXyJt.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Ds0i1YsX.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DUSQwRyI.js";import"./Tappable-DivmMzZn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-O0RRum4C.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-rnqmQ_3Q.js";import"./Headline-DDLNTO9r.js";import"./Title-Yt5D65iS.js";import"./AppRootPortal-DTIQQrr5.js";import"./useColorScheme-u4Oy3KJr.js";import"./createPortal-Cb1hOk6l.js";import"./ColorSchemeProvider-CduwPPyw.js";import"./ConfigProviderOverride-BPkye6ZO.js";import"./PopoutWrapper-wQTt2poH.js";import"./useAdaptivityWithJSMediaQueries-Cwn4IIY9.js";import"./FocusTrap-DTAXdOAt.js";import"./useFocusTrap-Ckt82xM7.js";import"./useMutationObserver-BgbAvC30.js";import"./IconButton-C3HahQsG.js";import"./ModalDismissButton-Bm_8D7be.js";import"./ModalOutsideButton-CF7046Gq.js";import"./cancel_20-COR70G4p.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CKNjcJVv.js";import"./Caption-B5AzA_Bj.js";import"./Footnote-CYznJAmV.js";import"./useCSSKeyframesAnimationController-rgod1SNj.js";const $={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p),tags:["Обратная связь"]},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const tt=["Playground"];export{r as Playground,tt as __namedExportsOrder,$ as default};
