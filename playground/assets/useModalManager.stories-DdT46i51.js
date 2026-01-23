import{j as o,r as c,c as u,u as C}from"./iframe-BJ9555aC.js";import{B as m}from"./Button-BbA_I1es.js";import{B as M}from"./ButtonGroup-Zi_kt7Rj.js";import{C as d}from"./CellButton-C0SCpAL-.js";import{C as x}from"./Checkbox-Dh6ohESg.js";import{F as h}from"./Flex-DmNTXycq.js";import{F as f}from"./FormItem-B4zv-4AF.js";import{G as g}from"./Group-DpwBrIOF.js";import{I as j}from"./Input-BYL3n8Xu.js";import{M as P}from"./ModalCard-BM3t_U71.js";import{a as k,M as y}from"./ModalPageHeader-Bl6EAlAB.js";import{P as b}from"./PanelHeaderButton-BUzE02Lo.js";import{P as v}from"./PanelHeaderClose-9c6rixeh.js";import{D as B,C as N}from"./constants-DdkjnEgz.js";import{u as F}from"./useModalManager-CYMCGjnx.js";import{I as H}from"./notification_outline_56-CJNn3WHa.js";import{I}from"./dismiss_24-BDzDjlBI.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CsAXLMyU.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BpRJPd7L.js";import"./Tappable-Bz7LtOMO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./InputUtils-8LhFcqKY.js";import"./SimpleCell-DnYpeFDL.js";import"./Footnote-xxqNAETB.js";import"./Headline-Bb4b2JBA.js";import"./Subhead-ppzL9p3g.js";import"./chevron_compact_right_24-DrAMy2kd.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_16-CJFbNzh_.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-rzRiYLvi.js";import"./check_box_on_24-Bzc3wPiJ.js";import"./check_box_indetermanate_20-BFU2VF-t.js";import"./gaps-DqOl4b8v.js";import"./Removable-wWHIROGY.js";import"./children-CFPqwV5J.js";import"./IconButton-DRWEpqxT.js";import"./useConfigDirection-BeEtg5OO.js";import"./cancel_24-jJgAHgAr.js";import"./FormItemTopLabel-ptiBoJQC.js";import"./FormField-DvQPBwxb.js";import"./useFocusWithin-ClOWbdUU.js";import"./UnstyledTextField-BrHZgtPt.js";import"./ModalOutlet-DOohz1vI.js";import"./rubberbandIfOutOfBounds-p3jqOJwK.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-DZFjXY5z.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-CC96WuMD.js";import"./FocusTrap-Qs6H907S.js";import"./useMutationObserver-B_zcWFq6.js";import"./ModalCardBase-DSf7VeCI.js";import"./ModalOutsideButton-DBJy-eNx.js";import"./ModalOutsideButtons-fpOf_neC.js";import"./Spacing-Dy4F7I-W.js";import"./Title-BmBt_BL_.js";import"./cancel_20-Bjnkubmw.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-kMAABzAe.js";import"./AdaptiveIconRenderer-DUioVxFm.js";import"./cancel_outline_28-Dfbvja4j.js";import"./AppRootPortal-Du-f4Doj.js";import"./useColorScheme-DvMUZASe.js";import"./createPortal-DbDswA2g.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-QatNCALS.js";import"./ConfigProviderOverride-TDUswttQ.js";import"./v4-EwEgHOG0.js";const er={title:"Utils/useModalManager",component:()=>o.jsx("div",{}),parameters:{...N,...B}},R=({close:i,update:a,openNextModal:t,modalProps:n,modalNumber:e})=>o.jsx(P,{icon:o.jsx(H,{}),title:`#${e} Modal Card Title`,actions:o.jsxs(M,{stretched:!0,mode:"vertical",children:[o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("page"),children:"Открыть ModalPage"}),o.jsx(m,{size:"l",mode:"primary",stretched:!0,onClick:()=>t("card"),children:"Открыть ModalCard"}),o.jsx(m,{size:"l",mode:"secondary",stretched:!0,onClick:()=>i(),children:"Закрыть"})]}),...n,children:o.jsx(f,{top:"Заголовок модалки",children:o.jsx(j,{defaultValue:`#${e} Modal Card Title`,onChange:r=>a({title:r.target.value})})})}),T=({openNextModal:i,close:a,modalProps:t,modalNumber:n})=>{const e=u(),{viewWidth:r}=C();return o.jsx(k,{header:o.jsxs(y,{before:r.smallTabletMinus&&e==="android"&&o.jsx(v,{className:r.smallTabletMinus.className,onClick:()=>a()}),after:r.smallTabletMinus&&e==="ios"&&o.jsx(b,{onClick:()=>a(),className:r.smallTabletMinus.className,children:o.jsx(I,{})}),children:["#",n," Dynamic modal"]}),...t,children:o.jsxs(g,{children:[o.jsx(d,{onClick:()=>i("page"),children:"Open ModalPage"}),o.jsx(d,{onClick:()=>i("card"),children:"Open ModalCard"})]})})},p={render:function(a){const[t,n]=F(a),e=c.useRef(0),r=s=>{e.current+=1;const l=e.current;s==="card"?t.openCustomModalCard({component:R,additionalProps:{openNextModal:r,modalNumber:l}}):t.openCustomModalPage({component:T,additionalProps:{openNextModal:r,modalNumber:l}})};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{direction:"column",gap:"m",children:[o.jsx(x,{defaultChecked:!0,onChange:s=>t.setSaveHistory(s.target.checked),children:"Сохранять историю открытия"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("page"),children:"Открыть ModalPage"}),o.jsx(m,{appearance:"overlay",onClick:()=>r("card"),children:"Открыть ModalCard"})]}),n]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
