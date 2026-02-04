import{j as o,r as c,B as u,g as C}from"./iframe-CDzsgUJ6.js";import{B as m}from"./Button-DrWhGNV0.js";import{B as M}from"./ButtonGroup-4uQEz_CG.js";import{C as d}from"./CellButton-DJa0eD-w.js";import{C as x}from"./Checkbox-DJjrfikS.js";import{F as h}from"./Flex-BmPCO_o2.js";import{F as f}from"./FormItem-Pobv0zL5.js";import{G as g}from"./Group-BHUvSep0.js";import{I as j}from"./Input-Rxyq983j.js";import{M as P}from"./ModalCard-CmnFa5YA.js";import{a as k,M as y}from"./ModalPageHeader-DHG2a8HR.js";import{P as b}from"./PanelHeaderButton-CXrOsb3Q.js";import{P as v}from"./PanelHeaderClose-DLFB-dnp.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-D9XEg_oh.js";import{I as H}from"./notification_outline_56-Cz-_a6DE.js";import{I}from"./dismiss_24-C8cpJD2q.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-D6Csl20o.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-hrbUbT1W.js";import"./Tappable-BF8rCM_k.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dfoj99Ww.js";import"./useState-QDdZr02K.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./InputUtils-DkBsdccT.js";import"./SimpleCell-BDHKWT_s.js";import"./Footnote-EhoXcm5o.js";import"./Headline-BViG_F4T.js";import"./Subhead-BNbydgjR.js";import"./chevron_compact_right_24-LzGagLF8.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BoVPvRqg.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-BYrk5kv_.js";import"./check_box_on_24-CVoHOfkf.js";import"./check_box_indetermanate_20-Cmiw0E2c.js";import"./gaps-DqOl4b8v.js";import"./Removable-DwrvQD9J.js";import"./children-__GeZXUq.js";import"./IconButton-DmVT1v_5.js";import"./useConfigDirection-BVbAx_rU.js";import"./cancel_24-D42vZ9MX.js";import"./FormItemTopLabel-6qODUK9b.js";import"./FormField-BNZ78smL.js";import"./useFocusWithin-UKmiu0Co.js";import"./UnstyledTextField-D2LRgDHE.js";import"./ModalOutlet-CW2gz89b.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-Cuj6zgvn.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-C9pyzeP7.js";import"./useAdaptivityWithJSMediaQueries-BZLT_GPt.js";import"./FocusTrap-CkAGPt26.js";import"./useMutationObserver-BHxydzuf.js";import"./ModalCardBase-pcy6sp34.js";import"./ModalOutsideButton-2fkvMand.js";import"./ModalOutsideButtons-BJy9bJRz.js";import"./Spacing-_QM_7Dgd.js";import"./Title-Q5c-cjF2.js";import"./cancel_20-D84dgfvI.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CzqE7nP0.js";import"./AdaptiveIconRenderer-DYyXL8CC.js";import"./cancel_outline_28-BqP99dT1.js";import"./AppRootPortal-CCVAQZe-.js";import"./useColorScheme-BJ9q12Ap.js";import"./createPortal-CVhd8q9v.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DTaIndt4.js";import"./ConfigProviderOverride-CcLe0DKj.js";import"./randomUUID-CV8jBseQ.js";const er={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
