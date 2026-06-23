import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{n as i,t as a}from"./Spinner-CHdjpv5-.js";import{n as o,t as s}from"./Button-DxjiUwvt.js";import{n as c,t as l}from"./Flex-B8Cr5qNM.js";import{i as u,r as d}from"./useModalManager-B8hwmkmS.js";import{i as f,n as p,r as m,t as h}from"./ModalPageHeader-BktTtgob.js";import{n as g,t as _}from"./Group-LwNPJiLD.js";import{n as v,t as y}from"./SimpleCell-BnYS7eov.js";import{n as b,t as x}from"./Placeholder-B3WCn6mG.js";import{n as S,t as C}from"./Input-D9mLcf5V.js";import{n as w,t as T}from"./Checkbox-DUMmMTez.js";import{n as E,t as D}from"./Div-Cd0q8MDi.js";import{i as O,n as k,t as A}from"./constants-cjed6ZWB.js";import{c as j,o as M}from"./mock-K9LjXOLX.js";import{n as N,t as P}from"./ModalWrapper-CIFuUwm5.js";var F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{F=t(n(),1),N(),O(),M(),o(),w(),E(),c(),g(),S(),f(),p(),b(),v(),i(),u(),I=t(r(),1),L=`modal-root-with-auto-focus`,R={1:{id:1,title:`Длинный текст`,subtitle:`settlingHeight={50}`},2:{id:2,title:`Короткий текст`,subtitle:`settlingHeight={50}`},3:{id:3,title:`Длинный текст`,subtitle:`dynamicContentHeight`},4:{id:4,title:`Короткий текст`,subtitle:`dynamicContentHeight`}},z=[1,2,3,4],B={title:`Utils/ModalRoot`,component:d,parameters:{...A,...k,liveCodeEditor:{scope:{MODAL_ROOT_WITH_AUTO_FOCUS:L,modalsPayload:R,modalIds:z,ModalWrapper:P}}},tags:[`Утилиты`]},V=()=>{let[e,t]=F.useState(!1),n=e?(0,I.jsx)(h,{children:`Header`}):null,[r,i]=F.useState(null),a=e=>{let{id:t}=e.currentTarget.dataset;t&&i(t)},o=e=>(0,I.jsx)(y,{chevron:`always`,"data-id":R[e].id,before:R[e].id,subtitle:R[e].subtitle,onClick:a,disabled:r===String(e),children:R[e].title},e),c=()=>(0,I.jsx)(l,{margin:`auto`,gap:8,justify:`space-between`,children:z.map(e=>(0,I.jsx)(s,{appearance:`neutral`,"data-id":R[e].id,onClick:a,disabled:r===String(e),children:R[e].id},e))});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(T,{name:`header`,onChange:e=>t(e.target.checked),children:`Включить шапку`}),z.map(o),(0,I.jsxs)(d,{activeModal:r,onClose:()=>i(null),children:[(0,I.jsxs)(m,{id:`1`,settlingHeight:50,header:n,children:[c(),(0,I.jsx)(D,{children:j(`Lorem ipsum`,400)})]}),(0,I.jsxs)(m,{id:`2`,settlingHeight:50,header:n,children:[c(),(0,I.jsx)(D,{children:j(`Lorem ipsum`,5)})]}),(0,I.jsxs)(m,{id:`3`,dynamicContentHeight:!0,header:n,children:[c(),(0,I.jsx)(D,{children:j(`Lorem ipsum`,400)})]}),(0,I.jsxs)(m,{id:`4`,dynamicContentHeight:!0,header:n,children:[c(),(0,I.jsx)(D,{children:j(`Lorem ipsum`,5)})]})]})]})},V.parameters={centered:!1},H=({modalProps:e})=>{let[t,n]=F.useState(!0),r=F.useRef(void 0);return F.useEffect(()=>(r.current=setTimeout(()=>{n(!1)},2e3),()=>{clearTimeout(r.current)}),[]),(0,I.jsx)(m,{dynamicContentHeight:!0,...e,children:(0,I.jsxs)(`div`,{className:`SelectModal`,children:[t&&(0,I.jsx)(a,{}),!t&&(0,I.jsx)(x,{children:`Loaded`})]})})},U=()=>(0,I.jsx)(P,{type:`page`,customModal:H}),U.parameters={liveCodeEditor:{scope:{CustomModal:H}}},W=()=>{let[e,t]=F.useState(L),n=F.useRef(null),r=F.useCallback(e=>{e===L&&n.current&&n.current.focus()},[]),i=(0,I.jsx)(d,{activeModal:e,onClose:F.useCallback(()=>{t(null)},[]),onOpened:r,children:(0,I.jsx)(m,{id:L,children:(0,I.jsx)(_,{children:(0,I.jsx)(C,{getRef:n})})})});return(0,I.jsxs)(x,{stretched:!0,children:[(0,I.jsx)(s,{onClick:()=>t(L),children:`Открыть`}),i]})},G=()=>{let e=F.useRef(null),t=F.useCallback(()=>{e.current&&e.current.focus()},[]);return(0,I.jsx)(P,{type:`page`,customModal:F.useCallback(({modalProps:n})=>(0,I.jsx)(m,{onOpened:t,...n,children:(0,I.jsx)(_,{children:(0,I.jsx)(C,{getRef:e})})}),[t])})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <ModalWrapper type="page" customModal={CustomModal} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K=[`Managing`,`ModalDynamicHeight`,`ModalRootAutoFocus`,`ModalPageAutoFocus`]}))();export{V as Managing,U as ModalDynamicHeight,G as ModalPageAutoFocus,W as ModalRootAutoFocus,K as __namedExportsOrder,B as default};