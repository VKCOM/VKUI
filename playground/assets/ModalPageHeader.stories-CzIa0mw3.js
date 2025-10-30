import{b as s,c as d,j as r,r as m}from"./iframe-CjlHPZNU.js";import{M as l}from"./ModalWrapper-Gd0jqFbo.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-BZ1YOreV.js";import{a as p,M as g}from"./ModalPageHeader-Cb7Z2kLH.js";import{M as x}from"./ModalOutlet-DVZb1YbX.js";import{P as M}from"./PanelHeaderButton-Xzu1VoMK.js";import{I as h}from"./done_24-Do7WiqV_.js";import{I as D}from"./cancel_24-DoQTGG5W.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-eWkGETfu.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BqL1JLHM.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BhHQTREx.js";import"./Tappable-B5zgJODm.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CtpofEGa.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DGnaA_Jg.js";import"./ModalRoot-ByWMUM-s.js";import"./AppRootPortal-D2B8wiWM.js";import"./useColorScheme-BIeu6EL3.js";import"./createPortal-CZhxf4lQ.js";import"./ColorSchemeProvider-DgPkTADU.js";import"./ConfigProviderOverride-BAEtQBTT.js";import"./Placeholder-Cd0K4Q7a.js";import"./Headline-5QXk0_9F.js";import"./Title-GMDilNWH.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-B1Mjiuqa.js";import"./FocusTrap-juMAmhQs.js";import"./useFocusTrap-Bi2qV_ik.js";import"./useMutationObserver-CeFU5bUT.js";import"./ModalOutsideButton-CWw8gd7_.js";import"./ModalOutsideButtons-Cfg4ZB76.js";import"./Flex-B5ulvuRF.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-CjlOR93R.js";import"./cancel_20-Dldf5zFa.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-DqEcwnov.js";import"./rubberbandIfOutOfBounds-B0zJCW86.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const Mr=["Playground"];export{t as Playground,Mr as __namedExportsOrder,xr as default};
