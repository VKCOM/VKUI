import{b as s,c as d,j as r,r as m}from"./iframe-BnACcuaj.js";import{M as l}from"./ModalWrapper-1vrDU0kY.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-D5ExTRCQ.js";import{a as p,M as g}from"./ModalPageHeader-CyprKGxS.js";import{M as x}from"./ModalOutlet-B3v3bvWX.js";import{P as M}from"./PanelHeaderButton-iDUVETp7.js";import{I as h}from"./done_24-D6ZKiczN.js";import{I as D}from"./cancel_24-CBMdiZ42.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DZqU8iPb.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-gYU1puQq.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-UrXKAcy6.js";import"./Tappable-Bp0BqfGQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BArC-ALh.js";import"./useState-Bfn4OdDS.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-l1LH_CPg.js";import"./InputUtils-Bef-cQxi.js";import"./ModalRoot-Zp39wsom.js";import"./AppRootPortal-Cx_aCdV6.js";import"./useColorScheme-DVykw0fJ.js";import"./createPortal-BHYOSBDo.js";import"./ColorSchemeProvider-CDWwKyNi.js";import"./ConfigProviderOverride-BjbSWsz2.js";import"./Placeholder-Bd3u8LE7.js";import"./Headline-B8WUXhnw.js";import"./Title-DyuwQvN-.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-BTzB_P1g.js";import"./FocusTrap-DOaZc2yz.js";import"./useFocusTrap-DjOr2G5J.js";import"./useMutationObserver-BNoG0G4a.js";import"./ModalOutsideButton-Ba7yE7kX.js";import"./ModalOutsideButtons-B0CsRfyg.js";import"./Flex-DDDZ_iE9.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-6jddE_3D.js";import"./cancel_20-B3wvuGis.js";import"./SvgIconRootV2-jVzBhEqh.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-DojkR03R.js";import"./rubberbandIfOutOfBounds-DgyhBSJS.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
