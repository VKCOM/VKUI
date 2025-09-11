import{r as n,j as e}from"./iframe-DfeTZ_Fw.js";import{M as U}from"./ModalWrapper-vNuS6rbn.js";import{D as w,C as Y}from"./constants-DdkjnEgz.js";import{m}from"./mock-BznupqUM.js";import{B as W}from"./Button-CYtH28qE.js";import{C as q}from"./Checkbox-sPuG58U6.js";import{D as p}from"./Div-DWHB9CiA.js";import{F as z}from"./Flex-z5AzZDL-.js";import{G as E}from"./Group-ChVeS0N8.js";import{I as N}from"./Input-DtG3W5cE.js";import{M as i,a as J}from"./ModalPageHeader-a_WfUAdD.js";import{P as B}from"./Placeholder-DqIiFZ2t.js";import{S as K}from"./SimpleCell-BuvX657b.js";import{S as Q}from"./Spinner-Crblzylq.js";import{M as O}from"./ModalRoot-CVnTwmtm.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Tappable-BBWke1IE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Bpx6dgEO.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C-I8ensD.js";import"./SelectionControl-CMkXUaA6.js";import"./Footnote-ivEbNXOe.js";import"./VisuallyHidden-BuJles22.js";import"./check_box_on_24-C-Ehlzip.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./check_box_indetermanate_20-G4JDmqvt.js";import"./gaps-BRHZAyUc.js";import"./FormField-BLz8UzFa.js";import"./useFocusWithin-UgE2lzew.js";import"./UnstyledTextField-BfAYEUe9.js";import"./range-rFhSCI5u.js";import"./ModalOutlet--k0I3WuP.js";import"./rubberbandIfOutOfBounds-DH79xaNV.js";import"./warnOnce-BsOPdcXO.js";import"./useCSSTransition-BsPn6U4g.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./useAdaptivityWithJSMediaQueries-Bgm0pOnu.js";import"./FocusTrap-8k_1peoT.js";import"./useFocusTrap-MVv2Y8kh.js";import"./useMutationObserver-CEGwROLs.js";import"./ModalOutsideButton--rRhEehI.js";import"./ModalOutsideButtons-D79cLBkH.js";import"./CustomScrollView-nYtC7Vih.js";import"./cancel_20-Cahc_esy.js";import"./Headline-BbT30PkZ.js";import"./Title-BA2sPfYi.js";import"./Subhead-BkL8qoJh.js";import"./chevron_compact_right_24-zZ-JxscM.js";import"./chevron_16-w2grljdX.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./AppRootPortal-Cf-1kRil.js";import"./useColorScheme-BGgcYhBu.js";import"./createPortal-B5-CgryZ.js";import"./ColorSchemeProvider-Ct7XlnnY.js";import"./ConfigProviderOverride-BwkUJRE0.js";const at={title:"Utils/ModalRoot",component:O,parameters:{...Y,...w},tags:["Утилиты"]},A="modal-page-dynamic",g="modal-root-with-auto-focus",P="modal-page-with-auto-focus",d={1:{id:1,title:"Длинный текст",subtitle:"settlingHeight={50}"},2:{id:2,title:"Короткий текст",subtitle:"settlingHeight={50}"},3:{id:3,title:"Длинный текст",subtitle:"dynamicContentHeight"},4:{id:4,title:"Короткий текст",subtitle:"dynamicContentHeight"}},_=[1,2,3,4],h={parameters:{centered:!1},render:function(){const[a,r]=n.useState(!1),o=a?e.jsx(J,{children:"Header"}):null,[s,l]=n.useState(null),c=t=>{const{id:x}=t.currentTarget.dataset;x&&l(x)},v=t=>e.jsx(K,{chevron:"always","data-id":d[t].id,before:d[t].id,subtitle:d[t].subtitle,onClick:c,disabled:s===String(t),children:d[t].title},t),u=()=>e.jsx(z,{margin:"auto",gap:8,justify:"space-between",children:_.map(t=>e.jsx(W,{appearance:"neutral","data-id":d[t].id,onClick:c,disabled:s===String(t),children:d[t].id},t))});return e.jsxs(e.Fragment,{children:[e.jsx(q,{name:"header",onChange:t=>r(t.target.checked),children:"Включить шапку"}),_.map(v),e.jsxs(O,{activeModal:s,onClose:()=>l(null),children:[e.jsxs(i,{id:"1",settlingHeight:50,header:o,children:[u(),e.jsx(p,{children:m("Lorem ipsum",400)})]}),e.jsxs(i,{id:"2",settlingHeight:50,header:o,children:[u(),e.jsx(p,{children:m("Lorem ipsum",5)})]}),e.jsxs(i,{id:"3",dynamicContentHeight:!0,header:o,children:[u(),e.jsx(p,{children:m("Lorem ipsum",400)})]}),e.jsxs(i,{id:"4",dynamicContentHeight:!0,header:o,children:[u(),e.jsx(p,{children:m("Lorem ipsum",5)})]})]})]})}},M={render:function(){const[a,r]=n.useState(!0),o=n.useRef(void 0);return n.useEffect(()=>(o.current=setTimeout(()=>{r(!1)},2e3),()=>{clearTimeout(o.current)}),[]),e.jsx(U,{modalId:A,children:e.jsx(i,{id:A,dynamicContentHeight:!0,children:e.jsxs("div",{className:"SelectModal",children:[a&&e.jsx(Q,{}),!a&&e.jsx(B,{children:"Loaded"})]})})})}},f={render:function(){const[a,r]=n.useState(g),o=n.useRef(null),s=n.useCallback(v=>{v===g&&o.current&&o.current.focus()},[]),l=n.useCallback(()=>{r(null)},[]),c=e.jsx(O,{activeModal:a,onClose:l,onOpened:s,children:e.jsx(i,{id:g,children:e.jsx(E,{children:e.jsx(N,{getRef:o})})})});return e.jsxs(B,{stretched:!0,children:[e.jsx(W,{onClick:()=>r(g),children:"Открыть"}),c]})}},C={render:function(){const a=n.useRef(null),r=n.useCallback(()=>{a.current&&a.current.focus()},[]);return e.jsx(U,{modalId:P,children:e.jsx(i,{id:P,onOpened:r,children:e.jsx(E,{children:e.jsx(N,{getRef:a})})})})}};var H,T,j;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(T=h.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var y,S,L;M.parameters={...M.parameters,docs:{...(y=M.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(S=M.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var D,I,b;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(b=(I=f.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var k,F,G;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(G=(F=C.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const rt=["Managing","ModalDynamicHeight","ModalRootAutoFocus","ModalPageAutoFocus"];export{h as Managing,M as ModalDynamicHeight,C as ModalPageAutoFocus,f as ModalRootAutoFocus,rt as __namedExportsOrder,at as default};
