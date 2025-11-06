import{b as s,c as d,j as r,r as m}from"./iframe-DcUCz3Gq.js";import{M as l}from"./ModalWrapper-ClwkLHNA.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-DK6pA_dL.js";import{a as p,M as g}from"./ModalPageHeader-Bnt95lCK.js";import{M as x}from"./ModalOutlet-9tQ_78ij.js";import{P as M}from"./PanelHeaderButton-CO3IJ1zl.js";import{I as h}from"./done_24-EPL_X--4.js";import{I as D}from"./cancel_24-DyhNO7vT.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BU_mp-AO.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DB1TcyOv.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-IsgabQ9w.js";import"./Tappable-CGnYgxpx.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dt7ctke5.js";import"./ModalRoot-CMvHFlab.js";import"./AppRootPortal-Uj7JA9BA.js";import"./useColorScheme-DrgIsgMO.js";import"./createPortal-DltXdHJc.js";import"./ColorSchemeProvider-CpsSWhwy.js";import"./ConfigProviderOverride-BiHuZVLC.js";import"./Placeholder-6i7dJVuv.js";import"./Headline-_bBT78y6.js";import"./Title-Cb6EL7Un.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-DBwHTVjj.js";import"./FocusTrap-i28PizB0.js";import"./useFocusTrap-SSRd9KwO.js";import"./useMutationObserver-BO5feLdl.js";import"./ModalOutsideButton-D7UE7j83.js";import"./ModalOutsideButtons-BbewSR7a.js";import"./Flex-Y1k2ohIq.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-CYwznZ8r.js";import"./cancel_20-CKi960W_.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-BFzfrHGr.js";import"./rubberbandIfOutOfBounds-DcB6JHzf.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
