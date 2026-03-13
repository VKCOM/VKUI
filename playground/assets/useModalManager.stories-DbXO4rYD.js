import{r as c,j as o,B as u,g as C}from"./iframe-CEhhJuIi.js";import{B as m}from"./Button-VHcOoYjV.js";import{B as M}from"./ButtonGroup-DUeudX8Y.js";import{C as d}from"./CellButton-DrDHrJEm.js";import{C as x}from"./Checkbox-DjyBJ_D8.js";import{F as h}from"./Flex-DGSr3jA3.js";import{F as f}from"./FormItem-CgID-1p5.js";import{G as g}from"./Group-B7hVT_g-.js";import{I as j}from"./Input-Y5WvGego.js";import{M as P}from"./ModalCard-CqTDttwj.js";import{a as k,M as y}from"./ModalPageHeader-DcZ78kjZ.js";import{P as b}from"./PanelHeaderButton-Td-2TVdV.js";import{P as v}from"./PanelHeaderClose-aLRB4dPO.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-W4kBVWoo.js";import{I as H}from"./notification_outline_56-DRXGCYa4.js";import{I}from"./dismiss_24-DzMwRLYX.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-C8mKPATK.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BYulTkKK.js";import"./Tappable-CTSOdpDd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSDkuBjh.js";import"./useState-BlpMLPZb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./InputUtils-CN8Bpeve.js";import"./SimpleCell-CJqdGzsk.js";import"./Footnote-wldoNL-p.js";import"./Headline-C97-pQ4K.js";import"./Subhead-4zP8hIFm.js";import"./chevron_compact_right_24-DmTjrohB.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CMhnb1X0.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-C2Z5oeVH.js";import"./check_box_on_24-tz3ud1kS.js";import"./check_box_indetermanate_20-DjLpdvdR.js";import"./gaps-TC-23xBl.js";import"./Removable-BCfQmLaJ.js";import"./children-fYKiCF6j.js";import"./IconButton-D0BsKVg5.js";import"./useConfigDirection-K0H5l3FT.js";import"./cancel_24-CHfH8s1a.js";import"./FormItemTopLabel-Cm1fSad6.js";import"./FormField-K1skToW1.js";import"./useFocusWithin-D7grZ9Rv.js";import"./UnstyledTextField-CEQXrxfo.js";import"./ModalOutlet-rf3KLdig.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-DWaFlPsh.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-D-LdOANG.js";import"./useAdaptivityWithJSMediaQueries-BSZTJLQt.js";import"./FocusTrap-Bmt_IN1l.js";import"./useMutationObserver-L83qy9tM.js";import"./ModalCardBase-DW7rhn4Y.js";import"./ModalOutsideButton-CPtMBssn.js";import"./ModalOutsideButtons-CVOyzyFQ.js";import"./Spacing-JbgQa08E.js";import"./Title-gWx-KNT-.js";import"./cancel_20-B93q7ALF.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-Bcc3tVi5.js";import"./AdaptiveIconRenderer-B1bnvO5R.js";import"./cancel_outline_28-vj7T8dvV.js";import"./AppRootPortal-uzyAKSZM.js";import"./useColorScheme-C52TR78y.js";import"./createPortal-BD13EKcF.js";import"./ColorSchemeProvider-fCsC8sPd.js";import"./ConfigProviderOverride-CSnPmu4b.js";import"./randomUUID-CV8jBseQ.js";const er={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
