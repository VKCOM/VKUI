import{b as s,c as d,j as r,r as m}from"./iframe-DIYy3-CH.js";import{M as l}from"./ModalWrapper-CUYer3HT.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-C1bBnRX_.js";import{a as p,M as g}from"./ModalPageHeader-CI6--_A6.js";import{M as x}from"./ModalOutlet-1I7-9CXM.js";import{P as M}from"./PanelHeaderButton-B0heqfNd.js";import{I as h}from"./done_24-DUbenC1y.js";import{I as D}from"./cancel_24-BLCbiPJn.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-D7qQMSR2.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-D5ck6QgF.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B6N7VZPM.js";import"./Tappable-sYAEqFlc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BAIHKsz8.js";import"./useState-p4Iaaoae.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DBCai8uF.js";import"./InputUtils-MuCAFNzU.js";import"./ModalRoot-DIoeFMzR.js";import"./AppRootPortal-B6-nwskM.js";import"./useColorScheme-BPR6ME_0.js";import"./createPortal-w5gOwCV_.js";import"./ColorSchemeProvider-Ncvd_GBc.js";import"./ConfigProviderOverride-C79xSzNm.js";import"./Placeholder-V3zPWSw4.js";import"./Headline-BoZGv-xv.js";import"./Title-DDAtng5G.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DH6mhxFX.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-Da2C75l5.js";import"./useFocusTrap-CtitvsGk.js";import"./useMutationObserver-CRE9L4FZ.js";import"./ModalOutsideButton-C7wYs0O_.js";import"./ModalOutsideButtons-FPFG7wze.js";import"./Flex-psNoiTws.js";import"./gaps-Yg_CjNhz.js";import"./CustomScrollView-G7yuAOqH.js";import"./cancel_20-B_G_0Nq3.js";import"./SvgIconRootV2-DBT-DabK.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-DXiZdCxD.js";import"./rubberbandIfOutOfBounds-BHFaFVN_.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
