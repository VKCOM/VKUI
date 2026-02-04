import{w as l,B as c,r as e,j as o}from"./iframe-CDzsgUJ6.js";import{M as u}from"./ModalWrapper-VMJJkBMC.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-DLn9z0wB.js";import{M as i,a as x}from"./ModalPageHeader-DHG2a8HR.js";import{M as P}from"./ModalOutlet-CW2gz89b.js";import{P as h}from"./PanelHeaderButton-CXrOsb3Q.js";import{I as C}from"./done_24-CyBedsvn.js";import{I as j}from"./cancel_24-D42vZ9MX.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DrWhGNV0.js";import"./Spinner-D6Csl20o.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-hrbUbT1W.js";import"./Tappable-BF8rCM_k.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-Dfoj99Ww.js";import"./useState-QDdZr02K.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./InputUtils-DkBsdccT.js";import"./Placeholder-BKy16_te.js";import"./Headline-BViG_F4T.js";import"./Title-Q5c-cjF2.js";import"./useModalManager-D9XEg_oh.js";import"./AppRootPortal-CCVAQZe-.js";import"./useColorScheme-BJ9q12Ap.js";import"./createPortal-CVhd8q9v.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DTaIndt4.js";import"./ConfigProviderOverride-CcLe0DKj.js";import"./randomUUID-CV8jBseQ.js";import"./ModalCard-CmnFa5YA.js";import"./useAdaptivityWithJSMediaQueries-BZLT_GPt.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-CkAGPt26.js";import"./useMutationObserver-BHxydzuf.js";import"./ModalCardBase-pcy6sp34.js";import"./ModalOutsideButton-2fkvMand.js";import"./ModalOutsideButtons-BJy9bJRz.js";import"./Flex-BmPCO_o2.js";import"./gaps-DqOl4b8v.js";import"./Spacing-_QM_7Dgd.js";import"./Subhead-BNbydgjR.js";import"./cancel_20-D84dgfvI.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-C8cpJD2q.js";import"./useCSSTransition-Cuj6zgvn.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CzqE7nP0.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-C9pyzeP7.js";const Io={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const platform = usePlatform();
    const CustomModal = React.useCallback(({
      modalProps
    }: CustomModalProps<OpenModalPageProps>) => {
      return <ModalPage id={MODAL_ID} header={<ModalPageHeader before={<React.Fragment>
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
              </ModalPageHeader>} {...modalProps}>
            <Div style={{
          height: 1000
        }}>Example</Div>
          </ModalPage>;
    }, [args, platform]);
    return <ModalWrapper type="page" customModal={CustomModal} />;
  }
}`,...a.parameters?.docs?.source}}};const yo=["Playground"];export{a as Playground,yo as __namedExportsOrder,Io as default};
