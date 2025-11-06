import{b as c,c as u,j as r,r as m}from"./iframe-7s0T-F6L.js";import{M as f}from"./ModalWrapper-DzEU0hIy.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-BcYvEc7s.js";import{a as l,M as h}from"./ModalPageHeader-DGLQ2fgU.js";import{M as D}from"./ModalOutlet-D00XmN78.js";import{P as j}from"./PanelHeaderButton-DnGYfCID.js";import{I as P}from"./done_24-DMI2PNwe.js";import{I}from"./cancel_24-CXDD7VnX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DBxYkQfv.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DyPdKfog.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CNF1CStS.js";import"./Tappable-BPO49mNS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-LGVh7luH.js";import"./useFocusVisible-BTUcwPxj.js";import"./useFocusVisibleClassName-CMVp5o9Y.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CP-PNx6u.js";import"./ModalRoot-C47I3DjW.js";import"./AppRootPortal-8JJCRvIt.js";import"./useColorScheme-BL2QEz1W.js";import"./createPortal-BLAX00_m.js";import"./ColorSchemeProvider-ftW5T2o8.js";import"./ConfigProviderOverride-CXr_UxnZ.js";import"./Placeholder-DR-B7Mof.js";import"./Headline-CfLwurX4.js";import"./Title-C8ooGZRF.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-C9RFncFj.js";import"./FocusTrap-tuo3qFhz.js";import"./useFocusTrap-Bvlj6nMe.js";import"./useMutationObserver-DXsv7L38.js";import"./ModalOutsideButton-Bxtc2k3B.js";import"./ModalOutsideButtons-B_IrejJ0.js";import"./Flex-D18wWhg9.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DyDN-q5E.js";import"./cancel_20-CC8GAHyk.js";import"./SvgIconRootV2-Wzzl8e4S.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-BSkGBxHV.js";import"./rubberbandIfOutOfBounds-BZmB6XI-.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Dr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const jr=["Playground"];export{e as Playground,jr as __namedExportsOrder,Dr as default};
