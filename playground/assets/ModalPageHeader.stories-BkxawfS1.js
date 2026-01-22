import{b as l,c,r as e,j as o}from"./iframe-BKqRoeRO.js";import{M as u}from"./ModalWrapper-TFyGShKE.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-DMJDrldB.js";import{M as i,a as x}from"./ModalPageHeader-Cf6kPXNj.js";import{M as P}from"./ModalOutlet-Chrx9Yb3.js";import{P as h}from"./PanelHeaderButton-D-iZ99bJ.js";import{I as C}from"./done_24-B0FxN6gT.js";import{I as j}from"./cancel_24-C2B5W1bI.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-U9s7wDQC.js";import"./Spinner-DWSu6VQp.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-B-uFrHKw.js";import"./Tappable-EPRrmr_0.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CadgeLyo.js";import"./useState-Db1sLetb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./InputUtils-CQaATz1N.js";import"./Placeholder-CTu_f0lE.js";import"./Headline-CPNK2PuC.js";import"./Title-j8cVZj0a.js";import"./useModalManager-oLHq4t6U.js";import"./AppRootPortal-Bl-mYqRi.js";import"./useColorScheme-CV37oJpw.js";import"./createPortal-DVslbEs3.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DzGMXO52.js";import"./ConfigProviderOverride-AuipdI0T.js";import"./ModalCard-Cynqql0x.js";import"./useAdaptivityWithJSMediaQueries-BxosUUYi.js";import"./FocusTrap-BrNSy_VJ.js";import"./useMutationObserver-D2T9tvmZ.js";import"./ModalCardBase-BvKjNsC2.js";import"./ModalOutsideButton-5uUDAI0w.js";import"./ModalOutsideButtons-BpSNyU56.js";import"./Flex-CYi1Q5eR.js";import"./gaps-DqOl4b8v.js";import"./Spacing-CjlCtUkG.js";import"./Subhead-B3U-hqtC.js";import"./cancel_20-BK7RGKwT.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-lK4P-V2S.js";import"./useCSSTransition-BVGEBVD3.js";import"./v4-EwEgHOG0.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-LtH4AA1i.js";import"./rubberbandIfOutOfBounds-CwjOtXpl.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Io={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
