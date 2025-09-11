import{b as c,c as u,j as r,r as m}from"./iframe-D9ctG7Ns.js";import{M as f}from"./ModalWrapper-BU0pRc9c.js";import{D as g,C as x}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-BHUjwCTp.js";import{a as l,M as h}from"./ModalPageHeader-UjjMeYWg.js";import{M as D}from"./ModalOutlet-D-t42tjd.js";import{P as j}from"./PanelHeaderButton-BFVrtQgO.js";import{I as P}from"./done_24-CWSVk2B-.js";import{I}from"./cancel_24-oGe7O0m1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-ClDISrDv.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CdhXnMLF.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-XRinxkJw.js";import"./Tappable-DOmAnzcN.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-4xEXwBeB.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-dk1yVFOH.js";import"./ModalRoot-BkGyBVV-.js";import"./AppRootPortal-DZcFVsJe.js";import"./useColorScheme-D5oaSQC0.js";import"./createPortal-DiDQqqFD.js";import"./ColorSchemeProvider-42MwyphL.js";import"./ConfigProviderOverride-BJZJ1bpA.js";import"./Placeholder-BxtPHBZC.js";import"./Headline-4n2ELzS2.js";import"./Title-BxTWQERW.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-CVLN_kqX.js";import"./FocusTrap-CXlwguwW.js";import"./useFocusTrap-DgL23sHD.js";import"./useMutationObserver-qTqSTRf6.js";import"./ModalOutsideButton-DcUelrrc.js";import"./ModalOutsideButtons-Cu_rmbSV.js";import"./Flex-uQiAtQDc.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-BgDWNMPk.js";import"./cancel_20-DqL2mIPO.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-B7uUX9zb.js";import"./rubberbandIfOutOfBounds-mYRcWRl-.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const hr={title:"Modals/ModalPageHeader",component:l,parameters:{...x,...g},decorators:[c],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
