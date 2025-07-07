import{b as c,d as u,j as r,r as m}from"./iframe-DTUKIQpa.js";import{M as f}from"./ModalWrapper-BATXrIiD.js";import{D as x,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-B72Y_Vxp.js";import{a as l,M as h}from"./ModalPageHeader-Cc3Soyoj.js";import{M as D}from"./ModalOutlet-ukbyAx4h.js";import{P as j}from"./PanelHeaderButton-BFIcF9aa.js";import{I as P}from"./done_24-CgLF8a8t.js";import{I}from"./cancel_24-BG0iu8qf.js";import"./Button-BCF43kbr.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BjJTDPz-.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B0Nb8Auz.js";import"./Tappable-Br6ZM5HO.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DRtJbe2S.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Db1DLuWS.js";import"./ModalRoot-Zz60s3Qk.js";import"./AppRootPortal-DxIJvWMm.js";import"./useColorScheme-BGAH8gMd.js";import"./createPortal-88uciayh.js";import"./ColorSchemeProvider-BX-9CWxv.js";import"./ConfigProviderOverride-CgvCCF7D.js";import"./Placeholder-BEgcLqqM.js";import"./Headline-DPZ9LHy_.js";import"./Title-BNj2Lwrg.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BL-n1V0w.js";import"./FocusTrap-Dj4RiGIf.js";import"./useFocusTrap-D-4PYHeK.js";import"./useMutationObserver-DSnEeQjr.js";import"./ModalOutsideButton-GHm_UzPe.js";import"./ModalOutsideButtons-DaRYM9pY.js";import"./Flex-BfdKrZrN.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-r1BN1p7I.js";import"./cancel_20-DBk6d7f-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-UH6uLjn4.js";import"./useCSSTransition-DLj9J3QY.js";import"./useStateWithPrev-U9GIjbS7.js";import"./rubberbandIfOutOfBounds-nbzuAgYx.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...g,...x},decorators:[c]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
