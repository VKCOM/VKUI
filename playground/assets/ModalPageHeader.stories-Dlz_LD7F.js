import{b as s,c as d,j as r,r as m}from"./iframe-BqdgnJE0.js";import{M as l}from"./ModalWrapper-CfU5q8YD.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-DwZZolAX.js";import{a as p,M as g}from"./ModalPageHeader-CBjNC_wS.js";import{M as x}from"./ModalOutlet-BzYuHK3_.js";import{P as M}from"./PanelHeaderButton-DR2JVGbW.js";import{I as h}from"./done_24-CEsSfocz.js";import{I as D}from"./cancel_24-DLsb6enM.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BBUIsY6v.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-CHRizUnE.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B5KO6Y_w.js";import"./Tappable-C0ES09y8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-_lommW0d.js";import"./useState-CWGeE8jE.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./InputUtils-ESzsNRN2.js";import"./ModalRoot-BT6y1rr2.js";import"./AppRootPortal-DRaDzdXH.js";import"./useColorScheme-B3VXvXnZ.js";import"./createPortal-CfJRRh6m.js";import"./ColorSchemeProvider-BPL5atgs.js";import"./ConfigProviderOverride-BYZnQAAH.js";import"./Placeholder-Cf1tveA6.js";import"./Headline-ByN4fZVg.js";import"./Title-C5m838CH.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-WhfyAMD8.js";import"./FocusTrap-D8HWFNvo.js";import"./useFocusTrap-DDyVh1XH.js";import"./useMutationObserver-lKnFJcNz.js";import"./ModalOutsideButton-CbzB4wjf.js";import"./ModalOutsideButtons-YLrT21aV.js";import"./Flex-D_HFIPrS.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-CwRuv418.js";import"./cancel_20-DDyQUZ9P.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-Cws446Im.js";import"./rubberbandIfOutOfBounds-CQjn_sIJ.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
