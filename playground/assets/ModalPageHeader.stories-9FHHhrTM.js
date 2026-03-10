import{w as l,E as c,r as e,j as o}from"./iframe-OAvG3iJ-.js";import{M as u}from"./ModalWrapper-CL7KhHiL.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-B-UZ3w6w.js";import{M as i,a as x}from"./ModalPageHeader-CTgBtG5G.js";import{M as P}from"./ModalOutlet-B_k8xNU4.js";import{P as h}from"./PanelHeaderButton-hsXPaBRD.js";import{I as C}from"./done_24-DRhCYrBB.js";import{I as j}from"./cancel_24-CjsEvKIV.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DKiHHryh.js";import"./Spinner-e4jYbku1.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-W5VCXPiv.js";import"./Tappable-hYlNxVzd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./InputUtils-D-RvHd2H.js";import"./Placeholder-DfwrWGQ1.js";import"./Headline-7nMwixf1.js";import"./Title-AFjtFc-5.js";import"./useModalManager-6iNKG8Bw.js";import"./AppRootPortal-HaNKKXFZ.js";import"./useColorScheme--3xcMoVc.js";import"./createPortal-Ds6gUBZ9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-CiwPFNSE.js";import"./ConfigProviderOverride-D2rmz14r.js";import"./randomUUID-CV8jBseQ.js";import"./ModalCard-Nr8y7RxH.js";import"./useAdaptivityWithJSMediaQueries-BAc2aZfg.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-Ljy-TizN.js";import"./useMutationObserver-CPtolczk.js";import"./ModalCardBase-CS8KXpMZ.js";import"./ModalOutsideButton-CDT9v2cu.js";import"./ModalOutsideButtons-0hY3L8SA.js";import"./Flex-Cfg1JM6V.js";import"./gaps-TC-23xBl.js";import"./Spacing-BBhavnBZ.js";import"./Subhead-Bec_-0uq.js";import"./cancel_20-BkUjsL3a.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-BvHLukGE.js";import"./useCSSTransition-Bh9Zdsw1.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-CzuykHDu.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-rbH9TQRH.js";const Io={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
