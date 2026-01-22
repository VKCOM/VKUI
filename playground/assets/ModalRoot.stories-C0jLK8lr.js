import{r as o,j as e}from"./iframe-BKqRoeRO.js";import{M as y}from"./ModalWrapper-TFyGShKE.js";import{D as S,C as k}from"./constants-DdkjnEgz.js";import{m}from"./mock-CiudtyON.js";import{B as H}from"./Button-U9s7wDQC.js";import{C as L}from"./Checkbox-CrgcKhjK.js";import{D as p}from"./Div-DMJDrldB.js";import{F as A}from"./Flex-CYi1Q5eR.js";import{G as j}from"./Group-CgxNLM1q.js";import{I as T}from"./Input-BqtL0lzn.js";import{a as d,M as _}from"./ModalPageHeader-Cf6kPXNj.js";import{P as b}from"./Placeholder-CTu_f0lE.js";import{S as D}from"./SimpleCell-SUBlx-6Z.js";import{S as I}from"./Spinner-DWSu6VQp.js";import{M as x}from"./useModalManager-oLHq4t6U.js";import"./preload-helper-PPVm8Dsz.js";import"./Tappable-EPRrmr_0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CadgeLyo.js";import"./useState-Db1sLetb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./InputUtils-CQaATz1N.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl--yoYZlWi.js";import"./Footnote-BAb4Skv3.js";import"./VisuallyHidden-B-uFrHKw.js";import"./check_box_on_24-7AEumDVf.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./check_box_indetermanate_20-DWksIBts.js";import"./gaps-DqOl4b8v.js";import"./FormField-Go62Y8Xh.js";import"./useFocusWithin-cA-uu2zg.js";import"./UnstyledTextField-CICTDeGk.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-Chrx9Yb3.js";import"./rubberbandIfOutOfBounds-CwjOtXpl.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-BVGEBVD3.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-BxosUUYi.js";import"./FocusTrap-BrNSy_VJ.js";import"./useMutationObserver-D2T9tvmZ.js";import"./ModalOutsideButton-5uUDAI0w.js";import"./ModalOutsideButtons-BpSNyU56.js";import"./CustomScrollView-LtH4AA1i.js";import"./cancel_20-BK7RGKwT.js";import"./Headline-CPNK2PuC.js";import"./Title-j8cVZj0a.js";import"./Subhead-B3U-hqtC.js";import"./chevron_compact_right_24-C8sV5QGI.js";import"./chevron_16-o7PR2C3U.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./AppRootPortal-Bl-mYqRi.js";import"./useColorScheme-CV37oJpw.js";import"./createPortal-DVslbEs3.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DzGMXO52.js";import"./ConfigProviderOverride-AuipdI0T.js";import"./ModalCard-Cynqql0x.js";import"./ModalCardBase-BvKjNsC2.js";import"./Spacing-CjlCtUkG.js";import"./dismiss_24-lK4P-V2S.js";import"./v4-EwEgHOG0.js";const Ve={title:"Utils/ModalRoot",component:x,parameters:{...k,...S},tags:["Утилиты"]},g="modal-root-with-auto-focus",c={1:{id:1,title:"Длинный текст",subtitle:"settlingHeight={50}"},2:{id:2,title:"Короткий текст",subtitle:"settlingHeight={50}"},3:{id:3,title:"Длинный текст",subtitle:"dynamicContentHeight"},4:{id:4,title:"Короткий текст",subtitle:"dynamicContentHeight"}},O=[1,2,3,4],h={parameters:{centered:!1},render:function(){const[r,i]=o.useState(!1),n=r?e.jsx(_,{children:"Header"}):null,[a,l]=o.useState(null),s=t=>{const{id:P}=t.currentTarget.dataset;P&&l(P)},v=t=>e.jsx(D,{chevron:"always","data-id":c[t].id,before:c[t].id,subtitle:c[t].subtitle,onClick:s,disabled:a===String(t),children:c[t].title},t),u=()=>e.jsx(A,{margin:"auto",gap:8,justify:"space-between",children:O.map(t=>e.jsx(H,{appearance:"neutral","data-id":c[t].id,onClick:s,disabled:a===String(t),children:c[t].id},t))});return e.jsxs(e.Fragment,{children:[e.jsx(L,{name:"header",onChange:t=>i(t.target.checked),children:"Включить шапку"}),O.map(v),e.jsxs(x,{activeModal:a,onClose:()=>l(null),children:[e.jsxs(d,{id:"1",settlingHeight:50,header:n,children:[u(),e.jsx(p,{children:m("Lorem ipsum",400)})]}),e.jsxs(d,{id:"2",settlingHeight:50,header:n,children:[u(),e.jsx(p,{children:m("Lorem ipsum",5)})]}),e.jsxs(d,{id:"3",dynamicContentHeight:!0,header:n,children:[u(),e.jsx(p,{children:m("Lorem ipsum",400)})]}),e.jsxs(d,{id:"4",dynamicContentHeight:!0,header:n,children:[u(),e.jsx(p,{children:m("Lorem ipsum",5)})]})]})]})}},M={render:function(){const r=o.useCallback(function({modalProps:n}){const[a,l]=o.useState(!0),s=o.useRef(void 0);return o.useEffect(()=>(s.current=setTimeout(()=>{l(!1)},2e3),()=>{clearTimeout(s.current)}),[]),e.jsx(d,{dynamicContentHeight:!0,...n,children:e.jsxs("div",{className:"SelectModal",children:[a&&e.jsx(I,{}),!a&&e.jsx(b,{children:"Loaded"})]})})},[]);return e.jsx(y,{type:"page",customModal:r})}},f={render:function(){const[r,i]=o.useState(g),n=o.useRef(null),a=o.useCallback(v=>{v===g&&n.current&&n.current.focus()},[]),l=o.useCallback(()=>{i(null)},[]),s=e.jsx(x,{activeModal:r,onClose:l,onOpened:a,children:e.jsx(d,{id:g,children:e.jsx(j,{children:e.jsx(T,{getRef:n})})})});return e.jsxs(b,{stretched:!0,children:[e.jsx(H,{onClick:()=>i(g),children:"Открыть"}),s]})}},C={render:function(){const r=o.useRef(null),i=o.useCallback(()=>{r.current&&r.current.focus()},[]),n=o.useCallback(({modalProps:a})=>e.jsx(d,{onOpened:i,...a,children:e.jsx(j,{children:e.jsx(T,{getRef:r})})}),[i]);return e.jsx(y,{type:"page",customModal:n})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
