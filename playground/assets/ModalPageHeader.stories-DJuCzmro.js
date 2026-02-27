import{w as l,E as c,r as e,j as o}from"./iframe-Cn0klKvz.js";import{M as u}from"./ModalWrapper-6NNWcMnk.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-C6CxOCne.js";import{M as i,a as x}from"./ModalPageHeader-qxJP0x-H.js";import{M as P}from"./ModalOutlet-C70PrzKg.js";import{P as h}from"./PanelHeaderButton-BYqA14CU.js";import{I as C}from"./done_24-Ctb4GlzO.js";import{I as j}from"./cancel_24-C8myLtmO.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-D37nVvnc.js";import"./Spinner-Dez3qxwZ.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-C9tNf48m.js";import"./Tappable-CVh4vgq8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./InputUtils-B6qCikuW.js";import"./Placeholder-5svb3Wh1.js";import"./Headline-DgEMhIVy.js";import"./Title-C-xuvkmu.js";import"./useModalManager-BmhRrZ4N.js";import"./AppRootPortal-DrN2viSO.js";import"./useColorScheme-C7zCwRzY.js";import"./createPortal-CeijUj_q.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-Blw8FFCv.js";import"./ConfigProviderOverride-CSeOrjpg.js";import"./randomUUID-CV8jBseQ.js";import"./ModalCard-3UszaYoi.js";import"./useAdaptivityWithJSMediaQueries-DDw_TnXg.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-DkOYwnnY.js";import"./useMutationObserver-COKUuFT-.js";import"./ModalCardBase-CKb0tgJE.js";import"./ModalOutsideButton-B0-Dn9gH.js";import"./ModalOutsideButtons-CV2JPNX-.js";import"./Flex-BH7NtNud.js";import"./gaps-BaMG6Eg5.js";import"./Spacing-k48zXNFX.js";import"./Subhead-BQyoBjlR.js";import"./cancel_20-7x4VuNbl.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./dismiss_24-BoeVLlmb.js";import"./useCSSTransition-8X7oT1VZ.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-DDpGxQa7.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-HN3XvvMQ.js";const Ho={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
