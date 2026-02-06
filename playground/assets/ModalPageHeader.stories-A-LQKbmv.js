import{b as s,c as d,j as r,r as m}from"./iframe-ChnjXsIu.js";import{M as l}from"./ModalWrapper-iWaqYoom.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-DBaJTjah.js";import{a as p,M as g}from"./ModalPageHeader-D-Z2Jy2u.js";import{M as x}from"./ModalOutlet-CkKo0IF_.js";import{P as M}from"./PanelHeaderButton-CpIC6xPd.js";import{I as h}from"./done_24-B2InHgKK.js";import{I as D}from"./cancel_24-Du4R4GHJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-B4NYHs9P.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-D882qXq5.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-C0GQz0ke.js";import"./Tappable-BDf7UE95.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zj2UWImj.js";import"./useState-ZDhvxYGh.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-n-WG2EJN.js";import"./InputUtils-D67zZ2HF.js";import"./ModalRoot-KNawYuXh.js";import"./AppRootPortal-wSVjQS-M.js";import"./useColorScheme-BoHVEH1Y.js";import"./createPortal-psqf4yVg.js";import"./ColorSchemeProvider-DwB0ecjh.js";import"./ConfigProviderOverride-0ZAKsyIC.js";import"./Placeholder-DDNxKddy.js";import"./Headline-jnvlDnhz.js";import"./Title-ufKZcuLl.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-pvEwxSJa.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-BrlPUpeO.js";import"./useFocusTrap-C5ZGD2Mm.js";import"./useMutationObserver-BPadd9uE.js";import"./ModalOutsideButton-B7vQwnd8.js";import"./ModalOutsideButtons-D2mpmD9F.js";import"./Flex-gU10urSY.js";import"./gaps-Yg_CjNhz.js";import"./CustomScrollView-CXMjEdip.js";import"./cancel_20-mMWPNy2b.js";import"./SvgIconRootV2-DXKzfcIX.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-jlLEN1MI.js";import"./rubberbandIfOutOfBounds-DWFpIId8.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
