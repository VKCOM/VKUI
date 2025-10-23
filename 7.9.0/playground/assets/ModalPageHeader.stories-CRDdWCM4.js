import{b as s,c as d,j as r,r as m}from"./iframe-BdXaAE5r.js";import{M as l}from"./ModalWrapper-CqiOozLo.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-D4YhIzYC.js";import{a as p,M as g}from"./ModalPageHeader-BSbpSRJ7.js";import{M as x}from"./ModalOutlet-CfvR9neL.js";import{P as M}from"./PanelHeaderButton-CbMX-UYA.js";import{I as h}from"./done_24-Dl2Hvoxq.js";import{I as D}from"./cancel_24-Cel532NE.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BXQ5RzYy.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Dsao1b5l.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DcQJc2es.js";import"./Tappable-DfpzQKhB.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-0nFsuW3k.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils--HRLtXJo.js";import"./ModalRoot-cDBkh-ev.js";import"./AppRootPortal-CUn3WEk3.js";import"./useColorScheme-CR-44NGe.js";import"./createPortal-twf3JG26.js";import"./ColorSchemeProvider-BFJTPUcN.js";import"./ConfigProviderOverride-BDqJysYU.js";import"./Placeholder-Cz220zUj.js";import"./Headline-DW4C0RJJ.js";import"./Title-CkdPFRXw.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-GfnUu_-K.js";import"./FocusTrap-CbZlzKqw.js";import"./useFocusTrap-D-fzHl7s.js";import"./useMutationObserver-epbeXk19.js";import"./ModalOutsideButton-J9q69uCk.js";import"./ModalOutsideButtons-D3_mIoKK.js";import"./Flex-A11EO6LS.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-CMGGh_2P.js";import"./cancel_20-skegj2Uy.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-7A7Nq4-v.js";import"./rubberbandIfOutOfBounds-CXx9Ip9b.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
