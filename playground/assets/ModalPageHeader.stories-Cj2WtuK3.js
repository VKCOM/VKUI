import{b as c,c as u,j as r,r as m}from"./iframe-Bz8JpgqB.js";import{M as f}from"./ModalWrapper-8hBSg0q4.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-1ywPeYj4.js";import{a as l,M as h}from"./ModalPageHeader-Ck9YR4Ig.js";import{M as D}from"./ModalOutlet-CVcgJKZZ.js";import{P as j}from"./PanelHeaderButton-wyBE9soL.js";import{I as P}from"./done_24-DTyq8zhU.js";import{I}from"./cancel_24-RdK71gIA.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BGNgkvlW.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BdNNxg7b.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Civmtkn4.js";import"./Tappable-DGSycWIS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C8sAptP9.js";import"./useFocusVisible-DI7o-w5D.js";import"./useFocusVisibleClassName-DeYZ6Bju.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C36z3TAr.js";import"./ModalRoot-B3i-MH1N.js";import"./AppRootPortal-BfEQGkF-.js";import"./useColorScheme-DVyOIIkN.js";import"./createPortal-5lj2qVdy.js";import"./ColorSchemeProvider-CDk5uzXv.js";import"./ConfigProviderOverride-iG9hzCRC.js";import"./Placeholder-DlD4On3o.js";import"./Headline-DOUR4p3R.js";import"./Title-D2iv6BIz.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DIShpTb8.js";import"./FocusTrap-Bu8gLkMP.js";import"./useFocusTrap-D3h3c3Xu.js";import"./useMutationObserver-DIWA9g1F.js";import"./ModalOutsideButton-DBYapytr.js";import"./ModalOutsideButtons-CU1xB4c_.js";import"./Flex-DGGiNY0p.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-1nNv19Yp.js";import"./cancel_20-D-A17ZjK.js";import"./SvgIconRootV2-PiPT7FW9.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-Ctutl9qe.js";import"./rubberbandIfOutOfBounds-CyhpeA28.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Dr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const jr=["Playground"];export{e as Playground,jr as __namedExportsOrder,Dr as default};
