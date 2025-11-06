import{b as c,c as u,j as r,r as m}from"./iframe-dTlwAXGa.js";import{M as f}from"./ModalWrapper-Bddydiqa.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-PC6x0Grm.js";import{a as l,M as h}from"./ModalPageHeader-D-tiVqMG.js";import{M as D}from"./ModalOutlet-BuJJSCxP.js";import{P as j}from"./PanelHeaderButton-CaRI3iQC.js";import{I as P}from"./done_24-BguKirHZ.js";import{I}from"./cancel_24-sfpNhjae.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bf3MOszz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Ct1kmwhu.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-JumwXwcS.js";import"./Tappable-qMfTC7Pz.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dl5F7aV_.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CtGJ0DI4.js";import"./ModalRoot-BG8AhbFw.js";import"./AppRootPortal-DvsIiuGf.js";import"./useColorScheme-BL3jX5yR.js";import"./createPortal-HGqhkvd7.js";import"./ColorSchemeProvider-DYm1IVe2.js";import"./ConfigProviderOverride-xMCWz3c3.js";import"./Placeholder-Du55m0ko.js";import"./Headline-nnEuybdp.js";import"./Title-ShBYOT9p.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BTXgLHzl.js";import"./FocusTrap-_q57YEfs.js";import"./useFocusTrap-C9pJFuji.js";import"./useMutationObserver-DdyjCLuO.js";import"./ModalOutsideButton-BTlAj5aR.js";import"./ModalOutsideButtons-D_ladGSn.js";import"./Flex-DdaADNh9.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-B2P9khg7.js";import"./cancel_20-BgBkGEM6.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-lnRvpBqi.js";import"./rubberbandIfOutOfBounds-BMt1a4ED.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Dr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
