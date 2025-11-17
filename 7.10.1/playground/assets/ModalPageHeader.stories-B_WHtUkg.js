import{b as s,c as d,j as r,r as m}from"./iframe-DhuutAfC.js";import{M as l}from"./ModalWrapper-BHBkYBYu.js";import{D as c,C as u}from"./constants-DdkjnEgz.js";import{D as f}from"./Div-BKcZLB21.js";import{a as p,M as g}from"./ModalPageHeader-Dwu5Mmt_.js";import{M as x}from"./ModalOutlet-BA2KN2z2.js";import{P as M}from"./PanelHeaderButton-DP4D98Cl.js";import{I as h}from"./done_24-CX2R_UC_.js";import{I as D}from"./cancel_24-DOIBb5nA.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Id7-fKaz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-gmUVON3e.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BkhWnsJf.js";import"./Tappable-tvWVp5xX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./InputUtils-BcFat9xH.js";import"./ModalRoot-CG8JjfPx.js";import"./AppRootPortal-BhnEIrq-.js";import"./useColorScheme-BGUvzePH.js";import"./createPortal-BLvM0w_F.js";import"./ColorSchemeProvider-DdceUlQQ.js";import"./ConfigProviderOverride-CpU6P7F6.js";import"./Placeholder-CInxaJ3f.js";import"./Headline-CY9tv16R.js";import"./Title-BixyGD4w.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-PQkukbX_.js";import"./FocusTrap-Cntepomh.js";import"./useFocusTrap-CdCdrgV_.js";import"./useMutationObserver-9Zmysq9a.js";import"./ModalOutsideButton-Bk0K0461.js";import"./ModalOutsideButtons-B1U4l_P0.js";import"./Flex-DMMHnnCT.js";import"./gaps-BRHZAyUc.js";import"./CustomScrollView-LJROjlfk.js";import"./cancel_20-DekKUuuy.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./useCSSTransition-DOz5X9Xl.js";import"./rubberbandIfOutOfBounds-B1cfaMzr.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const xr={title:"Modals/ModalPageHeader",component:p,parameters:{...u,...c},decorators:[s],tags:["Модальные окна"]},n="MODAL_ID",a=({children:i})=>{const{onClose:e}=m.useContext(x);return r.jsx(M,{onClick:()=>e?.(n),children:i})},t={render:function(e){const o=d();return r.jsx(l,{modalId:n,children:r.jsx(g,{id:n,header:r.jsx(p,{before:r.jsx(m.Fragment,{children:(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(D,{})})}),after:r.jsxs(m.Fragment,{children:[(o==="android"||o==="vkcom")&&r.jsx(a,{children:r.jsx(h,{})}),o==="ios"&&r.jsx(a,{children:"Готово"})]}),...e,children:"Заголовок модальной страницы"}),children:r.jsx(f,{style:{height:1e3},children:"Example"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
