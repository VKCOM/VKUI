import{b as s,c as d,j as r,r as m}from"./iframe-CmkY54f5.js";import{M as l}from"./ModalWrapper-QWiC6dkK.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-CypHjQr-.js";import{a as p,M as g}from"./ModalPageHeader-DvgvGSjG.js";import{M as x}from"./ModalOutlet-Dft7b_WF.js";import{P as M}from"./PanelHeaderButton-7oIb3O2J.js";import{I as h}from"./done_24-D-beAwhP.js";import{I as D}from"./cancel_24-D5GJv2PT.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-TSeYhrGZ.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-C6TWv4c6.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Da3ud9kw.js";import"./Tappable-DW-ilhli.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./InputUtils-UNO81DKX.js";import"./ModalRoot-Bc1tMZiW.js";import"./AppRootPortal-DhIktMNn.js";import"./useColorScheme-BCWY6G93.js";import"./createPortal-CzK3IUGW.js";import"./ColorSchemeProvider-BA0ymiYZ.js";import"./ConfigProviderOverride-DzFZq6HF.js";import"./Placeholder-f5w5sw3F.js";import"./Headline-DsYeFntm.js";import"./Title-DSkwAgcq.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DAWlYeoQ.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-B80AiANX.js";import"./useFocusTrap-BoB1d5Y9.js";import"./useMutationObserver-BMEHBXHy.js";import"./ModalOutsideButton-CdGHcCVj.js";import"./ModalOutsideButtons-Dy9YV9P4.js";import"./Flex-DLqfh1Mm.js";import"./gaps-Yg_CjNhz.js";import"./CustomScrollView-BW102QqZ.js";import"./cancel_20-B9i0p-m7.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-DI4xGomN.js";import"./rubberbandIfOutOfBounds-CtO2Pyvy.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
