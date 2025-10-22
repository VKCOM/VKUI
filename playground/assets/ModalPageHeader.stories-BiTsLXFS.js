import{b as s,c as d,j as r,r as m}from"./iframe-DvQ0hW0I.js";import{M as l}from"./ModalWrapper-CVlusZMH.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-C63Bwut4.js";import{a as p,M as g}from"./ModalPageHeader-CDNt-Crk.js";import{M as x}from"./ModalOutlet-DdKPr4oc.js";import{P as M}from"./PanelHeaderButton-oRj9KwEP.js";import{I as h}from"./done_24-CYDuq9NP.js";import{I as D}from"./cancel_24-BcD8qa0A.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DPGaTllJ.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CAlwHhMu.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CGlAvVNH.js";import"./Tappable-CzBKs2NQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBovrC6X.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BSmatczf.js";import"./ModalRoot-Bnxzj8W9.js";import"./AppRootPortal-CoRG5RWu.js";import"./useColorScheme-Du5ZuGtY.js";import"./createPortal-BtQKhO30.js";import"./ColorSchemeProvider-DIg3ehzA.js";import"./ConfigProviderOverride-5F9Q0adn.js";import"./Placeholder-C9nbJ69h.js";import"./Headline-U_eDzwn1.js";import"./Title-CHQ24GsB.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DXRZk8vd.js";import"./FocusTrap-CDqAhor2.js";import"./useFocusTrap-DkPh3l3Y.js";import"./useMutationObserver-6Z5Jiq8c.js";import"./ModalOutsideButton-C8f7eI4e.js";import"./ModalOutsideButtons-CF5W29AV.js";import"./Flex-DXQwn8F9.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DE6eWhG6.js";import"./cancel_20-CcZoCD-L.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-BNI6Ki3q.js";import"./rubberbandIfOutOfBounds-Br5UTCiY.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
