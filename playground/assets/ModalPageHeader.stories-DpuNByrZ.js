import{b as c,c as u,j as r,r as m}from"./iframe-CkliH7Ym.js";import{M as f}from"./ModalWrapper-BUsMOBhh.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-BB7vEP3B.js";import{a as l,M as h}from"./ModalPageHeader-BpXlau-m.js";import{M as D}from"./ModalOutlet-1Op2FPu1.js";import{P as j}from"./PanelHeaderButton-BAg_-1eR.js";import{I as P}from"./done_24-agP2iBDv.js";import{I}from"./cancel_24-DYiMxFG6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CDpcJNjy.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-UdAHfoPk.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Dn7EkmGE.js";import"./Tappable-fZc2zE5Y.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D0QQafOF.js";import"./useFocusVisibleClassName-Bnsyl2mE.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BZxXqLFf.js";import"./ModalRoot-D54YRxrF.js";import"./AppRootPortal-_qkzjwpD.js";import"./useColorScheme-D8FQD_Wa.js";import"./createPortal-DdOejS3g.js";import"./ColorSchemeProvider-B9rX6vOp.js";import"./ConfigProviderOverride-Btyq71wt.js";import"./Placeholder-BsAxz8ak.js";import"./Headline-BEImhDVB.js";import"./Title-Bna-x3U_.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DPjs0Srb.js";import"./FocusTrap-BEq0j9Ee.js";import"./useFocusTrap-BAV3lIvK.js";import"./useMutationObserver-DLhY5Avj.js";import"./ModalOutsideButton-UHRTVMYt.js";import"./ModalOutsideButtons-DPpNMbdo.js";import"./Flex-DEmoYJA-.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-BfGihvhQ.js";import"./cancel_20-DK6j5TAa.js";import"./SvgIconRootV2-DWb7sWtR.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-DhPi-CNF.js";import"./useStateWithPrev-BblT4-HP.js";import"./rubberbandIfOutOfBounds-6-yb-RxA.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Dr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
