import{r as o,j as t}from"./iframe-OAvG3iJ-.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-DKiHHryh.js";import{P as c}from"./Placeholder-DfwrWGQ1.js";import{A as i}from"./Alert-aUlxr7nh.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-e4jYbku1.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-W5VCXPiv.js";import"./Tappable-hYlNxVzd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./InputUtils-D-RvHd2H.js";import"./Headline-7nMwixf1.js";import"./Title-AFjtFc-5.js";import"./AppRootPortal-HaNKKXFZ.js";import"./useColorScheme--3xcMoVc.js";import"./createPortal-Ds6gUBZ9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-CiwPFNSE.js";import"./ConfigProviderOverride-D2rmz14r.js";import"./PopoutWrapper-Hyko8qEL.js";import"./useAdaptivityWithJSMediaQueries-BAc2aZfg.js";import"./warnOnce-BsOPdcXO.js";import"./useGlobalEscKeyDown-BZHzgl9G.js";import"./FocusTrap-Ljy-TizN.js";import"./useMutationObserver-CPtolczk.js";import"./IconButton-B0ADo2bb.js";import"./ModalDismissButton-Ca2bsNPj.js";import"./ModalOutsideButton-CDT9v2cu.js";import"./cancel_20-BkUjsL3a.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./Caption-Dncllwwc.js";import"./Footnote-Fnz7EDP7.js";import"./useCSSKeyframesAnimationController-DnCAMIpr.js";const tt={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
