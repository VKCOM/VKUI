import{b as l,c,r as e,j as o}from"./iframe-DP0c1f9Y.js";import{M as u}from"./ModalWrapper-BMtyQHEG.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-BlHtRliV.js";import{M as i,a as x}from"./ModalPageHeader-BnIETAUf.js";import{M as P}from"./ModalOutlet-BQtHAZrm.js";import{P as h}from"./PanelHeaderButton-Dmn8Tjst.js";import{I as C}from"./done_24-BnU2CKOj.js";import{I as j}from"./cancel_24-Cb6nnPMq.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DYe3R3CT.js";import"./Spinner-Bk4bS91d.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CsBByQHJ.js";import"./Tappable-B2ZLiGfg.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./InputUtils-DpvhaK12.js";import"./Placeholder-BgGYQGcM.js";import"./Headline-D5yVS7YY.js";import"./Title-S_74tDbu.js";import"./useModalManager-DZfT1Jak.js";import"./AppRootPortal-DtFYcz06.js";import"./useColorScheme-DuZucal0.js";import"./createPortal-DvBpJvds.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-BsiYmjTD.js";import"./ConfigProviderOverride-Dv9z0Xug.js";import"./ModalCard-CkJxGxOq.js";import"./useAdaptivityWithJSMediaQueries-DHEYn_LX.js";import"./FocusTrap-F0reUUyC.js";import"./useMutationObserver-tL6yc0PX.js";import"./ModalCardBase-R68_vtFU.js";import"./ModalOutsideButton-ww0fMYzM.js";import"./ModalOutsideButtons-Dtz-0vpU.js";import"./Flex-C--pQgbh.js";import"./gaps-BRHZAyUc.js";import"./Spacing-BYUv_0Qg.js";import"./Subhead-CZ6CT0II.js";import"./cancel_20-BdALp2jd.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./dismiss_24--0GSOPy5.js";import"./useCSSTransition-DCXVYVRd.js";import"./v4-EwEgHOG0.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CCCcf5Bk.js";import"./rubberbandIfOutOfBounds-BUiiYM3M.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Ho={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Io=["Playground"];export{a as Playground,Io as __namedExportsOrder,Ho as default};
