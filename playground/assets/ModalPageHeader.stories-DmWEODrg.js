import{b as s,c as d,j as r,r as m}from"./iframe-DJZLDe2v.js";import{M as l}from"./ModalWrapper-BjzkLu90.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-CenMSbRC.js";import{a as p,M as g}from"./ModalPageHeader-DaPGMP4x.js";import{M as x}from"./ModalOutlet-DGc4HB1-.js";import{P as M}from"./PanelHeaderButton-BDWPwHoq.js";import{I as h}from"./done_24-7zK9vBAI.js";import{I as D}from"./cancel_24-rN7d2YWh.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-owOpbUxM.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BnPfDhY3.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-D0jMNSCO.js";import"./Tappable-CY0nsltg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DJi6sM1Y.js";import"./useFocusVisible-B_h8gO-N.js";import"./useFocusVisibleClassName-CRC2ipiX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CYWMeBJ6.js";import"./ModalRoot-B73qVCu2.js";import"./AppRootPortal-CbG6gCHO.js";import"./useColorScheme-DOPlqjNA.js";import"./createPortal-D4c259Iv.js";import"./ColorSchemeProvider-DhQPwwFm.js";import"./ConfigProviderOverride-CI0r-TE-.js";import"./Placeholder-MxSgMgTg.js";import"./Headline-BcxcoLKm.js";import"./Title-a8EH9Ft1.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-xWu2I99c.js";import"./FocusTrap-CvsHEOgG.js";import"./useFocusTrap-BL1ox75A.js";import"./useMutationObserver-BeUwhe_m.js";import"./ModalOutsideButton-DkjvXBQS.js";import"./ModalOutsideButtons-BljjRJ8I.js";import"./Flex-CGXR-CME.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-D8SujhxZ.js";import"./cancel_20-BBWh6i4-.js";import"./SvgIconRootV2-DyTPJ3EC.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-Kp3uwLOw.js";import"./rubberbandIfOutOfBounds-CVhJL6uY.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const Mr=["Playground"];export{t as Playground,Mr as __namedExportsOrder,xr as default};
