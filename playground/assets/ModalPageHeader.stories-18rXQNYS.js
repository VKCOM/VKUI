import{b as l,c,r as e,j as o}from"./iframe-qlSEKL6e.js";import{M as u}from"./ModalWrapper-nw2b5se_.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-DdcHZy0r.js";import{M as i,a as x}from"./ModalPageHeader-BsjkDBtT.js";import{M as P}from"./ModalOutlet-DOle8WYH.js";import{P as h}from"./PanelHeaderButton-C_brz2Sq.js";import{I as C}from"./done_24-yTqpKIJw.js";import{I as j}from"./cancel_24-cnh7cOD_.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DRTEtUEH.js";import"./Spinner-BoZXPbho.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-Bk8azc-l.js";import"./Tappable-BHeAowlI.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D1c0nrMo.js";import"./useState-C_16qP2U.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BSdd-gmN.js";import"./InputUtils-vU1H8cid.js";import"./Placeholder-DISFa3wp.js";import"./Headline-CGptYocR.js";import"./Title-DQXLato0.js";import"./useModalManager-CyrwGK0p.js";import"./AppRootPortal-Bj-vg1zq.js";import"./useColorScheme-BxcR7ZEW.js";import"./createPortal-CvpuS67o.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-C-9YDCpQ.js";import"./ConfigProviderOverride-DnQqijVu.js";import"./ModalCard-htaezRKd.js";import"./useAdaptivityWithJSMediaQueries-BAcI0DRk.js";import"./FocusTrap-Di6whJjK.js";import"./useMutationObserver-Cxb7eptU.js";import"./ModalCardBase-3-OFPyDY.js";import"./ModalOutsideButton-BgFF_b_K.js";import"./ModalOutsideButtons-B6ESNczb.js";import"./Flex-66O37q5H.js";import"./gaps-DqOl4b8v.js";import"./Spacing-6DCescNL.js";import"./Subhead-B_pgjgAK.js";import"./cancel_20-DL6m0O7F.js";import"./SvgIconRootV2-DNGE9nnc.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-B4OM6Xva.js";import"./useCSSTransition-CDr2H6QM.js";import"./v4-EwEgHOG0.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-Cz-uOj3n.js";import"./rubberbandIfOutOfBounds-gPdXBcnO.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Io={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
