import{b as c,d as u,j as r,r as m}from"./iframe-D2wkiYbA.js";import{M as f}from"./ModalWrapper-Bp8a238P.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-BSw-xTjx.js";import{a as l,M as h}from"./ModalPageHeader-CVgSGhIm.js";import{M as D}from"./ModalOutlet-BKB5sVB_.js";import{P as j}from"./PanelHeaderButton-vD2nOHV6.js";import{I as P}from"./done_24-D0SbtkPz.js";import{I}from"./cancel_24-D23uiKG2.js";import"./Button-DffPUQY4.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DVe93hh_.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-ChTSElWV.js";import"./Tappable-D1Sdra8V.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BU3u--9M.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-QU0WrbnN.js";import"./ModalRoot-CI_7QRV4.js";import"./AppRootPortal-CD39ER_Q.js";import"./useColorScheme-DEY2vJy9.js";import"./createPortal-DmNeOwZo.js";import"./ColorSchemeProvider-CST3LDrj.js";import"./ConfigProviderOverride-llMEn7P1.js";import"./Placeholder-Cupx7PpQ.js";import"./Headline-kcgU3LAO.js";import"./Title-CKYO1nSQ.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BKmM81mz.js";import"./FocusTrap-Dwm8FY5s.js";import"./useFocusTrap-IoVotEbM.js";import"./useMutationObserver-Srju1l6k.js";import"./ModalOutsideButton-NNHBBqbp.js";import"./ModalOutsideButtons-DbQ2tI8z.js";import"./Flex-BhNTsmrg.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DpTAfiv1.js";import"./cancel_20-Cbxibwwr.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CJ3PYzhx.js";import"./useCSSTransition-BvIgEpY2.js";import"./useStateWithPrev-BpUU0Czk.js";import"./rubberbandIfOutOfBounds-BlST3Bj9.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(args) {
    const platform = usePlatform();
    return <ModalWrapper modalId={MODAL_ID}>
        <ModalPage id={MODAL_ID} header={<ModalPageHeader before={<React.Fragment>
                  {(platform === 'android' || platform === 'vkcom') && <HeaderButton>
                      <Icon24Cancel />
                    </HeaderButton>}
                </React.Fragment>} after={<React.Fragment>
                  {(platform === 'android' || platform === 'vkcom') && <HeaderButton>
                      <Icon24Done />
                    </HeaderButton>}
                  {platform === 'ios' && <HeaderButton>Готово</HeaderButton>}
                </React.Fragment>} {...args}>
              Заголовок модальной страницы
            </ModalPageHeader>}>
          <Div style={{
          height: 1000
        }}>Example</Div>
        </ModalPage>
      </ModalWrapper>;
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const hr=["Playground"];export{e as Playground,hr as __namedExportsOrder,Mr as default};
