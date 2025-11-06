import{r as o,j as t}from"./iframe-DcUCz3Gq.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-BU_mp-AO.js";import{P as c}from"./Placeholder-6i7dJVuv.js";import{A as i}from"./Alert-Br9VeOm7.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DB1TcyOv.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-IsgabQ9w.js";import"./Tappable-CGnYgxpx.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dt7ctke5.js";import"./Headline-_bBT78y6.js";import"./Title-Cb6EL7Un.js";import"./AppRootPortal-Uj7JA9BA.js";import"./useColorScheme-DrgIsgMO.js";import"./createPortal-DltXdHJc.js";import"./ColorSchemeProvider-CpsSWhwy.js";import"./ConfigProviderOverride-BiHuZVLC.js";import"./PopoutWrapper-8FuCeAdM.js";import"./useAdaptivityWithJSMediaQueries-DBwHTVjj.js";import"./FocusTrap-i28PizB0.js";import"./useFocusTrap-SSRd9KwO.js";import"./useMutationObserver-BO5feLdl.js";import"./IconButton-CGiS95Aa.js";import"./ModalDismissButton-DEhhoQc0.js";import"./ModalOutsideButton-D7UE7j83.js";import"./cancel_20-CKi960W_.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-CDwF9hKw.js";import"./Footnote-lAEBSvha.js";import"./useCSSKeyframesAnimationController-lCWVHvj5.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
