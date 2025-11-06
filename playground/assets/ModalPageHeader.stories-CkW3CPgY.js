import{b as s,c as d,j as r,r as m}from"./iframe-CdM-7Hfu.js";import{M as l}from"./ModalWrapper-B4UxlRzZ.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-CoWZxFc9.js";import{a as p,M as g}from"./ModalPageHeader-0z51u8Ac.js";import{M as x}from"./ModalOutlet-BZ5LHW7K.js";import{P as M}from"./PanelHeaderButton-D_OLy9yd.js";import{I as h}from"./done_24-DQgZiat1.js";import{I as D}from"./cancel_24-CxY6nUNi.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Wq0du0BJ.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CsDvRUz2.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DydpD7lG.js";import"./Tappable-DK6ahodC.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-B55EaeOQ.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BMsEEBIJ.js";import"./ModalRoot-C2AZovRZ.js";import"./AppRootPortal-CwmZylQ9.js";import"./useColorScheme-Bgl1tdyG.js";import"./createPortal-DwlYohy5.js";import"./ColorSchemeProvider-BOMlpu1V.js";import"./ConfigProviderOverride-BX__wZpg.js";import"./Placeholder-BRzo_dRO.js";import"./Headline-CJlcsWlt.js";import"./Title-CJmHdlPE.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DzjKYfSn.js";import"./FocusTrap-D-qlby6a.js";import"./useFocusTrap-Ba3RToQi.js";import"./useMutationObserver-CoczCU8j.js";import"./ModalOutsideButton-d-BeF6vR.js";import"./ModalOutsideButtons-IVdw_HEL.js";import"./Flex-gSHu7oDr.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-BJVz8Z08.js";import"./cancel_20-TQSW85LI.js";import"./SvgIconRootV2-uNBcUV_S.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-By88cOTH.js";import"./rubberbandIfOutOfBounds-BFfi2rS_.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
