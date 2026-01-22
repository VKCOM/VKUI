import{j as o,r as c,c as u,u as C}from"./iframe-BKqRoeRO.js";import{B as m}from"./Button-U9s7wDQC.js";import{B as M}from"./ButtonGroup-Dx6nKOx5.js";import{C as d}from"./CellButton-tOwXcUJj.js";import{C as x}from"./Checkbox-CrgcKhjK.js";import{F as h}from"./Flex-CYi1Q5eR.js";import{F as f}from"./FormItem-Dyo3xbl7.js";import{G as g}from"./Group-CgxNLM1q.js";import{I as j}from"./Input-BqtL0lzn.js";import{M as P}from"./ModalCard-Cynqql0x.js";import{a as k,M as y}from"./ModalPageHeader-Cf6kPXNj.js";import{P as b}from"./PanelHeaderButton-D-iZ99bJ.js";import{P as v}from"./PanelHeaderClose-FTugKN6p.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-oLHq4t6U.js";import{I as H}from"./notification_outline_56-Bgs3Zyrk.js";import{I}from"./dismiss_24-lK4P-V2S.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-DWSu6VQp.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-B-uFrHKw.js";import"./Tappable-EPRrmr_0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CadgeLyo.js";import"./useState-Db1sLetb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./InputUtils-CQaATz1N.js";import"./SimpleCell-SUBlx-6Z.js";import"./Footnote-BAb4Skv3.js";import"./Headline-CPNK2PuC.js";import"./Subhead-B3U-hqtC.js";import"./chevron_compact_right_24-C8sV5QGI.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-o7PR2C3U.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl--yoYZlWi.js";import"./check_box_on_24-7AEumDVf.js";import"./check_box_indetermanate_20-DWksIBts.js";import"./gaps-DqOl4b8v.js";import"./Removable-BbK5TlWA.js";import"./children-Bm1QhBGC.js";import"./IconButton-CDypKmxT.js";import"./useConfigDirection-BH9mMD5y.js";import"./cancel_24-C2B5W1bI.js";import"./FormItemTopLabel-CuNbnoDb.js";import"./FormField-Go62Y8Xh.js";import"./useFocusWithin-cA-uu2zg.js";import"./UnstyledTextField-CICTDeGk.js";import"./ModalOutlet-Chrx9Yb3.js";import"./rubberbandIfOutOfBounds-CwjOtXpl.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-BVGEBVD3.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-BxosUUYi.js";import"./FocusTrap-BrNSy_VJ.js";import"./useMutationObserver-D2T9tvmZ.js";import"./ModalCardBase-BvKjNsC2.js";import"./ModalOutsideButton-5uUDAI0w.js";import"./ModalOutsideButtons-BpSNyU56.js";import"./Spacing-CjlCtUkG.js";import"./Title-j8cVZj0a.js";import"./cancel_20-BK7RGKwT.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-LtH4AA1i.js";import"./AdaptiveIconRenderer-BhgbmtGf.js";import"./cancel_outline_28-CLHIqIvU.js";import"./AppRootPortal-Bl-mYqRi.js";import"./useColorScheme-CV37oJpw.js";import"./createPortal-DVslbEs3.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DzGMXO52.js";import"./ConfigProviderOverride-AuipdI0T.js";import"./v4-EwEgHOG0.js";const er={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
