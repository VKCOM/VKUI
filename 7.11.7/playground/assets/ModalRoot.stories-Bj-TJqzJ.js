import{r as n,j as e}from"./iframe-CmkY54f5.js";import{M as H}from"./ModalWrapper-QWiC6dkK.js";import{D as L,C as D}from"./constants-DdkjnEgz.js";import{m}from"./mock-CiudtyON.js";import{B as T}from"./Button-TSeYhrGZ.js";import{C as I}from"./Checkbox-CriNsz_3.js";import{D as p}from"./Div-CypHjQr-.js";import{F as b}from"./Flex-DLqfh1Mm.js";import{G as j}from"./Group-6J2U7NrK.js";import{I as y}from"./Input-BtGQMChi.js";import{M as i,a as k}from"./ModalPageHeader-DvgvGSjG.js";import{P as S}from"./Placeholder-f5w5sw3F.js";import{S as F}from"./SimpleCell-CINcSEmj.js";import{S as G}from"./Spinner-C6TWv4c6.js";import{M as O}from"./ModalRoot-Bc1tMZiW.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-DW-ilhli.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./InputUtils-UNO81DKX.js";import"./SelectionControl-BEFF_p1-.js";import"./Footnote-Dh1koNQe.js";import"./VisuallyHidden-Da3ud9kw.js";import"./check_box_on_24-BBPM5bmg.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./check_box_indetermanate_20-D4JF3jMM.js";import"./gaps-Yg_CjNhz.js";import"./FormField-CeGCA5oR.js";import"./useFocusWithin-BymUKlkD.js";import"./UnstyledTextField-Cpi10jqy.js";import"./range-rFhSCI5u.js";import"./ModalOutlet-Dft7b_WF.js";import"./rubberbandIfOutOfBounds-CtO2Pyvy.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-DI4xGomN.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-DAWlYeoQ.js";import"./FocusTrap-B80AiANX.js";import"./useFocusTrap-BoB1d5Y9.js";import"./useMutationObserver-BMEHBXHy.js";import"./ModalOutsideButton-CdGHcCVj.js";import"./ModalOutsideButtons-Dy9YV9P4.js";import"./CustomScrollView-BW102QqZ.js";import"./cancel_20-B9i0p-m7.js";import"./Headline-DsYeFntm.js";import"./Title-DSkwAgcq.js";import"./Subhead-BS8ES9bw.js";import"./chevron_compact_right_24-CcDOCtXp.js";import"./chevron_16-CCLojpkC.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./AppRootPortal-DhIktMNn.js";import"./useColorScheme-BCWY6G93.js";import"./createPortal-CzK3IUGW.js";import"./ColorSchemeProvider-BA0ymiYZ.js";import"./ConfigProviderOverride-DzFZq6HF.js";const ze={title:"Utils/ModalRoot",component:O,parameters:{...D,...L},tags:["Утилиты"]},A="modal-page-dynamic",g="modal-root-with-auto-focus",P="modal-page-with-auto-focus",d={1:{id:1,title:"Длинный текст",subtitle:"settlingHeight={50}"},2:{id:2,title:"Короткий текст",subtitle:"settlingHeight={50}"},3:{id:3,title:"Длинный текст",subtitle:"dynamicContentHeight"},4:{id:4,title:"Короткий текст",subtitle:"dynamicContentHeight"}},_=[1,2,3,4],h={parameters:{centered:!1},render:function(){const[a,r]=n.useState(!1),o=a?e.jsx(k,{children:"Header"}):null,[s,l]=n.useState(null),c=t=>{const{id:x}=t.currentTarget.dataset;x&&l(x)},v=t=>e.jsx(F,{chevron:"always","data-id":d[t].id,before:d[t].id,subtitle:d[t].subtitle,onClick:c,disabled:s===String(t),children:d[t].title},t),u=()=>e.jsx(b,{margin:"auto",gap:8,justify:"space-between",children:_.map(t=>e.jsx(T,{appearance:"neutral","data-id":d[t].id,onClick:c,disabled:s===String(t),children:d[t].id},t))});return e.jsxs(e.Fragment,{children:[e.jsx(I,{name:"header",onChange:t=>r(t.target.checked),children:"Включить шапку"}),_.map(v),e.jsxs(O,{activeModal:s,onClose:()=>l(null),children:[e.jsxs(i,{id:"1",settlingHeight:50,header:o,children:[u(),e.jsx(p,{children:m("Lorem ipsum",400)})]}),e.jsxs(i,{id:"2",settlingHeight:50,header:o,children:[u(),e.jsx(p,{children:m("Lorem ipsum",5)})]}),e.jsxs(i,{id:"3",dynamicContentHeight:!0,header:o,children:[u(),e.jsx(p,{children:m("Lorem ipsum",400)})]}),e.jsxs(i,{id:"4",dynamicContentHeight:!0,header:o,children:[u(),e.jsx(p,{children:m("Lorem ipsum",5)})]})]})]})}},M={render:function(){const[a,r]=n.useState(!0),o=n.useRef(void 0);return n.useEffect(()=>(o.current=setTimeout(()=>{r(!1)},2e3),()=>{clearTimeout(o.current)}),[]),e.jsx(H,{modalId:A,children:e.jsx(i,{id:A,dynamicContentHeight:!0,children:e.jsxs("div",{className:"SelectModal",children:[a&&e.jsx(G,{}),!a&&e.jsx(S,{children:"Loaded"})]})})})}},f={render:function(){const[a,r]=n.useState(g),o=n.useRef(null),s=n.useCallback(v=>{v===g&&o.current&&o.current.focus()},[]),l=n.useCallback(()=>{r(null)},[]),c=e.jsx(O,{activeModal:a,onClose:l,onOpened:s,children:e.jsx(i,{id:g,children:e.jsx(j,{children:e.jsx(y,{getRef:o})})})});return e.jsxs(S,{stretched:!0,children:[e.jsx(T,{onClick:()=>r(g),children:"Открыть"}),c]})}},C={render:function(){const a=n.useRef(null),r=n.useCallback(()=>{a.current&&a.current.focus()},[]);return e.jsx(H,{modalId:P,children:e.jsx(i,{id:P,onOpened:r,children:e.jsx(j,{children:e.jsx(y,{getRef:a})})})})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    return <ModalWrapper modalId={MODAL_PAGE_DYNAMIC}>
        <ModalPage id={MODAL_PAGE_DYNAMIC} dynamicContentHeight>
          <div className="SelectModal">
            {isLoading && <Spinner />}
            {!isLoading && <Placeholder>Loaded</Placeholder>}
          </div>
        </ModalPage>
      </ModalWrapper>;
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
    return <ModalWrapper modalId={MODAL_PAGE_WITH_AUTO_FOCUS}>
        <ModalPage id={MODAL_PAGE_WITH_AUTO_FOCUS} onOpened={handleOpen}>
          <Group>
            <Input getRef={inputRef} />
          </Group>
        </ModalPage>
      </ModalWrapper>;
  }
}`,...C.parameters?.docs?.source}}};const Je=["Managing","ModalDynamicHeight","ModalRootAutoFocus","ModalPageAutoFocus"];export{h as Managing,M as ModalDynamicHeight,C as ModalPageAutoFocus,f as ModalRootAutoFocus,Je as __namedExportsOrder,ze as default};
