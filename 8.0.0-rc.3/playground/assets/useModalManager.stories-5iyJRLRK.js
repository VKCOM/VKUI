import{r as c,j as o,E as u,g as C}from"./iframe-Cn0klKvz.js";import{B as m}from"./Button-D37nVvnc.js";import{B as M}from"./ButtonGroup-CMmORMKS.js";import{C as d}from"./CellButton-CAbBHPkO.js";import{C as x}from"./Checkbox-BHnzs-X5.js";import{F as h}from"./Flex-BH7NtNud.js";import{F as f}from"./FormItem-BmMuskhE.js";import{G as g}from"./Group-CNhzxREQ.js";import{I as j}from"./Input-AzUTv79i.js";import{M as P}from"./ModalCard-3UszaYoi.js";import{a as k,M as y}from"./ModalPageHeader-qxJP0x-H.js";import{P as b}from"./PanelHeaderButton-BYqA14CU.js";import{P as v}from"./PanelHeaderClose-BQOVOwrN.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-BmhRrZ4N.js";import{I as H}from"./notification_outline_56-Dr10r8ya.js";import{I}from"./dismiss_24-BoeVLlmb.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-Dez3qxwZ.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-C9tNf48m.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./SimpleCell-FhAfTR8Z.js";import"./Footnote-BwZkqEqY.js";import"./Headline-DgEMhIVy.js";import"./Subhead-BQyoBjlR.js";import"./chevron_compact_right_24-BkZuF5w8.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./chevron_16-5H5JBddQ.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-D8et6yat.js";import"./check_box_on_24-DFXb0s76.js";import"./check_box_indetermanate_20-D0T1lzND.js";import"./gaps-BaMG6Eg5.js";import"./Removable-DJHs5oKA.js";import"./children-IiL0uSHX.js";import"./IconButton-DSEgeqcd.js";import"./useConfigDirection-DuEYXWS_.js";import"./cancel_24-C8myLtmO.js";import"./FormItemTopLabel-CT7Moikm.js";import"./FormField-CqfiouLJ.js";import"./useFocusWithin-GdWsk7hi.js";import"./UnstyledTextField-ogVVFYld.js";import"./ModalOutlet-C70PrzKg.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-8X7oT1VZ.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-HN3XvvMQ.js";import"./useAdaptivityWithJSMediaQueries-DDw_TnXg.js";import"./FocusTrap-DkOYwnnY.js";import"./useMutationObserver-COKUuFT-.js";import"./ModalCardBase-CKb0tgJE.js";import"./ModalOutsideButton-B0-Dn9gH.js";import"./ModalOutsideButtons-CV2JPNX-.js";import"./Spacing-k48zXNFX.js";import"./Title-C-xuvkmu.js";import"./cancel_20-7x4VuNbl.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-DDpGxQa7.js";import"./AdaptiveIconRenderer-BkROPn6l.js";import"./cancel_outline_28-CFA5mWpV.js";import"./AppRootPortal-DrN2viSO.js";import"./useColorScheme-C7zCwRzY.js";import"./createPortal-CeijUj_q.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-Blw8FFCv.js";import"./ConfigProviderOverride-CSeOrjpg.js";import"./randomUUID-CV8jBseQ.js";const tr={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
