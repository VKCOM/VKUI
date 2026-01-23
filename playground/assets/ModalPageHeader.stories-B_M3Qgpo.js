import{b as l,c,r as e,j as o}from"./iframe-BJ9555aC.js";import{M as u}from"./ModalWrapper-CexcN8c9.js";import{D as f,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-BelP9K-l.js";import{M as i,a as x}from"./ModalPageHeader-Bl6EAlAB.js";import{M as P}from"./ModalOutlet-DOohz1vI.js";import{P as h}from"./PanelHeaderButton-BUzE02Lo.js";import{I as C}from"./done_24-CYVwivIG.js";import{I as j}from"./cancel_24-jJgAHgAr.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BbA_I1es.js";import"./Spinner-CsAXLMyU.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BpRJPd7L.js";import"./Tappable-Bz7LtOMO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./InputUtils-8LhFcqKY.js";import"./Placeholder-BWt6HcxE.js";import"./Headline-Bb4b2JBA.js";import"./Title-BmBt_BL_.js";import"./useModalManager-CYMCGjnx.js";import"./AppRootPortal-Du-f4Doj.js";import"./useColorScheme-DvMUZASe.js";import"./createPortal-DbDswA2g.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-QatNCALS.js";import"./ConfigProviderOverride-TDUswttQ.js";import"./ModalCard-BM3t_U71.js";import"./useAdaptivityWithJSMediaQueries-CC96WuMD.js";import"./FocusTrap-Qs6H907S.js";import"./useMutationObserver-B_zcWFq6.js";import"./ModalCardBase-DSf7VeCI.js";import"./ModalOutsideButton-DBJy-eNx.js";import"./ModalOutsideButtons-fpOf_neC.js";import"./Flex-DmNTXycq.js";import"./gaps-DqOl4b8v.js";import"./Spacing-Dy4F7I-W.js";import"./Subhead-ppzL9p3g.js";import"./cancel_20-Bjnkubmw.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./dismiss_24-BDzDjlBI.js";import"./useCSSTransition-DZFjXY5z.js";import"./v4-EwEgHOG0.js";import"./range-rFhSCI5u.js";import"./CustomScrollView-kMAABzAe.js";import"./rubberbandIfOutOfBounds-p3jqOJwK.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Io={title:"Modals/ModalPageHeader",component:i,parameters:{...g,...f},decorators:[l],tags:["Модальные окна"]},s="MODAL_ID",m=({children:p})=>{const{onClose:t}=e.useContext(P);return o.jsx(h,{onClick:()=>t?.(s),children:p})},a={render:function(t){const r=c(),n=e.useCallback(({modalProps:d})=>o.jsx(x,{id:s,header:o.jsx(i,{before:o.jsx(e.Fragment,{children:(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(j,{})})}),after:o.jsxs(e.Fragment,{children:[(r==="android"||r==="vkcom")&&o.jsx(m,{children:o.jsx(C,{})}),r==="ios"&&o.jsx(m,{children:"Готово"})]}),...t,children:"Заголовок модальной страницы"}),...d,children:o.jsx(M,{style:{height:1e3},children:"Example"})}),[t,r]);return o.jsx(u,{type:"page",customModal:n})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
