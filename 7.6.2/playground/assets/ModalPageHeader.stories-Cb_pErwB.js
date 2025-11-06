import{b as c,c as u,j as r,r as m}from"./iframe-DdjuqQRP.js";import{M as f}from"./ModalWrapper-ZScRYO89.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-DjCOV1Q9.js";import{a as l,M as h}from"./ModalPageHeader-CnsVQVns.js";import{M as D}from"./ModalOutlet-dUX8q72K.js";import{P as j}from"./PanelHeaderButton-BFOlH-MZ.js";import{I as P}from"./done_24-Cr_Hz2SJ.js";import{I}from"./cancel_24-BfZOhllk.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-h87Efeih.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CywFefQr.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DYNTcNls.js";import"./Tappable-BrYIPFio.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CMjmakJq.js";import"./useFocusVisibleClassName-DIZrWJUe.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DQHFk4OZ.js";import"./ModalRoot-BNSEk4Bo.js";import"./AppRootPortal-9OX03cZM.js";import"./useColorScheme-CYrptSaC.js";import"./createPortal-DlGqdrzK.js";import"./ColorSchemeProvider-Dc6luGdy.js";import"./ConfigProviderOverride-CI3Q5Goh.js";import"./Placeholder-DIxJ7QIK.js";import"./Headline-nhn3N_7L.js";import"./Title-SR3J6img.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-Db9SnSTj.js";import"./FocusTrap-BGikfNIq.js";import"./useFocusTrap-Citeeza2.js";import"./useMutationObserver-DPXhKAC5.js";import"./ModalOutsideButton-DyTUnBIC.js";import"./ModalOutsideButtons-BhPOpMQU.js";import"./Flex-BRpze9Bb.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DQ0fV1r2.js";import"./cancel_20-CyluBZm1.js";import"./SvgIconRootV2-BHNoZcvi.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-Cc_ff5Nu.js";import"./rubberbandIfOutOfBounds-aE8sUkEu.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const hr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
