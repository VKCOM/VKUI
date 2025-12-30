import{b as l,c,r as e,j as o}from"./iframe-D-vjmezP.js";import{M as u}from"./ModalWrapper-CbmEju-I.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-B3mltvz-.js";import{M as i,a as x}from"./ModalPageHeader-DD4zDwd4.js";import{M as P}from"./ModalOutlet-BObAFP2N.js";import{P as h}from"./PanelHeaderButton-BODTHbnm.js";import{I as C}from"./done_24-BftqWXfM.js";import{I as j}from"./cancel_24-B55ygFBW.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-iOPheJU3.js";import"./Spinner-CGq4yNx9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Ct4Hq9SY.js";import"./Tappable-DMeLy5rU.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BMFGYTS6.js";import"./useState-D4ynhpUN.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./InputUtils-DJ5DGhwp.js";import"./Placeholder-DLp1pcyI.js";import"./Headline-Dq88a-b4.js";import"./Title-5rqdnq6p.js";import"./useModalManager-CA0_WvXd.js";import"./AppRootPortal-CyZtHULY.js";import"./useColorScheme-B_PTVyib.js";import"./createPortal-Dv77p3HH.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-n4W2EG.js";import"./ConfigProviderOverride-BVw-qRt5.js";import"./ModalCard-B-5X0QCk.js";import"./useAdaptivityWithJSMediaQueries-DevrISR8.js";import"./FocusTrap-bmUu0BLP.js";import"./useMutationObserver-Dd7ppQ1q.js";import"./ModalCardBase-C7UKMQVS.js";import"./ModalOutsideButton-XfLqINuu.js";import"./ModalOutsideButtons-BHPvGVGS.js";import"./Flex-C_be27FX.js";import"./gaps-BRHZAyUc.js";import"./Spacing-Cw7ZXTkR.js";import"./Subhead-DCgRz-zo.js";import"./cancel_20-iVWticgh.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-cJPxsGgW.js";import"./useCSSTransition-DvB-HHcQ.js";import"./v4-EwEgHOG0.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CFBg-_BN.js";import"./rubberbandIfOutOfBounds-CVqKReCD.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Io={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
