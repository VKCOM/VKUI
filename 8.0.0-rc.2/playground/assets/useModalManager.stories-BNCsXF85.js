import{j as o,r as c,B as u,g as C}from"./iframe-C4bTyPBQ.js";import{B as m}from"./Button-D-zltIHu.js";import{B as M}from"./ButtonGroup-Dy-X_yH-.js";import{C as d}from"./CellButton-CcrOOYkK.js";import{C as x}from"./Checkbox-De9eb5az.js";import{F as h}from"./Flex-BzibNvH8.js";import{F as f}from"./FormItem-C-IhRU6i.js";import{G as g}from"./Group-B0qSQvWx.js";import{I as j}from"./Input-A1g04NDj.js";import{M as P}from"./ModalCard-DvjG-nIP.js";import{a as k,M as y}from"./ModalPageHeader-OYQeRWw9.js";import{P as b}from"./PanelHeaderButton-DYb8XRuL.js";import{P as v}from"./PanelHeaderClose-KM7ugVFr.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-D-eZWJLn.js";import{I as H}from"./notification_outline_56-DdvHch8g.js";import{I}from"./dismiss_24-Cd9gXJpm.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CnNDPfa2.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./Tappable-BZW__-HP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./InputUtils-Ns7QNyDT.js";import"./SimpleCell-3wWwuzOF.js";import"./Footnote-wW_hecXF.js";import"./Headline-B4T2ew9V.js";import"./Subhead-CGMBr7DJ.js";import"./chevron_compact_right_24-9Y_UhAEg.js";import"./SvgIconRootV2-DbftVVP5.js";import"./chevron_16-D1zTg27u.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-nhrz54tJ.js";import"./check_box_on_24-C22hmiDf.js";import"./check_box_indetermanate_20-CDLMjpub.js";import"./gaps-BaMG6Eg5.js";import"./Removable-CbiJXY2P.js";import"./children-DNxvoAyX.js";import"./IconButton-BXe704ZF.js";import"./useConfigDirection-OBrCdmzr.js";import"./cancel_24-BKCyLyjW.js";import"./FormItemTopLabel-CMW198iU.js";import"./FormField-Cu0jfNj8.js";import"./useFocusWithin-CWJCpHmP.js";import"./UnstyledTextField-Dht_T5AR.js";import"./ModalOutlet-DmuEYBxn.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-D-ywr4wZ.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-Ds51Way3.js";import"./useAdaptivityWithJSMediaQueries-C-6nl7Lu.js";import"./FocusTrap-DR0NIrZZ.js";import"./useMutationObserver-Dz5wTjis.js";import"./ModalCardBase-DbiREtYT.js";import"./ModalOutsideButton-jvmF2gHy.js";import"./ModalOutsideButtons-VWc2KEcT.js";import"./Spacing-ffMUESuT.js";import"./Title-CK3YofNd.js";import"./cancel_20-EIRIx7Ta.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-BsG9TUbn.js";import"./AdaptiveIconRenderer-COrX8BE5.js";import"./cancel_outline_28-BEQUnLE_.js";import"./AppRootPortal-CWanvcnq.js";import"./useColorScheme-B5qdSLTx.js";import"./createPortal-BVIABMB9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B34yrt0u.js";import"./ConfigProviderOverride-BLhdVd3U.js";import"./randomUUID-CV8jBseQ.js";const tr={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
