import{r as o,j as e}from"./iframe-D-vjmezP.js";import{M as y}from"./ModalWrapper-CbmEju-I.js";import{D as S,C as k}from"./constants-DdkjnEgz.js";import{m}from"./mock-CiudtyON.js";import{B as H}from"./Button-iOPheJU3.js";import{C as L}from"./Checkbox-DCLhx_o9.js";import{D as p}from"./Div-B3mltvz-.js";import{F as A}from"./Flex-C_be27FX.js";import{G as j}from"./Group-knjA_28m.js";import{I as T}from"./Input-I59RC-3d.js";import{a as d,M as _}from"./ModalPageHeader-DD4zDwd4.js";import{P as b}from"./Placeholder-DLp1pcyI.js";import{S as D}from"./SimpleCell-CsYR4Aza.js";import{S as I}from"./Spinner-CGq4yNx9.js";import{M as x}from"./useModalManager-CA0_WvXd.js";import"./preload-helper-PPVm8Dsz.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-8IF9aLXb.js";import"./Footnote-DApQXU2r.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./check_box_on_24-CgV3p_bd.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./check_box_indetermanate_20-Dr_kWXwB.js";import"./gaps-BRHZAyUc.js";import"./FormField-DoheaqQo.js";import"./useFocusWithin-BzKDlGXW.js";import"./UnstyledTextField-B6Z4YAuX.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-BObAFP2N.js";import"./rubberbandIfOutOfBounds-CVqKReCD.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-DvB-HHcQ.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-DevrISR8.js";import"./FocusTrap-bmUu0BLP.js";import"./useMutationObserver-Dd7ppQ1q.js";import"./ModalOutsideButton-XfLqINuu.js";import"./ModalOutsideButtons-BHPvGVGS.js";import"./CustomScrollView-CFBg-_BN.js";import"./cancel_20-iVWticgh.js";import"./Headline-Dq88a-b4.js";import"./Title-5rqdnq6p.js";import"./Subhead-DCgRz-zo.js";import"./chevron_compact_right_24-qWPDpI7y.js";import"./chevron_16-Bb1SKLei.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./AppRootPortal-CyZtHULY.js";import"./useColorScheme-B_PTVyib.js";import"./createPortal-Dv77p3HH.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-n4W2EG.js";import"./ConfigProviderOverride-BVw-qRt5.js";import"./ModalCard-B-5X0QCk.js";import"./ModalCardBase-C7UKMQVS.js";import"./Spacing-Cw7ZXTkR.js";import"./dismiss_24-cJPxsGgW.js";import"./v4-EwEgHOG0.js";const Ve={title:"Utils/ModalRoot",component:x,parameters:{...k,...S},tags:["Утилиты"]},g="modal-root-with-auto-focus",c={1:{id:1,title:"Длинный текст",subtitle:"settlingHeight={50}"},2:{id:2,title:"Короткий текст",subtitle:"settlingHeight={50}"},3:{id:3,title:"Длинный текст",subtitle:"dynamicContentHeight"},4:{id:4,title:"Короткий текст",subtitle:"dynamicContentHeight"}},O=[1,2,3,4],h={parameters:{centered:!1},render:function(){const[r,i]=o.useState(!1),n=r?e.jsx(_,{children:"Header"}):null,[a,l]=o.useState(null),s=t=>{const{id:P}=t.currentTarget.dataset;P&&l(P)},v=t=>e.jsx(D,{chevron:"always","data-id":c[t].id,before:c[t].id,subtitle:c[t].subtitle,onClick:s,disabled:a===String(t),children:c[t].title},t),u=()=>e.jsx(A,{margin:"auto",gap:8,justify:"space-between",children:O.map(t=>e.jsx(H,{appearance:"neutral","data-id":c[t].id,onClick:s,disabled:a===String(t),children:c[t].id},t))});return e.jsxs(e.Fragment,{children:[e.jsx(L,{name:"header",onChange:t=>i(t.target.checked),children:"Включить шапку"}),O.map(v),e.jsxs(x,{activeModal:a,onClose:()=>l(null),children:[e.jsxs(d,{id:"1",settlingHeight:50,header:n,children:[u(),e.jsx(p,{children:m("Lorem ipsum",400)})]}),e.jsxs(d,{id:"2",settlingHeight:50,header:n,children:[u(),e.jsx(p,{children:m("Lorem ipsum",5)})]}),e.jsxs(d,{id:"3",dynamicContentHeight:!0,header:n,children:[u(),e.jsx(p,{children:m("Lorem ipsum",400)})]}),e.jsxs(d,{id:"4",dynamicContentHeight:!0,header:n,children:[u(),e.jsx(p,{children:m("Lorem ipsum",5)})]})]})]})}},M={render:function(){const r=o.useCallback(function({modalProps:n}){const[a,l]=o.useState(!0),s=o.useRef(void 0);return o.useEffect(()=>(s.current=setTimeout(()=>{l(!1)},2e3),()=>{clearTimeout(s.current)}),[]),e.jsx(d,{dynamicContentHeight:!0,...n,children:e.jsxs("div",{className:"SelectModal",children:[a&&e.jsx(I,{}),!a&&e.jsx(b,{children:"Loaded"})]})})},[]);return e.jsx(y,{type:"page",customModal:r})}},f={render:function(){const[r,i]=o.useState(g),n=o.useRef(null),a=o.useCallback(v=>{v===g&&n.current&&n.current.focus()},[]),l=o.useCallback(()=>{i(null)},[]),s=e.jsx(x,{activeModal:r,onClose:l,onOpened:a,children:e.jsx(d,{id:g,children:e.jsx(j,{children:e.jsx(T,{getRef:n})})})});return e.jsxs(b,{stretched:!0,children:[e.jsx(H,{onClick:()=>i(g),children:"Открыть"}),s]})}},C={render:function(){const r=o.useRef(null),i=o.useCallback(()=>{r.current&&r.current.focus()},[]),n=o.useCallback(({modalProps:a})=>e.jsx(d,{onOpened:i,...a,children:e.jsx(j,{children:e.jsx(T,{getRef:r})})}),[i]);return e.jsx(y,{type:"page",customModal:n})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    centered: false
  },
  render: function Render() {
    const [withHeader, setWithHeader] = React.useState(false);
    const header = withHeader ? <ModalPageHeader>Header</ModalPageHeader> : null;
    const [activeModal, setActiveModal] = React.useState<string | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const {
        id
      } = event.currentTarget.dataset;
      if (id) {
        setActiveModal(id);
      }
    };
    const renderNavigationCell = (i: 1 | 2 | 3 | 4) => <SimpleCell key={i} chevron="always" data-id={modalsPayload[i].id} before={modalsPayload[i].id} subtitle={modalsPayload[i].subtitle} onClick={handleClick} disabled={activeModal === String(i)}>
        {modalsPayload[i].title}
      </SimpleCell>;
    const renderNavigationButtonGroup = () => <Flex margin="auto" gap={8} justify="space-between">
        {modalIds.map(i => <Button key={i} appearance="neutral" data-id={modalsPayload[i].id} onClick={handleClick} disabled={activeModal === String(i)}>
            {modalsPayload[i].id}
          </Button>)}
      </Flex>;
    return <>
        <Checkbox name="header" onChange={event => setWithHeader(event.target.checked)}>
          Включить шапку
        </Checkbox>
        {modalIds.map(renderNavigationCell)}
        <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
          <ModalPage id="1" settlingHeight={50} header={header}>
            {renderNavigationButtonGroup()}
            <Div>{multiplyText('Lorem ipsum', 400)}</Div>
          </ModalPage>
          <ModalPage id="2" settlingHeight={50} header={header}>
            {renderNavigationButtonGroup()}
            <Div>{multiplyText('Lorem ipsum', 5)}</Div>
          </ModalPage>
          <ModalPage id="3" dynamicContentHeight header={header}>
            {renderNavigationButtonGroup()}
            <Div>{multiplyText('Lorem ipsum', 400)}</Div>
          </ModalPage>
          <ModalPage id="4" dynamicContentHeight header={header}>
            {renderNavigationButtonGroup()}
            <Div>{multiplyText('Lorem ipsum', 5)}</Div>
          </ModalPage>
        </ModalRoot>
      </>;
  }
}`,...h.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const CustomModal = React.useCallback(function Render({
      modalProps
    }: CustomModalProps<OpenModalPageProps>) {
      const [isLoading, setIsLoading] = React.useState(true);
      const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
      React.useEffect(() => {
        timer.current = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => {
          clearTimeout(timer.current);
        };
      }, []);
      return <ModalPage dynamicContentHeight {...modalProps}>
          <div className="SelectModal">
            {isLoading && <Spinner />}
            {!isLoading && <Placeholder>Loaded</Placeholder>}
          </div>
        </ModalPage>;
    }, []);
    return <ModalWrapper type="page" customModal={CustomModal} />;
  }
}`,...M.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [activeModal, setActiveModal] = React.useState<string | null>(MODAL_ROOT_WITH_AUTO_FOCUS);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleOpen = React.useCallback((id: string) => {
      if (id === MODAL_ROOT_WITH_AUTO_FOCUS && inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
    const onClose = React.useCallback(() => {
      setActiveModal(null);
    }, []);
    const modal = <ModalRoot activeModal={activeModal} onClose={onClose} onOpened={handleOpen}>
        <ModalPage id={MODAL_ROOT_WITH_AUTO_FOCUS}>
          <Group>
            <Input getRef={inputRef} />
          </Group>
        </ModalPage>
      </ModalRoot>;
    return <Placeholder stretched>
        <Button onClick={() => setActiveModal(MODAL_ROOT_WITH_AUTO_FOCUS)}>Открыть</Button>
        {modal}
      </Placeholder>;
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleOpen = React.useCallback(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
    const CustomModal = React.useCallback(({
      modalProps
    }: CustomModalProps<OpenModalPageProps>) => {
      return <ModalPage onOpened={handleOpen} {...modalProps}>
            <Group>
              <Input getRef={inputRef} />
            </Group>
          </ModalPage>;
    }, [handleOpen]);
    return <ModalWrapper type="page" customModal={CustomModal} />;
  }
}`,...C.parameters?.docs?.source}}};const Xe=["Managing","ModalDynamicHeight","ModalRootAutoFocus","ModalPageAutoFocus"];export{h as Managing,M as ModalDynamicHeight,C as ModalPageAutoFocus,f as ModalRootAutoFocus,Xe as __namedExportsOrder,Ve as default};
