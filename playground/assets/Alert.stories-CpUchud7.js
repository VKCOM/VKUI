import{r as o,j as t}from"./iframe-BW2_2Sqh.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-B8UDwXDh.js";import{P as f}from"./Placeholder-BJ3bHCIu.js";import{A as a}from"./Alert-DqQZEUK0.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Ck410QJW.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-0_L4g8bM.js";import"./Tappable-D_Pc41Ky.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSLKIgEW.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DYuPlK4j.js";import"./Headline-C7EO-C2p.js";import"./Title-BsNL9OHU.js";import"./AppRootPortal-F6rxXrpM.js";import"./useColorScheme-DfFLwB8B.js";import"./createPortal-BgwYQhDs.js";import"./ColorSchemeProvider-DNcZYulN.js";import"./ConfigProviderOverride-DKz7Q2_Q.js";import"./PopoutWrapper-CaWCIYjl.js";import"./useAdaptivityWithJSMediaQueries-2jw3QplY.js";import"./FocusTrap-DmokX27Q.js";import"./useFocusTrap-CCxzzpOC.js";import"./useMutationObserver-Dl_rwnc3.js";import"./IconButton-DMIGpMdh.js";import"./ModalDismissButton-BE90dBwR.js";import"./ModalOutsideButton-DbNYQrKn.js";import"./cancel_20-C-Dh9gs0.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./Caption-B3YPJibB.js";import"./Footnote-DqSrPGSc.js";import"./useCSSKeyframesAnimationController-Bn4niQ1h.js";const $={title:"Popouts/Alert",component:a,parameters:d("Alert",c,p)},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(f,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
