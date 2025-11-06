import{r as o,j as t}from"./iframe-BzXYREd1.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-C3UHKLcX.js";import{P as b}from"./Placeholder-BF-TXYeJ.js";import{A as a}from"./Alert-CaLwWHTq.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CKaqwWiI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CGoUHCA9.js";import"./Tappable-CEn82fQ0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DoSI9phS.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DULFm0M2.js";import"./Headline-CvUEvu-v.js";import"./Title-2928E8uu.js";import"./AppRootPortal-DalSlULG.js";import"./useColorScheme-BFL8-8ar.js";import"./createPortal-udDNqKIg.js";import"./ColorSchemeProvider-CpCL9cxM.js";import"./ConfigProviderOverride-Cadcpf05.js";import"./PopoutWrapper-eGA89PZg.js";import"./useAdaptivityWithJSMediaQueries-BW0q6kd1.js";import"./FocusTrap-BL9uWNnt.js";import"./useFocusTrap-Orx0aYnt.js";import"./useMutationObserver-DPiiTATP.js";import"./IconButton-DmYSjyYz.js";import"./ModalDismissButton-CirPmPZt.js";import"./ModalOutsideButton-Ck2y5LRp.js";import"./cancel_20-BJMQ5Fmt.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-B6ey8g7O.js";import"./Caption-DQdafhaO.js";import"./Footnote-ChYIirVi.js";import"./useCSSKeyframesAnimationController-B7txIYU8.js";const $={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p),tags:["Обратная связь"]},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
