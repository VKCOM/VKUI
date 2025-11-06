import{b as c,c as u,j as r,r as m}from"./iframe-OJ1C6fMc.js";import{M as f}from"./ModalWrapper-BcxZYnCQ.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-BrHsqYW3.js";import{a as l,M as h}from"./ModalPageHeader-Dvt5Dflu.js";import{M as D}from"./ModalOutlet-CwSp-pZ7.js";import{P as j}from"./PanelHeaderButton-CxCCV7w2.js";import{I as P}from"./done_24-Clxnm_z2.js";import{I}from"./cancel_24-DkgWneF3.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CRQbp7pl.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-B_HHBggy.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BNf-15JI.js";import"./Tappable-BvI9Mb-u.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DKzQKlVj.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CNd9WeYt.js";import"./ModalRoot-BMY4DkLv.js";import"./AppRootPortal-BQNLj1SY.js";import"./useColorScheme-Bl13B3Wz.js";import"./createPortal-BUdXaYYW.js";import"./ColorSchemeProvider-CI-3hzwt.js";import"./ConfigProviderOverride-iLzFNrjD.js";import"./Placeholder-D_SPEGmT.js";import"./Headline-BAyAnA5C.js";import"./Title-DVdp6jeh.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DTGhZ3Dx.js";import"./FocusTrap-D7VNxV-L.js";import"./useFocusTrap-BOUMNou6.js";import"./useMutationObserver-bZJaBeyU.js";import"./ModalOutsideButton-DmgwXJJf.js";import"./ModalOutsideButtons-DW05RigU.js";import"./Flex-B0i5mlpK.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DD3vDONo.js";import"./cancel_20-bc_bfQjG.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-C5KCjSeQ.js";import"./rubberbandIfOutOfBounds-CH_Tr2dp.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const hr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
