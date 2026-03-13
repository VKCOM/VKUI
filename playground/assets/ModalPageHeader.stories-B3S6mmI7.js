import{w as l,B as c,r as e,j as o}from"./iframe-CEhhJuIi.js";import{M as u}from"./ModalWrapper-BpNtqvKD.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-Boz_VcR4.js";import{M as i,a as x}from"./ModalPageHeader-DcZ78kjZ.js";import{M as P}from"./ModalOutlet-rf3KLdig.js";import{P as h}from"./PanelHeaderButton-Td-2TVdV.js";import{I as C}from"./done_24-DPzJ7hqU.js";import{I as j}from"./cancel_24-CHfH8s1a.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-VHcOoYjV.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-C8mKPATK.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BYulTkKK.js";import"./Tappable-CTSOdpDd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSDkuBjh.js";import"./useState-BlpMLPZb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./InputUtils-CN8Bpeve.js";import"./Placeholder-CYZY3gOe.js";import"./Headline-C97-pQ4K.js";import"./Title-gWx-KNT-.js";import"./useModalManager-W4kBVWoo.js";import"./AppRootPortal-uzyAKSZM.js";import"./useColorScheme-C52TR78y.js";import"./createPortal-BD13EKcF.js";import"./ColorSchemeProvider-fCsC8sPd.js";import"./ConfigProviderOverride-CSnPmu4b.js";import"./randomUUID-CV8jBseQ.js";import"./ModalCard-CqTDttwj.js";import"./useAdaptivityWithJSMediaQueries-BSZTJLQt.js";import"./warnOnce-BsOPdcXO.js";import"./FocusTrap-Bmt_IN1l.js";import"./useMutationObserver-L83qy9tM.js";import"./ModalCardBase-DW7rhn4Y.js";import"./ModalOutsideButton-CPtMBssn.js";import"./ModalOutsideButtons-CVOyzyFQ.js";import"./Flex-DGSr3jA3.js";import"./gaps-TC-23xBl.js";import"./Spacing-JbgQa08E.js";import"./Subhead-4zP8hIFm.js";import"./cancel_20-B93q7ALF.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-DzMwRLYX.js";import"./useCSSTransition-DWaFlPsh.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-Bcc3tVi5.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";import"./rubberbandIfOutOfBounds-D-LdOANG.js";const Io={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
