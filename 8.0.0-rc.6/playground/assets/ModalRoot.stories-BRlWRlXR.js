import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CX9URrKL.js";import{t as r}from"./jsx-runtime-CRMqfscQ.js";import{n as i,t as a}from"./Spinner-Cp8hDluA.js";import{n as o,t as s}from"./Button-B52Pa8EG.js";import{n as c,t as l}from"./Flex-DeaZsMHh.js";import{i as u,r as d}from"./useModalManager-DWHwbVeg.js";import{i as f,n as p,r as m,t as h}from"./ModalPageHeader-DPJQLGaD.js";import{n as g,t as _}from"./Group-DLQ4QDyF.js";import{n as v,t as y}from"./SimpleCell-BcnZZwLB.js";import{n as b,t as x}from"./Placeholder-BI6EG9Dt.js";import{n as S,t as C}from"./Input-DXoarOzB.js";import{n as w,t as T}from"./Checkbox-_pjXWOHu.js";import{n as E,t as D}from"./Div-CqYIw6Ki.js";import{i as O,n as k,t as A}from"./constants-BYo4AJCv.js";import{o as j,s as M}from"./mock-Da5716d-.js";import{n as N,t as P}from"./ModalWrapper-DY7aEWQu.js";var F,I,L,R,z,B,V,H,U,W,G;t((()=>{F=e(n(),1),N(),O(),j(),o(),w(),E(),c(),g(),S(),f(),p(),b(),v(),i(),u(),I=r(),L={title:`Utils/ModalRoot`,component:d,parameters:{...A,...k},tags:[`Утилиты`]},R=`modal-root-with-auto-focus`,z={1:{id:1,title:`Длинный текст`,subtitle:`settlingHeight={50}`},2:{id:2,title:`Короткий текст`,subtitle:`settlingHeight={50}`},3:{id:3,title:`Длинный текст`,subtitle:`dynamicContentHeight`},4:{id:4,title:`Короткий текст`,subtitle:`dynamicContentHeight`}},B=[1,2,3,4],V={parameters:{centered:!1},render:function(){let[e,t]=F.useState(!1),n=e?(0,I.jsx)(h,{children:`Header`}):null,[r,i]=F.useState(null),a=e=>{let{id:t}=e.currentTarget.dataset;t&&i(t)},o=e=>(0,I.jsx)(y,{chevron:`always`,"data-id":z[e].id,before:z[e].id,subtitle:z[e].subtitle,onClick:a,disabled:r===String(e),children:z[e].title},e),c=()=>(0,I.jsx)(l,{margin:`auto`,gap:8,justify:`space-between`,children:B.map(e=>(0,I.jsx)(s,{appearance:`neutral`,"data-id":z[e].id,onClick:a,disabled:r===String(e),children:z[e].id},e))});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(T,{name:`header`,onChange:e=>t(e.target.checked),children:`Включить шапку`}),B.map(o),(0,I.jsxs)(d,{activeModal:r,onClose:()=>i(null),children:[(0,I.jsxs)(m,{id:`1`,settlingHeight:50,header:n,children:[c(),(0,I.jsx)(D,{children:M(`Lorem ipsum`,400)})]}),(0,I.jsxs)(m,{id:`2`,settlingHeight:50,header:n,children:[c(),(0,I.jsx)(D,{children:M(`Lorem ipsum`,5)})]}),(0,I.jsxs)(m,{id:`3`,dynamicContentHeight:!0,header:n,children:[c(),(0,I.jsx)(D,{children:M(`Lorem ipsum`,400)})]}),(0,I.jsxs)(m,{id:`4`,dynamicContentHeight:!0,header:n,children:[c(),(0,I.jsx)(D,{children:M(`Lorem ipsum`,5)})]})]})]})}},H={render:function(){return(0,I.jsx)(P,{type:`page`,customModal:F.useCallback(function({modalProps:e}){let[t,n]=F.useState(!0),r=F.useRef(void 0);return F.useEffect(()=>(r.current=setTimeout(()=>{n(!1)},2e3),()=>{clearTimeout(r.current)}),[]),(0,I.jsx)(m,{dynamicContentHeight:!0,...e,children:(0,I.jsxs)(`div`,{className:`SelectModal`,children:[t&&(0,I.jsx)(a,{}),!t&&(0,I.jsx)(x,{children:`Loaded`})]})})},[])})}},U={render:function(){let[e,t]=F.useState(R),n=F.useRef(null),r=F.useCallback(e=>{e===R&&n.current&&n.current.focus()},[]),i=(0,I.jsx)(d,{activeModal:e,onClose:F.useCallback(()=>{t(null)},[]),onOpened:r,children:(0,I.jsx)(m,{id:R,children:(0,I.jsx)(_,{children:(0,I.jsx)(C,{getRef:n})})})});return(0,I.jsxs)(x,{stretched:!0,children:[(0,I.jsx)(s,{onClick:()=>t(R),children:`Открыть`}),i]})}},W={render:function(){let e=F.useRef(null),t=F.useCallback(()=>{e.current&&e.current.focus()},[]);return(0,I.jsx)(P,{type:`page`,customModal:F.useCallback(({modalProps:n})=>(0,I.jsx)(m,{onOpened:t,...n,children:(0,I.jsx)(_,{children:(0,I.jsx)(C,{getRef:e})})}),[t])})}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Managing`,`ModalDynamicHeight`,`ModalRootAutoFocus`,`ModalPageAutoFocus`]}))();export{V as Managing,H as ModalDynamicHeight,W as ModalPageAutoFocus,U as ModalRootAutoFocus,G as __namedExportsOrder,L as default};