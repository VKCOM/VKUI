import{b as s,c as d,j as r,r as m}from"./iframe-DdZr-4mP.js";import{M as l}from"./ModalWrapper-Dglr6mJt.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-BhOSKXhQ.js";import{a as p,M as g}from"./ModalPageHeader-CGO0WJVZ.js";import{M as x}from"./ModalOutlet-poG6V_Gt.js";import{P as M}from"./PanelHeaderButton-UAIvxmBF.js";import{I as h}from"./done_24-NnOiLW06.js";import{I as D}from"./cancel_24-SB-_Mfon.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BfB_yFLJ.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BjrDa5Np.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./Tappable-CovdKVQt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-J2yyQqq6.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CcKtkKuI.js";import"./ModalRoot-U2SvVJ0q.js";import"./AppRootPortal-C2gdNLsf.js";import"./useColorScheme-DV5aetKH.js";import"./createPortal-rWuLF35z.js";import"./ColorSchemeProvider-IMjSaaWc.js";import"./ConfigProviderOverride-VA0sqvdw.js";import"./Placeholder-Cr090bNy.js";import"./Headline-BSoQthvj.js";import"./Title-D3itgTrb.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DdUq3wQ0.js";import"./FocusTrap-D2jJP0Y_.js";import"./useFocusTrap-C_HnlYsk.js";import"./useMutationObserver-C4v790lX.js";import"./ModalOutsideButton-l8aX31oY.js";import"./ModalOutsideButtons-DjtGCkWS.js";import"./Flex-C8Z68iwv.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-D6gFw0v4.js";import"./cancel_20-CeXwbc9_.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-C5_v_or1.js";import"./rubberbandIfOutOfBounds-uy7F2uLd.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
