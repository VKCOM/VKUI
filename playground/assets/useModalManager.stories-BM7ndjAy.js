import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,kn as i,n as a}from"./dist-BrTYZxJF.js";import{n as o,t as s}from"./usePlatform-BcYLlEra.js";import{n as c,r as l}from"./useAdaptivityConditionalRender-DGsT9rWF.js";import{n as u,t as d}from"./Button-DT035ZIy.js";import{n as f,t as p}from"./PanelHeaderButton-Cxnq2Ckm.js";import{n as m,t as h}from"./Flex-BFq13joc.js";import{n as g,t as _}from"./useModalManager-Dzqps9FE.js";import{i as v,n as y,r as b,t as x}from"./ModalPageHeader-s7afqWDA.js";import{n as S,t as C}from"./ModalCard-CwjewuLx.js";import{n as w,t as T}from"./ButtonGroup-QQHhiMTW.js";import{n as E,t as D}from"./Group-Bp-h8t_O.js";import{n as O,t as k}from"./CellButton-5wPnY1kh.js";import{n as A,t as j}from"./FormItem-B7byku12.js";import{n as M,t as N}from"./Input-BD5Vf9yq.js";import{n as P,t as F}from"./Checkbox-C_3Fx58h.js";import{n as I,t as L}from"./PanelHeaderClose-inADwkkz.js";import{i as R,n as z,t as B}from"./constants-DBkyy3CT.js";function V({close:e,update:t,openNextModal:n,modalProps:i,modalNumber:a}){return(0,W.jsx)(C,{icon:(0,W.jsx)(r,{}),title:`#${a} Modal Card Title`,actions:(0,W.jsxs)(T,{stretched:!0,mode:`vertical`,children:[(0,W.jsx)(d,{size:`l`,mode:`primary`,stretched:!0,onClick:()=>n(`page`),children:`Открыть ModalPage`}),(0,W.jsx)(d,{size:`l`,mode:`primary`,stretched:!0,onClick:()=>n(`card`),children:`Открыть ModalCard`}),(0,W.jsx)(d,{size:`l`,mode:`secondary`,stretched:!0,onClick:()=>e(),children:`Закрыть`})]}),...i,children:(0,W.jsx)(j,{top:`Заголовок модалки`,children:(0,W.jsx)(N,{defaultValue:`#${a} Modal Card Title`,onChange:e=>t({title:e.target.value})})})})}function H({openNextModal:e,close:t,modalProps:n,modalNumber:r}){let a=o(),{viewWidth:s}=l();return(0,W.jsx)(b,{header:(0,W.jsxs)(x,{before:s.smallTabletMinus&&a===`android`&&(0,W.jsx)(L,{className:s.smallTabletMinus.className,onClick:()=>t()}),after:s.smallTabletMinus&&a===`ios`&&(0,W.jsx)(p,{onClick:()=>t(),className:s.smallTabletMinus.className,children:(0,W.jsx)(i,{})}),children:[`#`,r,` Dynamic modal`]}),...n,children:(0,W.jsxs)(D,{children:[(0,W.jsx)(k,{onClick:()=>e(`page`),children:`Open ModalPage`}),(0,W.jsx)(k,{onClick:()=>e(`card`),children:`Open ModalCard`})]})})}var U,W,G,K,q;function J(){return(J=e((()=>{U=t(),a(),u(),w(),O(),P(),m(),A(),E(),M(),S(),v(),y(),f(),I(),R(),c(),s(),_(),W=n(),G={title:`Utils/useModalManager`,component:()=>(0,W.jsx)(`div`,{}),parameters:{...B,...z,liveCodeEditor:{scope:{ModalCardComponent:V,ModalPageComponent:H}}}},K=e=>{let[t,n]=g(e),r=(0,U.useRef)(0),i=e=>{r.current+=1;let n=r.current;e===`card`?t.openCustomModalCard({component:V,additionalProps:{openNextModal:i,modalNumber:n}}):t.openCustomModalPage({component:H,additionalProps:{openNextModal:i,modalNumber:n}})};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(h,{direction:`column`,gap:`m`,children:[(0,W.jsx)(F,{defaultChecked:!0,onChange:e=>t.setSaveHistory(e.target.checked),children:`Сохранять историю открытия`}),(0,W.jsx)(d,{appearance:`overlay`,onClick:()=>i(`page`),children:`Открыть ModalPage`}),(0,W.jsx)(d,{appearance:`overlay`,onClick:()=>i(`card`),children:`Открыть ModalCard`})]}),n]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`(props: UseModalManagerProps) => {
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
}`,...K.parameters?.docs?.source}}},q=[`Playground`]})))()}J();export{K as Playground,q as __namedExportsOrder,G as default};