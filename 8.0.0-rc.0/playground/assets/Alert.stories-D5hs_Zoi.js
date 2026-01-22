import{r as o,j as t}from"./iframe-CWLi0Dwx.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-V1CoOSHU.js";import{P as c}from"./Placeholder-DWQjvmlc.js";import{A as i}from"./Alert-B1weJhnE.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-ClXGWKNH.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-DcnlEFVn.js";import"./Tappable-BfbUNvge.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-qvNFYhPA.js";import"./useState-B6GpLt4z.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C_mTcJQY.js";import"./InputUtils-y46vV6Lq.js";import"./Headline-BBfhp0Vp.js";import"./Title-B966ALEh.js";import"./AppRootPortal-DE1zUA1W.js";import"./useColorScheme-BJrTZoRu.js";import"./createPortal-C50FuxQ1.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-rFnFpu.js";import"./ConfigProviderOverride-BG7i4k0t.js";import"./PopoutWrapper-COS26nfh.js";import"./useAdaptivityWithJSMediaQueries-QmJKh4aL.js";import"./useGlobalEscKeyDown-Guf-0OZs.js";import"./FocusTrap-sLpD_IpX.js";import"./useMutationObserver-CFeW2Qdk.js";import"./IconButton-DltQDU2z.js";import"./ModalDismissButton-Bfi82fz4.js";import"./ModalOutsideButton-A9tBUVJO.js";import"./cancel_20-COCIG5IB.js";import"./SvgIconRootV2-BTF9teUl.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-7-fMsdYi.js";import"./Footnote-uuGEAWzo.js";import"./useCSSKeyframesAnimationController-CK97G-K-.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [visible, setVisible] = React.useState(true);
    return <React.Fragment>
        <Placeholder stretched>
          <Button onClick={() => setVisible(true)}>Открыть</Button>
        </Placeholder>
        {visible ? <Alert {...args} onClosed={() => setVisible(false)} /> : null}
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
}`,...r.parameters?.docs?.source}}};const tt=["Playground"];export{r as Playground,tt as __namedExportsOrder,$ as default};
