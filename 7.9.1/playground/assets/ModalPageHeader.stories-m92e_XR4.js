import{b as s,c as d,j as r,r as m}from"./iframe-DC59t_7s.js";import{M as l}from"./ModalWrapper-BCaeuYTH.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-C8S3oCMc.js";import{a as p,M as g}from"./ModalPageHeader-DE78jAKJ.js";import{M as x}from"./ModalOutlet-BpTbopSq.js";import{P as M}from"./PanelHeaderButton-CmBd8Pyt.js";import{I as h}from"./done_24-BitlX6Op.js";import{I as D}from"./cancel_24-pw3fX9Xb.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-TPmMtPai.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BHxVDILF.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-dUOLTySp.js";import"./Tappable-CRrpYa-n.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-k0omQ8uW.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C5RWily7.js";import"./ModalRoot-BtY5erNo.js";import"./AppRootPortal-CA3u5wJU.js";import"./useColorScheme-Cf0PiwGW.js";import"./createPortal-2R_X9sVy.js";import"./ColorSchemeProvider-BtWhZJq6.js";import"./ConfigProviderOverride-i8pjibUq.js";import"./Placeholder-CLBGRurs.js";import"./Headline-bNrKkYhC.js";import"./Title-DbXaHY-Y.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-CXxDEdZF.js";import"./FocusTrap-CGKFwjPV.js";import"./useFocusTrap-Cjt3r7rt.js";import"./useMutationObserver-D8gt_rME.js";import"./ModalOutsideButton-C4DuqENb.js";import"./ModalOutsideButtons-5iB3cNvf.js";import"./Flex-DWfXF-df.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-DqxqicWb.js";import"./cancel_20-CEVqavSt.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-BXbpAcIR.js";import"./rubberbandIfOutOfBounds-2kGdFioJ.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
