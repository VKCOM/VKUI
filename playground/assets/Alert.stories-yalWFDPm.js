import{r as o,j as t}from"./iframe-DSAhScPT.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-D3Kc_P4_.js";import{P as b}from"./Placeholder-wIyymY7E.js";import{A as a}from"./Alert-DUrO6-Hh.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-KyMn6wQY.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DIyQgeho.js";import"./Tappable-41du4Si_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-6oth1gD7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CLCgtllv.js";import"./Headline-CdViHbNM.js";import"./Title-CtXU7qo4.js";import"./AppRootPortal-CxrPafwR.js";import"./useColorScheme-Cus1gWwQ.js";import"./createPortal-D1QM7FM5.js";import"./ColorSchemeProvider-DxBekgIw.js";import"./ConfigProviderOverride-0fOmGBwc.js";import"./PopoutWrapper-BK5eJuE7.js";import"./useAdaptivityWithJSMediaQueries-uQqZElvZ.js";import"./FocusTrap-D1M1GcdK.js";import"./useFocusTrap-9P94Rqwu.js";import"./useMutationObserver-BLl4oY9n.js";import"./IconButton-CDVak2Pm.js";import"./ModalDismissButton-B7QebYIe.js";import"./ModalOutsideButton-tpCnsZwk.js";import"./cancel_20-Bbzx0_61.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CIYgEGRf.js";import"./Caption-Cgr-BZCX.js";import"./Footnote-BKhvF0_1.js";import"./useCSSKeyframesAnimationController-Cratd2Qk.js";const $={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p),tags:["Обратная связь"]},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
