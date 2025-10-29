import{r as o,j as t}from"./iframe-DC59t_7s.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-TPmMtPai.js";import{P as c}from"./Placeholder-CLBGRurs.js";import{A as i}from"./Alert-CufRXI9o.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BHxVDILF.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-dUOLTySp.js";import"./Tappable-CRrpYa-n.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-k0omQ8uW.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C5RWily7.js";import"./Headline-bNrKkYhC.js";import"./Title-DbXaHY-Y.js";import"./AppRootPortal-CA3u5wJU.js";import"./useColorScheme-Cf0PiwGW.js";import"./createPortal-2R_X9sVy.js";import"./ColorSchemeProvider-BtWhZJq6.js";import"./ConfigProviderOverride-i8pjibUq.js";import"./PopoutWrapper-CfRZ1nr1.js";import"./useAdaptivityWithJSMediaQueries-CXxDEdZF.js";import"./FocusTrap-CGKFwjPV.js";import"./useFocusTrap-Cjt3r7rt.js";import"./useMutationObserver-D8gt_rME.js";import"./IconButton-DlcUkq3s.js";import"./ModalDismissButton-DMXRxVEs.js";import"./ModalOutsideButton-C4DuqENb.js";import"./cancel_20-CEVqavSt.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-k9jgJVgg.js";import"./Footnote-B_mvNSI1.js";import"./useCSSKeyframesAnimationController-CFavuQq6.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
