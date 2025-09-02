import{b as c,c as u,j as r,r as m}from"./iframe-WscSQxk_.js";import{M as f}from"./ModalWrapper-9X_eLcGI.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-CNEoUZ-D.js";import{a as l,M as h}from"./ModalPageHeader-Bf1MbShh.js";import{M as D}from"./ModalOutlet-Dl6dgGrS.js";import{P as j}from"./PanelHeaderButton-Bcby9WCn.js";import{I as P}from"./done_24-CIHlLbnE.js";import{I}from"./cancel_24-DRq5Gwy2.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C7Wah6LB.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BOd2c3oA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-uW7N7P-s.js";import"./Tappable-4pvQI-9h.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7ilqGtf.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-JLBJXs47.js";import"./ModalRoot-CW-E6koS.js";import"./AppRootPortal-99J6OfwT.js";import"./useColorScheme-C09gZSyP.js";import"./createPortal-Dh4UeMek.js";import"./ColorSchemeProvider-BohugYos.js";import"./ConfigProviderOverride-CE2xRMO6.js";import"./Placeholder-BaszybZR.js";import"./Headline-Cv7evErM.js";import"./Title-C_Gav_p7.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-CMDI24UO.js";import"./FocusTrap-DP1KUwEU.js";import"./useFocusTrap-aPtkck9v.js";import"./useMutationObserver-3DDsDNI6.js";import"./ModalOutsideButton-CKQsRC6H.js";import"./ModalOutsideButtons-BJertjnB.js";import"./Flex-ZgxgCOQt.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-xnVnJFD2.js";import"./cancel_20-BlpVebiS.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-BS6jtW1c.js";import"./rubberbandIfOutOfBounds-CpUvlc2N.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const hr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const Dr=["Playground"];export{e as Playground,Dr as __namedExportsOrder,hr as default};
