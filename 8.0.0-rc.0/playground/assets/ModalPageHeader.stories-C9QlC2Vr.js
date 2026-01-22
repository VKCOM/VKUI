import{b as l,c,r as e,j as o}from"./iframe-CWLi0Dwx.js";import{M as u}from"./ModalWrapper-D5hIfr5X.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-62HEDd-e.js";import{M as i,a as x}from"./ModalPageHeader-B9cTdNzS.js";import{M as P}from"./ModalOutlet-BbF0XS22.js";import{P as h}from"./PanelHeaderButton-DmnQ5iiZ.js";import{I as C}from"./done_24-Dq-XOX4V.js";import{I as j}from"./cancel_24-k8gLLgTE.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-V1CoOSHU.js";import"./Spinner-ClXGWKNH.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-DcnlEFVn.js";import"./Tappable-BfbUNvge.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-qvNFYhPA.js";import"./useState-B6GpLt4z.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C_mTcJQY.js";import"./InputUtils-y46vV6Lq.js";import"./Placeholder-DWQjvmlc.js";import"./Headline-BBfhp0Vp.js";import"./Title-B966ALEh.js";import"./useModalManager-B7FmDsB1.js";import"./AppRootPortal-DE1zUA1W.js";import"./useColorScheme-BJrTZoRu.js";import"./createPortal-C50FuxQ1.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-rFnFpu.js";import"./ConfigProviderOverride-BG7i4k0t.js";import"./ModalCard-CpPRISdZ.js";import"./useAdaptivityWithJSMediaQueries-QmJKh4aL.js";import"./FocusTrap-sLpD_IpX.js";import"./useMutationObserver-CFeW2Qdk.js";import"./ModalCardBase-DZE4jLzg.js";import"./ModalOutsideButton-A9tBUVJO.js";import"./ModalOutsideButtons-CRP_47d7.js";import"./Flex-BeuW-JMg.js";import"./gaps-DqOl4b8v.js";import"./Spacing-CEh-R4n1.js";import"./Subhead-BNTLgiWX.js";import"./cancel_20-COCIG5IB.js";import"./SvgIconRootV2-BTF9teUl.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-B2pEy1CR.js";import"./useCSSTransition-B1_MEMYc.js";import"./v4-EwEgHOG0.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CTmeeRKm.js";import"./rubberbandIfOutOfBounds-u9OOpROD.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Io={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
