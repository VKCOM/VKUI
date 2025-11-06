import{r as o,j as t}from"./iframe-DQDZnzQe.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-CP79mmtk.js";import{P as b}from"./Placeholder-D0p-hJln.js";import{A as a}from"./Alert-C9SUeck6.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BbRcECA7.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-vRsYbH_6.js";import"./Tappable-GGjjvyZD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CKZOM7f4.js";import"./Headline-DFYCKKj3.js";import"./Title-DVgoNOIF.js";import"./AppRootPortal-Bq1Lh75N.js";import"./useColorScheme-alZiR8qg.js";import"./createPortal-7OEOxVfD.js";import"./ColorSchemeProvider-KH2nDpqI.js";import"./ConfigProviderOverride-iezr64Uj.js";import"./PopoutWrapper-DT1MGbFB.js";import"./useAdaptivityWithJSMediaQueries-LApitR64.js";import"./FocusTrap-DE_AH0ax.js";import"./useFocusTrap-m4EN-OKE.js";import"./useMutationObserver-D4iUf7ph.js";import"./IconButton-fW78sGQ1.js";import"./ModalDismissButton-DaXBRWwz.js";import"./ModalOutsideButton-nMc_GNuq.js";import"./cancel_20-Bs154Wii.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./Caption-BxTGQxAz.js";import"./Footnote-y02Efo06.js";import"./useCSSKeyframesAnimationController-B1m-T7LD.js";const tt={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p),tags:["Обратная связь"]},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const rt=["Playground"];export{r as Playground,rt as __namedExportsOrder,tt as default};
