import{b as c,d as u,j as r,r as m}from"./iframe-A37C1jR-.js";import{M as f}from"./ModalWrapper-WnqlEVi1.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-DXQgKS_4.js";import{a as l,M as h}from"./ModalPageHeader-qZzNMW72.js";import{M as D}from"./ModalOutlet-DvmRKdF5.js";import{P as j}from"./PanelHeaderButton-DbPVlTUR.js";import{I as P}from"./done_24-cDxC1rP0.js";import{I}from"./cancel_24-Cwv97N5Z.js";import"./Button-DupvSECF.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CS7OnS2c.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DX4ud0qi.js";import"./Tappable-bphv_Btw.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-yIrZH96-.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C1lt5OkO.js";import"./ModalRoot-zHBRUvYi.js";import"./AppRootPortal-DBF1tBzb.js";import"./useColorScheme-AJAxISWR.js";import"./createPortal-CMKk957J.js";import"./ColorSchemeProvider-DrI_6v3H.js";import"./ConfigProviderOverride-Bu8U2Yft.js";import"./Placeholder-igZHmR7O.js";import"./Headline-CWoDuoSH.js";import"./Title-CFAhKLGN.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BVTDvUs3.js";import"./FocusTrap-BYqeWfp-.js";import"./useFocusTrap-dFkQ6BrA.js";import"./useMutationObserver-DrADQeuc.js";import"./ModalOutsideButton-D7LkLx6B.js";import"./ModalOutsideButtons-DcxHYwwS.js";import"./Flex-4bjdSLMn.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-BZY8tbQd.js";import"./cancel_20-BjLxzpyN.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-qP_PfTnQ.js";import"./useCSSTransition-CijnnewU.js";import"./useStateWithPrev-DfKtIxym.js";import"./rubberbandIfOutOfBounds-Cy9NFyGy.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const hr=["Playground"];export{e as Playground,hr as __namedExportsOrder,Mr as default};
