import{r as c,j as o,E as u,g as C}from"./iframe-OAvG3iJ-.js";import{B as m}from"./Button-DKiHHryh.js";import{B as M}from"./ButtonGroup-C89EQtIv.js";import{C as d}from"./CellButton-CrXJ0Z_3.js";import{C as x}from"./Checkbox-B36OZ01T.js";import{F as h}from"./Flex-Cfg1JM6V.js";import{F as f}from"./FormItem-By1Ekhxi.js";import{G as g}from"./Group-DBjl1Ywq.js";import{I as j}from"./Input-Crz7acD8.js";import{M as P}from"./ModalCard-Nr8y7RxH.js";import{a as k,M as y}from"./ModalPageHeader-CTgBtG5G.js";import{P as b}from"./PanelHeaderButton-hsXPaBRD.js";import{P as v}from"./PanelHeaderClose-cZVR3MK7.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-6iNKG8Bw.js";import{I as H}from"./notification_outline_56-BSTY6cfh.js";import{I}from"./dismiss_24-BvHLukGE.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-e4jYbku1.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-W5VCXPiv.js";import"./Tappable-hYlNxVzd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./InputUtils-D-RvHd2H.js";import"./SimpleCell-DUlLPGhw.js";import"./Footnote-Fnz7EDP7.js";import"./Headline-7nMwixf1.js";import"./Subhead-Bec_-0uq.js";import"./chevron_compact_right_24-_NSNPn6R.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-BS2dVy5C.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-BmEGewh6.js";import"./check_box_on_24-BSVcQ9Iw.js";import"./check_box_indetermanate_20-MFwSXEMj.js";import"./gaps-TC-23xBl.js";import"./Removable-rqcSgsVP.js";import"./children-jmMlROp9.js";import"./IconButton-B0ADo2bb.js";import"./useConfigDirection-EOrqXudq.js";import"./cancel_24-CjsEvKIV.js";import"./FormItemTopLabel-B8tD8fCl.js";import"./FormField-C34WeTI9.js";import"./useFocusWithin-lydw_Auo.js";import"./UnstyledTextField-7sY2kYEY.js";import"./ModalOutlet-B_k8xNU4.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-Bh9Zdsw1.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-rbH9TQRH.js";import"./useAdaptivityWithJSMediaQueries-BAc2aZfg.js";import"./FocusTrap-Ljy-TizN.js";import"./useMutationObserver-CPtolczk.js";import"./ModalCardBase-CS8KXpMZ.js";import"./ModalOutsideButton-CDT9v2cu.js";import"./ModalOutsideButtons-0hY3L8SA.js";import"./Spacing-BBhavnBZ.js";import"./Title-AFjtFc-5.js";import"./cancel_20-BkUjsL3a.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CzuykHDu.js";import"./AdaptiveIconRenderer-Dg4c0pLA.js";import"./cancel_outline_28-DCpVuLp7.js";import"./AppRootPortal-HaNKKXFZ.js";import"./useColorScheme--3xcMoVc.js";import"./createPortal-Ds6gUBZ9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-CiwPFNSE.js";import"./ConfigProviderOverride-D2rmz14r.js";import"./randomUUID-CV8jBseQ.js";const er={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
