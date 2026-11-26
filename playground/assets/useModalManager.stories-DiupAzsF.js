import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,jn as i,n as a}from"./dist-ffVrjb4g.js";import{n as o,t as s}from"./usePlatform-y1UWuT6C.js";import{n as c,r as l}from"./useAdaptivityConditionalRender-BnyqUEnJ.js";import{i as u,n as d,t as f}from"./constants-BWBR8eWE.js";import{n as p,t as m}from"./Group-BYaqcOTu.js";import{n as h,t as g}from"./Button-UIWLqw4_.js";import{n as _,t as v}from"./ButtonGroup-BLQqI9iP.js";import{n as y,t as b}from"./Flex-C-g3JHZP.js";import{n as x,t as S}from"./Input-C0QwfGXJ.js";import{n as C,t as w}from"./CellButton-BiLy7l3x.js";import{n as T,t as E}from"./Checkbox-B7P4xqM-.js";import{n as D,t as O}from"./FormItem--X1L6eoH.js";import{n as k,t as A}from"./PanelHeaderButton-CZzfWHSf.js";import{n as j,t as M}from"./ModalCard-dR-MJYww.js";import{c as N,n as P,s as F,t as I}from"./ModalPage-BVlZnWFW.js";import{n as L,t as R}from"./PanelHeaderClose-eh4vTRc3.js";import{n as z,t as B}from"./useModalManager-BWf7koaY.js";function V({close:e,update:t,openNextModal:n,modalProps:i,modalNumber:a}){return(0,W.jsx)(M,{icon:(0,W.jsx)(r,{}),title:`#${a} Modal Card Title`,actions:(0,W.jsxs)(v,{stretched:!0,mode:`vertical`,children:[(0,W.jsx)(g,{size:`l`,mode:`primary`,stretched:!0,onClick:()=>n(`page`),children:`Открыть ModalPage`}),(0,W.jsx)(g,{size:`l`,mode:`primary`,stretched:!0,onClick:()=>n(`card`),children:`Открыть ModalCard`}),(0,W.jsx)(g,{size:`l`,mode:`secondary`,stretched:!0,onClick:()=>e(),children:`Закрыть`})]}),...i,children:(0,W.jsx)(O,{top:`Заголовок модалки`,children:(0,W.jsx)(S,{defaultValue:`#${a} Modal Card Title`,onChange:e=>t({title:e.target.value})})})})}function H({openNextModal:e,close:t,modalProps:n,modalNumber:r}){let a=o(),{viewWidth:s}=l();return(0,W.jsx)(I,{header:(0,W.jsxs)(F,{before:s.smallTabletMinus&&a===`android`&&(0,W.jsx)(R,{className:s.smallTabletMinus.className,onClick:()=>t()}),after:s.smallTabletMinus&&a===`ios`&&(0,W.jsx)(A,{onClick:()=>t(),className:s.smallTabletMinus.className,children:(0,W.jsx)(i,{})}),children:[`#`,r,` Dynamic modal`]}),...n,children:(0,W.jsxs)(m,{children:[(0,W.jsx)(w,{onClick:()=>e(`page`),children:`Open ModalPage`}),(0,W.jsx)(w,{onClick:()=>e(`card`),children:`Open ModalCard`})]})})}var U,W,G,K,q;function J(){return(J=e((()=>{U=t(),a(),h(),_(),C(),T(),y(),D(),p(),x(),j(),P(),N(),k(),L(),u(),c(),s(),B(),W=n(),G={title:`Utils/useModalManager`,component:()=>(0,W.jsx)(`div`,{}),parameters:{...f,...d,liveCodeEditor:{scope:{ModalCardComponent:V,ModalPageComponent:H}}}},K=e=>{let[t,n]=z(e),r=(0,U.useRef)(0),i=e=>{r.current+=1;let n=r.current;e===`card`?t.openCustomModalCard({component:V,additionalProps:{openNextModal:i,modalNumber:n}}):t.openCustomModalPage({component:H,additionalProps:{openNextModal:i,modalNumber:n}})};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(b,{direction:`column`,gap:`m`,children:[(0,W.jsx)(E,{defaultChecked:!0,onChange:e=>t.setSaveHistory(e.target.checked),children:`Сохранять историю открытия`}),(0,W.jsx)(g,{appearance:`overlay`,onClick:()=>i(`page`),children:`Открыть ModalPage`}),(0,W.jsx)(g,{appearance:`overlay`,onClick:()=>i(`card`),children:`Открыть ModalCard`})]}),n]})},q=[`Playground`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`(props: UseModalManagerProps) => {
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
}`,...K.parameters?.docs?.source}}}})))()}J();export{K as Playground,q as __namedExportsOrder,G as default};