import{b as s,c as d,j as r,r as m}from"./iframe-DxxZLxeI.js";import{M as l}from"./ModalWrapper-DWPqhOYv.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-Cmsoo6vK.js";import{a as p,M as g}from"./ModalPageHeader-BPfhXn-m.js";import{M as x}from"./ModalOutlet-D5n9OoTu.js";import{P as M}from"./PanelHeaderButton-8H70UPSW.js";import{I as h}from"./done_24-CPLWvNX3.js";import{I as D}from"./cancel_24-BuXDWULC.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BpqQfiA7.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BmfPEekg.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DujZCwJ6.js";import"./Tappable-C82LyDNp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-iBjUcv74.js";import"./useState-CSsh5GFH.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./InputUtils-CuOtTanw.js";import"./ModalRoot-xSejcHxL.js";import"./AppRootPortal-BC3JV3T9.js";import"./useColorScheme-CToT-7qP.js";import"./createPortal-DlraoZsb.js";import"./ColorSchemeProvider-DtExgQxR.js";import"./ConfigProviderOverride-CeDxwPUE.js";import"./Placeholder-DYKSYtMX.js";import"./Headline-WANZoqA8.js";import"./Title-BaiQADO8.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DX7WZGU5.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-B9SWnrCQ.js";import"./useFocusTrap-CR-pyJwh.js";import"./useMutationObserver-DAoxHxKK.js";import"./ModalOutsideButton-BP6butgH.js";import"./ModalOutsideButtons-CTkcDJ2v.js";import"./Flex-DbJp6X7Q.js";import"./gaps-Yg_CjNhz.js";import"./CustomScrollView-BgNbYtGX.js";import"./cancel_20-CHo4-sJA.js";import"./SvgIconRootV2-BBTF5ye2.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-DLrWjfuN.js";import"./rubberbandIfOutOfBounds-Dp6kU9zg.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
