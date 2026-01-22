import{j as o,r as c,c as u,u as C}from"./iframe-qlSEKL6e.js";import{B as m}from"./Button-DRTEtUEH.js";import{B as M}from"./ButtonGroup-Dt-oR-oX.js";import{C as d}from"./CellButton-BHtndDv3.js";import{C as x}from"./Checkbox-v1zmoRos.js";import{F as h}from"./Flex-66O37q5H.js";import{F as f}from"./FormItem-B64ozuS8.js";import{G as g}from"./Group-cIlrarQZ.js";import{I as j}from"./Input-B01WXvu2.js";import{M as P}from"./ModalCard-htaezRKd.js";import{a as k,M as y}from"./ModalPageHeader-BsjkDBtT.js";import{P as b}from"./PanelHeaderButton-C_brz2Sq.js";import{P as v}from"./PanelHeaderClose-CjW0jojC.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-CyrwGK0p.js";import{I as H}from"./notification_outline_56-CgCKJRfP.js";import{I}from"./dismiss_24-B4OM6Xva.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-BoZXPbho.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-Bk8azc-l.js";import"./Tappable-BHeAowlI.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D1c0nrMo.js";import"./useState-C_16qP2U.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BSdd-gmN.js";import"./InputUtils-vU1H8cid.js";import"./SimpleCell-BaJRQNlP.js";import"./Footnote-BzLLEJCe.js";import"./Headline-CGptYocR.js";import"./Subhead-B_pgjgAK.js";import"./chevron_compact_right_24--z_9b7zM.js";import"./SvgIconRootV2-DNGE9nnc.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-D16aHKlh.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-Bq74lUHu.js";import"./check_box_on_24-CDCz-Sz_.js";import"./check_box_indetermanate_20-nGTSvy3c.js";import"./gaps-DqOl4b8v.js";import"./Removable-DOcraucr.js";import"./children-DNQ1k21b.js";import"./IconButton-BRmjKqzD.js";import"./useConfigDirection-DGAPn-Y-.js";import"./cancel_24-cnh7cOD_.js";import"./FormItemTopLabel-Btd3OHdm.js";import"./FormField-Co4GQc8h.js";import"./useFocusWithin-BRbaVvSY.js";import"./UnstyledTextField-BNXjmA_I.js";import"./ModalOutlet-DOle8WYH.js";import"./rubberbandIfOutOfBounds-gPdXBcnO.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-CDr2H6QM.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-BAcI0DRk.js";import"./FocusTrap-Di6whJjK.js";import"./useMutationObserver-Cxb7eptU.js";import"./ModalCardBase-3-OFPyDY.js";import"./ModalOutsideButton-BgFF_b_K.js";import"./ModalOutsideButtons-B6ESNczb.js";import"./Spacing-6DCescNL.js";import"./Title-DQXLato0.js";import"./cancel_20-DL6m0O7F.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-Cz-uOj3n.js";import"./AdaptiveIconRenderer-DHzGBzZV.js";import"./cancel_outline_28-CB0XWe4K.js";import"./AppRootPortal-Bj-vg1zq.js";import"./useColorScheme-BxcR7ZEW.js";import"./createPortal-CvpuS67o.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-C-9YDCpQ.js";import"./ConfigProviderOverride-DnQqijVu.js";import"./v4-EwEgHOG0.js";const er={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
