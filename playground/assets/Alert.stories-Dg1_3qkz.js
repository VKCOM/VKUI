import{r as o,j as t}from"./iframe-qlSEKL6e.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-DRTEtUEH.js";import{P as c}from"./Placeholder-DISFa3wp.js";import{A as i}from"./Alert-BdVJjtEl.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-BoZXPbho.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-Bk8azc-l.js";import"./Tappable-BHeAowlI.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D1c0nrMo.js";import"./useState-C_16qP2U.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BSdd-gmN.js";import"./InputUtils-vU1H8cid.js";import"./Headline-CGptYocR.js";import"./Title-DQXLato0.js";import"./AppRootPortal-Bj-vg1zq.js";import"./useColorScheme-BxcR7ZEW.js";import"./createPortal-CvpuS67o.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-C-9YDCpQ.js";import"./ConfigProviderOverride-DnQqijVu.js";import"./PopoutWrapper-C68Zxe7x.js";import"./useAdaptivityWithJSMediaQueries-BAcI0DRk.js";import"./useGlobalEscKeyDown-mphiiSZ1.js";import"./FocusTrap-Di6whJjK.js";import"./useMutationObserver-Cxb7eptU.js";import"./IconButton-BRmjKqzD.js";import"./ModalDismissButton-v3IEg95X.js";import"./ModalOutsideButton-BgFF_b_K.js";import"./cancel_20-DL6m0O7F.js";import"./SvgIconRootV2-DNGE9nnc.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-H79pUCEU.js";import"./Footnote-BzLLEJCe.js";import"./useCSSKeyframesAnimationController-C4k-rov6.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
