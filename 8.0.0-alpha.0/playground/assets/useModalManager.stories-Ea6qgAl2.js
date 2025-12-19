import{j as o,r as c,c as u,u as C}from"./iframe-CGSrC79H.js";import{B as n}from"./Button-JZGl9x8f.js";import{B as x}from"./ButtonGroup-lqPb2SYc.js";import{C as l}from"./CellButton-D2bt4WeO.js";import{C as M}from"./Checkbox-Di_IB2UL.js";import{F as f}from"./Flex-CmxIyQQi.js";import{F as h}from"./FormItem-6r74lcrV.js";import{G as g}from"./Group-DH0PWTW1.js";import{I as j}from"./Input-DgmEvpxl.js";import{M as P}from"./ModalCard-DdPDF4is.js";import{a as k,M as y}from"./ModalPageHeader-utsOxW49.js";import{P as v}from"./PanelHeaderButton-6uIRYiPQ.js";import{P as B}from"./PanelHeaderClose-Bxhu8KPt.js";import{D as N,C as b}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-DZNiWrtM.js";import{I as H}from"./notification_outline_56-C9Q80cjc.js";import{I}from"./dismiss_24-dGbtMLh9.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CLlWSgUI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./Tappable-HtqfSGDW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DvGk0QGJ.js";import"./useState-DzaGsmJ4.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./InputUtils-AL_dRhAR.js";import"./SimpleCell-DfFeOU4d.js";import"./Footnote-9-fttdTG.js";import"./Headline-DOU82LYx.js";import"./Subhead-BDUGOuQB.js";import"./chevron_compact_right_24-BeoeYfvX.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-IEGQRb6X.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-CuQavEGY.js";import"./check_box_on_24-C-ecraaY.js";import"./check_box_indetermanate_20-DGva38qg.js";import"./gaps-BRHZAyUc.js";import"./Removable-D5hMMeds.js";import"./children-C-hCqQRI.js";import"./IconButton-Bq_FXaCp.js";import"./useConfigDirection-BDt5-3HT.js";import"./cancel_24-CsoSQ93Z.js";import"./FormItemTopLabel-CC7v0Qo2.js";import"./FormField-CQtfDQHY.js";import"./useFocusWithin-Bqhwx3UJ.js";import"./UnstyledTextField-BAS9V7K_.js";import"./ModalOutlet-kdsRlszA.js";import"./rubberbandIfOutOfBounds-Dj2OyPbD.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-mbGsAhvL.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-BUJvlqkO.js";import"./useFocusTrap-DV1LSCZk.js";import"./useMutationObserver-DQTeLLG8.js";import"./ModalCardBase-BvgdvAIb.js";import"./ModalOutsideButton-Bnx0YMbB.js";import"./ModalOutsideButtons-Dp1AFUI3.js";import"./Spacing-CayQBnFg.js";import"./Title-29M-U6si.js";import"./cancel_20-DjKl2jbE.js";import"./range-rFhSCI5u.js";import"./FocusTrap-CmZUL0KU.js";import"./CustomScrollView-ClAxltNi.js";import"./AdaptiveIconRenderer-CSGInP8-.js";import"./cancel_outline_28-Dk8Swbf4.js";import"./AppRootPortal-D8fiuoF8.js";import"./useColorScheme-DM7MWYfE.js";import"./createPortal-CrUV0Jad.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-zZt_kTkY.js";import"./ConfigProviderOverride-DO-HeAeb.js";import"./v4-BKrj-4V8.js";const ar={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...b,...N}},R=({close:i,update:a,openNextModal:t,modalProps:m,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(x,{stretched:!0,mode:"vertical",children:[o.jsx(n,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(n,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(n,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...m,children:o.jsx(h,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),z=({openNextModal:i,close:a,modalProps:t,modalNumber:m})=>{const e=u(),{sizeX:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.compact&&e==="android"&&o.jsx(B,{className:r.compact.className,onClick:()=>a()}),after:r.compact&&e==="ios"&&o.jsx(v,{onClick:()=>a(),className:r.compact.className,children:o.jsx(I,{})}),children:["#",m," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(l,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(l,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,m]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const d=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:d}}):t.openCustomModalPage({component:z,additionalProps:{openNextModal:r,modalNumber:d}})};return o.jsxs(o.Fragment,{children:[o.jsxs(f,{direction:"column",gap:"m",children:[o.jsx(M,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(n,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(n,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),m]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [api, contextHolder] = useModalManager(props);
    const modalCount = useRef(0);
    const openCustomModal = (type: 'card' | 'page') => {
      modalCount.current += 1;
      const count = modalCount.current;
      if (type === 'card') {
        api.openCustomModalCard({
          component: ModalCardComponent,
          additionalProps: {
            openNextModal: openCustomModal,
            modalNumber: count
          }
        });
      } else {
        api.openCustomModalPage({
          component: ModalPageComponent,
          additionalProps: {
            openNextModal: openCustomModal,
            modalNumber: count
          }
        });
      }
    };
    return <>
        <Flex direction="column" gap="m">
          <Checkbox defaultChecked onChange={e => api.setSaveHistory(e.target.checked)}>
            Сохранять историю открытия
          </Checkbox>
          <Button appearance="overlay" onClick={() => openCustomModal('page')}>
            Открыть ModalPage
          </Button>
          <Button appearance="overlay" onClick={() => openCustomModal('card')}>
            Открыть ModalCard
          </Button>
        </Flex>
        {contextHolder}
      </>;
  }
}`,...p.parameters?.docs?.source}}};const ir=["Playground"];export{p as Playground,ir as __namedExportsOrder,ar as default};
