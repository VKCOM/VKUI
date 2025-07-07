import{r as o,j as t}from"./iframe-DTUKIQpa.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-BCF43kbr.js";import{P as f}from"./Placeholder-BEgcLqqM.js";import{A as a}from"./Alert-ENcpNSRT.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BjJTDPz-.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B0Nb8Auz.js";import"./Tappable-Br6ZM5HO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DRtJbe2S.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Db1DLuWS.js";import"./Headline-DPZ9LHy_.js";import"./Title-BNj2Lwrg.js";import"./AppRootPortal-DxIJvWMm.js";import"./useColorScheme-BGAH8gMd.js";import"./createPortal-88uciayh.js";import"./ColorSchemeProvider-BX-9CWxv.js";import"./ConfigProviderOverride-CgvCCF7D.js";import"./PopoutWrapper-CVOlrOr5.js";import"./useAdaptivityWithJSMediaQueries-BL-n1V0w.js";import"./FocusTrap-Dj4RiGIf.js";import"./useFocusTrap-D-4PYHeK.js";import"./useMutationObserver-DSnEeQjr.js";import"./IconButton-Dy9SRYqV.js";import"./ModalDismissButton-BCEg74b3.js";import"./ModalOutsideButton-GHm_UzPe.js";import"./cancel_20-DBk6d7f-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-UH6uLjn4.js";import"./Caption-D0cKPzOT.js";import"./Footnote-rQhC0WQs.js";import"./useCSSKeyframesAnimationController-CUu1yLXE.js";const $={title:"Popouts/Alert",component:a,parameters:d("Alert",c,p)},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(f,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
