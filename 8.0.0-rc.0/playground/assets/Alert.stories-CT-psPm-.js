import{r as o,j as t}from"./iframe-DP0c1f9Y.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-DYe3R3CT.js";import{P as c}from"./Placeholder-BgGYQGcM.js";import{A as i}from"./Alert-B4A4rLQF.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-Bk4bS91d.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CsBByQHJ.js";import"./Tappable-B2ZLiGfg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./InputUtils-DpvhaK12.js";import"./Headline-D5yVS7YY.js";import"./Title-S_74tDbu.js";import"./AppRootPortal-DtFYcz06.js";import"./useColorScheme-DuZucal0.js";import"./createPortal-DvBpJvds.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-BsiYmjTD.js";import"./ConfigProviderOverride-Dv9z0Xug.js";import"./PopoutWrapper-CbiN9CyB.js";import"./useAdaptivityWithJSMediaQueries-DHEYn_LX.js";import"./useGlobalEscKeyDown-XvABs4cA.js";import"./FocusTrap-F0reUUyC.js";import"./useMutationObserver-tL6yc0PX.js";import"./IconButton-DX6zaS9g.js";import"./ModalDismissButton-B18q18Jp.js";import"./ModalOutsideButton-ww0fMYzM.js";import"./cancel_20-BdALp2jd.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./Caption-Bf2pK2j4.js";import"./Footnote-DJoQQEv9.js";import"./useCSSKeyframesAnimationController-gogItWDj.js";const Z={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const $=["Playground"];export{r as Playground,$ as __namedExportsOrder,Z as default};
