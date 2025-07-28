import{b as c,d as u,j as r,r as m}from"./iframe-CGpIZMk8.js";import{M as f}from"./ModalWrapper-DIcMCMJ9.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-cCW-yehp.js";import{a as l,M as h}from"./ModalPageHeader-UqA15M-L.js";import{M as D}from"./ModalOutlet-CvbvXQmu.js";import{P as j}from"./PanelHeaderButton-HTx-07Vp.js";import{I as P}from"./done_24-LllbmcZ6.js";import{I}from"./cancel_24-X3lt1W_w.js";import"./Button-7GGfFD7v.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DVykHsGf.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CdBh7Iry.js";import"./Tappable-BEdABn7b.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D9pe1RI2.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Z7In03iI.js";import"./ModalRoot-DgvIcPTs.js";import"./AppRootPortal-DYl1v_5E.js";import"./useColorScheme-B2GHpbyp.js";import"./createPortal-1frpuduZ.js";import"./ColorSchemeProvider-6omxxyDL.js";import"./ConfigProviderOverride-CIbbMeWE.js";import"./Placeholder-DhFwRguk.js";import"./Headline-ZBoX0yvc.js";import"./Title-Bh0cFv1G.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-Cs0A3l0p.js";import"./FocusTrap-DHMaFiMs.js";import"./useFocusTrap-BKkUzoSR.js";import"./useMutationObserver-Q739XKZZ.js";import"./ModalOutsideButton-BJqCBygL.js";import"./ModalOutsideButtons-B0653Mgb.js";import"./Flex-CMCwGEL1.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DHhB_4V_.js";import"./cancel_20-D13xvjyJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./useCSSTransition-CHAmS1g7.js";import"./useStateWithPrev-a925luGf.js";import"./rubberbandIfOutOfBounds-xWaNGnd4.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const hr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(args) {
    const platform = usePlatform();
    return <ModalWrapper modalId={MODAL_ID}>
        <ModalPage id={MODAL_ID} header={<ModalPageHeader before={<React.Fragment>
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
            </ModalPageHeader>}>
          <Div style={{
          height: 1000
        }}>Example</Div>
        </ModalPage>
      </ModalWrapper>;
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const Dr=["Playground"];export{e as Playground,Dr as __namedExportsOrder,hr as default};
