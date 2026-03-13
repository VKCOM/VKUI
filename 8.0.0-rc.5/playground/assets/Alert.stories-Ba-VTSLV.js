import{r as o,j as t}from"./iframe-CEhhJuIi.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-VHcOoYjV.js";import{P as c}from"./Placeholder-CYZY3gOe.js";import{A as i}from"./Alert-TlPL005y.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-C8mKPATK.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BYulTkKK.js";import"./Tappable-CTSOdpDd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSDkuBjh.js";import"./useState-BlpMLPZb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./InputUtils-CN8Bpeve.js";import"./Headline-C97-pQ4K.js";import"./Title-gWx-KNT-.js";import"./AppRootPortal-uzyAKSZM.js";import"./useColorScheme-C52TR78y.js";import"./createPortal-BD13EKcF.js";import"./ColorSchemeProvider-fCsC8sPd.js";import"./ConfigProviderOverride-CSnPmu4b.js";import"./PopoutWrapper-DT5HDPOu.js";import"./useAdaptivityWithJSMediaQueries-BSZTJLQt.js";import"./warnOnce-BsOPdcXO.js";import"./useGlobalEscKeyDown-CE7TqF1-.js";import"./FocusTrap-Bmt_IN1l.js";import"./useMutationObserver-L83qy9tM.js";import"./IconButton-D0BsKVg5.js";import"./ModalDismissButton-obpz_v1J.js";import"./ModalOutsideButton-CPtMBssn.js";import"./cancel_20-B93q7ALF.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-DB-0jBpG.js";import"./Footnote-wldoNL-p.js";import"./useCSSKeyframesAnimationController-DHvojNoR.js";const tt={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const rt=["Playground"];export{r as Playground,rt as __namedExportsOrder,tt as default};
