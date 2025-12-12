import{b as s,c as d,j as r,r as m}from"./iframe-Db0SwwYs.js";import{M as l}from"./ModalWrapper-CG8wLn6C.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-L8zPO7Z0.js";import{a as p,M as g}from"./ModalPageHeader-B-UaXxcn.js";import{M as x}from"./ModalOutlet-hAzO2hJX.js";import{P as M}from"./PanelHeaderButton-OvzbCTKU.js";import{I as h}from"./done_24-Cy8roEq3.js";import{I as D}from"./cancel_24-D88fKsYf.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DKPWjiCT.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Dy7IzRwA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CZDmCAU7.js";import"./Tappable-DPDNr6uV.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-QJYjPwzV.js";import"./useState-_pDIeHd1.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./InputUtils-DU65P5CC.js";import"./ModalRoot-CyqZm2TC.js";import"./AppRootPortal-D20gzpUj.js";import"./useColorScheme-BTSYlb-o.js";import"./createPortal-BhjAg26d.js";import"./ColorSchemeProvider-DZTdfkVT.js";import"./ConfigProviderOverride-CKegTf3s.js";import"./Placeholder-DkKPRbZj.js";import"./Headline-BS3jMLtX.js";import"./Title-DrCXdOfJ.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-O7L1hfju.js";import"./FocusTrap-CJOJYnOF.js";import"./useFocusTrap-BD2Piuw5.js";import"./useMutationObserver-B_vgSH7b.js";import"./ModalOutsideButton-RnVoLh2f.js";import"./ModalOutsideButtons-XxhEw-8j.js";import"./Flex-BZ7a6E8J.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-Z0P7fIf-.js";import"./cancel_20-DGSQsFaz.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-DvW4TL5C.js";import"./rubberbandIfOutOfBounds-BE5g2Nsp.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
