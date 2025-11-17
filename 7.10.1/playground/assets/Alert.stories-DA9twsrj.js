import{r as o,j as t}from"./iframe-DhuutAfC.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-Id7-fKaz.js";import{P as c}from"./Placeholder-CInxaJ3f.js";import{A as i}from"./Alert-C5z8cNRn.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-gmUVON3e.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BkhWnsJf.js";import"./Tappable-tvWVp5xX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./InputUtils-BcFat9xH.js";import"./Headline-CY9tv16R.js";import"./Title-BixyGD4w.js";import"./AppRootPortal-BhnEIrq-.js";import"./useColorScheme-BGUvzePH.js";import"./createPortal-BLvM0w_F.js";import"./ColorSchemeProvider-DdceUlQQ.js";import"./ConfigProviderOverride-CpU6P7F6.js";import"./PopoutWrapper-Z4EmqX-4.js";import"./useAdaptivityWithJSMediaQueries-PQkukbX_.js";import"./FocusTrap-Cntepomh.js";import"./useFocusTrap-CdCdrgV_.js";import"./useMutationObserver-9Zmysq9a.js";import"./IconButton-CS1h91J8.js";import"./ModalDismissButton-BkBDjRYH.js";import"./ModalOutsideButton-Bk0K0461.js";import"./cancel_20-DekKUuuy.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-BhiEFCof.js";import"./Footnote-BE0sRU6f.js";import"./useCSSKeyframesAnimationController-hP20fGyK.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const tt=["Playground"];export{r as Playground,tt as __namedExportsOrder,$ as default};
