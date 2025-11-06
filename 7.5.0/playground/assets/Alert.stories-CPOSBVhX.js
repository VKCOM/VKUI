import{r as o,j as t}from"./iframe-CRvvLw_c.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-C8kpyiaO.js";import{P as b}from"./Placeholder-BPD7LRUO.js";import{A as a}from"./Alert-CyRufMBu.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BeKI5I2R.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-ExmaeT5t.js";import"./Tappable-BL_Dp9-M.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C5yyRKxt.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-jCwC7LNS.js";import"./Headline-D6S1r3dC.js";import"./Title-CR_Ip4zZ.js";import"./AppRootPortal-NZw49JW8.js";import"./useColorScheme-Dg8vGXhe.js";import"./createPortal-CEA54U8j.js";import"./ColorSchemeProvider-Cyqs8Swv.js";import"./ConfigProviderOverride-AsEUQZ3i.js";import"./PopoutWrapper-DKLAMl6S.js";import"./useAdaptivityWithJSMediaQueries-DVwtVtN2.js";import"./FocusTrap-BLplPfjw.js";import"./useFocusTrap-DtP6NXl7.js";import"./useMutationObserver-CYZaENm6.js";import"./IconButton-BfjgaeOF.js";import"./ModalDismissButton-DWm6WWuL.js";import"./ModalOutsideButton-CK_We3hz.js";import"./cancel_20-BYR5vbH5.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./Caption-Ci2Nlz7Z.js";import"./Footnote-Dyjj_lEj.js";import"./useCSSKeyframesAnimationController-CdF6tcG0.js";const $={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p),tags:["Обратная связь"]},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
