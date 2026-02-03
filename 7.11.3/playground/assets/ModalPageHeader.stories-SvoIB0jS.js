import{b as s,c as d,j as r,r as m}from"./iframe-C4ttrVUJ.js";import{M as l}from"./ModalWrapper-DdHWLeDG.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-Bv2x7FHc.js";import{a as p,M as g}from"./ModalPageHeader-BDqqlcG3.js";import{M as x}from"./ModalOutlet-Duw1jV0c.js";import{P as M}from"./PanelHeaderButton-BFxm6HjQ.js";import{I as h}from"./done_24-Da-SFvsY.js";import{I as D}from"./cancel_24-DD0i1EtC.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BdBXuQJY.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CeIULbGb.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-XgvirjGY.js";import"./Tappable-CL0fK4DO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B80alsah.js";import"./useState-DqLBjAbD.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./InputUtils-CD1Rp_t7.js";import"./ModalRoot-ZW5uO94g.js";import"./AppRootPortal-DfuF7Oqt.js";import"./useColorScheme-CRY_65bE.js";import"./createPortal-BzUu3Hjp.js";import"./ColorSchemeProvider-DP16CCB3.js";import"./ConfigProviderOverride-BQtFiUwD.js";import"./Placeholder-BGTn6SOw.js";import"./Headline-B3vZWFvi.js";import"./Title-DTItDJJC.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BgzpJkYx.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-fpJxHih1.js";import"./useFocusTrap-DST2pyLb.js";import"./useMutationObserver-Ds6OyfWj.js";import"./ModalOutsideButton-BlUkfY7t.js";import"./ModalOutsideButtons-BdUoLuwQ.js";import"./Flex-DGfzNkAG.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-B97yUFEZ.js";import"./cancel_20-D6DCplcb.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-DiFoEoJA.js";import"./rubberbandIfOutOfBounds-D1CQ7ad4.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
