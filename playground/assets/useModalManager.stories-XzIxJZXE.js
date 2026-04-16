import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{gt as i,i as a,n as o}from"./dist-JE-Gteso.js";import{n as s,t as c}from"./usePlatform-BWVnZ007.js";import{r as l,t as u}from"./useAdaptivityConditionalRender-C3SayIbs.js";import{n as d,t as f}from"./Button-DkR7tdUq.js";import{n as p,t as m}from"./PanelHeaderButton-ChodUF2W.js";import{n as h,t as g}from"./Flex-d_Ls15u9.js";import{n as _,t as v}from"./useModalManager-B28xLfbI.js";import{i as y,n as b,r as x,t as S}from"./ModalPageHeader-BuHyR3Tw.js";import{n as C,t as w}from"./ModalCard-BgVwrEC2.js";import{n as T,t as E}from"./ButtonGroup-Dlc4fR-P.js";import{n as D,t as O}from"./Group-BsDFq5nd.js";import{n as k,t as A}from"./CellButton-BjjWRjel.js";import{n as j,t as M}from"./FormItem-CAXqiOMO.js";import{n as N,t as P}from"./Input-D0DJqmeY.js";import{n as F,t as I}from"./Checkbox-DgWBPv9j.js";import{n as L,t as R}from"./PanelHeaderClose-CKa_Gp4s.js";import{i as z,n as B,t as V}from"./constants-Dj6vOzIh.js";var H,U,W,G,K,q,J;t((()=>{H=e(n(),1),o(),d(),T(),k(),F(),h(),j(),D(),N(),C(),y(),b(),p(),L(),z(),u(),c(),v(),U=r(),W={title:`Utils/useModalManager`,component:()=>(0,U.jsx)(`div`,{}),parameters:{...V,...B}},G=({close:e,update:t,openNextModal:n,modalProps:r,modalNumber:i})=>(0,U.jsx)(w,{icon:(0,U.jsx)(a,{}),title:`#${i} Modal Card Title`,actions:(0,U.jsxs)(E,{stretched:!0,mode:`vertical`,children:[(0,U.jsx)(f,{size:`l`,mode:`primary`,stretched:!0,onClick:()=>n(`page`),children:`Открыть ModalPage`}),(0,U.jsx)(f,{size:`l`,mode:`primary`,stretched:!0,onClick:()=>n(`card`),children:`Открыть ModalCard`}),(0,U.jsx)(f,{size:`l`,mode:`secondary`,stretched:!0,onClick:()=>e(),children:`Закрыть`})]}),...r,children:(0,U.jsx)(M,{top:`Заголовок модалки`,children:(0,U.jsx)(P,{defaultValue:`#${i} Modal Card Title`,onChange:e=>t({title:e.target.value})})})}),K=({openNextModal:e,close:t,modalProps:n,modalNumber:r})=>{let a=s(),{viewWidth:o}=l();return(0,U.jsx)(x,{header:(0,U.jsxs)(S,{before:o.smallTabletMinus&&a===`android`&&(0,U.jsx)(R,{className:o.smallTabletMinus.className,onClick:()=>t()}),after:o.smallTabletMinus&&a===`ios`&&(0,U.jsx)(m,{onClick:()=>t(),className:o.smallTabletMinus.className,children:(0,U.jsx)(i,{})}),children:[`#`,r,` Dynamic modal`]}),...n,children:(0,U.jsxs)(O,{children:[(0,U.jsx)(A,{onClick:()=>e(`page`),children:`Open ModalPage`}),(0,U.jsx)(A,{onClick:()=>e(`card`),children:`Open ModalCard`})]})})},q={render:function(e){let[t,n]=_(e),r=(0,H.useRef)(0),i=e=>{r.current+=1;let n=r.current;e===`card`?t.openCustomModalCard({component:G,additionalProps:{openNextModal:i,modalNumber:n}}):t.openCustomModalPage({component:K,additionalProps:{openNextModal:i,modalNumber:n}})};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(g,{direction:`column`,gap:`m`,children:[(0,U.jsx)(I,{defaultChecked:!0,onChange:e=>t.setSaveHistory(e.target.checked),children:`Сохранять историю открытия`}),(0,U.jsx)(f,{appearance:`overlay`,onClick:()=>i(`page`),children:`Открыть ModalPage`}),(0,U.jsx)(f,{appearance:`overlay`,onClick:()=>i(`card`),children:`Открыть ModalCard`})]}),n]})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
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
  }
}`,...q.parameters?.docs?.source}}},J=[`Playground`]}))();export{q as Playground,J as __namedExportsOrder,W as default};