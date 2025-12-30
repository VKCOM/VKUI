import{j as o,r as c,c as u,u as C}from"./iframe-D-vjmezP.js";import{B as m}from"./Button-iOPheJU3.js";import{B as M}from"./ButtonGroup-DfOP7IG_.js";import{C as d}from"./CellButton-DzVtSQhu.js";import{C as x}from"./Checkbox-DCLhx_o9.js";import{F as h}from"./Flex-C_be27FX.js";import{F as f}from"./FormItem-vi7slCo6.js";import{G as g}from"./Group-knjA_28m.js";import{I as j}from"./Input-I59RC-3d.js";import{M as P}from"./ModalCard-B-5X0QCk.js";import{a as k,M as y}from"./ModalPageHeader-DD4zDwd4.js";import{P as b}from"./PanelHeaderButton-BODTHbnm.js";import{P as v}from"./PanelHeaderClose-CblJNgrJ.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-CA0_WvXd.js";import{I as H}from"./notification_outline_56-B_WXmccE.js";import{I}from"./dismiss_24-cJPxsGgW.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CGq4yNx9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./SimpleCell-CsYR4Aza.js";import"./Footnote-DApQXU2r.js";import"./Headline-Dq88a-b4.js";import"./Subhead-DCgRz-zo.js";import"./chevron_compact_right_24-qWPDpI7y.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-Bb1SKLei.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-8IF9aLXb.js";import"./check_box_on_24-CgV3p_bd.js";import"./check_box_indetermanate_20-Dr_kWXwB.js";import"./gaps-BRHZAyUc.js";import"./Removable-Db8Ui--t.js";import"./children-DmJGU09q.js";import"./IconButton-DrzcArVi.js";import"./useConfigDirection-BUJREPxm.js";import"./cancel_24-B55ygFBW.js";import"./FormItemTopLabel-DgFuEBU_.js";import"./FormField-DoheaqQo.js";import"./useFocusWithin-BzKDlGXW.js";import"./UnstyledTextField-B6Z4YAuX.js";import"./ModalOutlet-BObAFP2N.js";import"./rubberbandIfOutOfBounds-CVqKReCD.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-DvB-HHcQ.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-DevrISR8.js";import"./FocusTrap-bmUu0BLP.js";import"./useMutationObserver-Dd7ppQ1q.js";import"./ModalCardBase-C7UKMQVS.js";import"./ModalOutsideButton-XfLqINuu.js";import"./ModalOutsideButtons-BHPvGVGS.js";import"./Spacing-Cw7ZXTkR.js";import"./Title-5rqdnq6p.js";import"./cancel_20-iVWticgh.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CFBg-_BN.js";import"./AdaptiveIconRenderer-CKo_rySp.js";import"./cancel_outline_28-Btmw3psh.js";import"./AppRootPortal-CyZtHULY.js";import"./useColorScheme-B_PTVyib.js";import"./createPortal-Dv77p3HH.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-n4W2EG.js";import"./ConfigProviderOverride-BVw-qRt5.js";import"./v4-EwEgHOG0.js";const er={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
