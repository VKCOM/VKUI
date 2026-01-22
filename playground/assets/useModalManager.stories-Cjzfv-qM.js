import{j as o,r as c,c as u,u as C}from"./iframe-CJSxyW9U.js";import{B as m}from"./Button-BC2c2Xtj.js";import{B as M}from"./ButtonGroup-CBJmsi9U.js";import{C as d}from"./CellButton-BNprYgVl.js";import{C as x}from"./Checkbox-BRHZjX-B.js";import{F as h}from"./Flex-CGIDb59w.js";import{F as f}from"./FormItem-BhvbLOaH.js";import{G as g}from"./Group-Bl9QB3Zd.js";import{I as j}from"./Input-ZWJUevST.js";import{M as P}from"./ModalCard-C5fNFrp9.js";import{a as k,M as y}from"./ModalPageHeader-JqPftUeq.js";import{P as b}from"./PanelHeaderButton-CufZDOjk.js";import{P as v}from"./PanelHeaderClose-Cy2aKrcq.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-CjJdXWrY.js";import{I as H}from"./notification_outline_56-zE2WSudw.js";import{I}from"./dismiss_24-DrRpH33k.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-BlbUmBeW.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./Tappable-B_lgqKnQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7Hv1Vzv.js";import"./useState-Cf9zElDT.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./InputUtils-CQXgm4mM.js";import"./SimpleCell-BHTnRhyN.js";import"./Footnote-PeEhUyBm.js";import"./Headline-B-NKRtjP.js";import"./Subhead-B39S2HHi.js";import"./chevron_compact_right_24-DIVGPtpa.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BZCG5KUX.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-BQ0Ovxq_.js";import"./check_box_on_24-DgOwFitz.js";import"./check_box_indetermanate_20-Dlp035xl.js";import"./gaps-DqOl4b8v.js";import"./Removable-Cn8iqEd1.js";import"./children-B_vv-93P.js";import"./IconButton-DlIx3m79.js";import"./useConfigDirection-C3cHGESc.js";import"./cancel_24-DiZsY-MY.js";import"./FormItemTopLabel-BU0T7Ab0.js";import"./FormField-C1QoIvTb.js";import"./useFocusWithin-B6ZQto83.js";import"./UnstyledTextField-BmjWkuxm.js";import"./ModalOutlet-DlKvoY5H.js";import"./rubberbandIfOutOfBounds-CGRhXfJX.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-jEFnrYcd.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-BD6wIQ8t.js";import"./FocusTrap-BY7eisJ4.js";import"./useMutationObserver-BVn6sRWr.js";import"./ModalCardBase-D8vHPTDf.js";import"./ModalOutsideButton-CbSc_5RG.js";import"./ModalOutsideButtons-1_upxYY1.js";import"./Spacing-CuEq8_rm.js";import"./Title-BHBezTAx.js";import"./cancel_20-DPjZu47Y.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CoMoGALI.js";import"./AdaptiveIconRenderer-CCNgnGet.js";import"./cancel_outline_28-CkryQC61.js";import"./AppRootPortal-DnnFjexz.js";import"./useColorScheme-cIrBBNZn.js";import"./createPortal-BAw7aojS.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-COmjjYbo.js";import"./ConfigProviderOverride-CF8gkful.js";import"./v4-EwEgHOG0.js";const er={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ar=["Playground"];export{p as Playground,ar as __namedExportsOrder,er as default};
