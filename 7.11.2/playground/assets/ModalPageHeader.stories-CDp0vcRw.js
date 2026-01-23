import{b as s,c as d,j as r,r as m}from"./iframe-KtxhC7Vu.js";import{M as l}from"./ModalWrapper-CjX4jtZ5.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-Cl3VjR5_.js";import{a as p,M as g}from"./ModalPageHeader-TRxOhPzD.js";import{M as x}from"./ModalOutlet-tw76lkAd.js";import{P as M}from"./PanelHeaderButton-C5TbqC5W.js";import{I as h}from"./done_24-CHGucVJd.js";import{I as D}from"./cancel_24-B2bpUHqP.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Md1sLJHS.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-kWF4Wnla.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-8TqRJKxj.js";import"./Tappable-BHKu77gD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-zoSQNYwS.js";import"./useState-D1V9wQJY.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./InputUtils-BueJ8J_Y.js";import"./ModalRoot-CMmldYER.js";import"./AppRootPortal-CebRltsZ.js";import"./useColorScheme-Ujmv4Cvg.js";import"./createPortal-Tz19WZo6.js";import"./ColorSchemeProvider-B2dHDCmM.js";import"./ConfigProviderOverride-ieUFn-Fm.js";import"./Placeholder-qtDVw2Ab.js";import"./Headline-DXbYuoNY.js";import"./Title-Cl0PGkVH.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DB7vOVMe.js";import"./FocusTrap-D7WS1G7k.js";import"./useFocusTrap-C5b8ZMwl.js";import"./useMutationObserver-gH8v0RQA.js";import"./ModalOutsideButton-D3a4iliN.js";import"./ModalOutsideButtons-yy90OgdC.js";import"./Flex-jB_UG0ci.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DbnS4Q0q.js";import"./cancel_20-BDeSZaCv.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-CIvm8_YP.js";import"./rubberbandIfOutOfBounds-CSt9RCic.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
