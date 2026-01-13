import{j as o,r as c,c as u,u as C}from"./iframe-DP0c1f9Y.js";import{B as m}from"./Button-DYe3R3CT.js";import{B as M}from"./ButtonGroup-ChPzvpL1.js";import{C as d}from"./CellButton-z0nep4zs.js";import{C as x}from"./Checkbox-BWdotJLu.js";import{F as h}from"./Flex-C--pQgbh.js";import{F as f}from"./FormItem-BkC2ERPK.js";import{G as g}from"./Group-uVVNnULv.js";import{I as j}from"./Input-Cj8wWljh.js";import{M as P}from"./ModalCard-CkJxGxOq.js";import{a as k,M as y}from"./ModalPageHeader-BnIETAUf.js";import{P as b}from"./PanelHeaderButton-Dmn8Tjst.js";import{P as v}from"./PanelHeaderClose-CMj_ni8l.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-DZfT1Jak.js";import{I as H}from"./notification_outline_56-DOWg99Ou.js";import{I}from"./dismiss_24--0GSOPy5.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-Bk4bS91d.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CsBByQHJ.js";import"./Tappable-B2ZLiGfg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./InputUtils-DpvhaK12.js";import"./SimpleCell-BUlM7B6J.js";import"./Footnote-DJoQQEv9.js";import"./Headline-D5yVS7YY.js";import"./Subhead-CZ6CT0II.js";import"./chevron_compact_right_24-DRgaqZzi.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./chevron_16-CM-SIi30.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-BpPHse0T.js";import"./check_box_on_24-D_JjkFdP.js";import"./check_box_indetermanate_20-CYzNFnLD.js";import"./gaps-BRHZAyUc.js";import"./Removable-BE-e-wqK.js";import"./children-Bag1sNQQ.js";import"./IconButton-DX6zaS9g.js";import"./useConfigDirection-BNkwGAZM.js";import"./cancel_24-Cb6nnPMq.js";import"./FormItemTopLabel-wYveWCaL.js";import"./FormField-CPyOAnhV.js";import"./useFocusWithin-CvS6Su5o.js";import"./UnstyledTextField-uiBGtoLb.js";import"./ModalOutlet-BQtHAZrm.js";import"./rubberbandIfOutOfBounds-BUiiYM3M.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-DCXVYVRd.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-DHEYn_LX.js";import"./FocusTrap-F0reUUyC.js";import"./useMutationObserver-tL6yc0PX.js";import"./ModalCardBase-R68_vtFU.js";import"./ModalOutsideButton-ww0fMYzM.js";import"./ModalOutsideButtons-Dtz-0vpU.js";import"./Spacing-BYUv_0Qg.js";import"./Title-S_74tDbu.js";import"./cancel_20-BdALp2jd.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CCCcf5Bk.js";import"./AdaptiveIconRenderer-C6EgprXt.js";import"./cancel_outline_28-DePx_4W9.js";import"./AppRootPortal-DtFYcz06.js";import"./useColorScheme-DuZucal0.js";import"./createPortal-DvBpJvds.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-BsiYmjTD.js";import"./ConfigProviderOverride-Dv9z0Xug.js";import"./v4-EwEgHOG0.js";const tr={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const er=["Playground"];export{p as Playground,er as __namedExportsOrder,tr as default};
