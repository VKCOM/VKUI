import{r as o,j as t}from"./iframe-C4bTyPBQ.js";import{D as a,C as m}from"./constants-DdkjnEgz.js";import{c as p}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-D-zltIHu.js";import{P as c}from"./Placeholder-CWU5YLqg.js";import{A as i}from"./Alert-5a4sChH1.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CnNDPfa2.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./Tappable-BZW__-HP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./InputUtils-Ns7QNyDT.js";import"./Headline-B4T2ew9V.js";import"./Title-CK3YofNd.js";import"./AppRootPortal-CWanvcnq.js";import"./useColorScheme-B5qdSLTx.js";import"./createPortal-BVIABMB9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B34yrt0u.js";import"./ConfigProviderOverride-BLhdVd3U.js";import"./PopoutWrapper-CtbFUN3o.js";import"./useAdaptivityWithJSMediaQueries-C-6nl7Lu.js";import"./warnOnce-BsOPdcXO.js";import"./useGlobalEscKeyDown-CvS_H8_H.js";import"./FocusTrap-DR0NIrZZ.js";import"./useMutationObserver-Dz5wTjis.js";import"./IconButton-BXe704ZF.js";import"./ModalDismissButton-BJgcF-XO.js";import"./ModalOutsideButton-jvmF2gHy.js";import"./cancel_20-EIRIx7Ta.js";import"./SvgIconRootV2-DbftVVP5.js";import"./Caption-D_3C1Hvb.js";import"./Footnote-wW_hecXF.js";import"./useCSSKeyframesAnimationController-nG-tROJv.js";const $={title:"Feedback/Alert",component:i,parameters:p("Alert",m,a),tags:["Обратная связь"]},r={render:function(s){const[n,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(c,{stretched:!0,children:t.jsx(l,{onClick:()=>e(!0),children:"Открыть"})}),n?t.jsx(i,{...s,onClosed:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
