import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,n as a,t as o}from"./constants-BWBR8eWE.js";import{n as s,t as c}from"./Group-BYaqcOTu.js";import{n as l,t as u}from"./SimpleCell-DpxF12b-.js";import{n as d,t as f}from"./Spinner-B23uxuTb.js";import{n as p,t as m}from"./Button-UIWLqw4_.js";import{n as h,t as g}from"./Placeholder-CEGhmgMM.js";import{c as _,o as v}from"./mock-gn_3WRVn.js";import{n as y,t as b}from"./Div-ByfmwV1U.js";import{n as x,t as S}from"./Flex-C-g3JHZP.js";import{n as C,t as w}from"./Input-C0QwfGXJ.js";import{n as T,t as E}from"./Checkbox-B7P4xqM-.js";import{c as D,n as O,s as k,t as A}from"./ModalPage-BVlZnWFW.js";import{i as j,r as M}from"./useModalManager-BWf7koaY.js";import{n as N,t as P}from"./ModalWrapper-G4X_HNp5.js";var F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=t((()=>{F=e(n(),1),N(),i(),v(),p(),T(),y(),x(),s(),C(),O(),D(),h(),l(),d(),j(),I=r(),L=`modal-root-with-auto-focus`,R={1:{id:1,title:`Длинный текст`,subtitle:`settlingHeight={50}`},2:{id:2,title:`Короткий текст`,subtitle:`settlingHeight={50}`},3:{id:3,title:`Длинный текст`,subtitle:`dynamicContentHeight`},4:{id:4,title:`Короткий текст`,subtitle:`dynamicContentHeight`}},z=[1,2,3,4],B={title:`Utils/ModalRoot`,component:M,parameters:{...o,...a,liveCodeEditor:{scope:{MODAL_ROOT_WITH_AUTO_FOCUS:L,modalsPayload:R,modalIds:z,ModalWrapper:P}}},tags:[`Утилиты`]},V=()=>{let[e,t]=F.useState(!1),n=e?(0,I.jsx)(k,{children:`Header`}):null,[r,i]=F.useState(null),a=e=>{let{id:t}=e.currentTarget.dataset;t&&i(t)},o=e=>(0,I.jsx)(u,{chevron:`always`,"data-id":R[e].id,before:R[e].id,subtitle:R[e].subtitle,onClick:a,disabled:r===String(e),children:R[e].title},e),s=()=>(0,I.jsx)(S,{margin:`auto`,gap:8,justify:`space-between`,children:z.map(e=>(0,I.jsx)(m,{appearance:`neutral`,"data-id":R[e].id,onClick:a,disabled:r===String(e),children:R[e].id},e))});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(E,{name:`header`,onChange:e=>t(e.target.checked),children:`Включить шапку`}),z.map(o),(0,I.jsxs)(M,{activeModal:r,onClose:()=>i(null),children:[(0,I.jsxs)(A,{id:`1`,settlingHeight:50,header:n,children:[s(),(0,I.jsx)(b,{children:_(`Lorem ipsum`,400)})]}),(0,I.jsxs)(A,{id:`2`,settlingHeight:50,header:n,children:[s(),(0,I.jsx)(b,{children:_(`Lorem ipsum`,5)})]}),(0,I.jsxs)(A,{id:`3`,dynamicContentHeight:!0,header:n,children:[s(),(0,I.jsx)(b,{children:_(`Lorem ipsum`,400)})]}),(0,I.jsxs)(A,{id:`4`,dynamicContentHeight:!0,header:n,children:[s(),(0,I.jsx)(b,{children:_(`Lorem ipsum`,5)})]})]})]})},V.parameters={centered:!1},H=({modalProps:e})=>{let[t,n]=F.useState(!0),r=F.useRef(void 0);return F.useEffect(()=>(r.current=setTimeout(()=>{n(!1)},2e3),()=>{clearTimeout(r.current)}),[]),(0,I.jsx)(A,{dynamicContentHeight:!0,...e,children:(0,I.jsxs)(`div`,{className:`SelectModal`,children:[t&&(0,I.jsx)(f,{}),!t&&(0,I.jsx)(g,{children:`Loaded`})]})})},U=()=>(0,I.jsx)(P,{type:`page`,customModal:H}),U.parameters={liveCodeEditor:{scope:{CustomModal:H}}},W=()=>{let[e,t]=F.useState(L),n=F.useRef(null),r=F.useCallback(e=>{e===L&&n.current&&n.current.focus()},[]),i=F.useCallback(()=>{t(null)},[]);return(0,I.jsxs)(g,{stretched:!0,children:[(0,I.jsx)(m,{onClick:()=>t(L),children:`Открыть`}),(0,I.jsx)(M,{activeModal:e,onClose:i,onOpened:r,children:(0,I.jsx)(A,{id:L,children:(0,I.jsx)(c,{children:(0,I.jsx)(w,{getRef:n})})})})]})},G=()=>{let e=F.useRef(null),t=F.useCallback(()=>{e.current&&e.current.focus()},[]),n=F.useCallback(({modalProps:n})=>(0,I.jsx)(A,{onOpened:t,...n,children:(0,I.jsx)(c,{children:(0,I.jsx)(w,{getRef:e})})}),[t]);return(0,I.jsx)(P,{type:`page`,customModal:n})},K=[`Managing`,`ModalDynamicHeight`,`ModalRootAutoFocus`,`ModalPageAutoFocus`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}}})))()}q();export{V as Managing,U as ModalDynamicHeight,G as ModalPageAutoFocus,W as ModalRootAutoFocus,K as __namedExportsOrder,B as default};