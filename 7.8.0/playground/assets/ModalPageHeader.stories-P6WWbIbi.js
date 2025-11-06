import{b as s,c as d,j as r,r as m}from"./iframe-F_0bvJrc.js";import{M as l}from"./ModalWrapper-DhPJSrGR.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-DUAnEDrF.js";import{a as p,M as g}from"./ModalPageHeader-D3SH_K3q.js";import{M as x}from"./ModalOutlet-DYssRveL.js";import{P as M}from"./PanelHeaderButton-CH8QzJHV.js";import{I as h}from"./done_24-Co3kw9nC.js";import{I as D}from"./cancel_24-CEwNt985.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-OQORbYpv.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-D7kEFt-1.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CRrL_L2y.js";import"./Tappable-DJ3rCQkY.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B4aTO_qb.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CneTbOko.js";import"./ModalRoot-CnxS-Ll8.js";import"./AppRootPortal-C5ZjlUn-.js";import"./useColorScheme-CMuS3Rce.js";import"./createPortal-3kBuG0xS.js";import"./ColorSchemeProvider-CBhvh-QL.js";import"./ConfigProviderOverride-DP-FN5VZ.js";import"./Placeholder-DnYwtbnt.js";import"./Headline-B-xJiW6B.js";import"./Title-BNzhyC_D.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-Dagdftr6.js";import"./FocusTrap-CatbEh5x.js";import"./useFocusTrap-D3fDlwS6.js";import"./useMutationObserver-BmpmDaTi.js";import"./ModalOutsideButton-BLPa73gQ.js";import"./ModalOutsideButtons-DhFAq4e5.js";import"./Flex-CMHCgCfM.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DEuKtSsw.js";import"./cancel_20-DmJt3fLl.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition--rZWB9Dm.js";import"./rubberbandIfOutOfBounds-t6iKEh6d.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
