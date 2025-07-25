import{r as o,j as t}from"./iframe-D2wkiYbA.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-DffPUQY4.js";import{P as b}from"./Placeholder-Cupx7PpQ.js";import{A as a}from"./Alert-sBQTI9i4.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DVe93hh_.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-ChTSElWV.js";import"./Tappable-D1Sdra8V.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BU3u--9M.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-QU0WrbnN.js";import"./Headline-kcgU3LAO.js";import"./Title-CKYO1nSQ.js";import"./AppRootPortal-CD39ER_Q.js";import"./useColorScheme-DEY2vJy9.js";import"./createPortal-DmNeOwZo.js";import"./ColorSchemeProvider-CST3LDrj.js";import"./ConfigProviderOverride-llMEn7P1.js";import"./PopoutWrapper-DS1XlKuh.js";import"./useAdaptivityWithJSMediaQueries-BKmM81mz.js";import"./FocusTrap-Dwm8FY5s.js";import"./useFocusTrap-IoVotEbM.js";import"./useMutationObserver-Srju1l6k.js";import"./IconButton-DhTwf-xi.js";import"./ModalDismissButton-DmpfaFLP.js";import"./ModalOutsideButton-NNHBBqbp.js";import"./cancel_20-Cbxibwwr.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CJ3PYzhx.js";import"./Caption-Bow6F5xg.js";import"./Footnote-4HzFQCBl.js";import"./useCSSKeyframesAnimationController-ioo9M73o.js";const $={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p),tags:["Обратная связь"]},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
