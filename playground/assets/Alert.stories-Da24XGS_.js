import{r as o,j as t}from"./iframe-k6odcVfq.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-BOH5rx1N.js";import{P as f}from"./Placeholder-kItaJEPQ.js";import{A as a}from"./Alert-BViB7Kh9.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-COoI1Hcx.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-D-1P4bzL.js";import"./Tappable-CLnVjIR_.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D_pv1CFG.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1ugcw4m.js";import"./Headline-BdgiMIb0.js";import"./Title-DF65glat.js";import"./AppRootPortal-ide7xEku.js";import"./useColorScheme-DOgN8xDN.js";import"./createPortal-CP-_6ERR.js";import"./ColorSchemeProvider-Br_CwDQ8.js";import"./ConfigProviderOverride-ChT6I2Rd.js";import"./PopoutWrapper-DDQ3jPkH.js";import"./useAdaptivityWithJSMediaQueries-BqeF2ogC.js";import"./FocusTrap-BO_9uuti.js";import"./useFocusTrap-CNN63JoG.js";import"./useMutationObserver-CpuDc0mt.js";import"./IconButton-dHj7AK-z.js";import"./ModalDismissButton-Bqk0AfT2.js";import"./ModalOutsideButton-BAwrXwXz.js";import"./cancel_20-DU5zqnJt.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./Caption-CAbXIvPt.js";import"./Footnote-DHnfr3c7.js";import"./useCSSKeyframesAnimationController-BROJHIFn.js";const $={title:"Popouts/Alert",component:a,parameters:d("Alert",c,p)},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(f,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const tt=["Playground"];export{r as Playground,tt as __namedExportsOrder,$ as default};
