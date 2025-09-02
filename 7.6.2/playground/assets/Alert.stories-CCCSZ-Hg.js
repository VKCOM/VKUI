import{r as o,j as t}from"./iframe-WscSQxk_.js";import{D as l,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-C7Wah6LB.js";import{P as b}from"./Placeholder-BaszybZR.js";import{A as a}from"./Alert-DuCFxdaD.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BOd2c3oA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-uW7N7P-s.js";import"./Tappable-4pvQI-9h.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7ilqGtf.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-JLBJXs47.js";import"./Headline-Cv7evErM.js";import"./Title-C_Gav_p7.js";import"./AppRootPortal-99J6OfwT.js";import"./useColorScheme-C09gZSyP.js";import"./createPortal-Dh4UeMek.js";import"./ColorSchemeProvider-BohugYos.js";import"./ConfigProviderOverride-CE2xRMO6.js";import"./PopoutWrapper-DR_bGOWA.js";import"./useAdaptivityWithJSMediaQueries-CMDI24UO.js";import"./FocusTrap-DP1KUwEU.js";import"./useFocusTrap-aPtkck9v.js";import"./useMutationObserver-3DDsDNI6.js";import"./IconButton-D66RFa5n.js";import"./ModalDismissButton-BEey1U2H.js";import"./ModalOutsideButton-CKQsRC6H.js";import"./cancel_20-BlpVebiS.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-wyHxTwpV.js";import"./Footnote-DadQ2vZ3.js";import"./useCSSKeyframesAnimationController-DMXLtvSZ.js";const rt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,l),tags:["Обратная связь"]},r={render:function(m){const[p,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),p?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
