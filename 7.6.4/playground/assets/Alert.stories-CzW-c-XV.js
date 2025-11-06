import{r as o,j as t}from"./iframe-gnG2DlPI.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-0nci1iZm.js";import{P as b}from"./Placeholder-DGeNKHv7.js";import{A as a}from"./Alert-CluSS3tN.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CpE2KS8o.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CKM3u7Sn.js";import"./Tappable-03YLyRIn.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CEzYBb4W.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bge3OIaY.js";import"./Headline-K5SxFgY1.js";import"./Title-B3iIrqRR.js";import"./AppRootPortal-Czy3ESyL.js";import"./useColorScheme-vbaHcGpn.js";import"./createPortal-B06EttXw.js";import"./ColorSchemeProvider-BCLoO_b0.js";import"./ConfigProviderOverride-BGC5vwuB.js";import"./PopoutWrapper-CupA55tu.js";import"./useAdaptivityWithJSMediaQueries-BOsOFWQU.js";import"./FocusTrap-2yAVIkw9.js";import"./useFocusTrap-BxxxDrxm.js";import"./useMutationObserver-BgOYgPZV.js";import"./IconButton-Cf4dAO-u.js";import"./ModalDismissButton-Cl_WDgYq.js";import"./ModalOutsideButton-DTWVQ2Pp.js";import"./cancel_20-DrhfgE2e.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-BFNedaFH.js";import"./Footnote-CONk622S.js";import"./useCSSKeyframesAnimationController-DLx7JZ4K.js";const rt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
