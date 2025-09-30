import{r as o,j as t}from"./iframe-qoTtUH8h.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-qb2UxdVt.js";import{P as b}from"./Placeholder-BtNJusng.js";import{A as a}from"./Alert-BumO36kY.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-C8UkQVmM.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BqFtMTWb.js";import"./Tappable-D-SlRlKJ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DCqC4s6H.js";import"./Headline-BOHGExn8.js";import"./Title-ksxyfi6H.js";import"./AppRootPortal-xRZPOq86.js";import"./useColorScheme-xLZC0aKi.js";import"./createPortal-yS_K3Zg-.js";import"./ColorSchemeProvider-DCb80HKd.js";import"./ConfigProviderOverride-CdXDfhg5.js";import"./PopoutWrapper-BQ5tKZ0Z.js";import"./useAdaptivityWithJSMediaQueries-BRLOZdbb.js";import"./FocusTrap-Coy9SLFa.js";import"./useFocusTrap-DczJyGs9.js";import"./useMutationObserver-CpTcJWWe.js";import"./IconButton-B17wjzUA.js";import"./ModalDismissButton-Bwufv4lP.js";import"./ModalOutsideButton-DlmkkJq_.js";import"./cancel_20-CPH3U7xy.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-bIdYMpTC.js";import"./Footnote-DrM4b0WC.js";import"./useCSSKeyframesAnimationController-B5Q5uN6l.js";const et={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
