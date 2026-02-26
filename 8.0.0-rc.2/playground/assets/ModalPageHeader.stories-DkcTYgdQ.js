import{w as l,B as c,r as e,j as o}from"./iframe-C4bTyPBQ.js";import{M as u}from"./ModalWrapper-DhL-jXn4.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-Be1bc1Az.js";import{M as i,a as x}from"./ModalPageHeader-OYQeRWw9.js";import{M as P}from"./ModalOutlet-DmuEYBxn.js";import{P as h}from"./PanelHeaderButton-DYb8XRuL.js";import{I as C}from"./done_24-BtACfm-T.js";import{I as j}from"./cancel_24-BKCyLyjW.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-D-zltIHu.js";import"./Spinner-CnNDPfa2.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./Tappable-BZW__-HP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./InputUtils-Ns7QNyDT.js";import"./Placeholder-CWU5YLqg.js";import"./Headline-B4T2ew9V.js";import"./Title-CK3YofNd.js";import"./useModalManager-D-eZWJLn.js";import"./AppRootPortal-CWanvcnq.js";import"./useColorScheme-B5qdSLTx.js";import"./createPortal-BVIABMB9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B34yrt0u.js";import"./ConfigProviderOverride-BLhdVd3U.js";import"./randomUUID-CV8jBseQ.js";import"./ModalCard-DvjG-nIP.js";import"./useAdaptivityWithJSMediaQueries-C-6nl7Lu.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-DR0NIrZZ.js";import"./useMutationObserver-Dz5wTjis.js";import"./ModalCardBase-DbiREtYT.js";import"./ModalOutsideButton-jvmF2gHy.js";import"./ModalOutsideButtons-VWc2KEcT.js";import"./Flex-BzibNvH8.js";import"./gaps-BaMG6Eg5.js";import"./Spacing-ffMUESuT.js";import"./Subhead-CGMBr7DJ.js";import"./cancel_20-EIRIx7Ta.js";import"./SvgIconRootV2-DbftVVP5.js";import"./dismiss_24-Cd9gXJpm.js";import"./useCSSTransition-D-ywr4wZ.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-BsG9TUbn.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-Ds51Way3.js";const Ho={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
