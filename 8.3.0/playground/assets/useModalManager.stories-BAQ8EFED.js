import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{a as i,kn as a,n as o}from"./dist-Ddx9HyIL.js";import{n as s,t as c}from"./usePlatform-DKDXXKPf.js";import{i as l,t as u}from"./useAdaptivityConditionalRender-B_EhHduD.js";import{n as d,t as f}from"./Button-auAyay5E.js";import{n as p,t as m}from"./PanelHeaderButton-BkNlcyKI.js";import{n as h,t as g}from"./Flex-DSlxdUpE.js";import{n as _,t as v}from"./useModalManager-BZ47c6UK.js";import{i as y,n as b,r as x,t as S}from"./ModalPageHeader-DdqeS3eO.js";import{n as C,t as w}from"./ModalCard-uwxF4n7r.js";import{n as T,t as E}from"./ButtonGroup-CSehLa1b.js";import{n as D,t as O}from"./Group-LwNPJiLD.js";import{n as k,t as A}from"./CellButton-BG1bO8HB.js";import{n as j,t as M}from"./FormItem-BBILDAKY.js";import{n as N,t as P}from"./Input-COdKLu4z.js";import{n as F,t as I}from"./Checkbox-D0vBZy5R.js";import{n as L,t as R}from"./PanelHeaderClose-MX39sF80.js";import{i as z,n as B,t as V}from"./constants-cjed6ZWB.js";function H({close:e,update:t,openNextModal:n,modalProps:r,modalNumber:a}){return(0,G.jsx)(w,{icon:(0,G.jsx)(i,{}),title:`#${a} Modal Card Title`,actions:(0,G.jsxs)(E,{stretched:!0,mode:`vertical`,children:[(0,G.jsx)(f,{size:`l`,mode:`primary`,stretched:!0,onClick:()=>n(`page`),children:`Открыть ModalPage`}),(0,G.jsx)(f,{size:`l`,mode:`primary`,stretched:!0,onClick:()=>n(`card`),children:`Открыть ModalCard`}),(0,G.jsx)(f,{size:`l`,mode:`secondary`,stretched:!0,onClick:()=>e(),children:`Закрыть`})]}),...r,children:(0,G.jsx)(M,{top:`Заголовок модалки`,children:(0,G.jsx)(P,{defaultValue:`#${a} Modal Card Title`,onChange:e=>t({title:e.target.value})})})})}function U({openNextModal:e,close:t,modalProps:n,modalNumber:r}){let i=s(),{viewWidth:o}=l();return(0,G.jsx)(x,{header:(0,G.jsxs)(S,{before:o.smallTabletMinus&&i===`android`&&(0,G.jsx)(R,{className:o.smallTabletMinus.className,onClick:()=>t()}),after:o.smallTabletMinus&&i===`ios`&&(0,G.jsx)(m,{onClick:()=>t(),className:o.smallTabletMinus.className,children:(0,G.jsx)(a,{})}),children:[`#`,r,` Dynamic modal`]}),...n,children:(0,G.jsxs)(O,{children:[(0,G.jsx)(A,{onClick:()=>e(`page`),children:`Open ModalPage`}),(0,G.jsx)(A,{onClick:()=>e(`card`),children:`Open ModalCard`})]})})}var W,G,K,q,J;e((()=>{W=t(n(),1),o(),d(),T(),k(),F(),h(),j(),D(),N(),C(),y(),b(),p(),L(),z(),u(),c(),v(),G=t(r(),1),K={title:`Utils/useModalManager`,component:()=>(0,G.jsx)(`div`,{}),parameters:{...V,...B,liveCodeEditor:{scope:{ModalCardComponent:H,ModalPageComponent:U}}}},q=e=>{let[t,n]=_(e),r=(0,W.useRef)(0),i=e=>{r.current+=1;let n=r.current;e===`card`?t.openCustomModalCard({component:H,additionalProps:{openNextModal:i,modalNumber:n}}):t.openCustomModalPage({component:U,additionalProps:{openNextModal:i,modalNumber:n}})};return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(g,{direction:`column`,gap:`m`,children:[(0,G.jsx)(I,{defaultChecked:!0,onChange:e=>t.setSaveHistory(e.target.checked),children:`Сохранять историю открытия`}),(0,G.jsx)(f,{appearance:`overlay`,onClick:()=>i(`page`),children:`Открыть ModalPage`}),(0,G.jsx)(f,{appearance:`overlay`,onClick:()=>i(`card`),children:`Открыть ModalCard`})]}),n]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`(props: UseModalManagerProps) => {
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
}`,...q.parameters?.docs?.source}}},J=[`Playground`]}))();export{q as Playground,J as __namedExportsOrder,K as default};