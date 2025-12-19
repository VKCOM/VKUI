import{b as l,c,r as e,j as o}from"./iframe-CGSrC79H.js";import{M as u}from"./ModalWrapper-BD5c5Ilw.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-lVz1kQ98.js";import{M as i,a as x}from"./ModalPageHeader-utsOxW49.js";import{M as P}from"./ModalOutlet-kdsRlszA.js";import{P as h}from"./PanelHeaderButton-6uIRYiPQ.js";import{I as C}from"./done_24-0mXbMPlI.js";import{I as j}from"./cancel_24-CsoSQ93Z.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-JZGl9x8f.js";import"./Spinner-CLlWSgUI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./Tappable-HtqfSGDW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DvGk0QGJ.js";import"./useState-DzaGsmJ4.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./InputUtils-AL_dRhAR.js";import"./Placeholder-BwVEAOdl.js";import"./Headline-DOU82LYx.js";import"./Title-29M-U6si.js";import"./useModalManager-DZNiWrtM.js";import"./ModalCard-DdPDF4is.js";import"./useAdaptivityWithJSMediaQueries-BUJvlqkO.js";import"./useFocusTrap-DV1LSCZk.js";import"./useMutationObserver-DQTeLLG8.js";import"./ModalCardBase-BvgdvAIb.js";import"./ModalOutsideButton-Bnx0YMbB.js";import"./ModalOutsideButtons-Dp1AFUI3.js";import"./Flex-CmxIyQQi.js";import"./gaps-BRHZAyUc.js";import"./Spacing-CayQBnFg.js";import"./Subhead-BDUGOuQB.js";import"./cancel_20-DjKl2jbE.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-dGbtMLh9.js";import"./useCSSTransition-mbGsAhvL.js";import"./AppRootPortal-D8fiuoF8.js";import"./useColorScheme-DM7MWYfE.js";import"./createPortal-CrUV0Jad.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-zZt_kTkY.js";import"./ConfigProviderOverride-DO-HeAeb.js";import"./v4-BKrj-4V8.js";import"./range-rFhSCI5u.js";import"./FocusTrap-CmZUL0KU.js";import"./CustomScrollView-ClAxltNi.js";import"./rubberbandIfOutOfBounds-Dj2OyPbD.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const yo={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Ro=["Playground"];export{a as Playground,Ro as __namedExportsOrder,yo as default};
