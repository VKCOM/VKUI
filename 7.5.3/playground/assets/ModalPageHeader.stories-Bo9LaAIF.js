import{b as c,d as u,j as r,r as m}from"./iframe-VQuwIBim.js";import{M as f}from"./ModalWrapper-DLAvB1DW.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-D-5DCfD7.js";import{a as l,M as h}from"./ModalPageHeader-aliNxDfk.js";import{M as D}from"./ModalOutlet-BdVxwRns.js";import{P as j}from"./PanelHeaderButton-DJT3S1vC.js";import{I as P}from"./done_24-DgS-t7MA.js";import{I}from"./cancel_24-76PwI_pT.js";import"./Button-DX8vp4-B.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-D45v6N1-.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Bn9barOE.js";import"./Tappable-DJKRXU4j.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-GKvDpg7c.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-esLGIMz7.js";import"./ModalRoot-Cj711V1A.js";import"./AppRootPortal-Cj8kaYA6.js";import"./useColorScheme-3PoJfbUB.js";import"./createPortal-CagxG8Ef.js";import"./ColorSchemeProvider-CD6Xwm8-.js";import"./ConfigProviderOverride-CgHQ0Bf4.js";import"./Placeholder-Ch9PweN9.js";import"./Headline-DlMci9v_.js";import"./Title-kPzeN8_R.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BjOFSdMl.js";import"./FocusTrap-C7Qtn-Or.js";import"./useFocusTrap-CDU-PFFW.js";import"./useMutationObserver-BvI-8POZ.js";import"./ModalOutsideButton-Cymq4YE1.js";import"./ModalOutsideButtons-B23x-Qgn.js";import"./Flex-kPD-kOt0.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-B8oa2wyV.js";import"./cancel_20-Bn882zle.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./useCSSTransition-2aoyquv2.js";import"./useStateWithPrev-CGNjumc_.js";import"./rubberbandIfOutOfBounds-DBaTdNbg.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const hr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
