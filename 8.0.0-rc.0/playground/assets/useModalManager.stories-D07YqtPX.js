import{j as o,r as c,c as u,u as C}from"./iframe-CWLi0Dwx.js";import{B as m}from"./Button-V1CoOSHU.js";import{B as M}from"./ButtonGroup-CkMPHjJ_.js";import{C as d}from"./CellButton-Lghj7s_W.js";import{C as x}from"./Checkbox-D_2XnJwp.js";import{F as h}from"./Flex-BeuW-JMg.js";import{F as f}from"./FormItem-C8PPO9Ml.js";import{G as g}from"./Group-vgwGhKNH.js";import{I as j}from"./Input-CqNBnZVQ.js";import{M as P}from"./ModalCard-CpPRISdZ.js";import{a as k,M as y}from"./ModalPageHeader-B9cTdNzS.js";import{P as b}from"./PanelHeaderButton-DmnQ5iiZ.js";import{P as v}from"./PanelHeaderClose-D94MWNUF.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-B7FmDsB1.js";import{I as H}from"./notification_outline_56-BJ_sY3eO.js";import{I}from"./dismiss_24-B2pEy1CR.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-ClXGWKNH.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-DcnlEFVn.js";import"./Tappable-BfbUNvge.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-qvNFYhPA.js";import"./useState-B6GpLt4z.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C_mTcJQY.js";import"./InputUtils-y46vV6Lq.js";import"./SimpleCell-DMUbLJWk.js";import"./Footnote-uuGEAWzo.js";import"./Headline-BBfhp0Vp.js";import"./Subhead-BNTLgiWX.js";import"./chevron_compact_right_24-Dab3JeUv.js";import"./SvgIconRootV2-BTF9teUl.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-SZNMdhZS.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-DUMsIRpf.js";import"./check_box_on_24-UkSxJzoK.js";import"./check_box_indetermanate_20-D4wR-huF.js";import"./gaps-DqOl4b8v.js";import"./Removable-DbtKpkoR.js";import"./children-o7IWS_m7.js";import"./IconButton-DltQDU2z.js";import"./useConfigDirection-EPKxpKX2.js";import"./cancel_24-k8gLLgTE.js";import"./FormItemTopLabel-BR1igi6_.js";import"./FormField-IzYh4c0W.js";import"./useFocusWithin-CGwmDWCX.js";import"./UnstyledTextField-BbUr6gdD.js";import"./ModalOutlet-BbF0XS22.js";import"./rubberbandIfOutOfBounds-u9OOpROD.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-B1_MEMYc.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-QmJKh4aL.js";import"./FocusTrap-sLpD_IpX.js";import"./useMutationObserver-CFeW2Qdk.js";import"./ModalCardBase-DZE4jLzg.js";import"./ModalOutsideButton-A9tBUVJO.js";import"./ModalOutsideButtons-CRP_47d7.js";import"./Spacing-CEh-R4n1.js";import"./Title-B966ALEh.js";import"./cancel_20-COCIG5IB.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CTmeeRKm.js";import"./AdaptiveIconRenderer-hRcm_dd1.js";import"./cancel_outline_28-Cx7ES1tK.js";import"./AppRootPortal-DE1zUA1W.js";import"./useColorScheme-BJrTZoRu.js";import"./createPortal-C50FuxQ1.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-rFnFpu.js";import"./ConfigProviderOverride-BG7i4k0t.js";import"./v4-EwEgHOG0.js";const er={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
